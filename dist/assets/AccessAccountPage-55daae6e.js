import{v as j,r as c,aw as x,ax as D,b as a,F as _,W as L,j as e,C as P,d as k,G as t,B as E,L as p,o as z}from"./index-fdb653ab.js";import{T as f}from"./TextField-1050d08e.js";import"./useFormControl-28c47510.js";async function w(r,m,o,l){r(!0);let u=await fetch(`${j}/api/user/token/`,{method:"POST",body:JSON.stringify({email:o,password:l}),headers:{"Content-type":"application/json"}});if(u.ok){let d=await u.json();return localStorage.setItem("Token",d.token),localStorage.setItem("isLogged","LOGGED_IN"),u=await fetch(`${j}/api/user/me/`,{method:"GET",headers:{"Content-type":"application/json",Authorization:`Token ${d.token}`}}),u.ok?(d=await u.json(),r(!1),d):(r(!1),"error")}else return r(!1),m(!0),"error"}async function $(r,m,o,l){r(!0);const d=await(await fetch(`${j}/api/user/create/`,{method:"POST",body:JSON.stringify({name:m,email:o,password:l}),headers:{"Content-type":"application/json"}})).json();console.log(d),r(!1)}function N(r){return r.split("_").map(l=>l[0].toUpperCase()+l.substring(1)).join(" ")}function U(){const[r,m]=c.useState(""),[o,l]=c.useState(""),[u,d]=c.useState(""),[I,h]=c.useState(!1),[C,S]=c.useState(!1),b=x(),y=D(),n=N(y.accessType),v=async s=>{if(s.preventDefault(),n==="Login"){const i=await w(h,S,o,u);if(i!=="error"){i.user_status==="member"?localStorage.setItem("username",i.name):i.user_status==="staff"&&localStorage.setItem("username",i.email);const g=localStorage.getItem("username");localStorage.setItem("user_id",i.user_id),localStorage.setItem("user_status",i.user_status),b(`/account/${i.user_status}/${g}`)}}else if(n==="Sign Up"){await $(h,r,o,u);const i=await w(h,S,o,u);i.user_status==="member"?localStorage.setItem("username",i.name):i.user_status==="staff"&&localStorage.setItem("username",i.email);const g=localStorage.getItem("username");localStorage.setItem("user_id",i.user_id),localStorage.setItem("user_status",i.user_status),b(`/account/${i.user_status}/${g}`)}};return a(_,{children:[a(L,{children:[e("title",{children:`${n}`}),e("meta",{name:"description",content:"Create, login or recover your account at UniqueShopGB."}),e("link",{rel:"canonical",href:`/account/${y.accessType}`})]}),I?e(P,{size:"25rem",sx:{margin:"auto"}}):e(k,{height:"auto",width:1,children:e("form",{noValidate:!0,autoComplete:"off",onSubmit:v,children:e(t,{container:!0,justifyContent:"center",alignItems:"center",height:"100vh",width:.8,margin:"0 auto",children:a(t,{item:!0,container:!0,flexDirection:"column",justifyContent:"start",width:.5,height:1,children:[a(t,{item:!0,container:!0,flexDirection:"column",justifyContent:"space-evenly",alignItems:"center",height:.3,children:[e(t,{item:!0,fontSize:44,children:"UniqueShopGB"}),e(t,{item:!0,fontSize:30,fontWeight:800,children:n})]}),a(t,{item:!0,container:!0,flexDirection:"column",alignItems:"center",justifyContent:"space-evenly",padding:"1rem",height:.6,children:[n==="Sign Up"&&a(t,{item:!0,container:!0,flexDirection:"column",justifyContent:"space-evenly",alignItems:"start",width:.8,gap:2,children:[e(t,{item:!0,children:"Name"}),e(t,{item:!0,width:1,children:e(f,{fullWidth:!0,id:"outlined-basic",label:"Name",variant:"outlined",size:"big",onChange:s=>{m(s.target.value)},required:!0,inputProps:{"aria-label":"Name"}})})]}),a(t,{item:!0,container:!0,flexDirection:"column",justifyContent:"space-evenly",alignItems:"start",width:.8,gap:2,children:[e(t,{item:!0,children:"Email Address"}),e(t,{item:!0,width:1,children:e(f,{fullWidth:!0,id:"outlined-basic",label:"Email",variant:"outlined",size:"big",inputProps:{"aria-label":"Email"},onChange:s=>{l(s.target.value)},required:!0})})]}),["Login","Sign Up"].includes(n)&&a(t,{item:!0,container:!0,flexDirection:"column",justifyContent:"space-evenly",alignItems:"start",width:.8,gap:2,children:[e(t,{item:!0,textAlign:"start",children:"Password"}),e(t,{item:!0,width:1,children:e(f,{fullWidth:!0,id:"outlined-basic",label:"Password",variant:"outlined",size:"big",type:"password",inputProps:{"aria-label":"Password"},onChange:s=>{d(s.target.value)},required:!0})})]}),C&&e("div",{children:"Information entered is incorrect"}),e(t,{item:!0,width:.5,textAlign:"center",children:e(E,{variant:"outlined",size:"big",fullWidth:!0,onClick:v,"aria-label":n,children:n})}),n==="Login"?a(t,{item:!0,container:!0,justifyContent:"space-evenly",children:[e(t,{item:!0,component:p,to:"/account/sign_up","aria-label":"Link to sign up to shop",children:"Don't have account?"}),e(t,{item:!0,component:p,to:"/account/recover","aria-label":"Link to recover account by email",children:"Forgot password?"})]}):e(t,{item:!0,component:p,to:"/account/login","aria-label":"Link to Log in to shop",children:"Have an account?"})]})]})})})})]})}function W(r){return r.split("_").map(l=>l[0].toUpperCase()+l.substring(1)).join(" ")}function A(){const[r,m]=c.useState(""),[o,l]=c.useState(""),[u,d]=c.useState(""),[I,h]=c.useState(!1),[C,S]=c.useState(!1),b=x(),y=D(),n=W(y.accessType),v=async s=>{if(s.preventDefault(),n==="Login"){const i=await w(h,S,o,u);if(i!=="error"){i.user_status==="member"?localStorage.setItem("username",i.name):i.user_status==="staff"&&localStorage.setItem("username",i.email);const g=localStorage.getItem("username");localStorage.setItem("user_id",i.user_id),localStorage.setItem("user_status",i.user_status),b(`/account/${i.user_status}/${g}`)}}else if(n==="Sign Up"){await $(h,r,o,u);const i=await w(h,S,o,u);i.user_status==="member"?localStorage.setItem("username",i.name):i.user_status==="staff"&&localStorage.setItem("username",i.email);const g=localStorage.getItem("username");localStorage.setItem("user_id",i.user_id),localStorage.setItem("user_status",i.user_status),b(`/account/${i.user_status}/${g}`)}};return a(_,{children:[a(L,{children:[e("title",{children:`${n}`}),e("meta",{name:"description",content:"Create, login or recover your account at UniqueShopGB."}),e("link",{rel:"canonical",href:`/account/${y.accessType}`})]}),I?e(P,{size:"25rem",sx:{margin:"auto"}}):e(k,{height:"auto",width:1,children:e("form",{noValidate:!0,autoComplete:"off",onSubmit:v,children:e(t,{container:!0,justifyContent:"center",alignItems:"center",height:"100vh",width:.8,margin:"0 auto",children:a(t,{item:!0,container:!0,flexDirection:"column",justifyContent:"start",height:1,children:[a(t,{item:!0,container:!0,flexDirection:"column",justifyContent:"space-between",alignItems:"center",height:.2,children:[e(t,{item:!0,fontSize:40,children:"UniqueShopGB"}),e(t,{item:!0,fontSize:30,fontWeight:800,children:n})]}),a(t,{item:!0,container:!0,flexDirection:"column",alignItems:"center",justifyContent:"space-evenly",padding:"1rem",height:.8,children:[n==="Sign Up"&&a(t,{item:!0,container:!0,flexDirection:"column",justifyContent:"space-evenly",alignItems:"start",width:.8,gap:2,children:[e(t,{item:!0,children:"Name"}),e(t,{item:!0,width:1,children:e(f,{fullWidth:!0,id:"outlined-basic",label:"Name",variant:"outlined",size:"big",type:"password",onChange:s=>{m(s.target.value)},required:!0,inputProps:{"aria-label":"Name"}})})]}),a(t,{item:!0,container:!0,flexDirection:"column",justifyContent:"space-evenly",alignItems:"start",width:.8,gap:2,children:[e(t,{item:!0,children:"Email Address"}),e(t,{item:!0,width:1,children:e(f,{fullWidth:!0,id:"outlined-basic",label:"Email",variant:"outlined",size:"big",inputProps:{"aria-label":"Email"},onChange:s=>{l(s.target.value)},required:!0})})]}),["Login","Sign Up"].includes(n)&&a(t,{item:!0,container:!0,flexDirection:"column",justifyContent:"space-evenly",alignItems:"start",width:.8,gap:2,children:[e(t,{item:!0,textAlign:"start",children:"Password"}),e(t,{item:!0,width:1,children:e(f,{fullWidth:!0,id:"outlined-basic",label:"Password",variant:"outlined",size:"big",inputProps:{"aria-label":"Password"},onChange:s=>{d(s.target.value)},required:!0})})]}),C&&e("div",{children:"Information entered is incorrect"}),e(t,{item:!0,width:.5,marginTop:"1rem",marginBottom:"1rem",children:e(E,{variant:"outlined",size:"big",fullWidth:!0,onClick:v,"aria-label":n,children:n})}),n==="Login"?a(t,{item:!0,container:!0,justifyContent:"space-evenly",children:[e(t,{item:!0,component:p,to:"/account/sign_up","aria-label":"Link to sign up to shop",children:"Don't have account?"}),e(t,{item:!0,component:p,to:"/account/recover","aria-label":"Link to recover account by email",children:"Forgot password?"})]}):e(t,{item:!0,component:p,to:"/account/login","aria-label":"Link to Log in to shop",children:"Have an account?"})]})]})})})})]})}function T(r){return r.split("_").map(l=>l[0].toUpperCase()+l.substring(1)).join(" ")}function q(){const[r,m]=c.useState(""),[o,l]=c.useState(""),[u,d]=c.useState(""),[I,h]=c.useState(!1),[C,S]=c.useState(!1),b=x(),y=D(),n=T(y.accessType),v=async s=>{if(s.preventDefault(),n==="Login"){const i=await w(h,S,o,u);if(i!=="error"){i.user_status==="member"?localStorage.setItem("username",i.name):i.user_status==="staff"&&localStorage.setItem("username",i.email);const g=localStorage.getItem("username");localStorage.setItem("user_id",i.user_id),localStorage.setItem("user_status",i.user_status),b(`/account/${i.user_status}/${g}`)}}else if(n==="Sign Up"){await $(h,r,o,u);const i=await w(h,S,o,u);i.user_status==="member"?localStorage.setItem("username",i.name):i.user_status==="staff"&&localStorage.setItem("username",i.email);const g=localStorage.getItem("username");localStorage.setItem("user_id",i.user_id),localStorage.setItem("user_status",i.user_status),b(`/account/${i.user_status}/${g}`)}};return a(_,{children:[a(L,{children:[e("title",{children:`${n}`}),e("meta",{name:"description",content:"Create, login or recover your account at UniqueShopGB."}),e("link",{rel:"canonical",href:`/account/${y.accessType}`})]}),I?e(P,{size:"25rem",sx:{margin:"auto"}}):e(k,{height:"auto",width:1,children:e("form",{noValidate:!0,autoComplete:"off",onSubmit:v,children:e(t,{container:!0,justifyContent:"center",alignItems:"center",height:"100vh",width:.8,margin:"0 auto",children:a(t,{item:!0,container:!0,flexDirection:"column",justifyContent:"space-evenly",height:1,children:[a(t,{item:!0,container:!0,flexDirection:"column",justifyContent:"space-between",alignItems:"center",height:.2,children:[e(t,{item:!0,fontSize:30,children:"UniqueShopGB"}),e(t,{item:!0,fontSize:28,fontWeight:800,children:n})]}),a(t,{item:!0,container:!0,flexDirection:"column",alignItems:"center",justifyContent:"space-evenly",padding:"1rem",height:.8,children:[n==="Sign Up"&&a(t,{item:!0,container:!0,flexDirection:"column",justifyContent:"space-evenly",alignItems:"start",width:.8,gap:2,children:[e(t,{item:!0,children:"Name"}),e(t,{item:!0,children:e(f,{fullWidth:!0,id:"outlined-basic",label:"Name",variant:"outlined",size:"big",onChange:s=>{m(s.target.value)},required:!0,inputProps:{"aria-label":"Name"}})})]}),a(t,{item:!0,container:!0,flexDirection:"column",justifyContent:"space-evenly",alignItems:"start",width:.8,gap:2,children:[e(t,{item:!0,children:"Email Address"}),e(t,{item:!0,width:1,children:e(f,{fullWidth:!0,id:"outlined-basic",label:"Email",variant:"outlined",size:"big",inputProps:{"aria-label":"Email"},onChange:s=>{l(s.target.value)},required:!0})})]}),["Login","Sign Up"].includes(n)&&a(t,{item:!0,container:!0,flexDirection:"column",justifyContent:"space-evenly",alignItems:"start",width:.8,gap:2,children:[e(t,{item:!0,textAlign:"start",children:"Password"}),e(t,{item:!0,width:1,children:e(f,{fullWidth:!0,id:"outlined-basic",label:"Password",variant:"outlined",size:"big",type:"password",inputProps:{"aria-label":"Password"},onChange:s=>{d(s.target.value)},required:!0})})]}),C&&e("div",{children:"Information entered is incorrect"}),e(t,{item:!0,width:.5,marginTop:"1rem",marginBottom:"1rem",children:e(E,{variant:"outlined",size:"big",fullWidth:!0,onClick:v,"aria-label":n,children:n})}),n==="Login"?a(t,{item:!0,container:!0,justifyContent:"space-evenly",children:[e(t,{item:!0,component:p,to:"/account/sign_up","aria-label":"Link to sign up to shop",children:"Don't have account?"}),e(t,{item:!0,component:p,to:"/account/recover","aria-label":"Link to recover account by email",children:"Forgot password?"})]}):e(t,{item:!0,component:p,to:"/account/login","aria-label":"Link to Log in to shop",children:"Have an account?"})]})]})})})})]})}function O(){const r=z();return a(_,{children:[r.isDesktop&&e(U,{}),r.isTablet&&e(A,{}),r.isMobile&&e(q,{})]})}export{O as default};
