(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{1112:function(t){t.exports=JSON.parse('["ase","art","bmp","blp","cd5","cit","cpt","cr2","cut","dds","dib","djvu","egt","exif","gif","gpl","grf","icns","ico","iff","jng","jpeg","jpg","jfif","jp2","jps","lbm","max","miff","mng","msp","nitf","ota","pbm","pc1","pc2","pc3","pcf","pcx","pdn","pgm","PI1","PI2","PI3","pict","pct","pnm","pns","ppm","psb","psd","pdd","psp","px","pxm","pxr","qfx","raw","rle","sct","sgi","rgb","int","bw","tga","tiff","tif","vtf","xbm","xcf","xpm","3dv","amf","ai","awg","cgm","cdr","cmx","dxf","e2d","egt","eps","fs","gbr","odg","svg","stl","vrml","x3d","sxd","v2d","vnd","wmf","emf","art","xar","png","webp","jxr","hdp","wdp","cur","ecw","iff","lbm","liff","nrrd","pam","pcx","pgf","sgi","rgb","rgba","bw","int","inta","sid","ras","sun","tga"]')},1125:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this.$createElement,e=this._self._c||t;return e("Slate",{attrs:{value:JSON.stringify(this.initialValue)}},[e("Toolbar",[e("InsertImageButton")],1),this._v(" "),e("Editable",{attrs:{placeholder:"Enter some plain text...",renderElement:this.renderElement}})],1)};r._withStripped=!0;var a=n(12),i=n(52),o=n(0);function s(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function u(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?s(Object(n),!0).forEach((function(e){l(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var c=function(t){var e=t.attributes,n=t.children,r=t.element;return{components:{ImageElement:i.a},render:function(){var t=arguments[0];switch(r.type){case"image":return t(i.a,{attrs:u({element:r},e)},[n]);default:return t("p",{attrs:u({},e)},[n])}}}},f=function(t,e){var n={type:"image",url:e,children:[{text:""}]};o.i.insertNodes(t,n)},p=n(34),d=n(13),m={name:"insertImageButton",render:function(){var t=arguments[0],e=this.$editor;return t(p.a,{on:{mouseDown:function(t){t.preventDefault();var n=window.prompt("Enter the URL of the image:");n&&f(e,n)}}},[t(d.a,{attrs:{icon:"image"}})])}},v=n(5),b=Object(v.a)(m,void 0,void 0,!1,null,"1c72d5b2",null);b.options.__file="site/pages/images/insertImageButton.vue";var g=b.exports,h=n(35),y=n(48),w=n.n(y),x=n(1112);function _(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(t)))return;var n=[],r=!0,a=!1,i=void 0;try{for(var o,s=t[Symbol.iterator]();!(r=(o=s.next()).done)&&(n.push(o.value),!e||n.length!==e);r=!0);}catch(t){a=!0,i=t}finally{try{r||null==s.return||s.return()}finally{if(a)throw i}}return n}(t,e)||j(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function j(t,e){if(t){if("string"==typeof t)return O(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?O(t,e):void 0}}function O(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var S=[{type:"paragraph",children:[{text:"In addition to nodes that contain editable text, you can also create other types of nodes, like images or videos."}]},{type:"image",url:"https://source.unsplash.com/kFrdX5IeQzI",children:[{text:""}]},{type:"paragraph",children:[{text:"This example shows images in action. It features two ways to add images. You can either add an image via the toolbar icon above, or if you want in on a little secret, copy an image URL to your keyboard and paste it anywhere in the editor!"}]}],E=function(t){var e=t.insertData,n=t.isVoid;return t.isVoid=function(t){return"image"===t.type||n(t)},t.insertData=function(n){var r=n.getData("text/plain"),a=n.files;if(a&&a.length>0){var i,o=function(t,e){var n;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(n=j(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var r=0,a=function(){};return{s:a,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(t){throw t},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,o=!0,s=!1;return{s:function(){n=t[Symbol.iterator]()},n:function(){var t=n.next();return o=t.done,t},e:function(t){s=!0,i=t},f:function(){try{o||null==n.return||n.return()}finally{if(s)throw i}}}}(a);try{var s=function(){var e=i.value,n=new FileReader;"image"===_(e.type.split("/"),1)[0]&&(n.addEventListener("load",(function(){var e=n.result;f(t,e)})),n.readAsDataURL(e))};for(o.s();!(i=o.n()).done;)s()}catch(t){o.e(t)}finally{o.f()}}else!function(t){if(!t)return!1;if(!w()(t))return!1;var e=new URL(t).pathname.split(".").pop();return x.includes(e)}(r)?e(n):f(t,r)},t},I={name:"links",components:{Slate:a.e,Editable:a.a,InsertImageButton:g,Toolbar:h.a},data:function(){return{initialValue:S,renderElement:c}},beforeCreate:function(){E(this.$editor)}},D=Object(v.a)(I,r,[],!1,null,"f97b96e0",null);D.options.__file="site/pages/images/index.vue";e.default=D.exports},31:function(t,e,n){var r=n(10),a=n(37);"string"==typeof(a=a.__esModule?a.default:a)&&(a=[[t.i,a,""]]);var i={insert:"head",singleton:!1};r(a,i);t.exports=a.locals||{}},32:function(t,e,n){var r=n(10),a=n(39);"string"==typeof(a=a.__esModule?a.default:a)&&(a=[[t.i,a,""]]);var i={insert:"head",singleton:!1};r(a,i);t.exports=a.locals||{}},34:function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement;return(t._self._c||e)("span",{staticClass:"button",style:{color:t.color},on:{mousedown:function(e){return t.$emit("mouseDown",e)}}},[t._t("default")],2)};r._withStripped=!0;var a={name:"s-button",props:{active:Boolean,reversed:Boolean},computed:{color:function(){return this.reversed?this.active?"white":"#aaa":this.active?"black":"#ccc"}}},i=(n(36),n(5)),o=Object(i.a)(a,r,[],!1,null,"2b41aaf4",null);o.options.__file="site/pages/components/button.vue";e.a=o.exports},35:function(t,e,n){"use strict";var r=function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"toolbar"},[this._t("default")],2)};r._withStripped=!0;var a={name:"toolbar"},i=(n(38),n(5)),o=Object(i.a)(a,r,[],!1,null,"39400657",null);o.options.__file="site/pages/components/toolbar.vue";e.a=o.exports},36:function(t,e,n){"use strict";var r=n(31);n.n(r).a},37:function(t,e,n){"use strict";n.r(e);var r=n(4),a=n.n(r)()(!1);a.push([t.i,".button[data-v-2b41aaf4] {\n  cursor: pointer;\n}\n",""]),e.default=a},38:function(t,e,n){"use strict";var r=n(32);n.n(r).a},39:function(t,e,n){"use strict";n.r(e);var r=n(4),a=n.n(r)()(!1);a.push([t.i,".toolbar[data-v-39400657] {\n  position: relative;\n  padding: 1px 18px 17px;\n  margin: 0 -20px;\n  border-bottom: 2px solid #eee;\n  margin-bottom: 20px;\n}\n",""]),e.default=a},40:function(t,e,n){var r=n(10),a=n(47);"string"==typeof(a=a.__esModule?a.default:a)&&(a=[[t.i,a,""]]);var i={insert:"head",singleton:!1};r(a,i);t.exports=a.locals||{}},46:function(t,e,n){"use strict";var r=n(40);n.n(r).a},47:function(t,e,n){"use strict";n.r(e);var r=n(4),a=n.n(r)()(!1);a.push([t.i,"img[data-v-d1cb1b5a] {\n  display: block;\n  max-width: 100%;\n  max-height: 20em;\n}\n",""]),e.default=a},48:function(t,e){t.exports=function(t){if("string"!=typeof t)return!1;var e=t.match(n);if(!e)return!1;var i=e[1];if(!i)return!1;if(r.test(i)||a.test(i))return!0;return!1};var n=/^(?:\w+:)?\/\/(\S+)$/,r=/^localhost[\:?\d]*(?:[^\:?\d]\S*)?$/,a=/^[^\s\.]+\.\S{2,}$/},52:function(t,e,n){"use strict";var r=function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("div",{attrs:{contentEditable:"false"}},[e("img",{style:{boxShadow:this.selected&&this.focused?"0 0 0 3px #B4D5FF":"none"},attrs:{src:this.element.url}})]),this._t("default")],2)};r._withStripped=!0;var a=n(12),i={name:"imageElement",mixins:[a.d,a.b],props:{element:Object}},o=(n(46),n(5)),s=Object(o.a)(i,r,[],!1,null,"d1cb1b5a",null);s.options.__file="site/pages/images/imageElement.vue";e.a=s.exports}}]);