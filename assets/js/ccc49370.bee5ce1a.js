(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3249],{1477:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>b});n(6540);var i=n(4164),a=n(1213),s=n(7559),o=n(4096),r=n(8027),l=n(1240),c=n(1312),d=n(9022),u=n(4848);function m(e){const{nextItem:t,prevItem:n}=e;return(0,u.jsxs)("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,c.T)({id:"theme.blog.post.paginator.navAriaLabel",message:"Blog post page navigation",description:"The ARIA label for the blog posts pagination"}),children:[n&&(0,u.jsx)(d.A,{...n,subLabel:(0,u.jsx)(c.A,{id:"theme.blog.post.paginator.newerPost",description:"The blog post button label to navigate to the newer/previous post",children:"Newer post"})}),t&&(0,u.jsx)(d.A,{...t,subLabel:(0,u.jsx)(c.A,{id:"theme.blog.post.paginator.olderPost",description:"The blog post button label to navigate to the older/next post",children:"Older post"}),isNext:!0})]})}function h(){const{assets:e,metadata:t}=(0,o.e7)(),{title:n,description:i,date:s,tags:r,authors:l,frontMatter:c}=t,{keywords:d}=c,m=e.image??c.image;return(0,u.jsxs)(a.be,{title:n,description:i,keywords:d,image:m,children:[(0,u.jsx)("meta",{property:"og:type",content:"article"}),(0,u.jsx)("meta",{property:"article:published_time",content:s}),l.some((e=>e.url))&&(0,u.jsx)("meta",{property:"article:author",content:l.map((e=>e.url)).filter(Boolean).join(",")}),r.length>0&&(0,u.jsx)("meta",{property:"article:tag",content:r.map((e=>e.label)).join(",")})]})}var f=n(5260);function g(){const e=(0,o.J_)();return(0,u.jsx)(f.A,{children:(0,u.jsx)("script",{type:"application/ld+json",children:JSON.stringify(e)})})}var p=n(7763),v=n(1689);function x(e){let{sidebar:t,children:n}=e;const{metadata:i,toc:a}=(0,o.e7)(),{nextItem:s,prevItem:c,frontMatter:d}=i,{hide_table_of_contents:h,toc_min_heading_level:f,toc_max_heading_level:g}=d;return(0,u.jsxs)(r.A,{sidebar:t,toc:!h&&a.length>0?(0,u.jsx)(p.A,{toc:a,minHeadingLevel:f,maxHeadingLevel:g}):void 0,children:[(0,u.jsx)(v.A,{metadata:i}),(0,u.jsx)(l.A,{children:n}),(s||c)&&(0,u.jsx)(m,{nextItem:s,prevItem:c})]})}function b(e){const t=e.content;return(0,u.jsx)(o.in,{content:e.content,isBlogPostPage:!0,children:(0,u.jsxs)(a.e3,{className:(0,i.A)(s.G.wrapper.blogPages,s.G.page.blogPostPage),children:[(0,u.jsx)(h,{}),(0,u.jsx)(g,{}),(0,u.jsx)(x,{sidebar:e.sidebar,children:(0,u.jsx)(t,{})})]})})}},2234:(e,t,n)=>{"use strict";n.d(t,{A:()=>c});n(6540);var i=n(4164),a=n(4084),s=n(7559),o=n(7293),r=n(4848);function l(e){let{className:t}=e;return(0,r.jsx)(o.A,{type:"caution",title:(0,r.jsx)(a.Rc,{}),className:(0,i.A)(t,s.G.common.unlistedBanner),children:(0,r.jsx)(a.Uh,{})})}function c(e){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a.AE,{}),(0,r.jsx)(l,{...e})]})}},1689:(e,t,n)=>{"use strict";n.d(t,{A:()=>d});n(6540);var i=n(4164),a=n(4084),s=n(7559),o=n(7293),r=n(4848);function l(e){let{className:t}=e;return(0,r.jsx)(o.A,{type:"caution",title:(0,r.jsx)(a.Yh,{}),className:(0,i.A)(t,s.G.common.draftBanner),children:(0,r.jsx)(a.TT,{})})}var c=n(2234);function d(e){let{metadata:t}=e;const{unlisted:n,frontMatter:i}=t;return(0,r.jsxs)(r.Fragment,{children:[(n||i.unlisted)&&(0,r.jsx)(c.A,{}),i.draft&&(0,r.jsx)(l,{})]})}},7763:(e,t,n)=>{"use strict";n.d(t,{A:()=>c});n(6540);var i=n(4164),a=n(5195);const s={tableOfContents:"tableOfContents_bqdL",docItemContainer:"docItemContainer_F8PC"};var o=n(4848);const r="table-of-contents__link toc-highlight",l="table-of-contents__link--active";function c(e){let{className:t,...n}=e;return(0,o.jsx)("div",{className:(0,i.A)(s.tableOfContents,"thin-scrollbar",t),children:(0,o.jsx)(a.A,{...n,linkClassName:r,linkActiveClassName:l})})}},5195:(e,t,n)=>{"use strict";n.d(t,{A:()=>g});var i=n(6540),a=n(6342);function s(e){const t=e.map((e=>({...e,parentIndex:-1,children:[]}))),n=Array(7).fill(-1);t.forEach(((e,t)=>{const i=n.slice(2,e.level);e.parentIndex=Math.max(...i),n[e.level]=t}));const i=[];return t.forEach((e=>{const{parentIndex:n,...a}=e;n>=0?t[n].children.push(a):i.push(a)})),i}function o(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:i}=e;return t.flatMap((e=>{const t=o({toc:e.children,minHeadingLevel:n,maxHeadingLevel:i});return function(e){return e.level>=n&&e.level<=i}(e)?[{...e,children:t}]:t}))}function r(e){const t=e.getBoundingClientRect();return t.top===t.bottom?r(e.parentNode):t}function l(e,t){let{anchorTopOffset:n}=t;const i=e.find((e=>r(e).top>=n));if(i){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(r(i))?i:e[e.indexOf(i)-1]??null}return e[e.length-1]??null}function c(){const e=(0,i.useRef)(0),{navbar:{hideOnScroll:t}}=(0,a.p)();return(0,i.useEffect)((()=>{e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}function d(e){const t=(0,i.useRef)(void 0),n=c();(0,i.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:i,linkActiveClassName:a,minHeadingLevel:s,maxHeadingLevel:o}=e;function r(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(i),r=function(e){let{minHeadingLevel:t,maxHeadingLevel:n}=e;const i=[];for(let a=t;a<=n;a+=1)i.push(`h${a}.anchor`);return Array.from(document.querySelectorAll(i.join()))}({minHeadingLevel:s,maxHeadingLevel:o}),c=l(r,{anchorTopOffset:n.current}),d=e.find((e=>c&&c.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,n){n?(t.current&&t.current!==e&&t.current.classList.remove(a),e.classList.add(a),t.current=e):e.classList.remove(a)}(e,e===d)}))}return document.addEventListener("scroll",r),document.addEventListener("resize",r),r(),()=>{document.removeEventListener("scroll",r),document.removeEventListener("resize",r)}}),[e,n])}var u=n(8774),m=n(4848);function h(e){let{toc:t,className:n,linkClassName:i,isChild:a}=e;return t.length?(0,m.jsx)("ul",{className:a?void 0:n,children:t.map((e=>(0,m.jsxs)("li",{children:[(0,m.jsx)(u.A,{to:`#${e.id}`,className:i??void 0,dangerouslySetInnerHTML:{__html:e.value}}),(0,m.jsx)(h,{isChild:!0,toc:e.children,className:n,linkClassName:i})]},e.id)))}):null}const f=i.memo(h);function g(e){let{toc:t,className:n="table-of-contents table-of-contents__left-border",linkClassName:r="table-of-contents__link",linkActiveClassName:l,minHeadingLevel:c,maxHeadingLevel:u,...h}=e;const g=(0,a.p)(),p=c??g.tableOfContents.minHeadingLevel,v=u??g.tableOfContents.maxHeadingLevel,x=function(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:a}=e;return(0,i.useMemo)((()=>o({toc:s(t),minHeadingLevel:n,maxHeadingLevel:a})),[t,n,a])}({toc:t,minHeadingLevel:p,maxHeadingLevel:v});return d((0,i.useMemo)((()=>{if(r&&l)return{linkClassName:r,linkActiveClassName:l,minHeadingLevel:p,maxHeadingLevel:v}}),[r,l,p,v])),(0,m.jsx)(f,{toc:x,className:n,linkClassName:r,...h})}},4084:(e,t,n)=>{"use strict";n.d(t,{AE:()=>l,Rc:()=>o,TT:()=>d,Uh:()=>r,Yh:()=>c});n(6540);var i=n(1312),a=n(5260),s=n(4848);function o(){return(0,s.jsx)(i.A,{id:"theme.contentVisibility.unlistedBanner.title",description:"The unlisted content banner title",children:"Unlisted page"})}function r(){return(0,s.jsx)(i.A,{id:"theme.contentVisibility.unlistedBanner.message",description:"The unlisted content banner message",children:"This page is unlisted. Search engines will not index it, and only users having a direct link can access it."})}function l(){return(0,s.jsx)(a.A,{children:(0,s.jsx)("meta",{name:"robots",content:"noindex, nofollow"})})}function c(){return(0,s.jsx)(i.A,{id:"theme.contentVisibility.draftBanner.title",description:"The draft content banner title",children:"Draft page"})}function d(){return(0,s.jsx)(i.A,{id:"theme.contentVisibility.draftBanner.message",description:"The draft content banner message",children:"This page is a draft. It will only be visible in dev and be excluded from the production build."})}},5140:(e,t,n)=>{"use strict";n.d(t,{A:()=>o});var i=n(6540),a=n(3059),s=n(4848);const o={...a.A,CanvasWASM:function(e){let{id:t,module:n,width:a,height:o,style:r}=e;return i.useEffect((()=>{(async()=>{console.log("Loading module for canvas:",t);const e=await fetch(n),i=(await e.text(),document.createElement("script"));i.type="module",i.text=`\n                // Kick off the main application.  Note that we use the "start"\n            // function rather than relying on "main" so that we can pass\n            // arguments to it.\n            const go = async () => {\n            console.log("CALLLING GO");\n            try {\n                let mod = await import('/wasm/snowfall-001-wasm-canvas.js');\n                await mod.default();\n                mod.start('${t}');\n        } catch (e) { }\n            };\n            go();\n            `,document.body.appendChild(i)})()}),[]),(0,s.jsx)("canvas",{id:t,width:a,height:o,style:r})}}},2575:e=>{function t(e){return Promise.resolve().then((()=>{var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}))}t.keys=()=>[],t.resolve=t,t.id=2575,e.exports=t}}]);