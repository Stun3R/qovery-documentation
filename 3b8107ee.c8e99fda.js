(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{175:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return l})),r.d(t,"default",(function(){return u}));var n=r(1),a=r(9),o=(r(0),r(256)),i={last_modified_on:"2020-04-21",title:"FAQ",description:"Frequently Asked Questions"},c={id:"useful-links/faq",title:"FAQ",description:"Frequently Asked Questions",source:"@site/docs/useful-links/faq.md",permalink:"/docs/useful-links/faq",editUrl:"https://github.com/Qovery/documentation/edit/master/website/docs/useful-links/faq.md",sidebar:"docs",previous:{title:"Encryption",permalink:"/docs/security-and-compliance/encryption"},next:{title:"Help and Support",permalink:"/docs/useful-links/help-and-support"}},l=[{value:"What is the difference between a Project,  Application and Environment?",id:"what-is-the-difference-between-a-project--application-and-environment",children:[]},{value:"Are databases backed-up?",id:"are-databases-backed-up",children:[]},{value:"Is Qovery production ready?",id:"is-qovery-production-ready",children:[]},{value:"Where are your servers located?",id:"where-are-your-servers-located",children:[]},{value:"How can I contact you?",id:"how-can-i-contact-you",children:[]}],s={rightToc:l};function u(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h3",{id:"what-is-the-difference-between-a-project--application-and-environment"},"What is the difference between a Project,  Application and Environment?"),Object(o.b)("p",null,"A project is the site that you're working on. Each project can contain multiple applications and be deployed in multiple environments.\nAn environment is a standalone copy of your site, including apps, databases, storage, data and all other services. By default, ",Object(o.b)("inlineCode",{parentName:"p"},"master")," branch is the production environment, while all other branches can be setup as identical copies of prod environment for testing purposes. "),Object(o.b)("h3",{id:"are-databases-backed-up"},"Are databases backed-up?"),Object(o.b)("p",null,"Yes, Qovery databases rely on Managed Services provided by AWS (Amazon Web Services) and other major cloud providers. All databases are fully backed-up every day and incrementally on each write."),Object(o.b)("h3",{id:"is-qovery-production-ready"},"Is Qovery production ready?"),Object(o.b)("p",null,"Qovery is in beta stage. We hope having a production ready version of Qovery in June 2020."),Object(o.b)("h3",{id:"where-are-your-servers-located"},"Where are your servers located?"),Object(o.b)("p",null,"We rely mostly on AWS infrastructure, thus our servers are available all over the world, including US, Europe and Asia."),Object(o.b)("h3",{id:"how-can-i-contact-you"},"How can I contact you?"),Object(o.b)("p",null,"Feel free to join our ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://discord.qovery.com"}),"Discord server")," or contact us by email at ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"hello@qovery.com."}),"mailto"),"."))}u.isMDXComponent=!0},256:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return f}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=a.a.createContext({}),u=function(e){var t=a.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c({},t,{},e)),r},p=function(e){var t=u(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(r),b=n,f=p["".concat(i,".").concat(b)]||p[b]||d[b]||o;return r?a.a.createElement(f,c({ref:t},s,{components:r})):a.a.createElement(f,c({ref:t},s))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=b;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var s=2;s<o;s++)i[s]=r[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"}}]);