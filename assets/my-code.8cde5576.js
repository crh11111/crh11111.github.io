import{o as d}from"./app.5a4a9871.js";const p={setup(s){return d(()=>{const o=document.querySelectorAll("code"),n=`
  <div class="codebox-header">
    <div class="circle one"></div>
    <div class="circle two"></div>
    <div class="circle three"></div>
    <svg t="1644040761636" class="copy" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="7993" ><path class="copy-p" d="M576 384a64 64 0 0 1 64 64v341.333333a64 64 0 0 1-64 64H234.666667a64 64 0 0 1-64-64V448a64 64 0 0 1 64-64h341.333333z m0 64H234.666667v341.333333h341.333333V448z m-64 192v64H298.666667v-64h213.333333zM789.333333 170.666667a64 64 0 0 1 64 64v341.333333a64 64 0 0 1-64 64h-106.666666v-64h106.666666V234.666667H448v106.666666h-64v-106.666666a64 64 0 0 1 64-64h341.333333zM512 533.333333v64H298.666667v-64h213.333333z" p-id="7994"></path></svg>
  </div>
 `;Array.from(o).forEach(e=>{e.parentElement.parentElement.style.cssText=`
    margin-top:60px;
    background:rgba(41,45,62,0.9);
    border-top-left-radius: 0px;
    border-top-right-radius: 0px;
    position: relative;
    `,e.parentElement.parentElement.innerHTML+=n});const c=document.querySelectorAll(".copy"),r=e=>{if(e.target.nodeName=="svg"){const a=e.target.parentElement.previousElementSibling.children[0].innerText,t=document.createElement("input");t.value=a,document.body.appendChild(t),t.select(),document.execCommand("copy"),document.body.removeChild(t),alert("\u590D\u5236\u6210\u529F")}};c.forEach(e=>{e.onclick=r})}),(o,n)=>null}};export{p as default};
