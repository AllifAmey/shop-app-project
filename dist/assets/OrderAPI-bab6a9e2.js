import{v as i}from"./index-d532240d.js";async function y(t){t(!0);const e=localStorage.getItem("Token"),s=await(await fetch(`${i}/api/shop/orders`,{method:"GET",headers:{"Content-type":"application/json",Authorization:`Token ${e}`}})).json();return t(!1),s}async function l(t,e,a){t(!0);const s=localStorage.getItem("Token"),o={user:localStorage.getItem("user_id"),first_name:e.first_name,last_name:e.last_name,email:e.email,phone_number:e.phone_number,address:e.address,city:e.city,country:e.country,post_code:e.post_code,delivery_type:e.delivery_type},c=await(await fetch(`${i}/api/shop/deliveryinfo/`,{method:"POST",body:JSON.stringify([o,{delivery_msg:e.delivery_msg,total_price:a}]),headers:{"Content-type":"application/json",Authorization:`Token ${s}`}})).json();return t(!1),c}async function m(t,e,a,s){t(!0);let n={first_name:e.first_name,last_name:e.last_name,email:e.email,phone_number:e.phone_number,address:e.address,city:e.city,country:e.country,post_code:e.post_code,delivery_type:e.delivery_type};const r=await(await fetch(`${i}/api/shop/post_orders/anonymous`,{method:"POST",body:JSON.stringify([n,{delivery_msg:e.delivery_msg,total_price:a},{products:s}]),headers:{"Content-type":"application/json"}})).json();return t(!1),r}async function u(t,e,a){t(!0);const s=localStorage.getItem("Token"),n=await fetch(`${i}/api/shop/orders/${e}/`,{method:"PATCH",body:JSON.stringify(a),headers:{"Content-type":"application/json",Authorization:`Token ${s}`}}),o=await n.json();return t(!1),n.ok?"error":o}export{m as a,u as b,y as g,l as p};