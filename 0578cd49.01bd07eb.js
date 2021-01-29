/*! For license information please see 0578cd49.01bd07eb.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{153:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return b}));var a=n(1),r=n(9),i=(n(0),n(333)),o=n(347),l={last_modified_on:"2021-01-09",$schema:"/.meta/.schemas/guides.json",title:"Environment variables",description:"How to manage environment variables in your projects and applications",series_position:4,author_github:"https://github.com/pjeziorowski",tags:["type: guide"]},c={categories:[{name:"getting-started",title:"Getting Started",description:"Take Qovery from zero to production in under 10 minutes.",permalink:"/guides/getting-started"}],coverLabel:"Environment variables",description:"How to manage environment variables in your projects and applications",permalink:"/guides/getting-started/managing-environment-variables",readingTime:"7 min read",seriesPosition:4,source:"@site/guides/getting-started/managing-environment-variables.md",tags:[{label:"type: guide",permalink:"/guides/tags/type-guide"}],title:"Environment variables",truncated:!1,prevItem:{title:"Custom domain",permalink:"/guides/getting-started/setting-custom-domain"},nextItem:{title:"Debugging",permalink:"/guides/getting-started/debugging"}},s=[{value:"Set variables",id:"set-variables",children:[]},{value:"Configure database",id:"configure-database",children:[]},{value:"Update variable",id:"update-variable",children:[]},{value:"Delete variable",id:"delete-variable",children:[]},{value:"Scopes of variables",id:"scopes-of-variables",children:[]}],p={rightToc:s};function b(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"A well-designed application can run in multiple environments. Its configuration is not hard-coded in the source code, but instead extracted and allowed to be adjustable appropriately for different situations.\nAlthough apps run the same code, they may use different, environment-specific configuration."),Object(i.b)("p",null,"For example, your application may use a different instance of database on your machine than in a production environment (thus, database credentials and addresses should be configurable)."),Object(i.b)("p",null,"For this reason, Qovery allows you to store your configurations and credentials securely using ",Object(i.b)("inlineCode",{parentName:"p"},"Environment Variables"),"."),Object(i.b)("h2",{id:"set-variables"},"Set variables"),Object(i.b)("p",null,"Let's first create a new Node.js application that uses environment variables."),Object(i.b)(o.a,{headingDepth:3,mdxType:"Steps"},Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"In an empty directory, create ",Object(i.b)("inlineCode",{parentName:"p"},".qovery.yml")," - Qovery configuration file with the following content:"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yml",metastring:'title=".qovery.yml"',title:'".qovery.yml"'}),"application:\n  name: node-app\n  project: environment-variables-demo\n  publicly_accessible: true\nrouters:\n- name: main\n  routes:\n  - application_name: node-app\n    paths:\n    - /*\n"))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Create ",Object(i.b)("inlineCode",{parentName:"p"},"app.js")," file - a simple Node.js HTTP server application:"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript",metastring:'title="app.js" {6,11}',title:'"app.js"',"{6,11}":!0}),"const http = require('http');\n\nconst hostname = '0.0.0.0';\nconst port = 3333;\n\nconst MY_MESSAGE = process.env.MY_MESSAGE\n\nconst server = http.createServer((req, res) => {\n  res.statusCode = 200;\n  res.setHeader('Content-Type', 'text/plain');\n  res.end(MY_MESSAGE);\n});\n\nserver.listen(port, hostname, () => {\n  console.log(`Server running at http://${hostname}:${port}/`);\n});\n")),Object(i.b)("p",{parentName:"li"},"As you see, in the first highlighted line the app uses process.env.",Object(i.b)("inlineCode",{parentName:"p"},"MY_MESSAGE")," environment variable to set a value of a property in the application.\nThen, in the second highlighted line, the application sends the value of previously set property back to the user that hits the server.")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"And the last step to finish our application - create a ",Object(i.b)("inlineCode",{parentName:"p"},"Dockerfile")," with the following content:"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-dockerfile",metastring:'title="Dockerfile"',title:'"Dockerfile"'}),'FROM node\nCOPY app.js .\nEXPOSE 3333\nCMD [ "node", "app.js" ]\n'))))),Object(i.b)("p",null,"Now, initialize a Git repository in this directory and publish it to your Github. After it's done, your app should be deployed quickly:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash",metastring:'title="Check app status"',title:'"Check',app:!0,'status"':!0}),"qovery status\n")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-plain",metastring:'title="OUTPUT"',title:'"OUTPUT"'}),"BRANCH NAME | STATUS  | ENDPOINTS                                   | APPLICATIONS | DATABASES\nmaster      | running | https://main-im6qagd2nmnrfqax-gtw.qovery.io | node-app     | none\n\nAPPLICATION NAME | STATUS  | ENDPOINT | DATABASES\nnode-app         | running |          | none\n")),Object(i.b)("p",null,"When you hit the application endpoint (using ",Object(i.b)("inlineCode",{parentName:"p"},"curl")," or your browser), you'll see an empty response:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash",metastring:'title="Invoke application endpoint"',title:'"Invoke',application:!0,'endpoint"':!0}),"$ curl https://main-im6qagd2nmnrfqax-gtw.qovery.io\n")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash",metastring:'title="OUTPUT"',title:'"OUTPUT"'}),"")),Object(i.b)("p",null,"Why is that? That's because... we did not set ",Object(i.b)("inlineCode",{parentName:"p"},"MY_MESSAGE")," environment variable that we use in our application."),Object(i.b)("p",null,"Let's fix it quickly. Run:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash",metastring:'title="Add MY_MESSQGE variable"',title:'"Add',MY_MESSQGE:!0,'variable"':!0}),'qovery application env add MY_MESSAGE "Hello World from Qovery!"\n')),Object(i.b)("p",null,"Now, our variable is set. To check it:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash",metastring:'title="List env variables"',title:'"List',env:!0,'variables"':!0}),"qovery application env list\n")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:'language-title="OUTPUT"'}),"  SCOPE       | KEY                                  | VALUE\n  BUILT_IN    | QOVERY_JSON_B64                      | <base64>\n  BUILT_IN    | QOVERY_BRANCH_NAME                   | master\n  BUILT_IN    | QOVERY_IS_PRODUCTION                 | true\n  BUILT_IN    | QOVERY_APPLICATION_NODE_APP_HOSTNAME | <hidden>\n  APPLICATION | MY_MESSAGE                           | Hello World from Qovery!\n")),Object(i.b)("p",null,"After adding a new variable, we have to restart our application to make it able to read the new configuration:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash",metastring:'title="Redeploy an application"',title:'"Redeploy',an:!0,'application"':!0}),"qovery redeploy\n")),Object(i.b)("p",null,"Your application should be back up shortly after redeployment. You can track the status using ",Object(i.b)("inlineCode",{parentName:"p"},"qovery status")," command. After it's running again, test the app's endpoint:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash",metastring:'title="Invoke application endpoint"',title:'"Invoke',application:!0,'endpoint"':!0}),"$ curl https://main-im6qagd2nmnrfqax-gtw.qovery.io\n")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash",metastring:'title="OUTPUT"',title:'"OUTPUT"'}),"Hello World from Qovery!\n")),Object(i.b)("p",null,"Great! The env variable was read by the application correctly and returned to the user."),Object(i.b)("h2",{id:"configure-database"},"Configure database"),Object(i.b)("p",null,"Now, we would like to use a database in our application. How to get its connection data, like connection URI, password, and username?"),Object(i.b)("p",null,"Let's first add a database to our app:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yml",metastring:'title=".qovery.yml" {6-9}',title:'".qovery.yml"',"{6-9}":!0}),'application:\n  name: node-app\n  project: environment-variables-demo\n  publicly_accessible: true\ndatabases:\n- type: mongodb\n  version: "3.6"\n  name: my-mongo\nrouters:\n- name: main\n  routes:\n  - application_name: node-app\n    paths:\n    - /*\n')),Object(i.b)("p",null,"Add the highlighted part to your Qovery config, commit and push. Voila! In a few minutes, our MongoDB instance is available to the application. To track this process, run ",Object(i.b)("inlineCode",{parentName:"p"},"qovery status"),"."),Object(i.b)("p",null,"After the database is deployed, we need to know a few details about it to use it in the application."),Object(i.b)("p",null,"To get the details, run ",Object(i.b)("inlineCode",{parentName:"p"},"qovery application env list")," one more time:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:'language-title="OUTPUT"'}),"SCOPE       | KEY                                                         | VALUE\nBUILT_IN    | QOVERY_JSON_B64                                             | <base64>\nBUILT_IN    | QOVERY_BRANCH_NAME                                          | master\nBUILT_IN    | QOVERY_IS_PRODUCTION                                        | true\nBUILT_IN    | QOVERY_APPLICATION_NODE_APP_HOSTNAME                        | <hidden>\nBUILT_IN    | QOVERY_DATABASE_MY_MONGO_DATABASE                           |\nBUILT_IN    | QOVERY_DATABASE_MY_MONGO_PASSWORD                           | <hidden>\nBUILT_IN    | QOVERY_DATABASE_MY_MONGO_USERNAME                           | <hidden>\nBUILT_IN    | QOVERY_DATABASE_MY_MONGO_PORT                               | <hidden>\nBUILT_IN    | QOVERY_DATABASE_MY_MONGO_FQDN                               | <hidden>\nBUILT_IN    | QOVERY_DATABASE_MY_MONGO_HOST                               | <hidden>\nBUILT_IN    | QOVERY_DATABASE_MY_MONGO_CONNECTION_URI_WITHOUT_CREDENTIALS | <hidden>\nBUILT_IN    | QOVERY_DATABASE_MY_MONGO_CONNECTION_URI                     | <hidden>\nBUILT_IN    | QOVERY_DATABASE_MY_MONGO_VERSION                            | 3.6\nBUILT_IN    | QOVERY_DATABASE_MY_MONGO_TYPE                               | MONGODB\nBUILT_IN    | QOVERY_DATABASE_MY_MONGO_NAME                               | my-mongo\nAPPLICATION | MY_MESSAGE                                                  | Hello World from Qovery!\n")),Object(i.b)("p",null,"Adding a new database resulted in new environment variables available for the application! To display hidden values, add ",Object(i.b)("inlineCode",{parentName:"p"},"-c")," flag to the command -> ",Object(i.b)("inlineCode",{parentName:"p"},"qovery application env list -c"),"."),Object(i.b)("p",null,"Now, we could just read ",Object(i.b)("inlineCode",{parentName:"p"},"QOVERY_DATABASE_MY_MONGO_CONNECTION_URI")," env variable in our app to get the connection URI to MongoDB. This approach would work and is completely fine, but what if we have chosen a different name for database URI?\nIf we need a value of one of ",Object(i.b)("inlineCode",{parentName:"p"},"BUILT_IN")," variables (like Qovery database credentials), but we want to use our own env variable names like, for example, ",Object(i.b)("inlineCode",{parentName:"p"},"MONGO_URI"),", then we can create an alias."),Object(i.b)("p",null,"Let's see it in action:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash",metastring:'title="Create variable alias"',title:'"Create',variable:!0,'alias"':!0}),"qovery application env add MONGO_URI '$QOVERY_DATABASE_MY_MONGO_CONNECTION_URI'\n")),Object(i.b)("p",null,"After running the command from above, we should see a new env variable added with the value of ",Object(i.b)("inlineCode",{parentName:"p"},"QOVERY_DATABASE_MY_MONGO_CONNECTION_URI"),":"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash",metastring:'title="List variables"',title:'"List','variables"':!0}),"qovery application env list\n")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash",metastring:'title="OUTPUT"',title:'"OUTPUT"'}),"SCOPE       | KEY                                                         | VALUE\nBUILT_IN    | QOVERY_JSON_B64                                             | <base64>\nBUILT_IN    | QOVERY_BRANCH_NAME                                          | master\nBUILT_IN    | QOVERY_IS_PRODUCTION                                        | true\nBUILT_IN    | QOVERY_APPLICATION_NODE_APP_HOSTNAME                        | <hidden>\nBUILT_IN    | QOVERY_DATABASE_MY_MONGO_DATABASE                           |\nBUILT_IN    | QOVERY_DATABASE_MY_MONGO_PASSWORD                           | <hidden>\nBUILT_IN    | QOVERY_DATABASE_MY_MONGO_USERNAME                           | <hidden>\nBUILT_IN    | QOVERY_DATABASE_MY_MONGO_PORT                               | <hidden>\nBUILT_IN    | QOVERY_DATABASE_MY_MONGO_FQDN                               | <hidden>\nBUILT_IN    | QOVERY_DATABASE_MY_MONGO_HOST                               | <hidden>\nBUILT_IN    | QOVERY_DATABASE_MY_MONGO_CONNECTION_URI_WITHOUT_CREDENTIALS | <hidden>\nBUILT_IN    | QOVERY_DATABASE_MY_MONGO_CONNECTION_URI                     | <hidden>\nBUILT_IN    | QOVERY_DATABASE_MY_MONGO_VERSION                            | 3.6\nBUILT_IN    | QOVERY_DATABASE_MY_MONGO_TYPE                               | MONGODB\nBUILT_IN    | QOVERY_DATABASE_MY_MONGO_NAME                               | my-mongo\nAPPLICATION | MONGO_URI                                                   | <hidden>\nAPPLICATION | MY_MESSAGE                                                  | Hello World from Qovery!\n")),Object(i.b)("p",null,"Above, you can see that the env was added. Run the same command with ",Object(i.b)("inlineCode",{parentName:"p"},"-c")," flag to see that its value is in fact the same as ",Object(i.b)("inlineCode",{parentName:"p"},"QOVERY_DATABASE_MY_MONGO_CONNECTION_URI"),"."),Object(i.b)("p",null,"Now, we can use ",Object(i.b)("inlineCode",{parentName:"p"},"MONGO_URI")," environment variable to connect our application to MongoDB!"),Object(i.b)("h2",{id:"update-variable"},"Update variable"),Object(i.b)("p",null,"What if we would like to change the message our app returns to the user? To change the value of ",Object(i.b)("inlineCode",{parentName:"p"},"MY_MESSAGE")," env variable, simply run:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash",metastring:'title="Update variable"',title:'"Update','variable"':!0}),'qovery application env add MY_MESSAGE "Completely new message!"\n')),Object(i.b)("p",null,"Adding env variable with the same name shadows previously set value."),Object(i.b)("h2",{id:"delete-variable"},"Delete variable"),Object(i.b)("p",null,"If for some reason you would like to delete variable completely, you can run:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash",metastring:'title="Delete variable"',title:'"Delete','variable"':!0}),"qovery application env delete MY_MESSAGE\n")),Object(i.b)("p",null,"That's all; it's gone."),Object(i.b)("h2",{id:"scopes-of-variables"},"Scopes of variables"),Object(i.b)("p",null,"So far, we have used just one branch (environment) and only one env variable scope (",Object(i.b)("inlineCode",{parentName:"p"},"application")," scope)."),Object(i.b)("p",null,"To see what it means, run:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash",metastring:'title="Create a new branch"',title:'"Create',a:!0,new:!0,'branch"':!0}),"git checkout -b another_branch\ngit push --set-upstream origin another_branch\n")),Object(i.b)("p",null,"Now, as we use a different Git branch, we are in a different environment."),Object(i.b)("p",null,"Run ",Object(i.b)("inlineCode",{parentName:"p"},"qovery application env list"),". What do you see? Env variables we set previously are gone. That's because they were bound to the ",Object(i.b)("inlineCode",{parentName:"p"},"application")," scope."),Object(i.b)("p",null,"On Qovery, we have a few levels of environment variables. ",Object(i.b)("inlineCode",{parentName:"p"},"BUILT_IN")," variables are automatically created and injected by Qovery.\n",Object(i.b)("inlineCode",{parentName:"p"},"APPLICATION")," variables are bound to ",Object(i.b)("em",{parentName:"p"},"single application in one environment")," (Git branch). ",Object(i.b)("inlineCode",{parentName:"p"},"ENVIRONMENT")," scope variables are bound to the environment,\nso they're accessible by all applications in a given environment. The last scope - ",Object(i.b)("inlineCode",{parentName:"p"},"PROJECT")," scope - makes a given variable accessible everywhere (all apps, all environments)."),Object(i.b)("p",null,"To select the scope of variables that you are adding/removing/listing, use the CLI as follows:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash",metastring:'title="Env variables scopes"',title:'"Env',variables:!0,'scopes"':!0}),"qovery application env list\nqovery project env list\nqovery environment env list\n")),Object(i.b)("p",null,"The general pattern of this command is ",Object(i.b)("inlineCode",{parentName:"p"},"qovery SCOPE env COMMAND"),"."))}b.isMDXComponent=!0},332:function(e,t,n){var a;!function(){"use strict";var n={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var a=arguments[t];if(a){var i=typeof a;if("string"===i||"number"===i)e.push(a);else if(Array.isArray(a)&&a.length){var o=r.apply(null,a);o&&e.push(o)}else if("object"===i)for(var l in a)n.call(a,l)&&a[l]&&e.push(l)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(a=function(){return r}.apply(t,[]))||(e.exports=a)}()},333:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return O}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),p=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l({},t,{},e)),n},b=function(e){var t=p(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),b=p(n),d=a,O=b["".concat(o,".").concat(d)]||b[d]||u[d]||i;return n?r.a.createElement(O,l({ref:t},s,{components:n})):r.a.createElement(O,l({ref:t},s))}));function O(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},343:function(e,t,n){"use strict";var a=n(348),r=n(53);function i(e,t){return t.encode?t.strict?a(e):encodeURIComponent(e):e}t.extract=function(e){return e.split("?")[1]||""},t.parse=function(e,t){var n=function(e){var t;switch(e.arrayFormat){case"index":return function(e,n,a){t=/\[(\d*)\]$/.exec(e),e=e.replace(/\[\d*\]$/,""),t?(void 0===a[e]&&(a[e]={}),a[e][t[1]]=n):a[e]=n};case"bracket":return function(e,n,a){t=/(\[\])$/.exec(e),e=e.replace(/\[\]$/,""),t?void 0!==a[e]?a[e]=[].concat(a[e],n):a[e]=[n]:a[e]=n};default:return function(e,t,n){void 0!==n[e]?n[e]=[].concat(n[e],t):n[e]=t}}}(t=r({arrayFormat:"none"},t)),a=Object.create(null);return"string"!=typeof e?a:(e=e.trim().replace(/^(\?|#|&)/,""))?(e.split("&").forEach((function(e){var t=e.replace(/\+/g," ").split("="),r=t.shift(),i=t.length>0?t.join("="):void 0;i=void 0===i?null:decodeURIComponent(i),n(decodeURIComponent(r),i,a)})),Object.keys(a).sort().reduce((function(e,t){var n=a[t];return Boolean(n)&&"object"==typeof n&&!Array.isArray(n)?e[t]=function e(t){return Array.isArray(t)?t.sort():"object"==typeof t?e(Object.keys(t)).sort((function(e,t){return Number(e)-Number(t)})).map((function(e){return t[e]})):t}(n):e[t]=n,e}),Object.create(null))):a},t.stringify=function(e,t){var n=function(e){switch(e.arrayFormat){case"index":return function(t,n,a){return null===n?[i(t,e),"[",a,"]"].join(""):[i(t,e),"[",i(a,e),"]=",i(n,e)].join("")};case"bracket":return function(t,n){return null===n?i(t,e):[i(t,e),"[]=",i(n,e)].join("")};default:return function(t,n){return null===n?i(t,e):[i(t,e),"=",i(n,e)].join("")}}}(t=r({encode:!0,strict:!0,arrayFormat:"none"},t));return e?Object.keys(e).sort().map((function(a){var r=e[a];if(void 0===r)return"";if(null===r)return i(a,t);if(Array.isArray(r)){var o=[];return r.slice().forEach((function(e){void 0!==e&&o.push(n(a,e,o.length))})),o.join("&")}return i(a,t)+"="+i(r,t)})).filter((function(e){return e.length>0})).join("&"):""}},347:function(e,t,n){"use strict";var a=n(0),r=n.n(a),i=(n(332),n(343)),o=n.n(i);n(133);t.a=function(e){var t=e.children,n=e.headingDepth,i=e.hideFeedbackQuestion,l="undefined"!=typeof window?window.location:null,c={title:"Tutorial on "+l+" failed",body:"The tutorial on:\n\n"+l+"\n\nHere's what went wrong:\n\n\x3c!-- Insert command output and details. Thank you for reporting! :) --\x3e"},s="https://github.com/qovery/documentation/issues/new?"+o.a.stringify(c),p=Object(a.useState)(null),b=p[0],u=p[1];return r.a.createElement("div",{className:"steps steps--h"+n},t,!i&&!b&&r.a.createElement("div",{className:"steps--feedback"},"How was it? Did this tutorial work?\xa0\xa0",r.a.createElement("span",{className:"button button--sm button--primary",onClick:function(){return u("yes")}},"Yes"),"\xa0\xa0",r.a.createElement("a",{href:s,target:"_blank",className:"button button--sm button--primary"},"No")),"yes"==b&&r.a.createElement("div",{className:"steps--feedback steps--feedback--success"},"Thanks! If you're enjoying Qovery please consider ",r.a.createElement("a",{href:"https://github.com/qovery/documentation/",target:"_blank"},"starring our Github repo"),"."))}},348:function(e,t,n){"use strict";e.exports=function(e){return encodeURIComponent(e).replace(/[!'()*]/g,(function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()}))}}}]);