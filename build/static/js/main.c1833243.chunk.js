(this["webpackJsonpnotes-frontend"]=this["webpackJsonpnotes-frontend"]||[]).push([[0],{41:function(t,n,e){"use strict";e.r(n);var r=e(0),c=e(16),o=e.n(c),a=e(7),i=e(4),u=e(2),s=function(t){var n=t.note,e=t.toggleImportance,c=n.important?"make not important":"make important";return Object(r.jsxs)("li",{children:[n.content,Object(r.jsx)("button",{onClick:e,children:c})]})},f=e(3),j=e.n(f),d="/api/notes",b=function(){return j.a.get(d).then((function(t){return t.data}))},l=function(t){return j.a.post(d,t).then((function(t){return t.data}))},h=function(t,n){return j.a.put("".concat(d,"/").concat(t),n).then((function(t){return t.data}))},p=function(){var t=Object(u.useState)([]),n=Object(i.a)(t,2),e=n[0],c=n[1],o=Object(u.useState)("a new note..."),f=Object(i.a)(o,2),j=f[0],d=f[1],p=Object(u.useState)(!0),O=Object(i.a)(p,2),m=O[0],v=O[1];Object(u.useEffect)((function(){b().then((function(t){return c(t)}))}),[]);var x=m?e:e.filter((function(t){return!0===t.important}));return Object(r.jsxs)("div",{children:[Object(r.jsx)("h1",{children:"Notes"}),Object(r.jsx)("div",{children:Object(r.jsxs)("button",{onClick:function(){return v(!m)},children:["show ",m?"important":"all"]})}),Object(r.jsx)("ul",{children:x.map((function(t){return Object(r.jsx)(s,{note:t,toggleImportance:function(){return function(t){var n=e.find((function(n){return n.id===t})),r=Object(a.a)(Object(a.a)({},n),{},{important:!n.important});h(t,r).then((function(n){c(e.map((function(e){return e.id!==t?e:n})))})).catch((function(r){alert("the note '".concat(n.content,"' was already deleted from server")),c(e.filter((function(n){return n.id!==t})))}))}(t.id)}},t.id)}))}),Object(r.jsxs)("form",{onSubmit:function(t){t.preventDefault();var n={content:j,date:(new Date).toISOString(),important:Math.random()<.5};l(n).then((function(t){c(e.concat(t)),d("")}))},children:[Object(r.jsx)("input",{value:j,onChange:function(t){return d(t.target.value)}}),Object(r.jsx)("button",{type:"submit",children:"save"})]})]})};o.a.render(Object(r.jsx)(p,{}),document.getElementById("root"))}},[[41,1,2]]]);
//# sourceMappingURL=main.c1833243.chunk.js.map