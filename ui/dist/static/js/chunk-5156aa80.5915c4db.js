(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5156aa80"],{4281:function(e,t,a){},"5a78":function(e,t,a){"use strict";var n=a("b607"),s=a.n(n);s.a},"76fe":function(e,t,a){"use strict";a.d(t,"d",(function(){return o})),a.d(t,"c",(function(){return i})),a.d(t,"b",(function(){return c})),a.d(t,"e",(function(){return l})),a.d(t,"a",(function(){return r}));a("99af"),a("b0c0");var n=a("b85c"),s=a("b775");function o(e,t){return Object(s["a"])({url:"job/".concat(e),method:"get",params:{cronjob_uid:t}})}function i(e,t,a){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"";return Object(s["a"])({url:"job/".concat(e,"/").concat(t,"/").concat(a),method:"get",params:{output:n}})}function c(e,t){return Object(s["a"])({url:"job/".concat(e,"/delete"),method:"post",data:t})}function l(e,t,a,n){return Object(s["a"])({url:"job/".concat(e,"/update/").concat(t,"/").concat(a),method:"post",data:{yaml:n}})}function r(e){if(e){var t=[];if(e.status.conditions){var a,s=Object(n["a"])(e.status.conditions);try{for(s.s();!(a=s.n()).done;){var o=a.value;"True"===o.status&&t.push(o.type)}}catch(c){s.e(c)}finally{s.f()}}var i={uid:e.metadata.uid,namespace:e.metadata.namespace,name:e.metadata.name,completions:e.spec.completions||0,active:e.status.active||0,succeeded:e.status.succeeded||0,failed:e.status.failed||0,resource_version:e.metadata.resourceVersion,conditions:t,node_selector:e.spec.template.spec.nodeSelector,created:e.metadata.creationTimestamp};return i}}},b029:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("clusterbar",{attrs:{titleName:e.titleName,nsFunc:e.nsSearch,nameFunc:e.nameSearch,delFunc:e.delFunc}}),a("div",{staticClass:"dashboard-container"},[a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],ref:"multipleTable",staticClass:"table-fix",staticStyle:{width:"100%"},attrs:{data:e.jobs,"tooltip-effect":"dark","max-height":e.maxHeight,"cell-style":e.cellStyle,"default-sort":{prop:"name"},"row-key":"uid"},on:{"selection-change":e.handleSelectionChange}},[a("el-table-column",{attrs:{type:"selection",width:"45"}}),a("el-table-column",{attrs:{prop:"name",label:"名称","min-width":"50","show-overflow-tooltip":""},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",{staticClass:"name-class",on:{click:function(a){return e.nameClick(t.row.namespace,t.row.name)}}},[e._v(" "+e._s(t.row.name)+" ")])]}}])}),a("el-table-column",{attrs:{prop:"namespace",label:"命名空间","min-width":"40","show-overflow-tooltip":""}}),a("el-table-column",{attrs:{prop:"ready_replicas",label:"Pods","min-width":"55","show-overflow-tooltip":""},scopedSlots:e._u([{key:"default",fn:function(t){return[t.row.active>0?a("span",{staticClass:"back-class"},[e._v(" "+e._s(t.row.active)+" Running ")]):e._e(),t.row.succeeded>0?a("span",{staticClass:"back-class"},[e._v(" "+e._s(t.row.succeeded)+" Succeeded ")]):e._e(),t.row.failed>0?a("span",{staticClass:"back-class"},[e._v(" "+e._s(t.row.failed)+" Failed ")]):e._e()]}}])}),a("el-table-column",{attrs:{prop:"completions",label:"Completions","min-width":"40","show-overflow-tooltip":""}}),a("el-table-column",{attrs:{prop:"conditions",label:"状态","min-width":"30","show-overflow-tooltip":""},scopedSlots:e._u([{key:"default",fn:function(t){return[t.row.conditions&&t.row.conditions.length>0?e._l(t.row.conditions,(function(t){return a("span",{key:t},[e._v(" "+e._s(t)+" ")])})):a("span",[e._v("—")])]}}])}),a("el-table-column",{attrs:{prop:"created",label:"创建时间","min-width":"40","show-overflow-tooltip":""}}),a("el-table-column",{attrs:{label:"","show-overflow-tooltip":"",width:"45"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-dropdown",{attrs:{size:"medium"}},[a("el-link",{attrs:{underline:!1}},[a("svg-icon",{staticStyle:{width:"1.3em",height:"1.3em"},attrs:{"icon-class":"operate"}})],1),a("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[a("el-dropdown-item",{nativeOn:{click:function(a){return a.preventDefault(),e.nameClick(t.row.namespace,t.row.name)}}},[a("svg-icon",{staticStyle:{width:"1.3em",height:"1.3em","line-height":"40px","vertical-align":"-0.25em"},attrs:{"icon-class":"detail"}}),a("span",{staticStyle:{"margin-left":"5px"}},[e._v("详情")])],1),e.$updatePerm()?a("el-dropdown-item",{nativeOn:{click:function(a){return a.preventDefault(),e.getJobYaml(t.row.namespace,t.row.name)}}},[a("svg-icon",{staticStyle:{width:"1.3em",height:"1.3em","line-height":"40px","vertical-align":"-0.25em"},attrs:{"icon-class":"edit"}}),a("span",{staticStyle:{"margin-left":"5px"}},[e._v("修改")])],1):e._e(),e.$deletePerm()?a("el-dropdown-item",{nativeOn:{click:function(a){return a.preventDefault(),e.deleteJobs([{namespace:t.row.namespace,name:t.row.name}])}}},[a("svg-icon",{staticStyle:{width:"1.3em",height:"1.3em","line-height":"40px","vertical-align":"-0.25em"},attrs:{"icon-class":"delete"}}),a("span",{staticStyle:{"margin-left":"5px"}},[e._v("删除")])],1):e._e()],1)],1)]}}])})],1)],1),a("el-dialog",{attrs:{title:"编辑",visible:e.yamlDialog,"close-on-click-modal":!1,width:"60%",top:"55px"},on:{"update:visible":function(t){e.yamlDialog=t}}},[e.yamlDialog?a("yaml",{attrs:{loading:e.yamlLoading},model:{value:e.yamlValue,callback:function(t){e.yamlValue=t},expression:"yamlValue"}}):e._e(),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{plain:"",size:"small"},on:{click:function(t){e.yamlDialog=!1}}},[e._v("取 消")]),a("el-button",{attrs:{plain:"",size:"small"},on:{click:function(t){return e.updateJob()}}},[e._v("确 定")])],1)],1)],1)},s=[],o=(a("4de4"),a("caad"),a("c975"),a("b0c0"),a("2532"),a("b85c")),i=a("61b2"),c=a("76fe"),l=a("5c96"),r={name:"Job",components:{Clusterbar:i["a"],Yaml:i["f"]},data:function(){return{yamlDialog:!1,yamlNamespace:"",yamlName:"",yamlValue:"",yamlLoading:!0,cellStyle:{border:0},titleName:["Jobs"],maxHeight:window.innerHeight-150,loading:!0,originJobs:[],search_ns:[],search_name:"",delFunc:void 0,delJobs:[]}},created:function(){this.fetchData()},mounted:function(){var e=this;window.onresize=function(){return function(){var t=window.innerHeight-150;e.maxHeight=t}()}},watch:{jobsWatch:function(e){if(e){var t=e.resource.metadata.uid,a=e.resource.metadata.resourceVersion;if("add"===e.event)this.originJobs.push(this.buildJobs(e.resource));else if("update"===e.event)for(var n in this.originJobs){var s=this.originJobs[n];if(s.uid===t){if(s.resource_version<a){var o=this.buildJobs(e.resource);this.$set(this.originJobs,n,o)}break}}else"delete"===e.event&&(this.originJobs=this.originJobs.filter((function(e){var a=e.uid;return a!==t})))}}},computed:{jobs:function(){var e,t=[],a=Object(o["a"])(this.originJobs);try{for(a.s();!(e=a.n()).done;){var n=e.value;this.search_ns.length>0&&this.search_ns.indexOf(n.namespace)<0||(this.search_name&&!n.name.includes(this.search_name)||(n.conditions&&n.conditions.length>0?n.conditions.sort():n.conditions=[],t.push(n)))}}catch(s){a.e(s)}finally{a.f()}return t},jobsWatch:function(){return this.$store.getters["ws/jobsWatch"]}},methods:{fetchData:function(){var e=this;this.loading=!0,this.originJobs=[];var t=this.$store.state.cluster;t?Object(c["d"])(t).then((function(t){e.loading=!1,e.originJobs=t.data?t.data:[]})).catch((function(){e.loading=!1})):(this.loading=!1,l["Message"].error("获取集群异常，请刷新重试"))},nsSearch:function(e){this.search_ns=[];var t,a=Object(o["a"])(e);try{for(a.s();!(t=a.n()).done;){var n=t.value;this.search_ns.push(n)}}catch(s){a.e(s)}finally{a.f()}},nameSearch:function(e){this.search_name=e},buildJobs:function(e){if(e){var t=[];if(e.status.conditions){var a,n=Object(o["a"])(e.status.conditions);try{for(n.s();!(a=n.n()).done;){var s=a.value;"True"===s.status&&t.push(s.type)}}catch(c){n.e(c)}finally{n.f()}}var i={uid:e.metadata.uid,namespace:e.metadata.namespace,name:e.metadata.name,completions:e.spec.completions||0,active:e.status.active||0,succeeded:e.status.succeeded||0,failed:e.status.failed||0,resource_version:e.metadata.resourceVersion,conditions:t,node_selector:e.spec.template.spec.nodeSelector,created:e.metadata.creationTimestamp};return i}},nameClick:function(e,t){this.$router.push({name:"jobDetail",params:{namespace:e,jobName:t}})},getJobYaml:function(e,t){var a=this;this.yamlNamespace="",this.yamlName="";var n=this.$store.state.cluster;n?e?t?(this.yamlValue="",this.yamlDialog=!0,this.yamlLoading=!0,Object(c["c"])(n,e,t,"yaml").then((function(n){a.yamlLoading=!1,a.yamlValue=n.data,a.yamlNamespace=e,a.yamlName=t})).catch((function(){a.yamlLoading=!1}))):l["Message"].error("获取Deployment名称参数异常，请刷新重试"):l["Message"].error("获取命名空间参数异常，请刷新重试"):l["Message"].error("获取集群参数异常，请刷新重试")},deleteJobs:function(e){var t=this.$store.state.cluster;if(t)if(e.length<=0)l["Message"].error("请选择要删除的Jobs");else{var a={resources:e};Object(c["b"])(t,a).then((function(){l["Message"].success("删除成功")})).catch((function(){}))}else l["Message"].error("获取集群参数异常，请刷新重试")},updateJob:function(){var e=this.$store.state.cluster;e?this.yamlNamespace?this.yamlName?(console.log(this.yamlValue),Object(c["e"])(e,this.yamlNamespace,this.yamlName,this.yamlValue).then((function(){l["Message"].success("更新成功")})).catch((function(){}))):l["Message"].error("获取Job参数异常，请刷新重试"):l["Message"].error("获取命名空间参数异常，请刷新重试"):l["Message"].error("获取集群参数异常，请刷新重试")},_delJobsFunc:function(){if(this.delJobs.length>0){var e,t=[],a=Object(o["a"])(this.delJobs);try{for(a.s();!(e=a.n()).done;){var n=e.value;t.push({namespace:n.namespace,name:n.name})}}catch(s){a.e(s)}finally{a.f()}this.deleteJobs(t)}},handleSelectionChange:function(e){this.delJobs=e,e.length>0?this.delFunc=this._delJobsFunc:this.delFunc=void 0}}},u=r,d=(a("5a78"),a("d4f5"),a("2877")),m=Object(d["a"])(u,n,s,!1,null,"b1c10e56",null);t["default"]=m.exports},b607:function(e,t,a){},d4f5:function(e,t,a){"use strict";var n=a("4281"),s=a.n(n);s.a}}]);