"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3292],{9485:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>m,frontMatter:()=>l,metadata:()=>d,toc:()=>h});var s=n(4848),i=n(8453),r=n(6198),o=n(5479);const l={},a="Rain",d={id:"snowfall/roadmap/prds/rain-card",title:"rain-card",description:"Add a first-pass rain particle system that the player can add to the world in order to build out the game's architecture.",source:"@site/docs/snowfall/150-roadmap/500-prds/rain-card.mdx",sourceDirName:"snowfall/150-roadmap/500-prds",slug:"/snowfall/roadmap/prds/rain-card",permalink:"/docs/snowfall/roadmap/prds/rain-card",draft:!1,unlisted:!1,editUrl:"https://github.com/raiment-studios/monorepo/tree/main/projects/raiment-studios/web2/docs/snowfall/150-roadmap/500-prds/rain-card.mdx",tags:[],version:"current",frontMatter:{},sidebar:"snowfallSidebar",previous:{title:"Contributing",permalink:"/docs/snowfall/roadmap/contributing"},next:{title:"Voxel Instances",permalink:"/docs/snowfall/roadmap/prds/voxel-instances"}},c={},h=[{value:"Objective",id:"objective",level:2},{value:"Motivation",id:"motivation",level:4},{value:"Definition",id:"definition",level:3},{value:"Requirements",id:"requirements",level:4},{value:"Out of scope",id:"out-of-scope",level:4},{value:"Success",id:"success",level:3},{value:"Tasks",id:"tasks",level:2},{value:"Planning",id:"planning",level:2},{value:"Implications",id:"implications",level:3},{value:"Log",id:"log",level:2},{value:"Issues",id:"issues",level:3},{value:"Retro",id:"retro",level:3}];function u(e){const t={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components},{Details:l}=t;return l||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(o.B,{}),"\n",(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"rain",children:"Rain"})}),"\n",(0,s.jsx)(t.p,{children:"Add a first-pass rain particle system that the player can add to the world in order to build out the game's architecture."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-prd-labels",children:"status| wip\nmilestone| v0.1\ncategory| core\n"})}),"\n",(0,s.jsx)(r._V,{src:n(7826).A,brightness:1.8,children:(0,s.jsxs)(t.p,{children:["Image from ",(0,s.jsx)(t.a,{href:"https://www.curseforge.com/minecraft/texture-packs/realistic-rain",children:"Realistic Rain"}),"\nmod for Minecraft"]})}),"\n",(0,s.jsx)(t.h2,{id:"objective",children:"Objective"}),"\n",(0,s.jsx)(t.h4,{id:"motivation",children:"Motivation"}),"\n",(0,s.jsx)(t.p,{children:'The game needs more fundamental subsystems before it will be interesting. Adding a rain particle system will be a good forcing function to develop out the game "card" system, the rendering system (points, transparency, modifiable buffers, etc.), engine/actor updates, region-based actors, the module system, and more. It is simple and visual, but requires many of the missing fundamentals that more complex elements will need in the future.'}),"\n",(0,s.jsx)(t.h3,{id:"definition",children:"Definition"}),"\n",(0,s.jsx)(t.h4,{id:"requirements",children:"Requirements"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-data-requirements",children:'Must\n    - [ ] Multiple rain particle systems can be added\n    - [x] System uses a basic velocity/acceleration model\n        - [x] Must be CPU-side (improve general CPU physics infra)\n    - [ ] Systems are added via a "card" in the client\n        - [ ] Cards have a good aesthetic on the client\n                Reuse the workbook implementation\n        - [ ] Cards must be easy to find and use (UX)\n    - [ ] Cards are loaded from YAML definitions on the server\n\nShould\n    - [ ] Particle system implemented as separate module\n\nOut of scope\n'})}),"\n",(0,s.jsx)(r.Zf,{dataID:"data-requirements"}),"\n",(0,s.jsx)(t.h4,{id:"out-of-scope",children:"Out of scope"}),"\n",(0,s.jsx)(t.p,{children:"This is a prototype implementation that, it is expected, will be replaced or significantly revised to realize a more complete system. As such limitations are intentionally outlined here to keep the scope smaller."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-data-not-required",children:"    -   [ ] Multiple rain systems per region\n    -   [ ] Rain systems persist after the region is paged out\n    -   [ ] That this is the final rain system or even the basis for it\n"})}),"\n",(0,s.jsx)(r.Zf,{dataID:"data-not-required"}),"\n",(0,s.jsx)(t.h3,{id:"success",children:"Success"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-data-success",children:"    -   [ ] Subjectively looks good / interesting\n    -   [ ] The card approach can be expanded upon\n    -   [ ] Learned something about what region paging will require\n    -   [ ] Better organization of updates within the engine\n    -   [ ] Client is better organized\n"})}),"\n",(0,s.jsx)(r.Zf,{dataID:"data-success"}),"\n",(0,s.jsx)(t.h2,{id:"tasks",children:"Tasks"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-prd-tasks",children:'M:1 Prototype / research\nPrototype\n    - [x] Get a hard-coded rain system prototype working\n        - [x] Scaffold: add at origin for simplicity\n    - [x] Update shader programs\n        - [x] Add new point pass to renderer\n        - [>] Handle transparency\n    - [x] Add particle system actor\n        - [x] Add updateable point buffers\n    - [>] Region updates\n        - [>] Remove actor on removal\nAdd Card system\n    - [ ] Add client hard-coded command\n        - [x] Add API endpoint\n        - [x] Pass command from server to engine (across thread)\n        - [x] Implement the command to add the actor\n            - [x] Reuse existing action/commands from UI\n        - [ ] Make the Card itself an Actor that adds/removes the internal actor\n        - [ ] Implement a "Clear Skies" card as well\n    - [ ] Add card definition to server\nModule\n    - [ ] Move into a module\nClean-up\n    - [ ] Clean up physics logic (reusability, organization)\n    - [ ] Clean up points pass for generality\n        - [ ] At least add comments\n'})}),"\n",(0,s.jsx)(t.h2,{id:"planning",children:"Planning"}),"\n",(0,s.jsx)(t.h3,{id:"implications",children:"Implications"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["Architecture","\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Add Card system"}),"\n",(0,s.jsx)(t.li,{children:"Improve module system"}),"\n",(0,s.jsx)(t.li,{children:"Improve region system"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(t.li,{children:"Testing - none"}),"\n",(0,s.jsx)(t.li,{children:"Marketing - none"}),"\n",(0,s.jsx)(t.li,{children:"Documentation - none"}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"log",children:"Log"}),"\n",(0,s.jsx)(t.h3,{id:"issues",children:"Issues"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.em,{children:"Open and Decided"})}),"\n",(0,s.jsxs)(l,{children:[(0,s.jsxs)("summary",{children:[(0,s.jsx)(t.strong,{children:"Open Issue"}),": should it be per-region or follow the camera?"]}),(0,s.jsx)(t.p,{children:"The original PRD calls for per-region rain. The rationale behind this was it might make sense for simulation elements to act only on a single region to help constrain them."}),(0,s.jsx)(t.p,{children:"However, a global weather system that follows the player position could make more sense?"}),(0,s.jsx)(t.p,{children:"Or maybe the visuals is a separate component that follows the player and the simulation is per-region? (E.g. if it is raining in a region not near the camera, the simulation may still want to impact the water-level there regardless of the player.)"})]}),"\n",(0,s.jsx)(t.h3,{id:"retro",children:"Retro"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"2024-09-03"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Multiple particle systems is seeming less relevant (or at least implicit). The physics aspect is very uninteresting. Worth noting how these seems more significant before getting into the code."}),"\n",(0,s.jsx)(t.li,{children:"Skipping transparency since seems unnecessary for this stage."}),"\n",(0,s.jsx)(t.li,{children:"Had to make the point rendering pass specific to rain for now. But do see how this can be expanded via uniforms to specify whether to render as NDC offset, world offset, and number of instances. Hestitant to do this until there are multiple uses."}),"\n"]}),"\n"]}),"\n"]})]})}function m(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},5479:(e,t,n)=>{n.d(t,{B:()=>a});var s=n(6540),i=n(961),r=n(6027),o=n(6198),l=n(4848);function a(){const[e,t]=s.useState(null);return s.useEffect((()=>{const e=()=>{const n=document.querySelectorAll('[class*="language-prd-"]');if(!n.length)return console.log("none"),setTimeout(e,100+100*Math.random());const s=[];for(let e=0;e<n.length;e++){const t=n[e],i=t.innerText;let r="";t.className.split(/\s+/).forEach((e=>{let t;if(t=e.match(/^language-prd-(.*)/)){let e=t[1];console.log(e),r=e}})),r&&(t.className="",t.style="",t.innerHTML="",s.push({el:t,type:r,value:i}))}t((e=>(e??[]).concat(s)))};setTimeout(e,0)}),[]),e?(0,l.jsxs)(l.Fragment,{children:[e.map(((e,t)=>{let n=e.type,r="labels"===n?(0,l.jsx)(c,{value:e.value}):"tasks"===n?(0,l.jsx)(o.Zf,{value:e.value}):"risks"===n?(0,l.jsx)(d,{value:e.value}):(0,l.jsx)("pre",{style:{background:"rgba(255, 0, 0, 0.25)"},children:e.value});return(0,l.jsx)(s.Fragment,{children:i.createPortal(r,e.el)},t)})),(0,l.jsx)(m,{title:"Motivation",id:"motivation",children:(0,l.jsx)(r.o,{children:'\nOne of the more difficult to write yet most important sections.\n\nThe text of this section should _as concisely as possible_ **inspire** the reader as to \nwhy this work should be done. It should intentionally avoid describing _how_ the work \nwill be done or any of the "implementation details" of the work. It is literally a\n_motivational_ section that leads into the later sections that provide more context on\nhow, trade-offs, etc.\n                '})}),(0,l.jsx)(m,{title:"Goal",id:"goal",children:(0,l.jsx)(r.o,{children:"\nWhat is being done\n                    "})}),(0,l.jsx)(m,{title:"Planning",id:"planning",children:(0,l.jsx)(r.o,{children:'\n\nThe planning section should outline **just enough** of the high-level approach in order to:\n\n1. Give a overview of the scope of the work\n2. Ensure necessary work is not forgotten (e.g. API impact, documentation updates)\n\nIt should **not** give so much detail as to take away the creativity or problem-solving from the implementer.\n\nTiming...\n\n-   This section should be written before the "Tasks" section.\n-   Updates to this section should be limited to changes were the information is no longer accurate\n-   Updates should _not_ include more detail as implementation progresses (this is not intended to be a living architectural document; it is a "throw away" high-level planning document)\n\n                    '})})]}):null}function d(e){let{value:t=""}=e;const n=function(e){const t=[];let n=null;for(let s of e.trim().split("\n")){let e;if(e=s.match(/^Risk:(.+)$/)){let s={severity:e[1].trim(),description:"",mitigation:""};t.push(s),n=e=>{s.description+=e+"\n"}}else(e=s.match(/^(Mitigation:)\s*$/))?n=e=>{t[t.length-1].mitigation+=e+"\n"}:n(s)}return t}(t);return(0,l.jsxs)("table",{children:[(0,l.jsx)("thead",{children:(0,l.jsxs)("tr",{children:[(0,l.jsx)("th",{children:"Severity"}),(0,l.jsx)("th",{children:"Description"}),(0,l.jsx)("th",{children:"Mitigation"})]})}),(0,l.jsx)("tbody",{children:n.map(((e,t)=>(0,l.jsxs)("tr",{children:[(0,l.jsx)("td",{style:{color:"#937324",fontWeight:600},children:e.severity}),(0,l.jsx)("td",{style:{fontSize:"90%"},children:e.description}),(0,l.jsx)("td",{style:{fontSize:"90%"},children:e.mitigation})]},t)))})]})}function c(e){let{value:t=""}=e;const n=t.trim().split("\n").map((e=>e.trim())).filter((e=>!!e)),s=n.map((e=>{let[t,n]=e.split("|").map((e=>e.trim()));return{name:t,value:n,color:(s=t,{status:"#FC8",milestone:"#7BE",category:"#c7e6c7"}[s]??"#ccc")};var s}));return(0,l.jsx)(h,{labels:s})}function h(e){let{labels:t}=e;return(0,l.jsx)("div",{style:{margin:"0 0 32px",display:"flex",flexDirection:"row",gap:8,alignItems:"center"},children:t.map(((e,t)=>(0,l.jsx)(u,{label:e},t)))})}function u(e){let{label:t}=e;return(0,l.jsxs)("div",{style:{fontSize:"80%",fontWeight:600,color:"#555",letterSpacing:-.5,backgroundColor:t.color,display:"flex",flexDirection:"row",alignItems:"center",gap:4,padding:0,borderRadius:8,maxHeight:"1.6em"},children:[(0,l.jsx)("div",{style:{padding:"0 0 0 4px"},children:t.name}),(0,l.jsx)("div",{style:{padding:"0 8px 0 4px",backgroundColor:"rgba(255, 255, 255, 0.6)"},children:t.value})]})}function m(e){let{id:t,title:n,children:i}=e;const[r,o]=s.useState(null),[a,d]=s.useState(!1);return s.useEffect((()=>{const e=async()=>{let n=document.getElementById(t);if(n){const e=n.getBoundingClientRect();o({rect:e,top:n.offsetTop,left:n.offsetLeft})}setTimeout(e,1250)};setTimeout(e,250)}),[]),r?(0,l.jsxs)("div",{children:[(0,l.jsx)("div",{style:{position:"absolute",left:r.left+r.rect.width-32,top:r.top,cursor:"pointer"},onClick:e=>{e.stopPropagation(),e.preventDefault(),d(!a)},children:(0,l.jsx)("div",{style:{display:"flex",background:"#9bb0f5",color:"#FFF",width:16,height:16,borderRadius:8,justifyContent:"center",alignItems:"center",textAlign:"center",fontFamily:"serif",fontWeight:900,fontSize:14,fontStyle:"italic",opacity:.5},children:(0,l.jsx)("div",{children:"i"})})}),a&&(0,l.jsx)("div",{style:{position:"fixed",left:0,top:0,right:0,bottom:0,background:"rgba(0,0,0,0.5)",display:"flex",justifyContent:"center",alignItems:"center",zIndex:99},onClick:()=>d(!1)}),a&&(0,l.jsxs)("div",{style:{position:"absolute",left:r.left,width:r.rect.width,top:r.top,backgroundColor:"white",padding:32,borderRadius:16,zIndex:1e3,minHeight:"24rem"},children:[(0,l.jsx)("div",{style:{float:"right",color:"#555",fontSize:"90%",cursor:"pointer"},onClick:()=>d(!1),children:"close"}),n&&(0,l.jsx)("div",{style:{color:"rgb(10, 90, 182)",fontSize:"135%",borderBottom:"solid 1px #CCC",marginBottom:32,fontWeight:600,userSelect:"none"},children:n}),i]})]}):null}},6198:(e,t,n)=>{n.d(t,{Zf:()=>l,_V:()=>m});var s=n(6540),i=n(4848);function r(e,t){void 0===t&&(t={});let n,s={id:Math.floor(1e20*Math.random()).toString(36).substring(0,8).padStart(8,"0")+Math.floor(1e20*Math.random()).toString(36).substring(0,8).padStart(8,"0"),title:"",status:"todo",notes:"",children:[],collapsed:!0,milestone:"",category:"",tags:[]};for((n=e.match(/^\s*x\s+/))&&(s.status="done",e=e.substring(n[0].length)),(n=e.match(/^\s*\[ \]\s+/))&&(s.status="todo",e=e.substring(n[0].length)),(n=e.match(/^\s*\[x\]\s+/))&&(s.status="done",e=e.substring(n[0].length)),((n=e.match(/^\s*\[!\]\s+/))||(n=e.match(/^\s*\[WIP\]\s+/)))&&(s.status=.5,e=e.substring(n[0].length)),(n=e.match(/^\s*\[-?>\]\s+/))&&(s.status="defer",e=e.substring(n[0].length)),(n=e.match(/^\s*DEFER\s+/))&&(s.status="defer",e=e.substring(n[0].length)),(n=e.match(/^\s*WIP\s+/))&&(s.status=.5,e=e.substring(n[0].length)),(n=(e=e.trimStart()).match(/^(>\s+)/))&&(s.collapsed=!0,e=e.substring(n[1].length));n=e.match(/@([^@\s]+)/);)e=e.substring(0,n.index)+e.substring(n.index+n[0].length).trim(),n[1].startsWith("M:")?s.milestone=n[1].substring(2):n[1].startsWith("C:")?s.category=n[1].substring(2):s.tags.push(n[1]);return s.title=e,t.title&&(s.title=t.title),t.status&&(s.status=t.status),t.status&&(s.status=t.status),t.children&&(s.children=t.children),t.notes&&(s.notes=t.notes),s.notes=s.notes.trim().split("\n").map((e=>"."===e.trim()?"":e)).join("\n"),s}function o(e){const t={groups:[{name:"",rows:[]}],categories:[],milestones:[],tasks:[]};let n=[],s=null;const i=e.split("\n");let o=t.groups[t.groups.length-1],l=null;for(let a of i){let e;if(e=a.match(/^[^\s](.+)$/))if(e[0].startsWith("M:")){let t=e[0].substring(2).trim();l=t.length>0?t:null}else{let n=t.groups.find((t=>t.name===e[0].trim()));n||(n={name:e[0].trim(),rows:[]},t.groups.push(n),t.categories.push(e[0].trim())),o=n}else if(e=a.match(/^([\s]+)-(.+)$/)){let t=e[1].length,i=r(e[2]);l&&!i.milestone&&(i.milestone=l);let a=0,d=o.rows;for(;t>n[a];)d=d[d.length-1].children,a++;d.push(i),n[a]=t,s=i}else(e=a.match(/^([\s]+)([^-].+)$/))?s&&(s.notes+="\n"+e[2]):""===a.trim()?s&&(s.notes+="\n"):console.warn(a)}for(let r of t.groups){for(let e of r.rows)e.category||=r.name;t.tasks=t.tasks.concat(r.rows)}for(let r of t.tasks)r.milestone||(r.milestone=""),r.category||(r.category="Miscellaneous"),"done"===r.status&&""===r.milestone&&(r.milestone="Done");return t}function l(e){let{dataID:t,value:n}=e;const[r,l]=s.useState(null),[d,h]=s.useState(null);if(s.useEffect((()=>{if(t){const e=()=>{const n=document.querySelector(`.language-${t}`);if(!n)return void setTimeout(e,60);const s=n.innerText;h(o(s))};e()}else h(o(n))}),[]),!d)return null;const u=function(e,t){const n=e=>{for(let s of e){if(s.id===t)return s;if(s.children.length>0){let e=n(s.children);if(e)return e}}return null};for(let s of e.groups){let e=n(s.rows);if(e)return e}return null}(d,r);return(0,i.jsxs)("div",{children:[(0,i.jsx)("style",{children:"\n                div.my-table-class {\n                    display: flex;\n                    flex-direction: column;\n                    margin: 0;\n                    width: 100%;\n                    border-collapse: collapse;\n\n\n                    .group {\n                        display: flex;\n                        flex-direction: column;\n\n                        >.group-name {\n                            font-weight: normal;\n                            font-size: 75%;\n                            text-transform: uppercase;\n                        }\n                    }\n\n                    .row {\n                        display: flex;\n                        padding: 2px 4px 2px;\n                        margin: 0;\n                        margin-left: 0;\n                        align-items: center;\n\n                        .title {\n                            flex: 2 0 0;\n                        }\n                        .status {\n                            flex: 0 0 1.5rem;\n                        }\n\n\n                    }\n                    .row:hover {\n                        background: #ecedb9 !important;\n\n                        .expand-arrow {\n                            opacity: 1;\n                        }\n                    }\n\n                    .expand-arrow {\n                        font-size: 12px;\n                        opacity: 0.05;\n                        color: #888;\n                        cursor: pointer;\n                        margin-right: 4px;\n                    }\n                }\n            "}),(0,i.jsxs)("div",{style:{display:"flex",flexDirection:"row",padding:"16px 16px",borderRadius:8,border:"solid 1px #CCC",margin:"16px 0"},children:[(0,i.jsx)("div",{className:"my-table-class",style:{flex:"2 0 0"},children:(0,i.jsx)(a,{milestones:d.milestones,categories:d.categories,tasks:d.tasks,activeID:r,setActiveID:l})}),(0,i.jsx)("div",{style:{flex:"1 0 0"},children:(0,i.jsx)(c,{item:u})})]})]})}function a(e){let{milestones:t,categories:n,tasks:s,activeID:r,setActiveID:o}=e;const l=e=>e.toLowerCase().replace(/[^a-z0-9]/g,"").trim();for(let i of s){i.milestone||="",t.find((e=>l(e)===l(i.milestone)))||t.push(i.milestone)}return t=[...new Set(t)],t=t.sort(((e,t)=>(()=>{let n=["","Backlog","Done"],s=n.indexOf(e),i=n.indexOf(t);return-1===s?-1===i?e.localeCompare(t):-1:-1===i?1:-1})())),(0,i.jsx)(i.Fragment,{children:t.map(((e,a)=>(0,i.jsxs)("div",{style:{display:"flex",flexDirection:"column"},children:[t.length>1&&(0,i.jsx)("div",{style:{},children:(0,i.jsx)("strong",{children:e.replace(/^[0-9]+\s+/,"")||"Backlog"})}),(()=>{const a=s.filter((t=>l(t.milestone)===l(e)));return 0===a.length?null:(0,i.jsx)("div",{style:{marginLeft:t.length>1?16:0},children:(0,i.jsx)(d,{categories:n,tasks:a,activeID:r,setActiveID:o})})})()]},a)))})}function d(e){let{categories:t,tasks:n,activeID:s,setActiveID:r}=e;const o=e=>e.toLowerCase().replace(/[^a-z0-9]/g,"");for(let i of n){t.find((e=>o(e)===o(i.category)))||t.push(i.category)}return(0,i.jsx)(i.Fragment,{children:t.map(((e,l)=>{let a=n.filter((t=>o(t.category)===o(e)));return a.length>0?(0,i.jsxs)("div",{className:"group",children:[Object.keys(t).length>1&&(0,i.jsx)("div",{className:"group-name",children:e||"Backlog"}),u(a).map(((e,t)=>(0,i.jsx)(h,{options:{showCategory:!1,showMilestone:!1},row:e,activeID:s,setActiveID:r},e.id)))]},l):null}))})}function c(e){let{item:t}=e;const n=(t?.notes??"").split("\n\n").map((e=>e.trim()));return t&&(0,i.jsxs)("div",{style:{fontSize:"85%"},children:[(0,i.jsx)("div",{style:{borderBottom:"solid 1px #CCC",marginBottom:16},children:"Description"}),(0,i.jsx)("div",{style:{lineHeight:1.2},children:n.map(((e,t)=>(0,i.jsx)("div",{style:{marginBottom:8},children:e},t)))})]})}function h(e){let{row:t,activeID:n,setActiveID:r,depth:o=0,options:l={showCategory:!0}}=e;const[a,d]=function(e,t){const[n,i]=s.useState((()=>{try{const n=localStorage.getItem(e);return null!==n?JSON.parse(n):t}catch(n){return console.error("Error loading data from local storage:",n),t}}));return[n,t=>{try{const s=t instanceof Function?t(n):t;i(s),localStorage.setItem(e,JSON.stringify(s))}catch(s){console.error("Error saving data to local storage:",s)}}]}(`v3:${t.title}`,!t.collapsed);l=Object.assign({showCategory:!0,showMilestone:!0},l);let c=t.status;return"todo"===c&&t.children.some((e=>"done"===e.status||"number"==typeof e.status&&e.status>0))&&(c=.5),(0,i.jsxs)("div",{children:[(0,i.jsxs)("div",{className:"row",style:{color:"defer"===c?"#AAA":"inherit",backgroundColor:t.id===n?"#4d0bc011":"inherit",borderRadius:10,fontSize:100-Math.min(10*o,50)+"%"},onClick:()=>r(t.id),children:[(0,i.jsx)("div",{className:"expand-arrow",style:{opacity:t.children.length>0?.5:.05,transform:a?"rotate(90deg)":"none"},onClick:()=>d(!a),children:"\u25b6"}),(0,i.jsx)("div",{className:"status",children:"done"===c?(0,i.jsx)("div",{style:{width:12,height:12,background:"#06a306",borderRadius:"50%"}}):"number"==typeof c&&c<1?(0,i.jsx)("div",{style:{width:12,height:12,border:"solid 1px #555",borderRadius:"50%",background:"conic-gradient(\n                                    #fff 0% 50%, \n                                    #06a306 50% 100% \n                                  )"}}):"todo"===c?(0,i.jsx)("div",{style:{width:12,height:12,border:"solid 1px #555",borderRadius:"50%"}}):"defer"===c?(0,i.jsx)("div",{style:{fontSize:12},children:"\u2192"}):c}),(0,i.jsx)("div",{className:"title",style:{textDecoration:"defer"===t.status?"line-through":"none",margin:"2px 0 0px",display:"flex",flexDirection:"column"},children:(0,i.jsxs)("div",{style:{display:"flex",flexDirection:"row",alignItems:"center"},children:[(0,i.jsx)("div",{style:{lineHeight:1.05},children:t.title}),t.notes?.trim().length>0&&(0,i.jsx)("div",{style:{fontSize:10,filter:"grayscale(100%)",opacity:.75,paddingLeft:4},children:"\ud83d\uddd2"})]})})]}),(0,i.jsxs)("div",{style:{marginLeft:58,fontSize:"70%",lineHeight:1,minHeight:6,opacity:.5,marginTop:-2},children:[l.showMilestone&&t.milestone&&(0,i.jsx)("span",{style:{display:"inline-block",color:"#a51f1f",padding:"0px 2px",margin:"0px 4px 0 0"},children:t.milestone}),l.showCategory&&t.category&&(0,i.jsx)("span",{style:{display:"inline-block",color:"#a56d1f",padding:"0px 2px",margin:"0px 4px 0 0"},children:t.category}),t.tags.length>0&&t.tags.map(((e,t)=>(0,i.jsx)("span",{style:{display:"inline-block",color:"#888",padding:"0px 2px",margin:"0px 4px 0 0"},children:e},t)))]}),t.children.length>0&&a&&(0,i.jsx)("div",{style:{marginLeft:32},children:u(t.children).map(((e,t)=>(0,i.jsx)(h,{row:e,activeID:n,setActiveID:r,depth:o+1,options:l},t)))})]})}function u(e){return e.sort(((e,t)=>{const n=e=>{let t=e.status;return"number"==typeof t?t=Math.max(0,Math.min(1,t)):"string"==typeof t&&(t={todo:0,done:3,defer:4}[t]??t),"number"!=typeof t&&(t=0),0==t&&(t=2),t};return n(e)-n(t)}))}function m(e){let{src:t,brightness:n=1,children:s}=e;return(0,i.jsxs)("div",{style:{textAlign:"center"},children:[(0,i.jsx)("img",{style:{filter:`brightness(${n})`},src:t}),(0,i.jsx)("small",{children:(0,i.jsx)("em",{children:s})})]})}},7826:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/rain-card-00-f6986dcb4bf3a5e203c2d2c1dd0eef23.png"}}]);