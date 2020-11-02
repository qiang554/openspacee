(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-b287c250"],{3349:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("clusterbar",{attrs:{titleName:e.titleName,nsFunc:e.nsSearch,nameFunc:e.nameSearch,delFunc:e.delFunc}}),a("div",{staticClass:"dashboard-container"},[a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],ref:"multipleTable",staticClass:"table-fix",staticStyle:{width:"100%"},attrs:{data:e.pods,"tooltip-effect":"dark","max-height":e.maxHeight,"cell-style":e.cellStyle,"default-sort":{prop:"name"},"row-key":"uid"},on:{"selection-change":e.handleSelectionChange}},[a("el-table-column",{attrs:{type:"selection",width:"45"}}),a("el-table-column",{attrs:{prop:"name",label:"名称","min-width":"170","show-overflow-tooltip":""},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",{staticClass:"name-class",on:{click:function(a){return e.nameClick(t.row.namespace,t.row.name)}}},[e._v(" "+e._s(t.row.name)+" ")])]}}])}),a("el-table-column",{attrs:{prop:"namespace",label:"命名空间","min-width":"90","show-overflow-tooltip":""}}),a("el-table-column",{attrs:{prop:"containerNum",label:"容器","min-width":"65","show-overflow-tooltip":""},scopedSlots:e._u([{key:"default",fn:function(t){return[t.row.init_containers?e._l(t.row.init_containers,(function(t){return a("el-tooltip",{key:t.name,attrs:{content:t.name+" ("+t.status+")",placement:"top"}},[a("svg-icon",{class:e.containerClass(t.status),staticStyle:{"margin-top":"7px"},attrs:{"icon-class":"square"}})],1)})):e._e(),e._l(t.row.containers,(function(t){return a("el-tooltip",{key:t.name,attrs:{content:t.name+" ("+t.status+")",placement:"top"}},[a("svg-icon",{class:e.containerClass(t.status),staticStyle:{"margin-top":"7px"},attrs:{"icon-class":"square"}})],1)}))]}}])}),a("el-table-column",{attrs:{prop:"restarts",label:"重启","min-width":"45","show-overflow-tooltip":""}}),a("el-table-column",{attrs:{prop:"node_name",label:"节点","show-overflow-tooltip":""}}),a("el-table-column",{attrs:{prop:"ip",label:"IP","show-overflow-tooltip":""}}),a("el-table-column",{attrs:{prop:"controlled",label:"控制器","show-overflow-tooltip":""}}),a("el-table-column",{attrs:{prop:"created",label:"创建时间","min-width":"140","show-overflow-tooltip":""}}),a("el-table-column",{attrs:{prop:"status",label:"状态","min-width":"60","show-overflow-tooltip":""}}),a("el-table-column",{attrs:{label:"","show-overflow-tooltip":"",width:"45"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-dropdown",{attrs:{size:"medium"}},[a("el-link",{attrs:{underline:!1}},[a("svg-icon",{staticStyle:{width:"1.3em",height:"1.3em"},attrs:{"icon-class":"operate"}})],1),a("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[a("el-dropdown-item",{nativeOn:{click:function(a){return a.preventDefault(),e.nameClick(t.row.namespace,t.row.name)}}},[a("svg-icon",{staticStyle:{width:"1.3em",height:"1.3em","line-height":"40px","vertical-align":"-0.25em"},attrs:{"icon-class":"detail"}}),a("span",{staticStyle:{"margin-left":"5px"}},[e._v("详情")])],1),a("el-dropdown-item",{nativeOn:{click:function(a){return a.preventDefault(),e.getPodYaml(t.row.namespace,t.row.name)}}},[a("svg-icon",{staticStyle:{width:"1.3em",height:"1.3em","line-height":"40px","vertical-align":"-0.25em"},attrs:{"icon-class":"edit"}}),a("span",{staticStyle:{"margin-left":"5px"}},[e._v("修改")])],1),a("el-dropdown-item",{nativeOn:{click:function(a){return a.preventDefault(),e.deletePods([{namespace:t.row.namespace,name:t.row.name}])}}},[a("svg-icon",{staticStyle:{width:"1.3em",height:"1.3em","line-height":"40px","vertical-align":"-0.25em"},attrs:{"icon-class":"delete"}}),a("span",{staticStyle:{"margin-left":"5px"}},[e._v("删除")])],1)],1)],1)]}}])})],1)],1),a("el-dialog",{attrs:{title:"编辑",visible:e.yamlDialog,"close-on-click-modal":!1,width:"60%",top:"55px"},on:{"update:visible":function(t){e.yamlDialog=t}}},[e.yamlDialog?a("yaml",{attrs:{loading:e.yamlLoading},model:{value:e.yamlValue,callback:function(t){e.yamlValue=t},expression:"yamlValue"}}):e._e(),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{plain:"",size:"small"},on:{click:function(t){e.yamlDialog=!1}}},[e._v("取 消")]),a("el-button",{attrs:{plain:"",size:"small"},on:{click:function(t){return e.updatePod()}}},[e._v("确 定")])],1)],1)],1)},o=[],s=(a("4de4"),a("caad"),a("c975"),a("b0c0"),a("2532"),a("b85c")),i=a("61b2"),l=a("f492"),r=a("5c96"),c={name:"Pod",components:{Clusterbar:i["a"],Yaml:i["d"]},data:function(){return{yamlDialog:!1,yamlNamespace:"",yamlName:"",yamlValue:"",yamlLoading:!0,cellStyle:{border:0},titleName:["Pods"],maxHeight:window.innerHeight-150,loading:!0,originPods:[],search_ns:[],search_name:"",delFunc:void 0,delPods:[]}},created:function(){this.fetchData()},mounted:function(){var e=this;window.onresize=function(){return function(){var t=window.innerHeight-150;e.maxHeight=t}()}},watch:{podsWatch:function(e){if(e){var t=e.resource.metadata.uid,a=e.resource.metadata.resourceVersion;if("add"===e.event)this.originPods.push(Object(l["a"])(e.resource));else if("update"===e.event)for(var n in this.originPods){var o=this.originPods[n];if(o.uid===t&&o.resource_version<a){var s=Object(l["a"])(e.resource);this.$set(this.originPods,n,s);break}}else"delete"===e.event&&(this.originPods=this.originPods.filter((function(e){var a=e.uid;return a!==t})))}}},computed:{pods:function(){var e,t=[],a=Object(s["a"])(this.originPods);try{for(a.s();!(e=a.n()).done;){var n=e.value;this.search_ns.length>0&&this.search_ns.indexOf(n.namespace)<0||(this.search_name&&!n.name.includes(this.search_name)||t.push(n))}}catch(o){a.e(o)}finally{a.f()}return t},podsWatch:function(){return this.$store.getters["ws/podWatch"]}},methods:{fetchData:function(){var e=this;this.loading=!0,this.originPods=[];var t=this.$store.state.cluster;t?Object(l["e"])(t).then((function(t){e.loading=!1,e.originPods=t.data})).catch((function(){e.loading=!1})):(this.loading=!1,r["Message"].error("获取集群异常，请刷新重试"))},nsSearch:function(e){this.search_ns=[];var t,a=Object(s["a"])(e);try{for(a.s();!(t=a.n()).done;){var n=t.value;this.search_ns.push(n)}}catch(o){a.e(o)}finally{a.f()}},nameSearch:function(e){this.search_name=e},nameClick:function(e,t){this.$router.push({name:"podsDetail",params:{namespace:e,podName:t}})},containerClass:function(e){return"running"===e?"running-class":"terminated"===e?"terminate-class":"waiting"===e?"waiting-class":void 0},getPodYaml:function(e,t){var a=this;this.yamlNamespace="",this.yamlName="";var n=this.$store.state.cluster;n?e?t?(this.yamlValue="",this.yamlDialog=!0,this.yamlLoading=!0,Object(l["d"])(n,e,t,"yaml").then((function(n){a.yamlLoading=!1,a.yamlValue=n.data,a.yamlNamespace=e,a.yamlName=t})).catch((function(){a.yamlLoading=!1}))):r["Message"].error("获取Pod名称参数异常，请刷新重试"):r["Message"].error("获取命名空间参数异常，请刷新重试"):r["Message"].error("获取集群参数异常，请刷新重试")},deletePods:function(e){var t=this.$store.state.cluster;if(t)if(e.length<=0)r["Message"].error("请选择要删除的POD");else{var a={resources:e};Object(l["c"])(t,a).then((function(){r["Message"].success("删除成功")})).catch((function(){}))}else r["Message"].error("获取集群参数异常，请刷新重试")},updatePod:function(){var e=this.$store.state.cluster;e?this.yamlNamespace?this.yamlName?(console.log(this.yamlValue),Object(l["g"])(e,this.yamlNamespace,this.yamlName,this.yamlValue).then((function(){r["Message"].success("更新成功")})).catch((function(){}))):r["Message"].error("获取POD参数异常，请刷新重试"):r["Message"].error("获取命名空间参数异常，请刷新重试"):r["Message"].error("获取集群参数异常，请刷新重试")},_delPodsFunc:function(){if(console.log("delete ",this.delPods),this.delPods.length>0){var e,t=[],a=Object(s["a"])(this.delPods);try{for(a.s();!(e=a.n()).done;){var n=e.value;t.push({namespace:n.namespace,name:n.name})}}catch(o){a.e(o)}finally{a.f()}this.deletePods(t)}},handleSelectionChange:function(e){console.log(e),this.delPods=e,e.length>0?this.delFunc=this._delPodsFunc:this.delFunc=void 0}}},u=c,d=(a("63ee"),a("a4a7"),a("2877")),m=Object(d["a"])(u,n,o,!1,null,"5f86f3ec",null);t["default"]=m.exports},"63ee":function(e,t,a){"use strict";var n=a("ab7a"),o=a.n(n);o.a},"7eb6":function(e,t,a){},a4a7:function(e,t,a){"use strict";var n=a("7eb6"),o=a.n(n);o.a},ab7a:function(e,t,a){}}]);