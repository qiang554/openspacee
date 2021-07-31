(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-826b783e"],{"5aa0":function(e,t,a){"use strict";var o=a("b799"),l=a.n(o);l.a},b799:function(e,t,a){},c5be:function(e,t,a){},cc5e:function(e,t,a){"use strict";a.d(t,"c",(function(){return l})),a.d(t,"b",(function(){return r})),a.d(t,"a",(function(){return s})),a.d(t,"d",(function(){return n}));a("99af");var o=a("b775");function l(e){return Object(o["a"])({url:"role/".concat(e),method:"get"})}function r(e,t,a,l){var r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"";return Object(o["a"])({url:"role/".concat(e,"/").concat(t,"/").concat(a),method:"get",params:{output:r,kind:l}})}function s(e,t){return Object(o["a"])({url:"role/".concat(e,"/delete"),method:"post",data:t})}function n(e,t,a,l){return Object(o["a"])({url:"role/".concat(e,"/update/").concat(t,"/").concat(a),method:"post",data:{yaml:l}})}},ce9b:function(e,t,a){"use strict";a.r(t);var o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("clusterbar",{attrs:{titleName:e.titleName,delFunc:e.deleteRoles,editFunc:e.getRoleYaml}}),a("div",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticClass:"dashboard-container"},[a("el-form",{staticClass:"pod-item",attrs:{"label-position":"left","label-width":"120px"}},[a("el-form-item",{attrs:{label:"名称"}},[a("span",[e._v(e._s(e.role.name))])]),a("el-form-item",{attrs:{label:"创建时间"}},[a("span",[e._v(e._s(e.role.created))])]),a("el-form-item",{attrs:{label:"命名空间"}},[a("span",[e._v(e._s(e.role.namespace))])]),a("el-form-item",{attrs:{label:"标签"}},[e.role.labels?e._l(e.role.labels,(function(t,o){return[a("span",{key:o,staticClass:"back-class"},[e._v(e._s(o)+": "+e._s(t)+" "),a("br")])]})):a("span",[e._v("—")])],2)],1),a("div",{staticStyle:{padding:"0px 8px"}},[a("div",[e._v("Rules")]),a("div",{staticClass:"msgClass",staticStyle:{margin:"15px 10px 30px 10px"}},[e.role.rules&&e.role.rules.length>0?a("el-table",{staticClass:"table-fix",staticStyle:{width:"100%"},attrs:{data:e.role.rules,"tooltip-effect":"dark","cell-style":e.cellStyle,"default-sort":{prop:"event_time",order:"descending"}}},[a("el-table-column",{attrs:{prop:"resources",label:"资源","min-width":"45","show-overflow-tooltip":""},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(" "+e._s(t.row.resources.join(","))+" ")])]}}],null,!1,2712680286)}),a("el-table-column",{attrs:{prop:"verbs",label:"权限","min-width":"35","show-overflow-tooltip":""},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(" "+e._s(t.row.verbs.join(","))+" ")])]}}],null,!1,3458372727)}),a("el-table-column",{attrs:{prop:"apiGroups",label:"apiGroups","min-width":"20","show-overflow-tooltip":""}}),a("el-table-column",{attrs:{prop:"resourceNames",label:"资源名称","min-width":"40","show-overflow-tooltip":""}})],1):a("div",{staticStyle:{color:"#909399","text-align":"center"}},[e._v("暂无数据")])],1)]),a("el-dialog",{attrs:{title:"编辑",visible:e.yamlDialog,"close-on-click-modal":!1,width:"60%",top:"55px"},on:{"update:visible":function(t){e.yamlDialog=t}}},[e.yamlDialog?a("yaml",{attrs:{loading:e.yamlLoading},model:{value:e.yamlValue,callback:function(t){e.yamlValue=t},expression:"yamlValue"}}):e._e(),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{plain:"",size:"small"},on:{click:function(t){e.yamlDialog=!1}}},[e._v("取 消")]),a("el-button",{attrs:{plain:"",size:"small"},on:{click:function(t){return e.updateRole()}}},[e._v("确 定")])],1)],1)],1)],1)},l=[],r=(a("b0c0"),a("61b2")),s=a("cc5e"),n=a("5c96"),i={name:"RoleDetail",components:{Clusterbar:r["a"],Yaml:r["f"]},data:function(){return{yamlDialog:!1,yamlValue:"",yamlLoading:!0,cellStyle:{border:0},loading:!0,originRole:void 0}},created:function(){this.fetchData()},watch:{roleWatch:function(e){if(e&&this.originRole){var t=e.resource.metadata.uid;if(t!==this.role.uid)return;var a=e.resource.metadata.resourceVersion;this.role.resource_version<a&&(this.originRole=e.resource)}}},computed:{titleName:function(){return["Roles",this.roleName]},roleName:function(){return this.$route.params?this.$route.params.roleName:""},namespace:function(){return this.$route.params?this.$route.params.namespace:""},kind:function(){return this.namespace?"Role":"ClusterRole"},role:function(){var e=this.buildRole(this.originRole);return e},cluster:function(){return this.$store.state.cluster},roleWatch:function(){return this.$store.getters["ws/rolesWatch"]}},methods:{fetchData:function(){var e=this;this.originRole=null,this.loading=!0;var t=this.$store.state.cluster;if(!t)return n["Message"].error("获取集群参数异常，请刷新重试"),void(this.loading=!1);if("Role"===this.kind&&!this.namespace)return n["Message"].error("获取命名空间参数异常，请刷新重试"),void(this.loading=!1);var a=this.namespace;if("ClusterRole"===this.kind&&(a="n"),!this.roleName)return n["Message"].error("获取Role名称参数异常，请刷新重试"),void(this.loading=!1);Object(s["b"])(t,a,this.roleName,this.kind).then((function(t){e.loading=!1,e.originRole=t.data})).catch((function(){e.loading=!1}))},buildRole:function(e){if(!e)return{};var t={uid:e.metadata.uid,namespace:e.metadata.namespace,name:e.metadata.name,resource_version:e.metadata.resourceVersion,rules:e.rules,created:e.metadata.creationTimestamp,labels:e.metadata.labels,annotations:e.metadata.annotations};return t},toogleExpand:function(e){var t=this.$refs.table;t.toggleRowExpansion(e)},deleteRoles:function(){var e=this.$store.state.cluster;if(e){this.role||n["Message"].error("获取Role参数异常，请刷新重试");var t=[{namespace:this.role.namespace,name:this.role.name}],a={resources:t};Object(s["a"])(e,a).then((function(){n["Message"].success("删除成功")})).catch((function(){}))}else n["Message"].error("获取集群参数异常，请刷新重试")},getRoleYaml:function(){var e=this;if(this.role){var t=this.$store.state.cluster;if(t){var a=this.namespace;"ClusterRole"===this.kind&&(a="n"),this.yamlValue="",this.yamlDialog=!0,this.yamlLoading=!0,Object(s["b"])(t,a,this.role.name,this.kind,"yaml").then((function(t){e.yamlLoading=!1,e.yamlValue=t.data})).catch((function(){e.yamlLoading=!1}))}else n["Message"].error("获取集群参数异常，请刷新重试")}else n["Message"].error("获取Role参数异常，请刷新重试")},updateRole:function(){if(this.role){var e=this.$store.state.cluster;e?(console.log(this.yamlValue),Object(s["d"])(e,this.role.namespace,this.role.name,this.yamlValue).then((function(){n["Message"].success("更新成功")})).catch((function(){}))):n["Message"].error("获取集群参数异常，请刷新重试")}else n["Message"].error("获取Role参数异常，请刷新重试")}}},c=i,u=(a("5aa0"),a("f592"),a("2877")),d=Object(u["a"])(c,o,l,!1,null,"2fc89b9a",null);t["default"]=d.exports},f592:function(e,t,a){"use strict";var o=a("c5be"),l=a.n(o);l.a}}]);