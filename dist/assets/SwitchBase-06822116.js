import{g as $,f as W,k as x,p as A,i as d,r as D,_ as G,n as H,b as J,j as K,l as M,t as Q,m as T}from"./index-28587765.js";import{u as V}from"./useFormControl-af2eded4.js";function X(e){return $("PrivateSwitchBase",e)}W("PrivateSwitchBase",["root","checked","disabled","input","edgeStart","edgeEnd"]);const Y=["autoFocus","checked","checkedIcon","className","defaultChecked","disabled","disableFocusRipple","edge","icon","id","inputProps","inputRef","name","onBlur","onChange","onFocus","readOnly","required","tabIndex","type","value"],Z=e=>{const{classes:a,checked:i,disabled:l,edge:o}=e,r={root:["root",i&&"checked",l&&"disabled",o&&`edge${Q(o)}`],input:["input"]};return T(r,X,a)},ee=x(A)(({ownerState:e})=>d({padding:9,borderRadius:"50%"},e.edge==="start"&&{marginLeft:e.size==="small"?-3:-12},e.edge==="end"&&{marginRight:e.size==="small"?-3:-12})),se=x("input")({cursor:"inherit",position:"absolute",opacity:0,width:"100%",height:"100%",top:0,left:0,margin:0,padding:0,zIndex:1}),te=D.forwardRef(function(a,i){const{autoFocus:l,checked:o,checkedIcon:r,className:F,defaultChecked:h,disabled:w,disableFocusRipple:p=!1,edge:y=!1,icon:S,id:R,inputProps:I,inputRef:P,name:j,onBlur:f,onChange:g,onFocus:b,readOnly:z,required:N=!1,tabIndex:U,type:c,value:m}=a,_=G(a,Y),[k,q]=H({controlled:o,default:!!h,name:"SwitchBase",state:"checked"}),t=V(),v=s=>{b&&b(s),t&&t.onFocus&&t.onFocus(s)},E=s=>{f&&f(s),t&&t.onBlur&&t.onBlur(s)},L=s=>{if(s.nativeEvent.defaultPrevented)return;const C=s.target.checked;q(C),g&&g(s,C)};let n=w;t&&typeof n>"u"&&(n=t.disabled);const O=c==="checkbox"||c==="radio",u=d({},a,{checked:k,disabled:n,disableFocusRipple:p,edge:y}),B=Z(u);return J(ee,d({component:"span",className:M(B.root,F),centerRipple:!0,focusRipple:!p,disabled:n,tabIndex:null,role:void 0,onFocus:v,onBlur:E,ownerState:u,ref:i},_,{children:[K(se,d({autoFocus:l,checked:o,defaultChecked:h,className:B.input,disabled:n,id:O?R:void 0,name:j,onChange:L,readOnly:z,ref:P,required:N,ownerState:u,tabIndex:U,type:c},c==="checkbox"&&m===void 0?{}:{value:m},I)),k?r:S]}))}),ne=te;export{ne as S};
