import{t as c,s as a,o as p}from"./app.5a4a9871.js";import{s as d}from"./index.c0edad13.js";const y={setup(u){let{videoIsShow:o}=c(d);const s=[];return a(()=>{o.value=!1,s.forEach(e=>{e.destroy()})}),p(()=>{const e=document.querySelector("head"),t=document.createElement("link");t.rel="stylesheet",t.href="https://cdn.plyr.io/3.6.12/plyr.css";const r=document.createElement("script");r.src="https://cdn.plyr.io/3.6.12/plyr.polyfilled.js",e.appendChild(t),e.appendChild(r);const n=()=>{Array.from(document.querySelectorAll(".player")).map(l=>{s.push(new Plyr(l))}),o.value=!0};r.onload=n}),(e,t)=>null}};export{y as default};