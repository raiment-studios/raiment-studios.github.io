(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7643],{5124:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>b});n(6540);var a=n(4164),s=n(4586),i=n(1213),r=n(7559),o=n(8027),l=n(7713),c=n(1463),d=n(3892),g=n(5260),p=n(4096),m=n(4848);function u(e){const t=(0,p.kJ)(e);return(0,m.jsx)(g.A,{children:(0,m.jsx)("script",{type:"application/ld+json",children:JSON.stringify(t)})})}function h(e){const{metadata:t}=e,{siteConfig:{title:n}}=(0,s.A)(),{blogDescription:a,blogTitle:r,permalink:o}=t,l="/"===o?n:r;return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(i.be,{title:l,description:a}),(0,m.jsx)(c.A,{tag:"blog_posts_list"})]})}function x(e){const{metadata:t,items:n,sidebar:a}=e;return(0,m.jsxs)(o.A,{sidebar:a,children:[(0,m.jsx)(d.A,{items:n}),(0,m.jsx)(l.A,{metadata:t})]})}function b(e){return(0,m.jsxs)(i.e3,{className:(0,a.A)(r.G.wrapper.blogPages,r.G.page.blogListPage),children:[(0,m.jsx)(h,{...e}),(0,m.jsx)(u,{...e}),(0,m.jsx)(x,{...e})]})}},7713:(e,t,n)=>{"use strict";n.d(t,{A:()=>r});n(6540);var a=n(1312),s=n(9022),i=n(4848);function r(e){const{metadata:t}=e,{previousPage:n,nextPage:r}=t;return(0,i.jsxs)("nav",{className:"pagination-nav","aria-label":(0,a.T)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"}),children:[n&&(0,i.jsx)(s.A,{permalink:n,title:(0,i.jsx)(a.A,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)",children:"Newer entries"})}),r&&(0,i.jsx)(s.A,{permalink:r,title:(0,i.jsx)(a.A,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)",children:"Older entries"}),isNext:!0})]})}},3892:(e,t,n)=>{"use strict";n.d(t,{A:()=>r});n(6540);var a=n(4096),s=n(1240),i=n(4848);function r(e){let{items:t,component:n=s.A}=e;return(0,i.jsx)(i.Fragment,{children:t.map((e=>{let{content:t}=e;return(0,i.jsx)(a.in,{content:t,children:(0,i.jsx)(n,{children:(0,i.jsx)(t,{})})},t.metadata.permalink)}))})}},5140:(e,t,n)=>{"use strict";n.d(t,{A:()=>r});var a=n(6540),s=n(3059),i=n(4848);const r={...s.A,CanvasWASM:function(e){let{id:t,module:n,width:s,height:r,style:o}=e;return a.useEffect((()=>{(async()=>{console.log("Loading module for canvas:",t);const e=await fetch(n),a=(await e.text(),document.createElement("script"));a.type="module",a.text=`            \n            const go = async () => {\n            try {\n                let mod = await import('/wasm/snowfall-001-wasm-canvas.js');\n                await mod.default();\n                mod.start('${t}');\n        } catch (e) { }\n            };\n            go();\n            `,document.body.appendChild(a)})()}),[]),(0,i.jsx)("canvas",{id:t,width:s,height:r,style:o})}}},2575:e=>{function t(e){return Promise.resolve().then((()=>{var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}))}t.keys=()=>[],t.resolve=t,t.id=2575,e.exports=t}}]);