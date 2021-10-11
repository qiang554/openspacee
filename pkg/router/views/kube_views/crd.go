package kube_views

import (
	"github.com/openspacee/osp/pkg/kube_resource"
	"github.com/openspacee/osp/pkg/router/views"
	"github.com/openspacee/osp/pkg/utils"
	"github.com/openspacee/osp/pkg/utils/code"
	"net/http"
)

type Crd struct {
	Views []*views.View
	*kube_resource.KubeResources
}

func NewCrd(kr *kube_resource.KubeResources) *Crd {
	crd := &Crd{
		KubeResources: kr,
	}
	vs := []*views.View{
		views.NewView(http.MethodGet, "/:cluster", crd.list),
		views.NewView(http.MethodGet, "/:cluster/:name", crd.get),
	}
	crd.Views = vs
	return crd
}

func (d *Crd) list(c *views.Context) *utils.Response {
	return d.Crd.List(c.Param("cluster"), struct{}{})
}

func (d *Crd) get(c *views.Context) *utils.Response {
	var ser GetSerializers
	if err := c.ShouldBindQuery(&ser); err != nil {
		return &utils.Response{Code: code.ParamsError, Msg: err.Error()}
	}
	reqParams := map[string]interface{}{
		"name":   c.Param("name"),
		"output": ser.Output,
	}
	return d.Crd.Get(c.Param("cluster"), reqParams)
}
