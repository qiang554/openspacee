(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3030f4ca"],{3349:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("clusterbar",{attrs:{titleName:e.titleName,nsFunc:e.nsSearch,nameFunc:e.nameSearch,delFunc:e.delFunc}}),a("div",{staticClass:"dashboard-container"},[a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],ref:"multipleTable",staticClass:"table-fix",staticStyle:{width:"100%"},attrs:{data:e.pods,"tooltip-effect":"dark","max-height":e.maxHeight,"cell-style":e.cellStyle,"default-sort":{prop:"name"},"row-key":"uid"},on:{"selection-change":e.handleSelectionChange}},[a("el-table-column",{attrs:{type:"selection",width:"45"}}),a("el-table-column",{attrs:{prop:"name",label:"名称","min-width":"170","show-overflow-tooltip":""},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",{staticClass:"name-class",on:{click:function(a){return e.nameClick(t.row.namespace,t.row.name)}}},[e._v(" "+e._s(t.row.name)+" ")])]}}])}),a("el-table-column",{attrs:{prop:"namespace",label:"命名空间","min-width":"90","show-overflow-tooltip":""}}),a("el-table-column",{attrs:{prop:"containerNum",label:"容器","min-width":"65","show-overflow-tooltip":""},scopedSlots:e._u([{key:"default",fn:function(t){return[t.row.init_containers?e._l(t.row.init_containers,(function(t){return a("el-tooltip",{key:t.name,attrs:{content:t.name+" ("+t.status+")",placement:"top"}},[a("svg-icon",{class:e.containerClass(t.status),staticStyle:{"margin-top":"7px"},attrs:{"icon-class":"square"}})],1)})):e._e(),e._l(t.row.containers,(function(t){return a("el-tooltip",{key:t.name,attrs:{content:t.name+" ("+t.status+")",placement:"top"}},[a("svg-icon",{class:e.containerClass(t.status),staticStyle:{"margin-top":"7px"},attrs:{"icon-class":"square"}})],1)}))]}}])}),a("el-table-column",{attrs:{prop:"restarts",label:"重启","min-width":"45","show-overflow-tooltip":""}}),a("el-table-column",{attrs:{prop:"node_name",label:"节点","show-overflow-tooltip":""}}),a("el-table-column",{attrs:{prop:"ip",label:"IP","show-overflow-tooltip":""}}),a("el-table-column",{attrs:{prop:"controlled",label:"控制器","show-overflow-tooltip":""}}),a("el-table-column",{attrs:{prop:"created",label:"创建时间","min-width":"140","show-overflow-tooltip":""}}),a("el-table-column",{attrs:{prop:"status",label:"状态","min-width":"60","show-overflow-tooltip":""}}),a("el-table-column",{attrs:{label:"","show-overflow-tooltip":"",width:"45"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-dropdown",{attrs:{size:"medium"}},[a("el-link",{attrs:{underline:!1}},[a("svg-icon",{staticStyle:{width:"1.3em",height:"1.3em"},attrs:{"icon-class":"operate"}})],1),a("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[a("el-dropdown-item",{nativeOn:{click:function(a){return a.preventDefault(),e.nameClick(t.row.namespace,t.row.name)}}},[a("svg-icon",{staticStyle:{width:"1.3em",height:"1.3em","line-height":"40px","vertical-align":"-0.25em"},attrs:{"icon-class":"detail"}}),a("span",{staticStyle:{"margin-left":"5px"}},[e._v("详情")])],1),e.$updatePerm()?a("el-dropdown-item",{nativeOn:{click:function(a){return a.preventDefault(),e.getPodYaml(t.row.namespace,t.row.name)}}},[a("svg-icon",{staticStyle:{width:"1.3em",height:"1.3em","line-height":"40px","vertical-align":"-0.25em"},attrs:{"icon-class":"edit"}}),a("span",{staticStyle:{"margin-left":"5px"}},[e._v("修改")])],1):e._e(),e.$deletePerm()?a("el-dropdown-item",{nativeOn:{click:function(a){return a.preventDefault(),e.deletePods([{namespace:t.row.namespace,name:t.row.name}])}}},[a("svg-icon",{staticStyle:{width:"1.3em",height:"1.3em","line-height":"40px","vertical-align":"-0.25em"},attrs:{"icon-class":"delete"}}),a("span",{staticStyle:{"margin-left":"5px"}},[e._v("删除")])],1):e._e()],1)],1)]}}])})],1)],1),a("el-dialog",{attrs:{title:"编辑",visible:e.yamlDialog,"close-on-click-modal":!1,width:"60%",top:"55px"},on:{"update:visible":function(t){e.yamlDialog=t}}},[e.yamlDialog?a("yaml",{attrs:{loading:e.yamlLoading},model:{value:e.yamlValue,callback:function(t){e.yamlValue=t},expression:"yamlValue"}}):e._e(),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{plain:"",size:"small"},on:{click:function(t){e.yamlDialog=!1}}},[e._v("取 消")]),a("el-button",{attrs:{plain:"",size:"small"},on:{click:function(t){return e.updatePod()}}},[e._v("确 定")])],1)],1)],1)},s=[],o=(a("4de4"),a("caad"),a("c975"),a("b0c0"),a("2532"),a("b85c")),r=a("61b2"),i=a("f492"),c=a("5c96"),l={name:"Pod",components:{Clusterbar:r["a"],Yaml:r["f"]},data:function(){return{yamlDialog:!1,yamlNamespace:"",yamlName:"",yamlValue:"",yamlLoading:!0,cellStyle:{border:0},titleName:["Pods"],maxHeight:window.innerHeight-150,loading:!0,originPods:[],search_ns:[],search_name:"",delFunc:void 0,delPods:[]}},created:function(){this.fetchData()},mounted:function(){var e=this;window.onresize=function(){return function(){var t=window.innerHeight-150;e.maxHeight=t}()}},watch:{podsWatch:function(e){if(e){var t=e.resource.metadata.uid,a=e.resource.metadata.resourceVersion;if("add"===e.event)this.originPods.push(Object(i["b"])(e.resource));else if("update"===e.event)for(var n in this.originPods){var s=this.originPods[n];if(s.uid===t&&s.resource_version<a){var o=Object(i["b"])(e.resource);this.$set(this.originPods,n,o);break}}else"delete"===e.event&&(this.originPods=this.originPods.filter((function(e){var a=e.uid;return a!==t})))}}},computed:{pods:function(){var e,t=[],a=Object(o["a"])(this.originPods);try{for(a.s();!(e=a.n()).done;){var n=e.value;this.search_ns.length>0&&this.search_ns.indexOf(n.namespace)<0||(this.search_name&&!n.name.includes(this.search_name)||t.push(n))}}catch(s){a.e(s)}finally{a.f()}return t},podsWatch:function(){return this.$store.getters["ws/podWatch"]}},methods:{fetchData:function(){var e=this;this.loading=!0,this.originPods=[];var t=this.$store.state.cluster;t?Object(i["g"])(t).then((function(t){e.loading=!1,e.originPods=t.data})).catch((function(){e.loading=!1})):(this.loading=!1,c["Message"].error("获取集群异常，请刷新重试"))},nsSearch:function(e){this.search_ns=[];var t,a=Object(o["a"])(e);try{for(a.s();!(t=a.n()).done;){var n=t.value;this.search_ns.push(n)}}catch(s){a.e(s)}finally{a.f()}},nameSearch:function(e){this.search_name=e},nameClick:function(e,t){this.$router.push({name:"podsDetail",params:{namespace:e,podName:t}})},containerClass:function(e){return"running"===e?"running-class":"terminated"===e?"terminate-class":"waiting"===e?"waiting-class":void 0},getPodYaml:function(e,t){var a=this;this.yamlNamespace="",this.yamlName="";var n=this.$store.state.cluster;n?e?t?(this.yamlValue="",this.yamlDialog=!0,this.yamlLoading=!0,Object(i["f"])(n,e,t,"yaml").then((function(n){a.yamlLoading=!1,a.yamlValue=n.data,a.yamlNamespace=e,a.yamlName=t})).catch((function(){a.yamlLoading=!1}))):c["Message"].error("获取Pod名称参数异常，请刷新重试"):c["Message"].error("获取命名空间参数异常，请刷新重试"):c["Message"].error("获取集群参数异常，请刷新重试")},deletePods:function(e){var t=this.$store.state.cluster;if(t)if(e.length<=0)c["Message"].error("请选择要删除的POD");else{var a={resources:e};Object(i["d"])(t,a).then((function(){c["Message"].success("删除成功")})).catch((function(){}))}else c["Message"].error("获取集群参数异常，请刷新重试")},updatePod:function(){var e=this.$store.state.cluster;e?this.yamlNamespace?this.yamlName?(console.log(this.yamlValue),Object(i["j"])(e,this.yamlNamespace,this.yamlName,this.yamlValue).then((function(){c["Message"].success("更新成功")})).catch((function(){}))):c["Message"].error("获取POD参数异常，请刷新重试"):c["Message"].error("获取命名空间参数异常，请刷新重试"):c["Message"].error("获取集群参数异常，请刷新重试")},_delPodsFunc:function(){if(console.log("delete ",this.delPods),this.delPods.length>0){var e,t=[],a=Object(o["a"])(this.delPods);try{for(a.s();!(e=a.n()).done;){var n=e.value;t.push({namespace:n.namespace,name:n.name})}}catch(s){a.e(s)}finally{a.f()}this.deletePods(t)}},handleSelectionChange:function(e){console.log(e),this.delPods=e,e.length>0?this.delFunc=this._delPodsFunc:this.delFunc=void 0}}},u=l,d=(a("3b84"),a("a4a7"),a("2877")),m=Object(d["a"])(u,n,s,!1,null,"f6883d18",null);t["default"]=m.exports},"383d":function(e,t,a){},"3b84":function(e,t,a){"use strict";var n=a("383d"),s=a.n(n);s.a},"7eb6":function(e,t,a){},a4a7:function(e,t,a){"use strict";var n=a("7eb6"),s=a.n(n);s.a},d63a:function(e,t,a){"use strict";const n=Function.call.bind(Object.prototype.hasOwnProperty);function s(e){const t=e.trim().split(" "),a=t[0],n=t[1],s=t[2],o=(s||"").slice(1,-1).split(",").map(e=>e.trim());switch(n){case void 0:return"!"===a[0]?{operator:"DoesNotExist",key:a.slice(1)}:{operator:"Exists",key:a};case"=":case"==":return{operator:"=",key:a,value:s};case"!=":return{operator:"NotIn",values:[s],key:a};case"in":return{operator:"In",key:a,values:o};case"notin":return{operator:"NotIn",key:a,values:o};default:}throw new Error("Invalid expression: "+e)}function o(e){const t=e.split(/,(?![^(]*\))/).map(s),a=t.filter(e=>n(e,"value")).reduce((e,t)=>Object.assign(e,{[t.key]:t.value}),{}),o=t.filter(e=>!n(e,"value"));return{matchLabels:a,matchExpressions:o}}function r(e){const t=e.operator.toLowerCase(),a=e.key,n=e.values;switch(t){case"exists":return a;case"doesnotexist":return"!"+a;default:}return`${a} ${t} (${n.join(",")})`}function i(e){const t=e.matchLabels||{},a=e.matchExpressions||[];return Object.keys(t).map(e=>`${e} = ${t[e]}`).concat(a.map(r)).join(",")}function c(e){if("string"===typeof e)return c(o(e));const t=e.matchExpressions||[],a=e.matchLabels||{};return Object.keys(a).map(e=>({operator:"In",key:e,values:[a[e]]})).concat(t)}function l(e,t){const a=e.operator,s=e.key,o=e.values,r=t[s];switch(a){case"Exists":return n(t,s);case"DoesNotExist":return!n(t,s);case"In":return o.indexOf(r)>=0;case"NotIn":return o.indexOf(r)<0;default:}throw new Error("Invalid operator: "+a)}function u(e){const t=c(e);return e=>t.every(t=>l(t,e||{}))}e.exports={stringify:i,parse:o,Selector:u}},f492:function(e,t,a){"use strict";a.d(t,"h",(function(){return r})),a.d(t,"g",(function(){return i})),a.d(t,"f",(function(){return c})),a.d(t,"d",(function(){return l})),a.d(t,"j",(function(){return u})),a.d(t,"c",(function(){return d})),a.d(t,"a",(function(){return m})),a.d(t,"b",(function(){return f})),a.d(t,"i",(function(){return p})),a.d(t,"e",(function(){return h}));a("99af"),a("b0c0");var n=a("b85c"),s=a("b775"),o=a("d63a");function r(e,t){var a=Object(o["Selector"])(e);return console.log(a,e,t),a(t)}function i(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,n={};return t&&(n["label_selector"]=t),a&&(n["names"]=a),Object(s["a"])({url:"pods/".concat(e,"/list"),method:"post",data:n})}function c(e,t,a){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"";return Object(s["a"])({url:"pods/".concat(e,"/").concat(t,"/").concat(a),method:"get",params:{output:n}})}function l(e,t){return Object(s["a"])({url:"pods/".concat(e,"/delete"),method:"post",data:t})}function u(e,t,a,n){return Object(s["a"])({url:"pods/".concat(e,"/update/").concat(t,"/").concat(a),method:"post",data:{yaml:n}})}function d(e){return"running"===e?"running-class":"terminated"===e?"terminate-class":"waiting"===e?"waiting-class":void 0}function m(e,t){if(!e)return{};var a={name:e.name,status:"unknown",image:e.image,restarts:0,command:e.command?e.command:[],args:e.args?e.args:[],ports:e.ports?e.ports:[],env:e.env?e.env:[],volume_mounts:e.volumeMounts?e.volumeMounts:[],image_pull_policy:e.imagePullPolicy?e.imagePullPolicy:"",resources:e.resources?e.resources:{},start_time:"",liveness_probe:e.livenessProbe,readiness_probe:e.readinessProbe};if(t){var s,o=Object(n["a"])(t);try{for(o.s();!(s=o.n()).done;){var r=s.value;if(r.name==e.name){a.restarts=r.restartCount,r.state.running?(a.status="running",a.start_time=r.state.running.startedAt):r.state.terminated?(a.status="terminated",a.start_time=r.state.terminated.startedAt):r.state.waiting&&(a.status="waiting"),a.ready=r.ready;break}}}catch(i){o.e(i)}finally{o.f()}}return a}function f(e){if(!e)return{};var t,a=[],s=Object(n["a"])(e.spec.containers);try{for(s.s();!(t=s.n()).done;){var o=t.value,r=m(o,e.status.containerStatuses);a.push(r)}}catch(y){s.e(y)}finally{s.f()}var i=[];if(e.spec.initContainers){var c,l=Object(n["a"])(e.spec.initContainers);try{for(l.s();!(c=l.n()).done;){var u=c.value;i.push(m(u,e.status.initContainerStatuses))}}catch(y){l.e(y)}finally{l.f()}}var d="",f="";e.metadata.ownerReferences&&e.metadata.ownerReferences.length>0&&(d=e.metadata.ownerReferences[0].kind,f=e.metadata.ownerReferences[0].name);var p={uid:e.metadata.uid,name:e.metadata.name,namespace:e.metadata.namespace,containers:a,init_containers:i,controlled:d,controlled_name:f,qos:e.status.qosClass,status:e.status.phase,ip:e.status.podIP,created:e.metadata.creationTimestamp,node_name:e.spec.nodeName,resource_version:e.metadata.resourceVersion,labels:e.metadata.labels,annonations:e.metadata.annotations,service_account:e.spec.serviceAccountName||e.spec.serviceAccount,node_selector:e.spec.nodeSelector,volumes:e.spec.volumes,conditions:e.status.conditions};p["containerNum"]=p.containers.length,p.init_containers&&(p["containerNum"]+=p.init_containers.length),p["restarts"]=0;var h,v=Object(n["a"])(p.containers);try{for(v.s();!(h=v.n()).done;){var g=h.value;g.restarts>p["restarts"]&&(p["restarts"]=g.restarts)}}catch(y){v.e(y)}finally{v.f()}return p}function p(e,t,a){return t in e&&a in e[t]?e[t][a]:"-"}function h(e){var t=e.name+": ";return e.value?t+=e.value:e.valueFrom&&(e.valueFrom.configMapKeyRef?t+="configmap(".concat(e.valueFrom.configMapKeyRef.key,":").concat(e.valueFrom.configMapKeyRef.name,")"):e.valueFrom.fieldRef?t+="fieldRef(".concat(e.valueFrom.fieldRef.apiVersion,":").concat(e.valueFrom.fieldRef.fieldPath,")"):e.valueFrom.secretKeyRef?t+="secret(".concat(e.valueFrom.secretKeyRef.key,":").concat(e.valueFrom.secretKeyRef.name,")"):t+=String(e.valueFrom)),t}}}]);