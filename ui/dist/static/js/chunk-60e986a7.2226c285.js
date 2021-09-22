(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-60e986a7"],{"62b1":function(e,t,a){},8438:function(e,t,a){"use strict";var c=a("62b1"),n=a.n(c);n.a},a15b:function(e,t,a){"use strict";var c=a("23e7"),n=a("44ad"),i=a("fc6a"),s=a("a640"),r=[].join,o=n!=Object,u=s("join",",");c({target:"Array",proto:!0,forced:o||!u},{join:function(e){return r.call(i(this),void 0===e?",":e)}})},b068:function(e,t,a){"use strict";var c=a("d15d"),n=a.n(c);n.a},d15d:function(e,t,a){},e588:function(e,t,a){"use strict";a.r(t);var c=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("clusterbar",{attrs:{titleName:e.titleName,delFunc:e.deleteServiceAccounts,editFunc:e.getServiceAccountYaml}}),a("div",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticClass:"dashboard-container"},[a("div",{staticStyle:{padding:"10px 8px 0px"}},[a("div",[e._v("基本信息")]),a("el-form",{staticClass:"pod-item",staticStyle:{margin:"15px 10px 30px 10px"},attrs:{"label-position":"left","label-width":"120px"}},[a("el-form-item",{attrs:{label:"名称"}},[a("span",[e._v(e._s(e.serviceaccount.name))])]),a("el-form-item",{attrs:{label:"创建时间"}},[a("span",[e._v(e._s(e.serviceaccount.created))])]),a("el-form-item",{attrs:{label:"命名空间"}},[a("span",[e._v(e._s(e.serviceaccount.namespace))])]),a("el-form-item",{attrs:{label:"Secrets"}},[a("span",{staticClass:"name-class",on:{click:function(t){return e.nameClick()}}},[e._v(e._s(e.getSecretsName(e.serviceaccount.secrets)))])]),a("el-form-item",{attrs:{label:"标签"}},[e.serviceaccount.labels?e._l(e.serviceaccount.labels,(function(t,c){return[a("span",{key:c,staticClass:"back-class"},[e._v(e._s(c)+": "+e._s(t)+" "),a("br")])]})):a("span",[e._v("—")])],2)],1)],1),a("el-dialog",{attrs:{title:"编辑",visible:e.yamlDialog,"close-on-click-modal":!1,width:"60%",top:"55px"},on:{"update:visible":function(t){e.yamlDialog=t}}},[e.yamlDialog?a("yaml",{attrs:{loading:e.yamlLoading},model:{value:e.yamlValue,callback:function(t){e.yamlValue=t},expression:"yamlValue"}}):e._e(),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{plain:"",size:"small"},on:{click:function(t){e.yamlDialog=!1}}},[e._v("取 消")]),a("el-button",{attrs:{plain:"",size:"small"},on:{click:function(t){return e.updateServiceAccount()}}},[e._v("确 定")])],1)],1)],1)],1)},n=[],i=(a("a15b"),a("b0c0"),a("b85c")),s=a("61b2"),r=a("f02d"),o=a("5c96"),u={name:"ServiceAccountDetail",components:{Clusterbar:s["a"],Yaml:s["f"]},data:function(){return{yamlDialog:!1,yamlValue:"",yamlLoading:!0,cellStyle:{border:0},loading:!0,originServiceAccount:void 0}},created:function(){this.fetchData()},watch:{serviceaccountWatch:function(e){if(e&&this.originServiceAccount){var t=e.resource.metadata.uid;if(t!==this.serviceaccount.uid)return;var a=e.resource.metadata.resourceVersion;this.serviceaccount.resource_version<a&&(this.originServiceAccount=e.resource)}}},computed:{titleName:function(){return["ServiceAccounts",this.serviceaccountName]},serviceaccountName:function(){return this.$route.params?this.$route.params.serviceaccountName:""},namespace:function(){return this.$route.params?this.$route.params.namespace:""},serviceaccount:function(){var e=this.buildServiceAccount(this.originServiceAccount);return e},cluster:function(){return this.$store.state.cluster},serviceaccountWatch:function(){return this.$store.getters["ws/serviceaccountsWatch"]}},methods:{fetchData:function(){var e=this;this.originServiceAccount=null,this.loading=!0;var t=this.$store.state.cluster;return t?this.namespace?this.serviceaccountName?void Object(r["b"])(t,this.namespace,this.serviceaccountName).then((function(t){e.loading=!1,e.originServiceAccount=t.data})).catch((function(){e.loading=!1})):(o["Message"].error("获取ServiceAccount名称参数异常，请刷新重试"),void(this.loading=!1)):(o["Message"].error("获取命名空间参数异常，请刷新重试"),void(this.loading=!1)):(o["Message"].error("获取集群参数异常，请刷新重试"),void(this.loading=!1))},buildServiceAccount:function(e){if(!e)return{};var t={uid:e.metadata.uid,namespace:e.metadata.namespace,name:e.metadata.name,resource_version:e.metadata.resourceVersion,secrets:e.secrets,created:e.metadata.creationTimestamp,labels:e.metadata.labels,annotations:e.metadata.annotations};return t},toogleExpand:function(e){var t=this.$refs.table;t.toggleRowExpansion(e)},deleteServiceAccounts:function(){var e=this.$store.state.cluster;if(e){this.serviceaccount||o["Message"].error("获取ServiceAccount参数异常，请刷新重试");var t=[{namespace:this.serviceaccount.namespace,name:this.serviceaccount.name}],a={resources:t};Object(r["a"])(e,a).then((function(){o["Message"].success("删除成功")})).catch((function(){}))}else o["Message"].error("获取集群参数异常，请刷新重试")},getServiceAccountYaml:function(){var e=this;if(this.serviceaccount){var t=this.$store.state.cluster;t?(this.yamlValue="",this.yamlDialog=!0,this.yamlLoading=!0,Object(r["b"])(t,this.serviceaccount.namespace,this.serviceaccount.name,"yaml").then((function(t){e.yamlLoading=!1,e.yamlValue=t.data})).catch((function(){e.yamlLoading=!1}))):o["Message"].error("获取集群参数异常，请刷新重试")}else o["Message"].error("获取ServiceAccount参数异常，请刷新重试")},updateServiceAccount:function(){if(this.serviceaccount){var e=this.$store.state.cluster;e?(console.log(this.yamlValue),Object(r["d"])(e,this.serviceaccount.namespace,this.serviceaccount.name,this.yamlValue).then((function(){o["Message"].success("更新成功")})).catch((function(){}))):o["Message"].error("获取集群参数异常，请刷新重试")}else o["Message"].error("获取ServiceAccount参数异常，请刷新重试")},getSecretsName:function(e){if(!e)return"";var t,a=[],c=Object(i["a"])(e);try{for(c.s();!(t=c.n()).done;){var n=t.value;a.push(n.name)}}catch(s){c.e(s)}finally{c.f()}return a.join(",")},nameClick:function(){var e=this.serviceaccount.namespace,t=this.serviceaccount.secrets[0].name;this.$router.push({name:"secretDetail",params:{namespace:e,secretName:t}})}}},l=u,m=(a("b068"),a("8438"),a("2877")),v=Object(m["a"])(l,c,n,!1,null,"22f71526",null);t["default"]=v.exports},f02d:function(e,t,a){"use strict";a.d(t,"c",(function(){return n})),a.d(t,"b",(function(){return i})),a.d(t,"a",(function(){return s})),a.d(t,"d",(function(){return r}));a("99af");var c=a("b775");function n(e){return Object(c["a"])({url:"serviceaccount/".concat(e),method:"get"})}function i(e,t,a){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"";return Object(c["a"])({url:"serviceaccount/".concat(e,"/").concat(t,"/").concat(a),method:"get",params:{output:n}})}function s(e,t){return Object(c["a"])({url:"serviceaccount/".concat(e,"/delete"),method:"post",data:t})}function r(e,t,a,n){return Object(c["a"])({url:"serviceaccount/".concat(e,"/update/").concat(t,"/").concat(a),method:"post",data:{yaml:n}})}}}]);