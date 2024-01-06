"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[840],{1840:function(t,e,n){n.r(e),n.d(e,{default:function(){return w}});var a=n(2791),r=n(9439),s="ContactForm_formContact__CkY07",o="ContactForm_formName__9bHzl",c="ContactForm_formNumber__UMrmC",i="ContactForm_buttonAdd__Mr+ls",u=function(){for(var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:21,e="",n=crypto.getRandomValues(new Uint8Array(t));t--;){var a=63&n[t];e+=a<36?a.toString(36):a<62?(a-26).toString(36).toUpperCase():a<63?"_":"-"}return e},l=n(4420),m=n(6351),d=n(3929),f=n(3329);function _(){var t=(0,a.useState)(""),e=(0,r.Z)(t,2),n=e[0],_=e[1],h=(0,a.useState)(""),p=(0,r.Z)(h,2),b=p[0],C=p[1],v=(0,l.v9)(m.Af),x=(0,l.I0)(),j=function(t){var e=t.target,n=e.name,a=e.value;switch(n){case"name":_(a);break;case"number":C(a)}};return(0,f.jsxs)("form",{onSubmit:function(t){t.preventDefault();var e;e={name:n,number:b},v.some((function(t){return t.name.toLowerCase()===n.toLowerCase()}))?alert("Oops, ".concat(e.name," is already in contacts!")):x((0,d.uK)({name:n,number:b,id:u()})),_(""),C("")},className:s,children:[(0,f.jsxs)("label",{children:[(0,f.jsx)("span",{children:"Name"}),(0,f.jsx)("input",{className:o,type:"text",name:"name",value:n,onChange:j,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})]}),(0,f.jsxs)("label",{children:[(0,f.jsx)("span",{children:"Number"}),(0,f.jsx)("input",{className:c,type:"tel",name:"number",value:b,onChange:j,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0})]}),(0,f.jsx)("button",{type:"submit",className:i,children:"Add contact"})]})}var h=n(6895),p={contactsContainer:"Filter_contactsContainer__+m7aw",inputFilter:"Filter_inputFilter__8QMOp"};function b(){var t=(0,l.v9)((function(t){return t.filter.filter})),e=(0,l.I0)();return(0,f.jsxs)("div",{className:p.contactsContainer,children:[(0,f.jsx)("p",{className:p.text,children:"Find contacts by name"}),(0,f.jsx)("input",{className:p.inputFilter,type:"text",name:"filter",value:t,onChange:function(t){var n=t.target.value;e((0,h.KJ)(n))}})]})}var C="ContactList_contactList__UFVCg",v={item:"ContactListItem_item__UAAix",buttonDelete:"ContactListItem_buttonDelete__965SC"};function x(t){var e=t.name,n=t.number,a=t.buttonId,r=(0,l.I0)();return(0,f.jsx)("ul",{className:v.list,children:(0,f.jsxs)("li",{className:v.item,children:[e,": ",(0,f.jsx)("span",{children:n}),(0,f.jsx)("button",{id:a,onClick:function(t){r((0,d._f)(t.target.id))},className:v.buttonDelete,children:"Delete"})]})})}function j(){var t=(0,l.I0)();(0,a.useEffect)((function(){t((0,d.K2)())}),[t]);var e=(0,l.v9)(m.sR);return(0,f.jsx)("ul",{className:C,children:e.map((function(t){var e=t.id,n=t.name,a=t.number;return(0,f.jsx)(x,{name:n,number:a,buttonId:e},e)}))})}var N=n(7689),g="ContactsPage_phonebook__WuvDn",k="ContactsPage_contacts__soBmU";function w(){return(0,f.jsxs)("div",{children:[(0,f.jsx)("h1",{className:g,children:"Phonebook"}),(0,f.jsx)(_,{}),(0,f.jsx)("h2",{className:k,children:"Contacts"}),(0,f.jsx)(b,{}),(0,f.jsx)(j,{}),(0,f.jsx)(N.j3,{})]})}},6351:function(t,e,n){n.d(e,{Af:function(){return r},I_:function(){return o},rK:function(){return s},sR:function(){return c}});var a=n(3553),r=function(t){return t.contacts.items},s=function(t){return t.auth.token},o=function(t){return t.auth.email},c=(0,a.P1)([r,function(t){return t.filter}],(function(t,e){return t.filter((function(t){return t.name.toLowerCase().trim().includes(e.toLowerCase())}))}))}}]);
//# sourceMappingURL=840.12ff1ff3.chunk.js.map