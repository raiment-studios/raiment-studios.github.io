"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7643],{5124:(e,t,n)=>{n.r(t),n.d(t,{default:()=>b});n(6540);var a=n(4164),s=n(4586),i=n(1213),o=n(7559),r=n(8027),l=n(7713),c=n(1463),d=n(3892),g=n(5260),m=n(4096),u=n(4848);function p(e){const t=(0,m.kJ)(e);return(0,u.jsx)(g.A,{children:(0,u.jsx)("script",{type:"application/ld+json",children:JSON.stringify(t)})})}function h(e){const{metadata:t}=e,{siteConfig:{title:n}}=(0,s.A)(),{blogDescription:a,blogTitle:o,permalink:r}=t,l="/"===r?n:o;return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(i.be,{title:l,description:a}),(0,u.jsx)(c.A,{tag:"blog_posts_list"})]})}function x(e){const{metadata:t,items:n,sidebar:a}=e;return(0,u.jsxs)(r.A,{sidebar:a,children:[(0,u.jsx)(d.A,{items:n}),(0,u.jsx)(l.A,{metadata:t})]})}function b(e){return(0,u.jsxs)(i.e3,{className:(0,a.A)(o.G.wrapper.blogPages,o.G.page.blogListPage),children:[(0,u.jsx)(h,{...e}),(0,u.jsx)(p,{...e}),(0,u.jsx)(x,{...e})]})}},7713:(e,t,n)=>{n.d(t,{A:()=>o});n(6540);var a=n(1312),s=n(9022),i=n(4848);function o(e){const{metadata:t}=e,{previousPage:n,nextPage:o}=t;return(0,i.jsxs)("nav",{className:"pagination-nav","aria-label":(0,a.T)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"}),children:[n&&(0,i.jsx)(s.A,{permalink:n,title:(0,i.jsx)(a.A,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)",children:"Newer entries"})}),o&&(0,i.jsx)(s.A,{permalink:o,title:(0,i.jsx)(a.A,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)",children:"Older entries"}),isNext:!0})]})}},3892:(e,t,n)=>{n.d(t,{A:()=>o});n(6540);var a=n(4096),s=n(1240),i=n(4848);function o(e){let{items:t,component:n=s.A}=e;return(0,i.jsx)(i.Fragment,{children:t.map((e=>{let{content:t}=e;return(0,i.jsx)(a.in,{content:t,children:(0,i.jsx)(n,{children:(0,i.jsx)(t,{})})},t.metadata.permalink)}))})}},5140:(e,t,n)=>{n.d(t,{A:()=>o});var a=n(6540),s=n(3059),i=n(4848);const o={...s.A,CanvasWASM:function(e){let{id:t,module:n,width:s,height:o,style:r}=e;return a.useEffect((()=>{const e=document.createElement("script");e.type="module",e.text=`            \nlet key = 'wasm-retry-count-${n}-${t}';\nlet success = setTimeout(function() {\n    localStorage.setItem(key, "0");\n}, 3500);\n\nconst go = async () => {\n    try {       \n        let mod = await import('${n}');\n        await mod.default();\n        await mod.start('${t}');\n        localStorage.setItem(key, "0");\n    } catch (e) {     \n        if (e.message == "unreachable") {        \n            clearTimeout(success);\n            let value = parseInt(localStorage.getItem(key) || "0", 10);\n            if (value < 10) {                \n                console.log("WASM error, retry attempt: ", value);\n                setTimeout(function() {\n                    localStorage.setItem(key, (value + 1).toString());\n                    window.location.reload();\n                }, 20 + 100 * value);\n            } else {\n                throw e;\n            }\n        }\n    }\n};\ngo();\n            `.trim(),document.body.appendChild(e)}),[]),(0,i.jsx)("canvas",{id:t,width:s,height:o,style:r})}}}}]);