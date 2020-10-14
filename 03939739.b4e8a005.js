/*! For license information please see 03939739.b4e8a005.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{152:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return p})),n.d(t,"default",(function(){return s}));var r=n(1),a=n(9),o=(n(0),n(332)),i=n(333),c={last_modified_on:"2020-10-13",title:"Routing",description:"Learn how to configure your custom routes on Qovery"},l={id:"using-qovery/configuration/routing",title:"Routing",description:"Learn how to configure your custom routes on Qovery",source:"@site/docs/using-qovery/configuration/routing.md",permalink:"/docs/using-qovery/configuration/routing",editUrl:"https://github.com/Qovery/documentation/edit/master/website/docs/using-qovery/configuration/routing.md",sidebar:"docs",previous:{title:"Brokers",permalink:"/docs/using-qovery/configuration/brokers"},next:{title:"Business \u2b50\ufe0f",permalink:"/docs/using-qovery/configuration/business"}},p=[{value:"Concepts",id:"concepts",children:[{value:"Router",id:"router",children:[]},{value:"Route",id:"route",children:[]},{value:"Multiple routes",id:"multiple-routes",children:[]},{value:"Custom domains",id:"custom-domains",children:[]}]},{value:"Example",id:"example",children:[]}],u={rightToc:p};function s(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Qovery allows you to define the routes used in your ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/main-concepts/environment/"}),"environments"),"."),Object(o.b)("p",null,"A route describes how an incoming HTTP request is going to be processed by Qovery. The routes are defined using .qovery.yml file in your application repository."),Object(o.b)("h2",{id:"concepts"},"Concepts"),Object(o.b)("h3",{id:"router"},"Router"),Object(o.b)("p",null,'Qovery has the concept of "',Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/using-qovery/configuration/routing/"}),"router"),'" which is where the traffic transit from the World and your application.\nEach application that needs to be accessible from outside - needs to be attached to at least one router.'),Object(o.b)("p",null,"An application can be attached to 0 to n routers. It's up to you and depends on your use case."),Object(o.b)("p",null,"A router is defined by:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"a name (must be unique through the project)"),Object(o.b)("li",{parentName:"ul"},"0 to n custom domains"),Object(o.b)("li",{parentName:"ul"},"1 to n routes")),Object(o.b)("p",null,"Here is a configuration example of a router:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yaml",metastring:'title=".qovery.yml" {7-15}',title:'".qovery.yml"',"{7-15}":!0}),"application:\n  name: my-app-1\n  project: my-project\n  publicly_accessible: true\nrouters:\n- name: main\n  custom_domains:\n  - branch: master\n    domain: my.tld.com\n  routes:\n  - application_name: my-app-1\n    paths:\n    - /\n")),Object(o.b)("h3",{id:"route"},"Route"),Object(o.b)("p",null,'A "',Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/using-qovery/configuration/routing/"}),"route"),'" is a concept to connect a "router" to an application. An application can have 0 to n routes.'),Object(o.b)("p",null,"A route is defined by:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"a path"),Object(o.b)("li",{parentName:"ul"},"an application name")),Object(o.b)("p",null,"Here is a configuration example of a route:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yaml",metastring:'title=".qovery.yml" {12-15}',title:'".qovery.yml"',"{12-15}":!0}),"application:\n  name: my-app-1\n  project: my-project\n  publicly_accessible: true\nrouters:\n- name: main\n  custom_domains:\n  - branch: master\n    domain: my.tld.com\n  routes:\n  - application_name: my-app-1\n    paths:\n    - /\n")),Object(o.b)("h3",{id:"multiple-routes"},"Multiple routes"),Object(o.b)("p",null,"As explained above, each router can have multiple routes targeting different applications.\n",Object(o.b)("strong",{parentName:"p"},"Each application can use the same router by using the same router name within the same project.")),Object(o.b)("p",null,"Here is an example with two applications, which each of them have their own ",Object(o.b)("inlineCode",{parentName:"p"},".qovery.yml")," file."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{1:!0,className:"language-yaml",metastring:'title="Application 1 - .qovery.yml"',title:'"Application',"-":!0,'.qovery.yml"':!0}),"application:\n  name: my-app-1\n  project: my-project\n  publicly_accessible: true\nrouters:\n- name: main\n  custom_domains:\n  - branch: master\n    domain: my.tld.com\n  routes:\n  - application_name: my-app-1\n    paths:\n    - /\n")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{2:!0,className:"language-yaml",metastring:'title="Application 2 - .qovery.yml"',title:'"Application',"-":!0,'.qovery.yml"':!0}),"application:\n  name: my-app-2\n  project: my-project\n  publicly_accessible: true\nrouters:\n- name: main\n  custom_domains:\n  - branch: master\n    domain: my.tld.com\n  routes:\n  - application_name: my-app-2\n    paths:\n    - /app2/\n")),Object(o.b)("p",null,"Behind the scene Qovery will merge the two .qovery.yml into a single one. Which gives a router that will look like this:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yaml",metastring:'title="Merged router" {8-13}',title:'"Merged','router"':!0,"{8-13}":!0}),"...\nrouters:\n- name: main\n  custom_domains:\n  - branch: master\n    domain: my.tld.com\n  routes:\n  - application_name: my-app-1\n    paths:\n    - /\n  - application_name: my-app-2\n    paths:\n    - /app2/\n")),Object(o.b)("p",null,"Meaning, traffic with a route starting with the URL ",Object(o.b)("inlineCode",{parentName:"p"},"https://my.tld.com/app2")," is routed on ",Object(o.b)("inlineCode",{parentName:"p"},"my-app-2"),", and the remaining traffic is routed on ",Object(o.b)("inlineCode",{parentName:"p"},"my-app-1"),"."),Object(o.b)(i.a,{type:"info",mdxType:"Alert"},Object(o.b)("p",null,"Qovery takes care of duplicated routes and deny the latest created one to avoid unintended overrides.")),Object(o.b)("h3",{id:"custom-domains"},"Custom domains"),Object(o.b)("p",null,'A custom domain can be attached (optional) to a "router" and an ',Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/main-concepts/environment/"}),"environment"),". Then, multiple application can benefit from the same domain."),Object(o.b)(i.a,{type:"success",mdxType:"Alert"},Object(o.b)("p",null,"Every router on Qovery automatically gets a free ",Object(o.b)("inlineCode",{parentName:"p"},"qovery.io")," address which does not change per branch.")),Object(o.b)("h2",{id:"example"},"Example"),Object(o.b)("p",null,Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/guides/advanced/custom-routes/"}),"Check out our guide")," to see an example"))}s.isMDXComponent=!0},331:function(e,t,n){var r;!function(){"use strict";var n={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var o=typeof r;if("string"===o||"number"===o)e.push(r);else if(Array.isArray(r)&&r.length){var i=a.apply(null,r);i&&e.push(i)}else if("object"===o)for(var c in r)n.call(r,c)&&r[c]&&e.push(c)}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(r=function(){return a}.apply(t,[]))||(e.exports=r)}()},332:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),u=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},s=function(e){var t=u(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=u(n),b=r,d=s["".concat(i,".").concat(b)]||s[b]||m[b]||o;return n?a.a.createElement(d,c({ref:t},p,{components:n})):a.a.createElement(d,c({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=b;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var p=2;p<o;p++)i[p]=n[p];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},333:function(e,t,n){"use strict";n(338);var r=n(0),a=n.n(r),o=n(331),i=n.n(o);n(131);t.a=function(e){var t=e.children,n=e.classNames,r=e.fill,o=e.icon,c=e.type,l=null;switch(c){case"danger":l="alert-triangle";break;case"success":l="check-circle";break;case"warning":l="alert-triangle";break;default:l="info"}return a.a.createElement("div",{className:i()(n,"alert","alert--"+c,{"alert--fill":r,"alert--icon":!1!==o}),role:"alert"},!1!==o&&a.a.createElement("i",{className:i()("feather","icon-"+(o||l))}),t)}},338:function(e,t,n){var r=n(12);r(r.P,"Array",{fill:n(342)}),n(75)("fill")},342:function(e,t,n){"use strict";var r=n(27),a=n(76),o=n(26);e.exports=function(e){for(var t=r(this),n=o(t.length),i=arguments.length,c=a(i>1?arguments[1]:void 0,n),l=i>2?arguments[2]:void 0,p=void 0===l?n:a(l,n);p>c;)t[c++]=e;return t}}}]);