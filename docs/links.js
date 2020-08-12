(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{1126:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this.$createElement,e=this._self._c||t;return e("Slate",{attrs:{value:JSON.stringify(this.initialValue)}},[e("Toolbar",[e("LinkButton")],1),this._v(" "),e("Editable",{attrs:{placeholder:"Enter some plain text...",renderElement:this.renderElement}})],1)};r._withStripped=!0;var i=n(12),o=n(0);function a(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(t)))return;var n=[],r=!0,i=!1,o=void 0;try{for(var a,s=t[Symbol.iterator]();!(r=(a=s.next()).done)&&(n.push(a.value),!e||n.length!==e);r=!0);}catch(t){i=!0,o=t}finally{try{r||null==s.return||s.return()}finally{if(i)throw o}}return n}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return s(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return s(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function s(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function u(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){c(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function c(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var f=function(t){var e=t.attributes,n=t.children,r=t.element;return{render:function(){var t=arguments[0];switch(r.type){case"link":return t("a",{attrs:u(u({},e),{},{href:r.url})},[n]);default:return t("p",{attrs:u({},e)},[n])}}}},p=function(t){return!!a(o.a.nodes(t,{match:function(t){return"link"===t.type}}),1)[0]},d=function(t,e){p(t)&&v(t);var n=t.selection,r=n&&o.g.isCollapsed(n),i={type:"link",url:e,children:r?[{text:e}]:[]};r?o.i.insertNodes(t,i):(o.i.wrapNodes(t,i,{split:!0}),o.i.collapse(t,{edge:"end"}))},v=function(t){o.i.unwrapNodes(t,{match:function(t){return"link"===t.type}})},b=n(48),h=n.n(b),y=n(34),m=n(13),w={name:"LinkButton",components:{Button:y.a,Icon:m.a},mixins:[i.f],render:function(){var t=arguments[0],e=this.$editor,n=function(t,e){t.selection&&d(t,e)};return t(y.a,{attrs:{active:p(e)},on:{mouseDown:function(t){t.preventDefault();var r=window.prompt("Enter the URL of the link:");r&&n(e,r)}}},[t(m.a,{attrs:{icon:"link"}})])}},g=n(5),k=Object(g.a)(w,void 0,void 0,!1,null,"3b58a012",null);k.options.__file="site/pages/links/linkButton.vue";var x=k.exports,O=n(35),_=[{children:[{text:"In addition to block nodes, you can create inline nodes, like "},{type:"link",url:"https://en.wikipedia.org/wiki/Hypertext",children:[{text:"hyperlinks"}]},{text:"!"}]},{children:[{text:"This example shows hyperlinks in action. It features two ways to add links. You can either add a link via the toolbar icon above, or if you want in on a little secret, copy a URL to your keyboard and paste it while a range of text is selected."}]}],j={name:"links",components:{Slate:i.e,Editable:i.a,LinkButton:x,Toolbar:O.a},data:function(){return{initialValue:_,renderElement:f}},beforeCreate:function(){var t,e,n,r;t=this.$editor,e=t.insertData,n=t.insertText,r=t.isInline,t.isInline=function(t){return"link"===t.type||r(t)},t.insertText=function(e){e&&h()(e)?d(t,e):n(e)},t.insertData=function(n){var r=n.getData("text/plain");r&&h()(r)?d(t,r):e(n)}}},S=Object(g.a)(j,r,[],!1,null,"2bf28ef7",null);S.options.__file="site/pages/links/index.vue";e.default=S.exports},31:function(t,e,n){var r=n(10),i=n(37);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[t.i,i,""]]);var o={insert:"head",singleton:!1};r(i,o);t.exports=i.locals||{}},32:function(t,e,n){var r=n(10),i=n(39);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[t.i,i,""]]);var o={insert:"head",singleton:!1};r(i,o);t.exports=i.locals||{}},34:function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement;return(t._self._c||e)("span",{staticClass:"button",style:{color:t.color},on:{mousedown:function(e){return t.$emit("mouseDown",e)}}},[t._t("default")],2)};r._withStripped=!0;var i={name:"s-button",props:{active:Boolean,reversed:Boolean},computed:{color:function(){return this.reversed?this.active?"white":"#aaa":this.active?"black":"#ccc"}}},o=(n(36),n(5)),a=Object(o.a)(i,r,[],!1,null,"2b41aaf4",null);a.options.__file="site/pages/components/button.vue";e.a=a.exports},35:function(t,e,n){"use strict";var r=function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"toolbar"},[this._t("default")],2)};r._withStripped=!0;var i={name:"toolbar"},o=(n(38),n(5)),a=Object(o.a)(i,r,[],!1,null,"39400657",null);a.options.__file="site/pages/components/toolbar.vue";e.a=a.exports},36:function(t,e,n){"use strict";var r=n(31);n.n(r).a},37:function(t,e,n){"use strict";n.r(e);var r=n(4),i=n.n(r)()(!1);i.push([t.i,".button[data-v-2b41aaf4] {\n  cursor: pointer;\n}\n",""]),e.default=i},38:function(t,e,n){"use strict";var r=n(32);n.n(r).a},39:function(t,e,n){"use strict";n.r(e);var r=n(4),i=n.n(r)()(!1);i.push([t.i,".toolbar[data-v-39400657] {\n  position: relative;\n  padding: 1px 18px 17px;\n  margin: 0 -20px;\n  border-bottom: 2px solid #eee;\n  margin-bottom: 20px;\n}\n",""]),e.default=i},48:function(t,e){t.exports=function(t){if("string"!=typeof t)return!1;var e=t.match(n);if(!e)return!1;var o=e[1];if(!o)return!1;if(r.test(o)||i.test(o))return!0;return!1};var n=/^(?:\w+:)?\/\/(\S+)$/,r=/^localhost[\:?\d]*(?:[^\:?\d]\S*)?$/,i=/^[^\s\.]+\.\S{2,}$/}}]);