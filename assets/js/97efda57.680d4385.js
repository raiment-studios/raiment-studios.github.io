"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5807],{2437:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var s=n(4848),o=n(8453),r=n(6198);const i={},a="Snowscape",l={id:"snowfall/roadmap/snowscape",title:"Snowscape",description:"The Snowscape engine (which this roadmap is primarily focused on at the moment) is a custom voxel rendering engine motivated by learning WGPU and Rust. Intended to be a voxel engine specifically for the requirements of Snowfall, not a general game engine (like Bevy, for example).",source:"@site/docs/snowfall/150-roadmap/151-snowscape.mdx",sourceDirName:"snowfall/150-roadmap",slug:"/snowfall/roadmap/snowscape",permalink:"/docs/snowfall/roadmap/snowscape",draft:!1,unlisted:!1,editUrl:"https://github.com/raiment-studios/monorepo/tree/main/projects/raiment-studios/web2/docs/snowfall/150-roadmap/151-snowscape.mdx",tags:[],version:"current",sidebarPosition:151,frontMatter:{},sidebar:"snowfallSidebar",previous:{title:"Design Doc",permalink:"/docs/snowfall/"},next:{title:"Snowfield",permalink:"/docs/snowfall/roadmap/snowfield"}},c={},d=[{value:"Roadmap",id:"roadmap",level:3}];function h(e){const t={code:"code",h1:"h1",h3:"h3",header:"header",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"snowscape",children:"Snowscape"})}),"\n",(0,s.jsx)(t.p,{children:"The Snowscape engine (which this roadmap is primarily focused on at the moment) is a custom voxel rendering engine motivated by learning WGPU and Rust. Intended to be a voxel engine specifically for the requirements of Snowfall, not a general game engine (like Bevy, for example)."}),"\n",(0,s.jsx)(t.h3,{id:"roadmap",children:"Roadmap"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-data-v0_0",children:"\nM:v0.0\nEngine\n    - [ ] Add voxel sprites @C:rendering\n    - [ ] Add basic gravity @C:engine\n        - [x] Add basic gravity to the camera only\n        - [x] Reset force on each frame\n        - [x] Check and clamp movement\n        - [ ] Ability to walk up slopes\n        - [ ] Bug: passing through solid voxels\n    - [ ] Add particle system\n        - [ ] Test basic gravity and sequencing\n    - [ ] WASM canvas test\n        https://rustwasm.github.io/wasm-bindgen/examples/2d-canvas.html\n\nM:v0.1\n    - [ ] Add modifiable terrain\n        - [ ] Move voxel attachment to be an ID\n        - [ ] Page chunks in/out\n        - [ ] Click raycast to determine what voxel is clicked\n        - [ ] Regenerate chunk model on change\n    - [ ] Prototype sound @C:engine\n\nM:\nContent\n    - [x] Voxel house\n    - [x] Terrain with sand, grass, and snow\n        - x Use scriptlib described below\n\nContent support\n    - [x] Generate models from TypeScript/JavaScript\n        - [x] With arbitrary JSON parameters\n        - DEFER Cache results based on source+parameters hash\n    - [!] Generate models from Rust 'scripts'\n        - [x] Setup 'scriptlib' for scripts to link to\n        - [x] Support noise functions in scriptlib\n        - [x] Add color to generator script\n        - [x] Add bitcode support (for performance)\n\n            Use a binary format for transfering lots of data (rather than YAML).\n\n            Use some sort of structured communication rather than STDOUT? Or at\n            least test if that is needed or if STDOUT with a structured binary\n            format would be sufficient.\n\n        - [ ] Make VoxelBuilder utility class\n            - [ ] Cursor\n        - [ ] Generator output format that's exclusively for generators\n            Binary with meta fields to specify the format of the data.\n\n            Optional fields, etc.\n\n    - [x] Load VOX models\n    - [x] Hot reloading of assets\n\nEngine\n    - [x] Decompose State object\n    - [x] Decouple input from Actions\n    - [x] Basic camera controls\n    - [ ] Procedural region generation\n    - [>] Modifiable voxel models\n    - [>] Basic physics\n    - [ ] Chunking\n\nRendering\n    - x Shade voxels based on world coord\n    - Add FPS counter\n\nMisc\n    - [ ] Add dynamic villages @M:v0.5 @C:gameplay\n        - [ ] Set of houses @C:content\n            - [ ] Add house 1\n            - [ ] Add house 2\n            - [ ] Add house 3\n        - [ ] Blend houses with terrain @novel\n    - [ ] Add UI\n    - [ ] Add intro screen\n    - [ ] Add ability to save the game\n    - [ ] Add Farmer NPC @npc\n          A Farmer NPC reserves a plot of land with room for a\n          rectangular field and a farmhouse. They flatten the\n          terrain for both. They construct the house and convert\n          the terrain to dirt.  They put a fence around the field.\n          They plant seeds in the dirt. They then become a resident\n          who ends the farmhouse and exits every once in a while\n          to maintain the field (flatten terrain, repair the fence,\n          pick crops, plant seeds, etc).\n    - [ ] Document that NPCs do not age @documentation\n          Due to the game's time scale, there's no need for NPCs to\n          age. This reduces the complexity of the game and tightens\n          the scope.\n    - [ ] Lighting\n    - [ ] Shadows\n    - [ ] Scripting\n    - [ ] Dependency list -> dependency graph\n    - [ ] Better script data exchange\n\n"})}),"\n",(0,s.jsx)(r.Zf,{dataID:"data-v0_0"})]})}function u(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},6198:(e,t,n)=>{n.d(t,{Zf:()=>a,_V:()=>m});var s=n(6540),o=n(4848);function r(e,t){void 0===t&&(t={});let n,s={id:Math.floor(1e20*Math.random()).toString(36).substring(0,8).padStart(8,"0")+Math.floor(1e20*Math.random()).toString(36).substring(0,8).padStart(8,"0"),title:"",status:"todo",notes:"",children:[],collapsed:!0,milestone:"",category:"",tags:[]};for((n=e.match(/^\s*x\s+/))&&(s.status="done",e=e.substring(n[0].length)),(n=e.match(/^\s*\[ \]\s+/))&&(s.status="todo",e=e.substring(n[0].length)),(n=e.match(/^\s*\[x\]\s+/))&&(s.status="done",e=e.substring(n[0].length)),((n=e.match(/^\s*\[!\]\s+/))||(n=e.match(/^\s*\[WIP\]\s+/)))&&(s.status=.5,e=e.substring(n[0].length)),(n=e.match(/^\s*\[-?>\]\s+/))&&(s.status="defer",e=e.substring(n[0].length)),(n=e.match(/^\s*DEFER\s+/))&&(s.status="defer",e=e.substring(n[0].length)),(n=e.match(/^\s*WIP\s+/))&&(s.status=.5,e=e.substring(n[0].length)),(n=(e=e.trimStart()).match(/^(>\s+)/))&&(s.collapsed=!0,e=e.substring(n[1].length));n=e.match(/@([^@\s]+)/);)e=e.substring(0,n.index)+e.substring(n.index+n[0].length).trim(),n[1].startsWith("M:")?s.milestone=n[1].substring(2):n[1].startsWith("C:")?s.category=n[1].substring(2):s.tags.push(n[1]);return s.title=e,t.title&&(s.title=t.title),t.status&&(s.status=t.status),t.status&&(s.status=t.status),t.children&&(s.children=t.children),t.notes&&(s.notes=t.notes),s.notes=s.notes.trim().split("\n").map((e=>"."===e.trim()?"":e)).join("\n"),s}function i(e){const t={groups:[{name:"",rows:[]}],categories:[],milestones:[],tasks:[]};let n=[],s=null;const o=e.split("\n");let i=t.groups[t.groups.length-1],a=null;for(let l of o){let e;if(e=l.match(/^[^\s](.+)$/))if(e[0].startsWith("M:")){let t=e[0].substring(2).trim();a=t.length>0?t:null}else{let n=t.groups.find((t=>t.name===e[0].trim()));n||(n={name:e[0].trim(),rows:[]},t.groups.push(n),t.categories.push(e[0].trim())),i=n}else if(e=l.match(/^([\s]+)-(.+)$/)){let t=e[1].length,o=r(e[2]);a&&!o.milestone&&(o.milestone=a);let l=0,c=i.rows;for(;t>n[l];)c=c[c.length-1].children,l++;c.push(o),n[l]=t,s=o}else(e=l.match(/^([\s]+)([^-].+)$/))?s&&(s.notes+="\n"+e[2]):""===l.trim()?s&&(s.notes+="\n"):console.warn(l)}for(let r of t.groups){for(let e of r.rows)e.category||=r.name;t.tasks=t.tasks.concat(r.rows)}for(let r of t.tasks)r.milestone||(r.milestone=""),r.category||(r.category="Miscellaneous"),"done"===r.status&&""===r.milestone&&(r.milestone="Done");return t}function a(e){let{dataID:t,value:n}=e;const[r,a]=s.useState(null),[c,h]=s.useState(null);if(s.useEffect((()=>{if(t){const e=()=>{const n=document.querySelector(`.language-${t}`);if(!n)return void setTimeout(e,60);const s=n.innerText;h(i(s))};e()}else h(i(n))}),[]),!c)return null;const u=function(e,t){const n=e=>{for(let s of e){if(s.id===t)return s;if(s.children.length>0){let e=n(s.children);if(e)return e}}return null};for(let s of e.groups){let e=n(s.rows);if(e)return e}return null}(c,r);return(0,o.jsxs)("div",{children:[(0,o.jsx)("style",{children:"\n                div.my-table-class {\n                    display: flex;\n                    flex-direction: column;\n                    margin: 0;\n                    width: 100%;\n                    border-collapse: collapse;\n\n\n                    .group {\n                        display: flex;\n                        flex-direction: column;\n\n                        >.group-name {\n                            font-weight: normal;\n                            font-size: 75%;\n                            text-transform: uppercase;\n                        }\n                    }\n\n                    .row {\n                        display: flex;\n                        padding: 2px 4px 2px;\n                        margin: 0;\n                        margin-left: 0;\n                        align-items: center;\n\n                        .title {\n                            flex: 2 0 0;\n                        }\n                        .status {\n                            flex: 0 0 1.5rem;\n                        }\n\n\n                    }\n                    .row:hover {\n                        background: #ecedb9 !important;\n\n                        .expand-arrow {\n                            opacity: 1;\n                        }\n                    }\n\n                    .expand-arrow {\n                        font-size: 12px;\n                        opacity: 0.05;\n                        color: #888;\n                        cursor: pointer;\n                        margin-right: 4px;\n                    }\n                }\n            "}),(0,o.jsxs)("div",{style:{display:"flex",flexDirection:"row",padding:"16px 16px",borderRadius:8,border:"solid 1px #CCC",margin:"16px 0"},children:[(0,o.jsx)("div",{className:"my-table-class",style:{flex:"2 0 0"},children:(0,o.jsx)(l,{milestones:c.milestones,categories:c.categories,tasks:c.tasks,activeID:r,setActiveID:a})}),(0,o.jsx)("div",{style:{flex:"1 0 0"},children:(0,o.jsx)(d,{item:u})})]})]})}function l(e){let{milestones:t,categories:n,tasks:s,activeID:r,setActiveID:i}=e;const a=e=>e.toLowerCase().replace(/[^a-z0-9]/g,"").trim();for(let o of s){o.milestone||="",t.find((e=>a(e)===a(o.milestone)))||t.push(o.milestone)}return t=[...new Set(t)],t=t.sort(((e,t)=>(()=>{let n=["","Backlog","Done"],s=n.indexOf(e),o=n.indexOf(t);return-1===s?-1===o?e.localeCompare(t):-1:-1===o?1:-1})())),(0,o.jsx)(o.Fragment,{children:t.map(((e,l)=>(0,o.jsxs)("div",{style:{display:"flex",flexDirection:"column"},children:[t.length>1&&(0,o.jsx)("div",{style:{},children:(0,o.jsx)("strong",{children:e.replace(/^[0-9]+\s+/,"")||"Backlog"})}),(()=>{const l=s.filter((t=>a(t.milestone)===a(e)));return 0===l.length?null:(0,o.jsx)("div",{style:{marginLeft:t.length>1?16:0},children:(0,o.jsx)(c,{categories:n,tasks:l,activeID:r,setActiveID:i})})})()]},l)))})}function c(e){let{categories:t,tasks:n,activeID:s,setActiveID:r}=e;const i=e=>e.toLowerCase().replace(/[^a-z0-9]/g,"");for(let o of n){t.find((e=>i(e)===i(o.category)))||t.push(o.category)}return(0,o.jsx)(o.Fragment,{children:t.map(((e,a)=>{let l=n.filter((t=>i(t.category)===i(e)));return l.length>0?(0,o.jsxs)("div",{className:"group",children:[Object.keys(t).length>1&&(0,o.jsx)("div",{className:"group-name",children:e||"Backlog"}),u(l).map(((e,t)=>(0,o.jsx)(h,{options:{showCategory:!1,showMilestone:!1},row:e,activeID:s,setActiveID:r},e.id)))]},a):null}))})}function d(e){let{item:t}=e;const n=(t?.notes??"").split("\n\n").map((e=>e.trim()));return t&&(0,o.jsxs)("div",{style:{fontSize:"85%"},children:[(0,o.jsx)("div",{style:{borderBottom:"solid 1px #CCC",marginBottom:16},children:"Description"}),(0,o.jsx)("div",{style:{lineHeight:1.2},children:n.map(((e,t)=>(0,o.jsx)("div",{style:{marginBottom:8},children:e},t)))})]})}function h(e){let{row:t,activeID:n,setActiveID:r,depth:i=0,options:a={showCategory:!0}}=e;const[l,c]=function(e,t){const[n,o]=s.useState((()=>{try{const n=localStorage.getItem(e);return null!==n?JSON.parse(n):t}catch(n){return console.error("Error loading data from local storage:",n),t}}));return[n,t=>{try{const s=t instanceof Function?t(n):t;o(s),localStorage.setItem(e,JSON.stringify(s))}catch(s){console.error("Error saving data to local storage:",s)}}]}(`v3:${t.title}`,!t.collapsed);a=Object.assign({showCategory:!0,showMilestone:!0},a);let d=t.status;return"todo"===d&&t.children.some((e=>"done"===e.status||"number"==typeof e.status&&e.status>0))&&(d=.5),(0,o.jsxs)("div",{children:[(0,o.jsxs)("div",{className:"row",style:{color:"defer"===d?"#AAA":"inherit",backgroundColor:t.id===n?"#4d0bc011":"inherit",borderRadius:10,fontSize:100-Math.min(10*i,50)+"%"},onClick:()=>r(t.id),children:[(0,o.jsx)("div",{className:"expand-arrow",style:{opacity:t.children.length>0?.5:.05,transform:l?"rotate(90deg)":"none"},onClick:()=>c(!l),children:"\u25b6"}),(0,o.jsx)("div",{className:"status",children:"done"===d?(0,o.jsx)("div",{style:{width:12,height:12,background:"#06a306",borderRadius:"50%"}}):"number"==typeof d&&d<1?(0,o.jsx)("div",{style:{width:12,height:12,border:"solid 1px #555",borderRadius:"50%",background:"conic-gradient(\n                                    #fff 0% 50%, \n                                    #06a306 50% 100% \n                                  )"}}):"todo"===d?(0,o.jsx)("div",{style:{width:12,height:12,border:"solid 1px #555",borderRadius:"50%"}}):"defer"===d?(0,o.jsx)("div",{style:{fontSize:12},children:"\u2192"}):d}),(0,o.jsx)("div",{className:"title",style:{textDecoration:"defer"===t.status?"line-through":"none",margin:"2px 0 0px",display:"flex",flexDirection:"column"},children:(0,o.jsxs)("div",{style:{display:"flex",flexDirection:"row",alignItems:"center"},children:[(0,o.jsx)("div",{style:{lineHeight:1.05},children:t.title}),t.notes?.trim().length>0&&(0,o.jsx)("div",{style:{fontSize:10,filter:"grayscale(100%)",opacity:.75,paddingLeft:4},children:"\ud83d\uddd2"})]})})]}),(0,o.jsxs)("div",{style:{marginLeft:58,fontSize:"70%",lineHeight:1,minHeight:6,opacity:.5,marginTop:-2},children:[a.showMilestone&&t.milestone&&(0,o.jsx)("span",{style:{display:"inline-block",color:"#a51f1f",padding:"0px 2px",margin:"0px 4px 0 0"},children:t.milestone}),a.showCategory&&t.category&&(0,o.jsx)("span",{style:{display:"inline-block",color:"#a56d1f",padding:"0px 2px",margin:"0px 4px 0 0"},children:t.category}),t.tags.length>0&&t.tags.map(((e,t)=>(0,o.jsx)("span",{style:{display:"inline-block",color:"#888",padding:"0px 2px",margin:"0px 4px 0 0"},children:e},t)))]}),t.children.length>0&&l&&(0,o.jsx)("div",{style:{marginLeft:32},children:u(t.children).map(((e,t)=>(0,o.jsx)(h,{row:e,activeID:n,setActiveID:r,depth:i+1,options:a},t)))})]})}function u(e){return e.sort(((e,t)=>{const n=e=>{let t=e.status;return"number"==typeof t?t=Math.max(0,Math.min(1,t)):"string"==typeof t&&(t={todo:0,done:3,defer:4}[t]??t),"number"!=typeof t&&(t=0),0==t&&(t=2),t};return n(e)-n(t)}))}function m(e){let{src:t,brightness:n=1,children:s}=e;return(0,o.jsxs)("div",{style:{textAlign:"center"},children:[(0,o.jsx)("img",{style:{filter:`brightness(${n})`},src:t}),(0,o.jsx)("small",{children:(0,o.jsx)("em",{children:s})})]})}},8453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>a});var s=n(6540);const o={},r=s.createContext(o);function i(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);