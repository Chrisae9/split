(this.webpackJsonpsplit=this.webpackJsonpsplit||[]).push([[0],{100:function(t,e,n){"use strict";n.r(e);var c=n(1),r=n(0),o=n.n(r),a=n(15),i=n.n(a),s=(n(56),n(57),n(12)),d=n(14),u=n(30);n(58);function l(){return Object(c.jsx)("div",{children:Object(c.jsx)("h1",{className:"text-center",children:"Split"})})}var j=n(103);var b=n(106),O=n(19),h=n.n(O),x=n(105);function p(t){var e=t.contributors,n=t.setContributors,o=t.dispatch,a=Object(r.useState)(""),i=Object(s.a)(a,2),d=i[0],l=i[1],O=Object(r.useRef)();var p={onClick:function(t,e,c){n((function(t){return t.filter((function(t){return t.id!==e.id}))})),o({type:R.REMOVE_CONTRIBUTOR,payload:{contributor:e}})}};return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsxs)(j.a,{onSubmit:function(t){t.preventDefault(),n((function(t){return[{id:Object(x.a)(),name:d}].concat(Object(u.a)(t))})),l(""),O.current.focus()},children:[Object(c.jsx)(j.a.Group,{controlId:"receiptContributor",children:Object(c.jsx)(j.a.Control,{type:"text",placeholder:"Contributor",value:d,ref:O,onChange:function(t){return l(t.target.value)}})}),Object(c.jsx)(j.a.Group,{controlId:"receiptAddContributor",children:Object(c.jsx)(b.a,{type:"submit",variant:"secondary",children:"Add"})})]}),Object(c.jsx)(h.a,{keyField:"id",data:e,columns:[{dataField:"id",hidden:!0},{dataField:"name",text:"Contributors List",sort:!0}],rowEvents:p,hover:!0,condensed:!0})]})}var f=n(46),m=n.n(f);function T(t){var e=t.items,n=t.dispatch,o=[{dataField:"id",hidden:!0},{dataField:"name",text:"Name",sort:!0},{dataField:"cost",text:"Cost",sort:!0,formatter:function(t,e){return Object(c.jsxs)(c.Fragment,{children:["$",t]})}},{dataField:"selected",text:"Selected",hidden:!0},{dataField:"contributors",text:"Contributors ",formatter:function(t,e){return t.map((function(e,n){return n<t.length-1?e.name+", ":e.name}))}}];var a=Object(r.useState)(""),i=Object(s.a)(a,2),d=i[0],u=i[1],l=Object(r.useState)(""),O=Object(s.a)(l,2),x=O[0],p=O[1],f=Object(r.useState)(""),T=Object(s.a)(f,2),E=T[0],v=T[1],y=Object(r.useRef)(),C={onClick:function(t,e,c){n({type:R.DELETE_ITEM,payload:{id:e.id}})}};Object(r.useEffect)((function(){var t=0;e.forEach((function(e){t+=parseFloat(e.cost)||0})),v(t)}),[e]);var F={mode:"checkbox",onSelect:function(t,e,c,r){n({type:R.TOGGLE_ITEM,payload:{id:t.id}})},onSelectAll:function(t,e,c){n({type:R.TOGGLE_ITEMS,payload:{selected:t}})}};return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(h.a,{keyField:"id",data:e,columns:o,rowEvents:C,selectRow:F,striped:!0,hover:!0,condensed:!0}),Object(c.jsxs)("h4",{children:["Total = $",parseFloat(E).toFixed(2)]}),Object(c.jsxs)(j.a,{onSubmit:function(t){t.preventDefault(),n({type:R.ADD_ITEM,payload:{name:d,cost:parseFloat(x).toFixed(2)}}),u(""),y.current.focus(),p("")},children:[Object(c.jsx)(j.a.Group,{controlId:"itemName",children:Object(c.jsx)(j.a.Control,{type:"text",placeholder:"Item",value:d,ref:y,onChange:function(t){return u(t.target.value)}})}),Object(c.jsx)(j.a.Group,{controlId:"itemCost",children:Object(c.jsx)(m.a,{placeholder:"$0.00",allowDecimals:!0,decimalsLimit:2,prefix:"$",className:"form-control",value:x,onChange:function(t){return p(t)}})}),Object(c.jsx)(j.a.Group,{controlId:"formSubmit",children:Object(c.jsx)(b.a,{type:"submit",variant:"secondary",children:"Add Item"})})]})]})}var E=n(107),v=n(104),y=n(48),C=n(102);function F(t){var e=t.contributors,n=t.items,o=Object(r.useState)(!1),a=Object(s.a)(o,2),i=a[0],d=a[1],u=function(){return d(!1)};return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(b.a,{variant:"dark",onClick:function(){d(!0)},children:"Split"}),Object(c.jsxs)(C.a,{show:i,onHide:u,size:"lg",children:[Object(c.jsx)(C.a.Header,{closeButton:!0,children:Object(c.jsx)(C.a.Title,{children:"Split Bill "})}),Object(c.jsxs)(C.a.Body,{children:[e.map((function(t){var e=0;return Object(c.jsxs)(E.a,{children:[Object(c.jsxs)(E.a.Body,{children:[Object(c.jsx)(E.a.Title,{children:t.name}),Object(c.jsx)(E.a.Text,{children:Object(c.jsx)(v.a,{children:n.map((function(n){if(n.contributors.includes(t)){var r=parseFloat(n.cost)/n.contributors.length;return e+=r,Object(c.jsxs)(y.a,{children:[n.name,": $",r.toFixed(2)]},n.id)}}))})})]}),Object(c.jsxs)(E.a.Footer,{children:["$",e.toFixed(2)]})]})})),function(){var t=0;return Object(c.jsxs)(E.a,{children:[Object(c.jsxs)(E.a.Body,{children:[Object(c.jsx)(E.a.Title,{children:"Remaining"}),Object(c.jsx)(E.a.Text,{children:Object(c.jsx)(v.a,{children:n.map((function(e){if(0===e.contributors.length)return t+=parseFloat(e.cost),Object(c.jsxs)(y.a,{children:[e.name,": $",e.cost]},e.id)}))})})]}),Object(c.jsxs)(E.a.Footer,{children:["$",t.toFixed(2)]})]})}()]}),Object(c.jsx)(C.a.Footer,{children:Object(c.jsx)(b.a,{variant:"secondary",onClick:u,children:"Done"})})]})]})}function I(t){var e=t.contributors,n=t.dispatch;function o(t){p(t),u(!0)}var a=Object(r.useState)(!1),i=Object(s.a)(a,2),d=i[0],u=i[1],l=Object(r.useState)(R.ADD_CONTRIBUTOR),O=Object(s.a)(l,2),x=O[0],p=O[1],f=function(){return u(!1)},m={onClick:function(t,e,c){n({type:x,payload:{contributor:e}}),f()}};return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsxs)(C.a,{show:d,onHide:f,children:[Object(c.jsx)(C.a.Header,{closeButton:!0,children:Object(c.jsx)(C.a.Title,{children:"Select Contributor "})}),Object(c.jsx)(C.a.Body,{children:Object(c.jsx)(h.a,{keyField:"id",data:e,columns:[{dataField:"id",hidden:!0},{dataField:"name",text:"Name",headerAttrs:{hidden:!0}}],rowEvents:m,hover:!0,condensed:!0})}),Object(c.jsx)(C.a.Footer,{children:Object(c.jsx)(b.a,{variant:"secondary",onClick:f,children:"Close"})})]}),Object(c.jsx)(j.a.Group,{controlId:"contributorAdd",children:Object(c.jsx)(b.a,{type:"submit",onClick:function(){return o(R.ADD_CONTRIBUTOR)},variant:"secondary",children:"Assign"})}),Object(c.jsx)(j.a.Group,{controlId:"contributorDelete",children:Object(c.jsx)(b.a,{type:"submit",onClick:function(){return o(R.DELETE_CONTRIBUTOR)},variant:"danger",children:"Remove"})})]})}var R={ADD_ITEM:"add-item",DELETE_ITEM:"delete-item",TOGGLE_ITEM:"toggle-item",TOGGLE_ITEMS:"toggle-items",ADD_CONTRIBUTOR:"add-contributor",DELETE_CONTRIBUTOR:"delete-contributor",REMOVE_CONTRIBUTOR:"remove-contributor"};function g(t,e){switch(e.type){case R.ADD_ITEM:return[].concat(Object(u.a)(t),[(n=e.payload.name,c=e.payload.cost,{id:Object(x.a)(),name:n,cost:c,selected:!1,contributors:[]})]);case R.TOGGLE_ITEM:return t.map((function(t){return t.id===e.payload.id?Object(d.a)(Object(d.a)({},t),{},{selected:!t.selected}):t}));case R.TOGGLE_ITEMS:return t.map((function(t){return Object(d.a)(Object(d.a)({},t),{},{selected:e.payload.selected})}));case R.DELETE_ITEM:return t.filter((function(t){return t.id!==e.payload.id}));case R.ADD_CONTRIBUTOR:return t.map((function(t){return t.selected&&!t.contributors.includes(e.payload.contributor)?Object(d.a)(Object(d.a)({},t),{},{contributors:t.contributors.concat(e.payload.contributor)}):t}));case R.REMOVE_CONTRIBUTOR:return t.map((function(t){return t.contributors.includes(e.payload.contributor)?Object(d.a)(Object(d.a)({},t),{},{contributors:t.contributors.filter((function(t){return t!==e.payload.contributor}))}):t}));case R.DELETE_CONTRIBUTOR:return t.map((function(t){return t.selected&&t.contributors.includes(e.payload.contributor)?Object(d.a)(Object(d.a)({},t),{},{contributors:t.contributors.filter((function(t){return t!==e.payload.contributor}))}):t}));default:return t}var n,c}var D=function(){var t=Object(r.useState)([]),e=Object(s.a)(t,2),n=e[0],o=e[1],a=Object(r.useReducer)(g,[]),i=Object(s.a)(a,2),d=i[0],u=i[1];return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(l,{}),Object(c.jsx)(E.a,{className:"col-11 mx-auto",children:Object(c.jsxs)(E.a.Body,{children:[Object(c.jsx)(p,{contributors:n,setContributors:function(t){return o(t)},dispatch:u}),Object(c.jsx)(I,{contributors:n,dispatch:u}),Object(c.jsx)(T,{items:d,dispatch:u}),Object(c.jsx)(F,{contributors:n,items:d})]})})]})},S=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,108)).then((function(e){var n=e.getCLS,c=e.getFID,r=e.getFCP,o=e.getLCP,a=e.getTTFB;n(t),c(t),r(t),o(t),a(t)}))};i.a.render(Object(c.jsx)(o.a.StrictMode,{children:Object(c.jsx)(D,{})}),document.getElementById("root")),S()},57:function(t,e,n){},58:function(t,e,n){}},[[100,1,2]]]);
//# sourceMappingURL=main.0b50b09a.chunk.js.map