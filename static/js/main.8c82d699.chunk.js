(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{103:function(e,t,a){e.exports=a(183)},120:function(e,t,a){},174:function(e,t,a){},175:function(e,t,a){},176:function(e,t,a){},177:function(e,t,a){},178:function(e,t,a){},179:function(e,t,a){},180:function(e,t,a){},182:function(e,t,a){},183:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(30),o=a.n(c),s=a(16),l=a(18),i=a(7),u=a(12),m=a(13),p=a(14),d=a(15),f=a(19),E=a(185),h=a(186),v=a(187),b=a(201),O=a(188),k=a(189),S=function(e){var t=Object(n.useState)(!1),a=Object(f.a)(t,2),c=a[0],o=a[1];return r.a.createElement("header",{className:"App-header"},r.a.createElement(E.a,{dark:!0,color:"dark",expand:"md"},r.a.createElement(h.a,{href:"/"},e.title),r.a.createElement(v.a,{onClick:function(){return o(!c)}}),r.a.createElement(b.a,{isOpen:c,navbar:!0},r.a.createElement(O.a,{className:"mr-auto",navbar:!0},r.a.createElement(k.a,null,r.a.createElement(s.b,{className:"nav-link",to:"/"},"Home")),r.a.createElement(k.a,null,r.a.createElement(s.b,{className:"nav-link",to:"/todo"},"Todo")),r.a.createElement(k.a,null,r.a.createElement(s.b,{className:"nav-link",to:"/about"},"About")),r.a.createElement(k.a,null,r.a.createElement(s.b,{className:"nav-link",to:"/contact"},"Contact")),r.a.createElement(k.a,null,r.a.createElement(s.b,{className:"nav-link",to:"/posts"},"New Post"))),r.a.createElement(O.a,{navbar:!0},r.a.createElement(k.a,null,r.a.createElement(s.b,{className:"nav-link",to:"/login"},"Login"))))))},g=function(e){var t=e.children;return r.a.createElement("main",null,t)},j=function(){return r.a.createElement("footer",null,"\xa9 Chris ",(new Date).getFullYear()," ")},T=(a(120),function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(u.a)(this,a),(n=t.call(this,e)).columns=[["BTC",3e3,6e3,1e4,15e3,13e3,11e3],["ETH",2e3,3e3,5e4,4e3,3e3,940],["XRP",100,200,300,500,400,300]],n}return Object(m.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(S,{title:"Bienvenidos a React"}),r.a.createElement(g,null,this.props.children),r.a.createElement(j,null))}}]),a}(n.Component)),w=a(10),y=a(6),C=a.n(y),P=a(9),x=a(21),N=function(e){return{type:e}},_=function(e,t){return{type:e,payload:t}},R=function(e){return{type:e}},D=a(100),F=a.n(D).a.create({baseURL:"".concat("https://my-json-server.typicode.com/cmtp/curso-react-app"),withCredentials:!1,headers:{Accept:"application/json","Content-Type":"application/json"}}),U={getPosts:function(){var e=Object(P.a)(C.a.mark((function e(){var t,a,n,r=arguments;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=r.length>0&&void 0!==r[0]?r[0]:10,a=r.length>1&&void 0!==r[1]?r[1]:0,e.next=4,F.get("".concat("/posts","?_limit=").concat(t,"&_page=").concat(a));case 4:if(!(n=e.sent).error){e.next=7;break}throw new Error("an error occurred");case 7:return e.abrupt("return",n);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),getPost:function(){var e=Object(P.a)(C.a.mark((function e(t){var a;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,F.get("".concat("/posts","/").concat(t));case 2:if(!(a=e.sent).error){e.next=5;break}throw new Error("an error occurred");case 5:return e.abrupt("return",a);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),addPost:function(){var e=Object(P.a)(C.a.mark((function e(t){var a;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,F.post("".concat("/posts"),t);case 2:if(!(a=e.sent).error){e.next=5;break}throw new Error("an error occurred");case 5:return e.abrupt("return",a);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),updatePost:function(){var e=Object(P.a)(C.a.mark((function e(t){var a;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,F.put("".concat("/posts","/").concat(t.id),t);case 2:if(!(a=e.sent).error){e.next=5;break}throw new Error("an error occurred");case 5:return e.abrupt("return",a);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),deletePost:function(){var e=Object(P.a)(C.a.mark((function e(t){var a;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,F.delete("".concat("/posts","/").concat(t));case 2:if(!(a=e.sent).error){e.next=5;break}throw new Error("an error occurred");case 5:return e.abrupt("return",a);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},A=function(e,t){return function(){var a=Object(P.a)(C.a.mark((function a(n){var r;return C.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return n(N("FETCH_POSTS_REQUEST")),a.prev=1,a.next=4,U.getPosts(e,t);case 4:r=a.sent,n(_("FETCH_POSTS_SUCCESS",r.data)),a.next=12;break;case 8:a.prev=8,a.t0=a.catch(1),n(R("FETCH_POSTS_ERROR")),console.log("AXIOS_ERROR",a.t0.response);case 12:case"end":return a.stop()}}),a,null,[[1,8]])})));return function(e){return a.apply(this,arguments)}}()},B=function(e){return function(){var t=Object(P.a)(C.a.mark((function t(a){var n;return C.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a(N("FETCH_POST_REQUEST")),t.prev=1,t.next=4,U.getPost(e);case 4:n=t.sent,a(_("FETCH_POST_SUCCESS",n.data)),t.next=12;break;case 8:t.prev=8,t.t0=t.catch(1),a(R("FETCH_POST_ERROR")),console.log("AXIOS_ERROR",t.t0.response);case 12:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e){return t.apply(this,arguments)}}()},L=function(e){return function(){var t=Object(P.a)(C.a.mark((function t(a){var n;return C.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a(N("ADD_POST_REQUEST")),t.prev=1,t.next=4,U.addPost(e);case 4:n=t.sent,a(_("ADD_POST_SUCCESS",n.data)),t.next=12;break;case 8:t.prev=8,t.t0=t.catch(1),a(R("ADD_POST_ERROR")),console.log("AXIOS_ERROR",t.t0.response);case 12:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e){return t.apply(this,arguments)}}()},I=function(e){return function(){var t=Object(P.a)(C.a.mark((function t(a){var n;return C.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a(N("UPDATE_POST_REQUEST")),t.prev=1,t.next=4,U.updatePost(e);case 4:n=t.sent,a(_("UPDATE_POST_SUCCESS",n.data)),t.next=12;break;case 8:t.prev=8,t.t0=t.catch(1),a(R("UPDATE_POST_ERROR")),console.log("AXIOS_ERROR:",t.t0.response);case 12:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e){return t.apply(this,arguments)}}()},H=function(e){return function(){var t=Object(P.a)(C.a.mark((function t(a){var n;return C.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a(N("DELETE_POST_REQUEST")),t.prev=1,t.next=4,U.deletePost(e);case 4:n=t.sent,a(_("DELETE_POST_SUCCESS",n.data)),t.next=12;break;case 8:t.prev=8,t.t0=t.catch(1),a(R("DELETE_POST_ERROR")),console.log("AXIOS_ERROR:",t.t0.response);case 12:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e){return t.apply(this,arguments)}}()},z=function(){return function(e){e(x.actions.reset("postForm"))}},q=(a(174),a(190)),M=a(191),W=a(192),X=a(193),Q=a(194),J=a(195),G=function(e){var t=e.post;return r.a.createElement("div",{className:"HomeListItem"},r.a.createElement(q.a,null,r.a.createElement(M.a,{top:!0,width:"100%",src:"https://picsum.photos/200/150",alt:"Card image cap"}),r.a.createElement(W.a,null,r.a.createElement(X.a,null,t.title),r.a.createElement(Q.a,null,"Juan Perez"),r.a.createElement(J.a,{className:"description"},t.description),r.a.createElement(s.b,{className:"btn btn-primary",to:"/post/".concat(t.id)},"Go to Article"))))},Y=a(36);function $(e,t){return Object(Y.a)({},e,{},t)}a(175);var K=function(e){var t,a=e.posts;return r.a.createElement(r.a.Fragment,null,(t=a)&&0!==t.length&&0!==Object.keys(t).length?r.a.createElement("div",{className:"HomeList"},a.map((function(e){return r.a.createElement(G,{post:e,key:e.id})}))):r.a.createElement("div",null,"There is no Posts."))},V=(a(176),function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"componentDidMount",value:function(){(0,this.props.fetchPosts)()}},{key:"render",value:function(){var e=this.props.posts;return r.a.createElement("div",{className:"Home"},r.a.createElement("h1",null,"Posts Recientes"),r.a.createElement(K,{posts:e}))}}]),a}(n.Component)),Z=Object(l.connect)((function(e){return{posts:e.post.posts}}),(function(e){return Object(w.bindActionCreators)({fetchPosts:A},e)}))(V),ee=(a(177),function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(){var e;return Object(u.a)(this,a),(e=t.call(this)).setDefaultTime=function(){e.setState({time:e.times.defaultTime})},e.setTimeForWork=function(){return e.setState({alert:{type:"work",message:"Working!"}}),e.setTime(e.times.defaultTime)},e.setTimeForShortBreak=function(){return e.setState({alert:{type:"shortBreak",message:"Taking a short Break!"}}),e.setTime(e.times.shortBreak)},e.setTimeForLongBreak=function(){return e.setState({alert:{type:"longBreak",message:"Taking a Long Break!"}}),e.setTime(e.times.longBreak)},e.setTime=function(t){e.restartInterval(),e.setState({time:t})},e.restartInterval=function(){clearInterval(e.interval),e.interval=setInterval(e.countDown,1e3)},e.countDown=function(){0===e.state.time?e.setState({alert:{type:"buz",message:"Buzzzzzzz!"}}):e.setState((function(e){return{time:e.time-1}}))},e.displayTimer=function(e){var t=Math.floor(e%3600/60),a=Math.floor(e%3600%60);return"".concat(t<10?"0":"").concat(t,":").concat(a<10?"0":"").concat(a)},e.state={alert:{type:"",message:""},time:0},e.times={defaultTime:1500,shortBreak:300,longBreak:900},e}return Object(m.a)(a,[{key:"componentDidMount",value:function(){this.setDefaultTime()}},{key:"render",value:function(){var e=this.state,t=e.alert,a=t.message,n=t.type,c=e.time;return r.a.createElement("div",{className:"Pomodoro"},r.a.createElement("div",{className:"alert ".concat(n)},a),r.a.createElement("div",{className:"timer"},this.displayTimer(c)),r.a.createElement("div",{className:"types"},r.a.createElement("button",{type:"button",className:"start",onClick:this.setTimeForWork},"Start Working"),r.a.createElement("button",{type:"button",className:"short",onClick:this.setTimeForShortBreak},"Short Break"),r.a.createElement("button",{type:"button",className:"long",onClick:this.setTimeForLongBreak},"Long Break")))}}]),a}(n.Component)),te=a(43),ae=a(55),ne=a(202),re=function(e){return r.a.createElement("div",{className:"List"},r.a.createElement("h2",null,"Lista de tareas"),r.a.createElement("ul",null,e.items.map((function(t,a){return r.a.createElement("li",{key:a,className:"".concat(t.completed?"completed":"pending")},r.a.createElement("span",null,t.task),r.a.createElement("div",{className:"actions"},r.a.createElement("button",{type:"button",className:t.completed?"hide":"done",onClick:function(){return e.markAsCompleted(t.id)}},"Completar"),r.a.createElement("button",{type:"button",className:"trash",onClick:function(){return e.removeTask(t.id)}},"Remover")))}))))},ce=(a(178),function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(){var e;return Object(u.a)(this,a),(e=t.call(this)).handleOnSubmit=function(t){t.preventDefault(),e.setState((function(e){return{task:"",items:[].concat(Object(te.a)(e.items),[{id:Object(ne.a)(),task:e.task,completed:!1}])}}))},e.markAsCompleted=function(t){e.state.items.find((function(e){return e.id===t})).completed=!0,e.setState((function(e){return{items:Object(te.a)(e.items)}}))},e.removeTask=function(t){var a=e.state.items.filter((function(e){return e.id!==t}));e.setState({items:a})},e.state={task:"",items:[]},e.handleOnChange=e.handleOnChange.bind(Object(ae.a)(e)),e}return Object(m.a)(a,[{key:"componentDidMount",value:function(){this.setState({items:[{id:Object(ne.a)(),task:"Pagar la renta",completed:!1},{id:Object(ne.a)(),task:"Ir de Compras",completed:!1},{id:Object(ne.a)(),task:"Reunion a las 7",completed:!1}]})}},{key:"handleOnChange",value:function(e){var t=e.target.value;this.setState({task:t})}},{key:"render",value:function(){return r.a.createElement("div",{className:"Todo"},r.a.createElement("h1",null,"New Task"),r.a.createElement("form",{onSubmit:this.handleOnSubmit},r.a.createElement("input",{type:"text",value:this.state.task,onChange:this.handleOnChange})),r.a.createElement(re,{items:this.state.items,markAsCompleted:this.markAsCompleted,removeTask:this.removeTask}))}}]),a}(n.Component)),oe=function(){return r.a.createElement("h1",null,"About")},se=a(198),le=a(199),ie=a(200),ue=a(196),me=a(197),pe=function(e){return function(t){Object(d.a)(n,t);var a=Object(p.a)(n);function n(){return Object(u.a)(this,n),a.apply(this,arguments)}return Object(m.a)(n,[{key:"render",value:function(){return r.a.createElement(ue.a,null,r.a.createElement(me.a,{for:this.props.id},this.props.label),r.a.createElement(e,this.props))}}]),n}(n.Component)},de=pe((function(){return r.a.createElement(se.a,{placeholder:"First Name",id:"firstname"})})),fe=pe((function(){return r.a.createElement(se.a,{placeholder:"Last Name",id:"lastname"})})),Ee=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"Contact"),r.a.createElement(le.a,null,r.a.createElement(de,{label:"First Name",id:"firstname"}),r.a.createElement(fe,{label:"Last name",id:"lastname"}),r.a.createElement(ie.a,null,"Submit")))},he=function(){return r.a.createElement("h1",null,"Login")},ve=function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Error 404 - Content Not Found"))},be=(a(179),function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"componentDidMount",value:function(){var e=this.props,t=e.match.params.id,a=e.fetchPost;t&&a(t)}},{key:"render",value:function(){var e=this.props.post;return e?r.a.createElement("div",{className:"Post"},r.a.createElement("h1",null,"Post ",e.title),r.a.createElement("img",{src:"https://picsum.photos/1024/500",alt:"banner"}),r.a.createElement("p",null,e.description)):r.a.createElement("div",null,r.a.createElement("h1",null,"There is no post for this id."))}}]),a}(n.Component)),Oe=Object(l.connect)((function(e){return{post:e.post.selectedPost}}),(function(e){return Object(w.bindActionCreators)({fetchPost:B,addPost:L,updatePost:I,deletePost:H},e)}))(be),ke=function(e){return e&&e.length},Se=function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).handleOnSubmit=function(t){e.handleAddNewPost(t),e.props.history.push("/")},e.handleAddNewPost=function(t){var a=e.props,n=a.addPost,r=a.resetPostForm;t.title&&n({title:t.title,description:t.description,user:t.user,comments:[]}),r()},e}return Object(m.a)(a,[{key:"attachDispatch",value:function(e){this.formDispatch=e}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement(x.Form,{className:"CreateForm",model:"postForm",onSubmit:function(t){return e.handleOnSubmit(t)},getDispatch:function(t){return e.attachDispatch(t)}},r.a.createElement(ue.a,null,r.a.createElement(me.a,{for:"title"},"Title"),r.a.createElement(x.Control.text,{model:".title",name:"title",id:"title",placeholder:"Post Title",className:"form-control",validators:{required:ke}}),r.a.createElement(x.Errors,{className:"error",model:".title",show:"touched",messages:{required:"Required"}})),r.a.createElement(ue.a,null,r.a.createElement(me.a,{for:"description"},"Description"),r.a.createElement(x.Control.textarea,{id:"description",name:"description",className:"form-control",placeholder:"Post Content",model:".description",validators:{required:ke}}),r.a.createElement(x.Errors,{className:"error",model:".description",show:"touched",messages:{required:"Este elemento es requerido*"}})),r.a.createElement(ue.a,null,r.a.createElement(me.a,{for:"user"},"User"),r.a.createElement(x.Control.text,{model:".user",id:"user",name:"user",className:"form-control",placeholder:"Post User",validators:{required:ke}}),r.a.createElement(x.Errors,{className:"error",model:".user",show:"touched",messages:{required:"Este elemento es requerido*"}})),r.a.createElement(ie.a,{type:"submit"},"Submit")))}}]),a}(n.Component),ge=Object(i.g)(Se),je=function(e){var t=e.addPost,a=e.resetPostForm;return r.a.createElement("div",{className:"Create"},r.a.createElement("h1",null,"Create Post"),r.a.createElement(ge,{addPost:t,resetPostForm:a}))},Te=Object(l.connect)((function(e){return{post:e.post.selectedPost}}),(function(e){return Object(w.bindActionCreators)({addPost:L,resetPostForm:z},e)}))(je),we=function(){var e=Object(n.useState)(0),t=Object(f.a)(e,2),a=t[0],r=t[1];return Object(n.useEffect)((function(){var e=setInterval((function(){r(a+1)}),1e3);return function(){clearInterval(e)}}),[a]),a},ye=function(){var e=Object(n.useState)(!1),t=Object(f.a)(e,2),a=t[0],c=t[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"Contador"),r.a.createElement("button",{type:"button",onClick:function(){return c(!a)}},a?"Stop Timer":"Start Timer"),a?r.a.createElement("div",{className:"alert alert-success"},"Started! ",r.a.createElement(we,null)):r.a.createElement("div",{className:"alert alert-danger"},"Off"))},Ce=(a(180),function(e){var t=e.user;return r.a.createElement("div",{className:"UserItem col-lg-4 col-md-6 col-xs-12"},r.a.createElement(q.a,null,r.a.createElement(M.a,{top:!0,width:"100%",src:"https://picsum.photos/200/150",alt:"Card image cap"}),r.a.createElement(W.a,null,r.a.createElement(X.a,null,t.name),r.a.createElement(Q.a,null,t.email))))}),Pe={getUsers:function(){var e=Object(P.a)(C.a.mark((function e(){var t,a,n,r=arguments;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=r.length>0&&void 0!==r[0]?r[0]:10,a=r.length>1&&void 0!==r[1]?r[1]:0,e.next=4,F.get("".concat("/users","?_limit=").concat(t,"&_page=").concat(a));case 4:if(!(n=e.sent).error){e.next=7;break}throw new Error("an error occurred");case 7:return e.abrupt("return",n);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),addUser:function(){var e=Object(P.a)(C.a.mark((function e(t){var a;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,F.post("".concat("/users"),t);case 2:if(!(a=e.sent).error){e.next=5;break}throw new Error("Occurred while is creating");case 5:return e.abrupt("return",a);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()};var xe=function(){var e=function(e,t){var a,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,c=Object(n.useState)({}),o=Object(f.a)(c,2),s=o[0],l=o[1],i=Object(n.useState)(!0),u=Object(f.a)(i,2),m=u[0],p=u[1];"User"===e&&(a=Pe),"Post"===e&&(a=U);var d=function(){var e=Object(P.a)(C.a.mark((function e(){var n;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("GET"!==t){e.next=4;break}return e.next=3,a.getUsers();case 3:n=e.sent;case 4:if("POST"!==t){e.next=8;break}return e.next=7,a.addUser(r);case 7:n=e.sent;case 8:l(n.data),p(!1);case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){d()}),[]),[s,m]}("User","GET"),t=Object(f.a)(e,2),a=t[0],c=t[1];return r.a.createElement("div",null,c?r.a.createElement("div",null,"Loading."):r.a.createElement("div",{className:"container row"},a.map((function(e){return r.a.createElement(Ce,{key:e.id,user:e})}))))},Ne=a(57),_e=function(){var e=Object(i.f)(),t=Object(n.useState)({name:"",email:"",password:""}),a=Object(f.a)(t,2),c=a[0],o=a[1],s=function(e){o(Object(Y.a)({},c,Object(Ne.a)({},e.target.name,e.target.value)))},l=function(){var t=Object(P.a)(C.a.mark((function t(a){var n;return C.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a.preventDefault(),t.next=3,Pe.addUser(c);case 3:n=t.sent,console.log(n),e.push("/users");case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"Create User"),r.a.createElement(le.a,{onSubmit:l},r.a.createElement(ue.a,null,r.a.createElement(me.a,{for:"name"},"Name"),r.a.createElement(se.a,{type:"text",name:"name",id:"name",placeholder:"Juan Perez",onChange:s})),r.a.createElement(ue.a,null,r.a.createElement(me.a,{for:"email"},"Email"),r.a.createElement(se.a,{type:"email",name:"email",id:"email",placeholder:"jperez@sample.com",onChange:s})),r.a.createElement(ue.a,null,r.a.createElement(me.a,{for:"password"},"Password"),r.a.createElement(se.a,{type:"password",name:"password",id:"password",placeholder:"Ingrese su password",onChange:s})),r.a.createElement(ie.a,null,"Submit")))},Re=function(){return r.a.createElement(T,null,r.a.createElement(i.c,null,r.a.createElement(i.a,{path:"/",component:Z,exact:!0}),r.a.createElement(i.a,{path:"/pomodoro",component:ee,exact:!0}),r.a.createElement(i.a,{path:"/todo",component:ce,exact:!0}),r.a.createElement(i.a,{path:"/about",component:oe,exact:!0}),r.a.createElement(i.a,{path:"/contact",component:Ee,exact:!0}),r.a.createElement(i.a,{path:"/login",component:he,exact:!0}),r.a.createElement(i.a,{path:"/posts/:id",component:Oe,exact:!0}),r.a.createElement(i.a,{path:"/posts",component:Te,exact:!0}),r.a.createElement(i.a,{path:"/hooks",component:ye,exact:!0}),r.a.createElement(i.a,{path:"/users",component:xe,exact:!0}),r.a.createElement(i.a,{path:"/users/create",component:_e,exact:!0}),r.a.createElement(ve,{component:ve})))},De=a(101),Fe=a(102),Ue={posts:[],seletedPost:null};var Ae={title:"",description:"",user:"",comments:[]};var Be=Object(w.combineReducers)(Object(Y.a)({post:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ue,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_POSTS_SUCCESS":var a=t.payload;return $(e,{posts:a});case"FETCH_POST_SUCCESS":var n=t.payload;return $(e,{selectedPost:n});case"ADD_POST_SUCCESS":var r=t.payload,c=[].concat(Object(te.a)(e.posts),[r]);return $(e,{posts:c,selectedPost:r});case"DELETE_POST_SUCCESS":var o=t.payload,s=e.posts.filter((function(e){return e.id!==o}));return $(e,{posts:s});case"UPDATE_POST_SUCCESS":var l=t.payload,i=e.posts.findIndex((function(e){return e.id===l.id})),u=e.posts.filter((function(e){return e.id!==l.id}));return u.splice(i,0,l),$(e,{posts:u});default:return e}}},Object(x.createForms)({postForm:Ae})));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(181),a(182);var Le,Ie=document.getElementById("root"),He=function(e){var t=[De.a];return Object(w.createStore)(Be,e,Object(Fe.composeWithDevTools)(w.applyMiddleware.apply(void 0,t)))}(window.initialState);Le=Re,o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(l.Provider,{store:He},r.a.createElement(s.a,null,r.a.createElement(Le,null)))),Ie),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[103,1,2]]]);
//# sourceMappingURL=main.8c82d699.chunk.js.map