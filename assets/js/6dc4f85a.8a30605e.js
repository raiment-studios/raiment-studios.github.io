"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2056],{1824:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>h,frontMatter:()=>a,metadata:()=>r,toc:()=>o});var i=t(4848),s=t(8453);const a={},l="Hot reloading architecture",r={permalink:"/blog/2024/08/18/index",editUrl:"https://github.com/raiment-studios/monorepo/tree/main/projects/raiment-studios/web2/blog/2024-08-18/index.md",source:"@site/blog/2024-08-18/index.md",title:"Hot reloading architecture",description:"_TL;DR: I can now modify my sinscape.js script file and when I do the sine-wave based voxel landscape will automatically refresh in the engine without a restart._",date:"2024-08-18T00:00:00.000Z",tags:[],readingTime:7.235,hasTruncateMarker:!1,authors:[],frontMatter:{},unlisted:!1,nextItem:{title:"MagicaVoxel VOX loading",permalink:"/blog/2024/08/17/index"}},d={authorsImageUrls:[]},o=[{value:"Architecture",id:"architecture",level:3},{value:"Build the dependency graph during scene loading (DependencyList)",id:"build-the-dependency-graph-during-scene-loading-dependencylist",level:3},{value:"Record the dependencies",id:"record-the-dependencies",level:4},{value:"Intrusive tracking",id:"intrusive-tracking",level:4},{value:"Design choice: a list not a graph",id:"design-choice-a-list-not-a-graph",level:4},{value:"Design choice: an immutable list after initialization",id:"design-choice-an-immutable-list-after-initialization",level:4},{value:"Watch the files for changes (FileWatcher)",id:"watch-the-files-for-changes-filewatcher",level:3},{value:"Pseudo-code",id:"pseudo-code",level:4},{value:"Rust code",id:"rust-code",level:4},{value:"Communicate what&#39;s changed (DirtyList)",id:"communicate-whats-changed-dirtylist",level:3},{value:"Reload the asset (HotReloader)",id:"reload-the-asset-hotreloader",level:3}];function c(e){const n={admonition:"admonition",code:"code",em:"em",h3:"h3",h4:"h4",li:"li",mermaid:"mermaid",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components},{Details:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:(0,i.jsxs)(n.em,{children:["TL;DR: I can now modify my ",(0,i.jsx)(n.code,{children:"sinscape.js"})," script file and when I do the sine-wave based voxel landscape will automatically refresh in the engine without a restart."]})})}),"\n",(0,i.jsx)(n.p,{children:'I wanted to add "hot reloading" to the engine so that changes to data files are automatically reflected in the running engine. This is one of those small developer-ergonomics changes that, over time, I believe has huge benefits to productivity.'}),"\n",(0,i.jsx)(n.p,{children:"The primary challenge was to architect this such that the engine internals remain clean: i.e."}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"Avoid scattering with knowledge of source file to asset mappings throughout the engine"}),"\n",(0,i.jsx)(n.li,{children:"Avoid introducing complex inter-object references within the engine (makes for a Rust lifetime manageable headache)"}),"\n",(0,i.jsx)(n.li,{children:"Minimal runtime impact in a release build"}),"\n",(0,i.jsx)(n.li,{children:"Keep file watching code isolated and independent as it's a development feature, not an engine feature"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"I expect to have to revist this as the engine functionality increases and as I learn more about how to use Rust more effectively. \ud83d\ude04"}),"\n",(0,i.jsx)(n.admonition,{title:"Heads up",type:"warning",children:(0,i.jsxs)(n.p,{children:["This article does not go into full depth on some of changes discussed. ",(0,i.jsx)(n.strong,{children:"If you'd like more detail added to any section, let me know!"})," I wanted to be sure there was an audience for this before going into any more depth."]})}),"\n",(0,i.jsx)(n.h3,{id:"architecture",children:"Architecture"}),"\n",(0,i.jsx)(n.mermaid,{value:"graph LR\n    subgraph A[Scene Loading]\n        DependencyList\n    end\n\n    subgraph B[Engine Actor]\n        FileWatcher\n    end\n\n    subgraph C[Engine]\n        DirtyList\n    end\n\n    DependencyList --\x3e FileWatcher --\x3e DirtyList --\x3e HotReload"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"Build a list of files -> asset ids during loading"}),"\n",(0,i.jsx)(n.li,{children:"Add a dev-only Actor that watches for file change"}),"\n",(0,i.jsx)(n.li,{children:"Trigger a reload for any assets that have been marked dirty"}),"\n",(0,i.jsx)(n.li,{children:"Do the reload"}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"build-the-dependency-graph-during-scene-loading-dependencylist",children:"Build the dependency graph during scene loading (DependencyList)"}),"\n",(0,i.jsx)(n.h4,{id:"record-the-dependencies",children:"Record the dependencies"}),"\n",(0,i.jsx)(n.p,{children:'As the loader opens files, it maintains a mapping of each file to the list of asset ids that file impacted. Building the "graph" is simple as long as two rules are followed:'}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Record direct dependencies"}),": whenever a file is opened, ensure any assets created by that file add any entry mapping that ",(0,i.jsx)(n.code,{children:"file -> asset id"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Record transitive dependnecies"}),": whenever an asset relies on data from another asset, copy all the dependencies from the existing asset to the newly created asset."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsxs)(n.em,{children:["Example: when loading a ",(0,i.jsx)(n.code,{children:".vox"})," file, we simply add that file name as a dependency on the model that's going to use that vox data."]})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-rust",children:"dependency_list.add_model_entry(vox_file.to_str().unwrap(), &desc.header.id);\n\nlet vox_data: vox_format::VoxData = vox_format::from_file(vox_file).unwrap();\n"})}),"\n",(0,i.jsx)(n.p,{children:"We record the dependencies as IDs rather than object references as it's far cleaner for managing lifetimes."}),"\n",(0,i.jsx)(n.p,{children:"For a simple scene, we end up with a list like the following"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"   1.4 INFO  --- Dependency list ---\n  [Model]      mmm-house3\n      data/dist/base/models/mmm-house3/mmm-house3.yaml\n      data/dist/base/models/mmm-house3/obj_house3.vox\n  [Model]      sinscape\n      data/dist/base/generators/sinscape.js\n      data/dist/base/models/sinscape.yaml\n  [Model]      unit_cube\n      data/dist/base/models/unit_cube.yaml\n  [Scene]      main\n      data/dist/base/scenes/main.yaml\n  [Instance]   house-000\n      data/dist/base/models/mmm-house3/mmm-house3.yaml\n      data/dist/base/models/mmm-house3/obj_house3.vox\n      data/dist/base/scenes/main.yaml\n  [Scene]      main-001\n      data/dist/base/scenes/main-001.yaml\n"})}),"\n",(0,i.jsx)(n.h4,{id:"intrusive-tracking",children:"Intrusive tracking"}),"\n",(0,i.jsx)(n.p,{children:'This is an "intrusive" approach: the bookkeeping of dependency tracking must be inlined directly into the loading logic and cannot be plugged in as an optional feature. This however feels fine as a design choice since the cost of building a mapping table is relatively low and it is conceptually simple.'}),"\n",(0,i.jsxs)(n.p,{children:["The loading code ",(0,i.jsx)(n.em,{children:"expects"})," each asset load to have 1 or more calls to methods such as the below. Thus, we want an interface that makes recording dependencies simple, hard-to-get-wrong, and ideally self-descriptive one-liners."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-rust",children:"impl DependencyList {\n    // ...\n\n    // Direct dependencies\n    pub fn add_scene_entry(&mut self, file_path: &str, id: &str) { ...  }\n    pub fn add_model_entry(&mut self, file_path: &str, id: &str) { ...  }\n    pub fn add_instance_entry(&mut self, file_path: &str, id: &str) { ...  }\n\n    // Transitive dependencies\n    pub fn copy_entries(&mut self,\n        src_type: EntityType, src_id: &str,\n        dst_type: EntityType, dst_id: &str) { ... }\n\n    // ...\n"})}),"\n",(0,i.jsx)(n.h4,{id:"design-choice-a-list-not-a-graph",children:"Design choice: a list not a graph"}),"\n",(0,i.jsxs)(n.p,{children:["Transitive dependencies ",(0,i.jsx)(n.em,{children:"copy"})," dependencies which ",(0,i.jsx)(n.em,{children:"flattens"})," the dependency graph. This makes it a dependency ",(0,i.jsx)(n.em,{children:"list"}),". This is done for simplicity's sake, though has a small trade-off (continue reading for more on this)."]}),"\n",(0,i.jsx)(n.admonition,{title:"The alternative",type:"note",children:(0,i.jsxs)(n.p,{children:["The alternative would be to record ",(0,i.jsx)(n.code,{children:"asset -> asset"})," dependencies as well ",(0,i.jsx)(n.code,{children:"file -> asset"})," dependencies. This would add only a little more complexity as the flattening would happen at use, not build, time for the list -- but per the below this didn't seem worth doing at this stage. \ud83e\udd37"]})}),"\n",(0,i.jsx)(n.h4,{id:"design-choice-an-immutable-list-after-initialization",children:"Design choice: an immutable list after initialization"}),"\n",(0,i.jsxs)(n.p,{children:["The architecture builds this list at ",(0,i.jsx)(n.em,{children:"initial load"})," only. It is treated effectively an immutable/static list after startup."]}),"\n",(0,i.jsx)(n.p,{children:"\u2705 The benefit is this is very simple to reason about. The dependency list requires no dynamic update logic."}),"\n",(0,i.jsx)(n.p,{children:"\ud83d\udeab The downside is changes such as file renames or inter-asset dependency modifications will cause the dependency list to go stale."}),"\n",(0,i.jsx)(n.p,{children:"The trade-off seems good as the unsupport cases are not the common case, the workaround is trivial (restart the engine)."}),"\n",(0,i.jsx)(n.h3,{id:"watch-the-files-for-changes-filewatcher",children:"Watch the files for changes (FileWatcher)"}),"\n",(0,i.jsx)(n.p,{children:'I wanted to keep file watching logic out of the core engine. From an architectural perspective this should be as "pluggable" feature while incurring as little effect on the runtime in a release build as possible.'}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["The overhead of building the ",(0,i.jsx)(n.code,{children:"DependencyList"})," during loading seems fine to always in the build"]}),"\n",(0,i.jsxs)(n.li,{children:["The notion of a ",(0,i.jsx)(n.code,{children:"DirtyList"})," also seems fine in a release build as it is rather isolated"]}),"\n",(0,i.jsx)(n.li,{children:"However, the file watching code should not be in the core code."}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["This was solved by adding an ",(0,i.jsx)(n.code,{children:"Actor"})," to the ",(0,i.jsx)(n.code,{children:"Engine"}),". This approach is quite simple and encapsulates the file watching code quite nicely. The FileWatcher itself only depends on a file list and ",(0,i.jsx)(n.code,{children:"file -> id"})," mapping table: it doesn't really need to understand much more than doing that mapping."]}),"\n",(0,i.jsx)(n.h4,{id:"pseudo-code",children:"Pseudo-code"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"on init:\n    for each file in the dependency list\n        set up a file watcher\n\non every Nth frame update:\n    check if the file watcher has reported any changes\n    if no, return\n\n    for each modified file\n        look up the asset ids dependent on that file\n        update the engine's dirty_list with those asset ids\n"})}),"\n",(0,i.jsx)(n.h4,{id:"rust-code",children:"Rust code"}),"\n",(0,i.jsxs)(t,{children:[(0,i.jsx)(n.p,{children:'This is certainly not the "best" code, but was good enough to get things working. I\'m still learning Rust, so feedback on improving this code is very welcome.'}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-rust",children:'use crate::engine;\nuse log::info;\nuse std::{\n    collections::HashSet,\n    sync::{Arc, Mutex},\n};\n\nuse notify::{Config, PollWatcher, RecursiveMode, Watcher};\n\npub struct FileWatcher {\n    watcher: PollWatcher,\n    dirty_list: Arc<Mutex<HashSet<String>>>,\n}\n\nimpl FileWatcher {\n    pub fn new(file_list: Vec<String>) -> Self {\n        let (tx, rx) = std::sync::mpsc::channel();\n        // use the PollWatcher and disable automatic polling\n        let mut watcher = PollWatcher::new(tx, Config::default().with_manual_polling()).unwrap();\n\n        // Sort simply for display / debugging purposes\n        let mut file_list = file_list;\n        file_list.sort();\n\n        for f in file_list {\n            info!("Watching: {:?}", f);\n            watcher\n                .watch(f.as_ref(), RecursiveMode::NonRecursive)\n                .unwrap();\n        }\n\n        // run event receiver on a different thread, we want this one for user input\n        let dirty_list = Arc::new(Mutex::new(HashSet::new()));\n        {\n            let dirty_list = dirty_list.clone();\n            std::thread::spawn(move || {\n                for res in rx {\n                    match res {\n                        Ok(event) => {\n                            let mut v = dirty_list.lock().unwrap();\n                            for p in event.paths {\n                                v.insert(p.to_str().unwrap().to_string());\n                            }\n                        }\n                        Err(e) => println!("watch error: {:?}", e),\n                    }\n                }\n            });\n        }\n        Self {\n            watcher,\n            dirty_list,\n        }\n    }\n}\n\nimpl engine::Actor for FileWatcher {\n    fn update(&mut self, frame_state: &engine::FrameState) {\n        if frame_state.frame % 60 != 37 {\n            return;\n        }\n        self.watcher.poll().unwrap();\n\n        let mut v = self.dirty_list.lock().unwrap();\n        if v.len() == 0 {\n            return;\n        }\n\n        let values = v.drain();\n        for file in values {\n            info!("File changed: {:?}", file);\n            let entries = frame_state.dependency_list.entries_for_file(&file);\n            for e in entries {\n                frame_state.dirty_list.borrow_mut().push(e.clone());\n            }\n        }\n    }\n}\n'})})]}),"\n",(0,i.jsx)(n.h3,{id:"communicate-whats-changed-dirtylist",children:"Communicate what's changed (DirtyList)"}),"\n",(0,i.jsxs)(n.p,{children:["The Engine maintains a simple ",(0,i.jsx)(n.code,{children:"DirtyList"})," to be notified about changes."]}),"\n",(0,i.jsx)(n.p,{children:'I wanted to avoid complex event system, callbacks, object references or anything of that sort. So it simply has a list of asset ids that are currently considered "dirty."'}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"FileWatcher"}),", on it's own file events, simply adds assets ids to this list."]}),"\n",(0,i.jsxs)(n.p,{children:["On each frame, the ",(0,i.jsx)(n.code,{children:"Engine"})," checks if the dirty list is non-empty. If so, it provides the hot reloader with the list of asset ids to reload (and the original DependencyList to do the back-mapping to files it may need to reload). It clears the list after telling the hot reloader to do its work."]}),"\n",(0,i.jsx)(n.h3,{id:"reload-the-asset-hotreloader",children:"Reload the asset (HotReloader)"}),"\n",(0,i.jsx)(n.p,{children:"The HotReloader uses a brute-force implementation (this likely will need to be revisted in the future)."}),"\n",(0,i.jsxs)(n.p,{children:["If ",(0,i.jsx)(n.em,{children:"anything"}),' needs to be reloaded, the hot reloader loads the entire scene from disk again. This has the advantage of being simple: it\'s a "clean slate" that uses the exact same logic as engine startup.']}),"\n",(0,i.jsx)(n.p,{children:"It then loops over all active entities in the engine and checks if they are in the dirty list. If they are, it copies in the relevant data from the freshly loaded scene over the current data -- thus refreshing the asset."})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>l,x:()=>r});var i=t(6540);const s={},a=i.createContext(s);function l(e){const n=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),i.createElement(a.Provider,{value:n},e.children)}}}]);