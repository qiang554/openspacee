(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-c4d859ec"],{2567:function(e,a,t){"use strict";var s=t("7d55"),n=t.n(s);n.a},"6c4a":function(e,a,t){"use strict";var s=t("f255"),n=t.n(s);n.a},"7d55":function(e,a,t){},c3ba:function(e,a,t){"use strict";t.r(a);var s=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",[t("clusterbar",{attrs:{titleName:e.titleName,nameFunc:e.nameSearch,delFunc:e.delFunc}}),t("div",{staticClass:"dashboard-container"},[t("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],ref:"multipleTable",staticClass:"table-fix",staticStyle:{width:"100%"},attrs:{data:e.namespaces,"tooltip-effect":"dark","max-height":e.maxHeight,"cell-style":e.cellStyle,"default-sort":{prop:"name"},"row-key":"uid"},on:{"selection-change":e.handleSelectionChange}},[t("el-table-column",{attrs:{type:"selection",width:"45"}}),t("el-table-column",{attrs:{prop:"name",label:"名称","min-width":"40","show-overflow-tooltip":""}}),t("el-table-column",{attrs:{prop:"lables",label:"标签","min-width":"55","show-overflow-tooltip":""},scopedSlots:e._u([{key:"default",fn:function(a){return[a.row.labels?e._l(a.row.labels,(function(a,s){return t("span",{key:s,staticClass:"back-class"},[e._v(" "+e._s(s+"="+a)+" ")])})):e._e()]}}])}),t("el-table-column",{attrs:{prop:"status",label:"状态","min-width":"30","show-overflow-tooltip":""}}),t("el-table-column",{attrs:{prop:"created",label:"创建时间","min-width":"25","show-overflow-tooltip":""}}),t("el-table-column",{attrs:{label:"","show-overflow-tooltip":"",width:"45"},scopedSlots:e._u([{key:"default",fn:function(a){return[t("el-dropdown",{attrs:{size:"medium"}},[t("el-link",{attrs:{underline:!1}},[t("svg-icon",{staticStyle:{width:"1.3em",height:"1.3em"},attrs:{"icon-class":"operate"}})],1),t("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[t("el-dropdown-item",{nativeOn:{click:function(t){return t.preventDefault(),e.getNamespaceYaml(a.row.name)}}},[t("svg-icon",{staticStyle:{width:"1.3em",height:"1.3em","line-height":"40px","vertical-align":"-0.25em"},attrs:{"icon-class":"edit"}}),t("span",{staticStyle:{"margin-left":"5px"}},[e._v("修改")])],1),t("el-dropdown-item",{nativeOn:{click:function(t){return t.preventDefault(),e.deleteNamespaces([{name:a.row.name}])}}},[t("svg-icon",{staticStyle:{width:"1.3em",height:"1.3em","line-height":"40px","vertical-align":"-0.25em"},attrs:{"icon-class":"delete"}}),t("span",{staticStyle:{"margin-left":"5px"}},[e._v("删除")])],1)],1)],1)]}}])})],1)],1),t("el-dialog",{attrs:{title:"编辑",visible:e.yamlDialog,"close-on-click-modal":!1,width:"60%",top:"55px"},on:{"update:visible":function(a){e.yamlDialog=a}}},[e.yamlDialog?t("yaml",{attrs:{loading:e.yamlLoading},model:{value:e.yamlValue,callback:function(a){e.yamlValue=a},expression:"yamlValue"}}):e._e(),t("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[t("el-button",{attrs:{plain:"",size:"small"},on:{click:function(a){e.yamlDialog=!1}}},[e._v("取 消")]),t("el-button",{attrs:{plain:"",size:"small"},on:{click:function(a){return e.updateNamespace()}}},[e._v("确 定")])],1)],1)],1)},n=[],i=(t("4de4"),t("caad"),t("c975"),t("b0c0"),t("d3b7"),t("25f0"),t("2532"),t("b85c")),l=t("61b2"),o=t("aad4"),c=t("5c96"),r={name:"Namespace",components:{Clusterbar:l["a"],Yaml:l["d"]},data:function(){return{yamlDialog:!1,yamlNamespace:"",yamlName:"",yamlValue:"",yamlLoading:!0,cellStyle:{border:0},titleName:["Namespaces"],maxHeight:window.innerHeight-150,loading:!0,originNamespaces:[],search_ns:[],search_name:"",delFunc:void 0,delNamespaces:[]}},created:function(){this.fetchData()},mounted:function(){var e=this;window.onresize=function(){return function(){var a=window.innerHeight-150;e.maxHeight=a}()}},watch:{namespacesWatch:function(e){if(e){var a=e.resource.metadata.uid,t=e.resource.metadata.resourceVersion;if("add"===e.event)this.originNamespaces.push(this.buildNamespaces(e.resource));else if("update"===e.event)for(var s in this.originNamespaces){var n=this.originNamespaces[s];if(n.uid===a){if(n.resource_version<t){var i=this.buildNamespaces(e.resource);this.$set(this.originNamespaces,s,i)}break}}else"delete"===e.event&&(this.originNamespaces=this.originNamespaces.filter((function(e){var t=e.uid;return t!==a})))}}},computed:{namespaces:function(){var e,a=[],t=Object(i["a"])(this.originNamespaces);try{for(t.s();!(e=t.n()).done;){var s=e.value;this.search_ns.length>0&&this.search_ns.indexOf(s.namespace)<0||(this.search_name&&!s.name.includes(this.search_name)||(s.conditions&&s.conditions.length>0?s.conditions.sort():s.conditions=[],a.push(s)))}}catch(n){t.e(n)}finally{t.f()}return a},namespacesWatch:function(){return this.$store.getters["ws/namespacesWatch"]}},methods:{fetchData:function(){var e=this;this.loading=!0,this.originNamespaces=[];var a=this.$store.state.cluster;a?Object(o["b"])(a).then((function(a){e.loading=!1,e.originNamespaces=a.data})).catch((function(){e.loading=!1})):(this.loading=!1,c["Message"].error("获取集群异常，请刷新重试"))},nameSearch:function(e){this.search_name=e},buildNamespaces:function(e){if(e){var a={uid:e.metadata.uid,status:e.status.phase,name:e.metadata.name,labels:e.metadata.labels,resource_version:e.metadata.resourceVersion,created:e.metadata.creationTimestamp};return a}},getNamespaceYaml:function(e){var a=this;this.yamlNamespace="",this.yamlName="";var t=this.$store.state.cluster;t?e?(this.yamlValue="",this.yamlDialog=!0,this.yamlLoading=!0,Object(o["a"])(t,e,"yaml").then((function(t){a.yamlLoading=!1,a.yamlValue=t.data,a.yamlName=e})).catch((function(){a.yamlLoading=!1}))):c["Message"].error("获取Namespace名称参数异常，请刷新重试"):c["Message"].error("获取集群参数异常，请刷新重试")},deleteNamespaces:function(e){function a(a){return e.apply(this,arguments)}return a.toString=function(){return e.toString()},a}((function(e){var a=this.$store.state.cluster;if(a)if(e.length<=0)c["Message"].error("请选择要删除的Namespaces");else{var t={resources:e};deleteNamespaces(a,t).then((function(){c["Message"].success("删除成功")})).catch((function(){}))}else c["Message"].error("获取集群参数异常，请刷新重试")})),updateNamespace:function(e){function a(){return e.apply(this,arguments)}return a.toString=function(){return e.toString()},a}((function(){var e=this.$store.state.cluster;e?this.yamlName?(console.log(this.yamlValue),updateNamespace(e,this.yamlName,this.yamlValue).then((function(){c["Message"].success("更新成功")})).catch((function(){}))):c["Message"].error("获取Namespace参数异常，请刷新重试"):c["Message"].error("获取集群参数异常，请刷新重试")})),_delNamespacesFunc:function(){if(this.delNamespaces.length>0){var e,a=[],t=Object(i["a"])(this.delNamespaces);try{for(t.s();!(e=t.n()).done;){var s=e.value;a.push({name:s.name})}}catch(n){t.e(n)}finally{t.f()}this.deleteNamespaces(a)}},handleSelectionChange:function(e){this.delNamespaces=e,e.length>0?this.delFunc=this._delNamespacesFunc:this.delFunc=void 0}}},u=r,m=(t("6c4a"),t("2567"),t("2877")),d=Object(m["a"])(u,s,n,!1,null,"5ad82a4c",null);a["default"]=d.exports},f255:function(e,a,t){}}]);