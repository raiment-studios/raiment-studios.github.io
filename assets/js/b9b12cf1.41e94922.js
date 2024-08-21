"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9305],{2627:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>a,toc:()=>l});var i=n(4848),s=n(8453);const o={},r="Plugins as dylibs",a={permalink:"/blog/2024/08/20/index",editUrl:"https://github.com/raiment-studios/monorepo/tree/main/projects/raiment-studios/web2/blog/2024-08-20/index.md",source:"@site/blog/2024-08-20/index.md",title:"Plugins as dylibs",description:"Nothing new in the image below! Under the hood though, the code changed...",date:"2024-08-20T00:00:00.000Z",tags:[],readingTime:1.635,hasTruncateMarker:!1,authors:[],frontMatter:{},unlisted:!1,prevItem:{title:"Early WIP: voxel chunking",permalink:"/blog/2024/08/21/index"},nextItem:{title:"Terrain generator",permalink:"/blog/2024/08/19/index"}},d={authorsImageUrls:[]},l=[];function c(e){const t={code:"code",img:"img",p:"p",strong:"strong",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.p,{children:"Nothing new in the image below! Under the hood though, the code changed..."}),"\n",(0,i.jsxs)("div",{style:{display:"flex",flexDirection:"row",gap:16},children:[(0,i.jsxs)("div",{style:{flex:"1 0 0",borderRadius:4,border:"1px solid #CCC",padding:16},children:[(0,i.jsx)(t.p,{children:(0,i.jsx)(t.strong,{children:"From"})}),(0,i.jsx)(t.p,{children:"Build and run Rust plugins as processes."}),(0,i.jsx)(t.p,{children:"Pass parameters in as a JSON string to the command-line.\nReceive output as YAML on stdout."}),(0,i.jsx)(t.p,{children:"Simple but not the most efficient encoding and limited to one fixed output on stdout."})]}),(0,i.jsx)("div",{style:{fontSize:"200%",alignSelf:"center"},children:"\u27f6"}),(0,i.jsxs)("div",{style:{flex:"1 0 0",borderRadius:4,border:"1px solid #CCC",padding:16},children:[(0,i.jsx)(t.p,{children:(0,i.jsx)(t.strong,{children:"To"})}),(0,i.jsx)(t.p,{children:"Build and run Rust plugins as dynamic libraries."}),(0,i.jsxs)(t.p,{children:["Pass parameters via JSON still, but plugin functions return structs as ",(0,i.jsx)(t.code,{children:"bitcode"}),"-encoded byte arrays."]}),(0,i.jsx)(t.p,{children:"Still fairly simple, bitcode seems (not that surprisingly) more efficient. The dynamic library can have multiple entry points for more flexibility."})]})]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"alt text",src:n(7150).A+"",width:"912",height:"740"})}),"\n",(0,i.jsx)(t.p,{children:'It\'s somewhat interesting to note this is my third "try" at plugins already. Maybe I should plan more in advance? Maybe this is part of the learning experience?'}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"#3 Rust dynamic libraries:"}),' once I had a better understanding of what I wanted to do, this seems like a more natural fit. Leaves room for more generic plugins, including ones that stay in memory. May want a process/"service"-based mode for added decoupling in the future, but for now, this is a very easy approach for single-file, run-once plugins.']}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"#2 Rust processes"}),": moved to this to get the type checking. As I'm still learning Rust, more or less dove straight into hacking this together just to get something to work. Stuck with the JSON/YAML exchange formats since it let me postpone worrying about them."]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"#1 Deno-based node plug-ins"}),": had some old JS code for generating terrains. Thought it might be nice to allow the imprecision of JS and just rely on JSON/YAML formats for data exchange. Moved on what I quickly realized I wanted the type-checking of Rust, including on the interchange formats."]})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},7150:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/image-74b590ef891a14b0fadf64ade23806cc.png"},8453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>a});var i=n(6540);const s={},o=i.createContext(s);function r(e){const t=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(o.Provider,{value:t},e.children)}}}]);