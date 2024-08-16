"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5389],{170:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>i,toc:()=>d});var o=n(4848),s=n(8453);const r={},a="Incremental progress",i={permalink:"/blog/2024/08/16/index",editUrl:"https://github.com/raiment-studios/monorepo/tree/main/projects/raiment-studios/web2/blog/2024-08-16/index.md",source:"@site/blog/2024-08-16/index.md",title:"Incremental progress",description:"Not much visually different, but improved the code base a bit. Most notably having the engine automtically run model generation scripts (rather than manually running scripts to create static assets) and improved logging.",date:"2024-08-16T00:00:00.000Z",tags:[],readingTime:.92,hasTruncateMarker:!1,authors:[],frontMatter:{},unlisted:!1,nextItem:{title:"Progress",permalink:"/blog/2024/08/15/index"}},c={authorsImageUrls:[]},d=[{value:"Changes",id:"changes",level:3},{value:"Potential next steps",id:"potential-next-steps",level:3}];function l(e){const t={code:"code",h3:"h3",p:"p",strong:"strong",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.p,{children:"Not much visually different, but improved the code base a bit. Most notably having the engine automtically run model generation scripts (rather than manually running scripts to create static assets) and improved logging."}),"\n",(0,o.jsx)(t.h3,{id:"changes",children:"Changes"}),"\n",(0,o.jsxs)(t.p,{children:["\u2795 Split model definition YAML from generator script JS",(0,o.jsx)("br",{}),"\n\u2795 Landscape generator takes grid size as an optional parameter",(0,o.jsx)("br",{}),"\n\u2795 Improved logging output",(0,o.jsx)("br",{}),"\n\u2795 Default camera now set based on scene bounds",(0,o.jsx)("br",{}),"\n\u2795 Added ",(0,o.jsx)(t.code,{children:"id"})," and ",(0,o.jsx)(t.code,{children:"generation"})," to models to detect cache staleness",(0,o.jsx)("br",{}),"\n\u2795 Added ",(0,o.jsx)(t.code,{children:"BoundingBox"}),(0,o.jsx)("br",{}),"\n\ud83d\uddc4\ufe0f Split files for better organization",(0,o.jsx)("br",{}),"\n\u2795 git status alias not provides links to diffs on GitHub so summary changelogs like this are easier to create",(0,o.jsx)("br",{})]}),"\n",(0,o.jsx)(t.h3,{id:"potential-next-steps",children:"Potential next steps"}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.strong,{children:"\ud83d\udd2e Hot reloading of the module when the script or model file changes"})}),"\n",(0,o.jsx)(t.p,{children:'The above is a bit tricky as it creates a dependency between the loading code, an async file watcher, and the main render loop. I don\'t yet have a clear vision for how to connect those in a non-intrusive manner, but otherwise would like to add "hot reloading" as a core piece of functionality to make development easier and faster.'})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>i});var o=n(6540);const s={},r=o.createContext(s);function a(e){const t=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),o.createElement(r.Provider,{value:t},e.children)}}}]);