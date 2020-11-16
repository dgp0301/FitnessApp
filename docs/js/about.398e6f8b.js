(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{"057f":function(t,e,i){var s=i("fc6a"),n=i("241c").f,r={}.toString,a="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],o=function(t){try{return n(t)}catch(e){return a.slice()}};t.exports.f=function(t){return a&&"[object Window]"==r.call(t)?o(t):n(s(t))}},"53a4":function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("form",[i("div",{staticClass:"field"},[i("label",{staticClass:"label"},[t._v("Workout type")]),i("div",{staticClass:"control"},[i("div",{staticClass:"select"},[i("select",{directives:[{name:"model",rawName:"v-model",value:t.workoutType,expression:"workoutType"}],on:{change:function(e){var i=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.workoutType=e.target.multiple?i:i[0]}}},[i("option",[t._v("Select a workout")]),t._l(t.workouts.types,(function(e,s){return i("option",{key:s},[t._v(" "+t._s(e)+" ")])}))],2)])])]),i("div",{staticClass:"columns"},[i("div",{staticClass:"field column is-half"},[i("label",{staticClass:"label"},[t._v("Sets")]),i("p",{staticClass:"control has-icons-left has-icons-right"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.sets,expression:"sets"}],staticClass:"input",attrs:{type:"text",placeholder:"Sets"},domProps:{value:t.sets},on:{input:function(e){e.target.composing||(t.sets=e.target.value)}}}),t._m(0)])]),i("div",{staticClass:"field column is-half"},[i("label",{staticClass:"label"},[t._v("Reps")]),i("p",{staticClass:"control has-icons-left has-icons-right"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.reps,expression:"reps"}],staticClass:"input",attrs:{type:"text",placeholder:"Reps"},domProps:{value:t.reps},on:{input:function(e){e.target.composing||(t.reps=e.target.value)}}}),t._m(1)])])]),i("div",{staticClass:"field"},[i("label",{staticClass:"label"},[t._v("Description")]),i("div",{staticClass:"control"},[i("textarea",{directives:[{name:"model",rawName:"v-model",value:t.description,expression:"description"}],staticClass:"textarea",attrs:{placeholder:"Brief Workout Description"},domProps:{value:t.description},on:{input:function(e){e.target.composing||(t.description=e.target.value)}}})]),t._v(" "+t._s(t.description)+" ")]),t._m(2),i("div",{staticClass:"field is-grouped is-grouped-centered"},[i("div",{staticClass:"control"},[i("button",{staticClass:"button is-link",on:{click:function(e){return e.preventDefault(),t.trackWorkout(e)}}},[t._v("Submit")])]),t._m(3)])])},n=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("span",{staticClass:"icon is-small is-left"},[i("i",{staticClass:"fas fa-dumbbell"})])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("span",{staticClass:"icon is-small is-left"},[i("i",{staticClass:"fas fa-dumbbell"})])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"field"},[i("div",{staticClass:"control"},[i("div",{staticClass:"file has-name is-left"},[i("label",{staticClass:"file-label"},[i("input",{staticClass:"file-input",attrs:{type:"file",name:"picture"}}),i("span",{staticClass:"file-cta"},[i("span",{staticClass:"file-icon"},[i("i",{staticClass:"fas fa-upload"})]),i("span",{staticClass:"file-label"},[t._v(" Choose a file… ")])]),i("span",{staticClass:"file-name"},[t._v(" Image of Workout ")])])])])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"control"},[i("button",{staticClass:"button is-link is-light"},[t._v("Cancel")])])}],r=(i("a4d3"),i("e01a"),i("6ffc")),a=i("5147"),o={data:function(){return{workouts:r["a"],workoutType:"",sets:"",reps:"",description:""}},methods:{trackWorkout:function(){a["a"].addWorkout(this.workoutType,this.sets,this.reps,this.description,a["a"].user)}}},c=o,l=i("2877"),u=Object(l["a"])(c,s,n,!1,null,null,null);e["default"]=u.exports},"746f":function(t,e,i){var s=i("428f"),n=i("5135"),r=i("e538"),a=i("9bf2").f;t.exports=function(t){var e=s.Symbol||(s.Symbol={});n(e,t)||a(e,t,{value:r.f(t)})}},a4d3:function(t,e,i){"use strict";var s=i("23e7"),n=i("da84"),r=i("d066"),a=i("c430"),o=i("83ab"),c=i("4930"),l=i("fdbf"),u=i("d039"),f=i("5135"),p=i("e8b5"),d=i("861d"),v=i("825a"),m=i("7b0b"),b=i("fc6a"),h=i("c04e"),g=i("5c6c"),y=i("7c73"),C=i("df75"),w=i("241c"),_=i("057f"),S=i("7418"),k=i("06cf"),O=i("9bf2"),j=i("d1e7"),x=i("9112"),P=i("6eeb"),E=i("5692"),N=i("f772"),$=i("d012"),T=i("90e3"),W=i("b622"),D=i("e538"),J=i("746f"),F=i("d44e"),I=i("69f3"),R=i("b727").forEach,A=N("hidden"),B="Symbol",Q="prototype",q=W("toPrimitive"),z=I.set,G=I.getterFor(B),H=Object[Q],K=n.Symbol,L=r("JSON","stringify"),M=k.f,U=O.f,V=_.f,X=j.f,Y=E("symbols"),Z=E("op-symbols"),tt=E("string-to-symbol-registry"),et=E("symbol-to-string-registry"),it=E("wks"),st=n.QObject,nt=!st||!st[Q]||!st[Q].findChild,rt=o&&u((function(){return 7!=y(U({},"a",{get:function(){return U(this,"a",{value:7}).a}})).a}))?function(t,e,i){var s=M(H,e);s&&delete H[e],U(t,e,i),s&&t!==H&&U(H,e,s)}:U,at=function(t,e){var i=Y[t]=y(K[Q]);return z(i,{type:B,tag:t,description:e}),o||(i.description=e),i},ot=l?function(t){return"symbol"==typeof t}:function(t){return Object(t)instanceof K},ct=function(t,e,i){t===H&&ct(Z,e,i),v(t);var s=h(e,!0);return v(i),f(Y,s)?(i.enumerable?(f(t,A)&&t[A][s]&&(t[A][s]=!1),i=y(i,{enumerable:g(0,!1)})):(f(t,A)||U(t,A,g(1,{})),t[A][s]=!0),rt(t,s,i)):U(t,s,i)},lt=function(t,e){v(t);var i=b(e),s=C(i).concat(vt(i));return R(s,(function(e){o&&!ft.call(i,e)||ct(t,e,i[e])})),t},ut=function(t,e){return void 0===e?y(t):lt(y(t),e)},ft=function(t){var e=h(t,!0),i=X.call(this,e);return!(this===H&&f(Y,e)&&!f(Z,e))&&(!(i||!f(this,e)||!f(Y,e)||f(this,A)&&this[A][e])||i)},pt=function(t,e){var i=b(t),s=h(e,!0);if(i!==H||!f(Y,s)||f(Z,s)){var n=M(i,s);return!n||!f(Y,s)||f(i,A)&&i[A][s]||(n.enumerable=!0),n}},dt=function(t){var e=V(b(t)),i=[];return R(e,(function(t){f(Y,t)||f($,t)||i.push(t)})),i},vt=function(t){var e=t===H,i=V(e?Z:b(t)),s=[];return R(i,(function(t){!f(Y,t)||e&&!f(H,t)||s.push(Y[t])})),s};if(c||(K=function(){if(this instanceof K)throw TypeError("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?String(arguments[0]):void 0,e=T(t),i=function(t){this===H&&i.call(Z,t),f(this,A)&&f(this[A],e)&&(this[A][e]=!1),rt(this,e,g(1,t))};return o&&nt&&rt(H,e,{configurable:!0,set:i}),at(e,t)},P(K[Q],"toString",(function(){return G(this).tag})),P(K,"withoutSetter",(function(t){return at(T(t),t)})),j.f=ft,O.f=ct,k.f=pt,w.f=_.f=dt,S.f=vt,D.f=function(t){return at(W(t),t)},o&&(U(K[Q],"description",{configurable:!0,get:function(){return G(this).description}}),a||P(H,"propertyIsEnumerable",ft,{unsafe:!0}))),s({global:!0,wrap:!0,forced:!c,sham:!c},{Symbol:K}),R(C(it),(function(t){J(t)})),s({target:B,stat:!0,forced:!c},{for:function(t){var e=String(t);if(f(tt,e))return tt[e];var i=K(e);return tt[e]=i,et[i]=e,i},keyFor:function(t){if(!ot(t))throw TypeError(t+" is not a symbol");if(f(et,t))return et[t]},useSetter:function(){nt=!0},useSimple:function(){nt=!1}}),s({target:"Object",stat:!0,forced:!c,sham:!o},{create:ut,defineProperty:ct,defineProperties:lt,getOwnPropertyDescriptor:pt}),s({target:"Object",stat:!0,forced:!c},{getOwnPropertyNames:dt,getOwnPropertySymbols:vt}),s({target:"Object",stat:!0,forced:u((function(){S.f(1)}))},{getOwnPropertySymbols:function(t){return S.f(m(t))}}),L){var mt=!c||u((function(){var t=K();return"[null]"!=L([t])||"{}"!=L({a:t})||"{}"!=L(Object(t))}));s({target:"JSON",stat:!0,forced:mt},{stringify:function(t,e,i){var s,n=[t],r=1;while(arguments.length>r)n.push(arguments[r++]);if(s=e,(d(e)||void 0!==t)&&!ot(t))return p(e)||(e=function(t,e){if("function"==typeof s&&(e=s.call(this,t,e)),!ot(e))return e}),n[1]=e,L.apply(null,n)}})}K[Q][q]||x(K[Q],q,K[Q].valueOf),F(K,B),$[A]=!0},e01a:function(t,e,i){"use strict";var s=i("23e7"),n=i("83ab"),r=i("da84"),a=i("5135"),o=i("861d"),c=i("9bf2").f,l=i("e893"),u=r.Symbol;if(n&&"function"==typeof u&&(!("description"in u.prototype)||void 0!==u().description)){var f={},p=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),e=this instanceof p?new u(t):void 0===t?u():u(t);return""===t&&(f[e]=!0),e};l(p,u);var d=p.prototype=u.prototype;d.constructor=p;var v=d.toString,m="Symbol(test)"==String(u("test")),b=/^Symbol\((.*)\)[^)]+$/;c(d,"description",{configurable:!0,get:function(){var t=o(this)?this.valueOf():this,e=v.call(t);if(a(f,t))return"";var i=m?e.slice(7,-1):e.replace(b,"$1");return""===i?void 0:i}}),s({global:!0,forced:!0},{Symbol:p})}},e538:function(t,e,i){var s=i("b622");e.f=s},f820:function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},n=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"about"},[i("h1",[t._v("This is an about page")])])}],r=i("2877"),a={},o=Object(r["a"])(a,s,n,!1,null,null,null);e["default"]=o.exports}}]);
//# sourceMappingURL=about.398e6f8b.js.map