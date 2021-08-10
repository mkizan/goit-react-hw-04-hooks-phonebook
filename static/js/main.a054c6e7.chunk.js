(this["webpackJsonpgoit-react-hw-03-phonebook"]=this["webpackJsonpgoit-react-hw-03-phonebook"]||[]).push([[0],{11:function(t,e,n){t.exports={Container:"Container_Container__11SY1"}},19:function(t,e,n){"use strict";n.r(e);var a=n(1),c=n.n(a),o=n(10),r=n.n(o),s=n(12),i=n(3),l=n(13),u=n(11),b=n.n(u),m=n(0),_=function(t){var e=t.children;return Object(m.jsx)("div",{className:b.a.Container,children:e})},j=n(2),f=n.n(j);function d(t){var e=Object(a.useState)(""),n=Object(i.a)(e,2),c=n[0],o=n[1],r=Object(a.useState)(""),s=Object(i.a)(r,2),l=s[0],u=s[1];return Object(m.jsxs)("form",{className:f.a.form,onSubmit:function(e){if(e.preventDefault(),t.contacts.find((function(t){return t.name.toLowerCase()===c.toLowerCase()})))return alert("".concat(c," is already in contacts"));t.onSubmit({name:c,number:l}),o(""),u("")},children:[Object(m.jsxs)("label",{className:f.a.label,children:["Name",Object(m.jsx)("input",{type:"text",className:f.a.input,name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",value:c,onChange:function(t){o(t.target.value)},title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",placeholder:"Enter your name",autoComplete:"off",required:!0})]}),Object(m.jsxs)("label",{className:f.a.label,children:["Number",Object(m.jsx)("input",{type:"tel",className:f.a.input,name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",value:l,onChange:function(t){u(t.target.value)},title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",placeholder:"Enter your phone number",autoComplete:"on",required:!0})]}),Object(m.jsx)("button",{type:"submit",className:f.a.btn,children:"Add contact"})]})}var p=n(8),h=n.n(p),O=function(t){var e=t.value,n=t.onChange;return Object(m.jsxs)("label",{className:h.a.label,children:["Find contacts by name",Object(m.jsx)("input",{type:"text",className:h.a.input,value:e,onChange:n,placeholder:"Find your contact",autoComplete:"off"})]})},C=n(6),x=n.n(C),g=function(t){return Object(m.jsx)("ul",{className:x.a.list,children:t.contacts.map((function(e){var n=e.name,a=e.number,c=e.id;return Object(m.jsxs)("li",{className:x.a.list__item,children:[n,": ",a,Object(m.jsx)("button",{type:"button",className:x.a.btn,onClick:function(){return t.onDeleteContacts(c)},children:"Delete"})]},c)}))})},N=n(9),v=n.n(N);function y(){var t=Object(a.useState)([]),e=Object(i.a)(t,2),n=e[0],c=e[1],o=Object(a.useState)(""),r=Object(i.a)(o,2),u=r[0],b=r[1];Object(a.useEffect)((function(){var t=localStorage.getItem("contacts"),e=JSON.parse(t);e&&c(e)}),[]),Object(a.useEffect)((function(){localStorage.setItem("contacts",JSON.stringify(n))}),[n]);return Object(m.jsxs)(_,{children:[Object(m.jsx)("h1",{className:v.a.title__phonebook,children:"Phonebook"}),Object(m.jsx)(d,{onSubmit:function(t){t.id=Object(l.a)(),c((function(e){return[].concat(Object(s.a)(e),[t])}))},contacts:n}),Object(m.jsx)("h2",{className:v.a.title__contacts,children:"Contacts"}),Object(m.jsx)(O,{value:u,onChange:function(t){b(t.target.value)}}),Object(m.jsx)(g,{contacts:function(){if(n)return console.log(n),n.filter((function(t){return t.name.toLowerCase().includes(u.toLowerCase())}))}(),onDeleteContacts:function(t){c((function(e){return e.filter((function(e){return e.id!==t}))}))}})]})}r.a.render(Object(m.jsx)(c.a.StrictMode,{children:Object(m.jsx)(y,{})}),document.getElementById("root"))},2:function(t,e,n){t.exports={form:"ContactForm_form__1NiH1",label:"ContactForm_label__3KgVy",input:"ContactForm_input__3emgF",btn:"ContactForm_btn__1BmbG"}},6:function(t,e,n){t.exports={list:"ContactList_list__3wSXY",list__item:"ContactList_list__item__29IJl",btn:"ContactList_btn__LjK5L"}},8:function(t,e,n){t.exports={label:"Filter_label__2pNgv",input:"Filter_input__YmgBH"}},9:function(t,e,n){t.exports={title__phonebook:"style_title__phonebook__3aFT2",title__contacts:"style_title__contacts__2HUDu"}}},[[19,1,2]]]);
//# sourceMappingURL=main.a054c6e7.chunk.js.map