import{_}from"./nuxt-link.Ka8mz8Yc.js";import{q as i}from"./query.iV01ooXf.js";import{f as u,l,m,o as e,c as n,F as p,r as f,j as d,b as x,w as g,t as h,d as w}from"./entry.6ymeVimN.js";const F=u({__name:"Pagination",async setup(y){let t,o;const s=([t,o]=l(()=>i("posts").count()),t=await t,o(),t),r=m(()=>Math.ceil(s/5));return(C,k)=>{const c=_;return e(),n("ul",null,[(e(!0),n(p,null,f(d(r),a=>(e(),n("li",null,[x(c,{to:`/pagination/${a}`},{default:g(()=>[w(h(a),1)]),_:2},1032,["to"])]))),256))])}}});export{F as _};