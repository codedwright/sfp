(function(e){function t(t){for(var r,s,o=t[0],c=t[1],u=t[2],p=0,f=[];p<o.length;p++)s=o[p],Object.prototype.hasOwnProperty.call(i,s)&&i[s]&&f.push(i[s][0]),i[s]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);l&&l(t);while(f.length)f.shift()();return a.push.apply(a,u||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,o=1;o<n.length;o++){var c=n[o];0!==i[c]&&(r=!1)}r&&(a.splice(t--,1),e=s(s.s=n[0]))}return e}var r={},i={app:0},a=[];function s(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=r,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(n,r,function(t){return e[t]}.bind(null,r));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/sfp/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=t,o=o.slice();for(var u=0;u<o.length;u++)t(o[u]);var l=c;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"3c24":function(e,t,n){"use strict";var r=n("fa06"),i=n.n(r);i.a},"3f4d":function(e,t,n){},"4e7e":function(e,t,n){"use strict";var r=n("e47f"),i=n.n(r);i.a},"4fe5":function(e,t,n){"use strict";var r=n("3f4d"),i=n.n(r);i.a},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("nav",{staticClass:"navbar"},[n("button",{staticClass:"navbar_menu",on:{click:function(t){e.open=!e.open}}},[e._v("☰")]),n("Genres",{staticClass:"genres",attrs:{open:e.open},on:{changeGenre:e.changeGenre,closeDrawer:e.closeDrawer}})],1),n("Grid",{staticClass:"grid",attrs:{genre:e.genre,title:e.title}})],1)},a=[],s=(n("b0c0"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"grid"},[e.moviesArray?n("Movies",{staticClass:"movies",attrs:{movies:e.moviesArray.results,title:e.title}}):e._e(),e.moviesArray?n("nav",{staticClass:"pagination"},[n("a",{staticClass:"pagination_link",on:{click:function(t){e.page=1}}},[e._v("First")]),e.previousPage?n("a",{staticClass:"pagination_link",attrs:{href:""},on:{click:function(t){e.page=e.previousPage}}},[e._v(e._s(e.previousPage))]):e._e(),n("a",{staticClass:"pagination_link pagination_link--current"},[e._v(e._s(e.moviesArray.page))]),e.nextPage?n("a",{staticClass:"pagination_link",on:{click:function(t){e.page=e.nextPage}}},[e._v(e._s(e.nextPage))]):e._e(),n("a",{staticClass:"pagination_link",on:{click:function(t){e.page=e.moviesArray.total_pages}}},[e._v("Last")])]):e._e()],1)}),o=[],c=(n("99af"),n("a9e3"),n("96cf"),n("1da1")),u=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"movies"},[n("h1",[e._v(e._s(e.title)+" Movies ")]),n("div",{staticClass:"movies_listing"},e._l(e.movies,(function(t){return n("div",{key:t.id,staticClass:"card"},[n("img",{staticClass:"card_img",attrs:{src:"https://image.tmdb.org/t/p/w500"+t.poster_path,alt:""}}),n("h2",{staticClass:"card_title"},[e._v(e._s(t.original_title))]),n("small",{staticClass:"card_average-rating"},[e._v("Average Rating: "+e._s(t.vote_average))])])})),0)])},l=[],p={name:"Movies",props:{movies:Array,title:String}},f=p,v=(n("4e7e"),n("2877")),h=Object(v["a"])(f,u,l,!1,null,"b2455686",null),g=h.exports,d=n("bc3a"),m=n.n(d),_={name:"Grid",props:{genre:Number,title:String},data:function(){return{moviesArray:null,previousPage:null,page:1,nextPage:2}},components:{Movies:g},mounted:function(){this.moviesRequest()},methods:{moviesRequest:function(){var e=Object(c["a"])(regeneratorRuntime.mark((function e(){var t=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,m.a.get("https://api.themoviedb.org/3/discover/movie?with_genres=".concat(this.genre,"&page=").concat(this.page),{headers:{authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4MzkyZDU4ODM2ZmMxMTdhZTkyZWViZjhhYjVkN2M1OCIsInN1YiI6IjVmMDQ4ZGE5MjBhZjc3MDAzOGU2ODNjNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.sP0KrMGnLu1Tad0eh-vg28lcdo0-Db-wShHNYuu-k_o"}}).then((function(e){return t.moviesArray=e.data}));case 2:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()},watch:{genre:function(){this.page=1,this.moviesRequest()},page:function(){this.moviesRequest()},moviesArray:function(){this.previousPage=this.moviesArray.page-1!==0?this.moviesArray.page-1:null,this.nextPage=this.moviesArray.page+1>this.moviesArray.total_pages?null:this.moviesArray.page+1}}},y=_,b=(n("3c24"),Object(v["a"])(y,s,o,!1,null,"7de81c14",null)),j=b.exports,w=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"genres",class:{"genres--open":e.open}},[n("button",{staticClass:"navbar_menu",on:{click:e.closeDrawer}},[e._v("x")]),n("h1",[e._v("Genres")]),e._l(e.genresArray,(function(t){return n("a",{key:t.id,staticClass:"genres_list-item",class:{"genres_list-item--active":e.selectedGenre===t.id},on:{click:function(n){return e.changeGenre(t)}}},[e._v(" "+e._s(t.name)+" ")])}))],2)},O=[],k={name:"Genres",props:["open"],data:function(){return{genresArray:[],selectedGenre:28}},mounted:function(){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,m.a.get("https://api.themoviedb.org/3/genre/movie/list",{headers:{authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4MzkyZDU4ODM2ZmMxMTdhZTkyZWViZjhhYjVkN2M1OCIsInN1YiI6IjVmMDQ4ZGE5MjBhZjc3MDAzOGU2ODNjNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.sP0KrMGnLu1Tad0eh-vg28lcdo0-Db-wShHNYuu-k_o"}}).then((function(t){return e.genresArray=t.data.genres}));case 2:case"end":return t.stop()}}),t)})))()},methods:{changeGenre:function(e){this.$emit("changeGenre",e),this.$emit("closeDrawer"),this.selectedGenre=e.id},closeDrawer:function(){this.$emit("closeDrawer")}},computed:{isActive:function(e){return console.log(e),e===this.selectedGenre}}},C=k,G=(n("4fe5"),Object(v["a"])(C,w,O,!1,null,"dc95e672",null)),M=G.exports,x={name:"App",components:{Grid:j,Genres:M},data:function(){return{genre:28,title:"Action",open:!1}},methods:{changeGenre:function(e){this.genre=e.id,this.title=e.name},closeDrawer:function(){this.open=!1}}},A=x,I=(n("5c0b"),Object(v["a"])(A,i,a,!1,null,null,null)),D=I.exports;r["a"].config.productionTip=!1,new r["a"]({render:function(e){return e(D)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";var r=n("9c0c"),i=n.n(r);i.a},"9c0c":function(e,t,n){},e47f:function(e,t,n){},fa06:function(e,t,n){}});
//# sourceMappingURL=app.7a37b053.js.map