import{ag as Pt,ah as Nt,ai as Ut,i as Qe,aj as ke,ak as ae,al as Lt,am as Mt,an as $t,r as v,ao as jt,_ as Ft,j as l,k as Ht,ap as Be,l as zt,g as Vt,s as Wt,h as Gt,Q as qt,R as Kt,S as Xt,F as et,aa as Jt,b as m,G as h,J as Yt,B as Zt,O as Qt,U as Z,aq as en,ae as q,d as Q}from"./index-e6b236b7.js";import{p as Pe}from"./ProductsAPI-913b3a6a.js";import{u as tn}from"./index.esm-06070c12.js";import{p as nn}from"./index-4d501b15.js";import{M as rn}from"./IconButton-398895cd.js";const sn=["component","direction","spacing","divider","children","className","useFlexGap"],on=Pt(),an=Nt("div",{name:"MuiStack",slot:"Root",overridesResolver:(t,e)=>e.root});function cn(t){return Ut({props:t,name:"MuiStack",defaultTheme:on})}function ln(t,e){const n=v.Children.toArray(t).filter(Boolean);return n.reduce((r,s,o)=>(r.push(s),o<n.length-1&&r.push(v.cloneElement(e,{key:`separator-${o}`})),r),[])}const un=t=>({row:"Left","row-reverse":"Right",column:"Top","column-reverse":"Bottom"})[t],hn=({ownerState:t,theme:e})=>{let n=Qe({display:"flex",flexDirection:"column"},ke({theme:e},ae({values:t.direction,breakpoints:e.breakpoints.values}),r=>({flexDirection:r})));if(t.spacing){const r=Lt(e),s=Object.keys(e.breakpoints.values).reduce((c,u)=>((typeof t.spacing=="object"&&t.spacing[u]!=null||typeof t.direction=="object"&&t.direction[u]!=null)&&(c[u]=!0),c),{}),o=ae({values:t.direction,base:s}),i=ae({values:t.spacing,base:s});typeof o=="object"&&Object.keys(o).forEach((c,u,g)=>{if(!o[c]){const p=u>0?o[g[u-1]]:"column";o[c]=p}}),n=Mt(n,ke({theme:e},i,(c,u)=>t.useFlexGap?{gap:Be(r,c)}:{"& > :not(style) + :not(style)":{margin:0,[`margin${un(u?o[u]:t.direction)}`]:Be(r,c)}}))}return n=$t(e.breakpoints,n),n};function dn(t={}){const{createStyledComponent:e=an,useThemeProps:n=cn,componentName:r="MuiStack"}=t,s=()=>zt({root:["root"]},c=>Vt(r,c),{}),o=e(hn);return v.forwardRef(function(c,u){const g=n(c),f=jt(g),{component:p="div",direction:E="column",spacing:R=0,divider:C,children:w,className:O,useFlexGap:A=!1}=f,I=Ft(f,sn),y={direction:E,spacing:R,useFlexGap:A},x=s();return l(o,Qe({as:p,ownerState:y,ref:u,className:Ht(x.root,O)},I,{children:C?ln(w,C):w}))})}const fn=dn({createStyledComponent:Wt("div",{name:"MuiStack",slot:"Root",overridesResolver:(t,e)=>e.root}),useThemeProps:t=>Gt({props:t,name:"MuiStack"})}),pn=fn;var we={},mn=Kt;Object.defineProperty(we,"__esModule",{value:!0});var tt=we.default=void 0,gn=mn(qt()),Ne=Xt,_n=(0,gn.default)([(0,Ne.jsx)("circle",{cx:"12",cy:"12",r:"3.2"},"0"),(0,Ne.jsx)("path",{d:"M9 2 7.17 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2h-3.17L15 2H9zm3 15c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z"},"1")],"PhotoCamera");tt=we.default=_n;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nt=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},bn=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const o=t[n++];e[r++]=String.fromCharCode((s&31)<<6|o&63)}else if(s>239&&s<365){const o=t[n++],i=t[n++],a=t[n++],c=((s&7)<<18|(o&63)<<12|(i&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const o=t[n++],i=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(o&63)<<6|i&63)}}return e.join("")},rt={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const o=t[s],i=s+1<t.length,a=i?t[s+1]:0,c=s+2<t.length,u=c?t[s+2]:0,g=o>>2,f=(o&3)<<4|a>>4;let p=(a&15)<<2|u>>6,E=u&63;c||(E=64,i||(p=64)),r.push(n[g],n[f],n[p],n[E])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(nt(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):bn(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const o=n[t.charAt(s++)],a=s<t.length?n[t.charAt(s)]:0;++s;const u=s<t.length?n[t.charAt(s)]:64;++s;const f=s<t.length?n[t.charAt(s)]:64;if(++s,o==null||a==null||u==null||f==null)throw new yn;const p=o<<2|a>>4;if(r.push(p),u!==64){const E=a<<4&240|u>>2;if(r.push(E),f!==64){const R=u<<6&192|f;r.push(R)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class yn extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const En=function(t){const e=nt(t);return rt.encodeByteArray(e,!0)},ne=function(t){return En(t).replace(/\./g,"")},wn=function(t){try{return rt.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vn(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const In=()=>vn().__FIREBASE_DEFAULTS__,Rn=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Dn=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&wn(t[1]);return e&&JSON.parse(e)},ve=()=>{try{return In()||Rn()||Dn()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Sn=t=>{var e,n;return(n=(e=ve())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},Tn=t=>{const e=Sn(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},An=()=>{var t;return(t=ve())===null||t===void 0?void 0:t.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cn{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function On(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,o=t.sub||t.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const i=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[ne(JSON.stringify(n)),ne(JSON.stringify(i)),a].join(".")}function xn(){var t;const e=(t=ve())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function kn(){try{return typeof indexedDB=="object"}catch{return!1}}function Bn(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var o;e(((o=s.error)===null||o===void 0?void 0:o.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pn="FirebaseError";class V extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=Pn,Object.setPrototypeOf(this,V.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,st.prototype.create)}}class st{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,o=this.errors[e],i=o?Nn(o,r):"Error",a=`${this.serviceName}: ${i} (${s}).`;return new V(s,a,r)}}function Nn(t,e){return t.replace(Un,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const Un=/\{\$([^}]+)}/g;function pe(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const o=t[s],i=e[s];if(Ue(o)&&Ue(i)){if(!pe(o,i))return!1}else if(o!==i)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function Ue(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oe(t){return t&&t._delegate?t._delegate:t}class J{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ln{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Cn;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(o){if(s)return null;throw o}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if($n(e))try{this.getOrInitializeService({instanceIdentifier:$})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const o=this.getOrInitializeService({instanceIdentifier:s});r.resolve(o)}catch{}}}}clearInstance(e=$){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=$){return this.instances.has(e)}getOptions(e=$){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[o,i]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(o);r===a&&i.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),o=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;o.add(e),this.onInitCallbacks.set(s,o);const i=this.instances.get(s);return i&&e(i,s),()=>{o.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Mn(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=$){return this.component?this.component.multipleInstances?e:$:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Mn(t){return t===$?void 0:t}function $n(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jn{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Ln(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var d;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(d||(d={}));const Fn={debug:d.DEBUG,verbose:d.VERBOSE,info:d.INFO,warn:d.WARN,error:d.ERROR,silent:d.SILENT},Hn=d.INFO,zn={[d.DEBUG]:"log",[d.VERBOSE]:"log",[d.INFO]:"info",[d.WARN]:"warn",[d.ERROR]:"error"},Vn=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=zn[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Wn{constructor(e){this.name=e,this._logLevel=Hn,this._logHandler=Vn,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in d))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Fn[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,d.DEBUG,...e),this._logHandler(this,d.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,d.VERBOSE,...e),this._logHandler(this,d.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,d.INFO,...e),this._logHandler(this,d.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,d.WARN,...e),this._logHandler(this,d.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,d.ERROR,...e),this._logHandler(this,d.ERROR,...e)}}const Gn=(t,e)=>e.some(n=>t instanceof n);let Le,Me;function qn(){return Le||(Le=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Kn(){return Me||(Me=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const ot=new WeakMap,me=new WeakMap,it=new WeakMap,ce=new WeakMap,Ie=new WeakMap;function Xn(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",o),t.removeEventListener("error",i)},o=()=>{n(U(t.result)),s()},i=()=>{r(t.error),s()};t.addEventListener("success",o),t.addEventListener("error",i)});return e.then(n=>{n instanceof IDBCursor&&ot.set(n,t)}).catch(()=>{}),Ie.set(e,t),e}function Jn(t){if(me.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",o),t.removeEventListener("error",i),t.removeEventListener("abort",i)},o=()=>{n(),s()},i=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",o),t.addEventListener("error",i),t.addEventListener("abort",i)});me.set(t,e)}let ge={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return me.get(t);if(e==="objectStoreNames")return t.objectStoreNames||it.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return U(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Yn(t){ge=t(ge)}function Zn(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(le(this),e,...n);return it.set(r,e.sort?e.sort():[e]),U(r)}:Kn().includes(t)?function(...e){return t.apply(le(this),e),U(ot.get(this))}:function(...e){return U(t.apply(le(this),e))}}function Qn(t){return typeof t=="function"?Zn(t):(t instanceof IDBTransaction&&Jn(t),Gn(t,qn())?new Proxy(t,ge):t)}function U(t){if(t instanceof IDBRequest)return Xn(t);if(ce.has(t))return ce.get(t);const e=Qn(t);return e!==t&&(ce.set(t,e),Ie.set(e,t)),e}const le=t=>Ie.get(t);function er(t,e,{blocked:n,upgrade:r,blocking:s,terminated:o}={}){const i=indexedDB.open(t,e),a=U(i);return r&&i.addEventListener("upgradeneeded",c=>{r(U(i.result),c.oldVersion,c.newVersion,U(i.transaction))}),n&&i.addEventListener("blocked",()=>n()),a.then(c=>{o&&c.addEventListener("close",()=>o()),s&&c.addEventListener("versionchange",()=>s())}).catch(()=>{}),a}const tr=["get","getKey","getAll","getAllKeys","count"],nr=["put","add","delete","clear"],ue=new Map;function $e(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(ue.get(e))return ue.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=nr.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||tr.includes(n)))return;const o=async function(i,...a){const c=this.transaction(i,s?"readwrite":"readonly");let u=c.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),s&&c.done]))[0]};return ue.set(e,o),o}Yn(t=>({...t,get:(e,n,r)=>$e(e,n)||t.get(e,n,r),has:(e,n)=>!!$e(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rr{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(sr(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function sr(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const _e="@firebase/app",je="0.9.7";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const F=new Wn("@firebase/app"),or="@firebase/app-compat",ir="@firebase/analytics-compat",ar="@firebase/analytics",cr="@firebase/app-check-compat",lr="@firebase/app-check",ur="@firebase/auth",hr="@firebase/auth-compat",dr="@firebase/database",fr="@firebase/database-compat",pr="@firebase/functions",mr="@firebase/functions-compat",gr="@firebase/installations",_r="@firebase/installations-compat",br="@firebase/messaging",yr="@firebase/messaging-compat",Er="@firebase/performance",wr="@firebase/performance-compat",vr="@firebase/remote-config",Ir="@firebase/remote-config-compat",Rr="@firebase/storage",Dr="@firebase/storage-compat",Sr="@firebase/firestore",Tr="@firebase/firestore-compat",Ar="firebase",Cr="9.19.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const be="[DEFAULT]",Or={[_e]:"fire-core",[or]:"fire-core-compat",[ar]:"fire-analytics",[ir]:"fire-analytics-compat",[lr]:"fire-app-check",[cr]:"fire-app-check-compat",[ur]:"fire-auth",[hr]:"fire-auth-compat",[dr]:"fire-rtdb",[fr]:"fire-rtdb-compat",[pr]:"fire-fn",[mr]:"fire-fn-compat",[gr]:"fire-iid",[_r]:"fire-iid-compat",[br]:"fire-fcm",[yr]:"fire-fcm-compat",[Er]:"fire-perf",[wr]:"fire-perf-compat",[vr]:"fire-rc",[Ir]:"fire-rc-compat",[Rr]:"fire-gcs",[Dr]:"fire-gcs-compat",[Sr]:"fire-fst",[Tr]:"fire-fst-compat","fire-js":"fire-js",[Ar]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const re=new Map,ye=new Map;function xr(t,e){try{t.container.addComponent(e)}catch(n){F.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function se(t){const e=t.name;if(ye.has(e))return F.debug(`There were multiple attempts to register component ${e}.`),!1;ye.set(e,t);for(const n of re.values())xr(n,t);return!0}function kr(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Br={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},L=new st("app","Firebase",Br);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pr{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new J("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw L.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nr=Cr;function at(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:be,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw L.create("bad-app-name",{appName:String(s)});if(n||(n=An()),!n)throw L.create("no-options");const o=re.get(s);if(o){if(pe(n,o.options)&&pe(r,o.config))return o;throw L.create("duplicate-app",{appName:s})}const i=new jn(s);for(const c of ye.values())i.addComponent(c);const a=new Pr(n,r,i);return re.set(s,a),a}function Ur(t=be){const e=re.get(t);if(!e&&t===be)return at();if(!e)throw L.create("no-app",{appName:t});return e}function z(t,e,n){var r;let s=(r=Or[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const o=s.match(/\s|\//),i=e.match(/\s|\//);if(o||i){const a=[`Unable to register library "${s}" with version "${e}":`];o&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),o&&i&&a.push("and"),i&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),F.warn(a.join(" "));return}se(new J(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lr="firebase-heartbeat-database",Mr=1,Y="firebase-heartbeat-store";let he=null;function ct(){return he||(he=er(Lr,Mr,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Y)}}}).catch(t=>{throw L.create("idb-open",{originalErrorMessage:t.message})})),he}async function $r(t){try{return(await ct()).transaction(Y).objectStore(Y).get(lt(t))}catch(e){if(e instanceof V)F.warn(e.message);else{const n=L.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});F.warn(n.message)}}}async function Fe(t,e){try{const r=(await ct()).transaction(Y,"readwrite");return await r.objectStore(Y).put(e,lt(t)),r.done}catch(n){if(n instanceof V)F.warn(n.message);else{const r=L.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});F.warn(r.message)}}}function lt(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jr=1024,Fr=30*24*60*60*1e3;class Hr{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Vr(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=He();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(s=>s.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(s=>{const o=new Date(s.date).valueOf();return Date.now()-o<=Fr}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=He(),{heartbeatsToSend:n,unsentEntries:r}=zr(this._heartbeatsCache.heartbeats),s=ne(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function He(){return new Date().toISOString().substring(0,10)}function zr(t,e=jr){const n=[];let r=t.slice();for(const s of t){const o=n.find(i=>i.agent===s.agent);if(o){if(o.dates.push(s.date),ze(n)>e){o.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),ze(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Vr{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return kn()?Bn().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await $r(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Fe(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Fe(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function ze(t){return ne(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wr(t){se(new J("platform-logger",e=>new rr(e),"PRIVATE")),se(new J("heartbeat",e=>new Hr(e),"PRIVATE")),z(_e,je,t),z(_e,je,"esm2017"),z("fire-js","")}Wr("");var Gr="firebase",qr="9.19.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */z(Gr,qr,"app");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ut="firebasestorage.googleapis.com",ht="storageBucket",Kr=2*60*1e3,Xr=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b extends V{constructor(e,n,r=0){super(de(e),`Firebase Storage: ${n} (${de(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,b.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return de(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var _;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(_||(_={}));function de(t){return"storage/"+t}function Re(){const t="An unknown error occurred, please check the error payload for server response.";return new b(_.UNKNOWN,t)}function Jr(t){return new b(_.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function Yr(t){return new b(_.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function Zr(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new b(_.UNAUTHENTICATED,t)}function Qr(){return new b(_.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function es(t){return new b(_.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function ts(){return new b(_.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function ns(){return new b(_.CANCELED,"User canceled the upload/download.")}function rs(t){return new b(_.INVALID_URL,"Invalid URL '"+t+"'.")}function ss(t){return new b(_.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function os(){return new b(_.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+ht+"' property when initializing the app?")}function is(){return new b(_.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function as(){return new b(_.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function cs(t){return new b(_.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function Ee(t){return new b(_.INVALID_ARGUMENT,t)}function dt(){return new b(_.APP_DELETED,"The Firebase app was deleted.")}function ls(t){return new b(_.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function X(t,e){return new b(_.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function K(t){throw new b(_.INTERNAL_ERROR,"Internal error: "+t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=T.makeFromUrl(e,n)}catch{return new T(e,"")}if(r.path==="")return r;throw ss(e)}static makeFromUrl(e,n){let r=null;const s="([A-Za-z0-9.\\-_]+)";function o(y){y.path.charAt(y.path.length-1)==="/"&&(y.path_=y.path_.slice(0,-1))}const i="(/(.*))?$",a=new RegExp("^gs://"+s+i,"i"),c={bucket:1,path:3};function u(y){y.path_=decodeURIComponent(y.path)}const g="v[A-Za-z0-9_]+",f=n.replace(/[.]/g,"\\."),p="(/([^?#]*).*)?$",E=new RegExp(`^https?://${f}/${g}/b/${s}/o${p}`,"i"),R={bucket:1,path:3},C=n===ut?"(?:storage.googleapis.com|storage.cloud.google.com)":n,w="([^?#]*)",O=new RegExp(`^https?://${C}/${s}/${w}`,"i"),I=[{regex:a,indices:c,postModify:o},{regex:E,indices:R,postModify:u},{regex:O,indices:{bucket:1,path:2},postModify:u}];for(let y=0;y<I.length;y++){const x=I[y],M=x.regex.exec(e);if(M){const ie=M[x.indices.bucket];let W=M[x.indices.path];W||(W=""),r=new T(ie,W),x.postModify(r);break}}if(r==null)throw rs(e);return r}}class us{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hs(t,e,n){let r=1,s=null,o=null,i=!1,a=0;function c(){return a===2}let u=!1;function g(...w){u||(u=!0,e.apply(null,w))}function f(w){s=setTimeout(()=>{s=null,t(E,c())},w)}function p(){o&&clearTimeout(o)}function E(w,...O){if(u){p();return}if(w){p(),g.call(null,w,...O);return}if(c()||i){p(),g.call(null,w,...O);return}r<64&&(r*=2);let I;a===1?(a=2,I=0):I=(r+Math.random())*1e3,f(I)}let R=!1;function C(w){R||(R=!0,p(),!u&&(s!==null?(w||(a=2),clearTimeout(s),f(0)):w||(a=1)))}return f(0),o=setTimeout(()=>{i=!0,C(!0)},n),C}function ds(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fs(t){return t!==void 0}function ps(t){return typeof t=="object"&&!Array.isArray(t)}function De(t){return typeof t=="string"||t instanceof String}function Ve(t){return Se()&&t instanceof Blob}function Se(){return typeof Blob<"u"&&!xn()}function We(t,e,n,r){if(r<e)throw Ee(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw Ee(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Te(t,e,n){let r=e;return n==null&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function ft(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const s=e(r)+"="+e(t[r]);n=n+s+"&"}return n=n.slice(0,-1),n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var j;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(j||(j={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ms(t,e){const n=t>=500&&t<600,s=[408,429].indexOf(t)!==-1,o=e.indexOf(t)!==-1;return n||s||o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gs{constructor(e,n,r,s,o,i,a,c,u,g,f,p=!0){this.url_=e,this.method_=n,this.headers_=r,this.body_=s,this.successCodes_=o,this.additionalRetryCodes_=i,this.callback_=a,this.errorCallback_=c,this.timeout_=u,this.progressCallback_=g,this.connectionFactory_=f,this.retry=p,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((E,R)=>{this.resolve_=E,this.reject_=R,this.start_()})}start_(){const e=(r,s)=>{if(s){r(!1,new ee(!1,null,!0));return}const o=this.connectionFactory_();this.pendingConnection_=o;const i=a=>{const c=a.loaded,u=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(c,u)};this.progressCallback_!==null&&o.addUploadProgressListener(i),o.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&o.removeUploadProgressListener(i),this.pendingConnection_=null;const a=o.getErrorCode()===j.NO_ERROR,c=o.getStatus();if(!a||ms(c,this.additionalRetryCodes_)&&this.retry){const g=o.getErrorCode()===j.ABORT;r(!1,new ee(!1,null,g));return}const u=this.successCodes_.indexOf(c)!==-1;r(!0,new ee(u,o))})},n=(r,s)=>{const o=this.resolve_,i=this.reject_,a=s.connection;if(s.wasSuccessCode)try{const c=this.callback_(a,a.getResponse());fs(c)?o(c):o()}catch(c){i(c)}else if(a!==null){const c=Re();c.serverResponse=a.getErrorText(),this.errorCallback_?i(this.errorCallback_(a,c)):i(c)}else if(s.canceled){const c=this.appDelete_?dt():ns();i(c)}else{const c=ts();i(c)}};this.canceled_?n(!1,new ee(!1,null,!0)):this.backoffId_=hs(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&ds(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class ee{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function _s(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function bs(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function ys(t,e){e&&(t["X-Firebase-GMPID"]=e)}function Es(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function ws(t,e,n,r,s,o,i=!0){const a=ft(t.urlParams),c=t.url+a,u=Object.assign({},t.headers);return ys(u,e),_s(u,n),bs(u,o),Es(u,r),new gs(c,t.method,u,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,s,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vs(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function Is(...t){const e=vs();if(e!==void 0){const n=new e;for(let r=0;r<t.length;r++)n.append(t[r]);return n.getBlob()}else{if(Se())return new Blob(t);throw new b(_.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function Rs(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ds(t){if(typeof atob>"u")throw cs("base-64");return atob(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const k={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class fe{constructor(e,n){this.data=e,this.contentType=n||null}}function Ss(t,e){switch(t){case k.RAW:return new fe(pt(e));case k.BASE64:case k.BASE64URL:return new fe(mt(t,e));case k.DATA_URL:return new fe(As(e),Cs(e))}throw Re()}function pt(t){const e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const o=r,i=t.charCodeAt(++n);r=65536|(o&1023)<<10|i&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function Ts(t){let e;try{e=decodeURIComponent(t)}catch{throw X(k.DATA_URL,"Malformed data URL.")}return pt(e)}function mt(t,e){switch(t){case k.BASE64:{const s=e.indexOf("-")!==-1,o=e.indexOf("_")!==-1;if(s||o)throw X(t,"Invalid character '"+(s?"-":"_")+"' found: is it base64url encoded?");break}case k.BASE64URL:{const s=e.indexOf("+")!==-1,o=e.indexOf("/")!==-1;if(s||o)throw X(t,"Invalid character '"+(s?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=Ds(e)}catch(s){throw s.message.includes("polyfill")?s:X(t,"Invalid character found")}const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}class gt{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw X(k.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=Os(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function As(t){const e=new gt(t);return e.base64?mt(k.BASE64,e.rest):Ts(e.rest)}function Cs(t){return new gt(t).contentType}function Os(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N{constructor(e,n){let r=0,s="";Ve(e)?(this.data_=e,r=e.size,s=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=s}size(){return this.size_}type(){return this.type_}slice(e,n){if(Ve(this.data_)){const r=this.data_,s=Rs(r,e,n);return s===null?null:new N(s)}else{const r=new Uint8Array(this.data_.buffer,e,n-e);return new N(r,!0)}}static getBlob(...e){if(Se()){const n=e.map(r=>r instanceof N?r.data_:r);return new N(Is.apply(null,n))}else{const n=e.map(i=>De(i)?Ss(k.RAW,i).data:i.data_);let r=0;n.forEach(i=>{r+=i.byteLength});const s=new Uint8Array(r);let o=0;return n.forEach(i=>{for(let a=0;a<i.length;a++)s[o++]=i[a]}),new N(s,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _t(t){let e;try{e=JSON.parse(t)}catch{return null}return ps(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xs(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function ks(t,e){const n=e.split("/").filter(r=>r.length>0).join("/");return t.length===0?n:t+"/"+n}function bt(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bs(t,e){return e}class D{constructor(e,n,r,s){this.server=e,this.local=n||e,this.writable=!!r,this.xform=s||Bs}}let te=null;function Ps(t){return!De(t)||t.length<2?t:bt(t)}function yt(){if(te)return te;const t=[];t.push(new D("bucket")),t.push(new D("generation")),t.push(new D("metageneration")),t.push(new D("name","fullPath",!0));function e(o,i){return Ps(i)}const n=new D("name");n.xform=e,t.push(n);function r(o,i){return i!==void 0?Number(i):i}const s=new D("size");return s.xform=r,t.push(s),t.push(new D("timeCreated")),t.push(new D("updated")),t.push(new D("md5Hash",null,!0)),t.push(new D("cacheControl",null,!0)),t.push(new D("contentDisposition",null,!0)),t.push(new D("contentEncoding",null,!0)),t.push(new D("contentLanguage",null,!0)),t.push(new D("contentType",null,!0)),t.push(new D("metadata","customMetadata",!0)),te=t,te}function Ns(t,e){function n(){const r=t.bucket,s=t.fullPath,o=new T(r,s);return e._makeStorageReference(o)}Object.defineProperty(t,"ref",{get:n})}function Us(t,e,n){const r={};r.type="file";const s=n.length;for(let o=0;o<s;o++){const i=n[o];r[i.local]=i.xform(r,e[i.server])}return Ns(r,t),r}function Et(t,e,n){const r=_t(e);return r===null?null:Us(t,r,n)}function Ls(t,e,n,r){const s=_t(e);if(s===null||!De(s.downloadTokens))return null;const o=s.downloadTokens;if(o.length===0)return null;const i=encodeURIComponent;return o.split(",").map(u=>{const g=t.bucket,f=t.fullPath,p="/b/"+i(g)+"/o/"+i(f),E=Te(p,n,r),R=ft({alt:"media",token:u});return E+R})[0]}function Ms(t,e){const n={},r=e.length;for(let s=0;s<r;s++){const o=e[s];o.writable&&(n[o.server]=t[o.local])}return JSON.stringify(n)}class wt{constructor(e,n,r,s){this.url=e,this.method=n,this.handler=r,this.timeout=s,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vt(t){if(!t)throw Re()}function $s(t,e){function n(r,s){const o=Et(t,s,e);return vt(o!==null),o}return n}function js(t,e){function n(r,s){const o=Et(t,s,e);return vt(o!==null),Ls(o,s,t.host,t._protocol)}return n}function It(t){function e(n,r){let s;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?s=Qr():s=Zr():n.getStatus()===402?s=Yr(t.bucket):n.getStatus()===403?s=es(t.path):s=r,s.status=n.getStatus(),s.serverResponse=r.serverResponse,s}return e}function Fs(t){const e=It(t);function n(r,s){let o=e(r,s);return r.getStatus()===404&&(o=Jr(t.path)),o.serverResponse=s.serverResponse,o}return n}function Hs(t,e,n){const r=e.fullServerUrl(),s=Te(r,t.host,t._protocol),o="GET",i=t.maxOperationRetryTime,a=new wt(s,o,js(t,n),i);return a.errorHandler=Fs(e),a}function zs(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function Vs(t,e,n){const r=Object.assign({},n);return r.fullPath=t.path,r.size=e.size(),r.contentType||(r.contentType=zs(null,e)),r}function Ws(t,e,n,r,s){const o=e.bucketOnlyServerUrl(),i={"X-Goog-Upload-Protocol":"multipart"};function a(){let I="";for(let y=0;y<2;y++)I=I+Math.random().toString().slice(2);return I}const c=a();i["Content-Type"]="multipart/related; boundary="+c;const u=Vs(e,r,s),g=Ms(u,n),f="--"+c+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+g+`\r
--`+c+`\r
Content-Type: `+u.contentType+`\r
\r
`,p=`\r
--`+c+"--",E=N.getBlob(f,r,p);if(E===null)throw is();const R={name:u.fullPath},C=Te(o,t.host,t._protocol),w="POST",O=t.maxUploadRetryTime,A=new wt(C,w,$s(t,n),O);return A.urlParams=R,A.headers=i,A.body=E.uploadData(),A.errorHandler=It(e),A}class Gs{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=j.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=j.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=j.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,r,s){if(this.sent_)throw K("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),s!==void 0)for(const o in s)s.hasOwnProperty(o)&&this.xhr_.setRequestHeader(o,s[o].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw K("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw K("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw K("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw K("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class qs extends Gs{initXhr(){this.xhr_.responseType="text"}}function Rt(){return new qs}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H{constructor(e,n){this._service=e,n instanceof T?this._location=n:this._location=T.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new H(e,n)}get root(){const e=new T(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return bt(this._location.path)}get storage(){return this._service}get parent(){const e=xs(this._location.path);if(e===null)return null;const n=new T(this._location.bucket,e);return new H(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw ls(e)}}function Ks(t,e,n){t._throwIfRoot("uploadBytes");const r=Ws(t.storage,t._location,yt(),new N(e,!0),n);return t.storage.makeRequestWithTokens(r,Rt).then(s=>({metadata:s,ref:t}))}function Xs(t){t._throwIfRoot("getDownloadURL");const e=Hs(t.storage,t._location,yt());return t.storage.makeRequestWithTokens(e,Rt).then(n=>{if(n===null)throw as();return n})}function Js(t,e){const n=ks(t._location.path,e),r=new T(t._location.bucket,n);return new H(t.storage,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ys(t){return/^[A-Za-z]+:\/\//.test(t)}function Zs(t,e){return new H(t,e)}function Dt(t,e){if(t instanceof Ae){const n=t;if(n._bucket==null)throw os();const r=new H(n,n._bucket);return e!=null?Dt(r,e):r}else return e!==void 0?Js(t,e):t}function Qs(t,e){if(e&&Ys(e)){if(t instanceof Ae)return Zs(t,e);throw Ee("To use ref(service, url), the first argument must be a Storage instance.")}else return Dt(t,e)}function Ge(t,e){const n=e==null?void 0:e[ht];return n==null?null:T.makeFromBucketSpec(n,t)}function eo(t,e,n,r={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:s}=r;s&&(t._overrideAuthToken=typeof s=="string"?s:On(s,t.app.options.projectId))}class Ae{constructor(e,n,r,s,o){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=s,this._firebaseVersion=o,this._bucket=null,this._host=ut,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=Kr,this._maxUploadRetryTime=Xr,this._requests=new Set,s!=null?this._bucket=T.makeFromBucketSpec(s,this._host):this._bucket=Ge(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=T.makeFromBucketSpec(this._url,e):this._bucket=Ge(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){We("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){We("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new H(this,e)}_makeRequest(e,n,r,s,o=!0){if(this._deleted)return new us(dt());{const i=ws(e,this._appId,r,s,n,this._firebaseVersion,o);return this._requests.add(i),i.getPromise().then(()=>this._requests.delete(i),()=>this._requests.delete(i)),i}}async makeRequestWithTokens(e,n){const[r,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,s).getPromise()}}const qe="@firebase/storage",Ke="0.11.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const St="storage";function to(t,e,n){return t=oe(t),Ks(t,e,n)}function no(t){return t=oe(t),Xs(t)}function ro(t,e){return t=oe(t),Qs(t,e)}function so(t=Ur(),e){t=oe(t);const r=kr(t,St).getImmediate({identifier:e}),s=Tn("storage");return s&&oo(r,...s),r}function oo(t,e,n,r={}){eo(t,e,n,r)}function io(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),s=t.getProvider("app-check-internal");return new Ae(n,r,s,e,Nr)}function ao(){se(new J(St,io,"PUBLIC").setMultipleInstances(!0)),z(qe,Ke,""),z(qe,Ke,"esm2017")}ao();var Tt={},co=function(e,n,r){var s=document.head||document.getElementsByTagName("head")[0],o=document.createElement("script");typeof n=="function"&&(r=n,n={}),n=n||{},r=r||function(){},o.type=n.type||"text/javascript",o.charset=n.charset||"utf8",o.async="async"in n?!!n.async:!0,o.src=e,n.attrs&&lo(o,n.attrs),n.text&&(o.text=""+n.text);var i="onload"in o?Xe:uo;i(o,r),o.onload||Xe(o,r),s.appendChild(o)};function lo(t,e){for(var n in e)t.setAttribute(n,e[n])}function Xe(t,e){t.onload=function(){this.onerror=this.onload=null,e(null,t)},t.onerror=function(){this.onerror=this.onload=null,e(new Error("Failed to load "+this.src),t)}}function uo(t,e){t.onreadystatechange=function(){this.readyState!="complete"&&this.readyState!="loaded"||(this.onreadystatechange=null,e(null,t))}}Object.defineProperty(Tt,"__esModule",{value:!0});var ho=function(){function t(e,n){for(var r=0;r<n.length;r++){var s=n[r];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,s.key,s)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),At=v,Je=Ce(At),fo=nn,P=Ce(fo),po=co,mo=Ce(po);function Ce(t){return t&&t.__esModule?t:{default:t}}function go(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _o(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e&&(typeof e=="object"||typeof e=="function")?e:t}function bo(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var yo="https://www.dropbox.com/static/api/2/dropins.js",Eo="dropboxjs",Ye=!1,Oe=function(t){bo(e,t);function e(n){go(this,e);var r=_o(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,n));return r.onChoose=r.onChoose.bind(r),r}return ho(e,[{key:"componentDidMount",value:function(){!this.isDropboxReady()&&!Ye&&(Ye=!0,(0,mo.default)(yo,{attrs:{id:Eo,"data-app-key":this.props.appKey}}))}},{key:"isDropboxReady",value:function(){return!!window.Dropbox}},{key:"onChoose",value:function(){if(!this.isDropboxReady()||this.props.disabled)return null;var r=this.props,s=r.success,o=r.cancel,i=r.linkType,a=r.multiselect,c=r.extensions;window.Dropbox.choose({success:s,cancel:o,linkType:i,multiselect:a,extensions:c})}},{key:"render",value:function(){return Je.default.createElement("div",{onClick:this.onChoose},this.props.children?this.props.children:Je.default.createElement("button",null,"Open dropbox chooser"))}}]),e}(At.Component);Oe.propTypes={children:P.default.node,appKey:P.default.string.isRequired,success:P.default.func.isRequired,cancel:P.default.func,linkType:P.default.oneOf(["preview","direct"]),multiselect:P.default.bool,extensions:P.default.arrayOf(P.default.string),disabled:P.default.bool};Oe.defaultProps={cancel:function(){},linkType:"preview",multiselect:!1,disabled:!1};var wo=Tt.default=Oe;function vo(t){const e="n9awbdr11ghzl1b";function n(s){fetch(s).then(o=>o.blob()).then(o=>{t.setMainImage([URL.createObjectURL(o)]),t.setStoreMainImage([o])})}function r(s){n(s[0].link)}return l(et,{children:l(wo,{appKey:e,success:r,cancel:()=>console.log("closed"),linkType:"direct",children:l(Jt,{children:m("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 48 48",width:"28px",height:"28px",children:[l("path",{fill:"#1E88E5",d:"M42 13.976L31.377 7.255 24 13.314 35.026 19.732zM6 25.647L16.933 32.055 24 26.633 13.528 19.969zM16.933 7.255L6 14.301 13.528 19.969 24 13.314zM24 26.633L31.209 32.055 42 25.647 35.026 19.732z"}),l("path",{fill:"#1E88E5",d:"M32.195 33.779L31.047 34.462 29.979 33.658 24 29.162 18.155 33.646 17.091 34.464 15.933 33.785 13 32.066 13 34.738 23.988 42 35 34.794 35 32.114z"})]})})})})}const Io={apiKey:{}.VITE_APP_FIREBASE_STORAGE_API_KEY,authDomain:"shop-app-project-366818.firebaseapp.com",projectId:"shop-app-project-366818",storageBucket:"shop-app-project-366818.appspot.com",messagingSenderId:"664782169591",appId:"1:664782169591:web:f166ce89c51f03c541baf2"},Ro=at(Io),Do=so(Ro);function Ze(t){function e(r){if(r.target.files.length>1){t.setMainError(!0);return}const s=r.target.files[0];console.log(`file is ${s}`),console.log([URL.createObjectURL(s)]),console.log(s),t.setMainImage([URL.createObjectURL(s)]),t.setStoreMainImage([s])}function n(r){const s=r.target.files;let o=[],i=[];if(s.length>3){t.setSideError(!0);return}Array.from(s).forEach(a=>{i.push(a),o.push(URL.createObjectURL(a))}),t.setSideImages([...o]),t.setStoreSideImages([...i]),t.setSideError(!1)}return l(pn,{direction:"row",alignItems:"center",spacing:2,children:m(rn,{color:"primary","aria-label":"upload picture",component:"label",children:[t.main=="main"?l("input",{hidden:!0,accept:"image/*",type:"file",onChange:e}):l("input",{hidden:!0,accept:"image/*",type:"file",onChange:n,multiple:!0}),l(tt,{})]})})}function Bo(){const[t,e]=v.useState([]),[n,r]=v.useState([]),[s,o]=v.useState([]),[i,a]=v.useState([]),[c,u]=v.useState([]),[g,f]=v.useState(""),p=S=>{f(S.target.value)},[E,R]=v.useState(!1),[C,w]=v.useState(!1),[O,A]=v.useState(!1);v.useEffect(()=>{},[t]);const I=v.useRef(""),y=v.useRef(""),x=v.useRef(""),M=v.useRef("");function ie(){e([...t,x.current.value]),x.current.value=""}const{handleSubmit:W,formState:{errors:So}}=tn();function Ct(S,G,B){to(S,G).then(xe=>{console.log("Uploaded a blob or file!"),no(S).then(xt=>{const kt={...B,image_url:xt};Pe(A,kt).then(Bt=>{console.log(Bt)})})})}async function Ot(){const S=Math.random();let G=ro(Do,`gs://shop-app-project-366818.appspot.com/images/product/${I.current.value}-main-${S}`),B={name:I.current.value,price:y.current.value,description_short:t.join("#"),description_long:M.current.value,catagory:g};s.length==0?(B={name:I.current.value,price:y.current.value,description_short:t.join("#"),description_long:M.current.value,catagory:g,image_url:n[0]},console.log(B),Pe(A,B).then(xe=>{console.log(xe)})):(console.log("I am here"),console.log(`store main imagine is ${s[0]}`),Ct(G,s[0],B))}return localStorage.getItem("user_status")==="staff"||localStorage.getItem("user_status")===void 0?m(et,{children:[m("div",{className:"App",children:[l("h1",{style:{textAlign:"center"},children:"Upload Or Choose Files to DropBox"}),l("br",{}),l("br",{}),l(h,{container:!0,justifyContent:"center",className:"container"})]}),O?l(h,{container:!0,justifyContent:"center",children:l(Yt,{size:"25rem",sx:{margin:"auto"}})}):l(Zt,{height:"auto",children:l(Qt,{maxWidth:"lg",children:l("form",{onSubmit:W(Ot),children:m(h,{container:!0,height:"150vh",width:1,flexDirection:"column",justifyContent:"space-evenly",alignContent:"center",children:[l(h,{item:!0,fontSize:"50px",textAlign:"center",children:"Create Product"}),m(h,{item:!0,container:!0,flexDirection:"column",width:.2,gap:2,children:[l(h,{item:!0,children:" Product Name"}),l(Z,{id:"outlined-basic",label:"Product Name",variant:"outlined",size:"small",inputRef:I})]}),m(h,{item:!0,container:!0,width:.5,justifyContent:"space-evenly",children:[m(h,{item:!0,container:!0,flexDirection:"column",width:.2,gap:2,children:[l(h,{item:!0,children:" Product Catagory"}),m(en,{label:"Age",onChange:p,children:[l(q,{value:"Bracelet",children:"Bracelet"}),l(q,{value:"Ring",children:"Ring"}),l(q,{value:"Pendant",children:"Pendant"}),l(q,{value:"Earrings",children:"Earrings"}),l(q,{value:"Brooches",children:"Brooches"})]})]}),m(h,{item:!0,container:!0,flexDirection:"column",width:.2,gap:2,children:[l(h,{item:!0,children:" Product Price"}),l(h,{item:!0,children:l(Z,{id:"outlined-basic",label:"Price",variant:"outlined",size:"small",type:"number",InputProps:{inputProps:{step:".01"}},inputRef:y})})]})]}),m(h,{item:!0,container:!0,justifyContent:"space-evenly",width:.5,children:[m(h,{item:!0,container:!0,flexDirection:"column",width:.5,gap:2,children:[l(h,{item:!0,children:"Add Short Description"}),l(h,{item:!0,children:l(Z,{variant:"outlined",size:"small",inputRef:x})}),l(h,{item:!0,children:l(Q,{variant:"contained",onClick:ie,children:"Add"})})]}),l(h,{item:!0,container:!0,width:.5,children:t.map(S=>{const G=t.indexOf(S);let B=[...t];return B.splice(G,1),m(h,{item:!0,container:!0,justifyContent:"space-evenly",children:[l(h,{item:!0,children:S}),l(h,{item:!0,children:l(Q,{variant:"text",size:"small",onClick:()=>{e([...B])},children:"Delete"})})]})})})]}),m(h,{item:!0,container:!0,justifyContent:"space-evenly",width:.5,children:[m(h,{item:!0,container:!0,flexDirection:"column",width:.5,gap:2,children:[m(h,{item:!0,children:["Add ",l("b",{children:"Main"})," Pictures"]}),m(h,{item:!0,container:!0,width:.5,justifyContent:"space-evenly",gap:4,children:[m(h,{item:!0,container:!0,children:[l(h,{item:!0,children:l(Ze,{main:"main",setMainImage:r,setSideImages:a,setMainError:R,setStoreMainImage:o})}),l(h,{item:!0,children:l(vo,{setMainImage:r,setStoreMainImage:o})})]}),l(h,{item:!0,container:!0,children:E?"Error uploading picture!":n.map(S=>l(h,{item:!0,component:"img",src:S,height:"100px",width:"100px"}))})]})]}),l(h,{item:!0,container:!0,width:.5})]}),m(h,{item:!0,container:!0,justifyContent:"space-evenly",width:.5,children:[m(h,{item:!0,container:!0,flexDirection:"column",width:.5,gap:2,children:[m(h,{item:!0,children:["Adding ",l("b",{children:"Side"})," Pictures"]}),l(h,{item:!0,children:l(Ze,{setSideImages:a,setMainImage:r,setSideError:w,setStoreSideImages:u})}),l(h,{item:!0,container:!0,children:C?"Error uploading picture!":i.map(S=>l(h,{item:!0,component:"img",src:S,height:"100px",width:"100px"}))})]}),l(h,{item:!0,container:!0,width:.5})]}),m(h,{item:!0,container:!0,flexDirection:"column",width:.5,gap:2,children:[l(h,{item:!0,children:"Add long Description"}),l(h,{item:!0,children:l(Z,{id:"filled-multiline-flexible",label:"Long description",multiline:!0,rows:5,maxRows:10,fullWidth:!0,size:"big",name:"long_description",inputRef:M})})]}),m(h,{item:!0,container:!0,justifyContent:"space-evenly",width:.5,children:[l(Q,{variant:"contained",onClick:()=>{},children:"Preview"}),l(Q,{variant:"contained",type:"submit",children:"Submit"})]})]})})})})]}):l("div",{children:"Unauthorised"})}export{Bo as default};
