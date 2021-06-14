package websockets

import (
	"github.com/gorilla/websocket"
	"github.com/openspacee/osp/pkg/kube_resource"
	"github.com/openspacee/osp/pkg/model"
	"github.com/openspacee/osp/pkg/redis"
	"k8s.io/klog"
)

type KubeRespWebsocket struct {
	redisOptions  *redis.Options
	middleMessage *kube_resource.MiddleMessage
	cluster       string
	wsConn        *websocket.Conn
	stopped       bool
	models        *model.Models
}

func NewKubeRespWebsocket(cluster string, ws *websocket.Conn, redisOp *redis.Options, models *model.Models) *KubeRespWebsocket {
	middleMsg := kube_resource.NewMiddleMessage(redisOp)
	return &KubeRespWebsocket{
		cluster:       cluster,
		redisOptions:  redisOp,
		middleMessage: middleMsg,
		wsConn:        ws,
		stopped:       false,
		models:        models,
	}
}

func (k *KubeRespWebsocket) Consume() {
	klog.V(1).Info("start consume cluster ", k.cluster)
	go k.WsReceiveMsg()
}

func (k *KubeRespWebsocket) WsReceiveMsg() {
	defer k.Clean()
	for {
		_, data, err := k.wsConn.ReadMessage()
		if err != nil {
			klog.V(1).Info("read err:", err)
			break
		}
		klog.V(1).Infof("read data: %s", string(data))
		midResp, err := kube_resource.UnserialzerMiddleResponse(string(data))
		if err != nil {
			klog.Errorf("unserializer data error: %s", err.Error())
			continue
		}
		if midResp.IsRequest() {
			k.middleMessage.SendResponse(midResp)
		} else if midResp.IsTerm() {
			k.middleMessage.SendTerm(midResp)
		} else if midResp.IsWatch() {
			k.middleMessage.SendWatch(k.cluster, midResp)
		} else if midResp.IsLog() {
			k.middleMessage.SendLog(midResp)
		}
	}
}

func (k *KubeRespWebsocket) Clean() {
	klog.V(1).Infof("start clean kube response cluster %s websocket", k.cluster)
	k.middleMessage.Close()
	k.stopped = true
	k.wsConn.Close()
	klog.V(1).Info("end clean kube response cluster websocket")
}
