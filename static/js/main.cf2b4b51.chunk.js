(this["webpackJsonpreact_add-todo-form"]=this["webpackJsonpreact_add-todo-form"]||[]).push([[0],{15:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var a=n(9),i=n.n(a),r=n(7),c=n(1),o=n(5),s=(n(15),n(2)),l=[{id:1,title:"delectus aut autem",completed:!0,userId:1},{id:15,title:"some other todo",completed:!1,userId:1},{id:2,title:"quis ut nam facilis et officia qui",completed:!1,userId:4}],d=[{id:1,name:"Leanne Graham",username:"Bret",email:"Sincere@april.biz"},{id:2,name:"Ervin Howell",username:"Antonette",email:"Shanna@melissa.tv"},{id:3,name:"Clementine Bauch",username:"Samantha",email:"Nathan@yesenia.net"},{id:4,name:"Patricia Lebsack",username:"Karianne",email:"Julianne.OConner@kory.org"},{id:5,name:"Chelsey Dietrich",username:"Kamren",email:"Lucio_Hettinger@annie.ca"},{id:6,name:"Mrs. Dennis Schulist",username:"Leopoldo_Corkery",email:"Karley_Dach@jasper.info"},{id:7,name:"Kurtis Weissnat",username:"Elwyn.Skiles",email:"Telly.Hoeger@billy.biz"},{id:8,name:"Nicholas Runolfsdottir V",username:"Maxime_Nienow",email:"Sherwood@rosamond.me"},{id:9,name:"Glenna Reichert",username:"Delphine",email:"Chaim_McDermott@dana.io"},{id:10,name:"Clementina DuBuque",username:"Moriah.Stanton",email:"Rey.Padberg@karina.biz"}],u=n(10),m=n.n(u),j=n(0),b=function(e){var t=e.user;return Object(j.jsx)(j.Fragment,{children:t&&Object(j.jsx)("a",{className:"UserInfo",href:"mailto:".concat(null===t||void 0===t?void 0:t.email),children:null===t||void 0===t?void 0:t.name})})};var h=function(e){var t,n=e.todo,a=(t=n.userId,d.find((function(e){return e.id===t}))||null);return Object(j.jsxs)("article",{"data-id":n.id,className:m()("TodoInfo",{"TodoInfo--completed":n.completed}),children:[Object(j.jsx)("h2",{className:"TodoInfo__title",children:n.title}),Object(j.jsx)(b,{user:a})]})},O=function(e){var t=e.todos;return Object(j.jsx)("section",{className:"TodoList",children:t.map((function(e){return Object(j.jsx)(h,{todo:e},e.id)}))})},f=n(4),p={title:"",userId:0},v={title:!1,userId:!1},x=function(e){var t=e.onAdd,n=void 0===t?function(){}:t,a=e.users,i=Object(s.useState)(p),r=Object(o.a)(i,2),l=r[0],d=r[1],u=Object(s.useState)(v),m=Object(o.a)(u,2),b=m[0],h=m[1],O=function(e){var t=e.target,n=t.name,a=t.value,i="userId"===n?+a:a;d((function(e){return Object(c.a)(Object(c.a)({},e),{},Object(f.a)({},n,i))})),h((function(e){return Object(c.a)(Object(c.a)({},e),{},Object(f.a)({},n,!i))}))};return Object(j.jsxs)("form",{action:"/api/todos",method:"POST",onSubmit:function(e){e.preventDefault(),h((function(){return{title:!l.title.trim(),userId:!l.userId}})),d((function(e){return Object(c.a)(Object(c.a)({},e),{},{title:e.title.trim()})})),l.title.trim()&&l.userId&&(n(Object(c.a)({},l)),d(p),h(v))},children:[Object(j.jsxs)("div",{className:"field",children:["Title: ",Object(j.jsx)("input",{type:"text","data-cy":"titleInput",value:l.title,placeholder:"Enter title",onChange:O,onBlur:function(){d((function(e){return Object(c.a)(Object(c.a)({},e),{},{title:e.title.trim()})}))},name:"title"}),b.title&&Object(j.jsx)("span",{className:"error",children:"Please enter a title"})]}),Object(j.jsxs)("div",{className:"field",children:["User: ",Object(j.jsxs)("select",{"data-cy":"userSelect",value:l.userId,onChange:O,name:"userId",children:[Object(j.jsx)("option",{value:"0",defaultChecked:!0,children:"Choose a user"}),a.map((function(e){return Object(j.jsx)("option",{value:e.id,children:e.name},e.id)}))]}),b.userId&&Object(j.jsx)("span",{className:"error",children:"Please choose a user"})]}),Object(j.jsx)("button",{type:"submit","data-cy":"submitButton",children:"Add"})]})};function I(e){return Math.max.apply(Math,Object(r.a)(e.map((function(e){return e.id}))))+1}var y=function(){var e=Object(s.useState)(l),t=Object(o.a)(e,2),n=t[0],a=t[1];return Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)("h1",{children:"Add todo form"}),Object(j.jsx)(x,{onAdd:function(e){var t=Object(c.a)(Object(c.a)({},e),{},{id:I(n),completed:!1});a((function(e){return[].concat(Object(r.a)(e),[t])}))},users:d}),Object(j.jsx)(O,{todos:n})]})};i.a.render(Object(j.jsx)(y,{}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.cf2b4b51.chunk.js.map