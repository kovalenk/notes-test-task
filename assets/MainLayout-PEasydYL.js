import{o as $,E as m,c as A,m as I}from"./modalActions-Hv7rTiPa.js";import{d as u,r as x,o as r,c as p,a as c,b as e,w as _,e as b,u as o,p as k,f as N,_ as C,g as S,h as w,n as V,v as B,i as E,j as g,F as M}from"./index-srA58fo7.js";import{A as K}from"./AppModal-g_f0Myq_.js";import{u as T,g as F,c as H}from"./noteForm-ZnhvNckg.js";import{u as L}from"./notes-Ou7xcYqS.js";const P="/notes-test-task/assets/male-QOP6TWKJ.svg",U=t=>(k("data-v-1f5929eb"),t=t(),N(),t),j={class:"header"},q={class:"nav-section"},z=U(()=>e("div",{class:"profile-logo"},[e("img",{src:P,alt:"profile_img"})],-1)),D=u({__name:"HeaderComponent",setup(t){return(n,s)=>{const a=x("router-link");return r(),p("div",j,[c(a,{class:"logo_header",to:"/home"}),e("div",q,[e("ul",null,[e("li",null,[c(a,{class:"label-inter",to:"/home","exact-active-class":"active"},{default:_(()=>[b("Home")]),_:1})]),e("li",null,[c(a,{class:"label-inter",to:"/statistics","exact-active-class":"active"},{default:_(()=>[b("Statistics")]),_:1})])]),e("button",{class:"btn btn__action",onClick:s[0]||(s[0]=i=>o($)(o(m).AddNote))},"Create")]),z])}}}),J=C(D,[["__scopeId","data-v-1f5929eb"]]),y=t=>(k("data-v-81e5fa14"),t=t(),N(),t),O=y(()=>e("div",{class:"modal-header"},[e("h2",{class:"title-inter"},"New note")],-1)),Q={class:"modal-body"},W=y(()=>e("label",{for:"description"},"Note description",-1)),G={key:0,class:"error"},R=u({__name:"AddNote",setup(t){const{form:n,$v:s}=T(),{addNewItem:a}=L(),i=()=>{A(m.AddNote)},v=()=>{H(s.value)||(a(n.text),i())},f=l=>{l&&l.code==="Enter"&&l.ctrlKey&&v()};return document.addEventListener("keydown",f),S(()=>{document.removeEventListener("keydown",f)}),(l,d)=>(r(),w(K,null,{content:_(()=>[O,e("div",Q,[e("div",{class:V(["form-group",o(F)(o(s),"text")])},[W,E(e("textarea",{name:"description",id:"description",placeholder:"Add a new Note","onUpdate:modelValue":d[0]||(d[0]=h=>o(n).text=h),onBlur:d[1]||(d[1]=h=>o(s).text.$touch())},null,544),[[B,o(n).text]]),o(s).text.required.$invalid?(r(),p("span",G,"This field must not be empty")):g("",!0)],2)]),e("div",{class:"modal-footer"},[e("div",{class:"button-group"},[e("button",{class:"btn btn_outline",onClick:i},"Cancel"),e("button",{class:"btn btn__action",onClick:v},"Save")])])]),_:1}))}}),X=C(R,[["__scopeId","data-v-81e5fa14"]]),se=u({__name:"MainLayout",setup(t){return(n,s)=>{const a=x("router-view");return r(),p(M,null,[c(J),c(a),o(I)[o(m).AddNote]?(r(),w(X,{key:0})):g("",!0)],64)}}});export{se as default};
