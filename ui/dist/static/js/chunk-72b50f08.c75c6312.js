(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-72b50f08"],{"0905":function(e,t,a){"use strict";a.d(t,"b",(function(){return o})),a.d(t,"a",(function(){return s}));var n=a("b775");function o(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"",s=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"",r={};return t&&(r["uid"]=t),a&&(r["kind"]=a),s&&(r["namespace"]=s),o&&(r["name"]=o),Object(n["a"])({url:"event/".concat(e),method:"get",params:r})}function s(e){if(e){var t=e.lastTimestamp;return t||(t=e.firstTimestamp),t||(t=e.metadata.creationTimestamp),{uid:e.metadata.uid,namespace:e.metadata.namespace,count:e.spec?e.spec.count:1,reason:e.reason,message:e.message,type:e.type,object:e.involvedObject,source:e.source,event_time:t,resource_version:e.metadata.resourceVersion}}}},"76fe":function(e,t,a){"use strict";a.d(t,"d",(function(){return s})),a.d(t,"c",(function(){return r})),a.d(t,"b",(function(){return i})),a.d(t,"e",(function(){return l})),a.d(t,"a",(function(){return c}));a("99af"),a("b0c0");var n=a("b85c"),o=a("b775");function s(e,t){return Object(o["a"])({url:"job/".concat(e),method:"get",params:{cronjob_uid:t}})}function r(e,t,a){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"";return Object(o["a"])({url:"job/".concat(e,"/").concat(t,"/").concat(a),method:"get",params:{output:n}})}function i(e,t){return Object(o["a"])({url:"job/".concat(e,"/delete"),method:"post",data:t})}function l(e,t,a,n){return Object(o["a"])({url:"job/".concat(e,"/update/").concat(t,"/").concat(a),method:"post",data:{yaml:n}})}function c(e){if(e){var t=[];if(e.status.conditions){var a,o=Object(n["a"])(e.status.conditions);try{for(o.s();!(a=o.n()).done;){var s=a.value;"True"===s.status&&t.push(s.type)}}catch(i){o.e(i)}finally{o.f()}}var r={uid:e.metadata.uid,namespace:e.metadata.namespace,name:e.metadata.name,completions:e.spec.completions||0,active:e.status.active||0,succeeded:e.status.succeeded||0,failed:e.status.failed||0,resource_version:e.metadata.resourceVersion,conditions:t,node_selector:e.spec.template.spec.nodeSelector,created:e.metadata.creationTimestamp};return r}}},a763:function(e,t,a){},b384:function(e,t,a){},c90c:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("clusterbar",{attrs:{titleName:e.titleName,delFunc:e.deleteJobs,editFunc:e.getJobYaml}}),a("div",{staticClass:"dashboard-container"},[a("el-form",{staticClass:"pod-item",attrs:{"label-position":"left",inline:""}},[a("el-form-item",{attrs:{label:"名称"}},[a("span",[e._v(e._s(e.job.name))])]),a("el-form-item",{attrs:{label:"创建时间"}},[a("span",[e._v(e._s(e.job.created))])]),a("el-form-item",{attrs:{label:"命名空间"}},[a("span",[e._v(e._s(e.job.namespace))])]),a("el-form-item",{attrs:{label:"Completions"}},[a("span",[e._v(e._s(e.job.completions))])]),a("el-form-item",{attrs:{label:"Pods"}},[e.job.active>0?a("span",{staticClass:"back-class"},[e._v(" "+e._s(e.job.active)+" Running ")]):e._e(),e.job.succeeded>0?a("span",{staticClass:"back-class"},[e._v(" "+e._s(e.job.succeeded)+" Succeeded ")]):e._e(),e.job.failed>0?a("span",{staticClass:"back-class"},[e._v(" "+e._s(e.job.failed)+" Failed ")]):e._e()]),a("el-form-item",{attrs:{label:"选择器"}},[e.job.label_selector?e._l(e.job.label_selector.matchLabels,(function(t,n){return[a("span",{key:n},[e._v(e._s(n)+": "+e._s(t)),a("br")])]})):a("span",[e._v("—")])],2),a("el-form-item",{attrs:{label:"标签"}},[e.job.labels?e._l(e.job.labels,(function(t,n){return[a("span",{key:n},[e._v(e._s(n)+": "+e._s(t)),a("br")])]})):a("span",[e._v("—")])],2)],1),a("div",{staticStyle:{padding:"0px 8px"}},[a("div",[e._v("Pods")]),a("div",{staticClass:"msgClass",staticStyle:{margin:"15px 10px 30px 10px"}},[a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],ref:"table",staticClass:"table-fix",staticStyle:{width:"100%"},attrs:{data:e.pods,"tooltip-effect":"dark","cell-style":e.cellStyle,"default-sort":{prop:"name"}}},[a("el-table-column",{attrs:{prop:"name",label:"名称","min-width":"100","show-overflow-tooltip":""},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",{staticClass:"name-class",on:{click:function(a){return e.namePodClick(t.row.namespace,t.row.name)}}},[e._v(" "+e._s(t.row.name)+" ")])]}}])}),a("el-table-column",{attrs:{prop:"containerNum",label:"容器","min-width":"45","show-overflow-tooltip":""},scopedSlots:e._u([{key:"default",fn:function(t){return[t.row.init_containers?e._l(t.row.init_containers,(function(t){return a("el-tooltip",{key:t.name,attrs:{content:t.name+" ("+t.status+")",placement:"top"}},[a("svg-icon",{class:e.containerClass(t.status),staticStyle:{"margin-top":"7px"},attrs:{"icon-class":"square"}})],1)})):e._e(),e._l(t.row.containers,(function(t){return a("el-tooltip",{key:t.name,attrs:{content:t.name+" ("+t.status+")",placement:"top"}},[a("svg-icon",{class:e.containerClass(t.status),staticStyle:{"margin-top":"7px"},attrs:{"icon-class":"square"}})],1)}))]}}])}),a("el-table-column",{attrs:{prop:"restarts",label:"重启","min-width":"45","show-overflow-tooltip":""}}),a("el-table-column",{attrs:{prop:"node_name",label:"节点","show-overflow-tooltip":""}}),a("el-table-column",{attrs:{prop:"ip",label:"IP","show-overflow-tooltip":""}}),a("el-table-column",{attrs:{prop:"created",label:"创建时间","min-width":"100","show-overflow-tooltip":""}}),a("el-table-column",{attrs:{prop:"status",label:"状态","min-width":"60","show-overflow-tooltip":""}}),a("el-table-column",{attrs:{label:"","show-overflow-tooltip":"",width:"45"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-dropdown",{attrs:{size:"medium"}},[a("el-link",{attrs:{underline:!1}},[a("svg-icon",{staticStyle:{width:"1.3em",height:"1.3em"},attrs:{"icon-class":"operate"}})],1),a("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[e.$podOpPerm("get")?a("el-dropdown-item",{nativeOn:{click:function(a){return a.preventDefault(),e.namePodClick(t.row.namespace,t.row.name)}}},[a("svg-icon",{staticStyle:{width:"1.3em",height:"1.3em","line-height":"40px","vertical-align":"-0.25em"},attrs:{"icon-class":"detail"}}),a("span",{staticStyle:{"margin-left":"5px"}},[e._v("详情")])],1):e._e(),e.$podOpPerm("get")?a("div",{on:{mouseover:function(t){e.logContainerShow=!0},mouseout:function(t){e.logContainerShow=!1}}},[a("el-dropdown-item",{nativeOn:{click:function(a){a.preventDefault(),e.selectContainer=t.row.containers[0].name,e.selectPodName=t.row.name,e.logDialog=!0}}},[a("div",{staticClass:"download"},[a("div",[a("svg-icon",{staticStyle:{width:"1.3em",height:"1.3em","line-height":"40px","vertical-align":"-0.25em"},attrs:{"icon-class":"log"}}),a("span",{staticStyle:{"margin-left":"5px"}},[e._v("日志")])],1),a("div",{directives:[{name:"show",rawName:"v-show",value:t.row.containerNum>1&&e.logContainerShow,expression:"scope.row.containerNum > 1 && logContainerShow"}],staticClass:"download-right"},[e._l(t.row.init_containers,(function(n){return a("div",{key:n.name,staticClass:"download-item",on:{click:function(a){e.selectContainer=n.name,e.selectPodName=t.row.name,e.logDialog=!0}}},[e._v(" "+e._s(n.name)+" ")])})),e._l(t.row.containers,(function(n){return a("div",{key:n.name,staticClass:"download-item",on:{click:function(a){e.selectContainer=n.name,e.selectPodName=t.row.name,e.logDialog=!0}}},[e._v(" "+e._s(n.name)+" ")])}))],2)])])],1):e._e(),e.$podOpPerm("update")?a("div",{on:{mouseover:function(t){e.termContainerShow=!0},mouseout:function(t){e.termContainerShow=!1}}},[a("el-dropdown-item",{nativeOn:{click:function(a){a.preventDefault(),e.selectContainer=t.row.containers[0].name,e.selectPodName=t.row.name,e.terminalDialog=!0}}},[a("div",{staticClass:"download"},[a("div",[a("svg-icon",{staticStyle:{width:"1.3em",height:"1.3em","line-height":"40px","vertical-align":"-0.25em"},attrs:{"icon-class":"terminal"}}),a("span",{staticStyle:{"margin-left":"5px"}},[e._v("终端")])],1),a("div",{directives:[{name:"show",rawName:"v-show",value:t.row.containers.length>1&&e.termContainerShow,expression:"scope.row.containers.length > 1 && termContainerShow"}],staticClass:"download-right"},e._l(t.row.containers,(function(n){return a("div",{key:n.name,staticClass:"download-item",on:{click:function(a){e.selectContainer=n.name,e.selectPodName=t.row.name,e.terminalDialog=!0}}},[e._v(" "+e._s(n.name)+" ")])})),0)])])],1):e._e(),e.$podOpPerm("delete")?a("el-dropdown-item",{nativeOn:{click:function(a){return a.preventDefault(),e.deletePods([{namespace:t.row.namespace,name:t.row.name}])}}},[a("svg-icon",{staticStyle:{width:"1.3em",height:"1.3em","line-height":"40px","vertical-align":"-0.25em"},attrs:{"icon-class":"delete"}}),a("span",{staticStyle:{"margin-left":"5px"}},[e._v("删除")])],1):e._e()],1)],1)]}}])})],1)],1)]),a("el-tabs",{staticStyle:{padding:"0px 8px"},attrs:{value:"containers"}},[a("el-tab-pane",{attrs:{label:"容器",name:"containers"}},[a("div",{staticClass:"msgClass"},[a("el-table",{ref:"table",staticClass:"table-fix",staticStyle:{width:"100%"},attrs:{data:e.containers,"tooltip-effect":"dark","cell-style":e.cellStyle,"default-sort":{prop:"name"}}},[a("el-table-column",{staticStyle:{overflow:"hidden"},attrs:{type:"expand",width:"20"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-form",{staticClass:"table-expand",attrs:{"label-position":"left",inline:""}},[a("el-form-item",{attrs:{label:"容器名称"}},[a("span",[e._v(e._s(t.row.name))])]),a("el-form-item",{attrs:{label:"镜像"}},[a("span",[e._v(e._s(t.row.image))])]),t.row.command.length?a("el-form-item",{attrs:{label:"启动命令"}},[e._l(t.row.command,(function(t){return[a("span",{key:t},[e._v(e._s(t)),a("br")])]}))],2):e._e(),t.row.args.length?a("el-form-item",{attrs:{label:"启动参数"}},[e._l(t.row.args,(function(t){return[a("span",{key:t},[e._v(e._s(t)),a("br")])]}))],2):e._e(),t.row.ports.length?a("el-form-item",{attrs:{label:"端口"}},[e._l(t.row.ports,(function(t){return[a("span",{key:t.name},[e._v(e._s(t.name?t.name+":":"")+" "+e._s(t.containerPort)+"/"+e._s(t.protocol)),a("br")])]}))],2):e._e(),t.row.env.length?a("el-form-item",{attrs:{label:"环境变量"}},[e._l(t.row.env,(function(t,n){return[a("span",{key:n},[e._v(" "+e._s(e.envStr(t))),a("br")])]}))],2):e._e(),t.row.volume_mounts.length?a("el-form-item",{attrs:{label:"目录挂载"}},[e._l(t.row.volume_mounts,(function(t){return[a("span",{key:t.name},[e._v(e._s(t.name)+" -> "+e._s(t.mountPath)+" ("+e._s(t.readOnly?"ro":"rw")+")"),a("br")])]}))],2):e._e(),t.row.resources&&(t.row.resources.requests||t.row.resources.limits)?a("el-form-item",{attrs:{label:"资源"}},[a("div",[a("span",{staticStyle:{width:"80px",display:"inline-block"}}),a("span",{staticStyle:{width:"80px",display:"inline-block"}},[e._v("预留")]),a("span",{staticStyle:{display:"inline-block"}},[e._v("限制")])]),a("div",{staticStyle:{"margin-top":"-10px"}},[a("span",{staticStyle:{width:"80px",display:"inline-block"}},[e._v("cpu")]),a("span",{staticStyle:{width:"80px",display:"inline-block"}},[e._v(e._s(e.resourceFor(t.row.resources,"requests","cpu")))]),a("span",{staticStyle:{display:"inline-block"}},[e._v(e._s(e.resourceFor(t.row.resources,"limits","cpu")))])]),a("div",{staticStyle:{"margin-top":"-10px"}},[a("span",{staticStyle:{width:"80px",display:"inline-block"}},[e._v("memory")]),a("span",{staticStyle:{width:"80px",display:"inline-block"}},[e._v(e._s(e.resourceFor(t.row.resources,"requests","memory")))]),a("span",{staticStyle:{display:"inline-block"}},[e._v(e._s(e.resourceFor(t.row.resources,"limits","memory")))])])]):e._e(),t.row.readiness_probe||t.row.liveness_probe?a("el-form-item",{attrs:{label:"健康检查"}},e._l(["readiness_probe","liveness_probe"],(function(n){return a("div",{key:n},[t.row[n]?a("div",[a("div",[a("span",{staticStyle:{"margin-right":"15px","font-weight":"450"}},[e._v(" "+e._s("readiness_probe"==n?"ReadinessProbe":"LivenessProbe")+" ")])]),a("div",{staticStyle:{"margin-top":"-15px"}},e._l(t.row[n],(function(t,n){return a("span",{key:n},[["httpGet","exec","tcpSocket"].indexOf(n)>-1?a("span",{staticClass:"back-class"},[e._v(" "+e._s(n)+": "+e._s(t)+" ")]):e._e()])})),0),a("div",{staticStyle:{"margin-top":"-10px"}},e._l(t.row[n],(function(t,n){return a("span",{key:n},[["httpGet","exec","tcpSocket"].indexOf(n)<=-1?a("span",{staticClass:"back-class"},[e._v(" "+e._s(n)+": "+e._s(t)+" ")]):e._e()])})),0)]):e._e()])})),0):e._e()],1)]}}])}),a("el-table-column",{attrs:{prop:"name",label:"名称","show-overflow-tooltip":""},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",{staticClass:"name-class",on:{click:function(a){return e.toogleExpand(t.row)}}},[e._v(" "+e._s(t.row.name)+" ")])]}}])}),a("el-table-column",{attrs:{prop:"image",label:"镜像","min-width":"","show-overflow-tooltip":""}}),a("el-table-column",{attrs:{prop:"image_pull_policy",label:"镜像拉取策略","min-width":"","show-overflow-tooltip":""}})],1)],1)]),a("el-tab-pane",{attrs:{label:"存储",name:"volumes"}},[a("div",{staticClass:"msgClass",staticStyle:{padding:"10px 0px"}},[e.job.volumes&&e.job.volumes.length>0?e._l(e.job.volumes,(function(t){return a("div",{key:t.name,staticStyle:{margin:"15px 25px","font-size":"14px",color:"#606266"}},[a("div",{staticStyle:{"margin-bottom":"6px"}},[a("b",[e._v(e._s(t.name))])]),e._l(t,(function(t,n){return["name"!==n?a("span",{key:n},[a("span",{staticClass:"back-class"},[e._v(e._s(n))]),e._l(t,(function(t,n){return a("span",{key:n,staticClass:"back-class"},[e._v(" "+e._s(n)+": "+e._s(t)+" ")])}))],2):e._e()]}))],2)})):a("div",{staticStyle:{padding:"25px 15px",color:"#909399","text-align":"center"}},[e._v("无挂载存储")])],2)]),a("el-tab-pane",{attrs:{label:"状态",name:"conditions"}},[a("div",{staticClass:"msgClass"},[e.job&&e.job.conditions&&e.job.conditions.length>0?a("el-table",{staticClass:"table-fix",staticStyle:{width:"100%"},attrs:{data:e.job.conditions,"tooltip-effect":"dark","cell-style":e.cellStyle,"default-sort":{prop:"lastProbeTime"}}},[a("el-table-column",{attrs:{prop:"type",label:"类型","min-width":"30","show-overflow-tooltip":""}}),a("el-table-column",{attrs:{prop:"status",label:"状态","min-width":"20","show-overflow-tooltip":""}}),a("el-table-column",{attrs:{prop:"reason",label:"原因","min-width":"50","show-overflow-tooltip":""},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(" "+e._s(t.row.reason?t.row.reason:"—")+" ")])]}}],null,!1,548534711)}),a("el-table-column",{attrs:{prop:"message",label:"信息","show-overflow-tooltip":""},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(" "+e._s(t.row.message?t.row.message:"—")+" ")])]}}],null,!1,2501580055)}),a("el-table-column",{attrs:{label:"触发时间","min-width":"40","show-overflow-tooltip":""},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(" "+e._s(t.row.lastProbeTime?t.row.lastProbeTime:t.row.lastTransitionTime)+" ")])]}}],null,!1,2572631955)})],1):a("div",{staticStyle:{padding:"25px 15px",color:"#909399","text-align":"center"}},[e._v("暂无数据")])],1)]),a("el-tab-pane",{attrs:{label:"事件",name:"events"}},[a("div",{staticClass:"msgClass"},[e.jobEvents&&e.jobEvents.length>0?a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.eventLoading,expression:"eventLoading"}],staticClass:"table-fix",staticStyle:{width:"100%"},attrs:{data:e.jobEvents,"tooltip-effect":"dark","cell-style":e.cellStyle,"default-sort":{prop:"event_time",order:"descending"}}},[a("el-table-column",{attrs:{prop:"type",label:"类型","min-width":"25","show-overflow-tooltip":""}}),a("el-table-column",{attrs:{prop:"object",label:"对象","min-width":"55","show-overflow-tooltip":""},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(" "+e._s(t.row.object.kind)+"/"+e._s(t.row.object.name)+" ")])]}}],null,!1,1803908363)}),a("el-table-column",{attrs:{prop:"reason",label:"原因","min-width":"50","show-overflow-tooltip":""},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(" "+e._s(t.row.reason?t.row.reason:"—")+" ")])]}}],null,!1,548534711)}),a("el-table-column",{attrs:{prop:"message",label:"信息","min-width":"120","show-overflow-tooltip":""},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(" "+e._s(t.row.message?t.row.message:"—")+" ")])]}}],null,!1,2501580055)}),a("el-table-column",{attrs:{prop:"event_time",label:"触发时间","min-width":"50","show-overflow-tooltip":""}})],1):a("div",{staticStyle:{padding:"25px 15px",color:"#909399","text-align":"center"}},[e._v("暂无事件发生")])],1)])],1),a("el-dialog",{attrs:{title:"终端",visible:e.terminalDialog,"close-on-click-modal":!1,width:"80%",top:"55px"},on:{"update:visible":function(t){e.terminalDialog=t}}},[e.terminalDialog?a("terminal",{attrs:{cluster:e.cluster,namespace:e.namespace,pod:e.selectPodName,container:e.selectContainer}}):e._e()],1),a("el-dialog",{attrs:{title:"日志",visible:e.logDialog,"close-on-click-modal":!1,width:"80%",top:"55px"},on:{"update:visible":function(t){e.logDialog=t}}},[e.logDialog?a("log",{attrs:{cluster:e.cluster,namespace:e.namespace,pod:e.selectPodName,container:e.selectContainer}}):e._e()],1),a("el-dialog",{attrs:{title:"编辑",visible:e.yamlDialog,"close-on-click-modal":!1,width:"60%",top:"55px"},on:{"update:visible":function(t){e.yamlDialog=t}}},[e.yamlDialog?a("yaml",{attrs:{loading:e.yamlLoading},model:{value:e.yamlValue,callback:function(t){e.yamlValue=t},expression:"yamlValue"}}):e._e(),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{plain:"",size:"small"},on:{click:function(t){e.yamlDialog=!1}}},[e._v("取 消")]),a("el-button",{attrs:{plain:"",size:"small"},on:{click:function(t){return e.updateJob()}}},[e._v("确 定")])],1)],1)],1)],1)},o=[],s=(a("99af"),a("4de4"),a("b0c0"),a("b85c")),r=a("61b2"),i=a("76fe"),l=a("0905"),c=a("f492"),u=a("5c96"),d={name:"JobDetail",components:{Clusterbar:r["a"],Terminal:r["d"],Log:r["c"],Yaml:r["f"]},data:function(){return{logContainerShow:!1,termContainerShow:!1,yamlDialog:!1,yamlValue:"",yamlLoading:!0,logDialog:!1,terminalDialog:!1,cellStyle:{border:0},loading:!0,originJob:void 0,pods:[],selectContainer:"",selectPodName:"",jobEvents:[],eventLoading:!0,envStr:c["e"],resourceFor:c["i"]}},created:function(){this.fetchData()},watch:{jobWatch:function(e){if(e&&this.originJob){var t=e.resource.metadata.uid;if(t!==this.job.uid)return;var a=e.resource.metadata.resourceVersion;this.job.resource_version<a&&(this.originJob=e.resource)}},eventWatch:function(e){if(e&&this.originJob){var t=e.resource;if(t.involvedObject.namespace!==this.job.namespace)return;if(t.involvedObject.uid!==this.job.uid)return;var a=e.resource.metadata.uid;if("add"===e.event)this.jobEvents.push(Object(l["a"])(t));else if("update"==e.event){var n=e.resource.metadata.resourceVersion;for(var o in this.jobEvents){var s=this.jobEvents[o];if(s.uid===a){if(s.resource_version<n){var r=Object(l["a"])(e.resource);this.$set(this.jobEvents,o,r)}break}}}else"delete"===e.event&&(this.jobEvents=this.jobEvents.filter((function(e){var t=e.uid;return t!==a})))}},podsWatch:function(e){if(e&&this.originJob){var t=Object(c["h"])(this.originJob.spec.selector,e.resource.metadata.labels);if(t){var a=e.resource.metadata.uid,n=e.resource.metadata.resourceVersion;if("add"===e.event)this.pods.push(Object(c["b"])(e.resource));else if("update"===e.event)for(var o in this.pods){var s=this.pods[o];if(s.uid===a&&s.resource_version<n){var r=Object(c["b"])(e.resource);this.$set(this.pods,o,r);break}}else"delete"===e.event&&(this.pods=this.pods.filter((function(e){var t=e.uid;return t!==a})))}}}},computed:{titleName:function(){return["Jobs",this.jobName]},jobName:function(){return this.$route.params?this.$route.params.jobName:""},namespace:function(){return this.$route.params?this.$route.params.namespace:""},job:function(){var e=this.buildJob(this.originJob);return e},cluster:function(){return this.$store.state.cluster},jobWatch:function(){return this.$store.getters["ws/jobsWatch"]},eventWatch:function(){return this.$store.getters["ws/eventWatch"]},podsWatch:function(){return this.$store.getters["ws/podWatch"]},containers:function(){if(!this.originJob)return[];var e,t=[],a=this.originJob.spec.template,n=Object(s["a"])(a.spec.containers);try{for(n.s();!(e=n.n()).done;){var o=e.value,r=Object(c["a"])(o);t.push(r)}}catch(m){n.e(m)}finally{n.f()}var i=[];if(a.spec.initContainers){var l,u=Object(s["a"])(a.spec.initContainers);try{for(u.s();!(l=u.n()).done;){var d=l.value;i.push(Object(c["a"])(d))}}catch(m){u.e(m)}finally{u.f()}}return[].concat(i,t)}},methods:{fetchData:function(){var e=this;this.originJob=null,this.jobEvents=[],this.loading=!0,this.eventLoading=!0;var t=this.$store.state.cluster;return t?this.namespace?this.jobName?void Object(i["c"])(t,this.namespace,this.jobName).then((function(a){e.originJob=a.data,Object(c["g"])(t,e.originJob.spec.selector).then((function(t){e.loading=!1,e.pods=t.data})).catch((function(){e.loading=!1})),Object(l["b"])(t,e.originJob.metadata.uid).then((function(t){e.eventLoading=!1,t.data&&(e.jobEvents=t.data.length>0?t.data:[])})).catch((function(){e.eventLoading=!1}))})).catch((function(){e.loading=!1,e.eventLoading=!1})):(u["Message"].error("获取Job名称参数异常，请刷新重试"),this.loading=!1,void(this.eventLoading=!1)):(u["Message"].error("获取命名空间参数异常，请刷新重试"),this.loading=!1,void(this.eventLoading=!1)):(u["Message"].error("获取集群参数异常，请刷新重试"),this.loading=!1,void(this.eventLoading=!1))},buildJob:function(e){if(!e)return{};var t={uid:e.metadata.uid,namespace:e.metadata.namespace,name:e.metadata.name,completions:e.spec.completions||0,active:e.status.active||0,succeeded:e.status.succeeded||0,failed:e.status.failed||0,resource_version:e.metadata.resourceVersion,conditions:e.status.conditions,created:e.metadata.creationTimestamp,label_selector:e.spec.selector,labels:e.metadata.labels,annotations:e.metadata.annotations,volumes:e.spec.template.spec.volumes};return t},toogleExpand:function(e){var t=this.$refs.table;t.toggleRowExpansion(e)},deleteJobs:function(){var e=this.$store.state.cluster;if(e){this.job||u["Message"].error("获取Job参数异常，请刷新重试");var t=[{namespace:this.job.namespace,name:this.job.name}],a={resources:t};Object(i["b"])(e,a).then((function(){u["Message"].success("删除成功")})).catch((function(){}))}else u["Message"].error("获取集群参数异常，请刷新重试")},getJobYaml:function(){var e=this;if(this.job){var t=this.$store.state.cluster;t?(this.yamlValue="",this.yamlDialog=!0,this.yamlLoading=!0,Object(i["c"])(t,this.job.namespace,this.job.name,"yaml").then((function(t){e.yamlLoading=!1,e.yamlValue=t.data})).catch((function(){e.yamlLoading=!1}))):u["Message"].error("获取集群参数异常，请刷新重试")}else u["Message"].error("获取Job参数异常，请刷新重试")},updateJob:function(){if(this.job){var e=this.$store.state.cluster;e?(console.log(this.yamlValue),Object(i["e"])(e,this.job.namespace,this.job.name,this.yamlValue).then((function(){u["Message"].success("更新成功")})).catch((function(){}))):u["Message"].error("获取集群参数异常，请刷新重试")}else u["Message"].error("获取Job参数异常，请刷新重试")},containerClass:function(e){return Object(c["c"])(e)},namePodClick:function(e,t){this.$router.push({name:"podsDetail",params:{namespace:e,podName:t}})},deletePods:function(e){var t=this.$store.state.cluster;if(t)if(e.length<=0)u["Message"].error("请选择要删除的Pod");else{var a={resources:e};Object(c["d"])(t,a).then((function(){u["Message"].success("删除成功")})).catch((function(){}))}else u["Message"].error("获取集群参数异常，请刷新重试")}}},m=d,p=(a("d7fd"),a("db70"),a("2877")),f=Object(p["a"])(m,n,o,!1,null,"4f761569",null);t["default"]=f.exports},d63a:function(e,t,a){"use strict";const n=Function.call.bind(Object.prototype.hasOwnProperty);function o(e){const t=e.trim().split(" "),a=t[0],n=t[1],o=t[2],s=(o||"").slice(1,-1).split(",").map(e=>e.trim());switch(n){case void 0:return"!"===a[0]?{operator:"DoesNotExist",key:a.slice(1)}:{operator:"Exists",key:a};case"=":case"==":return{operator:"=",key:a,value:o};case"!=":return{operator:"NotIn",values:[o],key:a};case"in":return{operator:"In",key:a,values:s};case"notin":return{operator:"NotIn",key:a,values:s};default:}throw new Error("Invalid expression: "+e)}function s(e){const t=e.split(/,(?![^(]*\))/).map(o),a=t.filter(e=>n(e,"value")).reduce((e,t)=>Object.assign(e,{[t.key]:t.value}),{}),s=t.filter(e=>!n(e,"value"));return{matchLabels:a,matchExpressions:s}}function r(e){const t=e.operator.toLowerCase(),a=e.key,n=e.values;switch(t){case"exists":return a;case"doesnotexist":return"!"+a;default:}return`${a} ${t} (${n.join(",")})`}function i(e){const t=e.matchLabels||{},a=e.matchExpressions||[];return Object.keys(t).map(e=>`${e} = ${t[e]}`).concat(a.map(r)).join(",")}function l(e){if("string"===typeof e)return l(s(e));const t=e.matchExpressions||[],a=e.matchLabels||{};return Object.keys(a).map(e=>({operator:"In",key:e,values:[a[e]]})).concat(t)}function c(e,t){const a=e.operator,o=e.key,s=e.values,r=t[o];switch(a){case"Exists":return n(t,o);case"DoesNotExist":return!n(t,o);case"In":return s.indexOf(r)>=0;case"NotIn":return s.indexOf(r)<0;default:}throw new Error("Invalid operator: "+a)}function u(e){const t=l(e);return e=>t.every(t=>c(t,e||{}))}e.exports={stringify:i,parse:s,Selector:u}},d7fd:function(e,t,a){"use strict";var n=a("a763"),o=a.n(n);o.a},db70:function(e,t,a){"use strict";var n=a("b384"),o=a.n(n);o.a},f492:function(e,t,a){"use strict";a.d(t,"h",(function(){return r})),a.d(t,"g",(function(){return i})),a.d(t,"f",(function(){return l})),a.d(t,"d",(function(){return c})),a.d(t,"j",(function(){return u})),a.d(t,"c",(function(){return d})),a.d(t,"a",(function(){return m})),a.d(t,"b",(function(){return p})),a.d(t,"i",(function(){return f})),a.d(t,"e",(function(){return v}));a("99af"),a("b0c0");var n=a("b85c"),o=a("b775"),s=a("d63a");function r(e,t){var a=Object(s["Selector"])(e);return console.log(a,e,t),a(t)}function i(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,n={};return t&&(n["label_selector"]=t),a&&(n["names"]=a),Object(o["a"])({url:"pods/".concat(e,"/list"),method:"post",data:n})}function l(e,t,a){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"";return Object(o["a"])({url:"pods/".concat(e,"/").concat(t,"/").concat(a),method:"get",params:{output:n}})}function c(e,t){return Object(o["a"])({url:"pods/".concat(e,"/delete"),method:"post",data:t})}function u(e,t,a,n){return Object(o["a"])({url:"pods/".concat(e,"/update/").concat(t,"/").concat(a),method:"post",data:{yaml:n}})}function d(e){return"running"===e?"running-class":"terminated"===e?"terminate-class":"waiting"===e?"waiting-class":void 0}function m(e,t){if(!e)return{};var a={name:e.name,status:"unknown",image:e.image,restarts:0,command:e.command?e.command:[],args:e.args?e.args:[],ports:e.ports?e.ports:[],env:e.env?e.env:[],volume_mounts:e.volumeMounts?e.volumeMounts:[],image_pull_policy:e.imagePullPolicy?e.imagePullPolicy:"",resources:e.resources?e.resources:{},start_time:"",liveness_probe:e.livenessProbe,readiness_probe:e.readinessProbe};if(t){var o,s=Object(n["a"])(t);try{for(s.s();!(o=s.n()).done;){var r=o.value;if(r.name==e.name){a.restarts=r.restartCount,r.state.running?(a.status="running",a.start_time=r.state.running.startedAt):r.state.terminated?(a.status="terminated",a.start_time=r.state.terminated.startedAt):r.state.waiting&&(a.status="waiting"),a.ready=r.ready;break}}}catch(i){s.e(i)}finally{s.f()}}return a}function p(e){if(!e)return{};var t,a=[],o=Object(n["a"])(e.spec.containers);try{for(o.s();!(t=o.n()).done;){var s=t.value,r=m(s,e.status.containerStatuses);a.push(r)}}catch(g){o.e(g)}finally{o.f()}var i=[];if(e.spec.initContainers){var l,c=Object(n["a"])(e.spec.initContainers);try{for(c.s();!(l=c.n()).done;){var u=l.value;i.push(m(u,e.status.initContainerStatuses))}}catch(g){c.e(g)}finally{c.f()}}var d="",p="";e.metadata.ownerReferences&&e.metadata.ownerReferences.length>0&&(d=e.metadata.ownerReferences[0].kind,p=e.metadata.ownerReferences[0].name);var f={uid:e.metadata.uid,name:e.metadata.name,namespace:e.metadata.namespace,containers:a,init_containers:i,controlled:d,controlled_name:p,qos:e.status.qosClass,status:e.status.phase,ip:e.status.podIP,created:e.metadata.creationTimestamp,node_name:e.spec.nodeName,resource_version:e.metadata.resourceVersion,labels:e.metadata.labels,annonations:e.metadata.annotations,service_account:e.spec.serviceAccountName||e.spec.serviceAccount,node_selector:e.spec.nodeSelector,volumes:e.spec.volumes,conditions:e.status.conditions};f["containerNum"]=f.containers.length,f.init_containers&&(f["containerNum"]+=f.init_containers.length),f["restarts"]=0;var v,b=Object(n["a"])(f.containers);try{for(b.s();!(v=b.n()).done;){var h=v.value;h.restarts>f["restarts"]&&(f["restarts"]=h.restarts)}}catch(g){b.e(g)}finally{b.f()}return f}function f(e,t,a){return t in e&&a in e[t]?e[t][a]:"-"}function v(e){var t=e.name+": ";return e.value?t+=e.value:e.valueFrom&&(e.valueFrom.configMapKeyRef?t+="configmap(".concat(e.valueFrom.configMapKeyRef.key,":").concat(e.valueFrom.configMapKeyRef.name,")"):e.valueFrom.fieldRef?t+="fieldRef(".concat(e.valueFrom.fieldRef.apiVersion,":").concat(e.valueFrom.fieldRef.fieldPath,")"):e.valueFrom.secretKeyRef?t+="secret(".concat(e.valueFrom.secretKeyRef.key,":").concat(e.valueFrom.secretKeyRef.name,")"):t+=String(e.valueFrom)),t}}}]);