(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-755379b2"],{"0905":function(e,t,a){"use strict";a.d(t,"b",(function(){return n})),a.d(t,"a",(function(){return s}));var o=a("b775");function n(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"",s=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"",i={};return t&&(i["uid"]=t),a&&(i["kind"]=a),s&&(i["namespace"]=s),n&&(i["name"]=n),Object(o["a"])({url:"event/".concat(e),method:"get",params:i})}function s(e){if(e){var t=e.lastTimestamp;return t||(t=e.firstTimestamp),t||(t=e.metadata.creationTimestamp),{uid:e.metadata.uid,namespace:e.metadata.namespace,count:e.spec.count,reason:e.reason,message:e.message,type:e.type,object:e.involvedObject,source:e.source,event_time:t,resource_version:e.metadata.resourceVersion}}}},"19a7":function(e,t,a){},"76fe":function(e,t,a){"use strict";a.d(t,"d",(function(){return s})),a.d(t,"c",(function(){return i})),a.d(t,"b",(function(){return l})),a.d(t,"e",(function(){return r})),a.d(t,"a",(function(){return c}));a("99af"),a("b0c0");var o=a("b85c"),n=a("b775");function s(e,t){return Object(n["a"])({url:"job/".concat(e),method:"get",params:{cronjob_uid:t}})}function i(e,t,a){var o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"";return Object(n["a"])({url:"job/".concat(e,"/").concat(t,"/").concat(a),method:"get",params:{output:o}})}function l(e,t){return Object(n["a"])({url:"job/".concat(e,"/delete"),method:"post",data:t})}function r(e,t,a,o){return Object(n["a"])({url:"job/".concat(e,"/").concat(t,"/").concat(a),method:"post",data:{yaml:o}})}function c(e){if(e){var t=[];if(e.status.conditions){var a,n=Object(o["a"])(e.status.conditions);try{for(n.s();!(a=n.n()).done;){var s=a.value;"True"===s.status&&t.push(s.type)}}catch(l){n.e(l)}finally{n.f()}}var i={uid:e.metadata.uid,namespace:e.metadata.namespace,name:e.metadata.name,completions:e.spec.completions||0,active:e.status.active||0,succeeded:e.status.succeeded||0,failed:e.status.failed||0,resource_version:e.metadata.resourceVersion,conditions:t,node_selector:e.spec.template.spec.nodeSelector,created:e.metadata.creationTimestamp};return i}}},"9efc":function(e,t,a){"use strict";var o=a("19a7"),n=a.n(o);n.a},b384:function(e,t,a){},c90c:function(e,t,a){"use strict";a.r(t);var o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("clusterbar",{attrs:{titleName:e.titleName,delFunc:e.deleteJobs,editFunc:e.getJobYaml}}),a("div",{staticClass:"dashboard-container"},[a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],ref:"table",staticClass:"table-fix",staticStyle:{width:"100%"},attrs:{data:e.pods,"tooltip-effect":"dark","cell-style":e.cellStyle,"default-sort":{prop:"name"}}},[a("el-table-column",{attrs:{prop:"name",label:"POD名称","min-width":"100","show-overflow-tooltip":""},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",{staticClass:"name-class",on:{click:function(a){return e.namePodClick(t.row.namespace,t.row.name)}}},[e._v(" "+e._s(t.row.name)+" ")])]}}])}),a("el-table-column",{attrs:{prop:"containerNum",label:"容器","min-width":"45","show-overflow-tooltip":""},scopedSlots:e._u([{key:"default",fn:function(t){return[t.row.init_containers?e._l(t.row.init_containers,(function(t){return a("el-tooltip",{key:t.name,attrs:{content:t.name+" ("+t.status+")",placement:"top"}},[a("svg-icon",{class:e.containerClass(t.status),staticStyle:{"margin-top":"7px"},attrs:{"icon-class":"square"}})],1)})):e._e(),e._l(t.row.containers,(function(t){return a("el-tooltip",{key:t.name,attrs:{content:t.name+" ("+t.status+")",placement:"top"}},[a("svg-icon",{class:e.containerClass(t.status),staticStyle:{"margin-top":"7px"},attrs:{"icon-class":"square"}})],1)}))]}}])}),a("el-table-column",{attrs:{prop:"restarts",label:"重启","min-width":"45","show-overflow-tooltip":""}}),a("el-table-column",{attrs:{prop:"node_name",label:"节点","show-overflow-tooltip":""}}),a("el-table-column",{attrs:{prop:"ip",label:"IP","show-overflow-tooltip":""}}),a("el-table-column",{attrs:{prop:"created",label:"创建时间","min-width":"100","show-overflow-tooltip":""}}),a("el-table-column",{attrs:{prop:"status",label:"状态","min-width":"60","show-overflow-tooltip":""}}),a("el-table-column",{attrs:{label:"","show-overflow-tooltip":"",width:"45"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-dropdown",{attrs:{size:"medium"}},[a("el-link",{attrs:{underline:!1}},[a("svg-icon",{staticStyle:{width:"1.3em",height:"1.3em"},attrs:{"icon-class":"operate"}})],1),a("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[a("el-dropdown-item",{nativeOn:{click:function(a){return a.preventDefault(),e.namePodClick(t.row.namespace,t.row.name)}}},[a("svg-icon",{staticStyle:{width:"1.3em",height:"1.3em","line-height":"40px","vertical-align":"-0.25em"},attrs:{"icon-class":"detail"}}),a("span",{staticStyle:{"margin-left":"5px"}},[e._v("详情")])],1),a("div",{on:{mouseover:function(t){e.logContainerShow=!0},mouseout:function(t){e.logContainerShow=!1}}},[a("el-dropdown-item",{nativeOn:{click:function(a){a.preventDefault(),e.selectContainer=t.row.containers[0].name,e.selectPodName=t.row.name,e.logDialog=!0}}},[a("div",{staticClass:"download"},[a("div",[a("svg-icon",{staticStyle:{width:"1.3em",height:"1.3em","line-height":"40px","vertical-align":"-0.25em"},attrs:{"icon-class":"log"}}),a("span",{staticStyle:{"margin-left":"5px"}},[e._v("日志")])],1),a("div",{directives:[{name:"show",rawName:"v-show",value:t.row.containerNum>1&&e.logContainerShow,expression:"scope.row.containerNum > 1 && logContainerShow"}],staticClass:"download-right"},[e._l(t.row.init_containers,(function(o){return a("div",{key:o.name,staticClass:"download-item",on:{click:function(a){e.selectContainer=o.name,e.selectPodName=t.row.name,e.logDialog=!0}}},[e._v(" "+e._s(o.name)+" ")])})),e._l(t.row.containers,(function(o){return a("div",{key:o.name,staticClass:"download-item",on:{click:function(a){e.selectContainer=o.name,e.selectPodName=t.row.name,e.logDialog=!0}}},[e._v(" "+e._s(o.name)+" ")])}))],2)])])],1),a("div",{on:{mouseover:function(t){e.termContainerShow=!0},mouseout:function(t){e.termContainerShow=!1}}},[a("el-dropdown-item",{nativeOn:{click:function(a){a.preventDefault(),e.selectContainer=t.row.containers[0].name,e.selectPodName=t.row.name,e.terminalDialog=!0}}},[a("div",{staticClass:"download"},[a("div",[a("svg-icon",{staticStyle:{width:"1.3em",height:"1.3em","line-height":"40px","vertical-align":"-0.25em"},attrs:{"icon-class":"terminal"}}),a("span",{staticStyle:{"margin-left":"5px"}},[e._v("终端")])],1),a("div",{directives:[{name:"show",rawName:"v-show",value:t.row.containers.length>1&&e.termContainerShow,expression:"scope.row.containers.length > 1 && termContainerShow"}],staticClass:"download-right"},e._l(t.row.containers,(function(o){return a("div",{key:o.name,staticClass:"download-item",on:{click:function(a){e.selectContainer=o.name,e.selectPodName=t.row.name,e.terminalDialog=!0}}},[e._v(" "+e._s(o.name)+" ")])})),0)])])],1),a("el-dropdown-item",{nativeOn:{click:function(a){return a.preventDefault(),e.deletePods([{namespace:t.row.namespace,name:t.row.name}])}}},[a("svg-icon",{staticStyle:{width:"1.3em",height:"1.3em","line-height":"40px","vertical-align":"-0.25em"},attrs:{"icon-class":"delete"}}),a("span",{staticStyle:{"margin-left":"5px"}},[e._v("删除")])],1)],1)],1)]}}])})],1),a("el-form",{staticClass:"pod-item",attrs:{"label-position":"left",inline:""}},[a("el-form-item",{attrs:{label:"名称"}},[a("span",[e._v(e._s(e.job.name))])]),a("el-form-item",{attrs:{label:"创建时间"}},[a("span",[e._v(e._s(e.job.created))])]),a("el-form-item",{attrs:{label:"命名空间"}},[a("span",[e._v(e._s(e.job.namespace))])]),a("el-form-item",{attrs:{label:"Completions"}},[a("span",[e._v(e._s(e.job.completions))])]),a("el-form-item",{attrs:{label:"Pods"}},[e.job.active>0?a("span",{staticClass:"back-class"},[e._v(" "+e._s(e.job.active)+" Running ")]):e._e(),e.job.succeeded>0?a("span",{staticClass:"back-class"},[e._v(" "+e._s(e.job.succeeded)+" Succeeded ")]):e._e(),e.job.failed>0?a("span",{staticClass:"back-class"},[e._v(" "+e._s(e.job.failed)+" Failed ")]):e._e()]),a("el-form-item",{attrs:{label:"选择器"}},[e.job.label_selector?e._l(e.job.label_selector.matchLabels,(function(t,o){return[a("span",{key:o},[e._v(e._s(o)+": "+e._s(t)),a("br")])]})):a("span",[e._v("—")])],2),a("el-form-item",{attrs:{label:"标签"}},[e.job.labels?e._l(e.job.labels,(function(t,o){return[a("span",{key:o},[e._v(e._s(o)+": "+e._s(t)),a("br")])]})):a("span",[e._v("—")])],2),a("el-form-item",{attrs:{label:"注解"}},[e.job.annotations?e._l(e.job.annotations,(function(t,o){return[a("span",{key:o},[e._v(e._s(o)+": "+e._s(t)),a("br")])]})):a("span",[e._v("—")])],2)],1),a("el-collapse",{staticClass:"podCollapse"},[a("el-collapse-item",{attrs:{title:"Conditions",name:"conditions"}},[a("template",{slot:"title"},[a("span",{staticClass:"title-class"},[e._v("Conditions")])]),a("div",{staticClass:"msgClass"},[e.job&&e.job.conditions&&e.job.conditions.length>0?a("el-table",{staticClass:"table-fix",staticStyle:{width:"100%"},attrs:{data:e.job.conditions,"tooltip-effect":"dark","cell-style":e.cellStyle,"default-sort":{prop:"lastProbeTime"}}},[a("el-table-column",{attrs:{prop:"type",label:"类型","min-width":"30","show-overflow-tooltip":""}}),a("el-table-column",{attrs:{prop:"status",label:"状态","min-width":"20","show-overflow-tooltip":""}}),a("el-table-column",{attrs:{prop:"reason",label:"原因","min-width":"50","show-overflow-tooltip":""},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(" "+e._s(t.row.reason?t.row.reason:"—")+" ")])]}}],null,!1,548534711)}),a("el-table-column",{attrs:{prop:"message",label:"信息","show-overflow-tooltip":""},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(" "+e._s(t.row.message?t.row.message:"—")+" ")])]}}],null,!1,2501580055)}),a("el-table-column",{attrs:{label:"触发时间","min-width":"40","show-overflow-tooltip":""},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(" "+e._s(t.row.lastProbeTime?t.row.lastProbeTime:t.row.lastTransitionTime)+" ")])]}}],null,!1,2572631955)})],1):a("div",{staticStyle:{color:"#909399","text-align":"center"}},[e._v("暂无数据")])],1)],2),a("el-collapse-item",{attrs:{title:"Events",name:"events"}},[a("template",{slot:"title"},[a("span",{staticClass:"title-class"},[e._v("Events")])]),a("div",{staticClass:"msgClass"},[e.jobEvents&&e.jobEvents.length>0?a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.eventLoading,expression:"eventLoading"}],staticClass:"table-fix",staticStyle:{width:"100%"},attrs:{data:e.jobEvents,"tooltip-effect":"dark","cell-style":e.cellStyle,"default-sort":{prop:"event_time",order:"descending"}}},[a("el-table-column",{attrs:{prop:"type",label:"类型","min-width":"25","show-overflow-tooltip":""}}),a("el-table-column",{attrs:{prop:"object",label:"对象","min-width":"55","show-overflow-tooltip":""},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(" "+e._s(t.row.object.kind)+"/"+e._s(t.row.object.name)+" ")])]}}],null,!1,1803908363)}),a("el-table-column",{attrs:{prop:"reason",label:"原因","min-width":"50","show-overflow-tooltip":""},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(" "+e._s(t.row.reason?t.row.reason:"—")+" ")])]}}],null,!1,548534711)}),a("el-table-column",{attrs:{prop:"message",label:"信息","min-width":"120","show-overflow-tooltip":""},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(" "+e._s(t.row.message?t.row.message:"—")+" ")])]}}],null,!1,2501580055)}),a("el-table-column",{attrs:{prop:"event_time",label:"触发时间","min-width":"50","show-overflow-tooltip":""}})],1):a("div",{staticStyle:{color:"#909399","text-align":"center"}},[e._v("暂无数据")])],1)],2)],1),a("el-dialog",{attrs:{title:"终端",visible:e.terminalDialog,"close-on-click-modal":!1,width:"80%",top:"55px"},on:{"update:visible":function(t){e.terminalDialog=t}}},[e.terminalDialog?a("terminal",{attrs:{cluster:e.cluster,namespace:e.namespace,pod:e.selectPodName,container:e.selectContainer}}):e._e()],1),a("el-dialog",{attrs:{title:"日志",visible:e.logDialog,"close-on-click-modal":!1,width:"80%",top:"55px"},on:{"update:visible":function(t){e.logDialog=t}}},[e.logDialog?a("log",{attrs:{cluster:e.cluster,namespace:e.namespace,pod:e.selectPodName,container:e.selectContainer}}):e._e()],1),a("el-dialog",{attrs:{title:"编辑",visible:e.yamlDialog,"close-on-click-modal":!1,width:"60%",top:"55px"},on:{"update:visible":function(t){e.yamlDialog=t}}},[e.yamlDialog?a("yaml",{attrs:{loading:e.yamlLoading},model:{value:e.yamlValue,callback:function(t){e.yamlValue=t},expression:"yamlValue"}}):e._e(),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{plain:"",size:"small"},on:{click:function(t){e.yamlDialog=!1}}},[e._v("取 消")]),a("el-button",{attrs:{plain:"",size:"small"},on:{click:function(t){return e.updateJob()}}},[e._v("确 定")])],1)],1)],1)],1)},n=[],s=(a("4de4"),a("b0c0"),a("61b2")),i=a("76fe"),l=a("0905"),r=a("f492"),c=a("5c96"),u={name:"JobDetail",components:{Clusterbar:s["a"],Terminal:s["c"],Log:s["b"],Yaml:s["d"]},data:function(){return{logContainerShow:!1,termContainerShow:!1,yamlDialog:!1,yamlValue:"",yamlLoading:!0,logDialog:!1,terminalDialog:!1,cellStyle:{border:0},loading:!0,originJob:void 0,pods:[],selectContainer:"",selectPodName:"",jobEvents:[],eventLoading:!0}},created:function(){this.fetchData()},watch:{jobWatch:function(e){if(e&&this.originJob){var t=e.resource.metadata.uid;if(t!==this.job.uid)return;var a=e.resource.metadata.resourceVersion;this.job.resource_version<a&&(this.originJob=e.resource)}},eventWatch:function(e){if(e&&this.originJob){var t=e.resource;if(t.involvedObject.namespace!==this.job.namespace)return;if(t.involvedObject.uid!==this.job.uid)return;var a=e.resource.metadata.uid;if("add"===e.event)this.jobEvents.push(Object(l["a"])(t));else if("update"==e.event){var o=e.resource.metadata.resourceVersion;for(var n in this.jobEvents){var s=this.jobEvents[n];if(s.uid===a){if(s.resource_version<o){var i=Object(l["a"])(e.resource);this.$set(this.jobEvents,n,i)}break}}}else"delete"===e.event&&(this.jobEvents=this.jobEvents.filter((function(e){var t=e.uid;return t!==a})))}},podsWatch:function(e){if(e&&this.originJob){var t=Object(r["f"])(this.originJob.spec.selector,e.resource.metadata.labels);if(t){var a=e.resource.metadata.uid,o=e.resource.metadata.resourceVersion;if("add"===e.event)this.pods.push(Object(r["a"])(e.resource));else if("update"===e.event)for(var n in this.pods){var s=this.pods[n];if(s.uid===a&&s.resource_version<o){var i=Object(r["a"])(e.resource);this.$set(this.pods,n,i);break}}else"delete"===e.event&&(this.pods=this.pods.filter((function(e){var t=e.uid;return t!==a})))}}}},computed:{titleName:function(){return["Jobs",this.jobName]},jobName:function(){return this.$route.params?this.$route.params.jobName:""},namespace:function(){return this.$route.params?this.$route.params.namespace:""},job:function(){var e=this.buildJob(this.originJob);return e},cluster:function(){return this.$store.state.cluster},jobWatch:function(){return this.$store.getters["ws/jobsWatch"]},eventWatch:function(){return this.$store.getters["ws/eventWatch"]},podsWatch:function(){return this.$store.getters["ws/podWatch"]}},methods:{fetchData:function(){var e=this;this.originJob=null,this.jobEvents=[],this.loading=!0,this.eventLoading=!0;var t=this.$store.state.cluster;return t?this.namespace?this.jobName?void Object(i["c"])(t,this.namespace,this.jobName).then((function(a){e.originJob=a.data,Object(r["e"])(t,e.originJob.spec.selector).then((function(t){e.loading=!1,e.pods=t.data})).catch((function(){e.loading=!1})),Object(l["b"])(t,e.originJob.metadata.uid).then((function(t){e.eventLoading=!1,t.data&&(e.jobEvents=t.data.length>0?t.data:[])})).catch((function(){e.eventLoading=!1}))})).catch((function(){e.loading=!1,e.eventLoading=!1})):(c["Message"].error("获取Job名称参数异常，请刷新重试"),this.loading=!1,void(this.eventLoading=!1)):(c["Message"].error("获取命名空间参数异常，请刷新重试"),this.loading=!1,void(this.eventLoading=!1)):(c["Message"].error("获取集群参数异常，请刷新重试"),this.loading=!1,void(this.eventLoading=!1))},buildJob:function(e){if(!e)return{};var t={uid:e.metadata.uid,namespace:e.metadata.namespace,name:e.metadata.name,completions:e.spec.completions||0,active:e.status.active||0,succeeded:e.status.succeeded||0,failed:e.status.failed||0,resource_version:e.metadata.resourceVersion,conditions:e.status.conditions,created:e.metadata.creationTimestamp,label_selector:e.spec.selector,labels:e.metadata.labels,annotations:e.metadata.annotations};return t},toogleExpand:function(e){var t=this.$refs.table;t.toggleRowExpansion(e)},deleteJobs:function(){var e=this.$store.state.cluster;if(e){this.job||c["Message"].error("获取Job参数异常，请刷新重试");var t=[{namespace:this.job.namespace,name:this.job.name}],a={resources:t};Object(i["b"])(e,a).then((function(){c["Message"].success("删除成功")})).catch((function(){}))}else c["Message"].error("获取集群参数异常，请刷新重试")},getJobYaml:function(){var e=this;if(this.job){var t=this.$store.state.cluster;t?(this.yamlValue="",this.yamlDialog=!0,this.yamlLoading=!0,Object(i["c"])(t,this.job.namespace,this.job.name,"yaml").then((function(t){e.yamlLoading=!1,e.yamlValue=t.data})).catch((function(){e.yamlLoading=!1}))):c["Message"].error("获取集群参数异常，请刷新重试")}else c["Message"].error("获取Job参数异常，请刷新重试")},updateJob:function(){if(this.job){var e=this.$store.state.cluster;e?(console.log(this.yamlValue),Object(i["e"])(e,this.job.namespace,this.job.name,this.yamlValue).then((function(){c["Message"].success("更新成功")})).catch((function(){}))):c["Message"].error("获取集群参数异常，请刷新重试")}else c["Message"].error("获取Job参数异常，请刷新重试")},containerClass:function(e){return Object(r["b"])(e)},namePodClick:function(e,t){this.$router.push({name:"podsDetail",params:{namespace:e,podName:t}})},deletePods:function(e){var t=this.$store.state.cluster;if(t)if(e.length<=0)c["Message"].error("请选择要删除的Pod");else{var a={resources:e};Object(r["c"])(t,a).then((function(){c["Message"].success("删除成功")})).catch((function(){}))}else c["Message"].error("获取集群参数异常，请刷新重试")}}},d=u,m=(a("9efc"),a("db70"),a("2877")),p=Object(m["a"])(d,o,n,!1,null,"5e6e12a6",null);t["default"]=p.exports},db70:function(e,t,a){"use strict";var o=a("b384"),n=a.n(o);n.a}}]);