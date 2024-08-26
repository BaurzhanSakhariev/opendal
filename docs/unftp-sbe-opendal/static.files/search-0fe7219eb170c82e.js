"use strict";Array.prototype.toSpliced||(Array.prototype.toSpliced=function(){const e=this.slice();return Array.prototype.splice.apply(e,arguments),e}),function(){const e=["keyword","primitive","mod","externcrate","import","struct","enum","fn","type","static","trait","impl","tymethod","method","structfield","variant","macro","associatedtype","constant","associatedconstant","union","foreigntype","existential","attr","derive","traitalias","generic"],t=["keyword","primitive type","module","extern crate","re-export","struct","enum","function","type alias","static","trait","","trait method","method","struct field","enum variant","macro","assoc type","constant","assoc const","union","foreign type","existential type","attribute macro","derive macro","trait alias"],n=e.indexOf("generic"),r=e.indexOf("import"),i="undefined"!=typeof window?window.rootPath:"../",s=/\p{ID_Start}\p{ID_Continue}*|_\p{ID_Continue}+/uy,o=/[^a-z]/iu;function a(e){let t=0,n=!1,r=!1;onEachLazy(document.getElementById("search-tabs").childNodes,(r=>{e===t?(addClass(r,"selected"),n=!0):removeClass(r,"selected"),t+=1}));const i=e>0||1===t;if(t=0,onEachLazy(document.getElementById("results").childNodes,(n=>{e===t?(addClass(n,"active"),r=!0):removeClass(n,"active"),t+=1})),n&&r){searchState.currentTab=e;const t=document.getElementsByClassName("search-corrections");i?removeClass(t[0],"hidden"):addClass(t[0],"hidden")}else 0!==e&&a(0)}const l={current:[],prev:[],prevPrev:[],calculate:function(e,t,n){if(e.length<t.length){const n=e;e=t,t=n}const r=e.length-t.length;if(r>n)return n+1;for(;t.length>0&&t[0]===e[0];)e=e.substring(1),t=t.substring(1);for(;t.length>0&&t[t.length-1]===e[e.length-1];)e=e.substring(0,e.length-1),t=t.substring(0,t.length-1);if(0===t.length)return r;const i=e.length,s=t.length;for(let a=0;a<=s;++a)this.current[a]=0,this.prev[a]=a,this.prevPrev[a]=Number.MAX_VALUE;for(let a=1;a<=i;++a){this.current[0]=a;const n=a-1;for(let i=1;i<=s;++i){const r=i-1,s=e[n]===t[r]?0:1;this.current[i]=Math.min(this.prev[i]+1,this.current[i-1]+1,this.prev[i-1]+s),a>1&&i>1&&e[n]===t[r-1]&&e[n-1]===t[r]&&(this.current[i]=Math.min(this.current[i],this.prevPrev[i-2]+1))}const r=this.prevPrev;this.prevPrev=this.prev,this.prev=this.current,this.current=r}const o=this.prev[s];return o<=n?o:n+1}};function c(e,t,n){return l.calculate(e,t,n)}function u(l){const h=200,d=-1;let p,f,g,m,y;const w=new Map,b=new Map,v=k("array"),x=k("slice"),S=k("[]"),E=k("tuple"),C=k("unit"),I=k("()"),F=k("fn"),M=k("fnmut"),Q=k("fnonce"),P=k("->");function k(e,t){if(""===e||null===e)return null;if(w.has(e)){const n=w.get(e);return n.assocOnly=t&&n.assocOnly,n.id}{const n=w.size;return w.set(e,{id:n,assocOnly:t}),n}}function L(e){return-1!=='<"'.indexOf(e)}function T(e){return-1!=="=,>-])".indexOf(e)}function A(e){return"::"===e.userQuery.slice(e.pos,e.pos+2)}function _(e){return"->"===e.userQuery.slice(e.pos,e.pos+2)}function z(e){s.lastIndex=e.pos;const t=e.userQuery.match(s);return!!t&&(e.pos+=t[0].length,!0)}function N(e){return","===e||"="===e}function U(e){return":"===e||" "===e}function B(e,t){let n=e.pos;for(;n>0;){const r=e.userQuery[n-1];if(r===t)return!0;if(" "!==r)break;n-=1}return!1}function q(e,t){return e.length>0&&e[e.length-1].generics.length>0||B(t,">")}function $(e){for(;e.pos<e.userQuery.length;){if(" "!==e.userQuery[e.pos])break;e.pos+=1}}function D(e,t){return Object.assign({name:e,id:null,fullPath:[e],pathWithoutLast:[],pathLast:e,normalizedPathLast:e,generics:[],bindings:new Map,typeFilter:"primitive",bindingName:null},t)}function O(e){let t=z(e),n=e.pos,r=-1;for(;e.pos<e.length;){const i=e.userQuery[e.pos];if("!"===i){if(-1!==r)throw["Cannot have more than one ","!"," in an ident"];if(e.pos+1<e.length){const t=e.pos;e.pos++;const n=z(e);if(e.pos=t,n)throw["Unexpected ","!",": it can only be at the end of an ident"]}t&&(r=e.pos)}else{if(!U(i)){if("["===i||"("===i||T(i)||L(i)||N(i))break;throw e.pos>0?["Unexpected ",i," after ",e.userQuery[e.pos-1]," (not a valid identifier)"]:["Unexpected ",i," (not a valid identifier)"]}if(":"===i){if(!A(e))break;e.pos+=1}else for(;e.pos+1<e.length;){if(" "!==e.userQuery[e.pos+1])break;e.pos+=1}if(-1!==r)throw["Cannot have associated items in macros"]}e.pos+=1,t=z(e),n=e.pos}if(-1!==r){if(null===e.typeFilter)e.typeFilter="macro";else if("macro"!==e.typeFilter)throw["Invalid search type: macro ","!"," and ",e.typeFilter," both specified"];n=r}return n}function R(e,t,n,r){const i=t.pos;if(":"===t.userQuery[t.pos]&&!A(t))throw["Expected type filter before ",":"];if(H(e,t,n,r),":"===t.userQuery[t.pos]&&!A(t)){if(null!==t.typeFilter)throw["Unexpected ",":"," (expected path after type filter ",t.typeFilter+":",")"];if(0===n.length)throw["Expected type filter before ",":"];if(e.literalSearch)throw["Cannot use quotes on type filter"];const s=n.pop();!function(e,t){const n=t.userQuery.slice(e,t.pos).trim(),r=n.match(o);if(r)throw["Unexpected ",r[0]," in type filter (before ",":",")"]}(i,t),t.typeFilter=s.name,t.pos+=1,t.totalElems-=1,e.literalSearch=!1,H(e,t,n,r)}}function H(e,t,n,r){const i=[];$(t);let s,o=t.pos;if(-1!=="[(".indexOf(t.userQuery[t.pos])){let s=")",o="()",a="tuple";"["===t.userQuery[t.pos]&&(s="]",o="[]",a="slice"),t.pos+=1;const{foundSeparator:l}=W(e,t,i,s),c=t.typeFilter,u=t.isInBinding;t.typeFilter=null,t.isInBinding=null;for(const e of i)if(null!==e.bindingName)throw["Type parameter ","=",` cannot be within ${a} `,o];if("()"!==o||l||1!==i.length||null!==c)if("()"===o&&1===i.length&&"->"===i[0].name)i[0].typeFilter=c,n.push(i[0]);else{if(null!==c&&"primitive"!==c)throw["Invalid search type: primitive ",o," and ",c," both specified"];t.totalElems+=1,r&&(t.genericsElems+=1),n.push(D(o,{bindingName:u,generics:i}))}else n.push(i[0])}else if("&"===t.userQuery[t.pos]){if(null!==t.typeFilter&&"primitive"!==t.typeFilter)throw["Invalid search type: primitive ","&"," and ",t.typeFilter," both specified"];t.typeFilter=null,t.pos+=1;let i=t.userQuery[t.pos];for(;" "===i&&t.pos<t.length;)t.pos+=1,i=t.userQuery[t.pos];const s=[];for("mut"===t.userQuery.slice(t.pos,t.pos+3)&&(s.push(D("mut",{typeFilter:"keyword"})),t.pos+=3,i=t.userQuery[t.pos]);" "===i&&t.pos<t.length;)t.pos+=1,i=t.userQuery[t.pos];!T(i)&&t.pos<t.length&&R(e,t,s,r),n.push(D("reference",{generics:s}))}else{const a='"'===t.userQuery[o];if(a?(o+=1,function(e,t,n){if(n)throw["Unexpected ",'"'," in generics"];if(e.literalSearch)throw["Cannot have more than one literal search element"];if(t.totalElems-t.genericsElems>0)throw["Cannot use literal search when there is more than one element"];t.pos+=1;const r=t.pos,i=O(t);if(t.pos>=t.length)throw["Unclosed ",'"'];if('"'!==t.userQuery[i])throw["Unexpected ",t.userQuery[i]," in a string element"];if(r===i)throw["Cannot have empty string element"];t.pos+=1,e.literalSearch=!0}(e,t,r),s=t.pos-1):s=O(t),t.pos<t.length&&"<"===t.userQuery[t.pos]){if(o>=s)throw["Found generics without a path"];t.pos+=1,W(e,t,i,">")}else if(t.pos<t.length&&"("===t.userQuery[t.pos]){if(o>=s)throw["Found generics without a path"];if(t.isInBinding)throw["Unexpected ","("," after ","="];t.pos+=1;const n=t.typeFilter;t.typeFilter=null,W(e,t,i,")"),$(t),_(t)?(t.pos+=2,$(t),R(e,t,i,r),i[i.length-1].bindingName=D("output")):i.push(D(null,{bindingName:D("output"),typeFilter:null})),t.typeFilter=n}if(a&&$(t),o>=s&&0===i.length)return;if("="===t.userQuery[t.pos]){if(t.isInBinding)throw["Cannot write ","="," twice in a binding"];if(!r)throw["Type parameter ","="," must be within generics list"];const e=t.userQuery.slice(o,s).trim();if("!"===e)throw["Type parameter ","="," key cannot be ","!"," never type"];if(e.includes("!"))throw["Type parameter ","="," key cannot be ","!"," macro"];if(e.includes("::"))throw["Type parameter ","="," key cannot contain ","::"," path"];if(e.includes(":"))throw["Type parameter ","="," key cannot contain ",":"," type"];t.isInBinding={name:e,generics:i}}else n.push(function(e,t,n,r,i){const s=n.trim();if(0===s.length&&0===r.length)throw["Unexpected ",t.userQuery[t.pos]];if(e.literalSearch&&t.totalElems-t.genericsElems>0)throw["Cannot have more than one element if you use quotes"];const o=t.typeFilter;if(t.typeFilter=null,"!"===n){if(null!==o&&"primitive"!==o)throw["Invalid search type: primitive never type ","!"," and ",o," both specified"];if(0!==r.length)throw["Never type ","!"," does not accept generic parameters"];const e=t.isInBinding;return t.isInBinding=null,D("never",{bindingName:e})}const a=/::\s*::/.exec(s);if(s.startsWith("::"))throw["Paths cannot start with ","::"];if(s.endsWith("::"))throw["Paths cannot end with ","::"];if(null!==a)throw["Unexpected ",a[0]];const l=s.split(/(?:::\s*)|(?:\s+(?:::\s*)?)/);if(0===l.length||1===l.length&&""===l[0])throw r.length>0||B(t,">")?["Found generics without a path"]:["Unexpected ",t.userQuery[t.pos]];for(const[d,p]of l.entries())if("!"===p){if(0!==d)throw["Never type ","!"," is not associated item"];l[d]="never"}t.totalElems+=1,i&&(t.genericsElems+=1);const c=t.isInBinding;t.isInBinding=null;const u=new Map,h=l[l.length-1];return{name:n.trim(),id:null,fullPath:l,pathWithoutLast:l.slice(0,l.length-1),pathLast:h,normalizedPathLast:h.replace(/_/g,""),generics:r.filter((e=>null===e.bindingName||(null!==e.name&&e.bindingName.generics.unshift(e),u.set(e.bindingName.name,e.bindingName.generics),!1))),bindings:u,typeFilter:o,bindingName:c}}(e,t,t.userQuery.slice(o,s),i,r))}}function W(e,t,n,r){let i=!0,s=!1;const o=t.typeFilter;t.typeFilter=null;const a=t.isInBinding;t.isInBinding=null;let l=null,c="";for(c=">"===r?"<":"]"===r?"[":")"===r?"(":""===r?"->":r;t.pos<t.length;){const o=t.userQuery[t.pos];if(o===r){if(t.isInBinding)throw["Unexpected ",r," after ","="];break}if(""!==r&&_(t)){if(t.isInBinding)throw["Unexpected ","->"," after ","="];l=[...n],n.length=0,t.pos+=2,i=!0,s=!1;continue}if(" "===o){t.pos+=1;continue}if(N(o)){t.pos+=1,i=!0,s=!0;continue}if(":"===o&&A(t))throw["Unexpected ","::",": paths cannot start with ","::"];if(T(o))throw["Unexpected ",o," after ",c];if(!i){let n=[];if(q(e.elems,t))n=[" after ",">"];else if(B(t,'"'))throw["Cannot have more than one element if you use quotes"];if(""!==r)throw["Expected ",",",", ","=",", or ",r,...n,", found ",o];throw["Expected ",","," or ","=",...n,", found ",o]}const a=t.pos;if(R(e,t,n,""!==r),""!==r&&t.pos>=t.length)throw["Unclosed ",c];a===t.pos&&(t.pos+=1),i=!1}if(t.pos>=t.length&&""!==r)throw["Unclosed ",c];if(t.pos+=1,l){if(s=!1,[...n,...l].some((e=>e.bindingName))||t.isInBinding)throw["Unexpected ","="," within ","->"];const e=D("->",{generics:l,bindings:new Map([["output",[...n]]]),typeFilter:null});n.length=0,n[0]=e}return t.typeFilter=o,t.isInBinding=a,{foundSeparator:s}}function j(e){return{original:e,userQuery:e.toLowerCase(),elems:[],returned:[],foundElems:0,totalElems:0,literalSearch:!1,error:null,correction:null,proposeCorrectionFrom:null,proposeCorrectionTo:null,typeFingerprint:new Uint32Array(4)}}function G(e,t){let n="?search="+encodeURIComponent(e);return null!==t&&(n+="&filter-crate="+encodeURIComponent(t)),getNakedUrl()+n+window.location.hash}function V(){const e=document.getElementById("crate-search");return e&&"all crates"!==e.value&&l.has(e.value)?e.value:null}function K(t){function n(t){if(null!==t.typeFilter){let n=t.typeFilter;"const"===n&&(n="constant"),t.typeFilter=function(t){const n=e.findIndex((e=>e===t));if(n<0)throw["Unknown type filter ",t];return n}(n)}else t.typeFilter=d;for(const e of t.generics)n(e);for(const e of t.bindings.values())for(const t of e)n(t)}const r={length:(t=t.trim().replace(/\r|\n|\t/g," ")).length,pos:0,totalElems:0,genericsElems:0,typeFilter:null,isInBinding:null,userQuery:t.toLowerCase()};let i=j(t);try{!function(e,t){let n=!0;for(;t.pos<t.length;){const r=t.userQuery[t.pos];if(T(r)){if(n=!0,N(r)){t.pos+=1;continue}if("-"===r||">"===r){if(_(t))break;throw["Unexpected ",r," (did you mean ","->","?)"]}if(t.pos>0)throw["Unexpected ",r," after ",t.userQuery[t.pos-1]];throw["Unexpected ",r]}if(" "===r){$(t);continue}if(!n){let n="";if(q(e.elems,t))n=[" after ",">"];else if(B(t,'"'))throw["Cannot have more than one element if you use quotes"];if(null!==t.typeFilter)throw["Expected ",","," or ","->",...n,", found ",r];throw["Expected ",",",", ",":"," or ","->",...n,", found ",r]}const i=e.elems.length;R(e,t,e.elems,!1),e.elems.length===i&&(t.pos+=1),n=!1}if(null!==t.typeFilter)throw["Unexpected ",":"," (expected path after type filter ",t.typeFilter+":",")"];for(;t.pos<t.length;){if(_(t)){if(t.pos+=2,$(t),W(e,t,e.returned,""),0===e.returned.length)throw["Expected at least one item after ","->"];break}t.pos+=1}}(i,r);for(const e of i.elems)n(e);for(const e of i.returned)n(e)}catch(s){return i=j(t),i.error=s,i}return i.literalSearch||(i.literalSearch=r.totalElems>1),i.foundElems=i.elems.length+i.returned.length,i.totalElems=r.totalElems,i}async function X(t,i,s){const o=new Map,a=new Map,l=new Map;async function u(e,n,i){const s=t.userQuery,o=[];for(const t of e.values())t.item=p[t.id],t.word=p[t.id].word,o.push(t);return o.sort(((e,t)=>{let n,r;return n=e.word!==s,r=t.word!==s,n!==r?n-r:(n=e.index<0,r=t.index<0,n!==r?n-r:(n=e.path_dist,r=t.path_dist,n!==r?n-r:(n=e.index,r=t.index,n!==r?n-r:(n=e.dist,r=t.dist,n!==r?n-r:(n=f.get(e.item.crate).contains(e.item.bitIndex),r=f.get(t.item.crate).contains(t.item.bitIndex),n!==r?n-r:(n=e.item.crate!==i,r=t.item.crate!==i,n!==r?n-r:(n=e.word.length,r=t.word.length,n!==r?n-r:(n=e.word,r=t.word,n!==r?n>r?1:-1:(n=g.get(e.item.crate).contains(e.item.bitIndex),r=g.get(t.item.crate).contains(t.item.bitIndex),n!==r?n-r:(n=e.item.ty,r=t.item.ty,n!==r?n-r:(n=e.item.path,r=t.item.path,n!==r?n>r?1:-1:0)))))))))))})),function(e){const t=new Set,n=[];for(const i of e)if(-1!==i.id){const e=p[i.id];e.dist=i.dist;const s=Z(e);if(e.displayPath=ee(s[0]),e.fullPath=s[2]+"|"+e.ty,t.has(e.fullPath))continue;if(e.ty===r&&t.has(s[2]))continue;if(t.has(s[2]+"|"+r))continue;if(t.add(e.fullPath),t.add(s[2]),e.href=s[1],n.push(e),n.length>=h)break}return n}(o)}function m(e,t,n,r,i,s){if(s>=5)return!1;const o=null===r?null:new Map(r);if(0===t.length)return!i||i(o);if(!e||0===e.length)return!1;const a=t.length,l=e.length;if(1===a&&0===t[0].generics.length&&0===t[0].bindings.size){const r=t[0];for(const t of e)if(y(t,r,o))if(t.id<0&&r.id<0){if(o&&o.has(t.id)&&o.get(t.id)!==r.id)continue;const e=new Map(o);if(e.set(t.id,r.id),!i||i(e))return!0}else if(!i||i(o?new Map(o):null))return!0;for(const a of e)if(L(a,r,n,o,s+1))if(a.id<0){if(o&&o.has(a.id)&&0!==o.get(a.id))continue;const e=new Map(o);if(e.set(a.id,0),m(n[-a.id-1],t,n,e,i,s+1))return!0}else if(m([...a.generics,...Array.from(a.bindings.values()).flat()],t,n,o?new Map(o):null,i,s+1))return!0;return!1}const c=e.slice(),u=l-1,h=a-1,d=t[h];let p=null;for(let f=u;f>=0;f-=1){const e=c[f];if(!y(e,d,o))continue;let r;if(e.id<0){if(r=new Map(o),r.has(e.id)&&r.get(e.id)!==d.id)continue;r.set(e.id,d.id)}else r=o;c[f]=c[u],c.length=u,p||(p=t.slice(0,h));const a=m(c,p,n,r,(t=>{if(0===e.generics.length&&0===d.generics.length&&0===e.bindings.size&&0===d.bindings.size)return!i||i(t);const r=k(e,d,n,t,s);if(!r)return!1;const o=r.simplifiedGenerics;for(const e of r.mgens){if(m(o,d.generics,n,e,i,s))return!0}return!1}),s);if(a)return!0;c[u]=c[f],c[f]=e,c.length=l}for(let f=u;f>=0;f-=1){const e=c[f];if(!L(e,d,n,o,s+1))continue;let r;if(e.id<0){if(r=new Map(o),r.has(e.id)&&0!==r.get(e.id))continue;r.set(e.id,0)}else r=o;const a=e.id<0?n[-e.id-1]:e.generics,l=e.bindings?Array.from(e.bindings.values()).flat():[];if(m(c.toSpliced(f,1,...a,...l),t,n,r,i,s+1))return!0}return!1}function y(e,t,n){if(!_(t.typeFilter,e.ty))return!1;if(e.id<0&&t.id<0){if(n){if(n.has(e.id)&&n.get(e.id)!==t.id)return!1;for(const[r,i]of n.entries()){if(e.id!==r&&t.id===i)return!1;if(e.id===r&&t.id!==i)return!1}}return!0}{if(t.id!==S||e.id!==x&&e.id!==v)if(t.id!==I||e.id!==E&&e.id!==C)if(t.id!==P||e.id!==F&&e.id!==M&&e.id!==Q){if(e.id!==t.id||null===t.id)return!1}else;else;else;if(e.generics.length+e.bindings.size===0&&0!==t.generics.length)return!1;if(e.bindings.size<t.bindings.size)return!1;const n=t.pathWithoutLast.length;if(n>0){const r=void 0!==e.path&&null!==e.path?e.path.split("::"):[];if(n>r.length)return!1;let i=0;for(const e of r)if(e===t.pathWithoutLast[i]&&(i+=1,i>=n))break;if(i<n)return!1}return!0}}function k(e,t,n,r,i){if(e.bindings.size<t.bindings.size)return!1;let s=e.generics||[];if(e.bindings.size>0){let o=[r];for(const[r,s]of t.bindings.entries()){if(0===o.length)return!1;if(!e.bindings.has(r))return!1;const t=e.bindings.get(r);o=o.flatMap((e=>{const r=[];return m(t,s,n,e,(e=>(r.push(e),!1)),i),r}))}if(0===o.length)return!1;const a=Array.from(e.bindings.entries()).flatMap((e=>{const[n,r]=e;return t.bindings.has(n)?[]:r}));return s=s.length>0?[...s,...a]:a,{simplifiedGenerics:s,mgens:o}}return{simplifiedGenerics:s,mgens:[r]}}function L(e,t,n,r,i){if(i>=5)return!1;if(e.id<0&&t.id>=0){if(!n)return!1;if(r&&r.has(e.id)&&0!==r.get(e.id))return!1;const s=new Map(r);return s.set(e.id,null),T(n[-e.id-1],t,n,s,i)}if(e.generics.length>0||e.bindings.size>0){return T([...e.generics,...Array.from(e.bindings.values()).flat()],t,n,r,i)}return!1}function T(e,t,n,r,i){for(const s of e)if(A(s,t,n,r,i))return!0;return!1}function A(e,t,n,r,i){if(i>=5)return!1;if(0===e.bindings.size&&0===t.bindings.size){if(t.id<0&&null===r)return e.id<0||T(e.generics,t,n,r,i+1);if(e.id>0&&t.id>0&&0===t.pathWithoutLast.length&&_(t.typeFilter,e.ty)&&0===t.generics.length&&t.id!==S&&t.id!==I&&t.id!==P)return e.id===t.id||T(e.generics,t,n,r,i)}return m([e],[t],n,r,null,i)}function _(t,n){if(t<=d||t===n)return!0;const r=e[n];switch(e[t]){case"constant":return"associatedconstant"===r;case"fn":return"method"===r||"tymethod"===r;case"type":return"primitive"===r||"associatedtype"===r;case"trait":return"traitalias"===r}return!1}function z(e){return{crate:e.crate,name:e.name,path:e.path,descShard:e.descShard,descIndex:e.descIndex,exactPath:e.exactPath,ty:e.ty,parent:e.parent,type:e.type,is_alias:!0,bitIndex:e.bitIndex,implDisambiguator:e.implDisambiguator}}function N(e,n,r,i,s,o,a){if(s<=a||-1!==i){if(e.has(n)){const t=e.get(n);if(t.dontValidate||t.dist<=s)return}e.set(n,{id:r,index:i,dontValidate:t.literalSearch,dist:s,path_dist:o})}}function U(e,n,r,s,o,a,l){if(!e||null!==i&&e.crate!==i)return;let u=0;const d=e.id,p=de(d,t.typeFingerprint);if(null!==p){const t=e.type&&e.type.inputs&&T(e.type.inputs,r,e.type.where_clause,null,0),i=e.type&&e.type.output&&T(e.type.output,r,e.type.where_clause,null,0);if(t){o.max_dist=Math.max(o.max_dist||0,p);N(o,d,n,-1,p,0,o.size<h?p+1:o.max_dist)}if(i){a.max_dist=Math.max(a.max_dist||0,p);N(a,d,n,-1,p,0,a.size<h?p+1:a.max_dist)}}if(!_(r.typeFilter,e.ty))return;let f=e.word.indexOf(r.pathLast);const g=e.normalizedName.indexOf(r.pathLast);if((-1===f||f>g&&-1!==g)&&(f=g),r.fullPath.length>1&&(u=function(e,t){if(0===e.length)return 0;const n=Math.floor(e.reduce(((e,t)=>e+t.length),0)/3);let r=n+1;const i=t.path.split("::");t.parent&&t.parent.name&&i.push(t.parent.name.toLowerCase());const s=i.length,o=e.length;e:for(let a=s-o;a>=0;a-=1){let t=0;for(let r=0;r<o;++r){const[s,o]=[i[a+r],e[r]];if(Math.floor((s.length-o.length)/3)<=n&&-1!==s.indexOf(o))t+=Math.floor((s.length-o.length)/3);else{const e=c(s,o,n);if(e>n)continue e;t+=e}}r=Math.min(r,Math.round(t/o))}return r>n?null:r}(r.pathWithoutLast,e),null===u))return;if(t.literalSearch)return void(e.word===r.pathLast&&N(s,d,n,f,0,u));const m=c(e.normalizedName,r.normalizedPathLast,l);-1===f&&m>l||N(s,d,n,f,m,u,l)}function B(e,n,r){if(!e||null!==i&&e.crate!==i||!e.type)return;const s=de(e.id,t.typeFingerprint);null!==s&&(r.size>=h&&s>r.max_dist||m(e.type.inputs,t.elems,e.type.where_clause,null,(n=>m(e.type.output,t.returned,e.type.where_clause,n,null,0)),0)&&(r.max_dist=Math.max(r.max_dist||0,s),N(r,e.id,n,0,s,0,Number.MAX_VALUE)))}null===t.error&&function(){const e=t.elems.reduce(((e,t)=>e+t.pathLast.length),0)+t.returned.reduce(((e,t)=>e+t.pathLast.length),0),r=Math.floor(e/3),i=new Map;function s(e,o){const a=e.pathLast.toLowerCase();if(!w.has(a)||!o&&w.get(a).assocOnly){if(!t.literalSearch){let n=null,i=r+1,s="";for(const[t,{id:l,assocOnly:u}]of w){const h=Math.min(c(t,a,r),c(t,e.normalizedPathLast,r));if(h<=i&&h<=r&&(o||!u)){if(h===i&&s>t)continue;n=l,i=h,s=t}}null!==n&&(t.correction=s),e.id=n}}else e.id=w.get(a).id;if(null===e.id&&t.totalElems>1&&-1===e.typeFilter&&0===e.generics.length&&0===e.bindings.size||e.typeFilter===n){if(i.has(e.name)?e.id=i.get(e.name):(e.id=-(i.size+1),i.set(e.name,e.id)),-1===e.typeFilter&&e.name.length>=3){const n=Math.floor(e.name.length/3);let r=n+1,i="";for(const t of w.keys()){const s=c(t,e.name,n);if(s<=r&&s<=n){if(s===r&&i>t)continue;r=s,i=t}}""!==i&&(t.proposeCorrectionFrom=e.name,t.proposeCorrectionTo=i)}e.typeFilter=n}e.generics.length>0&&e.typeFilter===n&&(t.error=["Generic type parameter ",e.name," does not accept generic parameters"]);for(const t of e.generics)s(t);e.bindings=new Map(Array.from(e.bindings.entries()).map((e=>{const[n,r]=e;if(!w.has(n))return t.error=["Type parameter ",n," does not exist"],[null,[]];for(const t of r)s(t);return[w.get(n).id,r]})))}const u=new Set;for(const n of t.elems)s(n),he(n,t.typeFingerprint,u);for(const n of t.returned)s(n),he(n,t.typeFingerprint,u);if(1===t.foundElems&&0===t.returned.length){if(1===t.elems.length){const e=t.elems[0];for(let t=0,n=p.length;t<n;++t)U(p[t],t,e,o,a,l,r)}}else if(t.foundElems>0){const e=(e,t)=>{const n=0===e.generics.length&&0===e.bindings.size,r=0===t.generics.length&&0===t.bindings.size;return n!==r?n-r:(e.id>0)-(t.id>0)};t.elems.sort(e),t.returned.sort(e);for(let t=0,n=p.length;t<n;++t)B(p[t],t,o)}}();const[q,$,D]=await Promise.all([u(a,0,s),u(l,0,s),u(o,0,s)]),O=function(e,t,n,r){return{in_args:e,returned:t,others:n,query:r}}(q,$,D,t);return await async function(e,t,n,r){const i=t.toLowerCase(),s=[],o=[];if(null!==n){if(b.has(n)&&b.get(n).has(i)){const e=b.get(n).get(i);for(const t of e)s.push(z(p[t]))}}else for(const[h,f]of b)if(f.has(i)){const e=h===r?o:s,t=f.get(i);for(const n of t)e.push(z(p[n]))}const a=(e,t)=>e.path<t.path?1:e.path===t.path?0:-1;o.sort(a),s.sort(a);const l=e=>g.get(e.crate).contains(e.bitIndex)?"":searchState.loadDesc(e),[c,u]=await Promise.all([Promise.all(o.map(l)),Promise.all(s.map(l))]),d=n=>{n.alias=t;const r=Z(n);n.displayPath=ee(r[0]),n.fullPath=n.displayPath+n.name,n.href=r[1],e.others.unshift(n),e.others.length>h&&e.others.pop()};s.forEach(((e,t)=>{e.desc=u[t]})),s.forEach(d),o.forEach(((e,t)=>{e.desc=c[t]})),o.forEach(d)}(O,t.original.replace(/"/g,""),i,s),await Promise.all([O.others,O.returned,O.in_args].map((async e=>{const t=await Promise.all(e.map((e=>g.get(e.crate).contains(e.bitIndex)?"":searchState.loadDesc(e))));for(const[n,r]of e.entries())r.desc=t[n]}))),null!==t.error&&0!==O.others.length&&(O.query.error=null),O}function J(e){const t=(searchState.currentTab+e+3)%searchState.focusedByTab.length;searchState.focusedByTab[searchState.currentTab]=document.activeElement,a(t),Y()}function Y(){const e=searchState.focusedByTab[searchState.currentTab]||document.querySelectorAll(".search-results.active a").item(0)||document.querySelectorAll("#search-tabs button").item(searchState.currentTab);searchState.focusedByTab[searchState.currentTab]=null,e&&e.focus()}function Z(t){let n,r;const s=e[t.ty],o=t.name;let a=t.path,l=t.exactPath;if("mod"===s)n=a+"::",r=i+a.replace(/::/g,"/")+"/"+o+"/index.html";else if("import"===s)n=t.path+"::",r=i+t.path.replace(/::/g,"/")+"/index.html#reexport."+o;else if("primitive"===s||"keyword"===s)n="",r=i+a.replace(/::/g,"/")+"/"+s+"."+o+".html";else if("externcrate"===s)n="",r=i+o+"/index.html";else if(void 0!==t.parent){const c=t.parent;let u=s+"."+o;const h=e[c.ty];let d=h,p=c.name;if(l=`${c.exactPath}::${c.name}`,"primitive"===h)n=c.name+"::";else if("structfield"===s&&"variant"===h){const e=t.path.lastIndexOf("::"),r=t.path.substr(e+2);a=t.path.substr(0,e),n=a+"::"+r+"::"+c.name+"::",u="variant."+c.name+".field."+o,d="enum",p=r}else n=a+"::"+c.name+"::";null!==t.implDisambiguator&&(u=t.implDisambiguator+"/"+u),r=i+a.replace(/::/g,"/")+"/"+d+"."+p+".html#"+u}else n=t.path+"::",r=i+t.path.replace(/::/g,"/")+"/"+s+"."+o+".html";return[n,r,`${l}::${o}`]}function ee(e){const t="<span>"+e.replace(/::/g,"::</span><span>");return t.endsWith("<span>")?t.slice(0,t.length-6):t}async function te(n,r,i){const s=i?" active":"",o=document.createElement("div");if(n.length>0){o.className="search-results "+s;for(const r of n){const n=r.name,i=e[r.ty],s=t[r.ty],a=0!==s.length?`${s}`:"?",l=document.createElement("a");l.className="result-"+i,l.href=r.href;const c=document.createElement("div");c.className="result-name",c.insertAdjacentHTML("beforeend",`<span class="typename">${a}</span>`),l.appendChild(c);let u=" ";r.is_alias&&(u=` <div class="alias"><b>${r.alias}</b><i class="grey">&nbsp;- see&nbsp;</i></div>`),c.insertAdjacentHTML("beforeend",`<div class="path">${u}${r.displayPath}<span class="${i}">${n}</span></div>`);const h=document.createElement("div");h.className="desc",h.insertAdjacentHTML("beforeend",r.desc),l.appendChild(h),o.appendChild(l)}}else null===r.error&&(o.className="search-failed"+s,o.innerHTML='No results :(<br/>Try on <a href="https://duckduckgo.com/?q='+encodeURIComponent("rust "+r.userQuery)+'">DuckDuckGo</a>?<br/><br/>Or try looking in one of these:<ul><li>The <a href="https://doc.rust-lang.org/reference/index.html">Rust Reference</a>  for technical details about the language.</li><li><a href="https://doc.rust-lang.org/rust-by-example/index.html">Rust By Example</a> for expository code examples.</a></li><li>The <a href="https://doc.rust-lang.org/book/index.html">Rust Book</a> for introductions to language features and the language itself.</li><li><a href="https://docs.rs">Docs.rs</a> for documentation of crates released on <a href="https://crates.io/">crates.io</a>.</li></ul>');return[o,n.length]}function ne(e,t,n){const r=n<10?`\u2007(${n})\u2007\u2007`:n<100?`\u2007(${n})\u2007`:`\u2007(${n})`;return searchState.currentTab===e?'<button class="selected">'+t+'<span class="count">'+r+"</span></button>":"<button>"+t+'<span class="count">'+r+"</span></button>"}function re(e){if(!browserSupportsHistoryApi())return;const t=searchState.getQueryStringParams();history.state||t.search?history.replaceState(null,"",e):history.pushState(null,"",e)}async function ie(e){const t=K(searchState.input.value.trim());let n=V();if(!e&&t.userQuery===y)return void(t.userQuery.length>0&&be());searchState.setLoadingSearch();const r=searchState.getQueryStringParams();null===n&&void 0!==r["filter-crate"]&&(n=r["filter-crate"]),searchState.title="Results for "+t.original+" - Rust",re(G(t.original,n)),await async function(e,t,n){const r=searchState.outputElement();if(t||1===e.others.length&&"true"===getSettingValue("go-to-only-result")){window.onunload=()=>{},searchState.removeQueryParameters();const t=document.createElement("a");return t.href=e.others[0].href,removeClass(t,"active"),document.body.appendChild(t),void t.click()}void 0===e.query&&(e.query=K(searchState.input.value)),y=e.query.userQuery;const[i,s,o]=await Promise.all([te(e.others,e.query,!0),te(e.in_args,e.query,!1),te(e.returned,e.query,!1)]);let c=searchState.currentTab;(0===c&&0===i[1]||1===c&&0===s[1]||2===c&&0===o[1])&&(0!==i[1]?c=0:0!==s[1]?c=1:0!==o[1]&&(c=2));let u="";if(l.size>1){u=' in&nbsp;<div id="crate-search-div"><select id="crate-search"><option value="all crates">all crates</option>';for(const e of l.keys())u+=`<option value="${e}" ${e===n&&"selected"}>${e}</option>`;u+="</select></div>"}let h=`<h1 class="search-results-title">Results${u}</h1>`;if(null!==e.query.error){const t=e.query.error;t.forEach(((e,n)=>{e=e.split("<").join("&lt;").split(">").join("&gt;"),t[n]=n%2!=0?`<code>${e.replaceAll(" ","&nbsp;")}</code>`:e})),h+=`<h3 class="error">Query parser error: "${t.join("")}".</h3>`,h+='<div id="search-tabs">'+ne(0,"In Names",i[1])+"</div>",c=0}else e.query.foundElems<=1&&0===e.query.returned.length?h+='<div id="search-tabs">'+ne(0,"In Names",i[1])+ne(1,"In Parameters",s[1])+ne(2,"In Return Types",o[1])+"</div>":(h+='<div id="search-tabs">'+ne(0,0===e.query.elems.length?"In Function Return Types":0===e.query.returned.length?"In Function Parameters":"In Function Signatures",i[1])+"</div>",c=0);null!==e.query.correction&&(h+=`<h3 class="search-corrections">Type "${e.query.returned.length>0?e.query.returned[0].name:e.query.elems[0].name}" not found. Showing results for closest type name "${e.query.correction}" instead.</h3>`);null!==e.query.proposeCorrectionFrom&&(h+=`<h3 class="search-corrections">Type "${e.query.proposeCorrectionFrom}" not found and used as generic parameter. Consider searching for "${e.query.proposeCorrectionTo}" instead.</h3>`);const d=document.createElement("div");d.id="results",d.appendChild(i[0]),d.appendChild(s[0]),d.appendChild(o[0]),r.innerHTML=h;const p=document.getElementById("crate-search");p&&p.addEventListener("input",ve),r.appendChild(d),searchState.showResults(r);const f=document.getElementById("search-tabs").childNodes;searchState.focusedByTab=[];let g=0;for(const l of f){const e=g;l.onclick=()=>a(e),searchState.focusedByTab.push(null),g+=1}a(c)}(await X(t,n,window.currentCrate),r.go_to_first,n)}function se(e,t){return e.length>0?e.map((e=>ce(e,t))):ae}const oe=new Map,ae=[];let le=new Map;function ce(e,t,r){let i,s,o,a;if("number"==typeof e?(i=e,s=ae,o=oe):(i=e[0],s=se(e[1],t),o=e.length>2&&e[2].length>0?new Map(e[2].map((e=>{const[n,r]=e;return[ce(n,t,!0).id,se(r,t)]}))):oe),i<0)a={id:i,ty:n,path:null,exactPath:null,generics:s,bindings:o};else if(0===i)a={id:null,ty:null,path:null,exactPath:null,generics:s,bindings:o};else{const e=t[i-1];a={id:k(e.name,r),ty:e.ty,path:e.path,exactPath:e.exactPath,generics:s,bindings:o}}const l=le.get(a.id);if(l){if(l.generics.length===a.generics.length&&l.generics!==a.generics&&l.generics.every(((e,t)=>a.generics[t]===e))&&(a.generics=l.generics),l.bindings.size===a.bindings.size&&l.bindings!==a.bindings){let e=!0;for(const[t,n]of l.bindings.entries()){const r=a.bindings.get(n);if(!r){e=!1;break}if(n!==r&&n.length===r.length&&n.every(((e,t)=>r[t]===e)))a.bindings.set(t,n);else if(n!==r){e=!1;break}}e&&(a.bindings=l.bindings)}if(l.ty===a.ty&&l.path===a.path&&l.bindings===a.bindings&&l.generics===a.generics&&l.ty===a.ty)return l}return le.set(a.id,a),a}function ue(e){return t=>{if(0===t)return null;let n,r;n="number"==typeof t[0]?[ce(t[0],e)]:se(t[0],e),r=t.length>1?"number"==typeof t[1]?[ce(t[1],e)]:se(t[1],e):[];const i=[],s=t.length;for(let o=2;o<s;++o)i.push("number"==typeof t[o]?[ce(t[o],e)]:se(t[o],e));return{inputs:n,output:r,where_clause:i}}}function he(e,t,n){let r=e.id;r!==v&&r!==x||(r=S),r!==E&&r!==C||(r=I),r!==F&&r!==M&&r!==Q||(r=P);if(null!==r){const e=3042594569^(i=4251993797+~~(i=3550635116+~~(i=374761393+~~(i=3345072700^(i=2127912214+~~(i=r)+(i<<12))^i>>>19)+(i<<5))^i<<9)+(i<<3))^i>>>16,s=(e=>(e=~e+(e<<15),e^=e>>>12,e+=e<<2,e^=e>>>4,(e=Math.imul(e,2057))^e>>16))(r),o=~~(e+Math.imul(s,2)),a=~~(e+Math.imul(s,3)),l=~~(e+Math.imul(s,4)),c=~~(e+Math.imul(s,5));t[0]|=1<<e%32|1<<a%32,t[1]|=1<<o%32|1<<c%32,t[2]|=1<<l%32|1<<s%32,n.add(r)}var i;for(const o of e.generics)he(o,t,n);const s={id:null,ty:0,generics:ae,bindings:oe};for(const[o,a]of e.bindings.entries())s.id=o,s.generics=a,he(s,t,n);t[3]=n.size}function de(e,t){const n=m[4*e],r=m[4*e+1],i=m[4*e+2],[s,o,a]=t,[l,c,u]=[n&s,r&o,i&a];return l^s||c^o||u^a?null:m[4*e+3]}class pe{constructor(e,t){this.string=e,this.cons=t,this.offset=0,this.backrefQueue=[]}decodeList(){const e="}".charCodeAt(0);let t=this.string.charCodeAt(this.offset);const n=[];for(;t!==e;)n.push(this.decode()),t=this.string.charCodeAt(this.offset);return this.offset+=1,n}decode(){const[e,t]=["{","`"].map((e=>e.charCodeAt(0)));let n=0,r=this.string.charCodeAt(this.offset);if(r===e)return this.offset+=1,this.decodeList();for(;r<t;)n=n<<4|15&r,this.offset+=1,r=this.string.charCodeAt(this.offset);n=n<<4|15&r;const[i,s]=[1&n,n>>1];return this.offset+=1,i?-s:s}next(){const e=this.string.charCodeAt(this.offset),[t,n,r]=["0","@","`"].map((e=>e.charCodeAt(0)));if(e>=t&&e<n)return this.offset+=1,this.backrefQueue[e-t];if(e===r)return this.offset+=1,this.cons(0);const i=this.cons(this.decode());return this.backrefQueue.unshift(i),this.backrefQueue.length>16&&this.backrefQueue.pop(),i}}class fe{constructor(e){const t=atob(e),n=new Uint8Array(t.length);for(let l=0;l<t.length;++l)n[l]=t.charCodeAt(l);const r=59===n[0],i=r?1+(n[2]|n[3]<<8):n[4]|n[5]<<8|n[6]<<16|n[7]<<24;let s,o=r?4:8;if(r){const e=Math.floor((i+7)/8);s=n.slice(o,o+e),o+=e}else s=new Uint8Array;this.keys=[],this.cardinalities=[];for(let l=0;l<i;++l)this.keys.push(n[o]|n[o+1]<<8),o+=2,this.cardinalities.push(1+(n[o]|n[o+1]<<8)),o+=2;this.containers=[];let a=null;if(!r||this.keys.length>=4){a=[];for(let e=0;e<i;++e)a.push(n[o]|n[o+1]<<8|n[o+2]<<16|n[o+3]<<24),o+=4}for(let l=0;l<i;++l){if(a&&a[l]!==o)throw console.log(this.containers),new Error(`corrupt bitmap ${l}: ${o} / ${a[l]}`);if(s[l>>3]&1<<(7&l)){const e=n[o]|n[o+1]<<8;o+=2,this.containers.push(new ge(e,n.slice(o,o+4*e))),o+=4*e}else if(this.cardinalities[l]>=4096)this.containers.push(new ye(n.slice(o,o+8192))),o+=8192;else{const e=2*this.cardinalities[l];this.containers.push(new me(this.cardinalities[l],n.slice(o,o+e))),o+=e}}}contains(e){const t=e>>16,n=65535&e;for(let r=0;r<this.keys.length;++r)if(this.keys[r]===t)return this.containers[r].contains(n);return!1}}class ge{constructor(e,t){this.runcount=e,this.array=t}contains(e){const t=4*this.runcount;for(let n=0;n<t;n+=4){const t=this.array[n]|this.array[n+1]<<8,r=this.array[n+2]|this.array[n+3]<<8;if(e>=t&&e<=t+r)return!0}return!1}}class me{constructor(e,t){this.cardinality=e,this.array=t}contains(e){const t=2*this.cardinality;for(let n=0;n<t;n+=2){if(e===(this.array[n]|this.array[n+1]<<8))return!0}return!1}}class ye{constructor(e){this.array=e}contains(e){return!!(this.array[e>>3]&1<<(7&e))}}function we(e){e.preventDefault(),searchState.clearInputTimeout(),ie()}function be(){const e=searchState.input;searchState.input&&(""===e.value||searchState.isDisplayed()||(searchState.showResults(),browserSupportsHistoryApi()&&history.replaceState(null,"",G(e.value,V())),document.title=searchState.title))}function ve(e){if("all crates"===e.target.value){re(G(searchState.input.value.trim(),null))}y=null,ie(!0)}!function(e){p=[],f=new Map,g=new Map;const t="A".charCodeAt(0);let n=0,r=0;for(const i of e.values())r+=i.t.length+1;m=new Uint32Array(4*(r+1)),r=0;for(const[i,s]of e){const e=new pe(s.D,(e=>e));let o={crate:i,shard:0,start:0,len:e.next(),promise:null,resolve:null};const a=[o];f.set(i,new fe(s.c)),g.set(i,new fe(s.e));let l=0;const c={crate:i,ty:3,name:i,path:"",descShard:o,descIndex:l,exactPath:"",desc:s.doc,parent:void 0,type:null,id:r,word:i,normalizedName:-1===i.indexOf("_")?i:i.replace(/_/g,""),bitIndex:0,implDisambiguator:null};r+=1,p.push(c),n+=1,g.get(i).contains(0)||(l+=1);const u=s.t,h=s.n,d=new Map(s.q),y=new Map(s.r),w=s.i,v=new Map(s.b),x=s.p,S=s.a,E=[],C=new pe(s.f,ue(E));let I=x.length,F=d.get(0);for(let t=0;t<I;++t){const e=x[t],n=e[0],r=e[1];let i=null;e.length>2&&(i=d.has(e[2])?d.get(e[2]):F,F=i);const s=e.length>3?d.get(e[3]):i;E.push({ty:n,name:r.toLowerCase(),path:i,exactPath:s}),x[t]={ty:n,name:r,path:i,exactPath:s}}F="",I=u.length;for(let n=0;n<I;++n){const s=n+1;l>=o.len&&!g.get(i).contains(s)&&(o={crate:i,shard:o.shard+1,start:o.start+o.len,len:e.next(),promise:null,resolve:null},l=0,a.push(o));let c="";"string"==typeof h[n]&&(c=h[n].toLowerCase());const f=d.has(n)?d.get(n):F,b=C.next();if(null!==b&&b){const e=m.subarray(4*r,4*(r+1)),t=new Set;for(const n of b.inputs)he(n,e,t);for(const n of b.output)he(n,e,t);for(const n of b.where_clause)for(const r of n)he(r,e,t)}const S={crate:i,ty:u.charCodeAt(n)-t,name:h[n],path:f,descShard:o,descIndex:l,exactPath:y.has(n)?d.get(y.get(n)):f,parent:w[n]>0?x[w[n]-1]:void 0,type:b,id:r,word:c,normalizedName:-1===c.indexOf("_")?c:c.replace(/_/g,""),bitIndex:s,implDisambiguator:v.has(n)?v.get(n):null};r+=1,p.push(S),F=S.path,g.get(i).contains(s)||(l+=1)}if(S){const e=new Map;b.set(i,e);for(const t in S){if(!Object.prototype.hasOwnProperty.call(S,t))continue;let r;e.has(t)?r=e.get(t):(r=[],e.set(t,r));for(const e of S[t])r.push(e+n)}}n+=u.length,searchState.descShards.set(i,a)}le=new Map}(l),"undefined"!=typeof window&&(!function(){const e=searchState.getQueryStringParams();""===searchState.input.value&&(searchState.input.value=e.search||"");const t=()=>{searchState.clearInputTimeout(),0===searchState.input.value.length?searchState.hideResults():searchState.timeout=setTimeout(ie,500)};if(searchState.input.onkeyup=t,searchState.input.oninput=t,document.getElementsByClassName("search-form")[0].onsubmit=we,searchState.input.onchange=e=>{e.target===document.activeElement&&(searchState.clearInputTimeout(),setTimeout(ie,0))},searchState.input.onpaste=searchState.input.onchange,searchState.outputElement().addEventListener("keydown",(e=>{if(!(e.altKey||e.ctrlKey||e.shiftKey||e.metaKey))if(38===e.which){const t=document.activeElement.previousElementSibling;t?t.focus():searchState.focus(),e.preventDefault()}else if(40===e.which){const t=document.activeElement.nextElementSibling;t&&t.focus();const n=document.activeElement.getBoundingClientRect();window.innerHeight-n.bottom<n.height&&window.scrollBy(0,n.height),e.preventDefault()}else 37===e.which?(J(-1),e.preventDefault()):39===e.which&&(J(1),e.preventDefault())})),searchState.input.addEventListener("keydown",(e=>{40===e.which&&(Y(),e.preventDefault())})),searchState.input.addEventListener("focus",(()=>{be()})),searchState.input.addEventListener("blur",(()=>{searchState.input.placeholder=searchState.input.origPlaceholder})),browserSupportsHistoryApi()){const e=document.title;window.addEventListener("popstate",(t=>{const n=searchState.getQueryStringParams();document.title=e,y=null,n.search&&n.search.length>0?(searchState.input.value=n.search,t.preventDefault(),ie()):(searchState.input.value="",searchState.hideResults())}))}window.onpageshow=()=>{const e=searchState.getQueryStringParams().search;""===searchState.input.value&&e&&(searchState.input.value=e),ie()}}(),window.searchState.getQueryStringParams().search&&ie()),"undefined"!=typeof exports&&(exports.initSearch=u,exports.execQuery=X,exports.parseQuery=K)}"undefined"!=typeof window?(window.initSearch=u,void 0!==window.searchIndex&&u(window.searchIndex)):u(new Map)}();