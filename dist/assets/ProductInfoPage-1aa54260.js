import{j as e,T as m,b as r,G as t,B as o,L as s,p as f,o as g,F as p,r as x,C,A as y,q as S,t as j,v as z}from"./index-3254f665.js";import{A as h}from"./AnimatedPopUpPage-9e6bf5b6.js";import"./motion-0ec328f3.js";function D(n){const i={height:"auto",display:"flex",justifyContent:"center",alignItems:"center"},c={fontSize:"20px"},l={fontSize:"30px"},a={fontSize:"24px"};return e(h,{children:e(m,{maxWidth:"lg",sx:i,children:r(t,{container:!0,justifyContent:"space-around",alignItems:"center",sx:c,padding:"2rem 0",children:[e(t,{item:!0,container:!0,xs:8,justifyContent:"center",alignItems:"center",children:e("img",{alt:`${n.product.name.toLowerCase()}`,src:n.product.image_url,title:`${n.product.name.toLowerCase()}`,height:"500px",width:"500px",style:{borderRadius:"50%"}})}),r(t,{item:!0,container:!0,xs:4,sx:i,justifyContent:"center",alignItems:"center",flexDirection:"column",gap:2,children:[r(t,{item:!0,sx:l,alignSelf:"start",children:["Handmade ",n.product.name.toLowerCase()]}),e(t,{item:!0,sx:a,alignSelf:"start",children:"Details"}),e(t,{item:!0,container:!0,justifyContent:"space-evenly",alignItems:"start",flexDirection:"column",gap:1.5,paddingLeft:"1rem",children:n.product.description_short.split("#").map((d,u)=>e(t,{item:!0,children:d},u))}),e(t,{item:!0,sx:a,alignSelf:"start",children:"Description"}),e(t,{item:!0,children:n.product.description_long}),e(t,{item:!0,children:`£${n.product.price}`}),r(t,{item:!0,container:!0,justifyContent:"space-evenly",gap:1.5,children:[e(t,{item:!0,children:e(o,{variant:"contained",size:"big",component:s,to:"/checkout",sx:{fontSize:"16px"},"data-cy":"Checkout",children:"Check Out"})}),e(t,{item:!0,children:e(o,{variant:"contained",size:"big",component:s,to:"/checkout",sx:{fontSize:"16px"},children:"Add Cart"})})]})]})]})})})}function I(n){const i={height:"auto",display:"flex",justifyContent:"center",alignItems:"center"},c={fontSize:"1rem"},l={fontSize:"26px"},a={fontSize:"20px"};return e(h,{children:e(m,{maxWidth:"lg",sx:i,children:r(t,{container:!0,justifyContent:"space-around",alignItems:"center",sx:c,padding:"2rem 0",children:[e(t,{item:!0,container:!0,xs:8,justifyContent:"center",alignItems:"center",children:e("img",{alt:`${n.product.name.toLowerCase()}`,src:n.product.image_url,title:`${n.product.name.toLowerCase()}`,height:"350px",width:"350px",style:{borderRadius:"50%"}})}),r(t,{item:!0,container:!0,xs:4,sx:i,justifyContent:"center",alignItems:"center",flexDirection:"column",gap:2,children:[r(t,{item:!0,sx:l,alignSelf:"start",children:["Handmade ",n.product.name.toLowerCase()]}),e(t,{item:!0,sx:a,alignSelf:"start",children:"Details"}),e(t,{item:!0,container:!0,justifyContent:"space-evenly",alignItems:"start",flexDirection:"column",gap:1.5,paddingLeft:"1rem",children:n.product.description_short.split("#").map((d,u)=>e(t,{item:!0,children:d},u))}),e(t,{item:!0,sx:a,alignSelf:"start",children:"Description"}),e(t,{item:!0,children:n.product.description_long}),e(t,{item:!0,children:`£${n.product.price}`}),r(t,{item:!0,container:!0,justifyContent:"space-evenly",gap:1.5,children:[e(t,{item:!0,children:e(o,{size:"small",variant:"contained",component:s,to:"/checkout",sx:{fontSize:"14px"},children:"Check Out"})}),e(t,{item:!0,children:e(o,{size:"small",variant:"contained",component:s,to:"/checkout",sx:{fontSize:"14px"},children:"Add Cart"})})]})]})]})})})}function b(n){const i={height:"auto",display:"flex",justifyContent:"center",alignItems:"center"},c={fontSize:"1rem"},l={fontSize:"26px",fontWeight:"800"},a={fontSize:"20px"};return e(h,{children:e(m,{maxWidth:"lg",sx:i,children:e(t,{container:!0,flexDirection:"column",justifyContent:"space-around",alignItems:"center",sx:c,padding:"2rem 0",children:r(t,{container:!0,children:[r(t,{item:!0,container:!0,flexDirection:"column",gap:2,justifyContent:"center",alignItems:"center",children:[r(t,{item:!0,sx:l,children:["Handmade ",n.product.name.toLowerCase()]}),e("img",{alt:`${n.product.name.toLowerCase()}`,src:n.product.image_url,title:`${n.product.name.toLowerCase()}`,height:"200px",width:"200px",style:{borderRadius:"50%"}})]}),r(t,{item:!0,container:!0,sx:i,justifyContent:"center",alignItems:"center",flexDirection:"column",gap:2,children:[e(t,{item:!0,sx:a,alignSelf:"start",children:"Details"}),e(t,{item:!0,container:!0,justifyContent:"space-evenly",alignItems:"start",flexDirection:"column",gap:1.5,paddingLeft:"1rem",children:n.product.description_short.split("#").map((d,u)=>e(t,{item:!0,children:d},u))}),e(t,{item:!0,sx:a,alignSelf:"start",children:"Description"}),e(t,{item:!0,children:n.product.description_long}),e(t,{item:!0,children:`£${n.product.price}`}),r(t,{item:!0,container:!0,justifyContent:"space-evenly",gap:1.5,children:[e(t,{item:!0,children:e(o,{variant:"contained",size:"big",component:s,to:"/checkout",sx:{fontSize:"16px"},children:"Check Out"})}),e(t,{item:!0,children:e(o,{variant:"contained",size:"big",component:s,to:"/checkout",sx:{fontSize:"16px"},children:"Add Cart"})})]})]})]})})})})}function $(){const{productDetail:n}=f(),i=g();return e(p,{children:e(x.Suspense,{fallback:e(C,{size:"25rem",sx:{margin:"auto"}}),children:e(y,{resolve:n,children:c=>r(p,{children:[i.isDesktop&&e(D,{product:c}),i.isTablet&&e(I,{product:c}),i.isMobile&&e(b,{product:c})]})})})})}async function w(n){const i=await fetch(`${j}/api/shop/products/${n}`,{method:"GET",headers:{"Content-type":"application/json"}});if(i.ok)return await i.json();throw z({message:"Could not fetch products"},{status:i.status})}function _({params:n,request:i}){const c=Number(n.productId.slice(n.productId.lastIndexOf("-")+1,n.productId.length));return S({productDetail:w(c)})}export{$ as default,_ as loader};
