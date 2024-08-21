"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4884],{9353:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>r,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>d,toc:()=>l});var a=s(4848),t=s(8453);const i={tags:["MagicaVoxel","wgsl"]},o="MagicaVoxel VOX loading",d={permalink:"/blog/2024/08/17/index",editUrl:"https://github.com/raiment-studios/monorepo/tree/main/projects/raiment-studios/web2/blog/2024-08-17/index.md",source:"@site/blog/2024-08-17/index.md",title:"MagicaVoxel VOX loading",description:"Added support for loading MagicaVoxel VOX models. This relies almost entirely on the work of others as the model below was created by Mike Judge and the VOX loading code comes from jgraef's vox-format crate. The only real addition to the Snowfall code was to add a YAML descriptor for VOX models and to write a quick translation from the vox-format format to the existing internal voxel format.",date:"2024-08-17T00:00:00.000Z",tags:[{inline:!0,label:"MagicaVoxel",permalink:"/blog/tags/magica-voxel"},{inline:!0,label:"wgsl",permalink:"/blog/tags/wgsl"}],readingTime:2.835,hasTruncateMarker:!1,authors:[],frontMatter:{tags:["MagicaVoxel","wgsl"]},unlisted:!1,prevItem:{title:'Rust generator "scripts"',permalink:"/blog/2024/08/18/p2"},nextItem:{title:"Incremental progress",permalink:"/blog/2024/08/16/index"}},r={authorsImageUrls:[]},l=[{value:"From the todo list...",id:"from-the-todo-list",level:4},{value:"World coordinate based voxel shading/darkening",id:"world-coordinate-based-voxel-shadingdarkening",level:4}];function h(e){const n={a:"a",admonition:"admonition",code:"code",h4:"h4",img:"img",input:"input",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.p,{children:["Added support for loading ",(0,a.jsx)(n.a,{href:"https://ephtracy.github.io/",children:"MagicaVoxel VOX"})," models. This relies almost entirely on the work of others as the model below was created by ",(0,a.jsx)(n.a,{href:"https://github.com/mikelovesrobots/mmmm",children:"Mike Judge"})," and the VOX loading code comes from ",(0,a.jsx)(n.a,{href:"https://github.com/jgraef",children:"jgraef's"})," ",(0,a.jsx)(n.a,{href:"https://github.com/jgraef/vox-format",children:"vox-format"})," crate. The only real addition to the Snowfall code was to add a YAML descriptor for VOX models and to write a quick translation from the ",(0,a.jsx)(n.code,{children:"vox-format"})," format to the existing internal voxel format."]}),"\n",(0,a.jsx)(n.h4,{id:"from-the-todo-list",children:"From the todo list..."}),"\n",(0,a.jsxs)(n.ul,{className:"contains-task-list",children:["\n",(0,a.jsxs)(n.li,{className:"task-list-item",children:[(0,a.jsx)(n.input,{type:"checkbox",checked:!0,disabled:!0})," ","Support loading MagicaVoxel VOX files"]}),"\n",(0,a.jsxs)(n.li,{className:"task-list-item",children:[(0,a.jsx)(n.input,{type:"checkbox",checked:!0,disabled:!0})," ","Display attribution info as the models are loaded"]}),"\n",(0,a.jsxs)(n.li,{className:"task-list-item",children:[(0,a.jsx)(n.input,{type:"checkbox",checked:!0,disabled:!0})," ","Add voxel colors rather than just the normal-based shader"]}),"\n"]}),"\n",(0,a.jsx)("div",{style:{marginBottom:-48},children:(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"alt text",src:s(678).A+"",width:"912",height:"740"})})}),"\n",(0,a.jsx)(n.admonition,{title:"Credits",type:"note",children:(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["The ",(0,a.jsx)(n.a,{href:"https://github.com/jgraef/vox-format",children:"vox-format"})," crate for the VOX loading"]}),"\n",(0,a.jsxs)(n.li,{children:["Mike Judge's ",(0,a.jsx)(n.a,{href:"https://github.com/mikelovesrobots/mmmm",children:"Mini Mike's Metro Minis"})," for the model in the screenshot"]}),"\n"]})}),"\n",(0,a.jsx)(n.h4,{id:"world-coordinate-based-voxel-shadingdarkening",children:"World coordinate based voxel shading/darkening"}),"\n",(0,a.jsx)(n.p,{children:"Note that the shader is randomly darkening each voxel a bit based on it's world coordinate to make for an (intentionally) less uniformly colored look to the final render."}),"\n",(0,a.jsxs)(n.p,{children:["Note that the array look-ups need to be expanded out as ",(0,a.jsx)(n.code,{children:"if-else"})," branches as WGSL rejects attempts to index using a non-const value (i.e. ",(0,a.jsx)(n.code,{children:"return shade_x[xi] + shade_y[yi] + shade_z[zi];"})," does not compile)."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-rust",children:"const shade_x = array<f32, 7>(0.05, 0.18, 0.10, 0.96, 0.46, 0.75, 0.55);\nconst shade_y = array<f32, 7>(0.52, 0.52, 0.34, 0.03, 0.38, 0.01, 0.66);\nconst shade_z = array<f32, 7>(0.33, 0.60, 0.80, 0.30, 0.16, 0.85, 0.13);\n\n// Shade the color based on the world coordinate grid position\n//\n// This gives a subtle variation to each voxel based on world position\n// so that there's less uniformity to everything.  Subjectively produces\n// a better looking result.\n//\n// Returns a [0-1] value.\n//\nfn shade_world_coord(world_coord : vec3<f32>) -> f32 {\n    var grid_wc = vec3<i32>(floor(world_coord));\n    var ix = (1 * grid_wc.x + 13 * grid_wc.y + 31 * grid_wc.z) % 7;\n    var iy = (1 * grid_wc.y + 17 * grid_wc.z + 43 * grid_wc.x) % 7;\n    var iz = (1 * grid_wc.z + 37 * grid_wc.x + 3 * grid_wc.y) % 7;\n\n\n    // The shade arrays are [0-1] in range, so shade is [0-3]\n    var shade = 0.0;\n\n    if ix == 0 {\n        shade += shade_x[0];\n    } else if ix == 1 {\n        shade += shade_x[1];\n    } else if ix == 2 {\n        shade += shade_x[2];\n    } else if ix == 3 {\n        shade += shade_x[3];\n    } else if ix == 4 {\n        shade += shade_x[4];\n    } else if ix == 5 {\n        shade += shade_x[5];\n    } else if ix == 6 {\n        shade += shade_x[6];\n    }\n\n    if iy == 0 {\n        shade += shade_y[0];\n    } else if iy == 1 {\n        shade += shade_y[1];\n    } else if iy == 2 {\n        shade += shade_y[2];\n    } else if iy == 3 {\n        shade += shade_y[3];\n    } else if iy == 4 {\n        shade += shade_y[4];\n    } else if iy == 5 {\n        shade += shade_y[5];\n    } else if iy == 6 {\n        shade += shade_y[6];\n    }\n\n    if iz == 0 {\n        shade += shade_z[0];\n    } else if iz == 1 {\n        shade += shade_z[1];\n    } else if iz == 2 {\n        shade += shade_z[2];\n    } else if iz == 3 {\n        shade += shade_z[3];\n    } else if iz == 4 {\n        shade += shade_z[4];\n    } else if iz == 5 {\n        shade += shade_z[5];\n    } else if iz == 6 {\n        shade += shade_z[6];\n    }\n\n    return shade/3.0;\n}\n\n"})})]})}function c(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},678:(e,n,s)=>{s.d(n,{A:()=>a});const a=s.p+"assets/images/image-1-4720e79b96ec90372d4e06c3c405a60f.png"},8453:(e,n,s)=>{s.d(n,{R:()=>o,x:()=>d});var a=s(6540);const t={},i=a.createContext(t);function o(e){const n=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),a.createElement(i.Provider,{value:n},e.children)}}}]);