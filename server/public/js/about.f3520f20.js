(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{"3bea":function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("router-link",{attrs:{to:"/"}},[t._v("Home")]),t.logged?n("Editor"):n("Login",{on:{"logged-in":function(e){t.logged=!0}}})],1)},a=[],s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("form",{staticClass:"about"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.title,expression:"title"}],staticClass:"title",attrs:{type:"text",placeholder:"Blog title",required:""},domProps:{value:t.title},on:{input:function(e){e.target.composing||(t.title=e.target.value)}}}),n("div",[n("wysiwyg",{model:{value:t.myHTML,callback:function(e){t.myHTML=e},expression:"myHTML"}})],1),n("transition-group",{attrs:{name:"list-complete"}},[t.editing?t._e():n("input",{key:1,staticClass:"button button-background list-complete-item",attrs:{type:"submit",value:"Submit"},on:{click:function(e){return e.preventDefault(),t.createBlog(e)}}}),t.editing?n("input",{key:2,staticClass:"button button-background list-complete-item",attrs:{type:"button",value:"Update"},on:{click:function(e){return e.preventDefault(),t.updateBlog(e)}}}):t._e(),t.editing?n("input",{key:3,staticClass:"button button-background list-complete-item",attrs:{type:"button",value:"Cancel"},on:{click:function(e){return e.preventDefault(),t.cancelUpdate(e)}}}):t._e()])],1),n("div",[n("p",[t._v(t._s(t.status))])]),n("transition-group",{attrs:{name:"list-complete",tag:"div"}},t._l(t.blogs,(function(e){return n("div",{key:e._id,staticClass:"blog list-complete-item"},[n("div",{staticClass:"blog-header"},[n("h2",{staticClass:"blog-title"},[t._v(t._s(e.title))]),n("p",{staticClass:"blog-date"},[t._v(t._s(e.createdAt.getDate()+"/"+e.createdAt.getMonth()+"/"+e.createdAt.getFullYear()))]),n("button",{staticClass:"button",on:{click:function(n){return t.editBlog(e._id)}}},[t._v("Edit blog")]),n("button",{staticClass:"button",on:{click:function(n){return t.deleteBlog(e._id)}}},[t._v("Delete blog")])])])})),0)],1)},i=[],o=(n("96cf"),n("89ba")),c=(n("a4d3"),n("4de4"),n("4160"),n("d81d"),n("0d03"),n("e439"),n("dbb4"),n("b64b"),n("d3b7"),n("159b"),n("2fa7")),u=n("9f12"),l=n("53fe"),g=n("7338"),d=n.n(g);function p(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function f(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?p(n,!0).forEach((function(e){Object(c["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):p(n).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var m="api/blogs",v="api/blogs/login",b=function(){function t(){Object(u["a"])(this,t)}return Object(l["a"])(t,null,[{key:"login",value:function(t,e){return d.a.post(v,{username:t,password:e})}},{key:"getBlogs",value:function(){return new Promise(function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(e,n){var r,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,d.a.get(m);case 3:r=t.sent,a=r.data,e(a.map((function(t){return f({},t,{createdAt:new Date(t.createdAt)})}))),t.next=11;break;case 8:t.prev=8,t.t0=t["catch"](0),n(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e,n){return t.apply(this,arguments)}}())}},{key:"insertBlog",value:function(t,e){return d.a.post(m,{title:t,text:e})}},{key:"deleteBlog",value:function(t){return d.a.delete(m,{data:{id:t}})}},{key:"editBlog",value:function(t){return d.a.get(m,{params:{id:t}})}},{key:"updateBlog",value:function(t,e,n){return d.a.post(m,{id:t,title:e,text:n})}}]),t}(),h=b,w={name:"Editor",data:function(){return{blogs:[],myHTML:"",title:"",error:"",blog:"",blogData:"",id:"",status:"",editing:!1}},methods:{createBlog:function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,h.insertBlog(this.title,this.myHTML);case 3:return e=t.sent,t.next=6,h.getBlogs();case 6:this.blogs=t.sent,this.myHTML="",this.title="",this.status=e.data,t.next=15;break;case 12:t.prev=12,t.t0=t["catch"](0),this.error=t.t0.message;case 15:case"end":return t.stop()}}),t,this,[[0,12]])})));function e(){return t.apply(this,arguments)}return e}(),deleteBlog:function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(e){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!confirm("Are you sure you want to delete this blog?")){t.next=8;break}return t.next=3,h.deleteBlog(e);case 3:return n=t.sent,t.next=6,h.getBlogs();case 6:this.blogs=t.sent,this.status=n.data;case 8:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}(),editBlog:function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,h.editBlog(e);case 3:this.blog=t.sent,this.blogData=this.blog.data,this.myHTML=this.blogData.text,this.title=this.blogData.title,this.id=this.blogData._id,this.editing=!0,t.next=14;break;case 11:t.prev=11,t.t0=t["catch"](0),this.error=t.t0.message;case 14:case"end":return t.stop()}}),t,this,[[0,11]])})));function e(e){return t.apply(this,arguments)}return e}(),updateBlog:function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,h.updateBlog(this.id,this.title,this.myHTML);case 3:return e=t.sent,t.next=6,h.getBlogs();case 6:this.blogs=t.sent,this.status=e.data,this.editing=!1,this.title="",this.myHTML="",t.next=16;break;case 13:t.prev=13,t.t0=t["catch"](0),this.error=t.t0.message;case 16:case"end":return t.stop()}}),t,this,[[0,13]])})));function e(){return t.apply(this,arguments)}return e}(),cancelUpdate:function(){this.id="",this.title="",this.myHTML="",this.editing=!1}},created:function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,h.getBlogs();case 3:this.blogs=t.sent,t.next=9;break;case 6:t.prev=6,t.t0=t["catch"](0),this.error=t.t0.message;case 9:case"end":return t.stop()}}),t,this,[[0,6]])})));function e(){return t.apply(this,arguments)}return e}()},y=w,k=(n("58d3"),n("c0f9"),n("2877")),x=Object(k["a"])(y,s,i,!1,null,"4e79c164",null),_=x.exports,O=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("form",[n("div",{staticClass:"form-group"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.username,expression:"username"}],attrs:{name:"username",type:"text"},domProps:{value:t.username},on:{input:function(e){e.target.composing||(t.username=e.target.value)}}}),n("label",{class:{typing:t.username},attrs:{for:"username"}},[t._v("username")])]),n("div",{staticClass:"form-group"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],attrs:{name:"password",type:"password",autocomplete:""},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}}),n("label",{class:{typing:t.password},attrs:{for:"password"}},[t._v("password")]),n("span",{staticClass:"view-password",on:{click:t.showPassword}},[t.show?n("font-awesome-icon",{attrs:{icon:"eye-slash"}}):n("font-awesome-icon",{attrs:{icon:"eye"}})],1),t.show&&t.password?n("div",{staticClass:"view-password-data"},[t._v(t._s(t.password))]):t._e()]),n("div",{staticClass:"form-group"},[n("input",{attrs:{type:"submit",value:"Login",autofocus:""},on:{click:function(e){return e.preventDefault(),t.login(t.username,t.password)}}})]),""!=t.error?n("div",{staticClass:"error-container"},[n("p",{staticClass:"error"},[t._v(t._s(t.error))])]):t._e()])])},C=[],j={name:"Login",data:function(){return{username:"",password:"",logged:!1,error:"",show:!1,status:""}},methods:{login:function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(e,n){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,h.login(e,n);case 3:r=t.sent,this.status=r.data,"logged"==this.status&&(this.logged=!0,this.$emit("logged-in")),t.next=11;break;case 8:t.prev=8,t.t0=t["catch"](0),this.error=t.t0.message;case 11:case"end":return t.stop()}}),t,this,[[0,8]])})));function e(e,n){return t.apply(this,arguments)}return e}(),showPassword:function(){this.show=!this.show}}},B=j,D=(n("6a46"),Object(k["a"])(B,O,C,!1,null,"6a56cc22",null)),L=D.exports,R={name:"LoginView",components:{Editor:_,Login:L},data:function(){return{logged:!1}}},P=R,H=Object(k["a"])(P,r,a,!1,null,null,null);e["default"]=H.exports},"4b91":function(t,e,n){},5447:function(t,e,n){},"58d3":function(t,e,n){"use strict";var r=n("f08e"),a=n.n(r);a.a},"6a46":function(t,e,n){"use strict";var r=n("5447"),a=n.n(r);a.a},c0f9:function(t,e,n){"use strict";var r=n("c79f"),a=n.n(r);a.a},c2f7:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("router-link",{attrs:{to:"/"}},[t._v("Home")]),n("div",{staticClass:"blog"},[n("div",{staticClass:"blog-header"},[n("h2",{staticClass:"blog-title"},[t._v(t._s(t.blog.title))]),t.loaded?n("p",{staticClass:"blog-date"},[t._v(t._s(new Date(t.blog.createdAt).getDate()+"/"+new Date(t.blog.createdAt).getMonth()+"/"+new Date(t.blog.createdAt).getFullYear()+" - "+new Date(t.blog.createdAt).getHours()+":"+new Date(t.blog.createdAt).getMinutes()))]):t._e()]),n("div",{staticClass:"blog-body"},[n("div",{staticClass:"blog-text editr--content",domProps:{innerHTML:t._s(t.blog.text)}},[t._v(t._s(t.blog.text))])])])],1)},a=[],s=(n("96cf"),n("89ba")),i=n("9f12"),o=n("53fe"),c=n("7338"),u=n.n(c),l="../api/blog",g=function(){function t(){Object(i["a"])(this,t)}return Object(o["a"])(t,null,[{key:"getBlog",value:function(t){return console.log(t),u.a.get(l,{params:{id:t}})}}]),t}(),d=g,p={name:"BlogView",data:function(){return{blog:{},loaded:!1,error:""}},created:function(){var t=Object(s["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,d.getBlog(this.$route.params.id);case 3:e=t.sent,this.blog=e.data,this.loaded=!0,t.next=11;break;case 8:t.prev=8,t.t0=t["catch"](0),this.error=t.t0.message;case 11:case"end":return t.stop()}}),t,this,[[0,8]])})));function e(){return t.apply(this,arguments)}return e}()},f=p,m=(n("f126"),n("2877")),v=Object(m["a"])(f,r,a,!1,null,"6b3e65e2",null);e["default"]=v.exports},c79f:function(t,e,n){},f08e:function(t,e,n){},f126:function(t,e,n){"use strict";var r=n("4b91"),a=n.n(r);a.a}}]);
//# sourceMappingURL=about.f3520f20.js.map