(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-c316446c"],{"0446":function(e,t,a){"use strict";var s=a("2ff9"),i=a.n(s);i.a},"2ff9":function(e,t,a){},b22b:function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("clusterbar",{attrs:{titleName:e.titleName,nsFunc:e.nsSearch,nameFunc:e.nameSearch,delFunc:e.delFunc}}),a("div",{staticClass:"dashboard-container"},[a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],ref:"multipleTable",staticClass:"table-fix",staticStyle:{width:"100%"},attrs:{data:e.persistentVolumeClaim,"tooltip-effect":"dark","max-height":e.maxHeight,"cell-style":e.cellStyle,"default-sort":{prop:"name"},"row-key":"uid"},on:{"selection-change":e.handleSelectionChange}},[a("el-table-column",{attrs:{type:"selection",width:"45"}}),a("el-table-column",{attrs:{prop:"name",label:"名称","min-width":"40","show-overflow-tooltip":""},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",{staticClass:"name-class",on:{click:function(a){return e.nameClick(t.row.namespace,t.row.name)}}},[e._v(" "+e._s(t.row.name)+" ")])]}}])}),a("el-table-column",{attrs:{prop:"namespace",label:"命名空间","min-width":"40","show-overflow-tooltip":""}}),a("el-table-column",{attrs:{prop:"capacity",label:"容量","min-width":"25","show-overflow-tooltip":""}}),a("el-table-column",{attrs:{prop:"access_modes",label:"访问模式","min-width":"45","show-overflow-tooltip":""}}),a("el-table-column",{attrs:{prop:"storage_class",label:"存储类","min-width":"40","show-overflow-tooltip":""}}),a("el-table-column",{attrs:{prop:"status",label:"状态","min-width":"35","show-overflow-tooltip":""}}),a("el-table-column",{attrs:{prop:"create_time",label:"创建时间","min-width":"45","show-overflow-tooltip":""}}),a("el-table-column",{attrs:{label:"","show-overflow-tooltip":"",width:"45"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-dropdown",{attrs:{size:"medium"}},[a("el-link",{attrs:{underline:!1}},[a("svg-icon",{staticStyle:{width:"1.3em",height:"1.3em"},attrs:{"icon-class":"operate"}})],1),a("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[a("el-dropdown-item",{nativeOn:{click:function(a){return a.preventDefault(),e.nameClick(t.row.namespace,t.row.name)}}},[a("svg-icon",{staticStyle:{width:"1.3em",height:"1.3em","line-height":"40px","vertical-align":"-0.25em"},attrs:{"icon-class":"detail"}}),a("span",{staticStyle:{"margin-left":"5px"}},[e._v("详情")])],1),a("el-dropdown-item",{nativeOn:{click:function(a){return a.preventDefault(),e.getPersistentVolumeClaimYaml(t.row.namespace,t.row.name)}}},[a("svg-icon",{staticStyle:{width:"1.3em",height:"1.3em","line-height":"40px","vertical-align":"-0.25em"},attrs:{"icon-class":"edit"}}),a("span",{staticStyle:{"margin-left":"5px"}},[e._v("修改")])],1),a("el-dropdown-item",{nativeOn:{click:function(a){return a.preventDefault(),e.deletePvcs([{namespace:t.row.namespace,name:t.row.name}])}}},[a("svg-icon",{staticStyle:{width:"1.3em",height:"1.3em","line-height":"40px","vertical-align":"-0.25em"},attrs:{"icon-class":"delete"}}),a("span",{staticStyle:{"margin-left":"5px"}},[e._v("删除")])],1)],1)],1)]}}])})],1)],1),a("el-dialog",{attrs:{title:"编辑",visible:e.yamlDialog,"close-on-click-modal":!1,width:"60%",top:"55px"},on:{"update:visible":function(t){e.yamlDialog=t}}},[e.yamlDialog?a("yaml",{attrs:{loading:e.yamlLoading},model:{value:e.yamlValue,callback:function(t){e.yamlValue=t},expression:"yamlValue"}}):e._e(),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{plain:"",size:"small"},on:{click:function(t){e.yamlDialog=!1}}},[e._v("取 消")]),a("el-button",{attrs:{plain:"",size:"small"},on:{click:function(t){return e.updatePvc()}}},[e._v("确 定")])],1)],1)],1)},i=[],n=(a("4de4"),a("caad"),a("c975"),a("b0c0"),a("2532"),a("b85c")),l=a("61b2"),o=a("5c96"),r=a("3ee1"),c={name:"PersistentVolumeClaim",components:{Clusterbar:l["a"],Yaml:l["f"]},data:function(){return{titleName:["PersistentVolumeClaims"],originPersistentVolumeClaims:[],search_name:"",search_ns:[],cellStyle:{border:0},maxHeight:window.innerHeight-150,loading:!0,yamlDialog:!1,yamlName:"",yamlValue:"",yamlLoading:!0,delFunc:void 0,delPvcs:[]}},created:function(){this.fetchData()},watch:{pvcsWatch:function(e){if(e){var t=e.resource.metadata.uid,a=e.resource.metadata.resourceVersion;if("add"===e.event)this.originPersistentVolumeClaims.push(Object(r["a"])(e.resource));else if("update"===e.event)for(var s in this.originPersistentVolumeClaims){var i=this.originPersistentVolumeClaims[s];if(i.uid===t){if(i.resource_version<a){var n=Object(r["a"])(e.resource);this.$set(this.originPersistentVolumeClaims,s,n)}break}}else"delete"===e.event&&(this.originPersistentVolumeClaims=this.originPersistentVolumeClaims.filter((function(e){var a=e.uid;return a!==t})))}}},computed:{persistentVolumeClaim:function(){var e,t=[],a=Object(n["a"])(this.originPersistentVolumeClaims);try{for(a.s();!(e=a.n()).done;){var s=e.value;this.search_ns.length>0&&this.search_ns.indexOf(s.namespace)<0||(this.search_name&&!s.name.includes(this.search_name)||t.push(s))}}catch(i){a.e(i)}finally{a.f()}return t},pvcsWatch:function(){return this.$store.getters["ws/pvcsWatch"]}},methods:{nameClick:function(e,t){console.log(e,t),this.$router.push({name:"pvcDetail",params:{persistentVolumeClaimName:t,namespace:e}})},nsSearch:function(e){this.search_ns=[];var t,a=Object(n["a"])(e);try{for(a.s();!(t=a.n()).done;){var s=t.value;this.search_ns.push(s)}}catch(i){a.e(i)}finally{a.f()}},nameSearch:function(e){this.search_name=e},fetchData:function(){var e=this;this.loading=!0,this.originConfigMaps=[];var t=this.$store.state.cluster;t?Object(r["d"])(t).then((function(t){e.loading=!1,e.originPersistentVolumeClaims=t.data?t.data:[]})).catch((function(){e.loading=!1})):(this.loading=!1,o["Message"].error("获取集群异常，请刷新重试."))},getPersistentVolumeClaimYaml:function(e,t){var a=this;this.yamlNamespace="",this.yamlName="";var s=this.$store.state.cluster;s?e?t?(this.yamlLoading=!0,this.yamlDialog=!0,Object(r["c"])(s,e,t,"yaml").then((function(s){a.yamlLoading=!1,a.yamlValue=s.data,a.yamlName=t,a.yamlNamespace=e})).catch((function(){a.yamlLoading=!1}))):o["Message"].error("获取名称参数异常，请刷新重试"):o["Message"].error("获取命名空间参数异常，请刷新重试"):o["Message"].error("获取集群参数异常，请刷新重试")},updatePvc:function(){var e=this.$store.state.cluster;e?this.yamlNamespace?this.yamlName?Object(r["e"])(e,this.yamlNamespace,this.yamlName,this.yamlValue).then((function(){o["Message"].success("更新成功")})).catch((function(){})):o["Message"].error("获取存储声明参数异常，请刷新重试"):o["Message"].error("获取命名空间参数异常，请刷新重试"):o["Message"].error("获取集群参数异常，请刷新重试")},deletePvcs:function(e){var t=this.$store.state.cluster;if(t)if(e.length<=0)o["Message"].error("请选择要删除的存储声明");else{var a={resources:e};Object(r["b"])(t,a).then((function(){o["Message"].success("删除成功")})).catch((function(){}))}else o["Message"].error("获取集群参数异常，请刷新重试")},_delPvcsFunc:function(){if(this.delPvcs.length>0){var e,t=[],a=Object(n["a"])(this.delPvcs);try{for(a.s();!(e=a.n()).done;){var s=e.value;t.push({namespace:s.namespace,name:s.name})}}catch(i){a.e(i)}finally{a.f()}this.deletePvcs(t)}},handleSelectionChange:function(e){this.delPvcs=e,e.length>0?this.delFunc=this._delPvcsFunc:this.delFunc=void 0}}},m=c,u=(a("0446"),a("2877")),h=Object(u["a"])(m,s,i,!1,null,"5c35545e",null);t["default"]=h.exports}}]);