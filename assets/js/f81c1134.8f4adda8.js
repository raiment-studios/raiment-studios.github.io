"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8130],{7735:e=>{e.exports=JSON.parse('{"archive":{"blogPosts":[{"id":"/2024/08/19/index","metadata":{"permalink":"/blog/2024/08/19/index","editUrl":"https://github.com/raiment-studios/monorepo/tree/main/projects/raiment-studios/web2/blog/2024-08-19/index.md","source":"@site/blog/2024-08-19/index.md","title":"Terrain generator","description":"Added the ability to write Rust \\"scripts\\" (basically crates that the engine will run to get model output from) and added a voxel terrain with some basic procedural noise.","date":"2024-08-19T00:00:00.000Z","tags":[],"readingTime":0.26,"hasTruncateMarker":false,"authors":[],"frontMatter":{},"unlisted":false,"nextItem":{"title":"Rust generator \\"scripts\\"","permalink":"/blog/2024/08/18/p2"}},"content":"Added the ability to write Rust \\"scripts\\" (basically crates that the engine will run to get model output from) and added a voxel terrain with some basic procedural noise.\\n\\nAlso switched the WGPU to prefer linear RGB color until I progress a bit further and want to handle sRGB correctly.\\n\\n![alt text](image.png)"},{"id":"/2024/08/18/p2","metadata":{"permalink":"/blog/2024/08/18/p2","editUrl":"https://github.com/raiment-studios/monorepo/tree/main/projects/raiment-studios/web2/blog/2024-08-18-p2/index.md","source":"@site/blog/2024-08-18-p2/index.md","title":"Rust generator \\"scripts\\"","description":"Updated the code base to run Rust code to generate models. The below heightmap is a combination of sin functions and noise functions, generated in Rust code.","date":"2024-08-18T00:00:00.000Z","tags":[{"inline":true,"label":"scripting","permalink":"/blog/tags/scripting"},{"inline":true,"label":"Rust","permalink":"/blog/tags/rust"}],"readingTime":0.145,"hasTruncateMarker":false,"authors":[],"frontMatter":{"tags":["scripting","Rust"]},"unlisted":false,"prevItem":{"title":"Terrain generator","permalink":"/blog/2024/08/19/index"},"nextItem":{"title":"Hot reloading architecture","permalink":"/blog/2024/08/18/p1"}},"content":"Updated the code base to run Rust code to generate models. The below heightmap is a combination of sin functions and noise functions, generated in Rust code.\\n\\n![alt text](image.png)"},{"id":"/2024/08/18/p1","metadata":{"permalink":"/blog/2024/08/18/p1","editUrl":"https://github.com/raiment-studios/monorepo/tree/main/projects/raiment-studios/web2/blog/2024-08-18-p1/index.md","source":"@site/blog/2024-08-18-p1/index.md","title":"Hot reloading architecture","description":"_TL;DR: I can now modify my sinscape.js script file and when I do the sine-wave based voxel landscape will automatically refresh in the engine without a restart._","date":"2024-08-18T00:00:00.000Z","tags":[{"inline":true,"label":"hot_reloading","permalink":"/blog/tags/hot-reloading"},{"inline":true,"label":"architecture","permalink":"/blog/tags/architecture"}],"readingTime":7.235,"hasTruncateMarker":false,"authors":[],"frontMatter":{"tags":["hot_reloading","architecture"]},"unlisted":false,"prevItem":{"title":"Rust generator \\"scripts\\"","permalink":"/blog/2024/08/18/p2"},"nextItem":{"title":"MagicaVoxel VOX loading","permalink":"/blog/2024/08/17/index"}},"content":"**_TL;DR: I can now modify my `sinscape.js` script file and when I do the sine-wave based voxel landscape will automatically refresh in the engine without a restart._**\\n\\nI wanted to add \\"hot reloading\\" to the engine so that changes to data files are automatically reflected in the running engine. This is one of those small developer-ergonomics changes that, over time, I believe has huge benefits to productivity.\\n\\nThe primary challenge was to architect this such that the engine internals remain clean: i.e.\\n\\n1. Avoid scattering with knowledge of source file to asset mappings throughout the engine\\n2. Avoid introducing complex inter-object references within the engine (makes for a Rust lifetime manageable headache)\\n3. Minimal runtime impact in a release build\\n4. Keep file watching code isolated and independent as it\'s a development feature, not an engine feature\\n\\nI expect to have to revist this as the engine functionality increases and as I learn more about how to use Rust more effectively. \ud83d\ude04\\n\\n:::warning Heads up\\n\\nThis article does not go into full depth on some of changes discussed. **If you\'d like more detail added to any section, let me know!** I wanted to be sure there was an audience for this before going into any more depth.\\n\\n:::\\n\\n### Architecture\\n\\n```mermaid\\ngraph LR\\n    subgraph A[Scene Loading]\\n        DependencyList\\n    end\\n\\n    subgraph B[Engine Actor]\\n        FileWatcher\\n    end\\n\\n    subgraph C[Engine]\\n        DirtyList\\n    end\\n\\n    DependencyList --\x3e FileWatcher --\x3e DirtyList --\x3e HotReload\\n```\\n\\n1. Build a list of files -> asset ids during loading\\n2. Add a dev-only Actor that watches for file change\\n3. Trigger a reload for any assets that have been marked dirty\\n4. Do the reload\\n\\n### Build the dependency graph during scene loading (DependencyList)\\n\\n#### Record the dependencies\\n\\nAs the loader opens files, it maintains a mapping of each file to the list of asset ids that file impacted. Building the \\"graph\\" is simple as long as two rules are followed:\\n\\n1. **Record direct dependencies**: whenever a file is opened, ensure any assets created by that file add any entry mapping that `file -> asset id`\\n2. **Record transitive dependnecies**: whenever an asset relies on data from another asset, copy all the dependencies from the existing asset to the newly created asset.\\n\\n_Example: when loading a `.vox` file, we simply add that file name as a dependency on the model that\'s going to use that vox data._\\n\\n```rust\\ndependency_list.add_model_entry(vox_file.to_str().unwrap(), &desc.header.id);\\n\\nlet vox_data: vox_format::VoxData = vox_format::from_file(vox_file).unwrap();\\n```\\n\\nWe record the dependencies as IDs rather than object references as it\'s far cleaner for managing lifetimes.\\n\\nFor a simple scene, we end up with a list like the following\\n\\n```\\n   1.4 INFO  --- Dependency list ---\\n  [Model]      mmm-house3\\n      data/dist/base/models/mmm-house3/mmm-house3.yaml\\n      data/dist/base/models/mmm-house3/obj_house3.vox\\n  [Model]      sinscape\\n      data/dist/base/generators/sinscape.js\\n      data/dist/base/models/sinscape.yaml\\n  [Model]      unit_cube\\n      data/dist/base/models/unit_cube.yaml\\n  [Scene]      main\\n      data/dist/base/scenes/main.yaml\\n  [Instance]   house-000\\n      data/dist/base/models/mmm-house3/mmm-house3.yaml\\n      data/dist/base/models/mmm-house3/obj_house3.vox\\n      data/dist/base/scenes/main.yaml\\n  [Scene]      main-001\\n      data/dist/base/scenes/main-001.yaml\\n```\\n\\n#### Intrusive tracking\\n\\nThis is an \\"intrusive\\" approach: the bookkeeping of dependency tracking must be inlined directly into the loading logic and cannot be plugged in as an optional feature. This however feels fine as a design choice since the cost of building a mapping table is relatively low and it is conceptually simple.\\n\\nThe loading code _expects_ each asset load to have 1 or more calls to methods such as the below. Thus, we want an interface that makes recording dependencies simple, hard-to-get-wrong, and ideally self-descriptive one-liners.\\n\\n```rust\\nimpl DependencyList {\\n    // ...\\n\\n    // Direct dependencies\\n    pub fn add_scene_entry(&mut self, file_path: &str, id: &str) { ...  }\\n    pub fn add_model_entry(&mut self, file_path: &str, id: &str) { ...  }\\n    pub fn add_instance_entry(&mut self, file_path: &str, id: &str) { ...  }\\n\\n    // Transitive dependencies\\n    pub fn copy_entries(&mut self,\\n        src_type: EntityType, src_id: &str,\\n        dst_type: EntityType, dst_id: &str) { ... }\\n\\n    // ...\\n```\\n\\n#### Design choice: a list not a graph\\n\\nTransitive dependencies _copy_ dependencies which _flattens_ the dependency graph. This makes it a dependency _list_. This is done for simplicity\'s sake, though has a small trade-off (continue reading for more on this).\\n\\n:::note The alternative\\n\\nThe alternative would be to record `asset -> asset` dependencies as well `file -> asset` dependencies. This would add only a little more complexity as the flattening would happen at use, not build, time for the list -- but per the below this didn\'t seem worth doing at this stage. \ud83e\udd37\\n\\n:::\\n\\n#### Design choice: an immutable list after initialization\\n\\nThe architecture builds this list at _initial load_ only. It is treated effectively an immutable/static list after startup.\\n\\n\u2705 The benefit is this is very simple to reason about. The dependency list requires no dynamic update logic.\\n\\n\ud83d\udeab The downside is changes such as file renames or inter-asset dependency modifications will cause the dependency list to go stale.\\n\\nThe trade-off seems good as the unsupport cases are not the common case, the workaround is trivial (restart the engine).\\n\\n### Watch the files for changes (FileWatcher)\\n\\nI wanted to keep file watching logic out of the core engine. From an architectural perspective this should be as \\"pluggable\\" feature while incurring as little effect on the runtime in a release build as possible.\\n\\n-   The overhead of building the `DependencyList` during loading seems fine to always in the build\\n-   The notion of a `DirtyList` also seems fine in a release build as it is rather isolated\\n-   However, the file watching code should not be in the core code.\\n\\nThis was solved by adding an `Actor` to the `Engine`. This approach is quite simple and encapsulates the file watching code quite nicely. The FileWatcher itself only depends on a file list and `file -> id` mapping table: it doesn\'t really need to understand much more than doing that mapping.\\n\\n#### Pseudo-code\\n\\n```\\non init:\\n    for each file in the dependency list\\n        set up a file watcher\\n\\non every Nth frame update:\\n    check if the file watcher has reported any changes\\n    if no, return\\n\\n    for each modified file\\n        look up the asset ids dependent on that file\\n        update the engine\'s dirty_list with those asset ids\\n```\\n\\n#### Rust code\\n\\n<details>\\nThis is certainly not the \\"best\\" code, but was good enough to get things working. I\'m still learning Rust, so feedback on improving this code is very welcome.\\n\\n```rust\\nuse crate::engine;\\nuse log::info;\\nuse std::{\\n    collections::HashSet,\\n    sync::{Arc, Mutex},\\n};\\n\\nuse notify::{Config, PollWatcher, RecursiveMode, Watcher};\\n\\npub struct FileWatcher {\\n    watcher: PollWatcher,\\n    dirty_list: Arc<Mutex<HashSet<String>>>,\\n}\\n\\nimpl FileWatcher {\\n    pub fn new(file_list: Vec<String>) -> Self {\\n        let (tx, rx) = std::sync::mpsc::channel();\\n        // use the PollWatcher and disable automatic polling\\n        let mut watcher = PollWatcher::new(tx, Config::default().with_manual_polling()).unwrap();\\n\\n        // Sort simply for display / debugging purposes\\n        let mut file_list = file_list;\\n        file_list.sort();\\n\\n        for f in file_list {\\n            info!(\\"Watching: {:?}\\", f);\\n            watcher\\n                .watch(f.as_ref(), RecursiveMode::NonRecursive)\\n                .unwrap();\\n        }\\n\\n        // run event receiver on a different thread, we want this one for user input\\n        let dirty_list = Arc::new(Mutex::new(HashSet::new()));\\n        {\\n            let dirty_list = dirty_list.clone();\\n            std::thread::spawn(move || {\\n                for res in rx {\\n                    match res {\\n                        Ok(event) => {\\n                            let mut v = dirty_list.lock().unwrap();\\n                            for p in event.paths {\\n                                v.insert(p.to_str().unwrap().to_string());\\n                            }\\n                        }\\n                        Err(e) => println!(\\"watch error: {:?}\\", e),\\n                    }\\n                }\\n            });\\n        }\\n        Self {\\n            watcher,\\n            dirty_list,\\n        }\\n    }\\n}\\n\\nimpl engine::Actor for FileWatcher {\\n    fn update(&mut self, frame_state: &engine::FrameState) {\\n        if frame_state.frame % 60 != 37 {\\n            return;\\n        }\\n        self.watcher.poll().unwrap();\\n\\n        let mut v = self.dirty_list.lock().unwrap();\\n        if v.len() == 0 {\\n            return;\\n        }\\n\\n        let values = v.drain();\\n        for file in values {\\n            info!(\\"File changed: {:?}\\", file);\\n            let entries = frame_state.dependency_list.entries_for_file(&file);\\n            for e in entries {\\n                frame_state.dirty_list.borrow_mut().push(e.clone());\\n            }\\n        }\\n    }\\n}\\n```\\n\\n</details>\\n\\n### Communicate what\'s changed (DirtyList)\\n\\nThe Engine maintains a simple `DirtyList` to be notified about changes.\\n\\nI wanted to avoid complex event system, callbacks, object references or anything of that sort. So it simply has a list of asset ids that are currently considered \\"dirty.\\"\\n\\nThe `FileWatcher`, on it\'s own file events, simply adds assets ids to this list.\\n\\nOn each frame, the `Engine` checks if the dirty list is non-empty. If so, it provides the hot reloader with the list of asset ids to reload (and the original DependencyList to do the back-mapping to files it may need to reload). It clears the list after telling the hot reloader to do its work.\\n\\n### Reload the asset (HotReloader)\\n\\nThe HotReloader uses a brute-force implementation (this likely will need to be revisted in the future).\\n\\nIf _anything_ needs to be reloaded, the hot reloader loads the entire scene from disk again. This has the advantage of being simple: it\'s a \\"clean slate\\" that uses the exact same logic as engine startup.\\n\\nIt then loops over all active entities in the engine and checks if they are in the dirty list. If they are, it copies in the relevant data from the freshly loaded scene over the current data -- thus refreshing the asset."},{"id":"/2024/08/17/index","metadata":{"permalink":"/blog/2024/08/17/index","editUrl":"https://github.com/raiment-studios/monorepo/tree/main/projects/raiment-studios/web2/blog/2024-08-17/index.md","source":"@site/blog/2024-08-17/index.md","title":"MagicaVoxel VOX loading","description":"Added support for loading MagicaVoxel VOX models. This relies almost entirely on the work of others as the model below was created by Mike Judge and the VOX loading code comes from jgraef\'s vox-format crate. The only real addition to the Snowfall code was to add a YAML descriptor for VOX models and to write a quick translation from the vox-format format to the existing internal voxel format.","date":"2024-08-17T00:00:00.000Z","tags":[{"inline":true,"label":"MagicaVoxel","permalink":"/blog/tags/magica-voxel"},{"inline":true,"label":"wgsl","permalink":"/blog/tags/wgsl"}],"readingTime":2.835,"hasTruncateMarker":false,"authors":[],"frontMatter":{"tags":["MagicaVoxel","wgsl"]},"unlisted":false,"prevItem":{"title":"Hot reloading architecture","permalink":"/blog/2024/08/18/p1"},"nextItem":{"title":"Incremental progress","permalink":"/blog/2024/08/16/index"}},"content":"Added support for loading [MagicaVoxel VOX](https://ephtracy.github.io/) models. This relies almost entirely on the work of others as the model below was created by [Mike Judge](https://github.com/mikelovesrobots/mmmm) and the VOX loading code comes from [jgraef\'s](https://github.com/jgraef) [vox-format](https://github.com/jgraef/vox-format) crate. The only real addition to the Snowfall code was to add a YAML descriptor for VOX models and to write a quick translation from the `vox-format` format to the existing internal voxel format.\\n\\n#### From the todo list...\\n\\n-   [x] Support loading MagicaVoxel VOX files\\n-   [x] Display attribution info as the models are loaded\\n-   [x] Add voxel colors rather than just the normal-based shader\\n\\n<div style={{marginBottom: -48 }}>\\n![alt text](image-1.png)\\n</div>\\n\\n:::note Credits\\n\\n-   The [vox-format](https://github.com/jgraef/vox-format) crate for the VOX loading\\n-   Mike Judge\'s [Mini Mike\'s Metro Minis](https://github.com/mikelovesrobots/mmmm) for the model in the screenshot\\n\\n:::\\n\\n#### World coordinate based voxel shading/darkening\\n\\nNote that the shader is randomly darkening each voxel a bit based on it\'s world coordinate to make for an (intentionally) less uniformly colored look to the final render.\\n\\nNote that the array look-ups need to be expanded out as `if-else` branches as WGSL rejects attempts to index using a non-const value (i.e. `return shade_x[xi] + shade_y[yi] + shade_z[zi];` does not compile).\\n\\n```rust\\nconst shade_x = array<f32, 7>(0.05, 0.18, 0.10, 0.96, 0.46, 0.75, 0.55);\\nconst shade_y = array<f32, 7>(0.52, 0.52, 0.34, 0.03, 0.38, 0.01, 0.66);\\nconst shade_z = array<f32, 7>(0.33, 0.60, 0.80, 0.30, 0.16, 0.85, 0.13);\\n\\n// Shade the color based on the world coordinate grid position\\n//\\n// This gives a subtle variation to each voxel based on world position\\n// so that there\'s less uniformity to everything.  Subjectively produces\\n// a better looking result.\\n//\\n// Returns a [0-1] value.\\n//\\nfn shade_world_coord(world_coord : vec3<f32>) -> f32 {\\n    var grid_wc = vec3<i32>(floor(world_coord));\\n    var ix = (1 * grid_wc.x + 13 * grid_wc.y + 31 * grid_wc.z) % 7;\\n    var iy = (1 * grid_wc.y + 17 * grid_wc.z + 43 * grid_wc.x) % 7;\\n    var iz = (1 * grid_wc.z + 37 * grid_wc.x + 3 * grid_wc.y) % 7;\\n\\n\\n    // The shade arrays are [0-1] in range, so shade is [0-3]\\n    var shade = 0.0;\\n\\n    if ix == 0 {\\n        shade += shade_x[0];\\n    } else if ix == 1 {\\n        shade += shade_x[1];\\n    } else if ix == 2 {\\n        shade += shade_x[2];\\n    } else if ix == 3 {\\n        shade += shade_x[3];\\n    } else if ix == 4 {\\n        shade += shade_x[4];\\n    } else if ix == 5 {\\n        shade += shade_x[5];\\n    } else if ix == 6 {\\n        shade += shade_x[6];\\n    }\\n\\n    if iy == 0 {\\n        shade += shade_y[0];\\n    } else if iy == 1 {\\n        shade += shade_y[1];\\n    } else if iy == 2 {\\n        shade += shade_y[2];\\n    } else if iy == 3 {\\n        shade += shade_y[3];\\n    } else if iy == 4 {\\n        shade += shade_y[4];\\n    } else if iy == 5 {\\n        shade += shade_y[5];\\n    } else if iy == 6 {\\n        shade += shade_y[6];\\n    }\\n\\n    if iz == 0 {\\n        shade += shade_z[0];\\n    } else if iz == 1 {\\n        shade += shade_z[1];\\n    } else if iz == 2 {\\n        shade += shade_z[2];\\n    } else if iz == 3 {\\n        shade += shade_z[3];\\n    } else if iz == 4 {\\n        shade += shade_z[4];\\n    } else if iz == 5 {\\n        shade += shade_z[5];\\n    } else if iz == 6 {\\n        shade += shade_z[6];\\n    }\\n\\n    return shade/3.0;\\n}\\n\\n```"},{"id":"/2024/08/16/index","metadata":{"permalink":"/blog/2024/08/16/index","editUrl":"https://github.com/raiment-studios/monorepo/tree/main/projects/raiment-studios/web2/blog/2024-08-16/index.md","source":"@site/blog/2024-08-16/index.md","title":"Incremental progress","description":"Not much visually different, but improved the code base a bit. Most notably having the engine automatically run model generation scripts (rather than manually running scripts to create static assets) and improved logging.","date":"2024-08-16T00:00:00.000Z","tags":[{"inline":true,"label":"generation_id","permalink":"/blog/tags/generation-id"}],"readingTime":0.92,"hasTruncateMarker":false,"authors":[],"frontMatter":{"tags":["generation_id"]},"unlisted":false,"prevItem":{"title":"MagicaVoxel VOX loading","permalink":"/blog/2024/08/17/index"},"nextItem":{"title":"Progress","permalink":"/blog/2024/08/15/index"}},"content":"Not much visually different, but improved the code base a bit. Most notably having the engine automatically run model generation scripts (rather than manually running scripts to create static assets) and improved logging.\\n\\n### Changes\\n\\n\u2795 Split model definition YAML from generator script JS<br/>\\n\u2795 Landscape generator takes grid size as an optional parameter<br/>\\n\u2795 Improved logging output<br/>\\n\u2795 Default camera now set based on scene bounds<br/>\\n\u2795 Added `id` and `generation` to models to detect cache staleness<br/>\\n\u2795 Added `BoundingBox`<br/>\\n\ud83d\uddc4\ufe0f Split files for better organization<br/>\\n\u2795 git status alias not provides links to diffs on GitHub so summary changelogs like this are easier to create<br/>\\n\\n### Potential next steps\\n\\n**\ud83d\udd2e Hot reloading of the module when the script or model file changes**\\n\\nThe above is a bit tricky as it creates a dependency between the loading code, an async file watcher, and the main render loop. I don\'t yet have a clear vision for how to connect those in a non-intrusive manner, but otherwise would like to add \\"hot reloading\\" as a core piece of functionality to make development easier and faster."},{"id":"/2024/08/15/index","metadata":{"permalink":"/blog/2024/08/15/index","editUrl":"https://github.com/raiment-studios/monorepo/tree/main/projects/raiment-studios/web2/blog/2024-08-15/index.md","source":"@site/blog/2024-08-15/index.md","title":"Progress","description":"Shading placeholder","date":"2024-08-15T00:00:00.000Z","tags":[{"inline":true,"label":"wgsl","permalink":"/blog/tags/wgsl"},{"inline":true,"label":"wgpu","permalink":"/blog/tags/wgpu"}],"readingTime":1.56,"hasTruncateMarker":false,"authors":[],"frontMatter":{"tags":["wgsl","wgpu"]},"unlisted":false,"prevItem":{"title":"Incremental progress","permalink":"/blog/2024/08/16/index"},"nextItem":{"title":"WGPU progress","permalink":"/blog/2024/08/12/index"}},"content":"#### Shading placeholder\\n\\nAdded shading based on world coordinate positions. This was mostly a test of adding new uniforms and vertex shader outputs to the shader program.\\n\\n![alt text](image.png)\\n\\n#### Voxels\\n\\nAdded a voxel model. Very inefficient at this point, but \\"correct.\\"\\n\\n![alt text](image-1.png)\\n\\n#### Bug! \ud83d\udc1b\\n\\nTried increasing the resolution and found bugs :)\\n\\n![alt text](image-2.png)\\n\\n**Guess: missing array data?**\\n\\nManually counting the input data matches the generated positions array and checking against the runtime data...\\n\\n-   `4416 voxels * 6 faces/voxel * 8 positions/face => 105984 positiions`\\n-   `4416 voxels * 6 faces/voxel * 6 indices/face => 158976 indices`\\n\\n...seems correct.\\n\\n**Guess: too many draw calls?**\\n\\nSeems impossible as this is a single mesh.\\n\\n**Investigation: is it always the same voxels that are missing?**\\n\\nFlipping the order of the voxels during generation changes the missing voxels. Not sure what to conclude from this yet.\\n\\n![alt text](image-3.png)\\n\\nDrawing just the Z+ face on the voxels seems to work correctly. The same seems to be true when rendering any one of the six faces.\\n\\n![alt text](image-4.png)\\n\\n...but if as soon as 3 faces are rendered together, voxels seem to be lost.\\n\\n**Guess: too many indicies**\\n\\nYup. The code is using `u16` which has a max representable value of `256*256 = 65,536`. There are `158,976` indices.\\n\\nChanging to a `u32` index buffer addresses the problem.\\n\\n![alt text](image-5.png)\\n\\n**Resolution**\\n\\nBumping the render code to always use `u32` seems fine for this stage of development. Using the larger buffer size affords more flexibility, which is a higher priority right now than optimization for memory or performance.\\n\\nVoxel chunking and optimizing away invisible faces need to be done regardless. After that is done, it should be easier to move back to a `u16` index buffer.\\n\\n#### A larger model\\n\\nWith the bug fixed, here\'s a sine + cosine generated voxel heightmap of `128x128x32` resolution.\\n\\n![alt text](image-6.png)"},{"id":"/2024/08/12/index","metadata":{"permalink":"/blog/2024/08/12/index","editUrl":"https://github.com/raiment-studios/monorepo/tree/main/projects/raiment-studios/web2/blog/2024-08-12/index.md","source":"@site/blog/2024-08-12/index.md","title":"WGPU progress","description":"Progress update: have some vertices making it from disk to the screen. That\'s a cube sitting behind of a \\"2D\\" pentagon (not necessarily obvious without lights or shading yet).","date":"2024-08-12T00:00:00.000Z","tags":[{"inline":true,"label":"wgpu","permalink":"/blog/tags/wgpu"}],"readingTime":0.575,"hasTruncateMarker":false,"authors":[],"frontMatter":{"tags":["wgpu"]},"unlisted":false,"prevItem":{"title":"Progress","permalink":"/blog/2024/08/15/index"},"nextItem":{"title":"Worth reading","permalink":"/blog/2024/08/11/index"}},"content":"Progress update: have some vertices making it from disk to the screen. That\'s a cube sitting behind of a \\"2D\\" pentagon (not necessarily obvious without lights or shading yet).\\n\\nThe general task I\'ve been working on is taking the \\"catch-all\\" `State` object from the [Learn Wgpu tutorial](https://sotrh.github.io/learn-wgpu/) and refactoring into a rendering architecture. This requires wrangling with lifetimes and data sharing, both in my learning how Rust works as well as how objects work in wgpu.\\n\\n![alt text](image-1.png)\\n\\nA bit more progress, getting basic semi-harcoded face shading working. Also changed the camera axes to a `Z+ => UP` system.\\n\\n![alt text](image.png)\\n\\nA bit more progress: depth buffering finally enabled and rendering multiple objects.\\n\\n![alt text](image-2.png)"},{"id":"/2024/08/11/index","metadata":{"permalink":"/blog/2024/08/11/index","editUrl":"https://github.com/raiment-studios/monorepo/tree/main/projects/raiment-studios/web2/blog/2024-08-11/index.md","source":"@site/blog/2024-08-11/index.md","title":"Worth reading","description":"-   Arc and Mutex in Rust - useful examples and explanation about thes Rust types","date":"2024-08-11T00:00:00.000Z","tags":[{"inline":true,"label":"worth_reading","permalink":"/blog/tags/worth-reading"}],"readingTime":0.125,"hasTruncateMarker":false,"authors":[],"frontMatter":{"tags":["worth_reading"]},"unlisted":false,"prevItem":{"title":"WGPU progress","permalink":"/blog/2024/08/12/index"},"nextItem":{"title":"Following the wgpu tutorial","permalink":"/blog/2024/08/10/index"}},"content":"-   [Arc and Mutex in Rust](https://itsallaboutthebit.com/arc-mutex/) - useful examples and explanation about thes Rust types\\n-   [Reddit thread about wgpu buffers](https://www.reddit.com/r/rust/comments/141ll5b/wgpu_questions_vertex_buffers/)\\n-   [WebGPU Buffer Uploads](https://toji.dev/webgpu-best-practices/buffer-uploads.html)"},{"id":"/2024/08/10/index","metadata":{"permalink":"/blog/2024/08/10/index","editUrl":"https://github.com/raiment-studios/monorepo/tree/main/projects/raiment-studios/web2/blog/2024-08-10/index.md","source":"@site/blog/2024-08-10/index.md","title":"Following the wgpu tutorial","description":"Ramping up on the custom rendering engine by going through the excellent Learn Wgpu tutorial. There\'s not much to say that\'s insightful here, but I find it\'s nice to create \\"early days\\" blog posts and images to highlight progress over time.","date":"2024-08-10T00:00:00.000Z","tags":[{"inline":true,"label":"wgpu","permalink":"/blog/tags/wgpu"}],"readingTime":1.205,"hasTruncateMarker":false,"authors":[],"frontMatter":{"tags":["wgpu"]},"unlisted":false,"prevItem":{"title":"Worth reading","permalink":"/blog/2024/08/11/index"}},"content":"Ramping up on the custom rendering engine by going through the excellent [Learn Wgpu tutorial](https://sotrh.github.io/learn-wgpu/). There\'s not much to say that\'s insightful here, but I find it\'s nice to create \\"early days\\" blog posts and images to highlight progress over time.\\n\\n![alt text](image-1.png)\\n\\n#### I read a comment along the lines of \\"wgpu has so much boilerplate\\"\\n\\nThough pedantic, I\'d argue wgpu has a lot of _configuration_. I tend to consider boilerplate code common text that _must be_ repeated to properly structure or specify another piece of _non-common_ configuration or otherwise unique code. (Note: my personal definition is _very_ different from [AWS\' definition](https://aws.amazon.com/what-is/boilerplate-code/) which portrays \\"boilerplate\\" as a positive). By \\"must be repeated\\", I\'m alluding to the kind of code that cannot be encapsulated easily into a reusable function, library, or other standard language primitive -- let\'s ignore macros certainly blur that line and just run with this hand-wavy definition!\\n\\nIn the context of creating _many different wgpu programs_, I can see how repeating the exact same configuration would constitue a good deal of \\"boilerplate code.\\" However, that commonality could be easily wrapped into a reusable library, which -- if we\'re willing to run with my definition of boilerplate code! -- means it is not boilerplate code as the code does not have the quality that it \\"must be\\" repeated.\\n\\nIn the context of a single program, wgpu strikes me simply as a very low-level library with detailed, highly structured configuration."}]}}')}}]);