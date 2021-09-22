package kube_views

import (
	"bytes"
	"encoding/base64"
	"github.com/gin-gonic/gin"
	"github.com/openspacee/osp/pkg/kube_resource"
	"github.com/openspacee/osp/pkg/model"
	"github.com/openspacee/osp/pkg/model/types"
	"github.com/openspacee/osp/pkg/router/views"
	"github.com/openspacee/osp/pkg/utils"
	"github.com/openspacee/ospagent/pkg/utils/code"
	"helm.sh/helm/v3/pkg/chart/loader"
	"k8s.io/klog"
	"net/http"
	"sigs.k8s.io/yaml"
)

type Helm struct {
	Views []*views.View
	*kube_resource.KubeResources
	models *model.Models
}

func NewHelm(kr *kube_resource.KubeResources, models *model.Models) *Helm {
	helm := &Helm{
		KubeResources: kr,
		models:        models,
	}
	vs := []*views.View{
		views.NewView(http.MethodGet, "/app/list", helm.listApp),
		views.NewView(http.MethodGet, "/app/get", helm.getApp),
		views.NewView(http.MethodGet, "/release/:cluster", helm.list),
		views.NewView(http.MethodGet, "/release/:cluster/get", helm.get),
		views.NewView(http.MethodPost, "/release/:cluster", helm.create),
		views.NewView(http.MethodPut, "/release/:cluster", helm.update),
		views.NewView(http.MethodDelete, "/release/:cluster", helm.delete),
	}
	helm.Views = vs
	helm.models.AppManager.Init()
	return helm
}

func (h *Helm) list(c *views.Context) *utils.Response {
	var ser ListSerializers
	if err := c.ShouldBind(&ser); err != nil {
		return &utils.Response{Code: code.ParamsError, Msg: err.Error()}
	}
	return h.Helm.List(c.Param("cluster"), struct{}{})
}

func (h *Helm) get(c *views.Context) *utils.Response {
	var ser GetSerializers
	if err := c.ShouldBind(&ser); err != nil {
		return &utils.Response{Code: code.ParamsError, Msg: err.Error()}
	}
	reqParams := map[string]interface{}{
		"name":       ser.Name,
		"namespace":  ser.Namespace,
		"get_option": ser.GetOption,
	}
	klog.Info(reqParams)
	return h.Helm.Get(c.Param("cluster"), reqParams)
}

func (h *Helm) create(c *views.Context) *utils.Response {
	var ser CreateAppSerializers
	if err := c.ShouldBind(&ser); err != nil {
		return &utils.Response{Code: code.ParamsError, Msg: err.Error()}
	}

	return h.Helm.Create(c.Param("cluster"), ser)
}

func (h *Helm) update(c *views.Context) *utils.Response {
	var ser CreateAppSerializers
	if err := c.ShouldBind(&ser); err != nil {
		return &utils.Response{Code: code.ParamsError, Msg: err.Error()}
	}

	return h.Helm.UpdateObj(c.Param("cluster"), ser)
}

func (h *Helm) delete(c *views.Context) *utils.Response {
	var ser CreateAppSerializers
	if err := c.ShouldBindQuery(&ser); err != nil {
		return &utils.Response{Code: code.ParamsError, Msg: err.Error()}
	}
	klog.Info(ser)

	return h.Helm.Delete(c.Param("cluster"), ser)
}

func (h *Helm) listApp(c *views.Context) *utils.Response {
	resp := &utils.Response{Code: code.Success}
	var filters map[string]interface{}

	aList, err := h.models.AppManager.List(filters)
	if err != nil {
		resp.Code = code.GetError
		resp.Msg = err.Error()
		return resp
	}

	var apps []*types.App

	for _, a := range aList {
		apps = append(apps, &types.App{
			Name:         a.Name,
			ChartVersion: a.ChartVersion,
			AppVersion:   a.AppVersion,
			Icon:         a.Icon,
			Description:  a.Description,
		})
	}

	resp.Data = apps
	return resp
}

func (h *Helm) getApp(c *views.Context) *utils.Response {
	var ser GetAppSerializers
	if err := c.ShouldBind(&ser); err != nil {
		return &utils.Response{Code: code.ParamsError, Msg: err.Error()}
	}
	klog.Info(ser)

	app, err := h.models.AppManager.Get(ser.Name, ser.ChartVersion)
	if err != nil {
		return &utils.Response{Code: code.GetError, Msg: err.Error()}
	}

	tarDecode, err := base64.StdEncoding.DecodeString(app.Chart)
	if err != nil {
		return &utils.Response{Code: code.GetError, Msg: err.Error()}
	}

	charts, err := loader.LoadArchive(bytes.NewReader(tarDecode))
	if err != nil {
		return &utils.Response{Code: code.GetError, Msg: err.Error()}
	}

	var originValues string

	for _, f := range charts.Raw {
		klog.Info(f.Name)
		if f.Name == "values.yaml" {
			originValues = string(f.Data)
			klog.Info(originValues)
			break
		}
	}

	if originValues != "" {
		valueBytes, err := yaml.Marshal(charts.Values)
		if err != nil {
			originValues = string(valueBytes)
		}
	}

	res := map[string]interface{}{
		"name":          app.Name,
		"chart_version": app.ChartVersion,
		"app_version":   app.AppVersion,
		"icon":          app.Icon,
		"values":        originValues,
	}
	return &utils.Response{Code: code.Success, Data: res}
}

func (h *Helm) GetAppChart(c *gin.Context) {
	res := &utils.Response{Code: code.Success}
	name, _ := c.Params.Get("name")
	chartVersion, _ := c.Params.Get("chart_version")

	app, err := h.models.AppManager.Get(name, chartVersion)
	if err != nil {
		res.Code = code.GetError
		res.Msg = err.Error()
		c.JSON(200, res)
		return
	}
	res.Data = app.Chart
	c.JSON(200, res)
}
