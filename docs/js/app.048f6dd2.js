(function(t){function e(e){for(var a,r,o=e[0],c=e[1],l=e[2],u=0,f=[];u<o.length;u++)r=o[u],Object.prototype.hasOwnProperty.call(n,r)&&n[r]&&f.push(n[r][0]),n[r]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);d&&d(e);while(f.length)f.shift()();return i.push.apply(i,l||[]),s()}function s(){for(var t,e=0;e<i.length;e++){for(var s=i[e],a=!0,r=1;r<s.length;r++){var c=s[r];0!==n[c]&&(a=!1)}a&&(i.splice(e--,1),t=o(o.s=s[0]))}return t}var a={},n={app:0},i=[];function r(t){return o.p+"js/"+({about:"about"}[t]||t)+"."+{about:"50ff0193"}[t]+".js"}function o(e){if(a[e])return a[e].exports;var s=a[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,o),s.l=!0,s.exports}o.e=function(t){var e=[],s=n[t];if(0!==s)if(s)e.push(s[2]);else{var a=new Promise((function(e,a){s=n[t]=[e,a]}));e.push(s[2]=a);var i,c=document.createElement("script");c.charset="utf-8",c.timeout=120,o.nc&&c.setAttribute("nonce",o.nc),c.src=r(t);var l=new Error;i=function(e){c.onerror=c.onload=null,clearTimeout(u);var s=n[t];if(0!==s){if(s){var a=e&&("load"===e.type?"missing":e.type),i=e&&e.target&&e.target.src;l.message="Loading chunk "+t+" failed.\n("+a+": "+i+")",l.name="ChunkLoadError",l.type=a,l.request=i,s[1](l)}n[t]=void 0}};var u=setTimeout((function(){i({type:"timeout",target:c})}),12e4);c.onerror=c.onload=i,document.head.appendChild(c)}return Promise.all(e)},o.m=t,o.c=a,o.d=function(t,e,s){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(o.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)o.d(s,a,function(e){return t[e]}.bind(null,a));return s},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="",o.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=e,c=c.slice();for(var u=0;u<c.length;u++)e(c[u]);var d=l;i.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},"2ad9":function(t,e,s){},"4fe3":function(t,e,s){},5147:function(t,e,s){"use strict";s.d(e,"c",(function(){return n})),s.d(e,"b",(function(){return i}));var a=s("773f"),n={user:null};function i(t,e){return Object(a["a"])("users/login",{email:t,password:e})}},"56d7":function(t,e,s){"use strict";s.r(e);s("e260"),s("e6cf"),s("cca6"),s("a79d");var a=s("2b0e"),n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{},[s("Nav"),s("div",{staticClass:"container"},[s("router-view")],1),s("Footer")],1)},i=[],r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("nav",{staticClass:"navbar container is-fixed-top is-dark",attrs:{role:"navigation","aria-label":"main navigation"}},[a("div",{staticClass:"navbar-brand"},[a("router-link",{staticClass:"navbar-item",attrs:{to:"/"}},[a("img",{attrs:{src:s("cf05")}})]),a("a",{staticClass:"navbar-burger burger",class:{"is-active":t.isActive},attrs:{role:"button","aria-label":"menu","aria-expanded":"false","data-target":"navbarBasicExample"},on:{click:function(e){t.isActive=!t.isActive}}},[a("span",{attrs:{"aria-hidden":"true"}}),a("span",{attrs:{"aria-hidden":"true"}}),a("span",{attrs:{"aria-hidden":"true"}})])],1),a("div",{staticClass:"navbar-menu",class:{"is-active":t.isActive},attrs:{id:"navbarBasicExample"}},[a("div",{staticClass:"navbar-start"},[a("router-link",{staticClass:"navbar-item",attrs:{to:"/myexcercise"}},[t._v("My Excercises")]),a("router-link",{staticClass:"navbar-item",attrs:{to:"/feed"}},[t._v("Feed")]),a("div",{staticClass:"navbar-item has-dropdown is-hoverable"},[a("a",{staticClass:"navbar-link"},[t._v(" More ")]),a("div",{staticClass:"navbar-dropdown"},[a("router-link",{staticClass:"navbar-item",attrs:{to:"/about"}},[t._v("About")]),a("a",{staticClass:"navbar-item"},[t._v(" Jobs ")]),a("a",{staticClass:"navbar-item"},[t._v(" Contact ")]),a("hr",{staticClass:"navbar-divider"}),a("a",{staticClass:"navbar-item"},[t._v(" Report an issue ")])],1)])],1),a("div",{staticClass:"navbar-end"},[a("div",{staticClass:"navbar-item"},[a("LoginBadge")],1)])])])},o=[],c=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[t.session.user?s("div",{staticClass:"media"},["admin"==t.session.user.handle?s("div",{staticClass:"media-left"},[s("router-link",{staticClass:"button is-primary",attrs:{to:"/admin"}},[t._v("Admin")])],1):s("div",{staticClass:"media-left"},[s("router-link",{staticClass:"button is-primary",attrs:{to:"/track"}},[t._v("Track Workout")])],1),s("div",{staticClass:"media-content"},[s("p",{staticClass:"has-text-weight-bold"},[t._v(t._s(t.session.user.FirstName)+" "+t._s(t.session.user.LastName))]),s("p",{staticClass:"is-size-7"},[t._v("@"+t._s(t.session.user.PrimaryEmail))])])]):s("div",{staticClass:"buttons"},[s("router-link",{staticClass:"button is-primary",attrs:{to:"/signup"}},[s("strong",[t._v("Sign up")])]),s("router-link",{staticClass:"button is-primary",attrs:{to:"/login"}},[t._v("Login")])],1)])},l=[],u=s("5147"),d={data:function(){return{session:u["c"]}}},f=d,p=s("2877"),m=Object(p["a"])(f,c,l,!1,null,null,null),v=m.exports,h={data:function(){return{isActive:!1}},methods:{},components:{LoginBadge:v}},_=h,C=Object(p["a"])(_,r,o,!1,null,null,null),b=C.exports,g=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},w=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("footer",{staticClass:"footer"},[s("div",{staticClass:"content has-text-centered"},[s("p",[s("strong",[t._v("FitnessApp")]),t._v(" by "),s("a",{attrs:{href:"https://www.linkedin.com/in/daniel-pimentel-5b3389198/"}},[t._v("Daniel Pimentel")])]),s("p",{staticStyle:{"font-family":"BlinkMacSystemFont"}},[s("i",{staticClass:"fab fa-twitter-square fa-1x"}),t._v("Twitter")]),s("p",{staticStyle:{"font-family":"BlinkMacSystemFont"}},[s("i",{staticClass:"fab fa-facebook-square fa-1x"}),t._v("Facebook")]),s("p",{staticStyle:{"font-family":"BlinkMacSystemFont"}},[s("i",{staticClass:"fab fa-instagram-square fa-1x"}),t._v("Instagram")])])])}],k={},y=k,x=Object(p["a"])(y,g,w,!1,null,null,null),E=x.exports,P={components:{Nav:b,Footer:E}},N=P,O=Object(p["a"])(N,n,i,!1,null,null,null),j=O.exports,$=(s("d3b7"),s("8c4f")),S=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},T=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{staticClass:"section"},[s("div",{staticClass:"container"},[s("h1",{staticClass:"title"},[t._v("Welcome To ExplosiveTracker")]),s("h2",{staticClass:"subtitle"},[t._v(" This is an application to have a digital tracker of your weighlifting progress and share with the community ")]),s("button",{staticClass:"button is-primary"},[t._v(" Get Started ")])])])}],q={name:"Home"},U=q,F=Object(p["a"])(U,S,T,!1,null,null,null),W=F.exports,R=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"level section"},[s("div",{staticClass:"level-item"},[s("form",[s("div",{staticClass:"field"},[s("p",{staticClass:"control has-icons-left has-icons-right"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.username,expression:"username"}],staticClass:"input",attrs:{type:"text",placeholder:"Username"},domProps:{value:t.username},on:{input:function(e){e.target.composing||(t.username=e.target.value)}}}),t._m(0)])]),s("div",{staticClass:"field"},[s("p",{staticClass:"control has-icons-left"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"input",attrs:{type:"text",placeholder:"Password"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}}),t._m(1)])]),s("div",{staticClass:"field"},[s("p",{staticClass:"control"},[s("button",{staticClass:"button is-success",on:{click:function(e){return e.preventDefault(),t.login(e)}}},[t._v(" Login ")])])])])])])},D=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("span",{staticClass:"icon is-small is-left"},[s("i",{staticClass:"fas fa-at"})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("span",{staticClass:"icon is-small is-left"},[s("i",{staticClass:"fas fa-lock"})])}],A=(s("96cf"),s("1da1")),L={data:function(){return{username:"",password:""}},methods:{login:function(){var t=this;return Object(A["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(u["b"])(t.username,t.password);case 2:u["c"].user=e.sent,t.$router.push("feed");case 4:case"end":return e.stop()}}),e)})))()}}},B=L,I=Object(p["a"])(B,R,D,!1,null,null,null),M=I.exports,H=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("form",[s("div",{staticClass:"field "},[s("label",{staticClass:"label",attrs:{for:"FirstName"}},[t._v("First Name")]),s("div",{key:"FirstName",staticClass:"control has-icons-left has-icons-right"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.firstName,expression:"firstName"}],staticClass:"input",attrs:{type:"text",placeholder:"First Name"},domProps:{value:t.firstName},on:{input:function(e){e.target.composing||(t.firstName=e.target.value)}}}),t._m(0)])]),s("div",{staticClass:"field"},[s("label",{staticClass:"label",attrs:{for:"LastName"}},[t._v("Last Name")]),s("div",{staticClass:"control has-icons-left has-icons-right"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.lastName,expression:"lastName"}],staticClass:"input",attrs:{type:"text",placeholder:"Last Name"},domProps:{value:t.lastName},on:{input:function(e){e.target.composing||(t.lastName=e.target.value)}}}),t._m(1)])]),s("div",{staticClass:"field"},[s("label",{staticClass:"label"},[t._v("Email")]),s("div",{staticClass:"control has-icons-left has-icons-right"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"input",attrs:{type:"email",placeholder:"Email"},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}}),t._m(2)])]),s("div",{staticClass:"field"},[s("label",{staticClass:"label"},[t._v("Password")]),s("p",{staticClass:"control has-icons-left"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"input",attrs:{type:"password",placeholder:"Password"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}}),t._m(3)])]),s("div",{staticClass:"field"},[s("label",{staticClass:"label"},[t._v("Confirm Password")]),s("p",{staticClass:"control has-icons-left"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.confirmPassword,expression:"confirmPassword"}],staticClass:"input",attrs:{type:"password",placeholder:"Password"},domProps:{value:t.confirmPassword},on:{input:function(e){e.target.composing||(t.confirmPassword=e.target.value)}}}),t._m(4)])]),t._m(5),s("div",{staticClass:"field"},[s("p",{staticClass:"control"},[s("button",{staticClass:"button is-success",on:{click:function(e){return e.preventDefault(),t.signup(e)}}},[t._v(" Signup ")])])])])},J=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("span",{staticClass:"icon is-small is-left"},[s("i",{staticClass:"fas fa-user"})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("span",{staticClass:"icon is-small is-left"},[s("i",{staticClass:"fas fa-user"})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("span",{staticClass:"icon is-small is-left"},[s("i",{staticClass:"fas fa-envelope"})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("span",{staticClass:"icon is-small is-left"},[s("i",{staticClass:"fas fa-lock"})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("span",{staticClass:"icon is-small is-left"},[s("i",{staticClass:"fas fa-lock"})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"field"},[s("div",{staticClass:"control"},[s("label",{staticClass:"checkbox"},[s("input",{attrs:{type:"checkbox"}}),t._v(" I agree to the "),s("a",{attrs:{href:"#"}},[t._v("terms and conditions")])])])])}],z=s("773f");function G(t,e,s,a){return Object(z["a"])("users/register",{FirstName:t,LastName:e,Password:a,Email:s})}var Y={data:function(){return{firstName:"",lastName:"",email:"",password:"",confirmPassword:""}},methods:{signup:function(){G(this.firstName,this.lastName,this.email,this.password)}}},K=Y,Q=Object(p["a"])(K,H,J,!1,null,null,null),V=Q.exports,X=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"columns"},[s("div",{staticClass:"column is-two-thirds"},t._l(t.workouts,(function(t,e){return s("Posts",{key:e,attrs:{i:e,post:t}})})),1),s("div",{staticClass:"column is-one-thirds"},[s("Friendslist")],1)])},Z=[],tt=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("nav",{staticClass:"panel"},[t._m(0),s("div",{staticClass:"panel-block"},[s("form",{staticClass:"control has-icons-left has-addons-right",on:{submit:function(e){return e.preventDefault(),t.searchUsers(e)}}},[s("div",{staticClass:"field"},[s("p",{staticClass:"control has-icons-left has-icons-right"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.query,expression:"query"}],staticClass:"input",attrs:{type:"text",placeholder:"Search For Users"},domProps:{value:t.query},on:{input:function(e){e.target.composing||(t.query=e.target.value)}}}),t._m(1)])])])]),""!=t.query?s("div",t._l(t.searched,(function(e){return s("a",{key:e.id,staticClass:"panel-block "},[t._m(2,!0),t._v(" "+t._s(e.FirstName)+" "+t._s(e.LastName)+" ")])})),0):s("div",[s("p",{staticClass:"panel-tabs"},[s("a",{class:{"is-active":t.followingPressed},on:{click:function(e){t.followingPressed=!0}}},[t._v("Following")]),s("a",{class:{"is-active":!t.followingPressed},on:{click:function(e){t.followingPressed=!1}}},[t._v("Followers")])]),1==t.followingPressed?s("div",t._l(t.friends.x.following,(function(e,a){return s("a",{key:a,staticClass:"panel-block ",attrs:{friend:e}},[t._m(3,!0),t._v(" "+t._s(e.Name)+" ")])})),0):0==t.followingPressed?s("div",[t._l(t.friends.x.pending,(function(e,a){return s("a",{key:a,staticClass:"panel-block is-active is-grouped ",staticStyle:{width:"100%"},attrs:{friend:e}},[t._m(4,!0),s("span",{staticClass:"control is-expanded"},[t._v(t._s(e.Name))]),s("span",{staticClass:"icon is-small is-right",on:{click:function(e){return e.preventDefault(),t.denyRequest(e)}}},[s("i",{staticClass:"fas fa-minus",on:{click:function(s){s.preventDefault(),t.requestId=e.id}}})]),s("span",{staticClass:"icon is-small is-right",on:{click:function(e){return e.preventDefault(),t.acceptRequest(e)}}},[s("i",{staticClass:"fas fa-check",staticStyle:{"padding-left":"5px"},on:{click:function(s){s.preventDefault(),t.requestId=e.id}}})])])})),t._l(t.friends.x.follower,(function(e,a){return s("a",{key:a,staticClass:"panel-block is-active",attrs:{friend:e}},[t._m(5,!0),t._v(" "+t._s(e.Name)+" ")])}))],2):t._e()])])},et=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",{staticClass:"panel-heading has-icons-left"},[s("span",{staticClass:"icon is-left"},[s("i",{staticClass:"fas fa-users",attrs:{"aria-hidden":"true"}})]),t._v(" Friends ")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("span",{staticClass:"icon is-small is-left"},[s("i",{staticClass:"fas fa-search"})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("span",{staticClass:"panel-icon"},[s("i",{staticClass:"fas fa-user",attrs:{"aria-hidden":"true"}})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("span",{staticClass:"panel-icon"},[s("i",{staticClass:"fas fa-user",attrs:{"aria-hidden":"true"}})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("span",{staticClass:"panel-icon"},[s("i",{staticClass:"fas fa-question is-left",attrs:{"aria-hidden":"true"}})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("span",{staticClass:"panel-icon"},[s("i",{staticClass:"fas fa-user",attrs:{"aria-hidden":"true"}})])}],st=function(){return Object(z["a"])("users/".concat(u["c"].user.id,"/workoutfeed"))},at=function(){return Object(z["a"])("users/".concat(u["c"].user.id,"/followers"))},nt=function(){return Object(z["a"])("users/".concat(u["c"].user.id,"/myworkouts"))};function it(t){return Object(z["a"])("reactions",{Post_id:t,Owner_id:u["c"].user.id})}function rt(t,e){return Object(z["a"])("comments",{Text:t,Workout_id:e,Owner_id:u["c"].user.id})}function ot(t){return Object(z["a"])("follow/acceptLink",{id:t})}function ct(t){return Object(z["a"])("follow",{id:t},"DELETE")}function lt(t){return Object(z["a"])("users/search?q=".concat(t))}var ut={data:function(){return{friends:[],followingPressed:!0,requestId:0,query:"",searched:[]}},created:function(){var t=this;return Object(A["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,at();case 2:t.friends=e.sent;case 3:case"end":return e.stop()}}),e)})))()},methods:{acceptRequest:function(){console.log(this.requestId),ot(this.requestId)},denyRequest:function(){console.log(this.requestId),ct(this.requestId)},searchUsers:function(){var t=this;return Object(A["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,lt(t.query);case 2:t.searched=e.sent,console.log(t.searched);case 4:case"end":return e.stop()}}),e)})))()}}},dt=ut,ft=(s("b85c"),Object(p["a"])(dt,tt,et,!1,null,null,null)),pt=ft.exports,mt=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"card"},[s("div",{staticClass:"card-content"},[s("div",{staticClass:"content"},[t._v(" "+t._s(t.post.Reaction)+" people liked this ")]),s("p",{staticClass:"title"},[t._v(" "+t._s(t.post.Exercise_Type)+" ")]),s("p",{staticClass:"subtitle"},[t._v(" "+t._s(t.post.Sets)+" x "+t._s(t.post.Reps_Per_Set)+" "+t._s(t.post.Note)+" ")]),s("p",{staticClass:"has-text-right"},[t._v(" @"+t._s(t.post.name)+" ")])]),s("footer",{staticClass:"card-footer",staticStyle:{cursor:"pointer"}},[s("p",{staticClass:"card-footer-item",on:{click:function(e){return e.preventDefault(),t.react(e)}}},[t._m(0)]),s("p",{staticClass:"card-footer-item",on:{click:function(e){e.preventDefault(),t.commentBox=!t.commentBox}}},[t._m(1)])]),t.commentBox?s("footer",{staticClass:"card-footer"},[s("div",{staticClass:"field is-grouped",staticStyle:{width:"100%"}},[s("p",{staticClass:"control is-expanded"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.commentText,expression:"commentText"}],staticClass:"input",attrs:{type:"text",placeholder:"Type comment here..."},domProps:{value:t.commentText},on:{input:function(e){e.target.composing||(t.commentText=e.target.value)}}})]),s("p",{staticClass:"control"},[s("a",{staticClass:"button is-primary",on:{click:function(e){return e.preventDefault(),t.postComment(e)}}},[t._v(" Post ")])])])]):t._e(),s("footer",{staticClass:"card-footer"},t._l(t.post.Comments,(function(e){return s("div",{key:e.id,staticClass:"media",staticStyle:{padding:"5px"}},[s("div",{staticClass:"media-content"},[s("b",[t._v(t._s(e.Commenter)+" ")]),s("span",[t._v(t._s(e.Text))])])])})),0)])},vt=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("span",{staticClass:"has-icons"},[t._v(" Like "),s("i",{staticClass:"fas fa-heart"})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("span",{staticClass:"has-icons"},[t._v(" Comment "),s("i",{staticClass:"fas fa-comment"})])}],ht={data:function(){return{commentBox:0,commentText:""}},props:{post:Object},methods:{react:function(){var t=this;return Object(A["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,it(t.post.id);case 2:t.post.Reaction+=1;case 3:case"end":return e.stop()}}),e)})))()},postComment:function(){var t=this;return Object(A["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:rt(t.commentText,t.post.id);case 1:case"end":return e.stop()}}),e)})))()}}},_t=ht,Ct=(s("eebb"),Object(p["a"])(_t,mt,vt,!1,null,null,null)),bt=Ct.exports,gt={data:function(){return{workouts:[]}},created:function(){var t=this;return Object(A["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,st();case 2:t.workouts=e.sent;case 3:case"end":return e.stop()}}),e)})))()},components:{Friendslist:pt,Posts:bt}},wt=gt,kt=Object(p["a"])(wt,X,Z,!1,null,null,null),yt=kt.exports,xt=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"columns"},[s("div",{staticClass:"column is-half"},[s("strong",[t._v("User Stuff")]),s("form",[t._v(" Deleting Users "),s("div",{staticClass:"field has-addons"},[s("div",{staticClass:"control is-expanded"},[s("div",{staticClass:"select is-fullwidth"},[s("select",{directives:[{name:"model",rawName:"v-model",value:t.selectedUser,expression:"selectedUser"}],attrs:{name:"users"},on:{change:function(e){var s=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.selectedUser=e.target.multiple?s:s[0]}}},t._l(t.session.users,(function(e,a){return s("option",{key:a},[t._v(" "+t._s(e.handle)+" ")])})),0)])]),t._m(0)])]),s("form",{staticStyle:{"padding-top":"30px"}},[t._v(" Adding Users "),s("div",{staticClass:"field"},[s("p",{staticClass:"control has-icons-left has-icons-right"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.addedUser,expression:"addedUser"}],staticClass:"input",attrs:{type:"input",placeholder:"Name"},domProps:{value:t.addedUser},on:{input:function(e){e.target.composing||(t.addedUser=e.target.value)}}}),t._m(1)])]),s("div",{staticClass:"field"},[s("p",{staticClass:"control has-icons-left"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.addedHandle,expression:"addedHandle"}],staticClass:"input",attrs:{type:"input",placeholder:"Username"},domProps:{value:t.addedHandle},on:{input:function(e){e.target.composing||(t.addedHandle=e.target.value)}}}),t._m(2)])]),s("div",{staticClass:"field"},[s("p",{staticClass:"control"},[s("button",{staticClass:"button is-success",on:{click:function(e){return e.preventDefault(),t.addUser(e)}}},[t._v(" Add ")])])])])]),s("div",{staticClass:"column is-half"},[s("strong",[t._v("Workouts Stuff")]),s("form",[t._v(" Deleting Workouts "),s("div",{staticClass:"field has-addons"},[s("div",{staticClass:"control is-expanded"},[s("div",{staticClass:"select is-fullwidth"},[s("select",{directives:[{name:"model",rawName:"v-model",value:t.selectedWorkout,expression:"selectedWorkout"}],attrs:{name:"workouts"},on:{change:function(e){var s=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.selectedWorkout=e.target.multiple?s:s[0]}}},[s("option",[t._v("Select a Workout")]),t._l(t.workouts.types,(function(e,a){return s("option",{key:a},[t._v(" "+t._s(e)+" ")])}))],2)])]),s("div",{staticClass:"control"},[s("button",{staticClass:"button is-success",attrs:{type:"submit"},on:{click:function(e){return e.preventDefault(),t.ridWorkout(e)}}},[t._v("Delete")])])])]),s("form",{staticStyle:{"padding-top":"30px"}},[t._v(" Adding workouts "),s("div",{staticClass:"field"},[s("p",{staticClass:"control has-icons-left has-icons-right"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.addedWorkout,expression:"addedWorkout"}],staticClass:"input",attrs:{type:"email",placeholder:"Workout"},domProps:{value:t.addedWorkout},on:{input:function(e){e.target.composing||(t.addedWorkout=e.target.value)}}}),t._m(3)])]),s("div",{staticClass:"field"},[s("p",{staticClass:"control"},[s("button",{staticClass:"button is-success",on:{click:function(e){return e.preventDefault(),t.addWorkout(e)}}},[t._v(" Add ")])])])])])])},Et=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"control"},[s("button",{staticClass:"button is-success",attrs:{type:"submit"}},[t._v("Delete")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("span",{staticClass:"icon is-small is-left"},[s("i",{staticClass:"fas fa-user"})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("span",{staticClass:"icon is-small is-left"},[s("i",{staticClass:"fas fa-at"})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("span",{staticClass:"icon is-small is-left"},[s("i",{staticClass:"fas fa-dumbbell"})])}],Pt=(s("c740"),s("a434"),{types:["Cardio","Weightlifting","Yoga"],addType:function(t){this.types.push(t)},deleteType:function(t){this.types.splice(this.types.findIndex((function(e){return e==t})),1)}}),Nt=Pt,Ot={data:function(){return{workouts:Nt,session:u["default"],selectedWorkout:"",addedWorkout:"",selectedUser:"",addedUser:"",addedHandle:""}},methods:{ridWorkout:function(){Nt.deleteType(this.selectedWorkout)},addWorkout:function(){Nt.addType(this.addedWorkout)},ridUser:function(){u["default"].deleteUser(this.selectedUser)},addUser:function(){u["default"].addUser(this.addedUser,this.addedHandle)}}},jt=Ot,$t=Object(p["a"])(jt,xt,Et,!1,null,null,null),St=$t.exports,Tt=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{},[s("h1",{staticClass:"title is-1 has-text-centered"},[t._v(t._s(t.session.user.FirstName)+"'s Excercises")]),t._l(t.workouts,(function(t,e){return s("Posts",{key:e,attrs:{post:t}})}))],2)},qt=[],Ut={components:{Posts:bt},data:function(){return{session:u["c"],workouts:[]}},created:function(){var t=this;return Object(A["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,nt();case 2:t.workouts=e.sent;case 3:case"end":return e.stop()}}),e)})))()}},Ft=Ut,Wt=Object(p["a"])(Ft,Tt,qt,!1,null,null,null),Rt=Wt.exports;a["a"].use($["a"]);var Dt=[{path:"/",name:"Home",component:W},{path:"/login",name:"Login",component:M},{path:"/signup",name:"Signup",component:V},{path:"/admin",name:"Admin",component:St},{path:"/feed",name:"Feed",component:yt,beforeEnter:Lt},{path:"/myexcercise",name:"MyExcercise",component:Rt,beforeEnter:Lt},{path:"/about",name:"About",component:function(){return s.e("about").then(s.bind(null,"f820"))}},{path:"/track",name:"Track",component:function(){return s.e("about").then(s.bind(null,"53a4"))}}],At=new $["a"]({mode:"history",base:"",routes:Dt});function Lt(t,e,s){u["c"].user?s():s("login")}var Bt=At;s("5abe"),s("15f5");a["a"].config.productionTip=!1,new a["a"]({router:Bt,render:function(t){return t(j)}}).$mount("#app")},"773f":function(t,e,s){"use strict";s.d(e,"a",(function(){return n}));s("d3b7");var a="/";function n(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;return e?fetch(a+t,{method:s||"POST",cache:"no-cache",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then((function(t){return t.json()})):fetch(a+t).then((function(t){return t.json()}))}},b85c:function(t,e,s){"use strict";var a=s("2ad9"),n=s.n(a);n.a},cf05:function(t,e,s){t.exports=s.p+"img/logo.82b9c7a5.png"},eebb:function(t,e,s){"use strict";var a=s("4fe3"),n=s.n(a);n.a}});
//# sourceMappingURL=app.048f6dd2.js.map