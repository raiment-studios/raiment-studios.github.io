(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7643],{5124:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>f});n(6540);var a=n(4164),s=n(4586),i=n(1213),o=n(7559),r=n(8027),l=n(7713),c=n(1463),d=n(3892),p=n(5260),g=n(4096),m=n(4848);function h(e){const t=(0,g.kJ)(e);return(0,m.jsx)(p.A,{children:(0,m.jsx)("script",{type:"application/ld+json",children:JSON.stringify(t)})})}function u(e){const{metadata:t}=e,{siteConfig:{title:n}}=(0,s.A)(),{blogDescription:a,blogTitle:o,permalink:r}=t,l="/"===r?n:o;return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(i.be,{title:l,description:a}),(0,m.jsx)(c.A,{tag:"blog_posts_list"})]})}function x(e){const{metadata:t,items:n,sidebar:a}=e;return(0,m.jsxs)(r.A,{sidebar:a,children:[(0,m.jsx)(d.A,{items:n}),(0,m.jsx)(l.A,{metadata:t})]})}function f(e){return(0,m.jsxs)(i.e3,{className:(0,a.A)(o.G.wrapper.blogPages,o.G.page.blogListPage),children:[(0,m.jsx)(u,{...e}),(0,m.jsx)(h,{...e}),(0,m.jsx)(x,{...e})]})}},7713:(e,t,n)=>{"use strict";n.d(t,{A:()=>o});n(6540);var a=n(1312),s=n(9022),i=n(4848);function o(e){const{metadata:t}=e,{previousPage:n,nextPage:o}=t;return(0,i.jsxs)("nav",{className:"pagination-nav","aria-label":(0,a.T)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"}),children:[n&&(0,i.jsx)(s.A,{permalink:n,title:(0,i.jsx)(a.A,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)",children:"Newer entries"})}),o&&(0,i.jsx)(s.A,{permalink:o,title:(0,i.jsx)(a.A,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)",children:"Older entries"}),isNext:!0})]})}},3892:(e,t,n)=>{"use strict";n.d(t,{A:()=>o});n(6540);var a=n(4096),s=n(1240),i=n(4848);function o(e){let{items:t,component:n=s.A}=e;return(0,i.jsx)(i.Fragment,{children:t.map((e=>{let{content:t}=e;return(0,i.jsx)(a.in,{content:t,children:(0,i.jsx)(n,{children:(0,i.jsx)(t,{})})},t.metadata.permalink)}))})}},5140:(e,t,n)=>{"use strict";n.d(t,{A:()=>o});var a=n(6540),s=n(3059),i=n(4848);const o={...s.A,CanvasWASM:function(e){let{id:t,module:n,width:s,height:o,style:r}=e;return a.useEffect((()=>{(async()=>{console.log("Loading module for canvas:",t);const e=await fetch(n),a=(await e.text(),document.createElement("script"));a.type="module",a.text=`\n                // Kick off the main application.  Note that we use the "start"\n            // function rather than relying on "main" so that we can pass\n            // arguments to it.\n            const go = async () => {\n            console.log("CALLLING GO");\n            try {\n                let mod = await import('/wasm/snowfall-001-wasm-canvas.js');\n                await mod.default();\n                mod.start('${t}');\n        } catch (e) { }\n            };\n            go();\n            `,document.body.appendChild(a)})()}),[]),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("canvas",{id:t,width:s,height:o,style:r}),(0,i.jsx)("script",{type:"module",children:'\n            // Kick off the main application.  Note that we use the "start"\n            // function rather than relying on "main" so that we can pass\n            // arguments to it.\n            const go = async () => {\n            console.log("CALLLING GO");\n                let mod = await import(\'./snowfall-001-wasm-canvas.js\');\n                await mod.default();\n                mod.start(\'app-canvas\');\n            };\n            go();'})]})}}},2575:e=>{function t(e){return Promise.resolve().then((()=>{var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}))}t.keys=()=>[],t.resolve=t,t.id=2575,e.exports=t}}]);