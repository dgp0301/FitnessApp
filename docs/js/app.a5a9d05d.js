(function(t){function s(s){for(var a,r,l=s[0],o=s[1],c=s[2],u=0,p=[];u<l.length;u++)r=l[u],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&p.push(i[r][0]),i[r]=0;for(a in o)Object.prototype.hasOwnProperty.call(o,a)&&(t[a]=o[a]);d&&d(s);while(p.length)p.shift()();return n.push.apply(n,c||[]),e()}function e(){for(var t,s=0;s<n.length;s++){for(var e=n[s],a=!0,r=1;r<e.length;r++){var o=e[r];0!==i[o]&&(a=!1)}a&&(n.splice(s--,1),t=l(l.s=e[0]))}return t}var a={},i={app:0},n=[];function r(t){return l.p+"js/"+({about:"about"}[t]||t)+"."+{about:"398e6f8b"}[t]+".js"}function l(s){if(a[s])return a[s].exports;var e=a[s]={i:s,l:!1,exports:{}};return t[s].call(e.exports,e,e.exports,l),e.l=!0,e.exports}l.e=function(t){var s=[],e=i[t];if(0!==e)if(e)s.push(e[2]);else{var a=new Promise((function(s,a){e=i[t]=[s,a]}));s.push(e[2]=a);var n,o=document.createElement("script");o.charset="utf-8",o.timeout=120,l.nc&&o.setAttribute("nonce",l.nc),o.src=r(t);var c=new Error;n=function(s){o.onerror=o.onload=null,clearTimeout(u);var e=i[t];if(0!==e){if(e){var a=s&&("load"===s.type?"missing":s.type),n=s&&s.target&&s.target.src;c.message="Loading chunk "+t+" failed.\n("+a+": "+n+")",c.name="ChunkLoadError",c.type=a,c.request=n,e[1](c)}i[t]=void 0}};var u=setTimeout((function(){n({type:"timeout",target:o})}),12e4);o.onerror=o.onload=n,document.head.appendChild(o)}return Promise.all(s)},l.m=t,l.c=a,l.d=function(t,s,e){l.o(t,s)||Object.defineProperty(t,s,{enumerable:!0,get:e})},l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,s){if(1&s&&(t=l(t)),8&s)return t;if(4&s&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(l.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&s&&"string"!=typeof t)for(var a in t)l.d(e,a,function(s){return t[s]}.bind(null,a));return e},l.n=function(t){var s=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(s,"a",s),s},l.o=function(t,s){return Object.prototype.hasOwnProperty.call(t,s)},l.p="",l.oe=function(t){throw console.error(t),t};var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=s,o=o.slice();for(var u=0;u<o.length;u++)s(o[u]);var d=c;n.push([0,"chunk-vendors"]),e()})({0:function(t,s,e){t.exports=e("56d7")},"4fe3":function(t,s,e){},5147:function(t,s,e){"use strict";e("c740"),e("a434");var a={user:null,workouts:[],notifications:[],users:[{name:"admin",handle:"admin"},{name:"Maria De La Cruz",handle:"maria.pimentel.908"},{name:"Dan Pimentel",handle:"dgp0301"},{name:"John Doe",handle:"JohnnyDonuts"}],addUser:function(t,s){this.users.push({name:t,handle:s})},deleteUser:function(t){var s=this;this.users.splice(this.users.findIndex((function(t){return t.handle==s.delhandle})),1)},addWorkout:function(t,s,e,a,i){this.workouts.push({workoutType:t,sets:s,reps:e,description:a,owner:i})}};s["a"]=a},"56d7":function(t,s,e){"use strict";e.r(s);e("e260"),e("e6cf"),e("cca6"),e("a79d");var a=e("2b0e"),i=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{},[e("Nav"),e("div",{staticClass:"container"},[e("router-view")],1),e("Footer")],1)},n=[],r=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("nav",{staticClass:"navbar container is-fixed-top is-dark",attrs:{role:"navigation","aria-label":"main navigation"}},[a("div",{staticClass:"navbar-brand"},[a("router-link",{staticClass:"navbar-item",attrs:{to:"/"}},[a("img",{attrs:{src:e("cf05")}})]),a("a",{staticClass:"navbar-burger burger",class:{"is-active":t.isActive},attrs:{role:"button","aria-label":"menu","aria-expanded":"false","data-target":"navbarBasicExample"},on:{click:function(s){t.isActive=!t.isActive}}},[a("span",{attrs:{"aria-hidden":"true"}}),a("span",{attrs:{"aria-hidden":"true"}}),a("span",{attrs:{"aria-hidden":"true"}})])],1),a("div",{staticClass:"navbar-menu",class:{"is-active":t.isActive},attrs:{id:"navbarBasicExample"}},[a("div",{staticClass:"navbar-start"},[a("router-link",{staticClass:"navbar-item",attrs:{to:"/myexcercise"}},[t._v("My Excercises")]),a("router-link",{staticClass:"navbar-item",attrs:{to:"/feed"}},[t._v("Feed")]),a("div",{staticClass:"navbar-item has-dropdown is-hoverable"},[a("a",{staticClass:"navbar-link"},[t._v(" More ")]),a("div",{staticClass:"navbar-dropdown"},[a("router-link",{staticClass:"navbar-item",attrs:{to:"/about"}},[t._v("About")]),a("a",{staticClass:"navbar-item"},[t._v(" Jobs ")]),a("a",{staticClass:"navbar-item"},[t._v(" Contact ")]),a("hr",{staticClass:"navbar-divider"}),a("a",{staticClass:"navbar-item"},[t._v(" Report an issue ")])],1)])],1),a("div",{staticClass:"navbar-end"},[a("div",{staticClass:"navbar-item"},[a("LoginBadge")],1)])])])},l=[],o=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",[t.session.user?e("div",{staticClass:"media"},["admin"==t.session.user.handle?e("div",{staticClass:"media-left"},[e("router-link",{staticClass:"button is-primary",attrs:{to:"/admin"}},[t._v("Admin")])],1):e("div",{staticClass:"media-left"},[e("router-link",{staticClass:"button is-primary",attrs:{to:"/track"}},[t._v("Track Workout")])],1),e("div",{staticClass:"media-content"},[e("p",{staticClass:"has-text-weight-bold"},[t._v(t._s(t.session.user.name))]),e("p",{staticClass:"is-size-7"},[t._v("@"+t._s(t.session.user.handle))])])]):e("div",{staticClass:"buttons"},[e("router-link",{staticClass:"button is-primary",attrs:{to:"/signup"}},[e("strong",[t._v("Sign up")])]),e("router-link",{staticClass:"button is-primary",attrs:{to:"/login"}},[t._v("Login")])],1)])},c=[],u=e("5147"),d={data:function(){return{session:u["a"]}}},p=d,f=e("2877"),v=Object(f["a"])(p,o,c,!1,null,null,null),m=v.exports,h={data:function(){return{isActive:!1}},methods:{},components:{LoginBadge:m}},C=h,_=Object(f["a"])(C,r,l,!1,null,null,null),b=_.exports,g=function(){var t=this,s=t.$createElement;t._self._c;return t._m(0)},y=[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("footer",{staticClass:"footer"},[e("div",{staticClass:"content has-text-centered"},[e("p",[e("strong",[t._v("FitnessApp")]),t._v(" by "),e("a",{attrs:{href:"https://www.linkedin.com/in/daniel-pimentel-5b3389198/"}},[t._v("Daniel Pimentel")])]),e("p",{staticStyle:{"font-family":"BlinkMacSystemFont"}},[e("i",{staticClass:"fab fa-twitter-square fa-1x"}),t._v("Twitter")]),e("p",{staticStyle:{"font-family":"BlinkMacSystemFont"}},[e("i",{staticClass:"fab fa-facebook-square fa-1x"}),t._v("Facebook")]),e("p",{staticStyle:{"font-family":"BlinkMacSystemFont"}},[e("i",{staticClass:"fab fa-instagram-square fa-1x"}),t._v("Instagram")])])])}],k={},w=k,x=Object(f["a"])(w,g,y,!1,null,null,null),E=x.exports,$={components:{Nav:b,Footer:E}},O=$,j=Object(f["a"])(O,i,n,!1,null,null,null),S=j.exports,T=(e("d3b7"),e("8c4f")),U=function(){var t=this,s=t.$createElement;t._self._c;return t._m(0)},P=[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("section",{staticClass:"section"},[e("div",{staticClass:"container"},[e("h1",{staticClass:"title"},[t._v("Welcome To ExplosiveTracker")]),e("h2",{staticClass:"subtitle"},[t._v(" This is an application to have a digital tracker of your weighlifting progress and share with the community ")]),e("button",{staticClass:"button is-primary"},[t._v(" Get Started ")])])])}],W={name:"Home"},A=W,D=Object(f["a"])(A,U,P,!1,null,null,null),F=D.exports,M=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"level section"},[e("div",{staticClass:"level-item"},[e("form",[e("div",{staticClass:"field"},[e("p",{staticClass:"control has-icons-left has-icons-right"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.username,expression:"username"}],staticClass:"input",attrs:{type:"text",placeholder:"Username"},domProps:{value:t.username},on:{input:function(s){s.target.composing||(t.username=s.target.value)}}}),t._m(0)])]),t._m(1),e("div",{staticClass:"field"},[e("p",{staticClass:"control"},[e("button",{staticClass:"button is-success",on:{click:function(s){return s.preventDefault(),t.login(s)}}},[t._v(" Login ")])])])])])])},L=[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("span",{staticClass:"icon is-small is-left"},[e("i",{staticClass:"fas fa-at"})])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"field"},[e("p",{staticClass:"control has-icons-left"},[e("input",{staticClass:"input",attrs:{type:"text",placeholder:"Name"}}),e("span",{staticClass:"icon is-small is-left"},[e("i",{staticClass:"fas fa-user"})])])])}],N=(e("7db0"),{data:function(){return{username:""}},methods:{login:function(){var t=this;u["a"].user=u["a"].users.find((function(s){return s.handle==t.username})),this.$router.push("feed")}}}),H=N,B=Object(f["a"])(H,M,L,!1,null,null,null),I=B.exports,J=function(){var t=this,s=t.$createElement;t._self._c;return t._m(0)},q=[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("form",[e("div",{staticClass:"field"},[e("label",{staticClass:"label"},[t._v("Username")]),e("div",{staticClass:"control has-icons-left has-icons-right"},[e("input",{staticClass:"input is-success",attrs:{type:"text",placeholder:"Text input",value:"bulma"}}),e("span",{staticClass:"icon is-small is-left"},[e("i",{staticClass:"fas fa-user"})]),e("span",{staticClass:"icon is-small is-right"},[e("i",{staticClass:"fas fa-check"})])]),e("p",{staticClass:"help is-success"},[t._v("This username is available")])]),e("div",{staticClass:"field"},[e("label",{staticClass:"label"},[t._v("Email")]),e("div",{staticClass:"control has-icons-left has-icons-right"},[e("input",{staticClass:"input is-danger",attrs:{type:"email",placeholder:"Email input",value:"hello@"}}),e("span",{staticClass:"icon is-small is-left"},[e("i",{staticClass:"fas fa-envelope"})]),e("span",{staticClass:"icon is-small is-right"},[e("i",{staticClass:"fas fa-exclamation-triangle"})])]),e("p",{staticClass:"help is-danger"},[t._v("This email is invalid")])]),e("div",{staticClass:"field"},[e("label",{staticClass:"label"},[t._v("Password")]),e("p",{staticClass:"control has-icons-left"},[e("input",{staticClass:"input",attrs:{type:"password",placeholder:"Password"}}),e("span",{staticClass:"icon is-small is-left"},[e("i",{staticClass:"fas fa-lock"})])])]),e("div",{staticClass:"field"},[e("label",{staticClass:"label"},[t._v("Confirm Password")]),e("p",{staticClass:"control has-icons-left"},[e("input",{staticClass:"input",attrs:{type:"password",placeholder:"Password"}}),e("span",{staticClass:"icon is-small is-left"},[e("i",{staticClass:"fas fa-lock"})])])]),e("div",{staticClass:"field"},[e("div",{staticClass:"control"},[e("label",{staticClass:"checkbox"},[e("input",{attrs:{type:"checkbox"}}),t._v(" I agree to the "),e("a",{attrs:{href:"#"}},[t._v("terms and conditions")])])])]),e("div",{staticClass:"field"},[e("p",{staticClass:"control"},[e("button",{staticClass:"button is-success"},[t._v(" Signup ")])])])])}],z={},G=z,R=Object(f["a"])(G,J,q,!1,null,null,null),Y=R.exports,K=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"columns"},[e("div",{staticClass:"column is-two-thirds"},t._l(t.posts,(function(t,s){return e("Posts",{key:s,attrs:{post:t}})})),1),e("div",{staticClass:"column is-one-thirds"},[e("Friendslist")],1)])},Q=[],V=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("nav",{staticClass:"panel"},[t._m(0),t._m(1),t._m(2),t._l(t.session.users,(function(s,a){return e("a",{key:a,staticClass:"panel-block is-active",attrs:{user:s}},[t._m(3,!0),t._v(" "+t._s(s.handle)+" ")])}))],2)},X=[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("p",{staticClass:"panel-heading has-icons-left"},[e("span",{staticClass:"icon is-left"},[e("i",{staticClass:"fas fa-users",attrs:{"aria-hidden":"true"}})]),t._v(" Friends ")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"panel-block"},[e("p",{staticClass:"control has-icons-left"},[e("input",{staticClass:"input",attrs:{type:"text",placeholder:"Search"}}),e("span",{staticClass:"icon is-left"},[e("i",{staticClass:"fas fa-search",attrs:{"aria-hidden":"true"}})])])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("p",{staticClass:"panel-tabs"},[e("a",{staticClass:"is-active"},[t._v("Current")]),e("a",[t._v("Suggested")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("span",{staticClass:"panel-icon"},[e("i",{staticClass:"fas fa-user",attrs:{"aria-hidden":"true"}})])}],Z={data:function(){return{session:u["a"]}}},tt=Z,st=Object(f["a"])(tt,V,X,!1,null,null,null),et=st.exports,at=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"card"},[e("div",{staticClass:"card-content"},[e("p",{staticClass:"title"},[t._v(" "+t._s(t.post.workoutType)+" ")]),e("p",{staticClass:"subtitle"},[t._v(" "+t._s(t.post.description)+" ")]),e("p",{staticClass:"has-text-right"},[t._v(" @"+t._s(t.post.owner.handle)+" ")])]),e("footer",{staticClass:"card-footer"},[e("p",{staticClass:"card-footer-item"},[e("span",[t._v(" Sets: "+t._s(t.post.sets)+" ")])]),e("p",{staticClass:"card-footer-item"},[e("span",[t._v(" Reps: "+t._s(t.post.reps)+" ")])])])])},it=[],nt={props:{post:Object}},rt=nt,lt=(e("eebb"),Object(f["a"])(rt,at,it,!1,null,null,null)),ot=lt.exports,ct=[{workoutType:"Bench",sets:"3",reps:"12",description:"I made a will and left my life So I clean the floor with my idiot love OUT OF THE WAY",owner:{name:"Maria De La Cruz",handle:"maria.pimentel.908"}},{workoutType:"Squat",sets:"3",reps:"3",description:"Grinders",owner:{name:"James Kutz",handle:"james.kutz.3"}},{workoutType:"DeadLift",sets:"5",reps:"1",description:"90% of max",owner:{name:"Dan Pimentel",handle:"dgp0301"}}],ut={data:function(){return{posts:ct}},components:{Friendslist:et,Posts:ot}},dt=ut,pt=Object(f["a"])(dt,K,Q,!1,null,null,null),ft=pt.exports,vt=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"columns"},[e("div",{staticClass:"column is-half"},[e("strong",[t._v("User Stuff")]),e("form",[t._v(" Deleting Users "),e("div",{staticClass:"field has-addons"},[e("div",{staticClass:"control is-expanded"},[e("div",{staticClass:"select is-fullwidth"},[e("select",{directives:[{name:"model",rawName:"v-model",value:t.selectedUser,expression:"selectedUser"}],attrs:{name:"users"},on:{change:function(s){var e=Array.prototype.filter.call(s.target.options,(function(t){return t.selected})).map((function(t){var s="_value"in t?t._value:t.value;return s}));t.selectedUser=s.target.multiple?e:e[0]}}},t._l(t.session.users,(function(s,a){return e("option",{key:a},[t._v(" "+t._s(s.handle)+" ")])})),0)])]),t._m(0)])]),e("form",{staticStyle:{"padding-top":"30px"}},[t._v(" Adding Users "),e("div",{staticClass:"field"},[e("p",{staticClass:"control has-icons-left has-icons-right"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.addedUser,expression:"addedUser"}],staticClass:"input",attrs:{type:"input",placeholder:"Name"},domProps:{value:t.addedUser},on:{input:function(s){s.target.composing||(t.addedUser=s.target.value)}}}),t._m(1)])]),e("div",{staticClass:"field"},[e("p",{staticClass:"control has-icons-left"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.addedHandle,expression:"addedHandle"}],staticClass:"input",attrs:{type:"input",placeholder:"Username"},domProps:{value:t.addedHandle},on:{input:function(s){s.target.composing||(t.addedHandle=s.target.value)}}}),t._m(2)])]),e("div",{staticClass:"field"},[e("p",{staticClass:"control"},[e("button",{staticClass:"button is-success",on:{click:function(s){return s.preventDefault(),t.addUser(s)}}},[t._v(" Add ")])])])])]),e("div",{staticClass:"column is-half"},[e("strong",[t._v("Workouts Stuff")]),e("form",[t._v(" Deleting Workouts "),e("div",{staticClass:"field has-addons"},[e("div",{staticClass:"control is-expanded"},[e("div",{staticClass:"select is-fullwidth"},[e("select",{directives:[{name:"model",rawName:"v-model",value:t.selectedWorkout,expression:"selectedWorkout"}],attrs:{name:"workouts"},on:{change:function(s){var e=Array.prototype.filter.call(s.target.options,(function(t){return t.selected})).map((function(t){var s="_value"in t?t._value:t.value;return s}));t.selectedWorkout=s.target.multiple?e:e[0]}}},[e("option",[t._v("Select a Workout")]),t._l(t.workouts.types,(function(s,a){return e("option",{key:a},[t._v(" "+t._s(s)+" ")])}))],2)])]),e("div",{staticClass:"control"},[e("button",{staticClass:"button is-success",attrs:{type:"submit"},on:{click:function(s){return s.preventDefault(),t.ridWorkout(s)}}},[t._v("Delete")])])])]),e("form",{staticStyle:{"padding-top":"30px"}},[t._v(" Adding workouts "),e("div",{staticClass:"field"},[e("p",{staticClass:"control has-icons-left has-icons-right"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.addedWorkout,expression:"addedWorkout"}],staticClass:"input",attrs:{type:"email",placeholder:"Workout"},domProps:{value:t.addedWorkout},on:{input:function(s){s.target.composing||(t.addedWorkout=s.target.value)}}}),t._m(3)])]),e("div",{staticClass:"field"},[e("p",{staticClass:"control"},[e("button",{staticClass:"button is-success",on:{click:function(s){return s.preventDefault(),t.addWorkout(s)}}},[t._v(" Add ")])])])])])])},mt=[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"control"},[e("button",{staticClass:"button is-success",attrs:{type:"submit"}},[t._v("Delete")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("span",{staticClass:"icon is-small is-left"},[e("i",{staticClass:"fas fa-user"})])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("span",{staticClass:"icon is-small is-left"},[e("i",{staticClass:"fas fa-at"})])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("span",{staticClass:"icon is-small is-left"},[e("i",{staticClass:"fas fa-dumbbell"})])}],ht=e("6ffc"),Ct={data:function(){return{workouts:ht["a"],session:u["a"],selectedWorkout:"",addedWorkout:"",selectedUser:"",addedUser:"",addedHandle:""}},methods:{ridWorkout:function(){ht["a"].deleteType(this.selectedWorkout)},addWorkout:function(){ht["a"].addType(this.addedWorkout)},ridUser:function(){u["a"].deleteUser(this.selectedUser)},addUser:function(){u["a"].addUser(this.addedUser,this.addedHandle)}}},_t=Ct,bt=Object(f["a"])(_t,vt,mt,!1,null,null,null),gt=bt.exports,yt=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{},[e("h1",{staticClass:"title is-1 has-text-centered"},[t._v(t._s(t.session.user.name)+"'s Excercises")]),t._l(t.session.workouts,(function(t,s){return e("Posts",{key:s,attrs:{post:t}})}))],2)},kt=[],wt={components:{Posts:ot},data:function(){return{session:u["a"]}}},xt=wt,Et=Object(f["a"])(xt,yt,kt,!1,null,null,null),$t=Et.exports;a["a"].use(T["a"]);var Ot=[{path:"/",name:"Home",component:F},{path:"/login",name:"Login",component:I},{path:"/signup",name:"Signup",component:Y},{path:"/admin",name:"Admin",component:gt},{path:"/feed",name:"Feed",component:ft,beforeEnter:St},{path:"/myexcercise",name:"MyExcercise",component:$t,beforeEnter:St},{path:"/about",name:"About",component:function(){return e.e("about").then(e.bind(null,"f820"))}},{path:"/track",name:"Track",component:function(){return e.e("about").then(e.bind(null,"53a4"))}}],jt=new T["a"]({mode:"history",base:"",routes:Ot});function St(t,s,e){u["a"].user?e():e("login")}var Tt=jt;e("5abe"),e("15f5");a["a"].config.productionTip=!1,new a["a"]({router:Tt,render:function(t){return t(S)}}).$mount("#app")},"6ffc":function(t,s,e){"use strict";e("c740"),e("a434");var a={types:["Cardio","Weightlifting","Yoga"],addType:function(t){this.types.push(t)},deleteType:function(t){this.types.splice(this.types.findIndex((function(s){return s==t})),1)}};s["a"]=a},cf05:function(t,s,e){t.exports=e.p+"img/logo.82b9c7a5.png"},eebb:function(t,s,e){"use strict";var a=e("4fe3"),i=e.n(a);i.a}});
//# sourceMappingURL=app.a5a9d05d.js.map