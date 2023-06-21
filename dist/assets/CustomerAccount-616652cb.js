import{e as k,g as I,s as S,r as l,u as $,k as P,_ as y,j as t,m as T,n as O,K,b as o,V as z,X as q,Y as U,d as H,F as D,B as _,D as V,G as i,o as Y,x as X,aw as J,y as j,E as w,W as Z,C as ee,U as te,L as ie}from"./index-d532240d.js";import{A as ne}from"./ag-theme-material-be79b117.js";import{g as oe}from"./OrderAPI-bab6a9e2.js";import{D as E}from"./DialogContent-7b7318af.js";import{C as ae,D as re,a as le}from"./CardMedia-00484b80.js";function se(e){return k("MuiBottomNavigation",e)}I("MuiBottomNavigation",["root"]);const ce=["children","className","component","onChange","showLabels","value"],de=e=>{const{classes:n}=e;return O({root:["root"]},se,n)},ue=S("div",{name:"MuiBottomNavigation",slot:"Root",overridesResolver:(e,n)=>n.root})(({theme:e})=>({display:"flex",justifyContent:"center",height:56,backgroundColor:(e.vars||e).palette.background.paper})),me=l.forwardRef(function(n,r){const a=$({props:n,name:"MuiBottomNavigation"}),{children:s,className:h,component:c="div",onChange:p,showLabels:f=!1,value:g}=a,v=P(a,ce),u=y({},a,{component:c,showLabels:f}),b=de(u);return t(ue,y({as:c,className:T(b.root,h),ref:r,ownerState:u},v,{children:l.Children.map(s,(m,x)=>{if(!l.isValidElement(m))return null;const C=m.props.value===void 0?x:m.props.value;return l.cloneElement(m,{selected:C===g,showLabel:m.props.showLabel!==void 0?m.props.showLabel:f,value:C,onChange:p})})}))}),he=me;function fe(e){return k("MuiBottomNavigationAction",e)}const ge=I("MuiBottomNavigationAction",["root","iconOnly","selected","label"]),F=ge,pe=["className","icon","label","onChange","onClick","selected","showLabel","value"],ve=e=>{const{classes:n,showLabel:r,selected:a}=e;return O({root:["root",!r&&!a&&"iconOnly",a&&"selected"],label:["label",!r&&!a&&"iconOnly",a&&"selected"]},fe,n)},be=S(K,{name:"MuiBottomNavigationAction",slot:"Root",overridesResolver:(e,n)=>{const{ownerState:r}=e;return[n.root,!r.showLabel&&!r.selected&&n.iconOnly]}})(({theme:e,ownerState:n})=>y({transition:e.transitions.create(["color","padding-top"],{duration:e.transitions.duration.short}),padding:"0px 12px",minWidth:80,maxWidth:168,color:(e.vars||e).palette.text.secondary,flexDirection:"column",flex:"1"},!n.showLabel&&!n.selected&&{paddingTop:14},!n.showLabel&&!n.selected&&!n.label&&{paddingTop:0},{[`&.${F.selected}`]:{color:(e.vars||e).palette.primary.main}})),xe=S("span",{name:"MuiBottomNavigationAction",slot:"Label",overridesResolver:(e,n)=>n.label})(({theme:e,ownerState:n})=>y({fontFamily:e.typography.fontFamily,fontSize:e.typography.pxToRem(12),opacity:1,transition:"font-size 0.2s, opacity 0.2s",transitionDelay:"0.1s"},!n.showLabel&&!n.selected&&{opacity:0,transitionDelay:"0s"},{[`&.${F.selected}`]:{fontSize:e.typography.pxToRem(14)}})),ye=l.forwardRef(function(n,r){const a=$({props:n,name:"MuiBottomNavigationAction"}),{className:s,icon:h,label:c,onChange:p,onClick:f,value:g}=a,v=P(a,pe),u=a,b=ve(u),m=x=>{p&&p(x,g),f&&f(x)};return o(be,y({ref:r,className:T(b.root,s),focusRipple:!0,onClick:m,ownerState:u},v,{children:[h,t(xe,{className:b.label,ownerState:u,children:c})]}))}),L=ye;var A={},Ce=q;Object.defineProperty(A,"__esModule",{value:!0});var W=A.default=void 0,_e=Ce(z()),De=U,Ne=(0,_e.default)((0,De.jsx)("path",{d:"M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"}),"ShoppingCart");W=A.default=Ne;var B={},Me=q;Object.defineProperty(B,"__esModule",{value:!0});var G=B.default=void 0,we=Me(z()),Re=U,Se=(0,we.default)((0,Re.jsx)("path",{d:"M20 8h-3V4H3c-1.1 0-2 .9-2 2v11h2c0 1.66 1.34 3 3 3s3-1.34 3-3h6c0 1.66 1.34 3 3 3s3-1.34 3-3h2v-5l-3-4zM6 18.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm13.5-9 1.96 2.5H17V9.5h2.5zm-1.5 9c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"}),"LocalShipping");G=B.default=Se;function Ae(e){return t(H,{sx:{width:e.isMobile?"100%":500},children:o(he,{showLabels:!0,value:e.navValue,onChange:(n,r)=>{e.setNavValue(r)},children:[t(L,{label:"Cart",icon:t(W,{})}),t(L,{label:"Orders",icon:t(G,{})})]})})}function R(e){return e.reduce((r,a)=>{const s=Number((Number(a.product.price)*a.quantity).toFixed(2));return r+s},0)}function Be(e){const[n,r]=l.useState(!1),a=()=>{r(!0)},s=()=>{r(!1)},h=R(e.data.order);return o(D,{children:[t(_,{variant:"contained",onClick:()=>{a()},"aria-label":"Order detail",children:e.isMobile?"Detail":"Order details"}),t(V,{open:n,onClose:s,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",PaperProps:{sx:{height:"90%",maxWidth:"70%",display:"flex",flexDirection:"row",borderRadius:"20px",justifyContent:"center",alignItems:"center",background:"#e7f5ff"}},children:t(E,{sx:{height:"90%",lineHeight:"1.5rem",display:"flex",justifyContent:"center",alignItems:"center"},children:o(i,{container:!0,sx:{width:"100%"},children:[o(i,{container:!0,flexDirection:"Column",textAlign:"center",children:[t(i,{children:"AmeyShopUk"}),t(i,{children:"Thank you for ordering!"})]}),o(i,{container:!0,flexDirection:"column",width:"50%",marginBottom:"1rem",children:[t(i,{item:!0,children:"Personal Information"}),t(i,{item:!0,children:`${e.data.personal_info_used.first_name} ${e.data.personal_info_used.last_name}`}),t(i,{item:!0,children:e.data.personal_info_used.email}),t(i,{item:!0,children:e.data.personal_info_used.phone_number})]}),o(i,{container:!0,flexDirection:"column",width:"50%",textAlign:"end",height:"30%",marginBottom:"1rem",children:[t(i,{item:!0,children:"Delivery Information"}),t(i,{item:!0,children:e.data.personal_info_used.address.replace("#","")}),t(i,{item:!0,children:e.data.personal_info_used.city}),t(i,{item:!0,children:e.data.personal_info_used.post_code})]}),o(i,{container:!0,flexDirection:"column",children:[o(i,{container:!0,width:"space-between",marginBottom:"1rem",children:[o(i,{container:!0,flexDirection:"column",width:"50%",children:[t(i,{item:!0,children:"Payment Method"}),t(i,{item:!0,children:"Paypal"})]}),o(i,{container:!0,flexDirection:"column",width:"50%",textAlign:"end",children:[t(i,{item:!0,children:"Delivery Type"}),t(i,{item:!0,children:e.data.personal_info_used.delivery_type})]})]}),t(i,{container:!0,children:o(i,{container:!0,flexDirection:"column",children:[o(i,{container:!0,justifyContent:"space-between",textAlign:"end",children:[t(i,{item:!0,flex:"1",textAlign:"start",children:"Items"}),t(i,{item:!0,flex:"1",children:"Qty"}),t(i,{item:!0,flex:"1",children:"Price"})]}),e.data.order.map(c=>o(i,{container:!0,justifyContent:"space-between",textAlign:"end",children:[o(i,{item:!0,flex:"1",textAlign:"start",children:["Handmade ",c.product.name]}),t(i,{item:!0,flex:"1",children:c.quantity}),o(i,{item:!0,flex:"1",children:["£",(c.quantity*c.product.price).toFixed(2)]})]})),o(i,{container:!0,justifyContent:"space-between",textAlign:"end",children:[t(i,{item:!0,flex:"1",textAlign:"start"}),t(i,{item:!0,flex:"1",children:"Total Amount:"}),o(i,{item:!0,flex:"1",children:["£",h]})]}),t(i,{container:!0,justifyContent:"center",textAlign:"Center",marginTop:"2rem",children:"Your Delivery Instructions!"}),t(i,{container:!0,justifyContent:"center",children:e.data.delivery_instructions})]})})]})]})})})]})}function je(e){const[n,r]=l.useState(!1),a=()=>{r(!0)},s=()=>{r(!1)},h={height:"100%",width:"100%",textAlign:"center",display:"flex",flexDirection:"column",fontSize:"18px",justifyContent:"space-evenly",alignItems:"center"};return o(D,{children:[e.value!==""&&t(_,{variant:"contained",onClick:()=>{a()},"aria-label":"Product Detail",children:e.isMobile?"Details":"Product Details"}),o(V,{open:n,onClose:s,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",PaperProps:{sx:{height:"90%",maxWidth:"70%",display:"flex",flexDirection:"row",flex:"1 1 50%",borderRadius:"20px",justifyContent:"center",alignItems:"center"}},children:[t(ae,{component:"img",image:e.value.image_url,alt:e.value.catagory,sx:{height:"80%",width:"80vh",marginLeft:"4%",borderRadius:"20px"}}),t(E,{sx:{height:"60vh",lineHeight:"1.5rem",display:"flex",justifyContent:"center",alignItems:"center"},children:o(i,{sx:h,children:[t(re,{fontSize:30,children:"Quick Info "}),t(i,{children:"Handmade item "}),t(i,{children:"Handmade item Dispatches from a small business in United Kingdom"}),t(i,{children:"Materials: copper"}),t(i,{children:"FREE UK delivery"}),t(le,{children:t(_,{onClick:s,size:"big",children:"Close"})})]})})]})]})}function Le(e){return t(D,{children:o("div",{children:[e.value===void 0&&`£${(e.data.quantity*Number(e.data.product.price)).toFixed(2)}`,e.value!==void 0&&(e.value===""?"":e.isMobile?`Total £${e.value}`:`Total amount : £${e.value}`)]})})}function Oe(){const e=Y(),n=[{field:"cart_item_id",headerName:e.isMobile?"id":"Cart item id"},{field:"product",cellRenderer:je,cellRendererParams:{isMobile:e.isMobile}},{field:"quantity",headerName:e.isMobile?"Qt":"Quantity"},{field:"total price",headerName:e.isMobile?"Total":"Total Price",cellRenderer:Le,cellRendererParams:{isMobile:e.isMobile}}],r=[{field:"id",headerName:e.isMobile?"id":"Order id",flex:e.isMobile?1.2:1},{field:"order detail",headerName:e.isMobile?"Detail":"Order Detail",cellRenderer:Be,cellRendererParams:{isMobile:e.isMobile},flex:e.isMobile?1.5:1},{field:"date_ordered",headerName:e.isMobile?"Date":"Date Ordered",flex:e.isMobile?2:1},{field:"delivery_status",headerName:e.isMobile?"Status":"Delivery Status",flex:e.isMobile?2:1}],[a,s]=l.useState(0),[h,c]=l.useState(!1),[p,f]=l.useState(),[g,v]=l.useState(n),u=X(),b=J(),m=l.useRef(),x=l.useMemo(()=>({sortable:!0,filter:!0,resizable:!0,flex:1})),C=l.useCallback(d=>{console.log("cellClicked",d)},[]);a===0&&g[0].field!=="cart_item_id"?(v(n),j(c).then(d=>{const N=R(d);u(w.replaceCart(d));const M={cart_item_id:"",product:"",quantity:"","total price":d.length===0?"":N};f([...d,M])})):a===1&&g[0].field!=="id"&&(v(r),oe(c).then(d=>{f([...d])})),l.useEffect(()=>{j(c).then(d=>{const N=R(d);u(w.replaceCart(d));const M={cart_item_id:"",product:"",quantity:"","total price":N};f([...d,M])})},[]);function Q(){localStorage.removeItem("Token"),localStorage.removeItem("username"),localStorage.removeItem("isLogged"),localStorage.removeItem("user_id"),localStorage.removeItem("user_status"),b("/account/login/",{replace:!0}),u(w.replaceCart([]))}return o(D,{children:[o(Z,{children:[t("title",{children:`${localStorage.getItem("username")}'s Account`}),t("meta",{name:"description",content:"See your orders and cart through a dashboard at UniqueShopGB"}),t("link",{rel:"canonical",href:`/account/${localStorage.getItem("user_status")}/${localStorage.getItem("username")}`})]}),h?t(i,{container:!0,justifyContent:"center",children:t(ee,{size:"25rem",sx:{margin:"auto"}})}):t(H,{height:"100vh",children:t(te,{maxWidth:"lg",children:o(i,{padding:"2rem 0",container:!0,flexDirection:"column",justifyContent:"center",alignItems:"center",gap:2,children:[o(i,{item:!0,justifyContent:"center",children:["Welcome back, ",localStorage.getItem("username")]}),t(Ae,{setNavValue:s,navValue:a,isDesktop:e.isDesktop,isTablet:e.isTablet,isMobile:e.isMobile}),t("div",{className:"ag-theme-material",style:{width:e.isMobile?"100%":800,height:500},children:t(ne,{ref:m,rowData:p,columnDefs:g,animateRows:!0,rowSelection:"multiple",onCellClicked:C,defaultColDef:x})}),t(i,{item:!0,container:!0,justifyContent:"center",width:"75vw",children:t(_,{variant:"contained",component:ie,to:"/account/login",onClick:Q,children:"Log out"})})]})})})]})}export{Oe as default};