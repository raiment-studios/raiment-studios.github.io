"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9813],{431:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>p,frontMatter:()=>a,metadata:()=>c,toc:()=>u});var i=t(4848),o=t(8453),s=t(4252),r=t(6135);const a={},l="Introduction",c={id:"snowfall/architecture/intro",title:"Introduction",description:"-   This is a work-in-progress draft",source:"@site/docs/snowfall/400-architecture/401-intro.mdx",sourceDirName:"snowfall/400-architecture",slug:"/snowfall/architecture/intro",permalink:"/docs/snowfall/architecture/intro",draft:!1,unlisted:!1,editUrl:"https://github.com/raiment-studios/monorepo/tree/main/projects/raiment-studios/web2/docs/snowfall/400-architecture/401-intro.mdx",tags:[],version:"current",sidebarPosition:401,frontMatter:{},sidebar:"snowfallSidebar",previous:{title:"External content",permalink:"/docs/snowfall/content/content"},next:{title:"Scene loading",permalink:"/docs/snowfall/architecture/scene-loading"}},d={},u=[{value:"Concepts",id:"concepts",level:2},{value:"Scene &amp; renderer independence",id:"scene--renderer-independence",level:3},{value:"RenderTree",id:"rendertree",level:3},{value:"User input",id:"user-input",level:2},{value:"Action Queue",id:"action-queue",level:3},{value:"Implementation",id:"implementation",level:4},{value:"Enumerating all actions",id:"enumerating-all-actions",level:4},{value:"Queuing up the actions",id:"queuing-up-the-actions",level:4},{value:"Mapping input to actions",id:"mapping-input-to-actions",level:4},{value:"Executing Actions",id:"executing-actions",level:4}];function h(e){const n={admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"introduction",children:"Introduction"})}),"\n",(0,i.jsx)(n.admonition,{title:"Disclaimer!",type:"danger",children:(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.strong,{children:"This is a work-in-progress draft"})}),"\n"]})}),"\n",(0,i.jsx)("img",{style:{maxWidth:"40%",float:"right",padding:"0 16px 12px"},src:t(1914).A}),"\n",(0,i.jsx)(n.p,{children:"The Architecture documentation attempts to provide a high-level view of how the Snowfall Engine works. It is intended to be high-level enough to a lasting resource for understanding the concepts even while the details of the code may change over time. Given the high-level nature of the document, it is also intended to be a reasonable resource for understanding engine architecture in general."}),"\n",(0,i.jsx)("h3",{children:"Table of contents"}),"\n",(0,i.jsx)("div",{style:{paddingLeft:"2rem"},children:(0,i.jsx)(s.A,{toc:u})}),"\n",(0,i.jsx)("div",{style:{clear:"both "}}),"\n",(0,i.jsx)(n.h2,{id:"concepts",children:"Concepts"}),"\n",(0,i.jsxs)(n.p,{children:["This tutorial aims to call out the ",(0,i.jsx)(n.em,{children:"conceptually"}),' independent (or at least separable) parts of a rendering engine so that the overall code structure is easier to understand. These are the "objects" we want to think about that exist regardless of ',(0,i.jsx)(n.em,{children:"how they are implemented"}),"."]}),"\n",(0,i.jsx)(n.admonition,{title:"Example",type:"note",children:(0,i.jsx)(n.p,{children:'We know our engine will have some sort of materials we want to render objects with. Therefore, "Material" is called out here. Contrastingly, we do not call out "shader programs" here as this is more an aspect of "how" the concept of a Material is handled in WGPU.'})}),"\n",(0,i.jsx)(n.p,{children:"Let's start with a very loose list of the conceptual objects in a rendering engine:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Scene","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Camera"}),"\n",(0,i.jsx)(n.li,{children:"Lights"}),"\n",(0,i.jsxs)(n.li,{children:["Instances","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Models","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Geometry"}),"\n",(0,i.jsx)(n.li,{children:"Material"}),"\n",(0,i.jsx)(n.li,{children:"Transforms"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.li,{children:"Renderer"}),"\n",(0,i.jsx)(n.li,{children:"User input"}),"\n",(0,i.jsxs)(n.li,{children:["Frame loop","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Actions"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.li,{children:"File formats"}),"\n"]}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsx)(n.p,{children:"What is a core concept versus what is an implementation detail is a sliding scale that depends on what you want to expose to the user of the engine! If your engine provides fine-grained control of shader programs to the user as major feature of the engine, then perhaps shader programs are a core concept. The above is only one take on the topic."})}),"\n",(0,i.jsx)(n.h3,{id:"scene--renderer-independence",children:"Scene & renderer independence"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Maintenance benefits"}),"\n",(0,i.jsx)(n.li,{children:"Decouple concerns"}),"\n",(0,i.jsx)(n.li,{children:"Con: copying of data"}),"\n",(0,i.jsx)(n.li,{children:'Con: update multiple places for a "single" change'}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"rendertree",children:"RenderTree"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Shadow data structure"}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"user-input",children:"User input"}),"\n",(0,i.jsx)(n.h3,{id:"action-queue",children:"Action Queue"}),"\n",(0,i.jsxs)(n.p,{children:['The "Action Queue", which follows the "Gang of Four" ',(0,i.jsx)(n.strong,{children:"Command design pattern"})," is introduced in order to:"]}),"\n",(0,i.jsxs)(r.y,{children:[(0,i.jsx)(i.Fragment,{children:(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Decouple input from actions"}),"\n",(0,i.jsxs)(n.li,{children:["Ease implemenation of:","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Custom key bindings"}),"\n",(0,i.jsx)(n.li,{children:"New controller methods"}),"\n",(0,i.jsx)(n.li,{children:"Automated / simulated user input"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.li,{children:"Process engine changes in a well-defined, deterministic order in the pipeline"}),"\n"]})}),(0,i.jsx)(i.Fragment,{children:(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Multiple places to update for every new action"}),"\n"]})})]}),"\n",(0,i.jsx)(n.h4,{id:"implementation",children:"Implementation"}),"\n",(0,i.jsx)(n.p,{children:"To implement this we introduce the following distinct pieces of code:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"An enum for all the possible actions"}),"\n",(0,i.jsx)(n.li,{children:"An ActionQueue for storing actions generated from user input or other sources"}),"\n",(0,i.jsx)(n.li,{children:'A "key mapper" for translating user input into actions'}),"\n",(0,i.jsx)(n.li,{children:"An Action processor for running actions in the frame loop"}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"enumerating-all-actions",children:"Enumerating all actions"}),"\n",(0,i.jsx)(n.p,{children:"In a smaller engine, having a well-defined set of actions can help keep the codebase understandable as this makes the API of the engine very clear. In a more complex engine, it may be useful to introduce dynamic actions so plugins may add new action types that the core engine is not aware of. For this tutorial, we'll stick to a fixed set of actions, as exemplified below:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-rust",children:"#[derive(Clone)]\npub enum Action {\n    MoveForward(f32),\n    MoveBackward(f32),\n    RotateRight(f32),\n    RotateLeft(f32),\n    MoveUp(f32),\n    MoveDown(f32),\n    MoveLeft(f32),\n    MoveRight(f32),\n    // etc.\n}\n"})}),"\n",(0,i.jsx)(n.h4,{id:"queuing-up-the-actions",children:"Queuing up the actions"}),"\n",(0,i.jsxs)(n.p,{children:["In the context of a rendering engine, a key constraint is the actions will be processed at a well-known time during the frame rendering. In the simplest case, we could use a simple ",(0,i.jsx)(n.code,{children:"Vec"})," that enqueues the actions and processes them all in order at the start of the frame, leaving the Vec empty after processing."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-rust",children:"pub struct ActionQueue {\n    queue: Vec<Action>,\n    frame_queue: HashMap<String, Action>,\n    persist_queue: HashMap<String, Action>,\n}\n"})}),"\n",(0,i.jsx)(n.p,{children:"However, in practice, it is often useful to have two additional variations of actions:"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"1. Actions types that can be enqueued at most once per frame"}),'. For example, if a "jump" action is triggered by the keyboard, we don\'t necessarily want it to be possible to ',(0,i.jsx)(n.em,{children:"also"}),' create a second "jump" action via a controller or joystick. One solution to this is to make each such action idempotent, but this can be error-prone as it needs to be implemented for each such action. Instead, per the code below, we introduce the idea of a ',(0,i.jsx)(n.code,{children:"frame_queue"})," that only allows one action of a given type per frame."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"2. Actions that persist until explicitly removed"}),'. Another special case is a user input that triggers the start / end of an action that is to be run every frame. For example, an input to "move forward" that is ',(0,i.jsx)(n.em,{children:"continually"})," moves the player character forward until an explicit input to stop would add an action and want it to be processed every frame until it is removed. This is the purpose of ",(0,i.jsx)(n.code,{children:"persist_queue"}),"."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-rust",children:'impl Action {\n    // Provide a unique id to each action type so that we can match\n    // against types, not just full values.\n    pub fn to_type(&self) -> &\'static str {\n        use Action::*;\n        match self {\n            MoveForward(_) => "MoveForward",\n            MoveBackward(_) => "MoveBackward",\n            RotateRight(_) => "RotateRight",\n            RotateLeft(_) => "RotateLeft",\n            MoveUp(_) => "MoveUp",\n            MoveDown(_) => "MoveDown",\n            MoveLeft(_) => "MoveLeft",\n            MoveRight(_) => "MoveRight",\n        }\n    }\n}\n\nimpl ActionQueue {\n    pub fn new() -> ActionQueue {\n        ActionQueue {\n            queue: Vec::new(),\n            frame_queue: HashMap::new(),\n            persist_queue: HashMap::new(),\n        }\n    }\n\n    pub fn enqueue(&mut self, action: Action) {\n        self.queue.push(action);\n    }\n\n    // Ensures at most one of the action type is in the queue for a\n    // given frame. Subsequent calls replace prior actions of the same type.\n    pub fn enqueue_frame(&mut self, action: Action) {\n        self.frame_queue\n            .insert(action.to_type().to_string(), action);\n    }\n\n    pub fn toggle_persist(&mut self, action: Action, enable: bool) {\n        let key = action.to_type();\n        if enable {\n            self.persist_queue.insert(key.to_string(), action);\n        } else {\n            self.persist_queue.remove(key);\n        }\n    }\n\n    // Drains all one-time actions and frame actions, clones all\n    // persistent actions.\n    pub fn drain_actions_for_frame(&mut self) -> Vec<Action> {\n        let mut actions = Vec::new();\n        actions.extend(self.queue.drain(..));\n        actions.extend(self.frame_queue.drain().map(|(_, v)| v));\n        actions.extend(self.persist_queue.values().cloned());\n        actions\n    }\n}\n'})}),"\n",(0,i.jsx)(n.h4,{id:"mapping-input-to-actions",children:"Mapping input to actions"}),"\n",(0,i.jsx)(n.p,{children:"The next component is the mapper that takes various input and creates the Actions. This is fairly straightforward and is simply a mapping from whatever input system is being used to the creation of an Action object."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-rust",children:"use winit::keyboard::KeyCode;\n\nuse crate::action_queue::ActionQueue;\n\npub fn map_to_action(q: &mut ActionQueue, keycode: &KeyCode, is_pressed: bool) -> bool {\n    use crate::action_queue::Action::*;\n\n    const STEP: f32 = 0.1;\n\n    match keycode {\n        KeyCode::KeyW | KeyCode::ArrowUp => {\n            q.toggle_persist(MoveForward(STEP), is_pressed);\n        }\n        KeyCode::KeyQ | KeyCode::ArrowLeft => {\n            q.toggle_persist(RotateLeft(STEP), is_pressed);\n        }\n        KeyCode::KeyS | KeyCode::ArrowDown => {\n            q.toggle_persist(MoveBackward(STEP), is_pressed);\n        }\n        KeyCode::KeyE | KeyCode::ArrowRight => {\n            q.toggle_persist(RotateRight(STEP), is_pressed);\n        }\n        KeyCode::KeyR => {\n            q.toggle_persist(MoveUp(STEP), is_pressed);\n        }\n        KeyCode::KeyF => {\n            q.toggle_persist(MoveDown(STEP), is_pressed);\n        }\n        KeyCode::KeyA => {\n            q.toggle_persist(MoveLeft(STEP), is_pressed);\n        }\n        KeyCode::KeyD => {\n            q.toggle_persist(MoveRight(STEP), is_pressed);\n        }\n        _ => return false,\n    };\n    true\n}\n"})}),"\n",(0,i.jsx)(n.h4,{id:"executing-actions",children:"Executing Actions"}),"\n",(0,i.jsx)(n.p,{children:"Lastly, at a well-defined point in the frame loop update, we need to process the actions that have been enqueued thus far."}),"\n",(0,i.jsx)(n.p,{children:'In a more complex engine, it would be likely be beneficial to allow action handlers to be "pluggable" both for code organization purposes (e.g. isolating all camera related action handlers to one file) as well as for the introduction of extensibility.'}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-rust",children:"    fn update_actions(&mut self) {\n        let actions = self.action_queue.drain_actions_for_frame();\n\n        use cgmath::InnerSpace;\n        let cam = &mut self.scene.camera;\n        let forward = cam.target - cam.position;\n        let forward_norm = forward.normalize();\n        let forward_mag = forward.magnitude();\n        let right = forward_norm.cross(cam.up);\n        let camera_close_to_target = forward_mag < 2.0;\n\n        use action_queue::Action::*;\n        for action in actions {\n            match action {\n                MoveForward(step) => {\n                    if camera_close_to_target {\n                        continue;\n                    }\n                    cam.target += forward_norm * step;\n                    cam.position += forward_norm * step;\n                }\n                MoveBackward(step) => {\n                    cam.target -= forward_norm * step;\n                    cam.position -= forward_norm * step;\n                }\n                RotateLeft(step) => {\n                    cam.position = cam.target - (forward + right * step).normalize() * forward_mag;\n                }\n                RotateRight(step) => {\n                    cam.position = cam.target - (forward - right * step).normalize() * forward_mag;\n                }\n                MoveUp(step) => {\n                    cam.target += cam.up * step;\n                    cam.position += cam.up * step;\n                }\n                MoveDown(step) => {\n                    cam.target -= cam.up * step;\n                    cam.position -= cam.up * step;\n                }\n                MoveLeft(step) => {\n                    cam.target -= right * step;\n                    cam.position -= right * step;\n                }\n                MoveRight(step) => {\n                    cam.target += right * step;\n                    cam.position += right * step;\n                }\n            }\n        }\n    }\n"})})]})}function p(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},6135:(e,n,t)=>{t.d(n,{y:()=>o});t(6540);var i=t(4848);function o(e){let{children:n}=e;return(0,i.jsxs)("div",{style:{display:"flex",flexDirection:"row"},children:[(0,i.jsxs)("div",{className:"checklist-pros",children:[(0,i.jsx)("strong",{children:"Pros"}),n[0]]}),(0,i.jsxs)("div",{className:"checklist-cons",children:[(0,i.jsx)("strong",{children:"Cons"}),n[1]]})]})}},4252:(e,n,t)=>{t.d(n,{A:()=>r});t(6540);var i=t(5195);const o={tableOfContentsInline:"tableOfContentsInline_prmo"};var s=t(4848);function r(e){let{toc:n,minHeadingLevel:t,maxHeadingLevel:r}=e;return(0,s.jsx)("div",{className:o.tableOfContentsInline,children:(0,s.jsx)(i.A,{toc:n,minHeadingLevel:t,maxHeadingLevel:r,className:"table-of-contents",linkClassName:null})})}},5195:(e,n,t)=>{t.d(n,{A:()=>f});var i=t(6540),o=t(6342);function s(e){const n=e.map((e=>({...e,parentIndex:-1,children:[]}))),t=Array(7).fill(-1);n.forEach(((e,n)=>{const i=t.slice(2,e.level);e.parentIndex=Math.max(...i),t[e.level]=n}));const i=[];return n.forEach((e=>{const{parentIndex:t,...o}=e;t>=0?n[t].children.push(o):i.push(o)})),i}function r(e){let{toc:n,minHeadingLevel:t,maxHeadingLevel:i}=e;return n.flatMap((e=>{const n=r({toc:e.children,minHeadingLevel:t,maxHeadingLevel:i});return function(e){return e.level>=t&&e.level<=i}(e)?[{...e,children:n}]:n}))}function a(e){const n=e.getBoundingClientRect();return n.top===n.bottom?a(e.parentNode):n}function l(e,n){let{anchorTopOffset:t}=n;const i=e.find((e=>a(e).top>=t));if(i){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(a(i))?i:e[e.indexOf(i)-1]??null}return e[e.length-1]??null}function c(){const e=(0,i.useRef)(0),{navbar:{hideOnScroll:n}}=(0,o.p)();return(0,i.useEffect)((()=>{e.current=n?0:document.querySelector(".navbar").clientHeight}),[n]),e}function d(e){const n=(0,i.useRef)(void 0),t=c();(0,i.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:i,linkActiveClassName:o,minHeadingLevel:s,maxHeadingLevel:r}=e;function a(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(i),a=function(e){let{minHeadingLevel:n,maxHeadingLevel:t}=e;const i=[];for(let o=n;o<=t;o+=1)i.push(`h${o}.anchor`);return Array.from(document.querySelectorAll(i.join()))}({minHeadingLevel:s,maxHeadingLevel:r}),c=l(a,{anchorTopOffset:t.current}),d=e.find((e=>c&&c.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,t){t?(n.current&&n.current!==e&&n.current.classList.remove(o),e.classList.add(o),n.current=e):e.classList.remove(o)}(e,e===d)}))}return document.addEventListener("scroll",a),document.addEventListener("resize",a),a(),()=>{document.removeEventListener("scroll",a),document.removeEventListener("resize",a)}}),[e,t])}var u=t(8774),h=t(4848);function p(e){let{toc:n,className:t,linkClassName:i,isChild:o}=e;return n.length?(0,h.jsx)("ul",{className:o?void 0:t,children:n.map((e=>(0,h.jsxs)("li",{children:[(0,h.jsx)(u.A,{to:`#${e.id}`,className:i??void 0,dangerouslySetInnerHTML:{__html:e.value}}),(0,h.jsx)(p,{isChild:!0,toc:e.children,className:t,linkClassName:i})]},e.id)))}):null}const m=i.memo(p);function f(e){let{toc:n,className:t="table-of-contents table-of-contents__left-border",linkClassName:a="table-of-contents__link",linkActiveClassName:l,minHeadingLevel:c,maxHeadingLevel:u,...p}=e;const f=(0,o.p)(),g=c??f.tableOfContents.minHeadingLevel,x=u??f.tableOfContents.maxHeadingLevel,v=function(e){let{toc:n,minHeadingLevel:t,maxHeadingLevel:o}=e;return(0,i.useMemo)((()=>r({toc:s(n),minHeadingLevel:t,maxHeadingLevel:o})),[n,t,o])}({toc:n,minHeadingLevel:g,maxHeadingLevel:x});return d((0,i.useMemo)((()=>{if(a&&l)return{linkClassName:a,linkActiveClassName:l,minHeadingLevel:g,maxHeadingLevel:x}}),[a,l,g,x])),(0,h.jsx)(m,{toc:v,className:t,linkClassName:a,...p})}},1914:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/image-9d9121b5f36cbcfd811a05eb44fe32f5.png"},8453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>a});var i=t(6540);const o={},s=i.createContext(o);function r(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);