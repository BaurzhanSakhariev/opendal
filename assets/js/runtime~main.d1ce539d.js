(()=>{"use strict";var e,a,c,t,r,f={},d={};function b(e){var a=d[e];if(void 0!==a)return a.exports;var c=d[e]={exports:{}};return f[e].call(c.exports,c,c.exports,b),c.exports}b.m=f,e=[],b.O=(a,c,t,r)=>{if(!c){var f=1/0;for(i=0;i<e.length;i++){c=e[i][0],t=e[i][1],r=e[i][2];for(var d=!0,o=0;o<c.length;o++)(!1&r||f>=r)&&Object.keys(b.O).every((e=>b.O[e](c[o])))?c.splice(o--,1):(d=!1,r<f&&(f=r));if(d){e.splice(i--,1);var n=t();void 0!==n&&(a=n)}}return a}r=r||0;for(var i=e.length;i>0&&e[i-1][2]>r;i--)e[i]=e[i-1];e[i]=[c,t,r]},b.n=e=>{var a=e&&e.__esModule?()=>e.default:()=>e;return b.d(a,{a:a}),a},c=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,b.t=function(e,t){if(1&t&&(e=this(e)),8&t)return e;if("object"==typeof e&&e){if(4&t&&e.__esModule)return e;if(16&t&&"function"==typeof e.then)return e}var r=Object.create(null);b.r(r);var f={};a=a||[null,c({}),c([]),c(c)];for(var d=2&t&&e;"object"==typeof d&&!~a.indexOf(d);d=c(d))Object.getOwnPropertyNames(d).forEach((a=>f[a]=()=>e[a]));return f.default=()=>e,b.d(r,f),r},b.d=(e,a)=>{for(var c in a)b.o(a,c)&&!b.o(e,c)&&Object.defineProperty(e,c,{enumerable:!0,get:a[c]})},b.f={},b.e=e=>Promise.all(Object.keys(b.f).reduce(((a,c)=>(b.f[c](e,a),a)),[])),b.u=e=>"assets/js/"+({53:"935f2afb",217:"b56f9725",380:"ab10c306",455:"07df3158",533:"b2b675dd",716:"a0405932",1011:"cc62039a",1163:"434bbc94",1372:"1db64337",1477:"b2f554cd",1513:"9897d641",1652:"8cc9519e",1713:"a7023ddc",1846:"054cd2fb",2379:"d5c31a96",2505:"14a24c8e",2535:"814f3328",2804:"2cbf1097",3057:"136e1c50",3085:"1f391b9e",3089:"a6aa9e1f",3358:"f3200a52",3608:"9e4087bc",3661:"3806ecb0",3845:"e892cec6",3922:"6eb7fe18",4013:"01a85c17",4157:"283e63f8",4195:"c4f5d8e4",4477:"1957547a",4536:"22d8fa67",4538:"f1ca5a39",4719:"8f4159f2",4832:"ece86388",5214:"bb5b2057",5555:"37896f57",6089:"62a401e9",6103:"ccc49370",6427:"5a65e608",6611:"209227ae",6948:"e19a6781",6983:"ae4554eb",7289:"c6ab695b",7309:"4fb2b91a",7757:"57a16c1d",7794:"02514dc9",7918:"17896441",8610:"6875c492",9319:"4b02d014",9514:"1be78505",9817:"14eb3368"}[e]||e)+"."+{53:"917b7ba9",217:"7a8060f6",380:"c3b4dc27",455:"bea29bdc",533:"c28c5950",716:"747e5793",1011:"b6727495",1163:"2bf379ef",1372:"5598c52f",1477:"a906ccb6",1506:"7a372cde",1513:"de971340",1652:"ccd38ae0",1713:"72cf0d24",1846:"b6b36279",2379:"3f881717",2505:"0e997d88",2529:"ea72b266",2535:"bc5ca14b",2804:"ab9ca8a0",3057:"3eaaec43",3085:"fc747d21",3089:"66019f66",3358:"117ebfb8",3608:"822525bd",3661:"7d81778c",3845:"65358858",3922:"ae9ba6c5",4013:"4316cd6e",4157:"a74b6771",4195:"acdec80a",4477:"b0bdc630",4536:"cd3b4b22",4538:"4553924f",4719:"86adef71",4832:"c7f148e3",4972:"f7d54065",5214:"11d9521f",5555:"fc5a447b",6089:"0889522b",6103:"ba4b09b5",6427:"caf4ac16",6611:"066f1206",6948:"8576bf3f",6983:"f8940a87",7289:"f2c219f3",7309:"4e640a3e",7757:"726fad2e",7794:"f65c569b",7918:"fa99442c",8610:"a3ea2b2f",9319:"e06cd8f0",9514:"d888abe5",9817:"5d4ade20"}[e]+".js",b.miniCssF=e=>{},b.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),b.o=(e,a)=>Object.prototype.hasOwnProperty.call(e,a),t={},r="opendal-website:",b.l=(e,a,c,f)=>{if(t[e])t[e].push(a);else{var d,o;if(void 0!==c)for(var n=document.getElementsByTagName("script"),i=0;i<n.length;i++){var u=n[i];if(u.getAttribute("src")==e||u.getAttribute("data-webpack")==r+c){d=u;break}}d||(o=!0,(d=document.createElement("script")).charset="utf-8",d.timeout=120,b.nc&&d.setAttribute("nonce",b.nc),d.setAttribute("data-webpack",r+c),d.src=e),t[e]=[a];var l=(a,c)=>{d.onerror=d.onload=null,clearTimeout(s);var r=t[e];if(delete t[e],d.parentNode&&d.parentNode.removeChild(d),r&&r.forEach((e=>e(c))),a)return a(c)},s=setTimeout(l.bind(null,void 0,{type:"timeout",target:d}),12e4);d.onerror=l.bind(null,d.onerror),d.onload=l.bind(null,d.onload),o&&document.head.appendChild(d)}},b.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},b.p="/",b.gca=function(e){return e={17896441:"7918","935f2afb":"53",b56f9725:"217",ab10c306:"380","07df3158":"455",b2b675dd:"533",a0405932:"716",cc62039a:"1011","434bbc94":"1163","1db64337":"1372",b2f554cd:"1477","9897d641":"1513","8cc9519e":"1652",a7023ddc:"1713","054cd2fb":"1846",d5c31a96:"2379","14a24c8e":"2505","814f3328":"2535","2cbf1097":"2804","136e1c50":"3057","1f391b9e":"3085",a6aa9e1f:"3089",f3200a52:"3358","9e4087bc":"3608","3806ecb0":"3661",e892cec6:"3845","6eb7fe18":"3922","01a85c17":"4013","283e63f8":"4157",c4f5d8e4:"4195","1957547a":"4477","22d8fa67":"4536",f1ca5a39:"4538","8f4159f2":"4719",ece86388:"4832",bb5b2057:"5214","37896f57":"5555","62a401e9":"6089",ccc49370:"6103","5a65e608":"6427","209227ae":"6611",e19a6781:"6948",ae4554eb:"6983",c6ab695b:"7289","4fb2b91a":"7309","57a16c1d":"7757","02514dc9":"7794","6875c492":"8610","4b02d014":"9319","1be78505":"9514","14eb3368":"9817"}[e]||e,b.p+b.u(e)},(()=>{var e={1303:0,532:0};b.f.j=(a,c)=>{var t=b.o(e,a)?e[a]:void 0;if(0!==t)if(t)c.push(t[2]);else if(/^(1303|532)$/.test(a))e[a]=0;else{var r=new Promise(((c,r)=>t=e[a]=[c,r]));c.push(t[2]=r);var f=b.p+b.u(a),d=new Error;b.l(f,(c=>{if(b.o(e,a)&&(0!==(t=e[a])&&(e[a]=void 0),t)){var r=c&&("load"===c.type?"missing":c.type),f=c&&c.target&&c.target.src;d.message="Loading chunk "+a+" failed.\n("+r+": "+f+")",d.name="ChunkLoadError",d.type=r,d.request=f,t[1](d)}}),"chunk-"+a,a)}},b.O.j=a=>0===e[a];var a=(a,c)=>{var t,r,f=c[0],d=c[1],o=c[2],n=0;if(f.some((a=>0!==e[a]))){for(t in d)b.o(d,t)&&(b.m[t]=d[t]);if(o)var i=o(b)}for(a&&a(c);n<f.length;n++)r=f[n],b.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return b.O(i)},c=self.webpackChunkopendal_website=self.webpackChunkopendal_website||[];c.forEach(a.bind(null,0)),c.push=a.bind(null,c.push.bind(c))})()})();