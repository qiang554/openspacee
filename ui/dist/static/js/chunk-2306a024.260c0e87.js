(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2306a024"],{"08c7":function(e,t,a){"use strict";var n=a("4eee"),s=a.n(n);s.a},"0905":function(e,t,a){"use strict";a.d(t,"b",(function(){return s})),a.d(t,"a",(function(){return o}));var n=a("b775");function s(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"",o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"",i={};return t&&(i["uid"]=t),a&&(i["kind"]=a),o&&(i["namespace"]=o),s&&(i["name"]=s),Object(n["a"])({url:"event/".concat(e),method:"get",params:i})}function o(e){if(e){var t=e.lastTimestamp;return t||(t=e.firstTimestamp),t||(t=e.metadata.creationTimestamp),{uid:e.metadata.uid,namespace:e.metadata.namespace,count:e.spec?e.spec.count:1,reason:e.reason,message:e.message,type:e.type,object:e.involvedObject,source:e.source,event_time:t,resource_version:e.metadata.resourceVersion}}}},1358:function(e,t,a){"use strict";var n=a("bc88"),s=a.n(n);s.a},"4eee":function(e,t,a){},ac35:function(e,t,a){"use strict";a.d(t,"c",(function(){return s})),a.d(t,"b",(function(){return o})),a.d(t,"d",(function(){return i})),a.d(t,"a",(function(){return l}));a("99af");var n=a("b775");function s(e){return Object(n["a"])({url:"hpa/".concat(e),method:"get"})}function o(e,t,a){var s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"";return Object(n["a"])({url:"hpa/".concat(e,"/").concat(t,"/").concat(a),method:"get",params:{output:s}})}function i(e,t,a,s){return Object(n["a"])({url:"hpa/".concat(e,"/").concat(t,"/").concat(a),method:"post",data:{yaml:s}})}function l(e,t){return Object(n["a"])({url:"hpa/".concat(e,"/delete"),method:"post",data:t})}},ac70:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("clusterbar",{attrs:{titleName:e.titleName,editFunc:e.getHpaYaml,delFunc:e.deleteHpa}}),a("div",{staticClass:"dashboard-container"},[e.hpa.metadata?a("el-form",{staticClass:"pod-item",attrs:{"label-position":"left","label-width":"180px"}},[a("el-form-item",{attrs:{label:"名称"}},[a("span",[e._v(e._s(e.hpa.metadata.name))])]),a("el-form-item",{attrs:{label:"创建时间"}},[a("span",[e._v(e._s(e.hpa.metadata.creationTimestamp))])]),a("el-form-item",{attrs:{label:"Namespace"}},[a("span",[e._v(e._s(e.hpa.metadata.namespace))])]),a("el-form-item",{attrs:{label:"Min Pods"}},[e.hpa.spec?a("span",[e._v(e._s(e.hpa.spec.minReplicas))]):e._e()]),a("el-form-item",{attrs:{label:"Max Pods"}},[e.hpa.spec?a("span",[e._v(e._s(e.hpa.spec.maxReplicas))]):e._e()]),a("el-form-item",{attrs:{label:"Replicas"}},[e.hpa.status?a("span",[e._v(e._s(e.hpa.status.currentReplicas))]):e._e()]),a("el-form-item",{attrs:{label:"Reference"}},[e.hpa.spec?a("span",[e._v(e._s(e.hpa.spec.scaleTargetRef.kind)+"/"+e._s(e.hpa.spec.scaleTargetRef.name))]):e._e()])],1):e._e(),a("div",{staticClass:"msgClass"},[e.hpaEvents&&e.hpaEvents.length>0?a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.eventLoading,expression:"eventLoading"}],staticClass:"table-fix",staticStyle:{width:"100%"},attrs:{data:e.hpaEvents,"tooltip-effect":"dark","cell-style":e.cellStyle,"default-sort":{prop:"event_time",order:"descending"}}},[a("el-table-column",{attrs:{prop:"type",label:"类型","min-width":"25","show-overflow-tooltip":""}}),a("el-table-column",{attrs:{prop:"object",label:"对象","min-width":"55","show-overflow-tooltip":""},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(" "+e._s(t.row.object.kind)+"/"+e._s(t.row.object.name)+" ")])]}}],null,!1,1803908363)}),a("el-table-column",{attrs:{prop:"reason",label:"原因","min-width":"50","show-overflow-tooltip":""},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(" "+e._s(t.row.reason?t.row.reason:"——")+" ")])]}}],null,!1,3284152067)}),a("el-table-column",{attrs:{prop:"message",label:"信息","min-width":"120","show-overflow-tooltip":""},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(" "+e._s(t.row.message?t.row.message:"——")+" ")])]}}],null,!1,2705410019)}),a("el-table-column",{attrs:{prop:"event_time",label:"触发时间","min-width":"50","show-overflow-tooltip":""}})],1):a("div",{staticStyle:{color:"#909399","text-align":"center"}},[e._v("暂无数据")])],1),a("el-dialog",{attrs:{title:"编辑",visible:e.yamlDialog,"close-on-click-modal":!1,width:"60%",top:"55px"},on:{"update:visible":function(t){e.yamlDialog=t}}},[e.yamlDialog?a("yaml",{attrs:{loading:e.yamlLoading},model:{value:e.yamlValue,callback:function(t){e.yamlValue=t},expression:"yamlValue"}}):e._e(),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{plain:"",size:"small"},on:{click:function(t){e.yamlDialog=!1}}},[e._v("取 消")]),a("el-button",{attrs:{plain:"",size:"small"},on:{click:function(t){return e.updateHpa()}}},[e._v("确 定")])],1)],1)],1)],1)},s=[],o=a("61b2"),i=a("ac35"),l=a("0905"),r=a("5c96"),c={name:"HpaDetail",components:{Clusterbar:o["a"],Yaml:o["f"]},data:function(){return{yamlDialog:!1,yamlValue:"",yamlLoading:!0,cellStyle:{border:0},loading:!0,originHpa:{},eventLoading:!0,activeNames:["1"],hpaEvents:[]}},created:function(){this.fetchData()},watch:{},computed:{titleName:function(){return["HpaDetail",this.hpaName]},hpaName:function(){return this.$route.params?this.$route.params.hpaName:""},cluster:function(){return this.$store.state.cluster},hpa:function(){return console.log(this.originHpa),this.originHpa},namespace:function(){return this.$route.params?this.$route.params.namespace:""}},methods:{handleChange:function(e){console.log(e)},fetchData:function(){var e=this;this.originHpa={},this.loading=!0;var t=this.$store.state.cluster;return t?this.hpaName?(this.namespace||r["Message"].error("获取获取Hpa命名空间参数异常，请刷新重试"),void Object(i["b"])(t,this.namespace,this.hpaName).then((function(a){e.loading=!1,e.originHpa=a.data,console.log("*******",e.originHpa),Object(l["b"])(t,e.originHpa.metadata.uid).then((function(t){e.eventLoading=!1,t.data&&(e.hpaEvents=t.data.length>0?t.data:[])})).catch((function(){e.eventLoading=!1}))})).catch((function(){e.loading=!1}))):(r["Message"].error("获取Hpa名称参数异常，请刷新重试"),this.loading=!1,void(this.eventLoading=!1)):(r["Message"].error("获取集群参数异常，请刷新重试"),this.loading=!1,void(this.eventLoading=!1))},getHpaYaml:function(){var e=this;if(this.hpaName){var t=this.$store.state.cluster;t?(this.yamlValue="",this.yamlDialog=!0,this.yamlLoading=!0,Object(i["b"])(t,this.namespace,this.hpaName,"yaml").then((function(t){e.yamlLoading=!1,e.yamlValue=t.data})).catch((function(){e.yamlLoading=!1}))):r["Message"].error("获取集群参数异常，请刷新重试")}else r["Message"].error("获取Hpa参数异常，请刷新重试")},updateHpa:function(){if(this.hpa){var e=this.$store.state.cluster;e?(console.log(this.yamlValue),console.log(this.hpa),Object(i["d"])(e,this.namespace,this.hpaName,this.yamlValue).then((function(){r["Message"].success("更新成功")})).catch((function(){}))):r["Message"].error("获取集群参数异常，请刷新重试")}else r["Message"].error("获取Hpa参数异常，请刷新重试")},deleteHpa:function(){var e=this.$store.state.cluster;if(e){this.hpa||r["Message"].error("获取Hpa参数异常，请刷新重试");var t=[{namespace:this.namespace,name:this.hpaName}],a={resources:t};Object(i["a"])(e,a).then((function(){r["Message"].success("删除成功")})).catch((function(){}))}else r["Message"].error("获取集群参数异常，请刷新重试")}}},u=c,p=(a("08c7"),a("1358"),a("2877")),m=Object(p["a"])(u,n,s,!1,null,"2861af7e",null);t["default"]=m.exports},bc88:function(e,t,a){}}]);