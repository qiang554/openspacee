(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-559aaf99"],{"34c4":function(t,e,a){"use strict";var i=a("b4e4"),n=a.n(i);n.a},b4e4:function(t,e,a){},c390:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"yaml-editor"},[a("textarea",{ref:"textarea"})])},n=[],r=a("56b3"),u=a.n(r);a("0dd0"),a("a7be"),a("e27f"),a("ced0"),a("8822"),a("b8d1");window.jsyaml=a("651e");var l={name:"YamlEditor",data:function(){return{yamlEditor:!1,value:"aaa\n- bbb"}},watch:{value:function(t){var e=this.yamlEditor.getValue();t!==e&&this.yamlEditor.setValue(this.value)}},mounted:function(){var t=this;this.yamlEditor=u.a.fromTextArea(this.$refs.textarea,{lineNumbers:!0,mode:"text/x-yaml",gutters:["CodeMirror-lint-markers"],theme:"3024-day",lint:!0}),this.yamlEditor.setValue(this.value),this.yamlEditor.on("change",(function(e){t.$emit("changed",e.getValue()),t.$emit("input",e.getValue())}))},methods:{getValue:function(){return this.yamlEditor.getValue()}}},o=l,s=(a("34c4"),a("2877")),c=Object(s["a"])(o,i,n,!1,null,"46245e60",null);e["default"]=c.exports},e27f:function(t,e,a){}}]);