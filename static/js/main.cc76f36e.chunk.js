(this["webpackJsonpreact_list-of-goods-hooks"]=this["webpackJsonpreact_list-of-goods-hooks"]||[]).push([[0],{14:function(t,e,n){},16:function(t,e,n){"use strict";n.r(e);var s,c=n(7),o=n.n(c),r=n(6),i=n(8),a=n(1),u=(n(13),n(14),n(4)),l=n.n(u),b=n(0);!function(t){t[t.NONE=0]="NONE",t[t.ALPABET=1]="ALPABET",t[t.LENGTH=2]="LENGTH"}(s||(s={}));var d=function(t){var e=Object(a.useState)(s.NONE),n=Object(r.a)(e,2),c=n[0],o=n[1],u=Object(a.useState)(!1),d=Object(r.a)(u,2),j=d[0],h=d[1],N=function(t,e){var n=e.sortType,c=e.isReversed,o=Object(i.a)(t);return o.sort((function(t,e){switch(n){case s.ALPABET:return t.localeCompare(e);case s.LENGTH:return t.length-e.length;default:return 0}})),c&&o.reverse(),o}(t.goods,{sortType:c,isReversed:j});return Object(b.jsxs)("div",{className:"section content",children:[Object(b.jsxs)("div",{className:"buttons",children:[Object(b.jsx)("button",{type:"button",className:l()("button is-info",{"is-light":c!==s.ALPABET}),onClick:function(){return o(s.ALPABET)},children:"Sort alphabetically"}),Object(b.jsx)("button",{type:"button",className:l()("button is-success",{"is-light":c!==s.LENGTH}),onClick:function(){return o(s.LENGTH)},children:"Sort by length"}),Object(b.jsx)("button",{type:"button",className:l()("button is-warning",{"is-light":!1===j}),onClick:function(){return h(!j)},children:"Reverse"}),(j||c!==s.NONE)&&Object(b.jsx)("button",{type:"button",className:"button is-danger is-light",onClick:function(){o(s.NONE),h(!1)},children:"Reset"})]}),Object(b.jsx)("ul",{children:Object(b.jsx)("ul",{children:N.map((function(t){return Object(b.jsx)("li",{"data-cy":"Good",children:t},t)}))})})]})};o.a.render(Object(b.jsx)(d,{goods:["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"]}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.cc76f36e.chunk.js.map