import{u as m}from"./asyncData.5kvYCcZB.js";import{v,I as l,J as d,K as g,L as y,f as h,M as _,m as w,x as C,z as f}from"./entry.szzdeUm4.js";import{h as p,u as x}from"./preview.47dBwLcH.js";import{q as P,w as c,e as $,s as N,j as E,u as T}from"./query.LF23g_qH.js";import{_ as j}from"./nuxt-link.6vTtoGjb.js";const S=async t=>{const{content:e}=v().public;typeof(t==null?void 0:t.params)!="function"&&(t=P(t));const n=t.params(),o=e.experimental.stripQueryParameters?c(`/navigation/${`${p(n)}.${e.integrity}`}/${$(n)}.json`):c(`/navigation/${p(n)}.${e.integrity}.json`);if(N())return(await l(()=>import("./client-db.YdIFyRw-.js"),__vite__mapDeps([0,1,2,3,4,5]),import.meta.url).then(i=>i.generateNavigation))(n);const a=await $fetch(o,{method:"GET",responseType:"json",params:e.experimental.stripQueryParameters?void 0:{_params:E(n),previewToken:x().getPreviewToken()}});if(typeof a=="string"&&a.startsWith("<!DOCTYPE html>"))throw new Error("Not found");return a},b="$s";function D(...t){const e=typeof t[t.length-1]=="string"?t.pop():void 0;typeof t[0]!="string"&&t.unshift(e);const[n,o]=t;if(!n||typeof n!="string")throw new TypeError("[nuxt] [useState] key must be a string: "+n);if(o!==void 0&&typeof o!="function")throw new Error("[nuxt] [useState] init must be a function: "+o);const a=b+n,r=y(),i=d(r.payload.state,a);if(i.value===void 0&&o){const s=o();if(g(s))return r.payload.state[a]=s,s;i.value=s}return i}const R=h({name:"ContentNavigation",props:{query:{type:Object,required:!1,default:void 0}},async setup(t){const{query:e}=_(t),n=w(()=>{var a;return typeof((a=e.value)==null?void 0:a.params)=="function"?e.value.params():e.value});if(!n.value&&D("dd-navigation").value){const{navigation:a}=T();return{navigation:a}}const{data:o}=await m(`content-navigation-${p(n.value)}`,()=>S(n.value));return{navigation:o}},render(t){const e=C(),{navigation:n}=t,o=i=>f(j,{to:i._path},()=>i.title),a=(i,s)=>f("ul",s?{"data-level":s}:null,i.map(u=>u.children?f("li",null,[o(u),a(u.children,s+1)]):f("li",null,o(u)))),r=i=>a(i,0);return e!=null&&e.default?e.default({navigation:n,...this.$attrs}):r(n)}}),Q=R;export{Q as default};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./client-db.YdIFyRw-.js","./entry.szzdeUm4.js","./query.LF23g_qH.js","./preview.47dBwLcH.js","./index.Wme0U9j4.js","./_commonjsHelpers.5-cIlDoe.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}