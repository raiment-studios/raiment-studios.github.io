"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2410],{395:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>s,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var o=n(4848),i=n(8453);const r={},s="Tools",l={id:"company/reference/useful-unicode",title:"Tools",description:"Useful Unicode",source:"@site/docs/company/900-reference/910-useful-unicode.mdx",sourceDirName:"company/900-reference",slug:"/company/reference/useful-unicode",permalink:"/docs/company/reference/useful-unicode",draft:!1,unlisted:!1,editUrl:"https://github.com/raiment-studios/monorepo/tree/main/projects/raiment-studios/web2/docs/company/900-reference/910-useful-unicode.mdx",tags:[],version:"current",sidebarPosition:910,frontMatter:{},sidebar:"companySidebar",previous:{title:"Raiment Studios",permalink:"/docs/company/"}},a={},d=[{value:"Useful Unicode",id:"useful-unicode",level:2},{value:"Random values",id:"random-values",level:2},{value:"Mathematical notation",id:"mathematical-notation",level:2},{value:"Sets",id:"sets",level:3}];function c(e){const t={div:"div",h1:"h1",h2:"h2",h3:"h3",header:"header",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.header,{children:(0,o.jsx)(t.h1,{id:"tools",children:"Tools"})}),"\n",(0,o.jsx)(t.h2,{id:"useful-unicode",children:"Useful Unicode"}),"\n",(0,o.jsx)("div",{style:{display:"flex",flexDirection:"column"},children:["\u03b1\u03b2\u03b3\u03b4\u03b5\u03b6\u03b7\u03b8\u03b9\u03ba\u03bb\u03bc\u03bd\u03be\u03bf\u03c0\u03c1\u03c3/\u03c2\u03c4\u03c5\u03c6\u03c7\u03c8\u03c9","\u0391\u0392\u0393\u0394\u0395\u0396\u0397\u0398\u0399\u039a\u039b\u039c\u039d\u039e\u039f\u03a0\u03a1\u03a3\u03a4\u03a5\u03a6\u03a7\u03a8\u03a9","\u2190\u2192\u2194\u2191\u2193\u2195\u2196\u2197\u2198\u2199\u2921\u2922\u27f5\u27f6\u27f7\u27f8\u27f9\u27fa\u27fb\u27fc","\u25b2\u25b6\u25bc\u25c0\u25b4\u25b8\u25be\u25c2"].map(((e,n)=>(0,o.jsx)(t.div,{style:{display:"flex",flexDirection:"row"},children:e.split("").map(((e,n)=>(0,o.jsx)(t.div,{style:{margin:"0.25em",width:"1em",cursor:"pointer"},onClick:()=>{navigator.clipboard.writeText(e)},children:e},n)))},n)))}),"\n",(0,o.jsx)(t.h2,{id:"random-values",children:"Random values"}),"\n",(0,o.jsx)("div",{children:[["Value",Math.random().toFixed(4)],["Radian",(Math.random()*Math.PI*2).toFixed(4)],["8192",Math.floor(8192*Math.random())],["Hex color","#"+(4095&Math.floor(1e9*Math.random())).toString(16).padStart(3,"0"),e=>(0,o.jsx)(t.div,{style:{width:16,height:16,backgroundColor:e}})],["Hex color","#"+(16777215&Math.floor(1e9*Math.random())).toString(16).padStart(6,"0"),e=>(0,o.jsx)(t.div,{style:{width:16,height:16,backgroundColor:e}})],["Password",new Array(11).fill(0).map((()=>{let e="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+";return e[Math.floor(74*Math.random())]})).join("")],["Password",new Array(17).fill(0).map((()=>{let e="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+";return e[Math.floor(74*Math.random())]})).join("")]].map(((e,n)=>(0,o.jsxs)(t.div,{style:{display:"flex",flexDirection:"row",alignItems:"center",cursor:"pointer"},onClick:()=>{navigator.clipboard.writeText(e[1])},children:[(0,o.jsx)(t.div,{style:{flex:"0 0 8em"},children:e[0]}),(0,o.jsx)(t.div,{style:{flex:"0 0 12rem",fontFamily:"monospace"},children:e[1]}),(0,o.jsx)(t.div,{children:e[2]?e[2](e[1]):null})]},n)))}),"\n",(0,o.jsx)(t.h2,{id:"mathematical-notation",children:"Mathematical notation"}),"\n",(0,o.jsx)(t.h3,{id:"sets",children:"Sets"}),"\n",(0,o.jsx)("div",{children:"\nEmpty set: \u2205 : \u2205 : the empty set\nElement of: \u2208 : x \u2208 A : x is an element of A\nUnion: \u222a : A \u222a B : the set of elements in either A or B\nIntersection: \u2229 : A \u2229 B : the set of element in both A and B\nSubset: \u2286 : A \u2286 B : A has no elements that are not also in B\nSuperset: \u2287 : A \u2287 B : A has at least all the elements of B\nProper subset: \u2282 : A \u2282 B : A is a subset of B but not equal to B\nProper superset: \u2283 : A \u2283 B : A is a superset of B but not equal to B\n".trim().split("\n").map(((e,n)=>{const i=e.split(":").map((e=>e.trim()));return(0,o.jsxs)(t.div,{style:{display:"flex",flexDirection:"row",alignItems:"center",cursor:"pointer"},onClick:()=>{navigator.clipboard.writeText(i[1])},children:[(0,o.jsx)(t.div,{style:{flex:"0 0 2rem"},children:i[1]}),(0,o.jsx)(t.div,{style:{flex:"0 0 10rem"},children:i[0]}),(0,o.jsx)(t.div,{style:{flex:"0 0 4rem"},children:i[2]}),(0,o.jsx)(t.div,{style:{color:"#555",fontSize:"90%"},children:i[3]})]},n)}))})]})}function u(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>l});var o=n(6540);const i={},r=o.createContext(i);function s(e){const t=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),o.createElement(r.Provider,{value:t},e.children)}}}]);