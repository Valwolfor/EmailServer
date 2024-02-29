"use strict";(self.webpackChunksnoop_jake_front_end_docs=self.webpackChunksnoop_jake_front_end_docs||[]).push([[1724],{1246:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>c,contentTitle:()=>t,default:()=>h,frontMatter:()=>i,metadata:()=>d,toc:()=>a});var s=o(4848),r=o(8453);const i={sidebar_position:1},t="Manage Docs Versions",d={id:"tutorial-extras/manage-docs-versions",title:"Manage Docs Versions",description:"Docusaurus can manage multiple versions of your docs.",source:"@site/docs/tutorial-extras/manage-docs-versions.md",sourceDirName:"tutorial-extras",slug:"/tutorial-extras/manage-docs-versions",permalink:"/EmailFrontend/SnoopJakeFrontEndDocs/docs/tutorial-extras/manage-docs-versions",draft:!1,unlisted:!1,editUrl:"https://github.com/Tech-Fellows-SnoopJake/EmailServer/tree/jfra_frontend_branch/EmailFrontend/SnoopJakeFrontEndDocs/docs/tutorial-extras/manage-docs-versions.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"docsSidebar",previous:{title:"Component-ComposeEmail",permalink:"/EmailFrontend/SnoopJakeFrontEndDocs/docs/category/component-composeemail"},next:{title:"Translate your site",permalink:"/EmailFrontend/SnoopJakeFrontEndDocs/docs/tutorial-extras/translate-your-site"}},c={},a=[{value:"Create a docs version",id:"create-a-docs-version",level:2},{value:"Add a Version Dropdown",id:"add-a-version-dropdown",level:2},{value:"Update an existing version",id:"update-an-existing-version",level:2}];function l(e){const n={code:"code",h1:"h1",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"manage-docs-versions",children:"Manage Docs Versions"}),"\n",(0,s.jsx)(n.p,{children:"Docusaurus can manage multiple versions of your docs."}),"\n",(0,s.jsx)(n.h2,{id:"create-a-docs-version",children:"Create a docs version"}),"\n",(0,s.jsx)(n.p,{children:"Release a version 1.0 of your project:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"npm run docusaurus docs:version 1.0\n"})}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"docs"})," folder is copied into ",(0,s.jsx)(n.code,{children:"versioned_docs/version-1.0"})," and ",(0,s.jsx)(n.code,{children:"versions.json"})," is created."]}),"\n",(0,s.jsx)(n.p,{children:"Your docs now have 2 versions:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"1.0"})," at ",(0,s.jsx)(n.code,{children:"http://localhost:3000/docs/"})," for the version 1.0 docs"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"current"})," at ",(0,s.jsx)(n.code,{children:"http://localhost:3000/docs/next/"})," for the ",(0,s.jsx)(n.strong,{children:"upcoming, unreleased docs"})]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"add-a-version-dropdown",children:"Add a Version Dropdown"}),"\n",(0,s.jsx)(n.p,{children:"To navigate seamlessly across versions, add a version dropdown."}),"\n",(0,s.jsxs)(n.p,{children:["Modify the ",(0,s.jsx)(n.code,{children:"docusaurus.config.js"})," file:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",metastring:'title="docusaurus.config.js"',children:"export default {\n  themeConfig: {\n    navbar: {\n      items: [\n        // highlight-start\n        {\n          type: 'docsVersionDropdown',\n        },\n        // highlight-end\n      ],\n    },\n  },\n};\n"})}),"\n",(0,s.jsx)(n.p,{children:"The docs version dropdown appears in your navbar:"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Docs Version Dropdown",src:o(8236).A+"",width:"370",height:"302"})}),"\n",(0,s.jsx)(n.h2,{id:"update-an-existing-version",children:"Update an existing version"}),"\n",(0,s.jsx)(n.p,{children:"It is possible to edit versioned docs in their respective folder:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"versioned_docs/version-1.0/hello.md"})," updates ",(0,s.jsx)(n.code,{children:"http://localhost:3000/docs/hello"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"docs/hello.md"})," updates ",(0,s.jsx)(n.code,{children:"http://localhost:3000/docs/next/hello"})]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},8236:(e,n,o)=>{o.d(n,{A:()=>s});const s=o.p+"assets/images/docsVersionDropdown-35e13cbe46c9923327f30a76a90bff3b.png"},8453:(e,n,o)=>{o.d(n,{R:()=>t,x:()=>d});var s=o(6540);const r={},i=s.createContext(r);function t(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:t(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);