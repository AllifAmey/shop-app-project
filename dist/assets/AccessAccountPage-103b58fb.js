import{t as j,r as c,au as x,av as D,j as e,F as _,C as L,d as P,G as t,b as s,B as E,L as p,o as z}from"./index-3254f665.js";import{T as f}from"./TextField-75838a5d.js";import"./useFormControl-7f7c80a1.js";async function y(n,m,o,l){n(!0);let u=await fetch(`${j}/api/user/token/`,{method:"POST",body:JSON.stringify({email:o,password:l}),headers:{"Content-type":"application/json"}});if(u.ok){let d=await u.json();return localStorage.setItem("Token",d.token),localStorage.setItem("isLogged","LOGGED_IN"),u=await fetch(`${j}/api/user/me/`,{method:"GET",headers:{"Content-type":"application/json",Authorization:`Token ${d.token}`}}),u.ok?(d=await u.json(),n(!1),d):(n(!1),"error")}else return n(!1),m(!0),"error"}async function k(n,m,o,l){n(!0);const d=await(await fetch(`${j}/api/user/create/`,{method:"POST",body:JSON.stringify({name:m,email:o,password:l}),headers:{"Content-type":"application/json"}})).json();console.log(d),n(!1)}function N(n){return n.split("_").map(l=>l[0].toUpperCase()+l.substring(1)).join(" ")}function W(){const[n,m]=c.useState(""),[o,l]=c.useState(""),[u,d]=c.useState(""),[v,h]=c.useState(!1),[I,b]=c.useState(!1),S=x(),C=D(),a=N(C.accessType),w=async r=>{if(r.preventDefault(),a==="Login"){const i=await y(h,b,o,u);if(i!=="error"){i.user_status==="member"?localStorage.setItem("username",i.name):i.user_status==="staff"&&localStorage.setItem("username",i.email);const g=localStorage.getItem("username");localStorage.setItem("user_id",i.user_id),localStorage.setItem("user_status",i.user_status),S(`/account/${i.user_status}/${g}`)}}else if(a==="Sign Up"){await k(h,n,o,u);const i=await y(h,b,o,u);i.user_status==="member"?localStorage.setItem("username",i.name):i.user_status==="staff"&&localStorage.setItem("username",i.email);const g=localStorage.getItem("username");localStorage.setItem("user_id",i.user_id),localStorage.setItem("user_status",i.user_status),S(`/account/${i.user_status}/${g}`)}};return e(_,{children:v?e(L,{size:"25rem",sx:{margin:"auto"}}):e(P,{height:"auto",width:1,children:e("form",{noValidate:!0,autoComplete:"off",onSubmit:w,children:e(t,{container:!0,justifyContent:"center",alignItems:"center",height:"100vh",width:.8,margin:"0 auto",children:s(t,{item:!0,container:!0,flexDirection:"column",justifyContent:"start",width:.5,height:1,children:[s(t,{item:!0,container:!0,flexDirection:"column",justifyContent:"space-evenly",alignItems:"center",height:.3,children:[e(t,{item:!0,fontSize:44,children:"SahrahJewellery"}),e(t,{item:!0,fontSize:30,fontWeight:800,children:a})]}),s(t,{item:!0,container:!0,flexDirection:"column",alignItems:"center",justifyContent:"space-evenly",padding:"1rem",height:.6,children:[a==="Sign Up"&&s(t,{item:!0,container:!0,flexDirection:"column",justifyContent:"space-evenly",alignItems:"start",width:.8,gap:2,children:[e(t,{item:!0,children:"Name"}),e(t,{item:!0,width:1,children:e(f,{fullWidth:!0,id:"outlined-basic",label:"Name",variant:"outlined",size:"big",onChange:r=>{m(r.target.value)},required:!0,inputProps:{"aria-label":"Name"}})})]}),s(t,{item:!0,container:!0,flexDirection:"column",justifyContent:"space-evenly",alignItems:"start",width:.8,gap:2,children:[e(t,{item:!0,children:"Email Address"}),e(t,{item:!0,width:1,children:e(f,{fullWidth:!0,id:"outlined-basic",label:"Email",variant:"outlined",size:"big",inputProps:{"aria-label":"Email"},onChange:r=>{l(r.target.value)},required:!0})})]}),["Login","Sign Up"].includes(a)&&s(t,{item:!0,container:!0,flexDirection:"column",justifyContent:"space-evenly",alignItems:"start",width:.8,gap:2,children:[e(t,{item:!0,textAlign:"start",children:"Password"}),e(t,{item:!0,width:1,children:e(f,{fullWidth:!0,id:"outlined-basic",label:"Password",variant:"outlined",size:"big",type:"password",inputProps:{"aria-label":"Password"},onChange:r=>{d(r.target.value)},required:!0})})]}),I&&e("div",{children:"Information entered is incorrect"}),e(t,{item:!0,width:.5,textAlign:"center",children:e(E,{variant:"outlined",size:"big",fullWidth:!0,onClick:w,"aria-label":a,children:a})}),a==="Login"?s(t,{item:!0,container:!0,justifyContent:"space-evenly",children:[e(t,{item:!0,component:p,to:"/account/sign_up","aria-label":"Link to sign up to shop",children:"Don't have account?"}),e(t,{item:!0,component:p,to:"/account/recover","aria-label":"Link to recover account by email",children:"Forgot password?"})]}):e(t,{item:!0,component:p,to:"/account/login","aria-label":"Link to Log in to shop",children:"Have an account?"})]})]})})})})})}function $(n){return n.split("_").map(l=>l[0].toUpperCase()+l.substring(1)).join(" ")}function A(){const[n,m]=c.useState(""),[o,l]=c.useState(""),[u,d]=c.useState(""),[v,h]=c.useState(!1),[I,b]=c.useState(!1),S=x(),C=D(),a=$(C.accessType),w=async r=>{if(r.preventDefault(),a==="Login"){const i=await y(h,b,o,u);if(i!=="error"){i.user_status==="member"?localStorage.setItem("username",i.name):i.user_status==="staff"&&localStorage.setItem("username",i.email);const g=localStorage.getItem("username");localStorage.setItem("user_id",i.user_id),localStorage.setItem("user_status",i.user_status),S(`/account/${i.user_status}/${g}`)}}else if(a==="Sign Up"){await k(h,n,o,u);const i=await y(h,b,o,u);i.user_status==="member"?localStorage.setItem("username",i.name):i.user_status==="staff"&&localStorage.setItem("username",i.email);const g=localStorage.getItem("username");localStorage.setItem("user_id",i.user_id),localStorage.setItem("user_status",i.user_status),S(`/account/${i.user_status}/${g}`)}};return e(_,{children:v?e(L,{size:"25rem",sx:{margin:"auto"}}):e(P,{height:"auto",width:1,children:e("form",{noValidate:!0,autoComplete:"off",onSubmit:w,children:e(t,{container:!0,justifyContent:"center",alignItems:"center",height:"100vh",width:.8,margin:"0 auto",children:s(t,{item:!0,container:!0,flexDirection:"column",justifyContent:"start",height:1,children:[s(t,{item:!0,container:!0,flexDirection:"column",justifyContent:"space-between",alignItems:"center",height:.2,children:[e(t,{item:!0,fontSize:40,children:"SahrahJewellery"}),e(t,{item:!0,fontSize:30,fontWeight:800,children:a})]}),s(t,{item:!0,container:!0,flexDirection:"column",alignItems:"center",justifyContent:"space-evenly",padding:"1rem",height:.8,children:[a==="Sign Up"&&s(t,{item:!0,container:!0,flexDirection:"column",justifyContent:"space-evenly",alignItems:"start",width:.8,gap:2,children:[e(t,{item:!0,children:"Name"}),e(t,{item:!0,width:1,children:e(f,{fullWidth:!0,id:"outlined-basic",label:"Name",variant:"outlined",size:"big",type:"password",onChange:r=>{m(r.target.value)},required:!0,inputProps:{"aria-label":"Name"}})})]}),s(t,{item:!0,container:!0,flexDirection:"column",justifyContent:"space-evenly",alignItems:"start",width:.8,gap:2,children:[e(t,{item:!0,children:"Email Address"}),e(t,{item:!0,width:1,children:e(f,{fullWidth:!0,id:"outlined-basic",label:"Email",variant:"outlined",size:"big",inputProps:{"aria-label":"Email"},onChange:r=>{l(r.target.value)},required:!0})})]}),["Login","Sign Up"].includes(a)&&s(t,{item:!0,container:!0,flexDirection:"column",justifyContent:"space-evenly",alignItems:"start",width:.8,gap:2,children:[e(t,{item:!0,textAlign:"start",children:"Password"}),e(t,{item:!0,width:1,children:e(f,{fullWidth:!0,id:"outlined-basic",label:"Password",variant:"outlined",size:"big",inputProps:{"aria-label":"Password"},onChange:r=>{d(r.target.value)},required:!0})})]}),I&&e("div",{children:"Information entered is incorrect"}),e(t,{item:!0,width:.5,marginTop:"1rem",marginBottom:"1rem",children:e(E,{variant:"outlined",size:"big",fullWidth:!0,onClick:w,"aria-label":a,children:a})}),a==="Login"?s(t,{item:!0,container:!0,justifyContent:"space-evenly",children:[e(t,{item:!0,component:p,to:"/account/sign_up","aria-label":"Link to sign up to shop",children:"Don't have account?"}),e(t,{item:!0,component:p,to:"/account/recover","aria-label":"Link to recover account by email",children:"Forgot password?"})]}):e(t,{item:!0,component:p,to:"/account/login","aria-label":"Link to Log in to shop",children:"Have an account?"})]})]})})})})})}function T(n){return n.split("_").map(l=>l[0].toUpperCase()+l.substring(1)).join(" ")}function U(){const[n,m]=c.useState(""),[o,l]=c.useState(""),[u,d]=c.useState(""),[v,h]=c.useState(!1),[I,b]=c.useState(!1),S=x(),C=D(),a=T(C.accessType),w=async r=>{if(r.preventDefault(),a==="Login"){const i=await y(h,b,o,u);if(i!=="error"){i.user_status==="member"?localStorage.setItem("username",i.name):i.user_status==="staff"&&localStorage.setItem("username",i.email);const g=localStorage.getItem("username");localStorage.setItem("user_id",i.user_id),localStorage.setItem("user_status",i.user_status),S(`/account/${i.user_status}/${g}`)}}else if(a==="Sign Up"){await k(h,n,o,u);const i=await y(h,b,o,u);i.user_status==="member"?localStorage.setItem("username",i.name):i.user_status==="staff"&&localStorage.setItem("username",i.email);const g=localStorage.getItem("username");localStorage.setItem("user_id",i.user_id),localStorage.setItem("user_status",i.user_status),S(`/account/${i.user_status}/${g}`)}};return e(_,{children:v?e(L,{size:"25rem",sx:{margin:"auto"}}):e(P,{height:"auto",width:1,children:e("form",{noValidate:!0,autoComplete:"off",onSubmit:w,children:e(t,{container:!0,justifyContent:"center",alignItems:"center",height:"100vh",width:.8,margin:"0 auto",children:s(t,{item:!0,container:!0,flexDirection:"column",justifyContent:"space-evenly",height:1,children:[s(t,{item:!0,container:!0,flexDirection:"column",justifyContent:"space-between",alignItems:"center",height:.2,children:[e(t,{item:!0,fontSize:30,children:"SahrahJewellery"}),e(t,{item:!0,fontSize:28,fontWeight:800,children:a})]}),s(t,{item:!0,container:!0,flexDirection:"column",alignItems:"center",justifyContent:"space-evenly",padding:"1rem",height:.8,children:[a==="Sign Up"&&s(t,{item:!0,container:!0,flexDirection:"column",justifyContent:"space-evenly",alignItems:"start",width:.8,gap:2,children:[e(t,{item:!0,children:"Name"}),e(t,{item:!0,children:e(f,{fullWidth:!0,id:"outlined-basic",label:"Name",variant:"outlined",size:"big",onChange:r=>{m(r.target.value)},required:!0,inputProps:{"aria-label":"Name"}})})]}),s(t,{item:!0,container:!0,flexDirection:"column",justifyContent:"space-evenly",alignItems:"start",width:.8,gap:2,children:[e(t,{item:!0,children:"Email Address"}),e(t,{item:!0,width:1,children:e(f,{fullWidth:!0,id:"outlined-basic",label:"Email",variant:"outlined",size:"big",inputProps:{"aria-label":"Email"},onChange:r=>{l(r.target.value)},required:!0})})]}),["Login","Sign Up"].includes(a)&&s(t,{item:!0,container:!0,flexDirection:"column",justifyContent:"space-evenly",alignItems:"start",width:.8,gap:2,children:[e(t,{item:!0,textAlign:"start",children:"Password"}),e(t,{item:!0,width:1,children:e(f,{fullWidth:!0,id:"outlined-basic",label:"Password",variant:"outlined",size:"big",type:"password",inputProps:{"aria-label":"Password"},onChange:r=>{d(r.target.value)},required:!0})})]}),I&&e("div",{children:"Information entered is incorrect"}),e(t,{item:!0,width:.5,marginTop:"1rem",marginBottom:"1rem",children:e(E,{variant:"outlined",size:"big",fullWidth:!0,onClick:w,"aria-label":a,children:a})}),a==="Login"?s(t,{item:!0,container:!0,justifyContent:"space-evenly",children:[e(t,{item:!0,component:p,to:"/account/sign_up","aria-label":"Link to sign up to shop",children:"Don't have account?"}),e(t,{item:!0,component:p,to:"/account/recover","aria-label":"Link to recover account by email",children:"Forgot password?"})]}):e(t,{item:!0,component:p,to:"/account/login","aria-label":"Link to Log in to shop",children:"Have an account?"})]})]})})})})})}function B(){const n=z();return s(_,{children:[n.isDesktop&&e(W,{}),n.isTablet&&e(A,{}),n.isMobile&&e(U,{})]})}export{B as default};
