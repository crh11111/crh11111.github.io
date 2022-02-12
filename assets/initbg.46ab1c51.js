import{o as s,t as A}from"./app.5a4a9871.js";import{s as d}from"./index.c0edad13.js";const i={setup(g){return s(()=>{const n=document.querySelector(".toggle-dark-button"),a=document.querySelector("html"),r=document.querySelector("#app"),c=(t,e)=>Math.floor(t+(e-t)*Math.random()),o=()=>{let{theme:t}=A(d);if(t.value=a.className.includes("dark")?"dark":"light",a.className.includes("dark"))r.style.cssText=`
     background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAYAAABWdVznAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAACFJREFUeNpiZGBg4GegAsBlCD8TqSYNQg2Mo6FEBAAIMACdPABtrSW/IQAAAABJRU5ErkJggg==);
     background-repeat: repeat;
     background-attachment: fixed;
     min-height: 100vh;
      `;else{const e=c(1,4);r.style.cssText=`
       background: url(/imgs/bg${e}.${e>3?"jpg":"png"});
       background-repeat: repeat;
       ${e>3?"background-size:cover;":""}
       background-attachment: fixed;
       min-height: 100vh;
      `}};o(),n.addEventListener("click",()=>{o()})}),(n,a)=>null}};export{i as default};
