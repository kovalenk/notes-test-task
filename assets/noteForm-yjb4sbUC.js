import{u as v,C as de,l as x,D as fe,q as P,E as S,G as _,g as $e,s as h,H as ve,I as ge,J as k,K as B,z as M}from"./index-sAas1uJV.js";import"./notes-qao2onLe.js";const Te=(e,a)=>{const n=e[a];let t=!1;return n&&(t=n.$invalid&&!n.$pending&&n.$dirty),{error:t}},Se=e=>(e.$touch(),e.$invalid),Q=e=>{if(e=v(e),Array.isArray(e))return!!e.length;if(e==null)return!1;if(e===!1)return!0;if(e instanceof Date)return!isNaN(e.getTime());if(typeof e=="object"){for(let a in e)return!0;return!1}return!!String(e).length};function C(){for(var e=arguments.length,a=new Array(e),n=0;n<e;n++)a[n]=arguments[n];return t=>(t=v(t),!Q(t)||a.every(s=>(s.lastIndex=0,s.test(t))))}C(/^[a-zA-Z]*$/);C(/^[a-zA-Z0-9]*$/);C(/^\d*(\.\d+)?$/);const me=/^(?:[A-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[A-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9]{2,}(?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/i;C(me);function he(e){return typeof e=="string"&&(e=e.trim()),Q(e)}var pe={$validator:he,$message:"Value is required",$params:{type:"required"}};const ye=/^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z0-9\u00a1-\uffff][a-z0-9\u00a1-\uffff_-]{0,62})?[a-z0-9\u00a1-\uffff]\.)+(?:[a-z\u00a1-\uffff]{2,}\.?))(?::\d{2,5})?(?:[/?#]\S*)?$/i;C(ye);C(/(^[0-9]*$)|(^-[0-9]+$)/);C(/^[-]?\d*(\.\d+)?$/);function H(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter(function(s){return Object.getOwnPropertyDescriptor(e,s).enumerable})),n.push.apply(n,t)}return n}function E(e){for(var a=1;a<arguments.length;a++){var n=arguments[a]!=null?arguments[a]:{};a%2?H(Object(n),!0).forEach(function(t){Re(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):H(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function Re(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function W(e){let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[];return Object.keys(e).reduce((n,t)=>(a.includes(t)||(n[t]=v(e[t])),n),{})}function V(e){return typeof e=="function"}function xe(e){return ve(e)||ge(e)}function X(e,a,n){let t=e;const s=a.split(".");for(let u=0;u<s.length;u++){if(!t[s[u]])return n;t=t[s[u]]}return t}function T(e,a,n){return h(()=>e.some(t=>X(a,t,{[n]:!1})[n]))}function Z(e,a,n){return h(()=>e.reduce((t,s)=>{const u=X(a,s,{[n]:!1})[n]||[];return t.concat(u)},[]))}function Y(e,a,n,t){return e.call(t,v(a),v(n),t)}function ee(e){return e.$valid!==void 0?!e.$valid:!e}function Oe(e,a,n,t,s,u,m){let{$lazy:o,$rewardEarly:d}=s,l=arguments.length>7&&arguments[7]!==void 0?arguments[7]:[],$=arguments.length>8?arguments[8]:void 0,f=arguments.length>9?arguments[9]:void 0,p=arguments.length>10?arguments[10]:void 0;const g=x(!!t.value),r=x(0);n.value=!1;const c=P([a,t].concat(l,p),()=>{if(o&&!t.value||d&&!f.value&&!n.value)return;let i;try{i=Y(e,a,$,m)}catch(y){i=Promise.reject(y)}r.value++,n.value=!!r.value,g.value=!1,Promise.resolve(i).then(y=>{r.value--,n.value=!!r.value,u.value=y,g.value=ee(y)}).catch(y=>{r.value--,n.value=!!r.value,u.value=y,g.value=!0})},{immediate:!0,deep:typeof a=="object"});return{$invalid:g,$unwatch:c}}function Ee(e,a,n,t,s,u,m,o){let{$lazy:d,$rewardEarly:l}=t;const $=()=>({}),f=h(()=>{if(d&&!n.value||l&&!o.value)return!1;let p=!0;try{const g=Y(e,a,m,u);s.value=g,p=ee(g)}catch(g){s.value=g}return p});return{$unwatch:$,$invalid:f}}function be(e,a,n,t,s,u,m,o,d,l,$){const f=x(!1),p=e.$params||{},g=x(null);let r,c;e.$async?{$invalid:r,$unwatch:c}=Oe(e.$validator,a,f,n,t,g,s,e.$watchTargets,d,l,$):{$invalid:r,$unwatch:c}=Ee(e.$validator,a,n,t,g,s,d,l);const i=e.$message;return{$message:V(i)?h(()=>i(W({$pending:f,$invalid:r,$params:W(p),$model:a,$response:g,$validator:u,$propertyPath:o,$property:m}))):i||"",$params:p,$pending:f,$invalid:r,$response:g,$unwatch:c}}function we(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const a=v(e),n=Object.keys(a),t={},s={},u={};let m=null;return n.forEach(o=>{const d=a[o];switch(!0){case V(d.$validator):t[o]=d;break;case V(d):t[o]={$validator:d};break;case o==="$validationGroups":m=d;break;case o.startsWith("$"):u[o]=d;break;default:s[o]=d}}),{rules:t,nestedValidators:s,config:u,validationGroups:m}}const Ce="__root";function Pe(e,a,n,t,s,u,m,o,d){const l=Object.keys(e),$=t.get(s,e),f=x(!1),p=x(!1),g=x(0);if($){if(!$.$partial)return $;$.$unwatch(),f.value=$.$dirty.value}const r={$dirty:f,$path:s,$touch:()=>{f.value||(f.value=!0)},$reset:()=>{f.value&&(f.value=!1)},$commit:()=>{}};return l.length?(l.forEach(c=>{r[c]=be(e[c],a,r.$dirty,u,m,c,n,s,d,p,g)}),r.$externalResults=h(()=>o.value?[].concat(o.value).map((c,i)=>({$propertyPath:s,$property:n,$validator:"$externalResults",$uid:`${s}-externalResult-${i}`,$message:c,$params:{},$response:null,$pending:!1})):[]),r.$invalid=h(()=>{const c=l.some(i=>v(r[i].$invalid));return p.value=c,!!r.$externalResults.value.length||c}),r.$pending=h(()=>l.some(c=>v(r[c].$pending))),r.$error=h(()=>r.$dirty.value?r.$pending.value||r.$invalid.value:!1),r.$silentErrors=h(()=>l.filter(c=>v(r[c].$invalid)).map(c=>{const i=r[c];return _({$propertyPath:s,$property:n,$validator:c,$uid:`${s}-${c}`,$message:i.$message,$params:i.$params,$response:i.$response,$pending:i.$pending})}).concat(r.$externalResults.value)),r.$errors=h(()=>r.$dirty.value?r.$silentErrors.value:[]),r.$unwatch=()=>l.forEach(c=>{r[c].$unwatch()}),r.$commit=()=>{p.value=!0,g.value=Date.now()},t.set(s,e,r),r):($&&t.set(s,e,r),r)}function je(e,a,n,t,s,u,m){const o=Object.keys(e);return o.length?o.reduce((d,l)=>(d[l]=D({validations:e[l],state:a,key:l,parentKey:n,resultsCache:t,globalConfig:s,instance:u,externalResults:m}),d),{}):{}}function Ve(e,a,n){const t=h(()=>[a,n].filter(r=>r).reduce((r,c)=>r.concat(Object.values(v(c))),[])),s=h({get(){return e.$dirty.value||(t.value.length?t.value.every(r=>r.$dirty):!1)},set(r){e.$dirty.value=r}}),u=h(()=>{const r=v(e.$silentErrors)||[],c=t.value.filter(i=>(v(i).$silentErrors||[]).length).reduce((i,y)=>i.concat(...y.$silentErrors),[]);return r.concat(c)}),m=h(()=>{const r=v(e.$errors)||[],c=t.value.filter(i=>(v(i).$errors||[]).length).reduce((i,y)=>i.concat(...y.$errors),[]);return r.concat(c)}),o=h(()=>t.value.some(r=>r.$invalid)||v(e.$invalid)||!1),d=h(()=>t.value.some(r=>v(r.$pending))||v(e.$pending)||!1),l=h(()=>t.value.some(r=>r.$dirty)||t.value.some(r=>r.$anyDirty)||s.value),$=h(()=>s.value?d.value||o.value:!1),f=()=>{e.$touch(),t.value.forEach(r=>{r.$touch()})},p=()=>{e.$commit(),t.value.forEach(r=>{r.$commit()})},g=()=>{e.$reset(),t.value.forEach(r=>{r.$reset()})};return t.value.length&&t.value.every(r=>r.$dirty)&&f(),{$dirty:s,$errors:m,$invalid:o,$anyDirty:l,$error:$,$pending:d,$touch:f,$reset:g,$silentErrors:u,$commit:p}}function D(e){let{validations:a,state:n,key:t,parentKey:s,childResults:u,resultsCache:m,globalConfig:o={},instance:d,externalResults:l}=e;const $=s?`${s}.${t}`:t,{rules:f,nestedValidators:p,config:g,validationGroups:r}=we(a),c=E(E({},o),g),i=t?h(()=>{const R=v(n);return R?v(R[t]):void 0}):n,y=E({},v(l)||{}),F=h(()=>{const R=v(l);return t?R?v(R[t]):void 0:R}),N=Pe(f,i,t,m,$,c,d,F,n),b=je(p,i,$,m,c,d,F),G={};r&&Object.entries(r).forEach(R=>{let[w,O]=R;G[w]={$invalid:T(O,b,"$invalid"),$error:T(O,b,"$error"),$pending:T(O,b,"$pending"),$errors:Z(O,b,"$errors"),$silentErrors:Z(O,b,"$silentErrors")}});const{$dirty:z,$errors:ne,$invalid:L,$anyDirty:re,$error:ae,$pending:A,$touch:I,$reset:se,$silentErrors:le,$commit:q}=Ve(N,b,u),ue=t?h({get:()=>v(i),set:R=>{z.value=!0;const w=v(n),O=v(l);O&&(O[t]=y[t]),S(w[t])?w[t].value=R:w[t]=R}}):null;t&&c.$autoDirty&&P(i,()=>{z.value||I();const R=v(l);R&&(R[t]=y[t])},{flush:"sync"});async function ie(){return I(),c.$rewardEarly&&(q(),await M()),await M(),new Promise(R=>{if(!A.value)return R(!L.value);const w=P(A,()=>{R(!L.value),w()})})}function oe(R){return(u.value||{})[R]}function ce(){S(l)?l.value=y:Object.keys(y).length===0?Object.keys(l).forEach(R=>{delete l[R]}):Object.assign(l,y)}return _(E(E(E({},N),{},{$model:ue,$dirty:z,$error:ae,$errors:ne,$invalid:L,$anyDirty:re,$pending:A,$touch:I,$reset:se,$path:$||Ce,$silentErrors:le,$validate:ie,$commit:q},u&&{$getResultsForChild:oe,$clearExternalResults:ce,$validationGroups:G}),b))}class _e{constructor(){this.storage=new Map}set(a,n,t){this.storage.set(a,{rules:n,result:t})}checkRulesValidity(a,n,t){const s=Object.keys(t),u=Object.keys(n);return u.length!==s.length||!u.every(o=>s.includes(o))?!1:u.every(o=>n[o].$params?Object.keys(n[o].$params).every(d=>v(t[o].$params[d])===v(n[o].$params[d])):!0)}get(a,n){const t=this.storage.get(a);if(!t)return;const{rules:s,result:u}=t,m=this.checkRulesValidity(a,n,s),o=u.$unwatch?u.$unwatch:()=>({});return m?u:{$dirty:u.$dirty,$partial:!0,$unwatch:o}}}const j={COLLECT_ALL:!0,COLLECT_NONE:!1},J=Symbol("vuelidate#injectChildResults"),K=Symbol("vuelidate#removeChildResults");function ze(e){let{$scope:a,instance:n}=e;const t={},s=x([]),u=h(()=>s.value.reduce(($,f)=>($[f]=v(t[f]),$),{}));function m($,f){let{$registerAs:p,$scope:g,$stopPropagation:r}=f;r||a===j.COLLECT_NONE||g===j.COLLECT_NONE||a!==j.COLLECT_ALL&&a!==g||(t[p]=$,s.value.push(p))}n.__vuelidateInjectInstances=[].concat(n.__vuelidateInjectInstances||[],m);function o($){s.value=s.value.filter(f=>f!==$),delete t[$]}n.__vuelidateRemoveInstances=[].concat(n.__vuelidateRemoveInstances||[],o);const d=k(J,[]);B(J,n.__vuelidateInjectInstances);const l=k(K,[]);return B(K,n.__vuelidateRemoveInstances),{childResults:u,sendValidationResultsToParent:d,removeValidationResultsFromParent:l}}function te(e){return new Proxy(e,{get(a,n){return typeof a[n]=="object"?te(a[n]):h(()=>a[n])}})}let U=0;function Le(e,a){var n;let t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};arguments.length===1&&(t=e,e=void 0,a=void 0);let{$registerAs:s,$scope:u=j.COLLECT_ALL,$stopPropagation:m,$externalResults:o,currentVueInstance:d}=t;const l=d||((n=de())===null||n===void 0?void 0:n.proxy),$=l?l.$options:{};s||(U+=1,s=`_vuelidate_${U}`);const f=x({}),p=new _e,{childResults:g,sendValidationResultsToParent:r,removeValidationResultsFromParent:c}=l?ze({$scope:u,instance:l}):{childResults:x({})};if(!e&&$.validations){const i=$.validations;a=x({}),fe(()=>{a.value=l,P(()=>V(i)?i.call(a.value,new te(a.value)):i,y=>{f.value=D({validations:y,state:a,childResults:g,resultsCache:p,globalConfig:t,instance:l,externalResults:o||l.vuelidateExternalResults})},{immediate:!0})}),t=$.validationsConfig||t}else{const i=S(e)||xe(e)?e:_(e||{});P(i,y=>{f.value=D({validations:y,state:a,childResults:g,resultsCache:p,globalConfig:t,instance:l??{},externalResults:o})},{immediate:!0})}return l&&(r.forEach(i=>i(f,{$registerAs:s,$scope:u,$stopPropagation:m})),$e(()=>c.forEach(i=>i(s)))),h(()=>E(E({},v(f.value)),g.value))}const De=()=>{const e=_({text:""}),a=x({text:{required:pe}}),n=Le(a,e);return{form:e,$v:n}};export{Se as c,Te as g,De as u};
