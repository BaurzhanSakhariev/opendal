"use strict";(self.webpackChunkopendal_website=self.webpackChunkopendal_website||[]).push([[5490],{9613:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var n=r(9496);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=s(r),f=o,d=m["".concat(c,".").concat(f)]||m[f]||u[f]||a;return r?n.createElement(d,i(i({ref:t},p),{},{components:r})):n.createElement(d,i({ref:t},p))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=f;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[m]="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},4745:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var n=r(8126),o=(r(9496),r(9613));const a={title:"Generate release note"},i=void 0,l={unversionedId:"committers/reference/generate_release_note",id:"committers/reference/generate_release_note",title:"Generate release note",description:"This document describes how to generate release notes using GitHub:",source:"@site/community/committers/reference/generate_release_note.md",sourceDirName:"committers/reference",slug:"/committers/reference/generate_release_note",permalink:"/community/committers/reference/generate_release_note",draft:!1,editUrl:"https://github.com/apache/opendal/tree/main/website/community/committers/reference/generate_release_note.md",tags:[],version:"current",frontMatter:{title:"Generate release note"},sidebar:"docs",previous:{title:"Reference",permalink:"/community/category/reference"},next:{title:"Setup GPG key",permalink:"/community/committers/reference/setup_gpg"}},c={},s=[],p={toc:s},m="wrapper";function u(e){let{components:t,...r}=e;return(0,o.kt)(m,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This document describes how to generate release notes using GitHub:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Go to ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/apache/opendal/releases/new"},"https://github.com/apache/opendal/releases/new")," to start a new release."),(0,o.kt)("li",{parentName:"ol"},"Fill the tag with ",(0,o.kt)("inlineCode",{parentName:"li"},"draft"),"."),(0,o.kt)("li",{parentName:"ol"},"Click on ",(0,o.kt)("inlineCode",{parentName:"li"},"Generate release notes")," to generate them."),(0,o.kt)("li",{parentName:"ol"},"Copy the generated content and close the page.")),(0,o.kt)("p",null,"Please note that we only use this feature to generate release notes, so please do not click on ",(0,o.kt)("inlineCode",{parentName:"p"},"Publish Release")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"Save draft"),". We will publish it after creating the tag."))}u.isMDXComponent=!0}}]);