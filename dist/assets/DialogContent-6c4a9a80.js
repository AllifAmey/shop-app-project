import{a as r,g as n,k as p,_ as i,r as u,u as v,e as C,j as x,h as D,i as f}from"./index-a96123f6.js";function T(o){return r("MuiDialogContent",o)}n("MuiDialogContent",["root","dividers"]);function R(o){return r("MuiDialogTitle",o)}const m=n("MuiDialogTitle",["root"]),w=m,M=["className","dividers"],U=o=>{const{classes:t,dividers:s}=o;return f({root:["root",s&&"dividers"]},T,t)},$=p("div",{name:"MuiDialogContent",slot:"Root",overridesResolver:(o,t)=>{const{ownerState:s}=o;return[t.root,s.dividers&&t.dividers]}})(({theme:o,ownerState:t})=>i({flex:"1 1 auto",WebkitOverflowScrolling:"touch",overflowY:"auto",padding:"20px 24px"},t.dividers?{padding:"16px 24px",borderTop:`1px solid ${(o.vars||o).palette.divider}`,borderBottom:`1px solid ${(o.vars||o).palette.divider}`}:{[`.${w.root} + &`]:{paddingTop:0}})),b=u.forwardRef(function(t,s){const e=v({props:t,name:"MuiDialogContent"}),{className:l,dividers:d=!1}=e,c=C(e,M),a=i({},e,{dividers:d}),g=U(a);return x($,i({className:D(g.root,l),ownerState:a,ref:s},c))}),S=b;export{S as D,R as g};