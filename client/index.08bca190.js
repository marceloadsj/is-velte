function t(){}const n=t=>t;function e(t,n){for(const e in n)t[e]=n[e];return t}function o(t){return t()}function r(){return Object.create(null)}function s(t){t.forEach(o)}function i(t){return"function"==typeof t}function c(t,n){return t!=t?n==n:t!==n||t&&"object"==typeof t||"function"==typeof t}function u(t,n,e){if(t){const o=a(t,n,e);return t[0](o)}}function a(t,n,o){return t[1]?e({},e(n.$$scope.ctx,t[1](o?o(n):{}))):n.$$scope.ctx}function f(t,n,o,r){return t[1]?e({},e(n.$$scope.changed||{},t[1](r?r(o):{}))):n.$$scope.changed||{}}function l(t){const n={};for(const e in t)"$"!==e[0]&&(n[e]=t[e]);return n}const d="undefined"!=typeof window;let h=d?()=>window.performance.now():()=>Date.now(),$=d?t=>requestAnimationFrame(t):t;const p=new Set;let m,g=!1;function y(){p.forEach(t=>{t[0](h())||(p.delete(t),t[1]())}),(g=p.size>0)&&$(y)}function b(t,n){t.appendChild(n)}function _(t,n,e){t.insertBefore(n,e||null)}function x(t){t.parentNode.removeChild(t)}function w(t){return document.createElement(t)}function v(t){return document.createTextNode(t)}function E(){return v(" ")}function A(){return v("")}function C(t,n,e){null==e?t.removeAttribute(n):t.setAttribute(n,e)}function k(t,n){for(const e in n)"style"===e?t.style.cssText=n[e]:e in t?t[e]=n[e]:C(t,e,n[e])}function N(t){return Array.from(t.childNodes)}function S(t,n,e,o){for(let o=0;o<t.length;o+=1){const r=t[o];if(r.nodeName===n){for(let t=0;t<r.attributes.length;t+=1){const n=r.attributes[t];e[n.name]||r.removeAttribute(n.name)}return t.splice(o,1)[0]}}return o?function(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}(n):w(n)}function j(t,n){for(let e=0;e<t.length;e+=1){const o=t[e];if(3===o.nodeType)return o.data=n,t.splice(e,1)[0]}return v(n)}function O(t,n){n=""+n,t.data!==n&&(t.data=n)}function R(t,n,e){t.classList[e?"add":"remove"](n)}class T{constructor(t,n=null){this.e=w("div"),this.a=n,this.u(t)}m(t,n=null){for(let e=0;e<this.n.length;e+=1)_(t,this.n[e],n);this.t=t}u(t){this.e.innerHTML=t,this.n=Array.from(this.e.childNodes)}p(t){this.d(),this.u(t),this.m(this.t,this.a)}d(){this.n.forEach(x)}}let q,z=0,F={};function M(t,n,e,o,r,s,i,c=0){const u=16.666/o;let a="{\n";for(let t=0;t<=1;t+=u){const o=n+(e-n)*s(t);a+=100*t+`%{${i(o,1-o)}}\n`}const f=a+`100% {${i(e,1-e)}}\n}`,l=`__svelte_${function(t){let n=5381,e=t.length;for(;e--;)n=(n<<5)-n^t.charCodeAt(e);return n>>>0}(f)}_${c}`;if(!F[l]){if(!m){const t=w("style");document.head.appendChild(t),m=t.sheet}F[l]=!0,m.insertRule(`@keyframes ${l} ${f}`,m.cssRules.length)}const d=t.style.animation||"";return t.style.animation=`${d?`${d}, `:""}${l} ${o}ms linear ${r}ms 1 both`,z+=1,l}function P(t,n){t.style.animation=(t.style.animation||"").split(", ").filter(n?t=>t.indexOf(n)<0:t=>-1===t.indexOf("__svelte")).join(", "),n&&!--z&&$(()=>{if(z)return;let t=m.cssRules.length;for(;t--;)m.deleteRule(t);F={}})}function B(t){q=t}function D(){if(!q)throw new Error("Function called outside component initialization");return q}function H(t){D().$$.on_mount.push(t)}function L(t,n){D().$$.context.set(t,n)}const G=[],I=[],J=[],K=[],Q=Promise.resolve();let U,V=!1;function W(t){J.push(t)}function X(){const t=new Set;do{for(;G.length;){const t=G.shift();B(t),Y(t.$$)}for(;I.length;)I.pop()();for(let n=0;n<J.length;n+=1){const e=J[n];t.has(e)||(e(),t.add(e))}J.length=0}while(G.length);for(;K.length;)K.pop()();V=!1}function Y(t){t.fragment&&(t.update(t.dirty),s(t.before_update),t.fragment.p(t.dirty,t.ctx),t.dirty=null,t.after_update.forEach(W))}function Z(t,n,e){t.dispatchEvent(function(t,n){const e=document.createEvent("CustomEvent");return e.initCustomEvent(t,!1,!1,n),e}(`${n?"intro":"outro"}${e}`))}const tt=new Set;let nt;function et(){nt={r:0,c:[],p:nt}}function ot(){nt.r||s(nt.c),nt=nt.p}function rt(t,n){t&&t.i&&(tt.delete(t),t.i(n))}function st(t,n,e,o){if(t&&t.o){if(tt.has(t))return;tt.add(t),nt.c.push(()=>{tt.delete(t),o&&(e&&t.d(1),o())}),t.o(n)}}const it={duration:0};function ct(e,o,r,c){let u=o(e,r),a=c?0:1,f=null,l=null,d=null;function m(){d&&P(e,d)}function b(t,n){const e=t.b-a;return n*=Math.abs(e),{a:a,b:t.b,d:e,duration:n,start:t.start,end:t.start+n,group:t.group}}function _(o){const{delay:r=0,duration:i=300,easing:c=n,tick:_=t,css:x}=u||it,w={start:h()+r,b:o};o||(w.group=nt,nt.r+=1),f?l=w:(x&&(m(),d=M(e,a,o,i,r,c,x)),o&&_(0,1),f=b(w,i),W(()=>Z(e,o,"start")),function(t){let n;g||(g=!0,$(y)),new Promise(e=>{p.add(n=[t,e])})}(t=>{if(l&&t>l.start&&(f=b(l,i),l=null,Z(e,f.b,"start"),x&&(m(),d=M(e,a,f.b,f.duration,0,c,u.css))),f)if(t>=f.end)_(a=f.b,1-a),Z(e,f.b,"end"),l||(f.b?m():--f.group.r||s(f.group.c)),f=null;else if(t>=f.start){const n=t-f.start;a=f.a+f.d*c(n/f.duration),_(a,1-a)}return!(!f&&!l)}))}return{run(t){i(u)?(U||(U=Promise.resolve()).then(()=>{U=null}),U).then(()=>{u=u(),_(t)}):_(t)},end(){m(),f=l=null}}}function ut(t,n){const e={},o={},r={$$scope:1};let s=t.length;for(;s--;){const i=t[s],c=n[s];if(c){for(const t in i)t in c||(o[t]=1);for(const t in c)r[t]||(e[t]=c[t],r[t]=1);t[s]=c}else for(const t in i)r[t]=1}for(const t in o)t in e||(e[t]=void 0);return e}function at(t,n,e){const{fragment:r,on_mount:c,on_destroy:u,after_update:a}=t.$$;r.m(n,e),W(()=>{const n=c.map(o).filter(i);u?u.push(...n):s(n),t.$$.on_mount=[]}),a.forEach(W)}function ft(t,n){t.$$.fragment&&(s(t.$$.on_destroy),t.$$.fragment.d(n),t.$$.on_destroy=t.$$.fragment=null,t.$$.ctx={})}function lt(t,n){t.$$.dirty||(G.push(t),V||(V=!0,Q.then(X)),t.$$.dirty=r()),t.$$.dirty[n]=!0}function dt(n,e,o,i,c,u){const a=q;B(n);const f=e.props||{},l=n.$$={fragment:null,ctx:null,props:u,update:t,not_equal:c,bound:r(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(a?a.$$.context:[]),callbacks:r(),dirty:null};let d=!1;l.ctx=o?o(n,f,(t,e)=>{l.ctx&&c(l.ctx[t],l.ctx[t]=e)&&(l.bound[t]&&l.bound[t](e),d&&lt(n,t))}):f,l.update(),d=!0,s(l.before_update),l.fragment=i(l.ctx),e.target&&(e.hydrate?l.fragment.l(N(e.target)):l.fragment.c(),e.intro&&rt(n.$$.fragment),at(n,e.target,e.anchor),X()),B(a)}class ht{$destroy(){ft(this,1),this.$destroy=t}$on(t,n){const e=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return e.push(n),()=>{const t=e.indexOf(n);-1!==t&&e.splice(t,1)}}$set(){}}export{ot as A,k as B,l as C,R as D,W as E,ct as F,H as G,T as H,ht as S,E as a,j as b,u as c,_ as d,a as e,st as f,f as g,x as h,dt as i,w as j,v as k,S as l,N as m,t as n,b as o,O as p,A as q,C as r,c as s,rt as t,e as u,at as v,ut as w,ft as x,L as y,et as z};
