(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2fd7953b"],{"0905":function(e,t,s){"use strict";s.d(t,"b",(function(){return l})),s.d(t,"a",(function(){return i}));var a=s("b775");function l(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",l=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"",i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"",n={};return t&&(n["uid"]=t),s&&(n["kind"]=s),i&&(n["namespace"]=i),l&&(n["name"]=l),Object(a["a"])({url:"event/".concat(e),method:"get",params:n})}function i(e){if(e){var t=e.lastTimestamp;return t||(t=e.firstTimestamp),t||(t=e.metadata.creationTimestamp),{uid:e.metadata.uid,namespace:e.metadata.namespace,count:e.spec?e.spec.count:1,reason:e.reason,message:e.message,type:e.type,object:e.involvedObject,source:e.source,event_time:t,resource_version:e.metadata.resourceVersion}}}},"5be6":function(e,t,s){"use strict";var a=s("b3a9"),l=s.n(a);l.a},8619:function(e,t,s){},"9c8c":function(e,t,s){"use strict";s.r(t);var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("clusterbar",{attrs:{titleName:e.titleName,editFunc:e.getPersistentVolumeClaimYaml}}),s("div",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticClass:"dashboard-container"},[s("div",{staticStyle:{padding:"10px 8px 0px"}},[s("div",[e._v("基本信息")]),e.PersistentVolumeClaim?s("el-form",{staticClass:"pod-item",staticStyle:{margin:"15px 10px 20px 10px"},attrs:{"label-position":"left","label-width":"120px"}},[s("el-form-item",{attrs:{label:"名称"}},[s("span",[e._v(e._s(e.PersistentVolumeClaim.metadata?e.PersistentVolumeClaim.metadata.name:""))])]),s("el-form-item",{attrs:{label:"创建时间"}},[s("span",[e._v(e._s(e.PersistentVolumeClaim.metadata?e.PersistentVolumeClaim.metadata.creationTimestamp:""))])]),s("el-form-item",{attrs:{label:"命名空间"}},[s("span",[e._v(e._s(e.PersistentVolumeClaim.metadata?e.PersistentVolumeClaim.metadata.namespace:""))])]),s("el-form-item",{attrs:{label:"状态"}},[s("span",[e._v(e._s(e.PersistentVolumeClaim.metadata?e.PersistentVolumeClaim.status.phase:""))])]),s("el-form-item",{attrs:{label:"容量"}},[s("span",[e._v(e._s(e.PersistentVolumeClaim.metadata?e.PersistentVolumeClaim.spec.resources.requests.storage:""))])]),s("el-form-item",{attrs:{label:"存储卷"}},[s("span",{staticClass:"name-class",on:{click:function(t){return e.nameClick()}}},[e._v(" "+e._s(e.PersistentVolumeClaim.metadata?e.PersistentVolumeClaim.spec.volumeName:"")+" ")])]),s("el-form-item",{attrs:{label:"存储类"}},[e.PersistentVolumeClaim.metadata&&!e.PersistentVolumeClaim.spec.storageClassName?s("span",[e._v("—")]):s("span",[e._v(e._s(e.PersistentVolumeClaim.metadata?e.PersistentVolumeClaim.spec.storageClassName:""))])]),e.PersistentVolumeClaim.metadata?s("el-form-item",{attrs:{label:"访问模式"}},[e._l(e.PersistentVolumeClaim.spec.accessModes,(function(t){return[s("span",{key:t,staticClass:"back-class"},[e._v(e._s(t)+" "),s("br")])]}))],2):e._e(),e.PersistentVolumeClaim.metadata?s("el-form-item",{attrs:{label:"存储类型"}},[s("span",[e._v(e._s(e.PersistentVolumeClaim.spec.volumeMode))])]):e._e()],1):e._e()],1),e.PersistentVolumeClaim.metadata?s("el-tabs",{staticStyle:{padding:"0px 8px"},attrs:{value:"resource"}},[s("el-tab-pane",{attrs:{label:"资源要求",name:"resource"}},[s("div",{staticClass:"msgClass"},[e.PersistentVolumeClaim.spec.resources?s("div",[s("el-form",{staticClass:"pod-item",staticStyle:{"box-shadow":"0 0 0 0"},attrs:{"label-position":"left","label-width":"150px"}},[s("el-form-item",{attrs:{label:"Requests"}},[e.PersistentVolumeClaim.spec.resources.requests?e._l(e.PersistentVolumeClaim.spec.resources.requests,(function(t,a){return[s("span",{key:a,staticClass:"back-class"},[e._v(e._s(a)+": "+e._s(t))])]})):s("span",[e._v("—")])],2),s("el-form-item",{attrs:{label:"Limits"}},[e.PersistentVolumeClaim.spec.resources.limits?e._l(e.PersistentVolumeClaim.spec.resources.limits,(function(t,a){return[s("span",{key:a,staticClass:"back-class"},[e._v(e._s(a)+": "+e._s(t))])]})):s("span",[e._v("—")])],2)],1)],1):s("div",{staticStyle:{padding:"25px 15px",color:"#909399","text-align":"center"}},[e._v("无存储资源要求")])])]),s("el-tab-pane",{attrs:{label:"选择器",name:"selector"}},[s("div",{staticClass:"msgClass"},[s("el-form",{staticClass:"pod-item",staticStyle:{"box-shadow":"0 0 0 0"},attrs:{"label-position":"left","label-width":"150px"}},[s("el-form-item",{attrs:{label:"Match Labels"}},[e.PersistentVolumeClaim.spec.selector&&e.PersistentVolumeClaim.spec.selector.matchLabels?e._l(e.PersistentVolumeClaim.spec.selector.matchLabels,(function(t,a){return[s("span",{key:a,staticClass:"back-class"},[e._v(e._s(a)+": "+e._s(t))])]})):s("span",[e._v("—")])],2),s("el-form-item",{attrs:{label:"Match Expressions"}},[e.PersistentVolumeClaim.spec.selector&&e.PersistentVolumeClaim.spec.selector.matchExpressions?e._l(e.PersistentVolumeClaim.spec.selector.matchExpressions,(function(t,a){return[s("span",{key:t,staticClass:"back-class"},[e._v(e._s(t)+":"+e._s(a))])]})):s("span",[e._v("—")])],2)],1)],1)]),s("el-tab-pane",{attrs:{label:"事件",name:"events"}},[s("div",{staticClass:"msgClass"},[e.persistentVolumeClaimEvents&&e.persistentVolumeClaimEvents.length>0?s("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.eventLoading,expression:"eventLoading"}],staticClass:"table-fix",staticStyle:{width:"100%"},attrs:{data:e.persistentVolumeClaimEvents,"tooltip-effect":"dark","cell-style":e.cellStyle,"default-sort":{prop:"event_time",order:"descending"}}},[s("el-table-column",{attrs:{prop:"type",label:"类型","min-width":"25","show-overflow-tooltip":""}}),s("el-table-column",{attrs:{prop:"object",label:"对象","min-width":"55","show-overflow-tooltip":""},scopedSlots:e._u([{key:"default",fn:function(t){return[s("span",[e._v(" "+e._s(t.row.object.kind)+"/"+e._s(t.row.object.name)+" ")])]}}],null,!1,1803908363)}),s("el-table-column",{attrs:{prop:"reason",label:"原因","min-width":"50","show-overflow-tooltip":""},scopedSlots:e._u([{key:"default",fn:function(t){return[s("span",[e._v(" "+e._s(t.row.reason?t.row.reason:"——")+" ")])]}}],null,!1,3284152067)}),s("el-table-column",{attrs:{prop:"message",label:"信息","min-width":"120","show-overflow-tooltip":""},scopedSlots:e._u([{key:"default",fn:function(t){return[s("span",[e._v(" "+e._s(t.row.message?t.row.message:"——")+" ")])]}}],null,!1,2705410019)}),s("el-table-column",{attrs:{prop:"event_time",label:"触发时间","min-width":"50","show-overflow-tooltip":""}})],1):s("div",{staticStyle:{padding:"25px 15px",color:"#909399","text-align":"center"}},[e._v("暂无事件发生")])],1)])],1):e._e(),s("el-dialog",{attrs:{title:"编辑",visible:e.yamlDialog,"close-on-click-modal":!1,width:"60%",top:"55px"},on:{"update:visible":function(t){e.yamlDialog=t}}},[e.yamlDialog?s("yaml",{attrs:{loading:e.yamlLoading},model:{value:e.yamlValue,callback:function(t){e.yamlValue=t},expression:"yamlValue"}}):e._e(),s("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[s("el-button",{attrs:{plain:"",size:"small"},on:{click:function(t){e.yamlDialog=!1}}},[e._v("取 消")]),s("el-button",{attrs:{plain:"",size:"small"},on:{click:function(t){return e.updatePersistentVolumeClaim()}}},[e._v("确 定")])],1)],1)],1)],1)},l=[],i=s("61b2"),n=s("3ee1"),o=s("0905"),r=s("5c96"),m={name:"PersistentVolumeClaimDetail",components:{Clusterbar:i["a"],Yaml:i["f"]},data:function(){return{yamlDialog:!1,yamlValue:"",yamlLoading:!0,cellStyle:{border:0},loading:!0,originPersistentVolumeClaim:{},selectContainer:"",eventLoading:!0,activeNames:["1"],persistentVolumeClaimEvents:[]}},created:function(){this.fetchData()},watch:{},computed:{titleName:function(){return["PersistentVolumeClaim",this.PersistentVolumeClaimName]},PersistentVolumeClaimName:function(){return this.$route.params?this.$route.params.persistentVolumeClaimName:""},cluster:function(){return this.$store.state.cluster},PersistentVolumeClaim:function(){return console.log(this.originPersistentVolumeClaim),this.originPersistentVolumeClaim},namespace:function(){return this.$route.params?this.$route.params.namespace:""}},methods:{nameClick:function(){this.PersistentVolumeClaim.spec&&this.PersistentVolumeClaim.spec.volumeName&&this.$router.push({name:"pvDetail",params:{persistentVolumeName:this.PersistentVolumeClaim.spec.volumeName}})},handleChange:function(e){console.log(e)},fetchData:function(){var e=this;this.originPersistentVolumeClaim={},this.loading=!0;var t=this.$store.state.cluster;return t?this.PersistentVolumeClaimName?(this.namespace||r["Message"].error("获取获取PersistentVolumeClaim命名空间参数异常，请刷新重试"),void Object(n["c"])(t,this.namespace,this.PersistentVolumeClaimName).then((function(s){e.loading=!1,e.originPersistentVolumeClaim=s.data,Object(o["b"])(t,e.originPersistentVolumeClaim.metadata.uid).then((function(t){e.eventLoading=!1,t.data&&(e.persistentVolumeClaimEvents=t.data.length>0?t.data:[])})).catch((function(){e.eventLoading=!1}))})).catch((function(){e.loading=!1}))):(r["Message"].error("获取PersistentVolumeClaim名称参数异常，请刷新重试"),this.loading=!1,void(this.eventLoading=!1)):(r["Message"].error("获取集群参数异常，请刷新重试"),this.loading=!1,void(this.eventLoading=!1))},getPersistentVolumeClaimYaml:function(){var e=this;if(this.PersistentVolumeClaimName){var t=this.$store.state.cluster;t?(this.yamlValue="",this.yamlDialog=!0,this.yamlLoading=!0,Object(n["c"])(t,this.namespace,this.PersistentVolumeClaimName,"yaml").then((function(t){e.yamlLoading=!1,e.yamlValue=t.data})).catch((function(){e.yamlLoading=!1}))):r["Message"].error("获取集群参数异常，请刷新重试")}else r["Message"].error("获取PersistentVolumeClaim参数异常，请刷新重试")},updatePersistentVolumeClaim:function(){if(this.PersistentVolumeClaim){var e=this.$store.state.cluster;e?Object(n["e"])(e,this.namespace,this.PersistentVolumeClaimName,this.yamlValue).then((function(){r["Message"].success("更新成功")})).catch((function(){})):r["Message"].error("获取集群参数异常，请刷新重试")}else r["Message"].error("获取PersistentVolumeClaim参数异常，请刷新重试")}}},c=m,u=(s("d26b"),s("5be6"),s("2877")),p=Object(u["a"])(c,a,l,!1,null,"e93c5dbc",null);t["default"]=p.exports},b3a9:function(e,t,s){},d26b:function(e,t,s){"use strict";var a=s("8619"),l=s.n(a);l.a}}]);