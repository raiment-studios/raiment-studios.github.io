"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3150],{6083:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var i=t(4848),s=t(8453);const r={},a="Point rendering",o={permalink:"/blog/2024/09/01/index",editUrl:"https://github.com/raiment-studios/monorepo/tree/main/projects/raiment-studios/web2/blog/2024-09-01/index.md",source:"@site/blog/2024-09-01/index.md",title:"Point rendering",description:"I've started working on adding rain to Snowscape. This will require improving a lot of the very, very fledgling engine internals.",date:"2024-09-01T00:00:00.000Z",tags:[],readingTime:4.085,hasTruncateMarker:!1,authors:[],frontMatter:{},unlisted:!1,prevItem:{title:"Particles",permalink:"/blog/2024/09/02/index"},nextItem:{title:"Minimal React Frontend",permalink:"/blog/2024/08/31/p1"}},d={authorsImageUrls:[]},c=[{value:"WGPU isn&#39;t that easy",id:"wgpu-isnt-that-easy",level:2},{value:"First try...",id:"first-try",level:4},{value:"Vertex index vs. instance index",id:"vertex-index-vs-instance-index",level:4},{value:"The working code",id:"the-working-code",level:2}];function l(e){const n={a:"a",code:"code",em:"em",h2:"h2",h4:"h4",img:"img",p:"p",pre:"pre",strong:"strong",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:["I've started working on ",(0,i.jsx)(n.a,{href:"/docs/snowfall/roadmap/prds/rain-card",children:"adding rain"})," to Snowscape. This will require improving a lot of the very, very fledgling engine internals."]}),"\n",(0,i.jsx)(n.h2,{id:"wgpu-isnt-that-easy",children:"WGPU isn't that easy"}),"\n",(0,i.jsx)(n.p,{children:"I'm liking WGPU but it rarely seems that things Just Work (tm)..."}),"\n",(0,i.jsxs)(n.p,{children:["Adding point rendering - just drawing individual pixels - was trivial. Basically duplicate all the line rendering code and make a few minor tweaks to the primitive type data definitions (e.g. ",(0,i.jsx)(n.code,{children:"PointList"}),", not ",(0,i.jsx)(n.code,{children:"LineList"}),")."]}),"\n",(0,i.jsxs)(n.p,{children:["So on to finding the equivalent of ",(0,i.jsx)(n.code,{children:"glPointSize"}),". And...there is no equivalent. This ",(0,i.jsx)(n.a,{href:"https://webgpufundamentals.org/webgpu/lessons/webgpu-points.html",children:"webgpufundamentals post"})," however was very helpful. TL;DR: use instancing to render the points so each point is generates a quad. This was very interesting since I hadn't used instancing before in almost any context and also had been wondering what the WGPU equivalent of geometry shaders might be."]}),"\n",(0,i.jsx)(n.h4,{id:"first-try",children:"First try..."}),"\n",(0,i.jsxs)(n.p,{children:["For debugging, I tried rendering a grid of points as quads using ",(0,i.jsx)(n.code,{children:"LineList"})," primitives but that didn't work:"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"alt text",src:t(6670).A+"",width:"912",height:"740"})}),"\n",(0,i.jsx)(n.h4,{id:"vertex-index-vs-instance-index",children:"Vertex index vs. instance index"}),"\n",(0,i.jsxs)(n.p,{children:["Turned out I had my index and vertex buffers backwards. The ",(0,i.jsx)(n.a,{href:"https://docs.rs/wgpu/latest/wgpu/enum.VertexStepMode.html",children:"VertexStepMode"}),' docs clued me into the error: in that parlance, I had my "rows" and "columns" transposed so that I was generating the primitives based on instance index rather than vertex index.']}),"\n",(0,i.jsx)(n.p,{children:"Once I figured that out, the points rendered as quads (with debugging colors on each generated vertex):"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"alt text",src:t(772).A+"",width:"912",height:"740"})}),"\n",(0,i.jsx)(n.h2,{id:"the-working-code",children:"The working code"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsxs)(n.strong,{children:["Define the ",(0,i.jsx)(n.code,{children:"vs_main"})," input as an ",(0,i.jsx)(n.code,{children:"Instance"}),", not a ",(0,i.jsx)(n.code,{children:"Vertex"}),"."]})," Yes, the shader generates vertices, so it is a vertex shader still, but the input is the instance information. The additional information we need is the ",(0,i.jsx)(n.code,{children:"builtin(vertex_index)"})," to know ",(0,i.jsx)(n.em,{children:"which"})," vertex we're generating for the Instance. I confused myself by thinking of the ",(0,i.jsx)(n.code,{children:"vs_main"})," input still being a ",(0,i.jsx)(n.code,{children:"Vertex"})," originally."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-wgsl",children:'struct Globals {\n    view            : mat4x4<f32>,\n    proj            : mat4x4<f32>,\n    view_proj       : mat4x4<f32>,\n    camera_position : vec3<f32>,\n};\n\n@group(0) @binding(0)\nvar<uniform> globals : Globals;\n\nstruct Locals {\n};\n@group(1) @binding(0)\nvar<uniform> locals: Locals;\n\n\nstruct Instance {\n    @location(0) position : vec3<f32>,\n    @location(1) color    : vec3<f32>,\n};\n\nstruct Fragment {\n    @builtin(position) clip_position : vec4<f32>,\n    @location(0)       color         : vec3<f32>,\n};\n\n// This is called in with an "instance" step mode.\n//\n// There are N invocations of the vertex shader, one for each vertex\n// of the instance.  In this case, we\'re rendering a quad as two triangles\n// so N=6. (The render pipeline is set up to TriangeList, so a triangle\n// is generated for each consecutive 3 vertex_index values).\n//\n// We use the Instance position to generate the center world coordinate,\n// then generate 6 vertices in NDC space for the quad.\n//\n@vertex\nfn vs_main(\n    instance : Instance,\n    @builtin(vertex_index) vertexIndex: u32,\n) -> Fragment {\n\n    var vertices = array(\n          vec2f(-1, -1),\n          vec2f( 1, -1),\n          vec2f(-1,  1),\n\n          vec2f( 1,  1),\n          vec2f( 1, -1),\n          vec2f(-1,  1),\n    );\n    var vertex_pos = vertices[vertexIndex];\n    # TODO: remove hard-coded point size conversion\n    var vertex_ndc = vec4<f32>(vertex_pos * 100.0/400.0, 0.0, 0.0);\n\n    // Eye coordinates\n    var ec = globals.view * vec4<f32>(instance.position, 1.0);\n\n    var frag: Fragment;\n    frag.color = instance.color;\n    frag.clip_position = globals.proj * ec + vertex_ndc;\n    return frag;\n}\n\n@fragment\nfn fs_main(frag : Fragment) -> @location(0) vec4<f32> {\n    var c = frag.color;\n    return vec4<f32>(c, 1.0);\n}\n\n'})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"The shader is tightly coupled to the vertex layout and draw call"}),". The shader below assumes it will be called with a count of six and exactly six for each instance. The ",(0,i.jsx)(n.code,{children:"step_mode"}),' must also be set correctly. This doesn\'t feel very "reuse friendly" but makes sense that layouts and shaders would be so tightly coupled.']}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-rust",children:"    // Adds the commands to render the buffer to the queue\n    //\n    pub fn activate(&self, render_pass: &mut wgpu::RenderPass) {\n        let bytes = self.instance_buffer.size() as u32;\n        let size = std::mem::size_of::<PointInstance>() as u32;\n        let count = bytes / size;\n\n        // NOTE: the method naming is distracting since we're setting\n        // the *instance buffer* here, not a vertex buffer.\n        render_pass.set_vertex_buffer(0, self.instance_buffer.slice(..));\n\n        // The shader is hard-coded to generate 6 vertices per instance\n        render_pass.draw(0..6, 0..count);\n    }\n"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"The WGPU naming can be misleading for those new to instancing."})," It's also rather distracting that \"logically\" the vertex format is instance data, but the WGPU naming conventions for the structs and methods all refer to this as a vertex buffer. I'm sure this is appropriate naming looking a the holistic design of WGPU, but this was quite confusing in figuring out how instancing works for the first time!"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-rust",children:"impl PointInstance {\n    pub fn desc() -> wgpu::VertexBufferLayout<'static> {\n        wgpu::VertexBufferLayout {\n            array_stride: std::mem::size_of::<PointInstance>() as wgpu::BufferAddress,\n            step_mode: wgpu::VertexStepMode::Instance, // <-- THIS\n            attributes: &[\n                wgpu::VertexAttribute {\n                    offset: 0,\n                    shader_location: 0,\n                    format: wgpu::VertexFormat::Float32x3,\n                },\n                wgpu::VertexAttribute {\n                    offset: std::mem::size_of::<[f32; 3]>() as wgpu::BufferAddress,\n                    shader_location: 1,\n                    format: wgpu::VertexFormat::Float32x3,\n                },\n            ],\n        }\n    }\n}\n"})}),"\n",(0,i.jsxs)(n.p,{children:["The shader is also tightly coupled to the ",(0,i.jsx)(n.code,{children:"RenderPass"})," as that needs its primitive topology to be set to ",(0,i.jsx)(n.code,{children:"TriangeList"}),"."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-rust",children:"primitive: wgpu::PrimitiveState {\n    cull_mode: None,\n    topology: wgpu::PrimitiveTopology::TriangleList,  // <-- THIS\n    strip_index_format: None,\n    front_face: wgpu::FrontFace::Ccw,\n    polygon_mode: wgpu::PolygonMode::Fill,\n    unclipped_depth: false,\n    conservative: false,\n},\n"})})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},772:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/image-1-ad8396b29ad3fc6e72cc8325200eaf44.png"},6670:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/image-3747943f22f587a49642574a48b93775.png"},8453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>o});var i=t(6540);const s={},r=i.createContext(s);function a(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);