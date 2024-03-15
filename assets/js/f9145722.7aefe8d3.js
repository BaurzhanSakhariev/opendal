"use strict";(self.webpackChunkopendal_website=self.webpackChunkopendal_website||[]).push([[6529],{9638:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>h,contentTitle:()=>d,default:()=>f,frontMatter:()=>c,metadata:()=>u,toc:()=>p});var r=t(1527),s=t(2175);function a(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",input:"input",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"capabilities",children:"Capabilities"}),"\n",(0,r.jsx)(n.p,{children:"This service can be used to:"}),"\n",(0,r.jsxs)(n.ul,{className:"contains-task-list",children:["\n",(0,r.jsxs)(n.li,{className:"task-list-item",children:[(0,r.jsx)(n.input,{type:"checkbox",checked:!0,disabled:!0})," stat"]}),"\n",(0,r.jsxs)(n.li,{className:"task-list-item",children:[(0,r.jsx)(n.input,{type:"checkbox",checked:!0,disabled:!0})," read"]}),"\n",(0,r.jsxs)(n.li,{className:"task-list-item",children:[(0,r.jsx)(n.input,{type:"checkbox",checked:!0,disabled:!0})," write"]}),"\n",(0,r.jsxs)(n.li,{className:"task-list-item",children:[(0,r.jsx)(n.input,{type:"checkbox",checked:!0,disabled:!0})," delete"]}),"\n",(0,r.jsxs)(n.li,{className:"task-list-item",children:[(0,r.jsx)(n.input,{type:"checkbox",checked:!0,disabled:!0})," create_dir"]}),"\n",(0,r.jsxs)(n.li,{className:"task-list-item",children:[(0,r.jsx)(n.input,{type:"checkbox",checked:!0,disabled:!0})," list"]}),"\n",(0,r.jsxs)(n.li,{className:"task-list-item",children:[(0,r.jsx)(n.input,{type:"checkbox",checked:!0,disabled:!0})," copy"]}),"\n",(0,r.jsxs)(n.li,{className:"task-list-item",children:[(0,r.jsx)(n.input,{type:"checkbox",checked:!0,disabled:!0})," rename"]}),"\n",(0,r.jsxs)(n.li,{className:"task-list-item",children:[(0,r.jsx)(n.input,{type:"checkbox",disabled:!0})," batch"]}),"\n"]}),"\n",(0,r.jsx)(n.h1,{id:"configuration",children:"Configuration"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"root"}),": Set the work directory for backend"]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"credentials-related",children:"Credentials related"}),"\n",(0,r.jsx)(n.h4,{id:"just-provide-access-token-temporary",children:"Just provide Access Token (Temporary)"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"access_token"}),": set the access_token for google drive api\nPlease notice its expiration."]}),"\n"]}),"\n",(0,r.jsx)(n.h4,{id:"or-provide-client-id-and-client-secret-and-refresh-token-long-term",children:"Or provide Client ID and Client Secret and refresh token (Long Term)"}),"\n",(0,r.jsx)(n.p,{children:"If you want to let OpenDAL to refresh the access token automatically,\nplease provide the following fields:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"refresh_token"}),": set the refresh_token for google drive api"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"client_id"}),": set the client_id for google drive api"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"client_secret"}),": set the client_secret for google drive api"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"OpenDAL is a library, it cannot do the first step of OAuth2 for you.\nYou need to get authorization code from user by calling GoogleDrive's authorize url\nand exchange it for refresh token."}),"\n",(0,r.jsxs)(n.p,{children:["Make sure you have enabled Google Drive API in your Google Cloud Console.\nAnd your OAuth scope contains ",(0,r.jsx)(n.code,{children:"https://www.googleapis.com/auth/drive"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["Please refer to ",(0,r.jsx)(n.a,{href:"https://developers.google.com/identity/protocols/oauth2/",children:"GoogleDrive OAuth2 Flow"}),"\nfor more information."]}),"\n",(0,r.jsxs)(n.p,{children:["You can refer to [",(0,r.jsx)(n.code,{children:"GdriveBuilder"}),"]'s docs for more information"]}),"\n",(0,r.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,r.jsx)(n.h3,{id:"via-builder",children:"Via Builder"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-rust",children:'use anyhow::Result;\nuse opendal::services::Gdrive;\nuse opendal::Operator;\n\n#[tokio::main]\nasync fn main() -> Result<()> {\n    let mut builder = Gdrive::default();\n    builder.root("/test");\n    builder.access_token("<token>");\n\n    Ok(())\n}\n\n'})})]})}function i(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}var o=t(5431),l=t(2860);const c={title:"Gdrive"},d=void 0,u={id:"services/gdrive",title:"Gdrive",description:"Google Drive services support.",source:"@site/docs/services/gdrive.mdx",sourceDirName:"services",slug:"/services/gdrive",permalink:"/docs/services/gdrive",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/opendal/tree/main/website/docs/services/gdrive.mdx",tags:[],version:"current",lastUpdatedBy:"Weijie Guo",lastUpdatedAt:1710487984,formattedLastUpdatedAt:"Mar 15, 2024",frontMatter:{title:"Gdrive"},sidebar:"docs",previous:{title:"Gcs",permalink:"/docs/services/gcs"},next:{title:"GHAC",permalink:"/docs/services/ghac"}},h={},p=[{value:"Via Config",id:"via-config",level:3}];function m(e){const n={a:"a",code:"code",h3:"h3",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"https://drive.google.com",children:"Google Drive"})," services support."]}),"\n","\n",(0,r.jsx)(i,{components:e.components}),"\n",(0,r.jsx)(n.h3,{id:"via-config",children:"Via Config"}),"\n","\n","\n",(0,r.jsxs)(o.Z,{children:[(0,r.jsx)(l.Z,{value:"rust",label:"Rust",default:!0,children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-rust",children:'use anyhow::Result;\nuse opendal::Operator;\nuse opendal::Scheme;\nuse std::collections::HashMap;\n\n#[tokio::main]\nasync fn main() -> Result<()> {\n    let mut map = HashMap::new();\n    map.insert("root".to_string(), "/path/to/dir".to_string());\n    map.insert("access_token".to_string(), "your_access_token".to_string());\n\n    let op: Operator = Operator::via_map(Scheme::Gdrive, map)?;\n    Ok(())\n}\n'})})}),(0,r.jsx)(l.Z,{value:"node.js",label:"Node.js",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:'import { Operator } from "opendal";\n\nasync function main() {\n  const op = new Operator("gdrive", {\n    root: "/path/to/dir",\n    access_token: "your_access_token",\n  });\n}\n'})})}),(0,r.jsx)(l.Z,{value:"python",label:"Python",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:'import opendal\n\nop = opendal.Operator("gdrive",\n  root="/path/to/dir",\n  access_token="your_access_token",\n)\n'})})})]})]})}function f(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(m,{...e})}):m(e)}},2860:(e,n,t)=>{t.d(n,{Z:()=>i});t(959);var r=t(6259);const s={tabItem:"tabItem_CbVR"};var a=t(1527);function i(e){let{children:n,hidden:t,className:i}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,r.Z)(s.tabItem,i),hidden:t,children:n})}},5431:(e,n,t)=>{t.d(n,{Z:()=>y});var r=t(959),s=t(6259),a=t(2990),i=t(8903),o=t(3133),l=t(563),c=t(351),d=t(3026);function u(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:s}}=e;return{value:n,label:t,attributes:r,default:s}}))}(t);return function(e){const n=(0,c.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:t}=e;const s=(0,i.k6)(),a=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,l._X)(a),(0,r.useCallback)((e=>{if(!a)return;const n=new URLSearchParams(s.location.search);n.set(a,e),s.replace({...s.location,search:n.toString()})}),[a,s])]}function f(e){const{defaultValue:n,queryString:t=!1,groupId:s}=e,a=h(e),[i,l]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:a}))),[c,u]=m({queryString:t,groupId:s}),[f,x]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[s,a]=(0,d.Nk)(t);return[s,(0,r.useCallback)((e=>{t&&a.set(e)}),[t,a])]}({groupId:s}),v=(()=>{const e=c??f;return p({value:e,tabValues:a})?e:null})();(0,o.Z)((()=>{v&&l(v)}),[v]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),x(e)}),[u,x,a]),tabValues:a}}var x=t(3499);const v={tabList:"tabList_zxWd",tabItem:"tabItem_TcdJ"};var b=t(1527);function g(e){let{className:n,block:t,selectedValue:r,selectValue:i,tabValues:o}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,a.o5)(),d=e=>{const n=e.currentTarget,t=l.indexOf(n),s=o[t].value;s!==r&&(c(n),i(s))},u=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=l.indexOf(e.currentTarget)+1;n=l[t]??l[0];break}case"ArrowLeft":{const t=l.indexOf(e.currentTarget)-1;n=l[t]??l[l.length-1];break}}n?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":t},n),children:o.map((e=>{let{value:n,label:t,attributes:a}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>l.push(e),onKeyDown:u,onClick:d,...a,className:(0,s.Z)("tabs__item",v.tabItem,a?.className,{"tabs__item--active":r===n}),children:t??n},n)}))})}function j(e){let{lazy:n,children:t,selectedValue:s}=e;const a=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=a.find((e=>e.props.value===s));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:a.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==s})))})}function k(e){const n=f(e);return(0,b.jsxs)("div",{className:(0,s.Z)("tabs-container",v.tabList),children:[(0,b.jsx)(g,{...e,...n}),(0,b.jsx)(j,{...e,...n})]})}function y(e){const n=(0,x.Z)();return(0,b.jsx)(k,{...e,children:u(e.children)},String(n))}},2175:(e,n,t)=>{t.d(n,{Z:()=>o,a:()=>i});var r=t(959);const s={},a=r.createContext(s);function i(e){const n=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),r.createElement(a.Provider,{value:n},e.children)}}}]);