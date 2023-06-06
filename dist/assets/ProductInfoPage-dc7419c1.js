import{j as e,R as h,b as r,G as t,d as p,B as a,L as s,p as g,o as y,F as x,r as C,A as S,q as j,t as z,v as D}from"./index-6553f848.js";import{A as f}from"./AnimatedPopUpPage-009ef1b6.js";import{C as I}from"./CircularProgress-be6f6db9.js";import"./motion-0ca90476.js";function b(n){const i={height:"auto",display:"flex",justifyContent:"center",alignItems:"center"},c={fontSize:"20px"},l={borderRadius:"50%",height:"500px",width:"500px"},d={fontSize:"30px"},o={fontSize:"24px"};return e(f,{children:e(h,{maxWidth:"lg",sx:i,children:r(t,{container:!0,justifyContent:"space-around",alignItems:"center",sx:c,padding:"2rem 0",children:[e(t,{item:!0,container:!0,xs:8,justifyContent:"center",alignItems:"center",children:e(p,{component:"img",alt:`${n.product.name.toLowerCase()}`,src:n.product.image_url,sx:l})}),r(t,{item:!0,container:!0,xs:4,sx:i,justifyContent:"center",alignItems:"center",flexDirection:"column",gap:2,children:[r(t,{item:!0,sx:d,alignSelf:"start",children:["Handmade ",n.product.name.toLowerCase()]}),e(t,{item:!0,sx:o,alignSelf:"start",children:"Details"}),e(t,{item:!0,container:!0,justifyContent:"space-evenly",alignItems:"start",flexDirection:"column",gap:1.5,paddingLeft:"1rem",children:n.product.description_short.split("#").map((u,m)=>e(t,{item:!0,children:u},m))}),e(t,{item:!0,sx:o,alignSelf:"start",children:"Description"}),e(t,{item:!0,children:n.product.description_long}),e(t,{item:!0,children:`£${n.product.price}`}),r(t,{item:!0,container:!0,justifyContent:"space-evenly",gap:1.5,children:[e(t,{item:!0,children:e(a,{variant:"contained",size:"big",component:s,to:"/checkout",sx:{fontSize:"16px"},"data-cy":"Checkout",children:"Check Out"})}),e(t,{item:!0,children:e(a,{variant:"contained",size:"big",component:s,to:"/checkout",sx:{fontSize:"16px"},children:"Add Cart"})})]})]})]})})})}function k(n){const i={height:"auto",display:"flex",justifyContent:"center",alignItems:"center"},c={fontSize:"1rem"},l={borderRadius:"50%",height:"350px",width:"350px"},d={fontSize:"26px"},o={fontSize:"20px"};return e(f,{children:e(h,{maxWidth:"lg",sx:i,children:r(t,{container:!0,justifyContent:"space-around",alignItems:"center",sx:c,padding:"2rem 0",children:[e(t,{item:!0,container:!0,xs:8,justifyContent:"center",alignItems:"center",children:e(p,{component:"img",alt:`${n.product.name.toLowerCase()}`,src:n.product.image_url,sx:l})}),r(t,{item:!0,container:!0,xs:4,sx:i,justifyContent:"center",alignItems:"center",flexDirection:"column",gap:2,children:[r(t,{item:!0,sx:d,alignSelf:"start",children:["Handmade ",n.product.name.toLowerCase()]}),e(t,{item:!0,sx:o,alignSelf:"start",children:"Details"}),e(t,{item:!0,container:!0,justifyContent:"space-evenly",alignItems:"start",flexDirection:"column",gap:1.5,paddingLeft:"1rem",children:n.product.description_short.split("#").map((u,m)=>e(t,{item:!0,children:u},m))}),e(t,{item:!0,sx:o,alignSelf:"start",children:"Description"}),e(t,{item:!0,children:n.product.description_long}),e(t,{item:!0,children:`£${n.product.price}`}),r(t,{item:!0,container:!0,justifyContent:"space-evenly",gap:1.5,children:[e(t,{item:!0,children:e(a,{size:"small",variant:"contained",component:s,to:"/checkout",sx:{fontSize:"14px"},children:"Check Out"})}),e(t,{item:!0,children:e(a,{size:"small",variant:"contained",component:s,to:"/checkout",sx:{fontSize:"14px"},children:"Add Cart"})})]})]})]})})})}function v(n){const i={height:"auto",display:"flex",justifyContent:"center",alignItems:"center"},c={fontSize:"1rem"},l={borderRadius:"50%",height:"200px",width:"200px"},d={fontSize:"26px",fontWeight:"800"},o={fontSize:"20px"};return e(f,{children:e(h,{maxWidth:"lg",sx:i,children:e(t,{container:!0,flexDirection:"column",justifyContent:"space-around",alignItems:"center",sx:c,padding:"2rem 0",children:r(t,{container:!0,children:[r(t,{item:!0,container:!0,flexDirection:"column",gap:2,justifyContent:"center",alignItems:"center",children:[r(t,{item:!0,sx:d,children:["Handmade ",n.product.name.toLowerCase()]}),e(p,{component:"img",alt:`${n.product.name.toLowerCase()}`,src:n.product.image_url,sx:l})]}),r(t,{item:!0,container:!0,sx:i,justifyContent:"center",alignItems:"center",flexDirection:"column",gap:2,children:[e(t,{item:!0,sx:o,alignSelf:"start",children:"Details"}),e(t,{item:!0,container:!0,justifyContent:"space-evenly",alignItems:"start",flexDirection:"column",gap:1.5,paddingLeft:"1rem",children:n.product.description_short.split("#").map((u,m)=>e(t,{item:!0,children:u},m))}),e(t,{item:!0,sx:o,alignSelf:"start",children:"Description"}),e(t,{item:!0,children:n.product.description_long}),e(t,{item:!0,children:`£${n.product.price}`}),r(t,{item:!0,container:!0,justifyContent:"space-evenly",gap:1.5,children:[e(t,{item:!0,children:e(a,{variant:"contained",size:"big",component:s,to:"/checkout",sx:{fontSize:"16px"},children:"Check Out"})}),e(t,{item:!0,children:e(a,{variant:"contained",size:"big",component:s,to:"/checkout",sx:{fontSize:"16px"},children:"Add Cart"})})]})]})]})})})})}function P(){const{productDetail:n}=g(),i=y();return e(x,{children:e(C.Suspense,{fallback:e(I,{size:"25rem",sx:{margin:"auto"}}),children:e(S,{resolve:n,children:c=>r(x,{children:[i.isDesktop&&e(b,{product:c}),i.isTablet&&e(k,{product:c}),i.isMobile&&e(v,{product:c})]})})})})}async function w(n){const i=await fetch(`${z}/api/shop/products/${n}`,{method:"GET",headers:{"Content-type":"application/json"}});if(i.ok)return await i.json();throw D({message:"Could not fetch products"},{status:i.status})}function G({params:n,request:i}){const c=Number(n.productId.slice(n.productId.lastIndexOf("-")+1,n.productId.length));return j({productDetail:w(c)})}export{P as default,G as loader};
