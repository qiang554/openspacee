package kube_views

type ListSerializers struct {
	Cluster       string      `json:"cluster"`
	Name          string      `json:"name"`
	Namespace     string      `json:"namespace"`
	LabelSelector interface{} `json:"label_selector"`
}