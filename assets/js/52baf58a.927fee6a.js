"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4647],{1625:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>d,frontMatter:()=>o,metadata:()=>a,toc:()=>u});var i=s(4848),n=s(8453);const o={tags:["off-topic","youtube-music","ux"]},r="Auto-skip disliked music in YouTube Music",a={permalink:"/blog/2024/11/18/2024-11-18/",editUrl:"https://github.com/raiment-studios/monorepo/tree/main/projects/raiment-studios/web2/blog/2024-11-18/2024-11-18.md",source:"@site/blog/2024-11-18/2024-11-18.md",title:"Auto-skip disliked music in YouTube Music",description:"This is a bit off-topic from the usual blog posts, but I want to post it as the default user experience of YouTube Music to play disliked music is baffling to me. I simply don't understand why YouTube Music plays songs you've disliked. I could see maybe if it played them only after a certain \"snooze\" period of weeks, months, etc. But regardless...",date:"2024-11-18T00:00:00.000Z",tags:[{inline:!0,label:"off-topic",permalink:"/blog/tags/off-topic"},{inline:!0,label:"youtube-music",permalink:"/blog/tags/youtube-music"},{inline:!0,label:"ux",permalink:"/blog/tags/ux"}],readingTime:1.365,hasTruncateMarker:!1,authors:[],frontMatter:{tags:["off-topic","youtube-music","ux"]},unlisted:!1,nextItem:{title:"Voxel brushes",permalink:"/blog/2024/11/16/2024-11-16/"}},l={authorsImageUrls:[]},u=[{value:"How to automatically skip disliked songs",id:"how-to-automatically-skip-disliked-songs",level:2},{value:"Install TamperMonkey",id:"install-tampermonkey",level:3},{value:"Add the following user script to TamperMonkey",id:"add-the-following-user-script-to-tampermonkey",level:3},{value:"Aside: Set up UserScript auto-sync",id:"aside-set-up-userscript-auto-sync",level:3}];function c(e){const t={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,n.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(t.p,{children:["This is a bit off-topic from the usual blog posts, but I want to post it as ",(0,i.jsx)(t.strong,{children:"the default user experience of YouTube Music to play disliked music is baffling to me"}),". I simply don't understand why YouTube Music ",(0,i.jsx)(t.em,{children:"plays songs you've disliked"}),'. I could see maybe if it played them only after a certain "snooze" period of weeks, months, etc. But regardless...']}),"\n",(0,i.jsx)(t.h2,{id:"how-to-automatically-skip-disliked-songs",children:"How to automatically skip disliked songs"}),"\n",(0,i.jsx)(t.h3,{id:"install-tampermonkey",children:"Install TamperMonkey"}),"\n",(0,i.jsxs)(t.p,{children:["First, this assumes you're using a ",(0,i.jsx)(t.a,{href:"https://www.tampermonkey.net/",children:"TamperMonkey"})," compatible browser and are willing / able to install TamperMonkey as an extension to your browser."]}),"\n",(0,i.jsx)(t.h3,{id:"add-the-following-user-script-to-tampermonkey",children:"Add the following user script to TamperMonkey"}),"\n",(0,i.jsxs)(t.p,{children:["Credit goes entirely to ",(0,i.jsx)(t.a,{href:"https://github.com/GrayStrider",children:"GrayStrider"})," on GitHub for posting a UserScript on how to do this about 4 years prior to the writing of this article."]}),"\n",(0,i.jsx)(t.p,{children:"Here is a slightly modified version of the original gist, which includes the required UserScript comment header:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-js",children:"// ==UserScript==\n// @name         YouTube Music: skip dislikes\n// @namespace    http://tampermonkey.net/\n// @version      2024-11-18\n// @description  work around some baffling UI/UX in YouTube Music\n// @match        https://music.youtube.com/*\n// @grant        none\n// ==/UserScript==\n(function () {\n    'use strict';\n\n    const $$ = (id) => document.getElementById(id);\n    const $ = (className) => document.getElementsByClassName(className);\n\n    setInterval(() => {\n        console.log('Checking to see if the current song is disliked...');\n        let container = $$('like-button-renderer');\n        let skipBtn = $('next-button')[0];\n\n        if (container.getAttribute('like-status') === 'DISLIKE') {\n            skipBtn.click();\n        }\n    }, 1000);\n})();\n"})}),"\n",(0,i.jsx)(t.p,{children:"The original references are here:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["The Reddit post linking to the Gist: ",(0,i.jsx)(t.a,{href:"https://www.reddit.com/r/YoutubeMusic/comments/ib9d50/userscript_to_automatically_skip_disliked_songs/",children:"https://www.reddit.com/r/YoutubeMusic/comments/ib9d50/userscript_to_automatically_skip_disliked_songs/"})]}),"\n",(0,i.jsxs)(t.li,{children:["The original Gist: ",(0,i.jsx)(t.a,{href:"https://gist.github.com/GrayStrider/c483f3c2b5cdb20434530ad3f1da6b8a",children:"https://gist.github.com/GrayStrider/c483f3c2b5cdb20434530ad3f1da6b8a"})]}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"aside-set-up-userscript-auto-sync",children:"Aside: Set up UserScript auto-sync"}),"\n",(0,i.jsx)(t.p,{children:"TamperMonkey supports syncing your scripts between computers and browsers. This is definitely worth setting up and only takes a minute."})]})}function d(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},8453:(e,t,s)=>{s.d(t,{R:()=>r,x:()=>a});var i=s(6540);const n={},o=i.createContext(n);function r(e){const t=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:r(e.components),i.createElement(o.Provider,{value:t},e.children)}}}]);