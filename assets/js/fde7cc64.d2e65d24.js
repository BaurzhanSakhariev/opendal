"use strict";(self.webpackChunkopendal_website=self.webpackChunkopendal_website||[]).push([[3454],{1625:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>u,default:()=>f,frontMatter:()=>c,metadata:()=>d,toc:()=>h});var a=t(1527),s=t(2175);function r(e){const n={a:"a",code:"code",del:"del",h2:"h2",h3:"h3",input:"input",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h2,{id:"capabilities",children:"Capabilities"}),"\n",(0,a.jsx)(n.p,{children:"This service can be used to:"}),"\n",(0,a.jsxs)(n.ul,{className:"contains-task-list",children:["\n",(0,a.jsxs)(n.li,{className:"task-list-item",children:[(0,a.jsx)(n.input,{type:"checkbox",checked:!0,disabled:!0})," stat"]}),"\n",(0,a.jsxs)(n.li,{className:"task-list-item",children:[(0,a.jsx)(n.input,{type:"checkbox",checked:!0,disabled:!0})," read"]}),"\n",(0,a.jsxs)(n.li,{className:"task-list-item",children:[(0,a.jsx)(n.input,{type:"checkbox",checked:!0,disabled:!0})," write"]}),"\n",(0,a.jsxs)(n.li,{className:"task-list-item",children:[(0,a.jsx)(n.input,{type:"checkbox",checked:!0,disabled:!0})," create_dir"]}),"\n",(0,a.jsxs)(n.li,{className:"task-list-item",children:[(0,a.jsx)(n.input,{type:"checkbox",checked:!0,disabled:!0})," delete"]}),"\n",(0,a.jsxs)(n.li,{className:"task-list-item",children:[(0,a.jsx)(n.input,{type:"checkbox",checked:!0,disabled:!0})," copy"]}),"\n",(0,a.jsxs)(n.li,{className:"task-list-item",children:[(0,a.jsx)(n.input,{type:"checkbox",checked:!0,disabled:!0})," rename"]}),"\n",(0,a.jsxs)(n.li,{className:"task-list-item",children:[(0,a.jsx)(n.input,{type:"checkbox",disabled:!0})," ",(0,a.jsx)(n.del,{children:"list"})]}),"\n",(0,a.jsxs)(n.li,{className:"task-list-item",children:[(0,a.jsx)(n.input,{type:"checkbox",disabled:!0})," scan"]}),"\n",(0,a.jsxs)(n.li,{className:"task-list-item",children:[(0,a.jsx)(n.input,{type:"checkbox",disabled:!0})," ",(0,a.jsx)(n.del,{children:"presign"})]}),"\n",(0,a.jsxs)(n.li,{className:"task-list-item",children:[(0,a.jsx)(n.input,{type:"checkbox",disabled:!0})," blocking"]}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Note"}),": As for ",(0,a.jsx)(n.a,{href:"https://apple.github.io/foundationdb/known-limitations",children:"Known Limitations - FoundationDB"}),", keys cannot exceed 10,000 bytes in size, and values cannot exceed 100,000 bytes in size. Errors will be raised by OpenDAL if these limits are exceeded."]}),"\n",(0,a.jsx)(n.h2,{id:"configuration",children:"Configuration"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"root"}),": Set the work directory for this backend."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"config_path"}),": Set the configuration path for foundationdb. If not provided, the default configuration path will be used."]}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:["You can refer to [",(0,a.jsx)(n.code,{children:"FoundationdbBuilder"}),"]'s docs for more information"]}),"\n",(0,a.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,a.jsx)(n.h3,{id:"via-builder",children:"Via Builder"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-rust",children:'use anyhow::Result;\nuse opendal::services::Foundationdb;\nuse opendal::Operator;\n\n#[tokio::main]\nasync fn main() -> Result<()> {\n    let mut builder = Foundationdb::default();\n    builder.config_path("/etc/foundationdb/foundationdb.conf");\n\n    let op: Operator = Operator::new(builder)?.finish();\n    Ok(())\n}\n'})})]})}function i(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(r,{...e})}):r(e)}var o=t(5431),l=t(2860);const c={title:"FoundationDB"},u=void 0,d={id:"services/foundationdb",title:"FoundationDB",description:"FoundationDB services support.",source:"@site/docs/services/foundationdb.mdx",sourceDirName:"services",slug:"/services/foundationdb",permalink:"/docs/services/foundationdb",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/opendal/tree/main/website/docs/services/foundationdb.mdx",tags:[],version:"current",lastUpdatedBy:"Xuanwo",lastUpdatedAt:1710425113,formattedLastUpdatedAt:"Mar 14, 2024",frontMatter:{title:"FoundationDB"},sidebar:"docs",previous:{title:"Etcd",permalink:"/docs/services/etcd"},next:{title:"Fs",permalink:"/docs/services/fs"}},p={},h=[{value:"Via Config",id:"via-config",level:3}];function b(e){const n={a:"a",code:"code",h3:"h3",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.a,{href:"https://www.foundationdb.org/",children:"FoundationDB"})," services support."]}),"\n","\n",(0,a.jsx)(i,{components:e.components}),"\n",(0,a.jsx)(n.h3,{id:"via-config",children:"Via Config"}),"\n","\n","\n",(0,a.jsxs)(o.Z,{children:[(0,a.jsx)(l.Z,{value:"rust",label:"Rust",default:!0,children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-rust",children:'use anyhow::Result;\nuse opendal::Operator;\nuse opendal::Scheme;\nuse std::collections::HashMap;\n\n#[tokio::main]\nasync fn main() -> Result<()> {\n    let mut map = HashMap::new();\n    map.insert("root".to_string(), "/path/to/dir".to_string());\n    map.insert("config_path".to_string(), "/path/to/config".to_string());\n\n    let op: Operator = Operator::via_map(Scheme::Foundationdb, map)?;\n    Ok(())\n}\n'})})}),(0,a.jsx)(l.Z,{value:"node.js",label:"Node.js",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-javascript",children:'import { Operator } from "opendal";\n\nasync function main() {\n  const op = new Operator("foundationdb", {\n    root: "/path/to/dir",\n    config_path: "/path/to/config",\n  });\n}\n'})})}),(0,a.jsx)(l.Z,{value:"python",label:"Python",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:'import opendal\n\nop = opendal.Operator("foundationdb",\n  root="/path/to/dir",\n  config_path="/path/to/config",\n)\n'})})})]})]})}function f(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(b,{...e})}):b(e)}},2860:(e,n,t)=>{t.d(n,{Z:()=>i});t(959);var a=t(6259);const s={tabItem:"tabItem_CbVR"};var r=t(1527);function i(e){let{children:n,hidden:t,className:i}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,a.Z)(s.tabItem,i),hidden:t,children:n})}},5431:(e,n,t)=>{t.d(n,{Z:()=>y});var a=t(959),s=t(6259),r=t(2990),i=t(8903),o=t(3133),l=t(563),c=t(351),u=t(3026);function d(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:n,children:t}=e;return(0,a.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:t,attributes:a,default:s}}=e;return{value:n,label:t,attributes:a,default:s}}))}(t);return function(e){const n=(0,c.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function h(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function b(e){let{queryString:n=!1,groupId:t}=e;const s=(0,i.k6)(),r=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,l._X)(r),(0,a.useCallback)((e=>{if(!r)return;const n=new URLSearchParams(s.location.search);n.set(r,e),s.replace({...s.location,search:n.toString()})}),[r,s])]}function f(e){const{defaultValue:n,queryString:t=!1,groupId:s}=e,r=p(e),[i,l]=(0,a.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!h({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const a=t.find((e=>e.default))??t[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:n,tabValues:r}))),[c,d]=b({queryString:t,groupId:s}),[f,m]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[s,r]=(0,u.Nk)(t);return[s,(0,a.useCallback)((e=>{t&&r.set(e)}),[t,r])]}({groupId:s}),x=(()=>{const e=c??f;return h({value:e,tabValues:r})?e:null})();(0,o.Z)((()=>{x&&l(x)}),[x]);return{selectedValue:i,selectValue:(0,a.useCallback)((e=>{if(!h({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),m(e)}),[d,m,r]),tabValues:r}}var m=t(3499);const x={tabList:"tabList_zxWd",tabItem:"tabItem_TcdJ"};var j=t(1527);function v(e){let{className:n,block:t,selectedValue:a,selectValue:i,tabValues:o}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,r.o5)(),u=e=>{const n=e.currentTarget,t=l.indexOf(n),s=o[t].value;s!==a&&(c(n),i(s))},d=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const t=l.indexOf(e.currentTarget)+1;n=l[t]??l[0];break}case"ArrowLeft":{const t=l.indexOf(e.currentTarget)-1;n=l[t]??l[l.length-1];break}}n?.focus()};return(0,j.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":t},n),children:o.map((e=>{let{value:n,label:t,attributes:r}=e;return(0,j.jsx)("li",{role:"tab",tabIndex:a===n?0:-1,"aria-selected":a===n,ref:e=>l.push(e),onKeyDown:d,onClick:u,...r,className:(0,s.Z)("tabs__item",x.tabItem,r?.className,{"tabs__item--active":a===n}),children:t??n},n)}))})}function g(e){let{lazy:n,children:t,selectedValue:s}=e;const r=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=r.find((e=>e.props.value===s));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return(0,j.jsx)("div",{className:"margin-top--md",children:r.map(((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==s})))})}function k(e){const n=f(e);return(0,j.jsxs)("div",{className:(0,s.Z)("tabs-container",x.tabList),children:[(0,j.jsx)(v,{...e,...n}),(0,j.jsx)(g,{...e,...n})]})}function y(e){const n=(0,m.Z)();return(0,j.jsx)(k,{...e,children:d(e.children)},String(n))}},2175:(e,n,t)=>{t.d(n,{Z:()=>o,a:()=>i});var a=t(959);const s={},r=a.createContext(s);function i(e){const n=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),a.createElement(r.Provider,{value:n},e.children)}}}]);