"use strict";(self.webpackChunkopendal_website=self.webpackChunkopendal_website||[]).push([[4790],{3529:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>d,default:()=>m,frontMatter:()=>o,metadata:()=>u,toc:()=>h});var s=t(1527),a=t(2175);function r(e){const n={code:"code",del:"del",h2:"h2",h3:"h3",input:"input",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"capabilities",children:"Capabilities"}),"\n",(0,s.jsx)(n.p,{children:"This service can be used to:"}),"\n",(0,s.jsxs)(n.ul,{className:"contains-task-list",children:["\n",(0,s.jsxs)(n.li,{className:"task-list-item",children:[(0,s.jsx)(n.input,{type:"checkbox",checked:!0,disabled:!0})," stat"]}),"\n",(0,s.jsxs)(n.li,{className:"task-list-item",children:[(0,s.jsx)(n.input,{type:"checkbox",checked:!0,disabled:!0})," read"]}),"\n",(0,s.jsxs)(n.li,{className:"task-list-item",children:[(0,s.jsx)(n.input,{type:"checkbox",checked:!0,disabled:!0})," write"]}),"\n",(0,s.jsxs)(n.li,{className:"task-list-item",children:[(0,s.jsx)(n.input,{type:"checkbox",checked:!0,disabled:!0})," create_dir"]}),"\n",(0,s.jsxs)(n.li,{className:"task-list-item",children:[(0,s.jsx)(n.input,{type:"checkbox",checked:!0,disabled:!0})," delete"]}),"\n",(0,s.jsxs)(n.li,{className:"task-list-item",children:[(0,s.jsx)(n.input,{type:"checkbox",checked:!0,disabled:!0})," copy"]}),"\n",(0,s.jsxs)(n.li,{className:"task-list-item",children:[(0,s.jsx)(n.input,{type:"checkbox",checked:!0,disabled:!0})," rename"]}),"\n",(0,s.jsxs)(n.li,{className:"task-list-item",children:[(0,s.jsx)(n.input,{type:"checkbox",checked:!0,disabled:!0})," list"]}),"\n",(0,s.jsxs)(n.li,{className:"task-list-item",children:[(0,s.jsx)(n.input,{type:"checkbox",disabled:!0})," ",(0,s.jsx)(n.del,{children:"scan"})]}),"\n",(0,s.jsxs)(n.li,{className:"task-list-item",children:[(0,s.jsx)(n.input,{type:"checkbox",disabled:!0})," ",(0,s.jsx)(n.del,{children:"presign"})]}),"\n",(0,s.jsxs)(n.li,{className:"task-list-item",children:[(0,s.jsx)(n.input,{type:"checkbox",disabled:!0})," blocking"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"notes",children:"Notes"}),"\n",(0,s.jsxs)(n.p,{children:["Bazel Remote Caching and Ccache HTTP Storage is also part of this service.\nUsers can use ",(0,s.jsx)(n.code,{children:"webdav"})," to connect those services."]}),"\n",(0,s.jsx)(n.h2,{id:"configuration",children:"Configuration"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"endpoint"}),": set the endpoint for webdav"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"root"}),": Set the work directory for backend"]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["You can refer to [",(0,s.jsx)(n.code,{children:"WebdavBuilder"}),"]'s docs for more information"]}),"\n",(0,s.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,s.jsx)(n.h3,{id:"via-builder",children:"Via Builder"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-rust",children:'use anyhow::Result;\nuse opendal::services::Webdav;\nuse opendal::Operator;\n\n#[tokio::main]\nasync fn main() -> Result<()> {\n    // create backend builder\n    let mut builder = Webdav::default();\n\n    builder.endpoint("127.0.0.1");\n    builder.username("xxx");\n    builder.password("xxx");\n\n    let op: Operator = Operator::new(builder)?.finish();\n\n    Ok(())\n}\n'})})]})}function i(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(r,{...e})}):r(e)}var l=t(5431),c=t(2860);const o={title:"WebDAV"},d=void 0,u={id:"services/webdav",title:"WebDAV",description:"WebDAV backend support.",source:"@site/docs/services/webdav.mdx",sourceDirName:"services",slug:"/services/webdav",permalink:"/docs/services/webdav",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/opendal/tree/main/website/docs/services/webdav.mdx",tags:[],version:"current",lastUpdatedBy:"zjregee",lastUpdatedAt:1710423527,formattedLastUpdatedAt:"Mar 14, 2024",frontMatter:{title:"WebDAV"},sidebar:"docs",previous:{title:"Vercel Artifacts",permalink:"/docs/services/vercel_artifacts"},next:{title:"WebHDFS",permalink:"/docs/services/webhdfs"}},p={},h=[{value:"Via Config",id:"via-config",level:3}];function b(e){const n={a:"a",code:"code",h3:"h3",p:"p",pre:"pre",...(0,a.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"https://datatracker.ietf.org/doc/html/rfc4918",children:"WebDAV"})," backend support."]}),"\n","\n",(0,s.jsx)(i,{components:e.components}),"\n",(0,s.jsx)(n.h3,{id:"via-config",children:"Via Config"}),"\n","\n","\n",(0,s.jsxs)(l.Z,{children:[(0,s.jsx)(c.Z,{value:"rust",label:"Rust",default:!0,children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-rust",children:'use anyhow::Result;\nuse opendal::Operator;\nuse opendal::Scheme;\nuse std::collections::HashMap;\n\n#[tokio::main]\nasync fn main() -> Result<()> {\n    let mut map = HashMap::new();\n    map.insert("endpoint".to_string(), "127.0.0.1".to_string());\n    map.insert("username".to_string(), "xxx".to_string());\n    map.insert("password".to_string(), "xxx".to_string());\n\n    let op: Operator = Operator::via_map(Scheme::Webdav, map)?;\n    Ok(())\n}\n'})})}),(0,s.jsx)(c.Z,{value:"node.js",label:"Node.js",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:'import { Operator } from "opendal";\nasync function main() {\n  const op = new Operator("webdav", {\n    endpoint: "127.0.0.1",\n    username: "xxx",\n    password: "xxx",\n  });\n}\n'})})}),(0,s.jsx)(c.Z,{value:"python",label:"Python",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:'import opendal\nop = opendal.Operator("webdav",\n    endpoint="127.0.0.1",\n    username="xxx",\n    password="xxx",\n)\n'})})})]})]})}function m(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(b,{...e})}):b(e)}},2860:(e,n,t)=>{t.d(n,{Z:()=>i});t(959);var s=t(6259);const a={tabItem:"tabItem_CbVR"};var r=t(1527);function i(e){let{children:n,hidden:t,className:i}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,s.Z)(a.tabItem,i),hidden:t,children:n})}},5431:(e,n,t)=>{t.d(n,{Z:()=>w});var s=t(959),a=t(6259),r=t(2990),i=t(8903),l=t(3133),c=t(563),o=t(351),d=t(3026);function u(e){return s.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:n,children:t}=e;return(0,s.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:t,attributes:s,default:a}}=e;return{value:n,label:t,attributes:s,default:a}}))}(t);return function(e){const n=(0,o.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function h(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function b(e){let{queryString:n=!1,groupId:t}=e;const a=(0,i.k6)(),r=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,c._X)(r),(0,s.useCallback)((e=>{if(!r)return;const n=new URLSearchParams(a.location.search);n.set(r,e),a.replace({...a.location,search:n.toString()})}),[r,a])]}function m(e){const{defaultValue:n,queryString:t=!1,groupId:a}=e,r=p(e),[i,c]=(0,s.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!h({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const s=t.find((e=>e.default))??t[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:n,tabValues:r}))),[o,u]=b({queryString:t,groupId:a}),[m,x]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[a,r]=(0,d.Nk)(t);return[a,(0,s.useCallback)((e=>{t&&r.set(e)}),[t,r])]}({groupId:a}),f=(()=>{const e=o??m;return h({value:e,tabValues:r})?e:null})();(0,l.Z)((()=>{f&&c(f)}),[f]);return{selectedValue:i,selectValue:(0,s.useCallback)((e=>{if(!h({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);c(e),u(e),x(e)}),[u,x,r]),tabValues:r}}var x=t(3499);const f={tabList:"tabList_zxWd",tabItem:"tabItem_TcdJ"};var v=t(1527);function j(e){let{className:n,block:t,selectedValue:s,selectValue:i,tabValues:l}=e;const c=[],{blockElementScrollPositionUntilNextRender:o}=(0,r.o5)(),d=e=>{const n=e.currentTarget,t=c.indexOf(n),a=l[t].value;a!==s&&(o(n),i(a))},u=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=c.indexOf(e.currentTarget)+1;n=c[t]??c[0];break}case"ArrowLeft":{const t=c.indexOf(e.currentTarget)-1;n=c[t]??c[c.length-1];break}}n?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":t},n),children:l.map((e=>{let{value:n,label:t,attributes:r}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:s===n?0:-1,"aria-selected":s===n,ref:e=>c.push(e),onKeyDown:u,onClick:d,...r,className:(0,a.Z)("tabs__item",f.tabItem,r?.className,{"tabs__item--active":s===n}),children:t??n},n)}))})}function k(e){let{lazy:n,children:t,selectedValue:a}=e;const r=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=r.find((e=>e.props.value===a));return e?(0,s.cloneElement)(e,{className:"margin-top--md"}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:r.map(((e,n)=>(0,s.cloneElement)(e,{key:n,hidden:e.props.value!==a})))})}function g(e){const n=m(e);return(0,v.jsxs)("div",{className:(0,a.Z)("tabs-container",f.tabList),children:[(0,v.jsx)(j,{...e,...n}),(0,v.jsx)(k,{...e,...n})]})}function w(e){const n=(0,x.Z)();return(0,v.jsx)(g,{...e,children:u(e.children)},String(n))}},2175:(e,n,t)=>{t.d(n,{Z:()=>l,a:()=>i});var s=t(959);const a={},r=s.createContext(a);function i(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);