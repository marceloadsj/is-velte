function t(){}function n(t,n){for(const e in n)t[e]=n[e];return t}function e(t){return t()}function o(){return Object.create(null)}function r(t){t.forEach(e)}function s(t){return"function"==typeof t}function c(t,n){return t!=t?n==n:t!==n||t&&"object"==typeof t||"function"==typeof t}function i(t,n,e){if(t){const o=u(t,n,e);return t[0](o)}}function u(t,e,o){return t[1]?n({},n(e.$$scope.ctx,t[1](o?o(e):{}))):e.$$scope.ctx}function a(t,e,o,r){return t[1]?n({},n(e.$$scope.changed||{},t[1](r?r(o):{}))):e.$$scope.changed||{}}function f(t){const n={};for(const e in t)"$"!==e[0]&&(n[e]=t[e]);return n}function l(t,n){t.appendChild(n)}function d(t,n,e){t.insertBefore(n,e||null)}function h(t){t.parentNode.removeChild(t)}function $(t){return document.createElement(t)}function p(t){return document.createTextNode(t)}function m(){return p(" ")}function g(){return p("")}function y(t,n,e){null==e?t.removeAttribute(n):t.setAttribute(n,e)}function x(t,n){for(const e in n)"style"===e?t.style.cssText=n[e]:e in t?t[e]=n[e]:y(t,e,n[e])}function b(t){return Array.from(t.childNodes)}function _(t,n,e,o){for(let o=0;o<t.length;o+=1){const r=t[o];if(r.nodeName===n){for(let t=0;t<r.attributes.length;t+=1){const n=r.attributes[t];e[n.name]||r.removeAttribute(n.name)}return t.splice(o,1)[0]}}return o?function(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}(n):$(n)}function w(t,n){for(let e=0;e<t.length;e+=1){const o=t[e];if(3===o.nodeType)return o.data=n,t.splice(e,1)[0]}return p(n)}function v(t,n){n=""+n,t.data!==n&&(t.data=n)}function E(t,n,e){t.classList[e?"add":"remove"](n)}class A{constructor(t,n=null){this.e=$("div"),this.a=n,this.u(t)}m(t,n=null){for(let e=0;e<this.n.length;e+=1)d(t,this.n[e],n);this.t=t}u(t){this.e.innerHTML=t,this.n=Array.from(this.e.childNodes)}p(t){this.d(),this.u(t),this.m(this.t,this.a)}d(){this.n.forEach(h)}}let N;function k(t){N=t}function S(t,n){(function(){if(!N)throw new Error("Function called outside component initialization");return N})().$$.context.set(t,n)}const T=[],j=[],C=[],q=[],z=Promise.resolve();let B=!1;function H(t){C.push(t)}function L(){const t=new Set;do{for(;T.length;){const t=T.shift();k(t),M(t.$$)}for(;j.length;)j.pop()();for(let n=0;n<C.length;n+=1){const e=C[n];t.has(e)||(e(),t.add(e))}C.length=0}while(T.length);for(;q.length;)q.pop()();B=!1}function M(t){t.fragment&&(t.update(t.dirty),r(t.before_update),t.fragment.p(t.dirty,t.ctx),t.dirty=null,t.after_update.forEach(H))}const O=new Set;let D;function F(){D={r:0,c:[],p:D}}function P(){D.r||r(D.c),D=D.p}function G(t,n){t&&t.i&&(O.delete(t),t.i(n))}function I(t,n,e,o){if(t&&t.o){if(O.has(t))return;O.add(t),D.c.push(()=>{O.delete(t),o&&(e&&t.d(1),o())}),t.o(n)}}function J(t,n){const e={},o={},r={$$scope:1};let s=t.length;for(;s--;){const c=t[s],i=n[s];if(i){for(const t in c)t in i||(o[t]=1);for(const t in i)r[t]||(e[t]=i[t],r[t]=1);t[s]=i}else for(const t in c)r[t]=1}for(const t in o)t in e||(e[t]=void 0);return e}function K(t,n,o){const{fragment:c,on_mount:i,on_destroy:u,after_update:a}=t.$$;c.m(n,o),H(()=>{const n=i.map(e).filter(s);u?u.push(...n):r(n),t.$$.on_mount=[]}),a.forEach(H)}function Q(t,n){t.$$.fragment&&(r(t.$$.on_destroy),t.$$.fragment.d(n),t.$$.on_destroy=t.$$.fragment=null,t.$$.ctx={})}function R(t,n){t.$$.dirty||(T.push(t),B||(B=!0,z.then(L)),t.$$.dirty=o()),t.$$.dirty[n]=!0}function U(n,e,s,c,i,u){const a=N;k(n);const f=e.props||{},l=n.$$={fragment:null,ctx:null,props:u,update:t,not_equal:i,bound:o(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(a?a.$$.context:[]),callbacks:o(),dirty:null};let d=!1;l.ctx=s?s(n,f,(t,e)=>{l.ctx&&i(l.ctx[t],l.ctx[t]=e)&&(l.bound[t]&&l.bound[t](e),d&&R(n,t))}):f,l.update(),d=!0,r(l.before_update),l.fragment=c(l.ctx),e.target&&(e.hydrate?l.fragment.l(b(e.target)):l.fragment.c(),e.intro&&G(n.$$.fragment),K(n,e.target,e.anchor),L()),k(a)}class V{$destroy(){Q(this,1),this.$destroy=t}$on(t,n){const e=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return e.push(n),()=>{const t=e.indexOf(n);-1!==t&&e.splice(t,1)}}$set(){}}export{P as A,x as B,f as C,E as D,A as H,V as S,m as a,w as b,i as c,d,u as e,I as f,a as g,h,U as i,$ as j,p as k,_ as l,b as m,t as n,l as o,v as p,g as q,y as r,c as s,G as t,n as u,K as v,J as w,Q as x,S as y,F as z};
