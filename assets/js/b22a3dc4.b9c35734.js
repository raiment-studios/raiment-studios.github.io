"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2924],{4552:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>r,toc:()=>h});var o=n(4848),s=n(8453);const a={tags:["voxels","wpgu","render-pass"]},i="Voxel shader",r={permalink:"/blog/2024/09/04/index",editUrl:"https://github.com/raiment-studios/monorepo/tree/main/projects/raiment-studios/web2/blog/2024-09-04/index.md",source:"@site/blog/2024-09-04/index.md",title:"Voxel shader",description:"Rewrote the WGPU render pass for rendering the voxels to use an instance buffer than generates 36 vertices per instance (i.e. vertices for the 6 \\* 2 = 12 triangles of a voxel).",date:"2024-09-04T00:00:00.000Z",tags:[{inline:!0,label:"voxels",permalink:"/blog/tags/voxels"},{inline:!0,label:"wpgu",permalink:"/blog/tags/wpgu"},{inline:!0,label:"render-pass",permalink:"/blog/tags/render-pass"}],readingTime:2.57,hasTruncateMarker:!1,authors:[],frontMatter:{tags:["voxels","wpgu","render-pass"]},unlisted:!1,prevItem:{title:"Bevy WASM rendering",permalink:"/blog/2024/10/29/2024-10-29/"},nextItem:{title:"Rain",permalink:"/blog/2024/09/03/index"}},l={authorsImageUrls:[]},h=[{value:"Rambling a bit on ways to render the voxels",id:"rambling-a-bit-on-ways-to-render-the-voxels",level:3}];function c(e){const t={admonition:"admonition",code:"code",h3:"h3",p:"p",strong:"strong",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.p,{children:"Rewrote the WGPU render pass for rendering the voxels to use an instance buffer than generates 36 vertices per instance (i.e. vertices for the 6 * 2 = 12 triangles of a voxel)."}),"\n",(0,o.jsx)("video",{loop:!0,controls:!0,muted:"true",autoplay:"true",src:"https://f004.backblazeb2.com/file/raiment-studios-media/2024/2024-09-04+18-02-37.mp4"}),"\n",(0,o.jsx)(t.p,{children:"I'm not sure if this is going to be the right approach, but I wanted to at least experiment with it."}),"\n",(0,o.jsx)(t.admonition,{title:"Not so fast!",type:"warning",children:(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.strong,{children:"Update:"})," naively swapping the instance-based rendering in for the more traditional triangle renderer was MUCH slower. I'm not confident this is going to be a better rendering method."]})}),"\n",(0,o.jsx)(t.h3,{id:"rambling-a-bit-on-ways-to-render-the-voxels",children:"Rambling a bit on ways to render the voxels"}),"\n",(0,o.jsxs)(t.p,{children:["The approach used in the above video is fairly naive. Each voxel is given a ",(0,o.jsx)(t.code,{children:"vec3<f32>"})," position and ",(0,o.jsx)(t.code,{children:"vec3<f32>"})," color. The buffer itself has one entry for each filled voxel. It is instanced 36 times to generate the full cube for each voxel. So 36 instances and and 6 x 32 = 192 bits = 24 bytes per instance."]}),"\n",(0,o.jsx)(t.p,{children:"Given that each voxel is a cube, this could be optimized to figure out the view direction and draw only the 3 faces that are oriented towards the camera. Thus we could reduce the instancing down to 3 quads = 12 vertices. It should be easy to do this as the shader can read the left or right face, top or bottom, and front or back: it can know which for each of those three by simply looking if the x, y, z of the view direction is positive or negative."}),"\n",(0,o.jsx)(t.p,{children:"Chunks are currently 32x32x8. Or 2^5 x 2^5 x 2^3. That means each chunk needs only 13-bits to storage the location of a voxel within a chunk. I could send each \"instances\" as 13-bits plus a vec3 translation for the whole chunk. Let's round that up to a u16 per voxel. I could make the chunks 16x16x8 and limit each chunk to a map of 128 values thus compacting both the position and color into a u16. For to leave room for flexibility, I'll assume a u32 could hold all the per-voxel info in a 32x32x8 chunk. That's 32k per chunk. Given 512MB reserved for chunks, that's 16k chunks. That's 128x128 horizontally assuming a depth of 1. If we assume we need an average chunk depth of 4 (which seems pretty agressive), that's 64x64 chunks. If we assume we load chunks equally in front and behind the player, that's a view distance of 32 chunks. Each chunk has 32 voxels and there are 4 voxels per meter, there's a view distance of 256 meters -- roughly a quarter of a kilometer."}),"\n",(0,o.jsx)(t.p,{children:"There's also a question of sending chunks where only the visible voxels are sent. This would be more efficient on the surface, as it saves a lot of space for mostly empty chunks. However, it makes modifications more difficult: the WGPU buffers are not resizable and there's not a fixed position-to-index mapping function. It might be nice to support both: optimize a chunk that hasn't been modified for a while and leave recently modified chunks as the full voxel space."})]})}function d(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>r});var o=n(6540);const s={},a=o.createContext(s);function i(e){const t=o.useContext(a);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),o.createElement(a.Provider,{value:t},e.children)}}}]);