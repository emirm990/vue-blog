(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{"290e":function(t,e,n){"use strict";var r=n("e36e"),a=n.n(r);a.a},"3bea":function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("router-link",{attrs:{to:"/"}},[t._v("Home")]),t.logged?n("Editor"):n("Login",{on:{"logged-in":function(e){t.logged=!0}}})],1)},a=[],s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("form",{staticClass:"about"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.title,expression:"title"}],staticClass:"title",attrs:{type:"text",placeholder:"Blog title",required:""},domProps:{value:t.title},on:{input:function(e){e.target.composing||(t.title=e.target.value)}}}),n("div",[n("wysiwyg",{model:{value:t.myHTML,callback:function(e){t.myHTML=e},expression:"myHTML"}})],1),n("transition-group",{attrs:{name:"list-complete"}},[t.editing?t._e():n("input",{key:1,staticClass:"button button-background list-complete-item",attrs:{type:"submit",value:"Submit"},on:{click:function(e){return e.preventDefault(),t.createBlog(e)}}}),t.editing?n("input",{key:2,staticClass:"button button-background list-complete-item",attrs:{type:"button",value:"Update"},on:{click:function(e){return e.preventDefault(),t.updateBlog(e)}}}):t._e(),t.editing?n("input",{key:3,staticClass:"button button-background list-complete-item",attrs:{type:"button",value:"Cancel"},on:{click:function(e){return e.preventDefault(),t.cancelUpdate(e)}}}):t._e()])],1),n("div",[n("p",[t._v(t._s(t.status))])]),n("transition-group",{attrs:{name:"list-complete",tag:"div"}},t._l(t.blogs,(function(e){return n("div",{key:e._id,staticClass:"blog list-complete-item"},[n("div",{staticClass:"blog-header"},[n("h2",{staticClass:"blog-title"},[t._v(t._s(e.title))]),n("p",{staticClass:"blog-date"},[t._v(t._s(e.createdAt.getDate()+"/"+e.createdAt.getMonth()+"/"+e.createdAt.getFullYear()))]),n("button",{staticClass:"button",on:{click:function(n){return t.editBlog(e._id)}}},[t._v("Edit blog")]),n("button",{staticClass:"button",on:{click:function(n){return t.deleteBlog(e._id)}}},[t._v("Delete blog")])])])})),0)],1)},i=[],o=(n("96cf"),n("89ba")),u=(n("a4d3"),n("4de4"),n("4160"),n("d81d"),n("0d03"),n("e439"),n("dbb4"),n("b64b"),n("d3b7"),n("159b"),n("2fa7")),c=n("9f12"),l=n("53fe"),p=n("7338"),d=n.n(p);function g(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function m(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?g(n,!0).forEach((function(e){Object(u["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):g(n).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var f="api/blogs",h="api/blogs/login",v=function(){function t(){Object(c["a"])(this,t)}return Object(l["a"])(t,null,[{key:"login",value:function(t,e){return d.a.post(h,{username:t,password:e})}},{key:"getBlogs",value:function(){return new Promise(function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(e,n){var r,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,d.a.get(f);case 3:r=t.sent,a=r.data,e(a.map((function(t){return m({},t,{createdAt:new Date(t.createdAt)})}))),t.next=11;break;case 8:t.prev=8,t.t0=t["catch"](0),n(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e,n){return t.apply(this,arguments)}}())}},{key:"insertBlog",value:function(t,e){return d.a.post(f,{title:t,text:e})}},{key:"deleteBlog",value:function(t){return d.a.delete(f,{data:{id:t}})}},{key:"editBlog",value:function(t){return d.a.get(f,{params:{id:t}})}},{key:"updateBlog",value:function(t,e,n){return d.a.post(f,{id:t,title:e,text:n})}}]),t}(),b=v,w={name:"Editor",data:function(){return{blogs:[],myHTML:"",title:"",error:"",blog:"",blogData:"",id:"",status:"",editing:!1}},methods:{createBlog:function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,b.insertBlog(this.title,this.myHTML);case 3:return e=t.sent,t.next=6,b.getBlogs();case 6:this.blogs=t.sent,this.myHTML="",this.title="",this.status=e.data,t.next=15;break;case 12:t.prev=12,t.t0=t["catch"](0),this.error=t.t0.message;case 15:case"end":return t.stop()}}),t,this,[[0,12]])})));function e(){return t.apply(this,arguments)}return e}(),deleteBlog:function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(e){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!confirm("Are you sure you want to delete this blog?")){t.next=8;break}return t.next=3,b.deleteBlog(e);case 3:return n=t.sent,t.next=6,b.getBlogs();case 6:this.blogs=t.sent,this.status=n.data;case 8:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}(),editBlog:function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,b.editBlog(e);case 3:this.blog=t.sent,this.blogData=this.blog.data,this.myHTML=this.blogData.text,this.title=this.blogData.title,this.id=this.blogData._id,this.editing=!0,t.next=14;break;case 11:t.prev=11,t.t0=t["catch"](0),this.error=t.t0.message;case 14:case"end":return t.stop()}}),t,this,[[0,11]])})));function e(e){return t.apply(this,arguments)}return e}(),updateBlog:function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,b.updateBlog(this.id,this.title,this.myHTML);case 3:return e=t.sent,t.next=6,b.getBlogs();case 6:this.blogs=t.sent,this.status=e.data,this.editing=!1,this.title="",this.myHTML="",t.next=16;break;case 13:t.prev=13,t.t0=t["catch"](0),this.error=t.t0.message;case 16:case"end":return t.stop()}}),t,this,[[0,13]])})));function e(){return t.apply(this,arguments)}return e}(),cancelUpdate:function(){this.id="",this.title="",this.myHTML="",this.editing=!1}},created:function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,b.getBlogs();case 3:this.blogs=t.sent,t.next=9;break;case 6:t.prev=6,t.t0=t["catch"](0),this.error=t.t0.message;case 9:case"end":return t.stop()}}),t,this,[[0,6]])})));function e(){return t.apply(this,arguments)}return e}()},y=w,k=(n("58d3"),n("2877")),x=Object(k["a"])(y,s,i,!1,null,null,null),_=x.exports,O=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("form",[n("div",{staticClass:"form-group"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.username,expression:"username"}],attrs:{name:"username",type:"text"},domProps:{value:t.username},on:{input:function(e){e.target.composing||(t.username=e.target.value)}}}),n("label",{class:{typing:t.username},attrs:{for:"username"}},[t._v("username")])]),n("div",{staticClass:"form-group"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],attrs:{name:"password",type:"password",autocomplete:""},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}}),n("label",{class:{typing:t.password},attrs:{for:"password"}},[t._v("password")]),n("span",{staticClass:"view-password",on:{click:t.showPassword}},[t.show?n("font-awesome-icon",{attrs:{icon:"eye-slash"}}):n("font-awesome-icon",{attrs:{icon:"eye"}})],1),t.show&&t.password?n("div",{staticClass:"view-password-data"},[t._v(t._s(t.password))]):t._e()]),n("div",{staticClass:"form-group"},[n("input",{attrs:{type:"submit",value:"Login",autofocus:""},on:{click:function(e){return e.preventDefault(),t.login(t.username,t.password)}}})]),""!=t.error?n("div",{staticClass:"error-container"},[n("p",{staticClass:"error"},[t._v(t._s(t.error))])]):t._e()])])},j=[],B={name:"Login",data:function(){return{username:"",password:"",logged:!1,error:"",show:!1,status:""}},methods:{login:function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(e,n){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,b.login(e,n);case 3:r=t.sent,this.status=r.data,"logged"==this.status&&(this.logged=!0,this.$emit("logged-in")),t.next=11;break;case 8:t.prev=8,t.t0=t["catch"](0),this.error=t.t0.message;case 11:case"end":return t.stop()}}),t,this,[[0,8]])})));function e(e,n){return t.apply(this,arguments)}return e}(),showPassword:function(){this.show=!this.show}}},C=B,D=(n("290e"),Object(k["a"])(C,O,j,!1,null,"533f6334",null)),L=D.exports,P={name:"LoginView",components:{Editor:_,Login:L},data:function(){return{logged:!1}}},R=P,H=Object(k["a"])(R,r,a,!1,null,null,null);e["default"]=H.exports},"58d3":function(t,e,n){"use strict";var r=n("f08e"),a=n.n(r);a.a},e36e:function(t,e,n){},f08e:function(t,e,n){}}]);
//# sourceMappingURL=about.c83bab35.js.map