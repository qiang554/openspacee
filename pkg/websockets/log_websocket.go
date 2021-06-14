package websockets

import (
	"encoding/base64"
	"github.com/gorilla/websocket"
	"github.com/openspacee/osp/pkg/kube_resource"
	"github.com/openspacee/osp/pkg/redis"
	"github.com/openspacee/osp/pkg/utils"
	"k8s.io/klog"
)

type LogWebsocket struct {
	redisOptions  *redis.Options
	middleMessage *kube_resource.MiddleMessage
	cluster       string
	wsConn        *websocket.Conn
	stopped       bool
	*kube_resource.KubeResources
	namespace string
	pod       string
	container string
	sessionId string
}

func NewLogWebsocket(
	cluster string,
	ws *websocket.Conn,
	redisOp *redis.Options,
	kr *kube_resource.KubeResources,
	namespace, pod, container string) *LogWebsocket {
	middleMsg := kube_resource.NewMiddleMessage(redisOp)
	sessionId := utils.CreateUUID()
	return &LogWebsocket{
		cluster:       cluster,
		redisOptions:  redisOp,
		middleMessage: middleMsg,
		wsConn:        ws,
		KubeResources: kr,
		namespace:     namespace,
		pod:           pod,
		container:     container,
		sessionId:     sessionId,
	}
}

func (l *LogWebsocket) Consume() {
	klog.V(1).Info("start consume log cluster ", l.cluster)
	logParams := map[string]interface{}{
		"namespace":  l.namespace,
		"name":       l.pod,
		"container":  l.container,
		"session_id": l.sessionId,
	}
	resp := l.Pod.OpenLog(l.cluster, logParams)
	if !resp.IsSuccess() {
		l.wsConn.WriteMessage(websocket.TextMessage, []byte(resp.Msg))
		l.wsConn.Close()
		return
	}
	go l.WsReceiveMsg()
	go l.MiddleLogHandle()
}

func (l *LogWebsocket) MiddleLogHandle() {
	klog.V(1).Infof("start receive log session %s", l.sessionId)
	for !l.stopped {
		l.middleMessage.ReceiveLog(l.sessionId, func(data string) {
			d, err := base64.StdEncoding.DecodeString(data)
			if err != nil {
				klog.Errorf("decode log data error: %s", err.Error())
			} else {
				l.wsConn.WriteMessage(websocket.TextMessage, d)
			}
		})
	}
	klog.V(1).Infof("end receive log session %s data", l.sessionId)
}

func (l *LogWebsocket) WsReceiveMsg() {
	defer l.Clean()
	for {
		_, _, err := l.wsConn.ReadMessage()
		if err != nil {
			klog.Error("read err:", err)
			break
		}
	}
}

func (l *LogWebsocket) Clean() {
	klog.V(1).Infof("start clean log cluster %s websocket", l.cluster)
	l.stopped = true
	l.Pod.CloseLog(l.cluster, map[string]interface{}{"session_id": l.sessionId})
	l.middleMessage.Close()
	l.wsConn.Close()
	klog.V(1).Info("end clean log cluster websocket")
}
