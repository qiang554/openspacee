(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-67e8215a"],{4402:function(t,a,e){"use strict";var n=e("60a0"),i=e.n(n);i.a},4641:function(t,a,e){"use strict";var n=e("4d49"),i=e.n(n);i.a},"4d49":function(t,a,e){},"4d63":function(t,a,e){var n=e("83ab"),i=e("da84"),s=e("94ca"),r=e("7156"),l=e("9bf2").f,o=e("241c").f,c=e("44e7"),u=e("ad6d"),p=e("9f7f"),h=e("6eeb"),f=e("d039"),d=e("69f3").set,m=e("2626"),g=e("b622"),v=g("match"),b=i.RegExp,y=b.prototype,x=/a/g,_=/a/g,w=new b(x)!==x,S=p.UNSUPPORTED_Y,D=n&&s("RegExp",!w||S||f((function(){return _[v]=!1,b(x)!=x||b(_)==_||"/a/i"!=b(x,"i")})));if(D){var E=function(t,a){var e,n=this instanceof E,i=c(t),s=void 0===a;if(!n&&i&&t.constructor===E&&s)return t;w?i&&!s&&(t=t.source):t instanceof E&&(s&&(a=u.call(t)),t=t.source),S&&(e=!!a&&a.indexOf("y")>-1,e&&(a=a.replace(/y/g,"")));var l=r(w?new b(t,a):b(t,a),n?this:y,E);return S&&e&&d(l,{sticky:e}),l},A=function(t){t in E||l(E,t,{configurable:!0,get:function(){return b[t]},set:function(a){b[t]=a}})},k=o(b),M=0;while(k.length>M)A(k[M++]);y.constructor=E,E.prototype=y,h(i,"RegExp",E)}m("RegExp")},5319:function(t,a,e){"use strict";var n=e("d784"),i=e("825a"),s=e("7b0b"),r=e("50c4"),l=e("a691"),o=e("1d80"),c=e("8aa5"),u=e("14c3"),p=Math.max,h=Math.min,f=Math.floor,d=/\$([$&'`]|\d\d?|<[^>]*>)/g,m=/\$([$&'`]|\d\d?)/g,g=function(t){return void 0===t?t:String(t)};n("replace",2,(function(t,a,e,n){var v=n.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,b=n.REPLACE_KEEPS_$0,y=v?"$":"$0";return[function(e,n){var i=o(this),s=void 0==e?void 0:e[t];return void 0!==s?s.call(e,i,n):a.call(String(i),e,n)},function(t,n){if(!v&&b||"string"===typeof n&&-1===n.indexOf(y)){var s=e(a,t,this,n);if(s.done)return s.value}var o=i(t),f=String(this),d="function"===typeof n;d||(n=String(n));var m=o.global;if(m){var _=o.unicode;o.lastIndex=0}var w=[];while(1){var S=u(o,f);if(null===S)break;if(w.push(S),!m)break;var D=String(S[0]);""===D&&(o.lastIndex=c(f,r(o.lastIndex),_))}for(var E="",A=0,k=0;k<w.length;k++){S=w[k];for(var M=String(S[0]),$=p(h(l(S.index),f.length),0),O=[],R=1;R<S.length;R++)O.push(g(S[R]));var j=S.groups;if(d){var C=[M].concat(O,$,f);void 0!==j&&C.push(j);var L=String(n.apply(void 0,C))}else L=x(M,f,$,O,j,n);$>=A&&(E+=f.slice(A,$)+L,A=$+M.length)}return E+f.slice(A)}];function x(t,e,n,i,r,l){var o=n+t.length,c=i.length,u=m;return void 0!==r&&(r=s(r),u=d),a.call(l,u,(function(a,s){var l;switch(s.charAt(0)){case"$":return"$";case"&":return t;case"`":return e.slice(0,n);case"'":return e.slice(o);case"<":l=r[s.slice(1,-1)];break;default:var u=+s;if(0===u)return a;if(u>c){var p=f(u/10);return 0===p?a:p<=c?void 0===i[p-1]?s.charAt(1):i[p-1]+s.charAt(1):a}l=i[u-1]}return void 0===l?"":l}))}}))},"5cfd9":function(t,a,e){"use strict";e.r(a);var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("clusterbar",{attrs:{titleName:t.titleName,nameFunc:t.nameSearch,delFunc:t.delFunc}}),e("div",{staticClass:"dashboard-container"},t._l(t.appRow,(function(a){return e("el-row",{key:a,staticStyle:{"margin-top":"15px"},attrs:{gutter:28}},t._l(a==t.appRow?t.appCol:3,(function(n){return e("el-col",{key:3*a+n,attrs:{span:8}},[e("a",{on:{click:function(e){t.installClick(t.apps[t.index(a,n)])}}},[e("el-card",{staticStyle:{height:"160px"},attrs:{shadow:"hover"}},[e("el-row",[e("el-col",{attrs:{span:8}},[e("div",{staticClass:"img-wrapper"},[e("el-image",{attrs:{src:t.apps[t.index(a,n)].icon}},[e("div",{staticClass:"image-slot",attrs:{slot:"error"},slot:"error"},[e("i",{staticClass:"el-icon-picture-outline"})])])],1)]),e("el-col",{attrs:{span:16}},[e("div",{staticStyle:{"font-size":"20px"}},[t._v(" "+t._s(t.apps[t.index(a,n)].name)+" ")]),e("div",{staticStyle:{"margin-top":"10px"}},[e("span",{staticStyle:{"font-size":"13px",color:"#636a6e!important"}},[t._v("Chart版本: ")]),e("span",{staticStyle:{"font-size":"14px"}},[t._v(t._s(t.apps[t.index(a,n)].chart_version))])]),e("div",{staticStyle:{"margin-top":"3px"}},[e("span",{staticStyle:{"font-size":"13px",color:"#636a6e!important"}},[t._v("App版本: ")]),e("span",{staticStyle:{"font-size":"14px"}},[t._v(t._s(t.apps[t.index(a,n)].app_version))])])])],1),e("el-row",{staticStyle:{"margin-top":"14px"}},[e("el-col",{attrs:{span:24}},[e("span",{staticStyle:{"font-size":"14px",color:"#636a6e!important","margin-top":"5px"}},[t._v(" "+t._s(t.apps[t.index(a,n)].description)+" ")])])],1)],1)],1)])})),1)})),1),e("el-dialog",{attrs:{title:"安装"+t.installApp.name,visible:t.installDialog,"close-on-click-modal":!1,width:"60%",top:"45px"},on:{"update:visible":function(a){t.installDialog=a},close:function(a){t.installApp={},t.installDialog=!1,t.yamlValue=""}}},[e("div",{directives:[{name:"loading",rawName:"v-loading",value:t.installLoading,expression:"installLoading"}]},[e("el-form",{ref:"form",attrs:{inline:!0,model:t.installData,"label-width":"80px",size:"small"}},[e("el-form-item",{attrs:{label:"发布名称"}},[e("el-input",{model:{value:t.installData.name,callback:function(a){t.$set(t.installData,"name",a)},expression:"installData.name"}})],1),e("el-form-item",{attrs:{label:"命名空间"}},[e("el-select",{attrs:{placeholder:""},model:{value:t.installData.namespace,callback:function(a){t.$set(t.installData,"namespace",a)},expression:"installData.namespace"}},t._l(t.namespaces,(function(t){return e("el-option",{key:t.name,attrs:{label:t.name,value:t.name}})})),1)],1)],1),t.installDialog?e("yaml",{attrs:{loading:t.yamlLoading},model:{value:t.yamlValue,callback:function(a){t.yamlValue=a},expression:"yamlValue"}}):t._e(),e("div",{staticStyle:{padding:"10px 0px 20px","text-align":"right"}},[e("el-button",{attrs:{plain:"",size:"small"},on:{click:function(a){t.installDialog=!1}}},[t._v("取 消")]),e("el-button",{attrs:{plain:"",size:"small"},on:{click:function(a){return t.install()}}},[t._v("确 定")])],1)],1)])],1)},i=[],s=(e("caad"),e("c975"),e("b0c0"),e("d3b7"),e("2532"),e("ddb0"),e("b85c")),r=e("61b2"),l=e("b562"),o=e("aad4"),c=e("5c96"),u=e("fa7d"),p=e("651e"),h={name:"Application",components:{Clusterbar:r["a"],Yaml:r["f"]},data:function(){return{installDialog:!1,yamlName:"",yamlValue:"",yamlLoading:!0,cellStyle:{border:0},titleName:["Applications"],maxHeight:window.innerHeight-150,loading:!0,originApps:[],installApp:{},installData:{name:"",namespace:"default"},search_ns:[],search_name:"",namespaces:[],delFunc:void 0,installLoading:!1}},created:function(){this.fetchData(),this.fetchNamespace()},mounted:function(){var t=this;window.onresize=function(){return function(){var a=window.innerHeight-150;t.maxHeight=a}()}},watch:{},computed:{apps:function(){var t,a=[],e=Object(s["a"])(this.originApps);try{for(e.s();!(t=e.n()).done;){var n=t.value;this.search_ns.length>0&&this.search_ns.indexOf(n.namespace)<0||(this.search_name&&!n.name.includes(this.search_name)||a.push(n))}}catch(i){e.e(i)}finally{e.f()}return a},appRow:function(){return this.apps?this.apps.length%3>0?parseInt(this.apps.length/3)+1:parseInt(this.apps.length/3):0},appCol:function(){return this.apps?this.apps.length%3>0?this.apps.length%3:3:0}},methods:{dateFormat:u["a"],index:function(t,a){return 3*(t-1)+a-1},fetchData:function(){var t=this;this.loading=!0,this.originApps=[];var a=this.$store.state.cluster;a?Object(l["e"])().then((function(a){t.loading=!1,t.originApps=a.data||[],t.originApps.sort((function(t,a){return t.name>a.name?1:-1}))})).catch((function(){t.loading=!1})):(this.loading=!1,c["Message"].error("获取集群异常，请刷新重试"))},nsSearch:function(t){this.search_ns=[];var a,e=Object(s["a"])(t);try{for(e.s();!(a=e.n()).done;){var n=a.value;this.search_ns.push(n)}}catch(i){e.e(i)}finally{e.f()}},nameSearch:function(t){this.search_name=t},installClick:function(t){this.installApp=t,this.installDialog=!0,this.installData.name=t.name,this.getAppValue(t.name,t.chart_version)},getAppValue:function(t,a){var e=this;t?(this.yamlValue="",this.yamlDialog=!0,this.yamlLoading=!0,Object(l["c"])(t,a).then((function(t){e.yamlLoading=!1,e.yamlValue=t.data.values})).catch((function(){e.yamlLoading=!1}))):c["Message"].error("获取应用名称参数异常，请刷新重试")},install:function(){var t=this,a=this.$store.state.cluster;if(a)if(this.installData.name)if(this.installData.namespace){try{var e=p.load(this.yamlValue,"utf8");console.log(e)}catch(i){return console.log(i),void c["Message"].error("解析values失败: "+i)}var n={name:this.installApp.name,namespace:this.installData.namespace,chart_version:this.installApp.chart_version,release_name:this.installData.name,values:e};this.installLoading=!0,Object(l["a"])(a,n).then((function(){c["Message"].success("安装成功"),t.installLoading=!1})).catch((function(a){console.log(a),t.installLoading=!1}))}else c["Message"].error("请选择命名空间");else c["Message"].error("请输入发布名称");else c["Message"].error("获取集群参数异常，请刷新重试")},createFunc:function(){},fetchNamespace:function(){var t=this;this.namespaces=[];var a=this.$store.state.cluster;a?Object(o["b"])(a).then((function(a){t.namespaces=a.data,t.namespaces.sort((function(t,a){return t.name>a.name?1:-1}))})).catch((function(t){console.log(t)})):c["Message"].error("获取集群异常，请刷新重试")}}},f=h,d=(e("4641"),e("4402"),e("2877")),m=Object(d["a"])(f,n,i,!1,null,"b11666b4",null);a["default"]=m.exports},"60a0":function(t,a,e){},7156:function(t,a,e){var n=e("861d"),i=e("d2bb");t.exports=function(t,a,e){var s,r;return i&&"function"==typeof(s=a.constructor)&&s!==e&&n(r=s.prototype)&&r!==e.prototype&&i(t,r),t}},b562:function(t,a,e){"use strict";e.d(a,"f",(function(){return i})),e.d(a,"d",(function(){return s})),e.d(a,"e",(function(){return r})),e.d(a,"c",(function(){return l})),e.d(a,"a",(function(){return o})),e.d(a,"b",(function(){return c}));var n=e("b775");function i(t){return Object(n["a"])({url:"helm/release/".concat(t),method:"get"})}function s(t,a){return Object(n["a"])({url:"helm/release/".concat(t,"/get"),method:"get",params:a})}function r(){return Object(n["a"])({url:"helm/app/list",method:"get"})}function l(t,a){return Object(n["a"])({url:"helm/app/get",method:"get",params:{name:t,chart_version:a}})}function o(t,a){return Object(n["a"])({url:"helm//release/".concat(t),method:"post",data:a})}function c(t,a){return Object(n["a"])({url:"helm/release/".concat(t),method:"delete",params:a})}},fa7d:function(t,a,e){"use strict";e.d(a,"a",(function(){return n}));e("4d63"),e("ac1f"),e("25f0"),e("5319");function n(t){var a=new Date(t);return i("yyyy-MM-dd hh:mm:ss",a)}function i(t,a){if(!a)return"";var e={"M+":a.getMonth()+1,"d+":a.getDate(),"h+":a.getHours(),"m+":a.getMinutes(),"s+":a.getSeconds(),"q+":Math.floor((a.getMonth()+3)/3),S:a.getMilliseconds()};for(var n in/(y+)/.test(t)&&(t=t.replace(RegExp.$1,(a.getFullYear()+"").substr(4-RegExp.$1.length))),e)new RegExp("("+n+")").test(t)&&(t=t.replace(RegExp.$1,1==RegExp.$1.length?e[n]:("00"+e[n]).substr((""+e[n]).length)));return t}}}]);