import{g as k,f as I,k as R,r as s,h as M,_ as $,i as C,j as t,l as P,m as z,p as G,b as i,K as T,M as O,N as q,d as H,F as b,B as _,D as U,G as n,w as K,an as Q,x as S,z as N,J,L as Y}from"./index-28587765.js";import{A as X}from"./ag-theme-material-d1e82d77.js";import{g as Z}from"./OrderAPI-41e43f3d.js";import{D as F}from"./DialogContent-5601f2f7.js";import{C as ee,D as te,a as ne}from"./DialogTitle-1b899517.js";import{C as oe}from"./CircularProgress-09804be8.js";import"./index-4d501b15.js";function ie(e){return k("MuiBottomNavigation",e)}I("MuiBottomNavigation",["root"]);const ae=["children","className","component","onChange","showLabels","value"],re=e=>{const{classes:o}=e;return z({root:["root"]},ie,o)},le=R("div",{name:"MuiBottomNavigation",slot:"Root",overridesResolver:(e,o)=>o.root})(({theme:e})=>({display:"flex",justifyContent:"center",height:56,backgroundColor:(e.vars||e).palette.background.paper})),se=s.forwardRef(function(o,r){const a=M({props:o,name:"MuiBottomNavigation"}),{children:c,className:u,component:d="div",onChange:p,showLabels:f=!1,value:g}=a,v=$(a,ae),h=C({},a,{component:d,showLabels:f}),x=re(h);return t(le,C({as:d,className:P(x.root,u),ref:r,ownerState:h},v,{children:s.Children.map(c,(m,l)=>{if(!s.isValidElement(m))return null;const y=m.props.value===void 0?l:m.props.value;return s.cloneElement(m,{selected:y===g,showLabel:m.props.showLabel!==void 0?m.props.showLabel:f,value:y,onChange:p})})}))}),ce=se;function de(e){return k("MuiBottomNavigationAction",e)}const ue=I("MuiBottomNavigationAction",["root","iconOnly","selected","label"]),V=ue,me=["className","icon","label","onChange","onClick","selected","showLabel","value"],he=e=>{const{classes:o,showLabel:r,selected:a}=e;return z({root:["root",!r&&!a&&"iconOnly",a&&"selected"],label:["label",!r&&!a&&"iconOnly",a&&"selected"]},de,o)},fe=R(G,{name:"MuiBottomNavigationAction",slot:"Root",overridesResolver:(e,o)=>{const{ownerState:r}=e;return[o.root,!r.showLabel&&!r.selected&&o.iconOnly]}})(({theme:e,ownerState:o})=>C({transition:e.transitions.create(["color","padding-top"],{duration:e.transitions.duration.short}),padding:"0px 12px",minWidth:80,maxWidth:168,color:(e.vars||e).palette.text.secondary,flexDirection:"column",flex:"1"},!o.showLabel&&!o.selected&&{paddingTop:14},!o.showLabel&&!o.selected&&!o.label&&{paddingTop:0},{[`&.${V.selected}`]:{color:(e.vars||e).palette.primary.main}})),ge=R("span",{name:"MuiBottomNavigationAction",slot:"Label",overridesResolver:(e,o)=>o.label})(({theme:e,ownerState:o})=>C({fontFamily:e.typography.fontFamily,fontSize:e.typography.pxToRem(12),opacity:1,transition:"font-size 0.2s, opacity 0.2s",transitionDelay:"0.1s"},!o.showLabel&&!o.selected&&{opacity:0,transitionDelay:"0s"},{[`&.${V.selected}`]:{fontSize:e.typography.pxToRem(14)}})),pe=s.forwardRef(function(o,r){const a=M({props:o,name:"MuiBottomNavigationAction"}),{className:c,icon:u,label:d,onChange:p,onClick:f,value:g}=a,v=$(a,me),h=a,x=he(h),m=l=>{p&&p(l,g),f&&f(l)};return i(fe,C({ref:r,className:P(x.root,c),focusRipple:!0,onClick:m,ownerState:h},v,{children:[u,t(ge,{className:x.label,ownerState:h,children:d})]}))}),j=pe;var A={},ve=O;Object.defineProperty(A,"__esModule",{value:!0});var E=A.default=void 0,xe=ve(T()),ye=q,Ce=(0,xe.default)((0,ye.jsx)("path",{d:"M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"}),"ShoppingCart");E=A.default=Ce;var B={},_e=O;Object.defineProperty(B,"__esModule",{value:!0});var W=B.default=void 0,be=_e(T()),De=q,Ne=(0,be.default)((0,De.jsx)("path",{d:"M20 8h-3V4H3c-1.1 0-2 .9-2 2v11h2c0 1.66 1.34 3 3 3s3-1.34 3-3h6c0 1.66 1.34 3 3 3s3-1.34 3-3h2v-5l-3-4zM6 18.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm13.5-9 1.96 2.5H17V9.5h2.5zm-1.5 9c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"}),"LocalShipping");W=B.default=Ne;function we(e){return t(H,{sx:{width:500},children:i(ce,{showLabels:!0,value:e.navValue,onChange:(o,r)=>{e.setNavValue(r)},children:[t(j,{label:"Cart",icon:t(E,{})}),t(j,{label:"Orders",icon:t(W,{})})]})})}function w(e){return e.reduce((r,a)=>{const c=Number((Number(a.product.price)*a.quantity).toFixed(2));return r+c},0)}function Re(e){const[o,r]=s.useState(!1),a=()=>{r(!0)},c=()=>{r(!1)},u=w(e.data.order);return i(b,{children:[t(_,{variant:"contained",onClick:()=>{a()},children:"Order details"}),t(U,{open:o,onClose:c,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",PaperProps:{sx:{height:"90%",maxWidth:"70%",display:"flex",flexDirection:"row",borderRadius:"20px",justifyContent:"center",alignItems:"center",background:"#e7f5ff"}},children:t(F,{sx:{height:"90%",lineHeight:"1.5rem",display:"flex",justifyContent:"center",alignItems:"center"},children:i(n,{container:!0,sx:{width:"100%"},children:[i(n,{container:!0,flexDirection:"Column",textAlign:"center",children:[t(n,{children:"AmeyShopUk"}),t(n,{children:"Thank you for ordering!"})]}),i(n,{container:!0,flexDirection:"column",width:"50%",marginBottom:"1rem",children:[t(n,{item:!0,children:"Personal Information"}),t(n,{item:!0,children:`${e.data.personal_info_used.first_name} ${e.data.personal_info_used.last_name}`}),t(n,{item:!0,children:e.data.personal_info_used.email}),t(n,{item:!0,children:e.data.personal_info_used.phone_number})]}),i(n,{container:!0,flexDirection:"column",width:"50%",textAlign:"end",height:"30%",marginBottom:"1rem",children:[t(n,{item:!0,children:"Delivery Information"}),t(n,{item:!0,children:e.data.personal_info_used.address.replace("#","")}),t(n,{item:!0,children:e.data.personal_info_used.city}),t(n,{item:!0,children:e.data.personal_info_used.post_code})]}),i(n,{container:!0,flexDirection:"column",children:[i(n,{container:!0,width:"space-between",marginBottom:"1rem",children:[i(n,{container:!0,flexDirection:"column",width:"50%",children:[t(n,{item:!0,children:"Payment Method"}),t(n,{item:!0,children:"Paypal"})]}),i(n,{container:!0,flexDirection:"column",width:"50%",textAlign:"end",children:[t(n,{item:!0,children:"Delivery Type"}),t(n,{item:!0,children:e.data.personal_info_used.delivery_type})]})]}),t(n,{container:!0,children:i(n,{container:!0,flexDirection:"column",children:[i(n,{container:!0,justifyContent:"space-between",textAlign:"end",children:[t(n,{item:!0,flex:"1",textAlign:"start",children:"Items"}),t(n,{item:!0,flex:"1",children:"Qty"}),t(n,{item:!0,flex:"1",children:"Price"})]}),e.data.order.map(d=>i(n,{container:!0,justifyContent:"space-between",textAlign:"end",children:[i(n,{item:!0,flex:"1",textAlign:"start",children:["Handmade ",d.product.name]}),t(n,{item:!0,flex:"1",children:d.quantity}),i(n,{item:!0,flex:"1",children:["£",(d.quantity*d.product.price).toFixed(2)]})]})),i(n,{container:!0,justifyContent:"space-between",textAlign:"end",children:[t(n,{item:!0,flex:"1",textAlign:"start"}),t(n,{item:!0,flex:"1",children:"Total Amount:"}),i(n,{item:!0,flex:"1",children:["£",u]})]}),t(n,{container:!0,justifyContent:"center",textAlign:"Center",marginTop:"2rem",children:"Your Delivery Instructions!"}),t(n,{container:!0,justifyContent:"center",children:e.data.delivery_instructions})]})})]})]})})})]})}function Ae(e){const[o,r]=s.useState(!1),a=()=>{r(!0)},c=()=>{r(!1)},u={height:"100%",width:"100%",textAlign:"center",display:"flex",flexDirection:"column",fontSize:"18px",justifyContent:"space-evenly",alignItems:"center"};return i(b,{children:[e.value!==""&&t(_,{variant:"contained",onClick:()=>{a()},children:"Product Details"}),i(U,{open:o,onClose:c,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",PaperProps:{sx:{height:"90%",maxWidth:"70%",display:"flex",flexDirection:"row",flex:"1 1 50%",borderRadius:"20px",justifyContent:"center",alignItems:"center"}},children:[t(ee,{component:"img",image:e.value.image_url,alt:e.value.catagory,sx:{height:"80%",width:"80vh",marginLeft:"4%",borderRadius:"20px"}}),t(F,{sx:{height:"60vh",lineHeight:"1.5rem",display:"flex",justifyContent:"center",alignItems:"center"},children:i(n,{sx:u,children:[t(te,{fontSize:30,children:"Quick Info "}),t(n,{children:"Handmade item "}),t(n,{children:"Handmade item Dispatches from a small business in United Kingdom"}),t(n,{children:"Materials: copper"}),t(n,{children:"FREE UK delivery"}),t(ne,{children:t(_,{onClick:c,size:"big",children:"Close"})})]})})]})]})}function Be(e){return t(b,{children:i("div",{children:[e.value===void 0&&`£${(e.data.quantity*Number(e.data.product.price)).toFixed(2)}`,e.value!==void 0&&e.value]})})}const L=[{field:"cart_item_id",headerName:"Cart item id"},{field:"product",cellRenderer:Ae},{field:"quantity"},{field:"total price",cellRenderer:Be}],Se=[{field:"id",headerName:"Order id"},{field:"order detail",cellRenderer:Re},{field:"date_ordered",headerName:"Date Ordered"},{field:"delivery_status",headerName:"Delivery Status"}];function ze(){const[e,o]=s.useState(0),[r,a]=s.useState(!1),[c,u]=s.useState(),d=K(),p=Q(),f=s.useRef(),[g,v]=s.useState(L),h=s.useMemo(()=>({sortable:!0,filter:!0})),x=s.useCallback(l=>{console.log("cellClicked",l)},[]);e==0&&g[0].field!=="cart_item_id"?(v(L),S(a).then(l=>{const y=w(l);d(N.replaceCart(l));const D={cart_item_id:"",product:"",quantity:"","total price":l.length===0?"":`Total amount : £${y}`};u([...l,D])})):e==1&&g[0].field!=="id"&&(v(Se),Z(a).then(l=>{u([...l])})),s.useEffect(()=>{S(a).then(l=>{const y=w(l);d(N.replaceCart(l));const D={cart_item_id:"",product:"",quantity:"","total price":y};u([...l,D])})},[]);function m(){localStorage.removeItem("Token"),localStorage.removeItem("username"),localStorage.removeItem("isLogged"),localStorage.removeItem("user_id"),localStorage.removeItem("user_status"),p("/account/login/",{replace:!0}),d(N.replaceCart([]))}return t(b,{children:r?t(n,{container:!0,justifyContent:"center",children:t(oe,{size:"25rem",sx:{margin:"auto"}})}):t(H,{height:"100vh",children:t(J,{maxWidth:"lg",children:i(n,{padding:"2rem 0",container:!0,flexDirection:"column",justifyContent:"center",alignItems:"center",gap:2,children:[i(n,{item:!0,justifyContent:"center",children:["Welcome back, ",localStorage.getItem("username")]}),t(we,{setNavValue:o,navValue:e}),t("div",{className:"ag-theme-material",style:{width:800,height:500},children:t(X,{ref:f,rowData:c,columnDefs:g,animateRows:!0,rowSelection:"multiple",onCellClicked:x,defaultColDef:h})}),t(n,{item:!0,container:!0,justifyContent:"center",width:"75vw",children:t(_,{variant:"contained",component:Y,to:"/account/login",onClick:m,children:"Log out"})})]})})})})}export{ze as default};
