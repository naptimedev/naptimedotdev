(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{"/e88":function(e,t){e.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},"10Zl":function(e,t,r){e.exports={header:"header-module--header--2Q3RK",titleTag:"header-module--titleTag--1n3pT",headerOne:"header-module--headerOne--l2RIz",headerNav:"header-module--headerNav--2ALTk",siteLink:"header-module--siteLink--1tEMr"}},"8+s/":function(e,t,r){"use strict";r("V+eJ"),r("bWfx"),r("f3/d"),r("hHhE"),r("HAE/");var n,o=r("q1tI"),a=(n=o)&&"object"==typeof n&&"default"in n?n.default:n;function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var c=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,r){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==r&&"function"!=typeof r)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(n){if("function"!=typeof n)throw new Error("Expected WrappedComponent to be a React component.");var u,l=[];function s(){u=e(l.map((function(e){return e.props}))),f.canUseDOM?t(u):r&&(u=r(u))}var f=function(e){var t,r;function o(){return e.apply(this,arguments)||this}r=e,(t=o).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r,o.peek=function(){return u},o.rewind=function(){if(o.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=u;return u=void 0,l=[],e};var i=o.prototype;return i.UNSAFE_componentWillMount=function(){l.push(this),s()},i.componentDidUpdate=function(){s()},i.componentWillUnmount=function(){var e=l.indexOf(this);l.splice(e,1),s()},i.render=function(){return a.createElement(n,this.props)},o}(o.PureComponent);return i(f,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(n)+")"),i(f,"canUseDOM",c),f}}},LbRr:function(e,t,r){"use strict";r.d(t,"a",(function(){return l}));r("f3/d"),r("pIFo");var n=r("faVh"),o=r("q1tI"),a=r.n(o),i=r("10Zl"),c=r.n(i),u=r("Wbzz");function l(){n.data.allFile.nodes.map((function(e){var t=e.name.replace(/-/g," ");return a.a.createElement(u.a,{to:"/"+e.name},t)}));return a.a.createElement("header",{className:c.a.header},a.a.createElement(u.a,{className:c.a.siteLink,to:"/"},a.a.createElement("img",{src:"/snooze.svg",alt:"Website icon"}),a.a.createElement("div",{className:c.a.titleTag},a.a.createElement("h1",{className:c.a.headerOne},"naptime.dev"),a.a.createElement("span",null,"Rest for your weary web"))),a.a.createElement("nav",{className:c.a.headerNav},a.a.createElement("ul",null,a.a.createElement(u.a,{to:"/enter-the-bloggin"},"My Blog"))))}},Oyvg:function(e,t,r){var n=r("dyZX"),o=r("Xbzi"),a=r("hswa").f,i=r("kJMx").f,c=r("quPj"),u=r("C/va"),l=n.RegExp,s=l,f=l.prototype,p=/a/g,d=/a/g,m=new l(p)!==p;if(r("nh4g")&&(!m||r("eeVq")((function(){return d[r("K0xU")("match")]=!1,l(p)!=p||l(d)==d||"/a/i"!=l(p,"i")})))){l=function(e,t){var r=this instanceof l,n=c(e),a=void 0===t;return!r&&n&&e.constructor===l&&a?e:o(m?new s(n&&!a?e.source:e,t):s((n=e instanceof l)?e.source:e,n&&a?u.call(e):t),r?this:f,l)};for(var h=function(e){e in l||a(l,e,{configurable:!0,get:function(){return s[e]},set:function(t){s[e]=t}})},y=i(s),b=0;y.length>b;)h(y[b++]);f.constructor=l,l.prototype=f,r("KroJ")(n,"RegExp",l)}r("elZq")("RegExp")},UNbL:function(e,t,r){e.exports={footer:"footer-module--footer--2r2aa",emailHeader:"footer-module--emailHeader--1HhjP",emailButton:"footer-module--emailButton--2bMpA",emailIcon:"footer-module--emailIcon--3dB3M",followHeader:"footer-module--followHeader--TcHL3",footerNav:"footer-module--footerNav--26JE2",footerIcon:"footer-module--footerIcon--4cvRB",footerEmail:"footer-module--footerEmail--2C1FY",footerSocialMedia:"footer-module--footerSocialMedia--3Z141"}},"W/9C":function(e,t,r){"use strict";r.d(t,"a",(function(){return u}));var n=r("q1tI"),o=r.n(n),a=r("Wbzz"),i=r("UNbL"),c=r.n(i);function u(){return o.a.createElement("footer",{className:c.a.footer},o.a.createElement("div",{className:c.a.footerEmail},o.a.createElement("h2",{className:c.a.emailHeader},"nathan@naptime.dev"),o.a.createElement("a",{href:"mailto:nathan@naptime.dev",className:c.a.emailButton},o.a.createElement("img",{className:c.a.emailIcon,src:"/envelope-pigeon.png",alt:"Email nathan@naptime.dev"}))),o.a.createElement("div",{className:c.a.footerSocialMedia},o.a.createElement("nav",{className:c.a.footerNav,"aria-label":"Follow Me on Social Media"},o.a.createElement("ul",null,o.a.createElement("li",null,o.a.createElement(a.a,{to:"https://codepen.io/codenaptime"},o.a.createElement("svg",{className:c.a.footerIcon,viewBox:"0 0 100 100"},o.a.createElement("path",{d:"M100 34.2c-.4-2.6-3.3-4-5.3-5.3-3.6-2.4-7.1-4.7-10.7-7.1-8.5-5.7-17.1-11.4-25.6-17.1-2-1.3-4-2.7-6-4-1.4-1-3.3-1-4.8 0-5.7 3.8-11.5 7.7-17.2 11.5L5.2 29C3 30.4.1 31.8 0 34.8c-.1 3.3 0 6.7 0 10v16c0 2.9-.6 6.3 2.1 8.1 6.4 4.4 12.9 8.6 19.4 12.9 8 5.3 16 10.7 24 16 2.2 1.5 4.4 3.1 7.1 1.3 2.3-1.5 4.5-3 6.8-4.5 8.9-5.9 17.8-11.9 26.7-17.8l9.9-6.6c.6-.4 1.3-.8 1.9-1.3 1.4-1 2-2.4 2-4.1V37.3c.1-1.1.2-2.1.1-3.1 0-.1 0 .2 0 0zM54.3 12.3L88 34.8 73 44.9 54.3 32.4V12.3zm-8.6 0v20L27.1 44.8 12 34.8l33.7-22.5zM8.6 42.8L19.3 50 8.6 57.2V42.8zm37.1 44.9L12 65.2l15-10.1 18.6 12.5v20.1zM50 60.2L34.8 50 50 39.8 65.2 50 50 60.2zm4.3 27.5v-20l18.6-12.5 15 10.1-33.6 22.4zm37.1-30.5L80.7 50l10.8-7.2-.1 14.4z"})))),o.a.createElement("li",null,o.a.createElement(a.a,{to:"https://github.com/codenaptime"},o.a.createElement("img",{className:c.a.footerIcon,alt:"Github Profile",src:"/developer-community-github-1.png"}))),o.a.createElement("li",null,o.a.createElement(a.a,{to:"https://dev.to/codenaptime"},o.a.createElement("img",{className:c.a.footerIcon,src:"https://d2fltix0v2e0sb.cloudfront.net/dev-badge.svg",alt:"DEV Profile",height:"30",width:"30"}))),o.a.createElement("li",null,o.a.createElement(a.a,{to:"https://twitter.com/codenaptime"},o.a.createElement("img",{className:c.a.footerIcon,src:"/social-media-twitter.png",alt:"Twitter Profile"}))),o.a.createElement("li",null,o.a.createElement(a.a,{to:"https://www.linkedin.com/in/nathan-phelps/"},o.a.createElement("img",{className:c.a.footerIcon,src:"/professional-network-linkedin.png",alt:"Twitter Profile"})))))))}},Wbzz:function(e,t,r){"use strict";r("xfY5"),r("q1tI");var n=r("+ZDr"),o=r.n(n);r.d(t,"a",(function(){return o.a}));r("lw3w"),r("emEt").default.enqueue},bmMU:function(e,t,r){r("SRfc"),r("RW0V"),r("a1Th"),r("h7Nl"),r("OEbY"),r("Oyvg"),r("LK8F"),r("T39b"),r("rGqo"),r("yt8O"),r("Btvt"),r("XfO3"),r("9AAn");var n="undefined"!=typeof Element,o="function"==typeof Map,a="function"==typeof Set,i="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;e.exports=function(e,t){try{return function e(t,r){if(t===r)return!0;if(t&&r&&"object"==typeof t&&"object"==typeof r){if(t.constructor!==r.constructor)return!1;var c,u,l,s;if(Array.isArray(t)){if((c=t.length)!=r.length)return!1;for(u=c;0!=u--;)if(!e(t[u],r[u]))return!1;return!0}if(o&&t instanceof Map&&r instanceof Map){if(t.size!==r.size)return!1;for(s=t.entries();!(u=s.next()).done;)if(!r.has(u.value[0]))return!1;for(s=t.entries();!(u=s.next()).done;)if(!e(u.value[1],r.get(u.value[0])))return!1;return!0}if(a&&t instanceof Set&&r instanceof Set){if(t.size!==r.size)return!1;for(s=t.entries();!(u=s.next()).done;)if(!r.has(u.value[0]))return!1;return!0}if(i&&ArrayBuffer.isView(t)&&ArrayBuffer.isView(r)){if((c=t.length)!=r.length)return!1;for(u=c;0!=u--;)if(t[u]!==r[u])return!1;return!0}if(t.constructor===RegExp)return t.source===r.source&&t.flags===r.flags;if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===r.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===r.toString();if((c=(l=Object.keys(t)).length)!==Object.keys(r).length)return!1;for(u=c;0!=u--;)if(!Object.prototype.hasOwnProperty.call(r,l[u]))return!1;if(n&&t instanceof Element)return!1;for(u=c;0!=u--;)if(("_owner"!==l[u]&&"__v"!==l[u]&&"__o"!==l[u]||!t.$$typeof)&&!e(t[l[u]],r[l[u]]))return!1;return!0}return t!=t&&r!=r}(e,t)}catch(r){if((r.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw r}}},"dZ+Y":function(e,t,r){"use strict";var n=r("XKFU"),o=r("CkkT")(3);n(n.P+n.F*!r("LyE8")([].some,!0),"Array",{some:function(e){return o(this,e,arguments[1])}})},faVh:function(e){e.exports=JSON.parse('{"data":{"allFile":{"nodes":[]}}}')},h7Nl:function(e,t,r){var n=Date.prototype,o=n.toString,a=n.getTime;new Date(NaN)+""!="Invalid Date"&&r("KroJ")(n,"toString",(function(){var e=a.call(this);return e==e?o.call(this):"Invalid Date"}))},lw3w:function(e,t,r){var n;e.exports=(n=r("rzlk"))&&n.default||n},qhky:function(e,t,r){"use strict";(function(e){r.d(t,"a",(function(){return he}));r("dZ+Y"),r("KKXr"),r("2Spj"),r("eM6i"),r("8+KV"),r("0l/t"),r("LK8F"),r("pIFo"),r("V+eJ"),r("/SS/"),r("hHhE"),r("91GP"),r("HAE/"),r("rE2o"),r("ioFf"),r("DNiP"),r("rGqo"),r("yt8O"),r("Btvt"),r("RW0V"),r("bWfx");var n,o,a,i,c=r("17x9"),u=r.n(c),l=r("8+s/"),s=r.n(l),f=r("bmMU"),p=r.n(f),d=r("q1tI"),m=r.n(d),h=r("MgzW"),y=r.n(h),b="bodyAttributes",v="htmlAttributes",g="titleAttributes",T={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},w=(Object.keys(T).map((function(e){return T[e]})),"charset"),E="cssText",O="href",A="http-equiv",S="innerHTML",C="itemprop",N="name",I="property",j="rel",P="src",L="target",x={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},k="defaultTitle",M="defer",R="encodeSpecialCharacters",F="onChangeClientState",q="titleTemplate",z=Object.keys(x).reduce((function(e,t){return e[x[t]]=t,e}),{}),B=[T.NOSCRIPT,T.SCRIPT,T.STYLE],H="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},D=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},_=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),V=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},K=function(e,t){var r={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r},U=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},Y=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},W=function(e){var t=$(e,T.TITLE),r=$(e,q);if(r&&t)return r.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var n=$(e,k);return t||n||void 0},J=function(e){return $(e,F)||function(){}},X=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return V({},e,t)}),{})},Z=function(e,t){return t.filter((function(e){return void 0!==e[T.BASE]})).map((function(e){return e[T.BASE]})).reverse().reduce((function(t,r){if(!t.length)for(var n=Object.keys(r),o=0;o<n.length;o++){var a=n[o].toLowerCase();if(-1!==e.indexOf(a)&&r[a])return t.concat(r)}return t}),[])},G=function(e,t,r){var n={};return r.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&ne("Helmet: "+e+' should be of type "Array". Instead found type "'+H(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,r){var o={};r.filter((function(e){for(var r=void 0,a=Object.keys(e),i=0;i<a.length;i++){var c=a[i],u=c.toLowerCase();-1===t.indexOf(u)||r===j&&"canonical"===e[r].toLowerCase()||u===j&&"stylesheet"===e[u].toLowerCase()||(r=u),-1===t.indexOf(c)||c!==S&&c!==E&&c!==C||(r=c)}if(!r||!e[r])return!1;var l=e[r].toLowerCase();return n[r]||(n[r]={}),o[r]||(o[r]={}),!n[r][l]&&(o[r][l]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var a=Object.keys(o),i=0;i<a.length;i++){var c=a[i],u=y()({},n[c],o[c]);n[c]=u}return e}),[]).reverse()},$=function(e,t){for(var r=e.length-1;r>=0;r--){var n=e[r];if(n.hasOwnProperty(t))return n[t]}return null},Q=(n=Date.now(),function(e){var t=Date.now();t-n>16?(n=t,e(t)):setTimeout((function(){Q(e)}),0)}),ee=function(e){return clearTimeout(e)},te="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||Q:e.requestAnimationFrame||Q,re="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||ee:e.cancelAnimationFrame||ee,ne=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},oe=null,ae=function(e,t){var r=e.baseTag,n=e.bodyAttributes,o=e.htmlAttributes,a=e.linkTags,i=e.metaTags,c=e.noscriptTags,u=e.onChangeClientState,l=e.scriptTags,s=e.styleTags,f=e.title,p=e.titleAttributes;ue(T.BODY,n),ue(T.HTML,o),ce(f,p);var d={baseTag:le(T.BASE,r),linkTags:le(T.LINK,a),metaTags:le(T.META,i),noscriptTags:le(T.NOSCRIPT,c),scriptTags:le(T.SCRIPT,l),styleTags:le(T.STYLE,s)},m={},h={};Object.keys(d).forEach((function(e){var t=d[e],r=t.newTags,n=t.oldTags;r.length&&(m[e]=r),n.length&&(h[e]=d[e].oldTags)})),t&&t(),u(e,m,h)},ie=function(e){return Array.isArray(e)?e.join(""):e},ce=function(e,t){void 0!==e&&document.title!==e&&(document.title=ie(e)),ue(T.TITLE,t)},ue=function(e,t){var r=document.getElementsByTagName(e)[0];if(r){for(var n=r.getAttribute("data-react-helmet"),o=n?n.split(","):[],a=[].concat(o),i=Object.keys(t),c=0;c<i.length;c++){var u=i[c],l=t[u]||"";r.getAttribute(u)!==l&&r.setAttribute(u,l),-1===o.indexOf(u)&&o.push(u);var s=a.indexOf(u);-1!==s&&a.splice(s,1)}for(var f=a.length-1;f>=0;f--)r.removeAttribute(a[f]);o.length===a.length?r.removeAttribute("data-react-helmet"):r.getAttribute("data-react-helmet")!==i.join(",")&&r.setAttribute("data-react-helmet",i.join(","))}},le=function(e,t){var r=document.head||document.querySelector(T.HEAD),n=r.querySelectorAll(e+"[data-react-helmet]"),o=Array.prototype.slice.call(n),a=[],i=void 0;return t&&t.length&&t.forEach((function(t){var r=document.createElement(e);for(var n in t)if(t.hasOwnProperty(n))if(n===S)r.innerHTML=t.innerHTML;else if(n===E)r.styleSheet?r.styleSheet.cssText=t.cssText:r.appendChild(document.createTextNode(t.cssText));else{var c=void 0===t[n]?"":t[n];r.setAttribute(n,c)}r.setAttribute("data-react-helmet","true"),o.some((function(e,t){return i=t,r.isEqualNode(e)}))?o.splice(i,1):a.push(r)})),o.forEach((function(e){return e.parentNode.removeChild(e)})),a.forEach((function(e){return r.appendChild(e)})),{oldTags:o,newTags:a}},se=function(e){return Object.keys(e).reduce((function(t,r){var n=void 0!==e[r]?r+'="'+e[r]+'"':""+r;return t?t+" "+n:n}),"")},fe=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,r){return t[x[r]||r]=e[r],t}),t)},pe=function(e,t,r){switch(e){case T.TITLE:return{toComponent:function(){return e=t.title,r=t.titleAttributes,(n={key:e})["data-react-helmet"]=!0,o=fe(r,n),[m.a.createElement(T.TITLE,o,e)];var e,r,n,o},toString:function(){return function(e,t,r,n){var o=se(r),a=ie(t);return o?"<"+e+' data-react-helmet="true" '+o+">"+Y(a,n)+"</"+e+">":"<"+e+' data-react-helmet="true">'+Y(a,n)+"</"+e+">"}(e,t.title,t.titleAttributes,r)}};case b:case v:return{toComponent:function(){return fe(t)},toString:function(){return se(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,r){var n,o=((n={key:r})["data-react-helmet"]=!0,n);return Object.keys(t).forEach((function(e){var r=x[e]||e;if(r===S||r===E){var n=t.innerHTML||t.cssText;o.dangerouslySetInnerHTML={__html:n}}else o[r]=t[e]})),m.a.createElement(e,o)}))}(e,t)},toString:function(){return function(e,t,r){return t.reduce((function(t,n){var o=Object.keys(n).filter((function(e){return!(e===S||e===E)})).reduce((function(e,t){var o=void 0===n[t]?t:t+'="'+Y(n[t],r)+'"';return e?e+" "+o:o}),""),a=n.innerHTML||n.cssText||"",i=-1===B.indexOf(e);return t+"<"+e+' data-react-helmet="true" '+o+(i?"/>":">"+a+"</"+e+">")}),"")}(e,t,r)}}}},de=function(e){var t=e.baseTag,r=e.bodyAttributes,n=e.encode,o=e.htmlAttributes,a=e.linkTags,i=e.metaTags,c=e.noscriptTags,u=e.scriptTags,l=e.styleTags,s=e.title,f=void 0===s?"":s,p=e.titleAttributes;return{base:pe(T.BASE,t,n),bodyAttributes:pe(b,r,n),htmlAttributes:pe(v,o,n),link:pe(T.LINK,a,n),meta:pe(T.META,i,n),noscript:pe(T.NOSCRIPT,c,n),script:pe(T.SCRIPT,u,n),style:pe(T.STYLE,l,n),title:pe(T.TITLE,{title:f,titleAttributes:p},n)}},me=s()((function(e){return{baseTag:Z([O,L],e),bodyAttributes:X(b,e),defer:$(e,M),encode:$(e,R),htmlAttributes:X(v,e),linkTags:G(T.LINK,[j,O],e),metaTags:G(T.META,[N,w,A,I,C],e),noscriptTags:G(T.NOSCRIPT,[S],e),onChangeClientState:J(e),scriptTags:G(T.SCRIPT,[P,S],e),styleTags:G(T.STYLE,[E],e),title:W(e),titleAttributes:X(g,e)}}),(function(e){oe&&re(oe),e.defer?oe=te((function(){ae(e,(function(){oe=null}))})):(ae(e),oe=null)}),de)((function(){return null})),he=(o=me,i=a=function(e){function t(){return D(this,t),U(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!p()(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case T.SCRIPT:case T.NOSCRIPT:return{innerHTML:t};case T.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,r=e.child,n=e.arrayTypeChildren,o=e.newChildProps,a=e.nestedChildren;return V({},n,((t={})[r.type]=[].concat(n[r.type]||[],[V({},o,this.mapNestedChildrenToProps(r,a))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,r,n=e.child,o=e.newProps,a=e.newChildProps,i=e.nestedChildren;switch(n.type){case T.TITLE:return V({},o,((t={})[n.type]=i,t.titleAttributes=V({},a),t));case T.BODY:return V({},o,{bodyAttributes:V({},a)});case T.HTML:return V({},o,{htmlAttributes:V({},a)})}return V({},o,((r={})[n.type]=V({},a),r))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var r=V({},t);return Object.keys(e).forEach((function(t){var n;r=V({},r,((n={})[t]=e[t],n))})),r},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var r=this,n={};return m.a.Children.forEach(e,(function(e){if(e&&e.props){var o=e.props,a=o.children,i=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,r){return t[z[r]||r]=e[r],t}),t)}(K(o,["children"]));switch(r.warnOnInvalidChildren(e,a),e.type){case T.LINK:case T.META:case T.NOSCRIPT:case T.SCRIPT:case T.STYLE:n=r.flattenArrayTypeChildren({child:e,arrayTypeChildren:n,newChildProps:i,nestedChildren:a});break;default:t=r.mapObjectTypeChildren({child:e,newProps:t,newChildProps:i,nestedChildren:a})}}})),t=this.mapArrayTypeChildrenToProps(n,t)},t.prototype.render=function(){var e=this.props,t=e.children,r=K(e,["children"]),n=V({},r);return t&&(n=this.mapChildrenToProps(t,n)),m.a.createElement(o,n)},_(t,null,[{key:"canUseDOM",set:function(e){o.canUseDOM=e}}]),t}(m.a.Component),a.propTypes={base:u.a.object,bodyAttributes:u.a.object,children:u.a.oneOfType([u.a.arrayOf(u.a.node),u.a.node]),defaultTitle:u.a.string,defer:u.a.bool,encodeSpecialCharacters:u.a.bool,htmlAttributes:u.a.object,link:u.a.arrayOf(u.a.object),meta:u.a.arrayOf(u.a.object),noscript:u.a.arrayOf(u.a.object),onChangeClientState:u.a.func,script:u.a.arrayOf(u.a.object),style:u.a.arrayOf(u.a.object),title:u.a.string,titleAttributes:u.a.object,titleTemplate:u.a.string},a.defaultProps={defer:!0,encodeSpecialCharacters:!0},a.peek=o.peek,a.rewind=function(){var e=o.rewind();return e||(e=de({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},i);he.renderStatic=he.rewind}).call(this,r("yLpj"))},qncB:function(e,t,r){var n=r("XKFU"),o=r("vhPU"),a=r("eeVq"),i=r("/e88"),c="["+i+"]",u=RegExp("^"+c+c+"*"),l=RegExp(c+c+"*$"),s=function(e,t,r){var o={},c=a((function(){return!!i[e]()||"​"!="​"[e]()})),u=o[e]=c?t(f):i[e];r&&(o[r]=u),n(n.P+n.F*c,"String",o)},f=s.trim=function(e,t){return e=String(o(e)),1&t&&(e=e.replace(u,"")),2&t&&(e=e.replace(l,"")),e};e.exports=s},rzlk:function(e,t,r){"use strict";r.r(t);r("jm62"),r("ioFf"),r("rGqo"),r("yt8O"),r("Btvt"),r("RW0V");var n=r("q1tI"),o=r.n(n),a=r("IOVJ");function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}t.default=function(e){var t=e.location,r=e.pageResources;return r?o.a.createElement(a.a,function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({location:t,pageResources:r},r.json)):null}},xfY5:function(e,t,r){"use strict";var n=r("dyZX"),o=r("aagx"),a=r("LZWt"),i=r("Xbzi"),c=r("apmT"),u=r("eeVq"),l=r("kJMx").f,s=r("EemH").f,f=r("hswa").f,p=r("qncB").trim,d=n.Number,m=d,h=d.prototype,y="Number"==a(r("Kuth")(h)),b="trim"in String.prototype,v=function(e){var t=c(e,!1);if("string"==typeof t&&t.length>2){var r,n,o,a=(t=b?t.trim():p(t,3)).charCodeAt(0);if(43===a||45===a){if(88===(r=t.charCodeAt(2))||120===r)return NaN}else if(48===a){switch(t.charCodeAt(1)){case 66:case 98:n=2,o=49;break;case 79:case 111:n=8,o=55;break;default:return+t}for(var i,u=t.slice(2),l=0,s=u.length;l<s;l++)if((i=u.charCodeAt(l))<48||i>o)return NaN;return parseInt(u,n)}}return+t};if(!d(" 0o1")||!d("0b1")||d("+0x1")){d=function(e){var t=arguments.length<1?0:e,r=this;return r instanceof d&&(y?u((function(){h.valueOf.call(r)})):"Number"!=a(r))?i(new m(v(t)),r,d):v(t)};for(var g,T=r("nh4g")?l(m):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),w=0;T.length>w;w++)o(m,g=T[w])&&!o(d,g)&&f(d,g,s(m,g));d.prototype=h,h.constructor=d,r("KroJ")(n,"Number",d)}},yLpj:function(e,t){var r;r=function(){return this}();try{r=r||new Function("return this")()}catch(n){"object"==typeof window&&(r=window)}e.exports=r}}]);
//# sourceMappingURL=commons-daceb28a8bba6c25c848.js.map