(this["webpackJsonpclass-32-solution-todo"]=this["webpackJsonpclass-32-solution-todo"]||[]).push([[0],{125:function(e,t,n){},150:function(e,t,n){},153:function(e,t,n){"use strict";n.r(t);var c=n(27),a=n(28),s=n(33),i=n(32),r=n(0),l=n.n(r),o=n(11),j=n.n(o),u=n(31),b=n(7),d=n(29),O=n(40),h=n(18),m=n(64),p=n(158),x=n(1),f=l.a.createContext();var g=function(e){var t=Object(r.useState)([]),n=Object(h.a)(t,2),c=n[0],a=n[1],s=Object(r.useState)([]),i=Object(h.a)(s,2),l=i[0],o=i[1],j=Object(r.useState)(!1),u=Object(h.a)(j,2),b=u[0],d=u[1],O=Object(r.useState)(3),g=Object(h.a)(O,2),v=g[0],C=(g[1],Object(r.useState)(1)),P=Object(h.a)(C,2),I=P[0],y=P[1];return Object(r.useEffect)((function(){var e=c.filter((function(e){return!e.complete})).length;o(e),document.title="To Do List: ".concat(l)}),[c]),Object(x.jsx)(f.Provider,{value:{list:c,incomplete:l,addItem:function(e){console.log(e),e.id=Object(p.a)(),e.complete=!1,a([].concat(Object(m.a)(c),[e]))},deleteItem:function(e){var t=c.filter((function(t){return t.id!==e}));a(t)},toggleComplete:function(e){var t=c.map((function(t){return t.id==e&&(t.complete=!t.complete),t}));a(t)},setShowResult:d,showResult:b,postsPerPage:v,currentPage:I,setCurrentPage:y},children:e.children})},v=function(e){var t=Object(r.useContext)(f).setShowResult,n=Object(r.useState)({}),c=Object(h.a)(n,2),a=c[0],s=c[1];return{handleChange:function(e){e.persist(),s((function(t){return Object(O.a)(Object(O.a)({},t),{},Object(d.a)({},e.target.name,e.target.value))}))},handleSubmit:function(n){n&&n.preventDefault(),e(a),t(!0)},values:a}},C=n(157),P=n(17),I=function(e){for(var t=e.postsPerPage,n=e.totalPosts,c=e.paginate,a=[],s=1;s<=Math.ceil(n/t);s++)a.push(s);return Object(x.jsx)("nav",{children:Object(x.jsx)("ul",{className:"pagination",children:a.map((function(e){return Object(x.jsx)("li",{className:"page-item",children:Object(x.jsx)("a",{onClick:function(){return c(e)},className:"page-link",children:e})},e)}))})})},y=(n(125),function(){var e=Object(r.useContext)(f),t=e.addItem,n=e.incomplete,c=e.list,a=e.toggleComplete,s=e.showResult,i=e.setCurrentPage,l=e.currentPage,o=e.postsPerPage,j=(e.deleteItem,v(t)),u=j.handleChange,b=j.handleSubmit,d=l*o,O=d-o,h=c.slice(O,d);return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsxs)("h1",{id:"heading",children:["To Do List Manager: ",n]}),Object(x.jsxs)("div",{className:"line-up",children:[Object(x.jsxs)("div",{className:"form1",children:[Object(x.jsx)(C.c,{children:"Add To Do Item"}),Object(x.jsx)("form",{onSubmit:b,children:Object(x.jsxs)(C.b,{children:[Object(x.jsx)(C.b,{label:"To-Do item",labelInfo:"(required)",required:"true",children:Object(x.jsx)(C.d,{onChange:u,name:"text",placeholder:"Item Details",type:"text",intent:P.a.PRIMARY})}),Object(x.jsx)(C.b,{label:"Assigned To",labelFor:"text-input",labelInfo:"(required)",required:"true",children:Object(x.jsx)(C.d,{onChange:u,name:"assignee",placeholder:"Assignee Name",type:"text",intent:P.a.PRIMARY})}),Object(x.jsx)(C.b,{label:"Difficulty",labelFor:"range",children:Object(x.jsx)("input",{className:"deff",onChange:u,defaultValue:2,type:"range",min:1,max:5,name:"difficulty"})}),Object(x.jsx)(C.b,{children:Object(x.jsx)(C.d,{type:"submit",intent:P.a.DANGER,value:"Add Item"})})]})})]}),s?Object(x.jsxs)("div",{className:"result",children:[h.map((function(e){return Object(x.jsxs)("div",{className:"toDoListItem",children:[Object(x.jsx)("p",{children:e.text}),Object(x.jsx)("p",{children:Object(x.jsxs)("small",{children:["Assigned to: ",e.assignee]})}),Object(x.jsx)("p",{children:Object(x.jsxs)("small",{children:["Difficulty: ",e.difficulty]})}),Object(x.jsxs)("div",{className:"completeStatus",onClick:function(){return a(e.id)},children:["Complete: ",e.complete.toString()]}),Object(x.jsx)("hr",{})]},e.id)})),Object(x.jsx)(I,{postsPerPage:o,totalPosts:c.length,paginate:function(e){return i(e)}})]}):null]})]})}),N=n(23);n(150);var S=function(e){var t=Object(r.useContext)(f).incomplete;return Object(x.jsx)(x.Fragment,{children:Object(x.jsxs)(C.e,{className:"bp3-navbar bp3-dark",children:[Object(x.jsx)(C.e.Group,{children:Object(x.jsxs)(C.e.Heading,{children:["To Do List: ",t," items pending"]})}),Object(x.jsxs)(C.e.Group,{align:N.a.RIGHT,children:[Object(x.jsx)(C.e.Divider,{}),Object(x.jsx)(u.b,{to:"/",children:Object(x.jsx)(C.a,{className:"bp3-minimal",icon:"home",text:"Home"})})]})]})})},D=function(e){Object(s.a)(n,e);var t=Object(i.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(a.a)(n,[{key:"render",value:function(){return Object(x.jsx)(g,{children:Object(x.jsxs)(u.a,{children:[Object(x.jsx)(S,{}),Object(x.jsx)(b.a,{exact:!0,path:"/",children:Object(x.jsx)(y,{})})]})})}}]),n}(l.a.Component),R=function(e){Object(s.a)(n,e);var t=Object(i.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(a.a)(n,[{key:"render",value:function(){return Object(x.jsx)(D,{})}}]),n}(l.a.Component),k=document.getElementById("root");j.a.render(Object(x.jsx)(R,{}),k)}},[[153,1,2]]]);
//# sourceMappingURL=main.901b9e0f.chunk.js.map