(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3a1bf468"],{"09f4":function(e,t,a){"use strict";var n=a("8300"),o=a.n(n);o.a},"4cea":function(e,t,a){"use strict";a.d(t,"c",(function(){return o})),a.d(t,"b",(function(){return s})),a.d(t,"a",(function(){return i})),a.d(t,"d",(function(){return r}));a("99af");var n=a("b775");function o(e){return Object(n["a"])({url:"daemonset/".concat(e),method:"get"})}function s(e,t,a){var o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"";return Object(n["a"])({url:"daemonset/".concat(e,"/").concat(t,"/").concat(a),method:"get",params:{output:o}})}function i(e,t){return Object(n["a"])({url:"daemonset/".concat(e,"/delete"),method:"post",data:t})}function r(e,t,a,o){return Object(n["a"])({url:"daemonset/".concat(e,"/update/").concat(t,"/").concat(a),method:"post",data:{yaml:o}})}},7996:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("clusterbar",{attrs:{titleName:e.titleName,nsFunc:e.nsSearch,nameFunc:e.nameSearch,delFunc:e.delFunc,createFunc:e.createFunc,createDisplay:"创建"}}),a("div",{staticClass:"dashboard-container"},[a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],ref:"multipleTable",staticClass:"table-fix",staticStyle:{width:"100%"},attrs:{data:e.daemonsets,"tooltip-effect":"dark","max-height":e.maxHeight,"cell-style":e.cellStyle,"default-sort":{prop:"name"},"row-key":"uid"},on:{"selection-change":e.handleSelectionChange}},[a("el-table-column",{attrs:{type:"selection",width:"45"}}),a("el-table-column",{attrs:{prop:"name",label:"名称","min-width":"70","show-overflow-tooltip":""},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",{staticClass:"name-class",on:{click:function(a){return e.nameClick(t.row.namespace,t.row.name)}}},[e._v(" "+e._s(t.row.name)+" ")])]}}])}),a("el-table-column",{attrs:{prop:"namespace",label:"命名空间","min-width":"45","show-overflow-tooltip":""}}),a("el-table-column",{attrs:{prop:"ready_replicas",label:"Pods","min-width":"30","show-overflow-tooltip":""},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(" "+e._s(t.row.number_ready)+"/"+e._s(t.row.desired_number_scheduled)+" ")])]}}])}),a("el-table-column",{attrs:{prop:"strategy",label:"更新策略","min-width":"45","show-overflow-tooltip":""}}),a("el-table-column",{attrs:{prop:"node_selector",label:"节点选择","min-width":"70","show-overflow-tooltip":""},scopedSlots:e._u([{key:"default",fn:function(t){return[t.row.node_selector?e._l(t.row.node_selector,(function(t,n){return a("span",{key:n,staticClass:"back-class"},[e._v(" "+e._s(n+"="+t)+" ")])})):e._e()]}}])}),a("el-table-column",{attrs:{prop:"conditions",label:"状态","min-width":"40","show-overflow-tooltip":""},scopedSlots:e._u([{key:"default",fn:function(t){return[t.row.conditions&&t.row.conditions.length>0?e._l(t.row.conditions,(function(t){return a("span",{key:t},[e._v(" "+e._s(t)+" ")])})):a("span",[e._v("—")])]}}])}),a("el-table-column",{attrs:{prop:"created",label:"创建时间","min-width":"60","show-overflow-tooltip":""}}),a("el-table-column",{attrs:{label:"","show-overflow-tooltip":"",width:"45"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-dropdown",{attrs:{size:"medium"}},[a("el-link",{attrs:{underline:!1}},[a("svg-icon",{staticStyle:{width:"1.3em",height:"1.3em"},attrs:{"icon-class":"operate"}})],1),a("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[a("el-dropdown-item",{nativeOn:{click:function(a){return a.preventDefault(),e.nameClick(t.row.namespace,t.row.name)}}},[a("svg-icon",{staticStyle:{width:"1.3em",height:"1.3em","line-height":"40px","vertical-align":"-0.25em"},attrs:{"icon-class":"detail"}}),a("span",{staticStyle:{"margin-left":"5px"}},[e._v("详情")])],1),a("el-dropdown-item",{nativeOn:{click:function(a){return a.preventDefault(),e.getDaemonSetYaml(t.row.namespace,t.row.name)}}},[a("svg-icon",{staticStyle:{width:"1.3em",height:"1.3em","line-height":"40px","vertical-align":"-0.25em"},attrs:{"icon-class":"edit"}}),a("span",{staticStyle:{"margin-left":"5px"}},[e._v("修改")])],1),a("el-dropdown-item",{nativeOn:{click:function(a){return a.preventDefault(),e.deleteDaemonSets([{namespace:t.row.namespace,name:t.row.name}])}}},[a("svg-icon",{staticStyle:{width:"1.3em",height:"1.3em","line-height":"40px","vertical-align":"-0.25em"},attrs:{"icon-class":"delete"}}),a("span",{staticStyle:{"margin-left":"5px"}},[e._v("删除")])],1)],1)],1)]}}])})],1)],1),a("el-dialog",{attrs:{title:"编辑",visible:e.yamlDialog,"close-on-click-modal":!1,width:"60%",top:"55px"},on:{"update:visible":function(t){e.yamlDialog=t}}},[e.yamlDialog?a("yaml",{attrs:{loading:e.yamlLoading},model:{value:e.yamlValue,callback:function(t){e.yamlValue=t},expression:"yamlValue"}}):e._e(),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{plain:"",size:"small"},on:{click:function(t){e.yamlDialog=!1}}},[e._v("取 消")]),a("el-button",{attrs:{plain:"",size:"small"},on:{click:function(t){return e.updateDaemonSet()}}},[e._v("确 定")])],1)],1)],1)},o=[],s=(a("4de4"),a("caad"),a("c975"),a("b0c0"),a("2532"),a("b85c")),i=a("61b2"),r=a("4cea"),l=a("5c96"),c={name:"DaemonSet",components:{Clusterbar:i["a"],Yaml:i["f"]},data:function(){return{yamlDialog:!1,yamlNamespace:"",yamlName:"",yamlValue:"",yamlLoading:!0,cellStyle:{border:0},titleName:["DaemonSets"],maxHeight:window.innerHeight-150,loading:!0,originDaemonSets:[],search_ns:[],search_name:"",delFunc:void 0,delDaemonSets:[]}},created:function(){this.fetchData()},mounted:function(){var e=this;window.onresize=function(){return function(){var t=window.innerHeight-150;e.maxHeight=t}()}},watch:{daemonsetsWatch:function(e){if(e){var t=e.resource.metadata.uid,a=e.resource.metadata.resourceVersion;if("add"===e.event)this.originDaemonSets.push(this.buildDaemonSets(e.resource));else if("update"===e.event)for(var n in this.originDaemonSets){var o=this.originDaemonSets[n];if(o.uid===t){if(o.resource_version<a){var s=this.buildDaemonSets(e.resource);this.$set(this.originDaemonSets,n,s)}break}}else"delete"===e.event&&(this.originDaemonSets=this.originDaemonSets.filter((function(e){var a=e.uid;return a!==t})))}}},computed:{daemonsets:function(){var e,t=[],a=Object(s["a"])(this.originDaemonSets);try{for(a.s();!(e=a.n()).done;){var n=e.value;this.search_ns.length>0&&this.search_ns.indexOf(n.namespace)<0||(this.search_name&&!n.name.includes(this.search_name)||(n.conditions&&n.conditions.length>0?n.conditions.sort():n.conditions=[],t.push(n)))}}catch(o){a.e(o)}finally{a.f()}return t},daemonsetsWatch:function(){return this.$store.getters["ws/daemonsetsWatch"]}},methods:{fetchData:function(){var e=this;this.loading=!0,this.originDaemonSets=[];var t=this.$store.state.cluster;t?Object(r["c"])(t).then((function(t){e.loading=!1,e.originDaemonSets=t.data})).catch((function(){e.loading=!1})):(this.loading=!1,l["Message"].error("获取集群异常，请刷新重试"))},nsSearch:function(e){this.search_ns=[];var t,a=Object(s["a"])(e);try{for(a.s();!(t=a.n()).done;){var n=t.value;this.search_ns.push(n)}}catch(o){a.e(o)}finally{a.f()}},nameSearch:function(e){this.search_name=e},buildDaemonSets:function(e){if(e){var t=[];if(e.status.conditions){var a,n=Object(s["a"])(e.status.conditions);try{for(n.s();!(a=n.n()).done;){var o=a.value;"True"===o.status&&t.push(o.type)}}catch(r){n.e(r)}finally{n.f()}}var i={uid:e.metadata.uid,namespace:e.metadata.namespace,name:e.metadata.name,desired_number_scheduled:e.status.desiredNumberScheduled||0,number_ready:e.status.numberReady||0,resource_version:e.metadata.resourceVersion,strategy:e.spec.updateStrategy.type,conditions:t,node_selector:e.spec.template.spec.nodeSelector,created:e.metadata.creationTimestamp};return i}},nameClick:function(e,t){this.$router.push({name:"daemonsetDetail",params:{namespace:e,daemonsetName:t}})},getDaemonSetYaml:function(e,t){var a=this;this.yamlNamespace="",this.yamlName="";var n=this.$store.state.cluster;n?e?t?(this.yamlValue="",this.yamlDialog=!0,this.yamlLoading=!0,Object(r["b"])(n,e,t,"yaml").then((function(n){a.yamlLoading=!1,a.yamlValue=n.data,a.yamlNamespace=e,a.yamlName=t})).catch((function(){a.yamlLoading=!1}))):l["Message"].error("获取Deployment名称参数异常，请刷新重试"):l["Message"].error("获取命名空间参数异常，请刷新重试"):l["Message"].error("获取集群参数异常，请刷新重试")},deleteDaemonSets:function(e){var t=this.$store.state.cluster;if(t)if(e.length<=0)l["Message"].error("请选择要删除的DaemonSets");else{var a={resources:e};Object(r["a"])(t,a).then((function(){l["Message"].success("删除成功")})).catch((function(){}))}else l["Message"].error("获取集群参数异常，请刷新重试")},updateDaemonSet:function(){var e=this.$store.state.cluster;e?this.yamlNamespace?this.yamlName?(console.log(this.yamlValue),Object(r["d"])(e,this.yamlNamespace,this.yamlName,this.yamlValue).then((function(){l["Message"].success("更新成功")})).catch((function(){}))):l["Message"].error("获取DaemonSet参数异常，请刷新重试"):l["Message"].error("获取命名空间参数异常，请刷新重试"):l["Message"].error("获取集群参数异常，请刷新重试")},_delDaemonSetsFunc:function(){if(this.delDaemonSets.length>0){var e,t=[],a=Object(s["a"])(this.delDaemonSets);try{for(a.s();!(e=a.n()).done;){var n=e.value;t.push({namespace:n.namespace,name:n.name})}}catch(o){a.e(o)}finally{a.f()}this.deleteDaemonSets(t)}},handleSelectionChange:function(e){this.delDaemonSets=e,e.length>0?this.delFunc=this._delDaemonSetsFunc:this.delFunc=void 0},createFunc:function(){this.$router.push({name:"daemonsetCreate"})}}},u=c,m=(a("09f4"),a("e035"),a("2877")),d=Object(m["a"])(u,n,o,!1,null,"e467c2a8",null);t["default"]=d.exports},8300:function(e,t,a){},e035:function(e,t,a){"use strict";var n=a("fa12"),o=a.n(n);o.a},fa12:function(e,t,a){}}]);