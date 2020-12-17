(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0c3f1b26"],{8215:function(e,t,a){"use strict";var n=a("df86"),o=a.n(n);o.a},8372:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("clusterbar",{attrs:{titleName:e.titleName,nsFunc:e.nsSearch,nameFunc:e.nameSearch,delFunc:e.delFunc}}),a("div",{staticClass:"dashboard-container"},[a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],ref:"multipleTable",staticClass:"table-fix",staticStyle:{width:"100%"},attrs:{data:e.cronjobs,"tooltip-effect":"dark","max-height":e.maxHeight,"cell-style":e.cellStyle,"default-sort":{prop:"name"},"row-key":"uid"},on:{"selection-change":e.handleSelectionChange}},[a("el-table-column",{attrs:{type:"selection",width:"45"}}),a("el-table-column",{attrs:{prop:"name",label:"名称","min-width":"45","show-overflow-tooltip":""},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",{staticClass:"name-class",on:{click:function(a){return e.nameClick(t.row.namespace,t.row.name)}}},[e._v(" "+e._s(t.row.name)+" ")])]}}])}),a("el-table-column",{attrs:{prop:"namespace",label:"命名空间","min-width":"40","show-overflow-tooltip":""}}),a("el-table-column",{attrs:{prop:"schedule",label:"定时","min-width":"40","show-overflow-tooltip":""}}),a("el-table-column",{attrs:{prop:"suspend",label:"挂起","min-width":"40","show-overflow-tooltip":""}}),a("el-table-column",{attrs:{prop:"concurrency_policy",label:"并发策略","min-width":"35","show-overflow-tooltip":""}}),a("el-table-column",{attrs:{prop:"last_schedule_time",label:"上一次执行","min-width":"50","show-overflow-tooltip":""}}),a("el-table-column",{attrs:{prop:"created",label:"创建时间","min-width":"50","show-overflow-tooltip":""}}),a("el-table-column",{attrs:{label:"","show-overflow-tooltip":"",width:"45"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-dropdown",{attrs:{size:"medium"}},[a("el-link",{attrs:{underline:!1}},[a("svg-icon",{staticStyle:{width:"1.3em",height:"1.3em"},attrs:{"icon-class":"operate"}})],1),a("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[a("el-dropdown-item",{nativeOn:{click:function(a){return a.preventDefault(),e.nameClick(t.row.namespace,t.row.name)}}},[a("svg-icon",{staticStyle:{width:"1.3em",height:"1.3em","line-height":"40px","vertical-align":"-0.25em"},attrs:{"icon-class":"detail"}}),a("span",{staticStyle:{"margin-left":"5px"}},[e._v("详情")])],1),a("el-dropdown-item",{nativeOn:{click:function(a){return a.preventDefault(),e.getCronJobYaml(t.row.namespace,t.row.name)}}},[a("svg-icon",{staticStyle:{width:"1.3em",height:"1.3em","line-height":"40px","vertical-align":"-0.25em"},attrs:{"icon-class":"edit"}}),a("span",{staticStyle:{"margin-left":"5px"}},[e._v("修改")])],1),a("el-dropdown-item",{nativeOn:{click:function(a){return a.preventDefault(),e.deleteCronJobs([{namespace:t.row.namespace,name:t.row.name}])}}},[a("svg-icon",{staticStyle:{width:"1.3em",height:"1.3em","line-height":"40px","vertical-align":"-0.25em"},attrs:{"icon-class":"delete"}}),a("span",{staticStyle:{"margin-left":"5px"}},[e._v("删除")])],1)],1)],1)]}}])})],1)],1),a("el-dialog",{attrs:{title:"编辑",visible:e.yamlDialog,"close-on-click-modal":!1,width:"60%",top:"55px"},on:{"update:visible":function(t){e.yamlDialog=t}}},[e.yamlDialog?a("yaml",{attrs:{loading:e.yamlLoading},model:{value:e.yamlValue,callback:function(t){e.yamlValue=t},expression:"yamlValue"}}):e._e(),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{plain:"",size:"small"},on:{click:function(t){e.yamlDialog=!1}}},[e._v("取 消")]),a("el-button",{attrs:{plain:"",size:"small"},on:{click:function(t){return e.updateCronJob()}}},[e._v("确 定")])],1)],1)],1)},o=[],s=(a("4de4"),a("caad"),a("c975"),a("b0c0"),a("2532"),a("b85c")),i=a("61b2"),r=a("994f"),l=a("5c96"),c={name:"CronJob",components:{Clusterbar:i["a"],Yaml:i["d"]},data:function(){return{yamlDialog:!1,yamlNamespace:"",yamlName:"",yamlValue:"",yamlLoading:!0,cellStyle:{border:0},titleName:["CronJobs"],maxHeight:window.innerHeight-150,loading:!0,originCronJobs:[],search_ns:[],search_name:"",delFunc:void 0,delCronJobs:[]}},created:function(){this.fetchData()},mounted:function(){var e=this;window.onresize=function(){return function(){var t=window.innerHeight-150;e.maxHeight=t}()}},watch:{cronjobsWatch:function(e){if(e){var t=e.resource.metadata.uid,a=e.resource.metadata.resourceVersion;if("add"===e.event)this.originCronJobs.push(this.buildCronJobs(e.resource));else if("update"===e.event)for(var n in this.originCronJobs){var o=this.originCronJobs[n];if(o.uid===t){if(o.resource_version<a){var s=this.buildCronJobs(e.resource);this.$set(this.originCronJobs,n,s)}break}}else"delete"===e.event&&(this.originCronJobs=this.originCronJobs.filter((function(e){var a=e.uid;return a!==t})))}}},computed:{cronjobs:function(){var e,t=[],a=Object(s["a"])(this.originCronJobs);try{for(a.s();!(e=a.n()).done;){var n=e.value;this.search_ns.length>0&&this.search_ns.indexOf(n.namespace)<0||(this.search_name&&!n.name.includes(this.search_name)||(n.conditions&&n.conditions.length>0?n.conditions.sort():n.conditions=[],t.push(n)))}}catch(o){a.e(o)}finally{a.f()}return t},cronjobsWatch:function(){return this.$store.getters["ws/cronjobsWatch"]}},methods:{fetchData:function(){var e=this;this.loading=!0,this.originCronJobs=[];var t=this.$store.state.cluster;t?Object(r["c"])(t).then((function(t){e.loading=!1,e.originCronJobs=t.data?t.data:[]})).catch((function(){e.loading=!1})):(this.loading=!1,l["Message"].error("获取集群异常，请刷新重试"))},nsSearch:function(e){this.search_ns=[];var t,a=Object(s["a"])(e);try{for(a.s();!(t=a.n()).done;){var n=t.value;this.search_ns.push(n)}}catch(o){a.e(o)}finally{a.f()}},nameSearch:function(e){this.search_name=e},buildCronJobs:function(e){if(e){var t=[];if(e.status.conditions){var a,n=Object(s["a"])(e.status.conditions);try{for(n.s();!(a=n.n()).done;){var o=a.value;"True"===o.status&&t.push(o.type)}}catch(r){n.e(r)}finally{n.f()}}var i={uid:e.metadata.uid,namespace:e.metadata.namespace,name:e.metadata.name,active:e.status.active,last_schedule_time:e.status.lastScheduleTime,schedule:e.spec.schedule,resource_version:e.metadata.resourceVersion,concurrency_policy:e.Spec.concurrencyPolicy,suspend:e.spec.suspend,created:e.metadata.creationTimestamp};return i}},nameClick:function(e,t){this.$router.push({name:"cronjobDetail",params:{namespace:e,cronjobName:t}})},getCronJobYaml:function(e,t){var a=this;this.yamlNamespace="",this.yamlName="";var n=this.$store.state.cluster;n?e?t?(this.yamlValue="",this.yamlDialog=!0,this.yamlLoading=!0,Object(r["b"])(n,e,t,"yaml").then((function(n){a.yamlLoading=!1,a.yamlValue=n.data,a.yamlNamespace=e,a.yamlName=t})).catch((function(){a.yamlLoading=!1}))):l["Message"].error("获取Deployment名称参数异常，请刷新重试"):l["Message"].error("获取命名空间参数异常，请刷新重试"):l["Message"].error("获取集群参数异常，请刷新重试")},deleteCronJobs:function(e){var t=this.$store.state.cluster;if(t)if(e.length<=0)l["Message"].error("请选择要删除的CronJobs");else{var a={resources:e};Object(r["a"])(t,a).then((function(){l["Message"].success("删除成功")})).catch((function(){}))}else l["Message"].error("获取集群参数异常，请刷新重试")},updateCronJob:function(){var e=this.$store.state.cluster;e?this.yamlNamespace?this.yamlName?(console.log(this.yamlValue),Object(r["d"])(e,this.yamlNamespace,this.yamlName,this.yamlValue).then((function(){l["Message"].success("更新成功")})).catch((function(){}))):l["Message"].error("获取CronJob参数异常，请刷新重试"):l["Message"].error("获取命名空间参数异常，请刷新重试"):l["Message"].error("获取集群参数异常，请刷新重试")},_delCronJobsFunc:function(){if(this.delCronJobs.length>0){var e,t=[],a=Object(s["a"])(this.delCronJobs);try{for(a.s();!(e=a.n()).done;){var n=e.value;t.push({namespace:n.namespace,name:n.name})}}catch(o){a.e(o)}finally{a.f()}this.deleteCronJobs(t)}},handleSelectionChange:function(e){this.delCronJobs=e,e.length>0?this.delFunc=this._delCronJobsFunc:this.delFunc=void 0}}},u=c,d=(a("fa11"),a("8215"),a("2877")),m=Object(d["a"])(u,n,o,!1,null,"6ffa20aa",null);t["default"]=m.exports},"994f":function(e,t,a){"use strict";a.d(t,"c",(function(){return o})),a.d(t,"b",(function(){return s})),a.d(t,"a",(function(){return i})),a.d(t,"d",(function(){return r}));a("99af");var n=a("b775");function o(e){return Object(n["a"])({url:"cronjob/".concat(e),method:"get"})}function s(e,t,a){var o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"";return Object(n["a"])({url:"cronjob/".concat(e,"/").concat(t,"/").concat(a),method:"get",params:{output:o}})}function i(e,t){return Object(n["a"])({url:"cronjob/".concat(e,"/delete"),method:"post",data:t})}function r(e,t,a,o){return Object(n["a"])({url:"cronjob/".concat(e,"/update/").concat(t,"/").concat(a),method:"post",data:{yaml:o}})}},c16c:function(e,t,a){},df86:function(e,t,a){},fa11:function(e,t,a){"use strict";var n=a("c16c"),o=a.n(n);o.a}}]);