(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"3yDR":function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return l})),n.d(t,"data",(function(){return f}));var r=n("q1tI"),o=n.n(r),c=n("Tool"),u=n("7ljp"),a=n("A2+M"),i=n("Wbzz");function l(e){var t=e.data.mdx,n=t.body,r=t.frontmatter;return o.a.createElement(c.a,null,o.a.createElement("div",{id:"blog"},o.a.createElement("section",{id:"top-section"},o.a.createElement("h1",null,"Naptime Blog"),o.a.createElement("h2",null,r.title),o.a.createElement("description",null,r.description)),o.a.createElement("section",null,o.a.createElement(u.MDXProvider,null,o.a.createElement(a.MDXRenderer,{components:i.a},n)))))}var f="564773922"},"A2+M":function(e,t,n){var r=n("X8hv");e.exports={MDXRenderer:r}},I5cv:function(e,t,n){var r=n("XKFU"),o=n("Kuth"),c=n("2OiF"),u=n("y3w9"),a=n("0/R4"),i=n("eeVq"),l=n("8MEG"),f=(n("dyZX").Reflect||{}).construct,p=i((function(){function e(){}return!(f((function(){}),[],e)instanceof e)})),s=!i((function(){f((function(){}))}));r(r.S+r.F*(p||s),"Reflect",{construct:function(e,t){c(e),u(t);var n=arguments.length<3?e:c(arguments[2]);if(s&&!p)return f(e,t,n);if(e==n){switch(t.length){case 0:return new e;case 1:return new e(t[0]);case 2:return new e(t[0],t[1]);case 3:return new e(t[0],t[1],t[2]);case 4:return new e(t[0],t[1],t[2],t[3])}var r=[null];return r.push.apply(r,t),new(l.apply(e,r))}var i=n.prototype,y=o(a(i)?i:Object.prototype),m=Function.apply.call(e,y,t);return a(m)?m:y}})},Tool:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n("q1tI"),o=n.n(r),c=n("LbRr"),u=n("W/9C"),a=n("qhky");function i(e){var t=e.children;return o.a.createElement(r.Fragment,null,o.a.createElement(a.a,null,o.a.createElement("meta",{charSet:"utf-8"}),o.a.createElement("title",null,"Rest for your weary web.")),o.a.createElement(c.a,null),o.a.createElement("main",null,t),o.a.createElement(u.a,null))}},X8hv:function(e,t,n){function r(e,t,n){return(r=o()?Reflect.construct:function(e,t,n){var r=[null];r.push.apply(r,t);var o=new(Function.bind.apply(e,r));return n&&c(o,n.prototype),o}).apply(null,arguments)}function o(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function c(e,t){return(c=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function u(e){return function(e){if(Array.isArray(e))return a(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return a(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return a(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function a(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){f(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function f(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n("jm62"),n("yt8O"),n("RW0V"),n("rGqo"),n("rE2o"),n("ioFf"),n("XfO3"),n("HEwt"),n("f3/d"),n("a1Th"),n("Btvt"),n("I5cv"),n("I5cv"),n("f3/d"),n("a1Th"),n("XfO3"),n("HEwt"),n("rE2o"),n("jm62"),n("ioFf"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V");var p=n("q1tI"),s=n("7ljp"),y=s.useMDXComponents,m=s.mdx,d=n("BfwJ").useMDXScope;e.exports=function(e){var t=e.scope,n=e.components,o=e.children,c=function(e,t){if(null==e)return{};var n,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,["scope","components","children"]),a=y(n),i=d(t),f=p.useMemo((function(){if(!o)return null;var e=l({React:p,mdx:m},i),t=Object.keys(e),n=t.map((function(t){return e[t]}));return r(Function,["_fn"].concat(u(t),[""+o])).apply(void 0,[{}].concat(u(n)))}),[o,t]);return p.createElement(f,l({components:a},c))}}}]);
//# sourceMappingURL=component---src-templates-mdx-template-js-b3ff591381829076bda7.js.map