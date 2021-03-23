(window.webpackJsonp=window.webpackJsonp||[]).push([[118],{268:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return p})),a.d(t,"metadata",(function(){return b})),a.d(t,"rightToc",(function(){return m})),a.d(t,"default",(function(){return h}));var n=a(1),l=a(9),o=(a(0),a(336)),r=a(339),i=a(347),c=a(348),s=a(343),u=a(338),p={last_modified_on:"2021-01-09",$schema:"/.meta/.schemas/guides.json",title:"Deploy Laravel with MySQL with Qovery",description:"How to deploy a Laravel application with the MySQL database with Qovery",author_github:"https://github.com/evoxmusic",tags:["type: tutorial","framework: laravel","language: php","database: mysql"],hide_pagination:!0},b={categories:[{name:"tutorial",title:"Tutorial",description:"Simple step-by-step tutorials.",permalink:"/guides/tutorial"}],coverLabel:"Deploy Laravel with MySQL with Qovery",description:"How to deploy a Laravel application with the MySQL database with Qovery",permalink:"/guides/tutorial/deploy-laravel-with-mysql",readingTime:"7 min read",source:"@site/guides/tutorial/deploy-laravel-with-mysql.md",tags:[{label:"type: tutorial",permalink:"/guides/tags/type-tutorial"},{label:"framework: laravel",permalink:"/guides/tags/framework-laravel"},{label:"language: php",permalink:"/guides/tags/language-php"},{label:"database: mysql",permalink:"/guides/tags/database-mysql"}],title:"Deploy Laravel with MySQL with Qovery",truncated:!1,prevItem:{title:"Deploy JHipster with PostgreSQL with Qovery",permalink:"/guides/tutorial/deploy-jhipster-with-postgresql"},nextItem:{title:"Deploy NodeJS with PostgreSQL with Qovery",permalink:"/guides/tutorial/deploy-node-js-with-postgresql"}},m=[{value:"Steps to deploy Laravel with Qovery",id:"steps-to-deploy-laravel-with-qovery",children:[{value:"Install Qovery CLI",id:"install-qovery-cli",children:[]},{value:"Sign up",id:"sign-up",children:[]}]},{value:"Deployment",id:"deployment",children:[{value:"Laravel sample application",id:"laravel-sample-application",children:[]},{value:"Configure your project",id:"configure-your-project",children:[]},{value:"Connect Laravel to MySQL",id:"connect-laravel-to-mysql",children:[]}]},{value:"Trigger a new deployment",id:"trigger-a-new-deployment",children:[]},{value:"Bonuses (optional)",id:"bonuses-optional",children:[{value:"Deploy the application on dev environments",id:"deploy-the-application-on-dev-environments",children:[]},{value:"Test the Laravel application locally",id:"test-the-laravel-application-locally",children:[]}]},{value:"Conclusion",id:"conclusion",children:[]}],d={rightToc:m};function h(e){var t=e.components,a=Object(l.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},d,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"This tutorial show you how to deploy your ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.laravel.com"}),"Laravel")," application with ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.mysql.com"}),"MySQL")," database. Let's go!"),Object(o.b)(s.a,{name:"guide",mdxType:"Assumptions"},Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Your Operating System is macOS / Windows / Linux"),Object(o.b)("li",{parentName:"ul"},"You have a ",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com"}),"Github")," or ",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://gitlab.com"}),"Gitlab")," account"))),Object(o.b)("h2",{id:"steps-to-deploy-laravel-with-qovery"},"Steps to deploy Laravel with Qovery"),Object(o.b)(i.a,{centered:!0,className:"rounded",defaultValue:"web",placeholder:"Select your interface",select:!1,size:null,values:[{group:"Interfaces",label:"Web",value:"web"},{group:"Interfaces",label:"CLI",value:"cli"}],mdxType:"Tabs"},Object(o.b)(c.a,{value:"web",mdxType:"TabItem"},Object(o.b)("li",null,Object(o.b)("p",null,"Sign in to the ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://start.qovery.com"}),"Qovery web interface"),"."),Object(o.b)("p",{align:"center"},Object(o.b)("a",{href:"https://start.qovery.com"},Object(o.b)("img",{src:"/img/qovery_signup.svg",alt:"Qovery Sign-up page"}))))),Object(o.b)(c.a,{value:"cli",mdxType:"TabItem"},Object(o.b)("li",null,Object(o.b)("h3",{id:"install-qovery-cli"},"Install Qovery CLI"),Object(o.b)(i.a,{centered:!0,className:"rounded",defaultValue:"linux",placeholder:"Select your OS",select:!1,size:null,values:[{group:"Platforms",label:"Linux",value:"linux"},{group:"Platforms",label:"MacOS",value:"macos"},{group:"Platforms",label:"Windows",value:"windows"}],mdxType:"Tabs"},Object(o.b)(c.a,{value:"linux",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"# Download and install Qovery CLI on every Linux distribution\n$ curl -s https://get.qovery.com | sudo bash\n"))),Object(o.b)(c.a,{value:"macos",mdxType:"TabItem"},Object(o.b)(i.a,{centered:!0,className:"rounded",defaultValue:"homebrew",values:[{label:"Homebrew",value:"homebrew"},{label:"Manual",value:"manual"}],mdxType:"Tabs"},Object(o.b)(c.a,{value:"homebrew",mdxType:"TabItem"},Object(o.b)("p",null,"The common solution to install a command line binary on the MacOS is to use ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://brew.sh/"}),"Homebrew"),"."),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"# Add Qovery brew repository\n$ brew tap Qovery/qovery-cli\n\n# Install the CLI\n$ brew install qovery-cli\n"))),Object(o.b)(c.a,{value:"manual",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"# Install the Qovery CLI on MacOS manually\n$ curl -s https://get.qovery.com | bash\n"))))),Object(o.b)(c.a,{value:"windows",mdxType:"TabItem"},Object(o.b)(i.a,{centered:!0,className:"rounded",defaultValue:"scoop",values:[{label:"Scoop",value:"scoop"},{label:"Manual",value:"manual"}],mdxType:"Tabs"},Object(o.b)(c.a,{value:"scoop",mdxType:"TabItem"},Object(o.b)("p",null,"The classic way to install binaries on Windows is to use ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://scoop.sh/"}),"Scoop"),"."),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"# Add Qovery bucket\n$ scoop bucket add qovery https://github.com/Qovery/scoop-qovery-cli\n\n# Install the CLI\n$ scoop install qovery-cli\n"))),Object(o.b)(c.a,{value:"manual",mdxType:"TabItem"},Object(o.b)("p",null,"Install the Qovery CLI on Windows manually by downloading the ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/Qovery/qovery-cli/releases"}),"latest realease"),", and uncompress its content to\n",Object(o.b)("inlineCode",{parentName:"p"},"C:\\Windows"),"."))),Object(o.b)("p",null,"Few limitations exist on Windows: ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/using-qovery/interface/cli/#windows"}),"read more"))))),Object(o.b)("li",null,Object(o.b)("h3",{id:"sign-up"},"Sign up"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"# Sign up and sign in command\n$ qovery auth\n")),Object(o.b)(u.a,{type:"info",mdxType:"Alert"},Object(o.b)("p",null,"If you are using an environment without access to GUI or a browser, you can use headless authentication instead:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"# Sign up and sign in command\n$ qovery auth --headless\n"))),Object(o.b)("p",null,"Your browser window with sign-in options will open."),Object(o.b)("p",{align:"center"},Object(o.b)("img",{src:"/img/qovery_signup.svg",alt:"Qovery Sign-up page"})),Object(o.b)("p",null,"Note: Qovery needs access to your account to be able to clone your repository for future application builds."),Object(o.b)("p",null,Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/apps/qovery/installations/new"}),"Click here")," to authorize Qovery to clone and build your applications."),Object(o.b)("p",{align:"center"},Object(o.b)("img",{src:"/img/github_signup.svg",alt:"Connect Github"})),Object(o.b)("p",null,"Congratulations, you are logged-in.")))),Object(o.b)("h2",{id:"deployment"},"Deployment"),Object(o.b)("h3",{id:"laravel-sample-application"},"Laravel sample application"),Object(o.b)("p",null,"Get a local copy of the ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/Qovery/docker-simple-example-laravel"}),"Laravel sample project")," by forking it."),Object(o.b)("h3",{id:"configure-your-project"},"Configure your project"),Object(o.b)("p",null,"To deploy your Laravel application connected to a MySQL, you need to have a ",Object(o.b)("inlineCode",{parentName:"p"},".qovery.yml")," file, and a ",Object(o.b)("inlineCode",{parentName:"p"},"Dockerfile")," (both provided in the sample project) at the root of your project."),Object(o.b)(u.a,{mdxType:"Alert"},"The .qovery.yml file describes all the dependencies that your application needs (e.g., MySQL) to work smoothly"),Object(o.b)("p",null,"In this example we are using MySQL v8.0"),Object(o.b)("p",null,"After forking the sample application, you can check the content of ",Object(o.b)("inlineCode",{parentName:"p"},".qovery.yml"),":"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"$ cat .qovery.yml\n")),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml",metastring:'title=".qovery.yml"',title:'".qovery.yml"'}),'application:\n  name: my-application\n  project: my-project\n  publicly_accessible: true\ndatabases:\n- type: mysql\n  version: "8.0"\n  name: my-db\nrouters:\n- name: main\n  routes:\n  - application_name: my-application\n    paths:\n    - /\n')),Object(o.b)("p",null,Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/apps/qovery/installations/new"}),"Authorize the Qovery Github application")," to get access to your Github account. Once done, all new commits you push to your forked repository will trigger new deployments of the application."),Object(o.b)("h3",{id:"connect-laravel-to-mysql"},"Connect Laravel to MySQL"),Object(o.b)("p",null,"Credentials of your database are available via environment variables. Qovery injects environment vars at the runtime.\nTo list all the environment variables available to your application, execute"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"# List all environment variables\n$ qovery project env list\n")),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash",metastring:'title="Output"',title:'"Output"'}),"SCOPE    | KEY                                                      | VALUE\nBUILT_IN | QOVERY_JSON_B64                                          | <base64>\nBUILT_IN | QOVERY_BRANCH_NAME                                       | master\nBUILT_IN | QOVERY_IS_PRODUCTION                                     | true\nBUILT_IN | QOVERY_MY_APPLICATION_HOSTNAME                           | <hidden>\nBUILT_IN | QOVERY_DATABASE_MY_DB_DATABASE                           | <hidden>\nBUILT_IN | QOVERY_DATABASE_MY_DB_PASSWORD                           | <hidden>\nBUILT_IN | QOVERY_DATABASE_MY_DB_USERNAME                           | <hidden>\nBUILT_IN | QOVERY_DATABASE_MY_DB_PORT                               | <hidden>\nBUILT_IN | QOVERY_DATABASE_MY_DB_FQDN                               | <hidden>\nBUILT_IN | QOVERY_DATABASE_MY_DB_HOST                               | <hidden>\nBUILT_IN | QOVERY_DATABASE_MY_DB_CONNECTION_URI_WITHOUT_CREDENTIALS | <hidden>\nBUILT_IN | QOVERY_DATABASE_MY_DB_CONNECTION_URI                     | <hidden>\nBUILT_IN | QOVERY_DATABASE_MY_DB_VERSION                            | 8.0\nBUILT_IN | QOVERY_DATABASE_MY_DB_TYPE                               | MySQL\nBUILT_IN | QOVERY_DATABASE_MY_DB_NAME                               | my-db\n")),Object(o.b)("p",null,"The sample application is preconfigured to use those environment variables to connect to the database."),Object(o.b)("p",null,"Forking the application with ",Object(o.b)("inlineCode",{parentName:"p"},".qovery.yml")," and a ",Object(o.b)("inlineCode",{parentName:"p"},"Dockerfile")," should trigger app deployment."),Object(o.b)("p",null,"See the deployment status by executing:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"# Show your deployment status\n$ qovery status\n")),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash",metastring:'title="Output"',title:'"Output"'}),"BRANCH NAME | STATUS  | ENDPOINTS                                   | APPLICATIONS    | DATABASES\nmaster      | running | https://main-abcdefgh12345678-gtw.qovery.io | my-application  | my-db\n\nAPPLICATION NAME  | STATUS  | DATABASES\nmy-application    | running | my-db\n\nDATABASE NAME    | STATUS  | TYPE       | VERSION | ENDPOINT | PORT     | USERNAME | PASSWORD | APPLICATIONS\nmy-db            | running | MYSQL      | 8.0     | <hidden> | <hidden> | <hidden> | <hidden> | my-application\n")),Object(o.b)("p",null,"When your application ",Object(o.b)("inlineCode",{parentName:"p"},"status")," is ",Object(o.b)("inlineCode",{parentName:"p"},"running"),", you can use a browser or ",Object(o.b)("inlineCode",{parentName:"p"},"curl")," to access its endpoints."),Object(o.b)("h2",{id:"trigger-a-new-deployment"},"Trigger a new deployment"),Object(o.b)("p",null,"Now, you can play with the sample application and commit & push your changes. Qovery detects your actions and triggers new builds and application deployments. Any change you make will be reflected in your deployed application automatically."),Object(o.b)("h2",{id:"bonuses-optional"},"Bonuses (optional)"),Object(o.b)("h3",{id:"deploy-the-application-on-dev-environments"},"Deploy the application on dev environments"),Object(o.b)("p",null,'Qovery has a compelling feature known as "',Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/main-concepts/environment/"}),"environments"),'". Qovery supports the deployment of isolated development environments that reflect your Git branches. Environments are complete copies of all of your data, application, and services like databases. The Environment is useful for testing changes in isolation before merging them to your main branch.'),Object(o.b)("p",null,"So, do you want to create a new feature, fix a bug, or make modifications without impacting the production or any other important environment? Type the following commands:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"$ git checkout -b feat_foo\n$ git push -u origin feat_foo\n\n# show deployment status\n$ qovery status\n")),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash",metastring:'title="Output"',title:'"Output"'}),"BRANCH NAME | STATUS  | ENDPOINTS                                   | APPLICATIONS    | DATABASES\nfeat_foo    | running | https://main-yenr7erjbs87dk4m-gtw.qovery.io | my-application  | my-db\n\nAPPLICATION NAME      | STATUS  | DATABASES\ndocker-simple-example | running | my-db\n\nDATABASE NAME  | STATUS  | TYPE       | VERSION | ENDPOINT | PORT     | USERNAME | PASSWORD | APPLICATIONS\nmy-db          | running | MySQL      | 8.0     | <hidden> | <hidden> | <hidden> | <hidden> | my-application\n")),Object(o.b)(r.a,{to:"/guides/advanced/using-multiple-environments",mdxType:"Jump"},"Multiple Environments"),Object(o.b)("h3",{id:"test-the-laravel-application-locally"},"Test the Laravel application locally"),Object(o.b)("p",null,"The Qovery motto is: if your application runs locally, it runs well on Qovery, too. To test if your application is running locally, execute the following command:"),Object(o.b)(u.a,{mdxType:"Alert"},"The Docker runtime is required"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"$ qovery run\n")),Object(o.b)("p",null,"Note: ",Object(o.b)("inlineCode",{parentName:"p"},"qovery run")," connects your application to the MySQL database on Qovery."),Object(o.b)("h2",{id:"conclusion"},"Conclusion"),Object(o.b)("p",null,"Congratulations! Now, you know how to deploy your Laravel app with MySQL in just a few steps."),Object(o.b)("p",null,"Do you have any feedback about this tutorial? Let us know what you think on ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://discord.qovery.com"}),"Discord"),", and join our wonderful dev community of +600 devs."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"With thanks to ",Object(o.b)("a",Object(n.a)({parentName:"strong"},{href:"https://github.com/arnaudj"}),"Arnaud J.")," for his contribution to this article."),"s"),Object(o.b)(r.a,{to:"/guides/tutorial/",mdxType:"Jump"},"Tutorials"))}h.isMDXComponent=!0},337:function(e,t,a){"use strict";var n=a(1),l=a(0),o=a.n(l),r=a(39),i=a(340),c=a(19),s=a.n(c);t.a=function(e){var t,a=e.to,c=e.href,u=a||c,p=Object(i.a)(u),b=Object(l.useRef)(!1),m=s.a.canUseIntersectionObserver;return Object(l.useEffect)((function(){return!m&&p&&window.docusaurus.prefetch(u),function(){m&&t&&t.disconnect()}}),[u,m,p]),u&&p?o.a.createElement(r.b,Object(n.a)({},e,{onMouseEnter:function(){b.current||(window.docusaurus.preload(u),b.current=!0)},innerRef:function(e){var a,n;m&&e&&p&&(a=e,n=function(){window.docusaurus.prefetch(u)},(t=new window.IntersectionObserver((function(e){e.forEach((function(e){a===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(t.unobserve(a),t.disconnect(),n())}))}))).observe(a))},to:u})):o.a.createElement("a",Object(n.a)({},e,{href:u}))}},338:function(e,t,a){"use strict";a(342);var n=a(0),l=a.n(n),o=a(335),r=a.n(o);a(133);t.a=function(e){var t=e.children,a=e.classNames,n=e.fill,o=e.icon,i=e.type,c=null;switch(i){case"danger":c="alert-triangle";break;case"success":c="check-circle";break;case"warning":c="alert-triangle";break;default:c="info"}return l.a.createElement("div",{className:r()(a,"alert","alert--"+i,{"alert--fill":n,"alert--icon":!1!==o}),role:"alert"},!1!==o&&l.a.createElement("i",{className:r()("feather","icon-"+(o||c))}),t)}},339:function(e,t,a){"use strict";var n=a(0),l=a.n(n),o=a(337),r=a(335),i=a.n(r);a(132);t.a=function(e){var t=e.children,a=e.className,n=e.badge,r=e.leftIcon,c=e.rightIcon,s=e.size,u=e.target,p=e.to,b=i()("jump-to","jump-to--"+s,a),m=l.a.createElement("div",{className:"jump-to--inner"},l.a.createElement("div",{className:"jump-to--inner-2"},r&&l.a.createElement("div",{className:"jump-to--left"},l.a.createElement("i",{className:"feather icon-"+r})),l.a.createElement("div",{className:"jump-to--main"},n?l.a.createElement("span",{className:"badge badge--primary badge--right"},n):"",t),l.a.createElement("div",{className:"jump-to--right"},l.a.createElement("i",{className:"feather icon-"+(c||"chevron-right")+" arrow"}))));return u?l.a.createElement("a",{href:p,target:u,className:b},m):l.a.createElement(o.a,{to:p,className:b},m)}},340:function(e,t,a){"use strict";function n(e){return!1===/^(https?:|\/\/)/.test(e)}a.d(t,"a",(function(){return n}))},341:function(e,t,a){var n=a(25).f,l=Function.prototype,o=/^\s*function ([^ (]*)/;"name"in l||a(10)&&n(l,"name",{configurable:!0,get:function(){try{return(""+this).match(o)[1]}catch(e){return""}}})},343:function(e,t,a){"use strict";a(341);var n=a(0),l=a.n(n),o=a(338);t.a=function(e){var t=e.children,a=e.name;return l.a.createElement(o.a,{type:"info",fill:!0,icon:!1,rounded:!0,className:"list--icons list--icons--arrow list--tight list--indent margin-bottom--lg"},l.a.createElement("p",{class:"text--lg margin-bottom--sm",style:{marginTop:"-0.25em"}},"Before you begin, this ",a||"page"," assumes the following:"),t)}},347:function(e,t,a){"use strict";var n=a(1),l=(a(353),a(349),a(52),a(28),a(21),a(20),a(0)),o=a.n(l),r=a(357),i=a(335),c=a.n(i),s=a(346),u=a.n(s),p=a(356),b=37,m=39;function d(e){var t=e.block,a=e.centered,n=e.changeSelectedValue,l=e.className,r=e.handleKeydown,i=e.style,s=e.values,u=e.selectedValue,p=e.tabRefs;return o.a.createElement("div",{className:a?"tabs--centered":null},o.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:c()("tabs",l,{"tabs--block":t}),style:i},s.map((function(e){var t=e.value,a=e.label;return o.a.createElement("li",{role:"tab",tabIndex:"0","aria-selected":u===t,className:c()("tab-item",{"tab-item--active":u===t}),key:t,ref:function(e){return p.push(e)},onKeyDown:function(e){return r(p,e.target,e)},onFocus:function(){return n(t)},onClick:function(){return n(t)}},a)}))))}function h(e){var t=e.placeholder,a=e.selectedValue,n=e.changeSelectedValue,l=e.size,i=e.values,c=i;if(c[0].group){var s=_.groupBy(c,"group");c=Object.keys(s).map((function(e){return{label:e,options:s[e]}}))}return o.a.createElement(r.a,{className:"react-select-container react-select--"+l,classNamePrefix:"react-select",options:c,isClearable:a,placeholder:t,value:i.find((function(e){return e.value==a})),onChange:function(e){return n(e?e.value:null)}})}t.a=function(e){e.block,e.centered;var t=e.children,a=e.defaultValue,r=e.groupId,i=e.label,c=e.placeholder,s=e.select,y=e.size,O=(e.style,e.values),v=e.urlKey,g=Object(p.a)(),j=g.tabGroupChoices,f=g.setTabGroupChoices,N=Object(l.useState)(a),w=N[0],T=N[1];if(null!=r){var A=j[r];null!=A&&A!==w&&T(A)}var S=function(e){T(e),null!=r&&f(r,e)},E=[],I=function(e,t,a){switch(a.keyCode){case m:!function(e,t){var a=e.indexOf(t)+1;e[a]?e[a].focus():e[0].focus()}(e,t);break;case b:!function(e,t){var a=e.indexOf(t)-1;e[a]?e[a].focus():e[e.length-1].focus()}(e,t)}};return Object(l.useEffect)((function(){if("undefined"!=typeof window&&window.location&&v){var e=u.a.parse(window.location.search);e[v]&&T(e[v])}}),[]),o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"margin-bottom--"+(y||"md")},i&&o.a.createElement("div",{className:"margin-vert--sm"},i),O.length>1&&(s?o.a.createElement(h,Object(n.a)({changeSelectedValue:S,handleKeydown:I,placeholder:c,selectedValue:w,size:y,tabRefs:E},e)):o.a.createElement(d,Object(n.a)({changeSelectedValue:S,handleKeydown:I,selectedValue:w,tabRefs:E},e)))),l.Children.toArray(t).filter((function(e){return e.props.value===w}))[0])}},348:function(e,t,a){"use strict";var n=a(0),l=a.n(n);t.a=function(e){return l.a.createElement(l.a.Fragment,null,e.children)}}}]);