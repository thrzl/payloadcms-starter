"use strict";(self.webpackChunkpayload_starter_typescript=self.webpackChunkpayload_starter_typescript||[]).push([[380,278],{87377:(e,t,a)=>{a.d(t,{Z:()=>o});var l=a(50959),r=a(38587);a(92064);const n="field-description",o=e=>{const{className:t,description:a,value:o}=e;if((0,r.isComponent)(a)){const e=a;return l.createElement(e,{value:o})}return a?l.createElement("div",{className:[n,t].filter(Boolean).join(" ")},"function"==typeof a?a({value:o}):a):null}},38587:function(e,t,a){var l=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.isComponent=void 0;const r=l(a(50959));t.isComponent=function(e){return r.default.isValidElement(e)}},65991:(e,t,a)=>{a.d(t,{Z:()=>m});var l=a(50959),r=a(63543),n=a.n(r),o=a(11313),i=a(83339),s=a(26178),c=a(87377),d=a(20319);a(36762);const m=n()((e=>{const{name:t,path:a,required:r,validate:n=d.email,admin:{readOnly:m,style:u,className:p,width:C,placeholder:E,autoComplete:h,description:f,condition:g}={},label:y}=e,Z=a||t,v=(0,l.useCallback)(((e,t)=>n(e,{...t,required:r})),[n,r]),w=(0,o.Z)({path:Z,validate:v,enableDebouncedValue:!0,condition:g}),{value:L,showError:b,setValue:V,errorMessage:_}=w,k=["field-type","email",p,b&&"error",m&&"read-only"].filter(Boolean).join(" ");return l.createElement("div",{className:k,style:{...u,width:C}},l.createElement(s.Z,{showError:b,message:_}),l.createElement(i.Z,{htmlFor:`field-${Z.replace(/\./gi,"__")}`,label:y,required:r}),l.createElement("input",{id:`field-${Z.replace(/\./gi,"__")}`,value:L||"",onChange:V,disabled:Boolean(m),placeholder:E,type:"email",name:Z,autoComplete:h}),l.createElement(c.Z,{value:L,description:f}))}))},39569:(e,t,a)=>{a.d(t,{Z:()=>d});var l=a(50959),r=a(11313),n=a(83339),o=a(26178),i=a(63543),s=a.n(i),c=a(20319);a(47054);const d=s()((e=>{const{path:t,name:a,required:i,validate:s=c.password,style:d,className:m,width:u,autoComplete:p,label:C}=e,E=t||a,h=(0,l.useCallback)(((e,t)=>s(e,{...t,required:i})),[s,i]),{value:f,showError:g,formProcessing:y,setValue:Z,errorMessage:v}=(0,r.Z)({path:E,validate:h,enableDebouncedValue:!0}),w=["field-type","password",m,g&&"error"].filter(Boolean).join(" ");return l.createElement("div",{className:w,style:{...d,width:u}},l.createElement(o.Z,{showError:g,message:v}),l.createElement(n.Z,{htmlFor:`field-${E.replace(/\./gi,"__")}`,label:C,required:i}),l.createElement("input",{id:`field-${E.replace(/\./gi,"__")}`,value:f||"",onChange:Z,disabled:y,type:"password",autoComplete:p,name:E}))}))},49159:(e,t,a)=>{a.d(t,{Z:()=>i});var l=a(50959),r=a(23824),n=a(42755);const o=()=>l.createElement("svg",{width:"180",height:"50",viewBox:"0 0 180 50",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"graphic-logo"},l.createElement("style",null,"\n  .graphic-logo path {\n    fill: var(--theme-elevation-1000);\n  }\n"),l.createElement("path",{d:"M65.922 13.8685C71.1075 13.8685 77.0257 14.6014 77.0257 22.2185C77.0257 28.6587 71.8736 30.2243 66.0664 30.2243H62.2689V39.0961H57.2944V13.8685H65.922ZM62.2689 17.7659V26.3602H66.3773C69.4752 26.3602 71.9069 25.594 71.9069 22.2518C71.9069 18.1101 68.7424 17.7659 66.022 17.7659H62.2689Z"}),l.createElement("path",{d:"M84.3209 39.5514C80.7344 39.5514 77.5698 37.4639 77.5698 34.0884C77.5698 29.6358 82.5443 28.3145 89.8949 27.4706V27.1264C89.8949 24.2394 88.3626 23.2623 86.3084 23.2623C84.2542 23.2623 82.7219 24.2394 82.622 26.2936H78.1361C78.4803 22.6072 81.7226 19.8867 86.4861 19.8867C91.1163 19.8867 94.7028 21.7633 94.7028 28.1035C94.7028 28.692 94.6362 31.2014 94.6362 32.9114C94.6362 35.865 94.8472 37.5416 95.1914 39.1073H90.7721C90.6278 38.5188 90.4945 37.6083 90.4279 36.7089C89.0844 38.6853 87.1412 39.5514 84.3209 39.5514ZM90.0282 30.5463C84.6651 31.1015 82.511 31.7344 82.511 33.8219C82.511 35.1766 83.588 36.298 85.7532 36.298C88.7512 36.298 90.0393 34.5547 90.0393 31.4901V30.5463H90.0282Z"}),l.createElement("path",{d:"M97.2899 45.1921V41.5057H99.0998C100.699 41.5057 101.432 41.539 102.231 39.5514L102.442 39.0295L95.269 20.3753H100.521L104.763 33.8774L109.115 20.3753H113.99L107.139 38.541C104.951 44.3593 103.974 45.1921 99.3108 45.1921H97.2899Z"}),l.createElement("path",{d:"M120.263 39.1073H115.456V13.8685H120.263V39.1073Z"}),l.createElement("path",{d:"M122.406 29.7801C122.406 23.2067 126.826 19.9645 131.7 19.9645C136.575 19.9645 140.994 23.2067 140.994 29.7801C140.994 36.3535 136.575 39.5625 131.7 39.5625C126.826 39.5514 122.406 36.3535 122.406 29.7801ZM127.281 29.7801C127.281 33.6775 128.913 35.7984 131.7 35.7984C134.487 35.7984 136.119 33.6775 136.119 29.7801C136.119 25.8494 134.487 23.7286 131.7 23.7286C128.913 23.7286 127.281 25.8383 127.281 29.7801Z"}),l.createElement("path",{d:"M149.167 39.5514C145.58 39.5514 142.416 37.4639 142.416 34.0884C142.416 29.6358 147.39 28.3145 154.741 27.4706V27.1264C154.741 24.2394 153.208 23.2623 151.154 23.2623C149.1 23.2623 147.568 24.2394 147.468 26.2936H142.982C143.326 22.6072 146.568 19.8867 151.332 19.8867C155.962 19.8867 159.549 21.7633 159.549 28.1035C159.549 28.692 159.482 31.2014 159.482 32.9114C159.482 35.865 159.693 37.5416 160.037 39.1073H155.618C155.473 38.5188 155.34 37.6083 155.274 36.7089C153.941 38.6853 151.987 39.5514 149.167 39.5514ZM154.874 30.5463C149.511 31.1015 147.357 31.7344 147.357 33.8219C147.357 35.1766 148.434 36.298 150.599 36.298C153.597 36.298 154.885 34.5547 154.885 31.4901V30.5463H154.874Z"}),l.createElement("path",{d:"M175.06 39.1073V36.7422C173.872 38.7964 171.618 39.5625 169.664 39.5625C165.067 39.5625 161.625 35.7317 161.625 29.7468C161.625 23.8619 165 19.9645 169.664 19.9645C172.029 19.9645 174.05 21.0415 175.06 22.7848V13.8796H179.868V39.1073H175.06ZM175.238 29.7357C175.238 25.9716 173.494 23.6398 170.852 23.6398C168.242 23.6398 166.677 26.1159 166.677 29.7691C166.677 33.4222 168.242 35.865 170.852 35.865C173.494 35.865 175.238 33.5665 175.238 29.7357Z"}),l.createElement("path",{d:"M19.1531 0L42.049 13.8019V39.9956L24.8049 50V23.8064L1.89795 10.0155L19.1531 0Z"}),l.createElement("path",{d:"M17.4097 48.5454V28.1035L0.132324 38.1301L17.4097 48.5454Z"})),i=()=>{const{admin:{components:{graphics:{Logo:e}={Logo:void 0}}={}}={}}=(0,r.Z)();return l.createElement(n.Z,{CustomComponent:e,DefaultComponent:o})}},70278:(e,t,a)=>{a.r(t),a.d(t,{default:()=>f});var l=a(50959),r=a(37170),n=a(70570),o=a(23824),i=a(95022),s=a(49159),c=a(91449),d=a(32051),m=a(65991),u=a(39569),p=a(96995),C=a(37692),E=a(6125);a(91051);const h="login",f=()=>{const e=(0,r.k6)(),{user:t,setToken:a}=(0,i.a)(),{admin:{user:f,components:{beforeLogin:g,afterLogin:y}={}},serverURL:Z,routes:{admin:v,api:w},collections:L}=(0,o.Z)(),b=L.find((({slug:e})=>e===f));return t?l.createElement(c.Z,{className:h},l.createElement(E.Z,{title:"Login",description:"Login user",keywords:"Login, Payload, CMS"}),l.createElement("div",{className:"login__wrap"},l.createElement("h1",null,"Already logged in"),l.createElement("p",null,"To log in with another user, you should"," ",l.createElement(n.Link,{to:`${v}/logout`},"log out")," ","first."),l.createElement("br",null),l.createElement(C.Z,{el:"link",buttonStyle:"secondary",to:v},"Back to Dashboard"))):l.createElement(c.Z,{className:h},l.createElement(E.Z,{title:"Login",description:"Login user",keywords:"Login, Payload, CMS"}),l.createElement("div",{className:"login__brand"},l.createElement(s.Z,null)),Array.isArray(g)&&g.map(((e,t)=>l.createElement(e,{key:t}))),!b.auth.disableLocalStrategy&&l.createElement(d.Z,{disableSuccessStatus:!0,waitForAutocomplete:!0,onSuccess:t=>{t.token&&(a(t.token),e.push(v))},method:"post",action:`${Z}${w}/${f}/login`},l.createElement(m.Z,{label:"Email Address",name:"email",admin:{autoComplete:"email"},required:!0}),l.createElement(u.Z,{label:"Password",name:"password",autoComplete:"off",required:!0}),l.createElement(n.Link,{to:`${v}/forgot`},"Forgot password?"),l.createElement(p.Z,null,"Login")),Array.isArray(y)&&y.map(((e,t)=>l.createElement(e,{key:t}))))}},61380:(e,t,a)=>{a.r(t),a.d(t,{default:()=>p});var l=a(50959),r=a(37170),n=a(23824),o=a(95022),i=a(49159),s=a(91449),c=a(37692),d=a(6125),m=a(70278);a(16663);const u="verify",p=({collection:e})=>{const{slug:t}=e,{user:a}=(0,o.a)(),{token:p}=(0,r.UO)(),{serverURL:C,routes:{admin:E},admin:{user:h}}=(0,n.Z)(),f=t===h,[g,y]=(0,l.useState)(null);if((0,l.useEffect)((()=>{!async function(){const e=await fetch(`${C}/api/${t}/verify/${p}`,{method:"POST"});y(e)}()}),[y,t,C,p]),a)return l.createElement(m.default,null);return l.createElement(s.Z,{className:u},l.createElement(d.Z,{title:"Verify",description:"Verify user",keywords:"Verify, Payload, CMS"}),l.createElement("div",{className:"verify__brand"},l.createElement(i.Z,null)),l.createElement("h2",null,200===(null==g?void 0:g.status)?"Verified Successfully":202===(null==g?void 0:g.status)?"Already Activated":"Unable To Verify"),f&&200===(null==g?void 0:g.status)&&l.createElement(c.Z,{el:"link",buttonStyle:"secondary",to:`${E}/login`},"Login"))}}}]);