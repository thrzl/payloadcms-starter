"use strict";(self.webpackChunkpayload_starter_typescript=self.webpackChunkpayload_starter_typescript||[]).push([[710],{42697:(e,a,t)=>{t.d(a,{Z:()=>d});var r=t(50959),s=t(11313),l=t(83339),o=t(26178),n=t(792);t(49298);const d=()=>{const{getField:e}=(0,n.useWatchForm)(),a=e("password"),t=(0,r.useCallback)((e=>e===(null==a?void 0:a.value)||"Passwords do not match."),[a]),{value:d,showError:c,setValue:i,errorMessage:m}=(0,s.Z)({path:"confirm-password",disableFormData:!0,validate:t,enableDebouncedValue:!0}),u=["field-type","confirm-password",c&&"error"].filter(Boolean).join(" ");return r.createElement("div",{className:u},r.createElement(o.Z,{showError:c,message:m}),r.createElement(l.Z,{htmlFor:"field-confirm-password",label:"Confirm Password",required:!0}),r.createElement("input",{value:d||"",onChange:i,type:"password",autoComplete:"off",id:"field-confirm-password",name:"confirm-password"}))}},43634:(e,a,t)=>{t.d(a,{Z:()=>o});var r=t(50959),s=t(11313),l=t(63543);const o=t.n(l)()((e=>{const{name:a,path:t,value:l,disableModifyingForm:o=!0}=e,n=t||a,{value:d,setValue:c}=(0,s.Z)({path:n});return(0,r.useEffect)((()=>{void 0!==l&&c(l,o)}),[l,c,o]),r.createElement("input",{id:`field-${n.replace(/\./gi,"__")}`,type:"hidden",value:d||"",onChange:c,name:n})}))},39569:(e,a,t)=>{t.d(a,{Z:()=>i});var r=t(50959),s=t(11313),l=t(83339),o=t(26178),n=t(63543),d=t.n(n),c=t(20319);t(47054);const i=d()((e=>{const{path:a,name:t,required:n,validate:d=c.password,style:i,className:m,width:u,autoComplete:p,label:w}=e,h=a||t,E=(0,r.useCallback)(((e,a)=>d(e,{...a,required:n})),[d,n]),{value:f,showError:v,formProcessing:Z,setValue:b,errorMessage:g}=(0,s.Z)({path:h,validate:E,enableDebouncedValue:!0}),y=["field-type","password",m,v&&"error"].filter(Boolean).join(" ");return r.createElement("div",{className:y,style:{...i,width:u}},r.createElement(o.Z,{showError:v,message:g}),r.createElement(l.Z,{htmlFor:`field-${h.replace(/\./gi,"__")}`,label:w,required:n}),r.createElement("input",{id:`field-${h.replace(/\./gi,"__")}`,value:f||"",onChange:b,disabled:Z,type:"password",autoComplete:p,name:h}))}))},44710:(e,a,t)=>{t.r(a),t.d(a,{default:()=>f});var r=t(50959),s=t(37170),l=t(70570),o=t(23824),n=t(95022),d=t(91449),c=t(32051),i=t(39569),m=t(42697),u=t(96995),p=t(37692),w=t(6125),h=(t(5059),t(43634));const E="reset-password",f=()=>{const{admin:{user:e},serverURL:a,routes:{admin:t,api:f}}=(0,o.Z)(),{token:v}=(0,s.UO)(),Z=(0,s.k6)(),{user:b,setToken:g}=(0,n.a)();return b?r.createElement(d.Z,{className:E},r.createElement(w.Z,{title:"Reset Password",description:"Reset password",keywords:"Reset Password, Payload, CMS"}),r.createElement("div",{className:`${E}__wrap`},r.createElement("h1",null,"Already logged in"),r.createElement("p",null,"To log in with another user, you should"," ",r.createElement(l.Link,{to:`${t}/logout`},"log out")," ","first."),r.createElement("br",null),r.createElement(p.Z,{el:"link",buttonStyle:"secondary",to:t},"Back to Dashboard"))):r.createElement(d.Z,{className:E},r.createElement("div",{className:`${E}__wrap`},r.createElement("h1",null,"Reset Password"),r.createElement(c.Z,{onSuccess:e=>{e.token&&(g(e.token),Z.push(`${t}`))},method:"post",action:`${a}${f}/${e}/reset-password`,redirect:t},r.createElement(i.Z,{label:"New Password",name:"password",autoComplete:"off",required:!0}),r.createElement(m.Z,null),r.createElement(h.Z,{name:"token",value:v}),r.createElement(u.Z,null,"Reset Password"))))}}}]);