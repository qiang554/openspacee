(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-e85d877c"],{"22ce":function(e,t,a){"use strict";a.d(t,"c",(function(){return i})),a.d(t,"b",(function(){return r})),a.d(t,"a",(function(){return s})),a.d(t,"d",(function(){return c}));a("99af");var n=a("b775");function i(e){return Object(n["a"])({url:"service/".concat(e),method:"get"})}function r(e,t,a){var i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"";return Object(n["a"])({url:"service/".concat(e,"/").concat(t,"/").concat(a),method:"get",params:{output:i}})}function s(e,t){return Object(n["a"])({url:"service/".concat(e,"/delete"),method:"post",data:t})}function c(e,t,a,i){return Object(n["a"])({url:"service/".concat(e,"/update/").concat(t,"/").concat(a),method:"post",data:{yaml:i}})}},"49c8":function(e,t,a){"use strict";var n=a("d779"),i=a.n(n);i.a},"817a":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("clusterbar",{attrs:{titleName:e.titleName,nsFunc:e.nsSearch,nameFunc:e.nameSearch,delFunc:e.delFunc}}),a("div",{staticClass:"dashboard-container"},[a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],ref:"multipleTable",staticClass:"table-fix",staticStyle:{width:"100%"},attrs:{data:e.services,"tooltip-effect":"dark","max-height":e.maxHeight,"cell-style":e.cellStyle,"default-sort":{prop:"name"},"row-key":"uid"},on:{"selection-change":e.handleSelectionChange}},[a("el-table-column",{attrs:{type:"selection",width:"45"}}),a("el-table-column",{attrs:{prop:"name",label:"名称","min-width":"40","show-overflow-tooltip":""},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",{staticClass:"name-class",on:{click:function(a){return e.nameClick(t.row.namespace,t.row.name)}}},[e._v(" "+e._s(t.row.name)+" ")])]}}])}),a("el-table-column",{attrs:{prop:"namespace",label:"命名空间","min-width":"30","show-overflow-tooltip":""}}),a("el-table-column",{attrs:{prop:"type",label:"类型","min-width":"25","show-overflow-tooltip":""}}),a("el-table-column",{attrs:{prop:"cluster_ip",label:"ClusterIP","min-width":"35","show-overflow-tooltip":""}}),a("el-table-column",{attrs:{prop:"ports",label:"端口","min-width":"30","show-overflow-tooltip":""},scopedSlots:e._u([{key:"default",fn:function(t){return[t.row.ports&&t.row.ports.length>0?[a("span",[e._v(e._s(e.getPortsDisplay(t.row.ports)))])]:e._e()]}}])}),a("el-table-column",{attrs:{prop:"selector",label:"选择器","min-width":"55","show-overflow-tooltip":""},scopedSlots:e._u([{key:"default",fn:function(t){return[t.row.selector?e._l(t.row.selector,(function(t,n){return a("span",{key:n,staticClass:"back-class"},[e._v(" "+e._s(n+"="+t)+" ")])})):e._e()]}}])}),a("el-table-column",{attrs:{prop:"created",label:"创建时间","min-width":"40","show-overflow-tooltip":""}}),a("el-table-column",{attrs:{label:"","show-overflow-tooltip":"",width:"45"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-dropdown",{attrs:{size:"medium"}},[a("el-link",{attrs:{underline:!1}},[a("svg-icon",{staticStyle:{width:"1.3em",height:"1.3em"},attrs:{"icon-class":"operate"}})],1),a("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[a("el-dropdown-item",{nativeOn:{click:function(a){return a.preventDefault(),e.nameClick(t.row.namespace,t.row.name)}}},[a("svg-icon",{staticStyle:{width:"1.3em",height:"1.3em","line-height":"40px","vertical-align":"-0.25em"},attrs:{"icon-class":"detail"}}),a("span",{staticStyle:{"margin-left":"5px"}},[e._v("详情")])],1),a("el-dropdown-item",{nativeOn:{click:function(a){return a.preventDefault(),e.getServiceYaml(t.row.namespace,t.row.name)}}},[a("svg-icon",{staticStyle:{width:"1.3em",height:"1.3em","line-height":"40px","vertical-align":"-0.25em"},attrs:{"icon-class":"edit"}}),a("span",{staticStyle:{"margin-left":"5px"}},[e._v("修改")])],1),a("el-dropdown-item",{nativeOn:{click:function(a){return a.preventDefault(),e.deleteServices([{namespace:t.row.namespace,name:t.row.name}])}}},[a("svg-icon",{staticStyle:{width:"1.3em",height:"1.3em","line-height":"40px","vertical-align":"-0.25em"},attrs:{"icon-class":"delete"}}),a("span",{staticStyle:{"margin-left":"5px"}},[e._v("删除")])],1)],1)],1)]}}])})],1)],1),a("el-dialog",{attrs:{title:"编辑",visible:e.yamlDialog,"close-on-click-modal":!1,width:"60%",top:"55px"},on:{"update:visible":function(t){e.yamlDialog=t}}},[e.yamlDialog?a("yaml",{attrs:{loading:e.yamlLoading},model:{value:e.yamlValue,callback:function(t){e.yamlValue=t},expression:"yamlValue"}}):e._e(),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{plain:"",size:"small"},on:{click:function(t){e.yamlDialog=!1}}},[e._v("取 消")]),a("el-button",{attrs:{plain:"",size:"small"},on:{click:function(t){return e.updateService()}}},[e._v("确 定")])],1)],1)],1)},i=[],r=(a("4de4"),a("caad"),a("c975"),a("a15b"),a("b0c0"),a("2532"),a("b85c")),s=a("61b2"),c=a("22ce"),o=a("5c96"),l={name:"Service",components:{Clusterbar:s["a"],Yaml:s["d"]},data:function(){return{yamlDialog:!1,yamlNamespace:"",yamlName:"",yamlValue:"",yamlLoading:!0,cellStyle:{border:0},titleName:["Services"],maxHeight:window.innerHeight-150,loading:!0,originServices:[],search_ns:[],search_name:"",delFunc:void 0,delServices:[]}},created:function(){this.fetchData()},mounted:function(){var e=this;window.onresize=function(){return function(){var t=window.innerHeight-150;e.maxHeight=t}()}},watch:{servicesWatch:function(e){if(e){var t=e.resource.metadata.uid,a=e.resource.metadata.resourceVersion;if("add"===e.event)this.originServices.push(this.buildServices(e.resource));else if("update"===e.event)for(var n in this.originServices){var i=this.originServices[n];if(i.uid===t){if(i.resource_version<a){var r=this.buildServices(e.resource);this.$set(this.originServices,n,r)}break}}else"delete"===e.event&&(this.originServices=this.originServices.filter((function(e){var a=e.uid;return a!==t})))}}},computed:{services:function(){var e,t=[],a=Object(r["a"])(this.originServices);try{for(a.s();!(e=a.n()).done;){var n=e.value;this.search_ns.length>0&&this.search_ns.indexOf(n.namespace)<0||(this.search_name&&!n.name.includes(this.search_name)||t.push(n))}}catch(i){a.e(i)}finally{a.f()}return t},servicesWatch:function(){return this.$store.getters["ws/servicesWatch"]}},methods:{fetchData:function(){var e=this;this.loading=!0,this.originServices=[];var t=this.$store.state.cluster;t?Object(c["c"])(t).then((function(t){e.loading=!1,e.originServices=t.data})).catch((function(){e.loading=!1})):(this.loading=!1,o["Message"].error("获取集群异常，请刷新重试"))},nsSearch:function(e){this.search_ns=[];var t,a=Object(r["a"])(e);try{for(a.s();!(t=a.n()).done;){var n=t.value;this.search_ns.push(n)}}catch(i){a.e(i)}finally{a.f()}},nameSearch:function(e){this.search_name=e},buildServices:function(e){if(e){var t={uid:e.metadata.uid,namespace:e.metadata.namespace,name:e.metadata.name,type:e.spec.type,cluster_ip:e.spec.clusterIP,ports:e.spec.ports,external_ip:e.spec.externalIPs,selector:e.spec.selector,resource_version:e.metadata.resourceVersion,created:e.metadata.creationTimestamp};return t}},nameClick:function(e,t){this.$router.push({name:"serviceDetail",params:{namespace:e,serviceName:t}})},getServiceYaml:function(e,t){var a=this;this.yamlNamespace="",this.yamlName="";var n=this.$store.state.cluster;n?e?t?(this.yamlValue="",this.yamlDialog=!0,this.yamlLoading=!0,Object(c["b"])(n,e,t,"yaml").then((function(n){a.yamlLoading=!1,a.yamlValue=n.data,a.yamlNamespace=e,a.yamlName=t})).catch((function(){a.yamlLoading=!1}))):o["Message"].error("获取Service名称参数异常，请刷新重试"):o["Message"].error("获取命名空间参数异常，请刷新重试"):o["Message"].error("获取集群参数异常，请刷新重试")},deleteServices:function(e){var t=this.$store.state.cluster;if(t)if(e.length<=0)o["Message"].error("请选择要删除的Services");else{var a={resources:e};Object(c["a"])(t,a).then((function(){o["Message"].success("删除成功")})).catch((function(){}))}else o["Message"].error("获取集群参数异常，请刷新重试")},updateService:function(){var e=this.$store.state.cluster;e?this.yamlNamespace?this.yamlName?(console.log(this.yamlValue),Object(c["d"])(e,this.yamlNamespace,this.yamlName,this.yamlValue).then((function(){o["Message"].success("更新成功")})).catch((function(){}))):o["Message"].error("获取Service参数异常，请刷新重试"):o["Message"].error("获取命名空间参数异常，请刷新重试"):o["Message"].error("获取集群参数异常，请刷新重试")},_delServicesFunc:function(){if(this.delServices.length>0){var e,t=[],a=Object(r["a"])(this.delServices);try{for(a.s();!(e=a.n()).done;){var n=e.value;t.push({namespace:n.namespace,name:n.name})}}catch(i){a.e(i)}finally{a.f()}this.deleteServices(t)}},handleSelectionChange:function(e){this.delServices=e,e.length>0?this.delFunc=this._delServicesFunc:this.delFunc=void 0},getPortsDisplay:function(e){if(!e)return"";var t,a=[],n=Object(r["a"])(e);try{for(n.s();!(t=n.n()).done;){var i=t.value,s=i.port;i.nodePort&&(s+=":"+i.nodePort),s+="/"+i.protocol,a.push(s)}}catch(c){n.e(c)}finally{n.f()}return a.join(",")}}},u=l,d=(a("49c8"),a("a773"),a("2877")),m=Object(d["a"])(u,n,i,!1,null,"4700dc54",null);t["default"]=m.exports},"9f53":function(e,t,a){},a15b:function(e,t,a){"use strict";var n=a("23e7"),i=a("44ad"),r=a("fc6a"),s=a("a640"),c=[].join,o=i!=Object,l=s("join",",");n({target:"Array",proto:!0,forced:o||!l},{join:function(e){return c.call(r(this),void 0===e?",":e)}})},a773:function(e,t,a){"use strict";var n=a("9f53"),i=a.n(n);i.a},d779:function(e,t,a){}}]);