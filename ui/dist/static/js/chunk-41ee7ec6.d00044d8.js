(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-41ee7ec6"],{2548:function(e,n,i){"use strict";i.r(n);var t=function(){var e=this,n=e.$createElement,i=e._self._c||n;return i("div",[i("clusterbar",{attrs:{titleName:e.titleName,delFunc:e.deleteRoleBindings,editFunc:e.getRoleBindingYaml}}),i("div",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticClass:"dashboard-container"},[i("el-form",{staticClass:"pod-item",attrs:{"label-position":"left","label-width":"120px"}},[i("el-form-item",{attrs:{label:"名称"}},[i("span",[e._v(e._s(e.rolebinding.name))])]),i("el-form-item",{attrs:{label:"创建时间"}},[i("span",[e._v(e._s(e.rolebinding.created))])]),i("el-form-item",{attrs:{label:"命名空间"}},[i("span",[e._v(e._s(e.rolebinding.namespace))])]),i("el-form-item",{attrs:{label:"角色"}},[i("span",[e._v(e._s(e.rolebinding.role.kind+"/"+e.rolebinding.role.name))])]),i("el-form-item",{attrs:{label:"绑定主体"}},e._l(e.rolebinding.subjects,(function(n){return i("span",{key:n.name,staticClass:"back-class"},[e._v(" "+e._s(n.kind+"/"+n.name)),i("br")])})),0),i("el-form-item",{attrs:{label:"标签"}},[e.rolebinding.labels?e._l(e.rolebinding.labels,(function(n,t){return[i("span",{key:t,staticClass:"back-class"},[e._v(e._s(t)+": "+e._s(n)+" "),i("br")])]})):i("span",[e._v("—")])],2)],1),i("el-dialog",{attrs:{title:"编辑",visible:e.yamlDialog,"close-on-click-modal":!1,width:"60%",top:"55px"},on:{"update:visible":function(n){e.yamlDialog=n}}},[e.yamlDialog?i("yaml",{attrs:{loading:e.yamlLoading},model:{value:e.yamlValue,callback:function(n){e.yamlValue=n},expression:"yamlValue"}}):e._e(),i("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{attrs:{plain:"",size:"small"},on:{click:function(n){e.yamlDialog=!1}}},[e._v("取 消")]),i("el-button",{attrs:{plain:"",size:"small"},on:{click:function(n){return e.updateRoleBinding()}}},[e._v("确 定")])],1)],1)],1)],1)},a=[],o=(i("b0c0"),i("61b2")),r=i("b98a"),s=i("5c96"),l={name:"RoleBindingDetail",components:{Clusterbar:o["a"],Yaml:o["f"]},data:function(){return{yamlDialog:!1,yamlValue:"",yamlLoading:!0,cellStyle:{border:0},loading:!0,originRoleBinding:void 0}},created:function(){this.fetchData()},watch:{rolebindingWatch:function(e){if(e&&this.originRoleBinding){var n=e.resource.metadata.uid;if(n!==this.rolebinding.uid)return;var i=e.resource.metadata.resourceVersion;this.rolebinding.resource_version<i&&(this.originRoleBinding=e.resource)}}},computed:{titleName:function(){return["RoleBindings",this.rolebindingName]},rolebindingName:function(){return this.$route.params?this.$route.params.rolebindingName:""},namespace:function(){return this.$route.params?this.$route.params.namespace:""},kind:function(){return this.namespace?"RoleBinding":"ClusterRoleBinding"},rolebinding:function(){var e=this.buildRoleBinding(this.originRoleBinding);return e},cluster:function(){return this.$store.state.cluster},rolebindingWatch:function(){return this.$store.getters["ws/rolebindingsWatch"]}},methods:{fetchData:function(){var e=this;this.originRoleBinding=null,this.loading=!0;var n=this.$store.state.cluster;if(!n)return s["Message"].error("获取集群参数异常，请刷新重试"),void(this.loading=!1);if("RoleBinding"===this.kind&&!this.namespace)return s["Message"].error("获取命名空间参数异常，请刷新重试"),void(this.loading=!1);var i=this.namespace;if("ClusterRoleBinding"===this.kind&&(i="n"),!this.rolebindingName)return s["Message"].error("获取RoleBinding名称参数异常，请刷新重试"),void(this.loading=!1);Object(r["b"])(n,i,this.rolebindingName,this.kind).then((function(n){e.loading=!1,e.originRoleBinding=n.data})).catch((function(){e.loading=!1}))},buildRoleBinding:function(e){if(!e)return{};var n={uid:e.metadata.uid,namespace:e.metadata.namespace,name:e.metadata.name,resource_version:e.metadata.resourceVersion,subjects:e.subjects,role:e.roleRef,created:e.metadata.creationTimestamp,labels:e.metadata.labels,annotations:e.metadata.annotations};return n},toogleExpand:function(e){var n=this.$refs.table;n.toggleRowExpansion(e)},deleteRoleBindings:function(){var e=this.$store.state.cluster;if(e){this.rolebinding||s["Message"].error("获取RoleBinding参数异常，请刷新重试");var n=[{namespace:this.rolebinding.namespace,name:this.rolebinding.name}],i={resources:n};Object(r["a"])(e,i).then((function(){s["Message"].success("删除成功")})).catch((function(){}))}else s["Message"].error("获取集群参数异常，请刷新重试")},getRoleBindingYaml:function(){var e=this;if(this.rolebinding){var n=this.$store.state.cluster;if(n){var i=this.namespace;"ClusterRoleBinding"===this.kind&&(i="n"),this.yamlValue="",this.yamlDialog=!0,this.yamlLoading=!0,Object(r["b"])(n,i,this.rolebinding.name,this.kind,"yaml").then((function(n){e.yamlLoading=!1,e.yamlValue=n.data})).catch((function(){e.yamlLoading=!1}))}else s["Message"].error("获取集群参数异常，请刷新重试")}else s["Message"].error("获取RoleBinding参数异常，请刷新重试")},updateRoleBinding:function(){if(this.rolebinding){var e=this.$store.state.cluster;e?(console.log(this.yamlValue),Object(r["d"])(e,this.rolebinding.namespace,this.rolebinding.name,this.yamlValue).then((function(){s["Message"].success("更新成功")})).catch((function(){}))):s["Message"].error("获取集群参数异常，请刷新重试")}else s["Message"].error("获取RoleBinding参数异常，请刷新重试")}}},c=l,d=(i("de8f"),i("d488"),i("2877")),u=Object(d["a"])(c,t,a,!1,null,"43e72f3f",null);n["default"]=u.exports},"778e":function(e,n,i){},a641:function(e,n,i){},b98a:function(e,n,i){"use strict";i.d(n,"c",(function(){return a})),i.d(n,"b",(function(){return o})),i.d(n,"a",(function(){return r})),i.d(n,"d",(function(){return s}));i("99af");var t=i("b775");function a(e){return Object(t["a"])({url:"rolebinding/".concat(e),method:"get"})}function o(e,n,i,a){var o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"";return Object(t["a"])({url:"rolebinding/".concat(e,"/").concat(n,"/").concat(i),method:"get",params:{output:o,kind:a}})}function r(e,n){return Object(t["a"])({url:"rolebinding/".concat(e,"/delete"),method:"post",data:n})}function s(e,n,i,a,o){return Object(t["a"])({url:"rolebinding/".concat(e,"/update/").concat(n,"/").concat(i),method:"post",data:{yaml:o,kind:a}})}},d488:function(e,n,i){"use strict";var t=i("778e"),a=i.n(t);a.a},de8f:function(e,n,i){"use strict";var t=i("a641"),a=i.n(t);a.a}}]);