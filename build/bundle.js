var app=function(){"use strict";function t(){}function n(t){return t()}function e(){return Object.create(null)}function r(t){t.forEach(n)}function o(t){return"function"==typeof t}function c(t,n){return t!=t?n==n:t!==n||t&&"object"==typeof t||"function"==typeof t}function s(t,n){t.appendChild(n)}function u(t,n,e){t.insertBefore(n,e||null)}function a(t){t.parentNode.removeChild(t)}function l(t){return document.createElement(t)}function i(){return t=" ",document.createTextNode(t);var t}function f(t,n,e){null==e?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}let d;function p(t){d=t}const m=[],h=[],g=[],$=[],y=Promise.resolve();let _=!1;function x(t){g.push(t)}let b=!1;const v=new Set;function w(){if(!b){b=!0;do{for(let t=0;t<m.length;t+=1){const n=m[t];p(n),E(n.$$)}for(m.length=0;h.length;)h.pop()();for(let t=0;t<g.length;t+=1){const n=g[t];v.has(n)||(v.add(n),n())}g.length=0}while(m.length);for(;$.length;)$.pop()();_=!1,b=!1,v.clear()}}function E(t){if(null!==t.fragment){t.update(),r(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(x)}}const k=new Set;function A(t,n){t&&t.i&&(k.delete(t),t.i(n))}function N(t,e,c){const{fragment:s,on_mount:u,on_destroy:a,after_update:l}=t.$$;s&&s.m(e,c),x(()=>{const e=u.map(n).filter(o);a?a.push(...e):r(e),t.$$.on_mount=[]}),l.forEach(x)}function j(t,n){const e=t.$$;null!==e.fragment&&(r(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function C(t,n){-1===t.$$.dirty[0]&&(m.push(t),_||(_=!0,y.then(w)),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function M(n,o,c,s,u,l,i=[-1]){const f=d;p(n);const m=o.props||{},h=n.$$={fragment:null,ctx:null,props:l,update:t,not_equal:u,bound:e(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(f?f.$$.context:[]),callbacks:e(),dirty:i};let g=!1;if(h.ctx=c?c(n,m,(t,e,...r)=>{const o=r.length?r[0]:e;return h.ctx&&u(h.ctx[t],h.ctx[t]=o)&&(h.bound[t]&&h.bound[t](o),g&&C(n,t)),e}):[],h.update(),g=!0,r(h.before_update),h.fragment=!!s&&s(h.ctx),o.target){if(o.hydrate){const t=function(t){return Array.from(t.childNodes)}(o.target);h.fragment&&h.fragment.l(t),t.forEach(a)}else h.fragment&&h.fragment.c();o.intro&&A(n.$$.fragment),N(n,o.target,o.anchor),w()}p(f)}class O{$destroy(){j(this,1),this.$destroy=t}$on(t,n){const e=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return e.push(n),()=>{const t=e.indexOf(n);-1!==t&&e.splice(t,1)}}$set(){}}function S(n){let e;return{c(){e=l("div"),e.innerHTML='<img alt="cmd" class="splash__cmd svelte-710t4n" src="../assets/cmd.svg"> \n  <img alt="+" class="splash__plus svelte-710t4n" src="../assets/plus.svg">\n  V\n',f(e,"class","splash splash--empty svelte-710t4n")},m(t,n){u(t,e,n)},p:t,i:t,o:t,d(t){t&&a(e)}}}class T extends O{constructor(t){super(),M(this,t,null,S,c,{})}}function q(n){let e,r,o,c;const d=new T({});return{c(){var t;e=l("main"),(t=d.$$.fragment)&&t.c(),r=i(),o=l("ul"),f(o,"id","paste-item-list"),f(o,"class","svelte-18r1sxk")},m(t,n){u(t,e,n),N(d,e,null),s(e,r),s(e,o),c=!0},p:t,i(t){c||(A(d.$$.fragment,t),c=!0)},o(t){!function(t,n,e,r){if(t&&t.o){if(k.has(t))return;k.add(t),(void 0).c.push(()=>{k.delete(t),r&&(e&&t.d(1),r())}),t.o(n)}}(d.$$.fragment,t),c=!1},d(t){t&&a(e),j(d)}}}function B(t,n,e){return[[]]}return new class extends O{constructor(t){super(),M(this,t,B,q,c,{items:0})}get items(){return this.$$.ctx[0]}}({target:document.body})}();
//# sourceMappingURL=bundle.js.map
