(window.webpackJsonp=window.webpackJsonp||[]).push([[86],{236:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return c})),t.d(n,"rightToc",(function(){return s})),t.d(n,"default",(function(){return m}));var a=t(1),o=t(9),r=(t(0),t(256)),i={last_modified_on:"2020-04-23",title:"Domains",description:"Learn how to configure custom Domains on Qovery"},c={id:"using-qovery/configuration/domains",title:"Domains",description:"Learn how to configure custom Domains on Qovery",source:"@site/docs/using-qovery/configuration/domains.md",permalink:"/docs/using-qovery/configuration/domains",editUrl:"https://github.com/Qovery/documentation/edit/master/website/docs/using-qovery/configuration/domains.md",sidebar:"docs",previous:{title:"MySQL",permalink:"/docs/using-qovery/configuration/databases/mysql"},next:{title:"Storage",permalink:"/docs/using-qovery/configuration/storage"}},s=[{value:"Qovery Domains (default)",id:"qovery-domains-default",children:[]},{value:"Custom Domains",id:"custom-domains",children:[{value:"Set a domain",id:"set-a-domain",children:[]}]}],l={rightToc:s};function m(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},l,t,{components:n,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"qovery-domains-default"},"Qovery Domains (default)"),Object(r.b)("p",null,"Your application is publicly accessible via a Qovery domain as soon as you define it to be publicly accessible in ",Object(r.b)("inlineCode",{parentName:"p"},".qovery.yml")," file:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:'language-title=".qovery.yml"',metastring:"{4}","{4}":!0}),"application:\n  name: myapp\n  project: test\n  publicly_accessible: true\n")),Object(r.b)("p",null,"To get the domain that was assigned to your application, use the CLI:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"$ qovery status\n")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-plain",metastring:'title="OUTPUT"',title:'"OUTPUT"'}),"BRANCHES NAME   STATUS          ENDPOINTS                       APPLICATIONS    DATABASES   BROKERS STORAGE\nmaster          up and running  https://xxx-main-gtw.qovery.io  1               1           0       0\n\nAPPLICATIONS NAME   STATUS          ENDPOINTS                       DATABASES   BROKERS STORAGE\nsimple-example      up and running  https://yyy-xxx-app.qovery.io   1           0       0\n")),Object(r.b)("h2",{id:"custom-domains"},"Custom Domains"),Object(r.b)("p",null,"You can use a custom domain name for any of your applications. Additionally, the domain name can be different in each environment (branch)."),Object(r.b)("h3",{id:"set-a-domain"},"Set a domain"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml",metastring:'title=".qovery.yml" {4-6}',title:'".qovery.yml"',"{4-6}":!0}),"...\nrouters:\n- name: main\n  custom_domains:\n  - branch: master\n    domain: my.domain.tld\n  routes:\n  - application_name: simple-example-node-with-postgresql\n    paths:\n    - /\n")),Object(r.b)("p",null,"Adding the highlighted lines like in the configuration file above exposes your application using your domain. However, before it's\ndone, you have to confirm that the domain is yours."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash",metastring:'title="List domains"',title:'"List','domains"':!0}),"qovery list domains\n")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-plain",metastring:'title="OUTPUT"',title:'"OUTPUT"'}),"BRANCH | DOMAIN                                      | STATUS             | VALIDATION DOMAIN    | ROUTER NAME\nmaster | node.deimos.fr                              | validation pending | xxx-yyy-zzz.acme.com | main\nmaster | https://main-yenr7erjbs87dk4m-gtw.qovery.io | live               | none                 | main\n")),Object(r.b)("p",null,"To validate a domain that is in ",Object(r.b)("inlineCode",{parentName:"p"},"validation pending ")," status, add a ",Object(r.b)("inlineCode",{parentName:"p"},"CNAME")," record that is targeting the ",Object(r.b)("inlineCode",{parentName:"p"},"VALIDATION DOMAIN")," - ",Object(r.b)("inlineCode",{parentName:"p"},"xxx-yyy-zzz.acme.com"),". After doing so, it takes\nQovery a few minutes to verify and complete the process. You can check the verification status using ",Object(r.b)("inlineCode",{parentName:"p"},"qovery domain list"),"."))}m.isMDXComponent=!0},256:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return b}));var a=t(0),o=t.n(a);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=o.a.createContext({}),m=function(e){var n=o.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):c({},n,{},e)),t},u=function(e){var n=m(e.components);return o.a.createElement(l.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},d=Object(a.forwardRef)((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=m(t),d=a,b=u["".concat(i,".").concat(d)]||u[d]||p[d]||r;return t?o.a.createElement(b,c({ref:n},l,{components:t})):o.a.createElement(b,c({ref:n},l))}));function b(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,i=new Array(r);i[0]=d;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var l=2;l<r;l++)i[l]=t[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);