(function(e){function t(t){for(var r,s,l=t[0],u=t[1],o=t[2],f=0,d=[];f<l.length;f++)s=l[f],i[s]&&d.push(i[s][0]),i[s]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);c&&c(t);while(d.length)d.shift()();return a.push.apply(a,o||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,l=1;l<n.length;l++){var u=n[l];0!==i[u]&&(r=!1)}r&&(a.splice(t--,1),e=s(s.s=n[0]))}return e}var r={},i={app:0},a=[];function s(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=r,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(n,r,function(t){return e[t]}.bind(null,r));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=t,l=l.slice();for(var o=0;o<l.length;o++)t(l[o]);var c=u;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var r=n("64a9"),i=n.n(r);i.a},"31f2":function(e,t,n){"use strict";var r=n("ec41"),i=n.n(r);i.a},"56d7":function(e,t,n){"use strict";n.r(t);var r=n("2b0e"),i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("HelloWorld",{attrs:{msg:"Welcome to Your Vue.js App"}})],1)},a=[],s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"hello"},[n("el-dialog",{attrs:{title:"Groups",visible:e.dialogVisible,fullscreen:"",center:""},on:{"update:visible":function(t){e.dialogVisible=t}}},e._l(e.groups,function(t,r){return n("el-card",{key:t.map(function(e,t){return"group_card"+e.id+t}).join(""),staticClass:"card2"},[n("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[n("span",[e._v("Group "+e._s(parseInt(r)+1))])]),e._l(t,function(t,r){return n("div",{key:"$player_row_in_card{player.id}"+r,staticClass:"text item"},[e._v("\n    "+e._s(t.id)+"\n  ")])})],2)}),1),e._m(0),n("div",{staticClass:"main-buttons"},[n("span",[e._v("Maximum Number Of Players Per Group ")]),n("el-input-number",{attrs:{min:"1",size:"mini","controls-position":"right",placeholder:"New Player"},model:{value:e.maximum,callback:function(t){e.maximum=t},expression:"maximum"}}),n("el-button",{staticClass:"button is-primary",staticStyle:{"margin-left":"20px"},on:{click:e.shuffleDeck}},[e._v("\n      Shuffle "),n("i",{staticClass:"fas fa-random"})])],1),n("transition-group",{staticClass:"deck",attrs:{name:e.shuffleSpeed,tag:"div"}},[e._l(e.cards,function(t){return n("el-card",{key:t.id,staticClass:"card"},[n("span",[e._v(e._s(t.id)+" ")]),n("el-button",{attrs:{type:"danger",icon:"el-icon-delete",circle:""},on:{click:function(n){return e.removePlayer(t.id)}}})],1)}),n("el-card",{key:"input_card",staticClass:"card"},[n("el-input",{attrs:{placeholder:"New Player"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.addPlayer(t)}},model:{value:e.newPlayerInput,callback:function(t){e.newPlayerInput=t},expression:"newPlayerInput"}})],1)],2)],1)},l=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("h1",{staticClass:"title"},[n("img",{staticClass:"vue-logo",attrs:{src:"https://vuejs.org/images/logo.png"}}),e._v("\n    Group Generator\n  ")])}],u=n("cebc"),o=n("2ef0"),c=(n("359c"),{data:function(){return{dialogVisible:!1,groups:[],newPlayerInput:"",defaultPlayers:[],cards:[],maximum:3,shuffleSpeed:"shuffleMedium",shuffleTypes:["Slow","Medium","Fast"],isDeckShuffled:!1,shuffleCount:0}},created:function(){this.displayInitialDeck(),this.createGroups()},methods:{displayInitialDeck:function(){this.cards=[];for(var e=0;e<this.defaultPlayers.length;e++){var t={id:this.defaultPlayers[e]};this.cards.push(t)}this.isDeckShuffled=!1,this.shuffleCount=0},createGroups:function(){var e=this,t=o["shuffle"](this.cards),n=(o["ceil"](t.length/this.maximum),t.length%this.maximum===1),r=o["map"](t,function(t,n){return Object(u["a"])({},t,{group:o["floor"](n/e.maximum)})});n&&r.length>1&&r[r.length-2].group++;var i=o["groupBy"](r,function(e){return e.group});console.log(i),this.$set(this,"groups",i),console.log("last team is single:".concat(n))},removePlayer:function(e){this.$set(this,"cards",o["filter"](this.cards,function(t){return t.id!==e}))},addPlayer:function(){this.cards.push({id:this.newPlayerInput}),this.$set(this,"cards",this.cards),this.$set(this,"newPlayerInput","")},shuffleDeck:function(){this.createGroups(),this.dialogVisible=!0}}}),f=c,d=(n("31f2"),n("2877")),p=Object(d["a"])(f,s,l,!1,null,null,null),h=p.exports,m={name:"app",components:{HelloWorld:h}},y=m,v=(n("034f"),Object(d["a"])(y,i,a,!1,null,null,null)),g=v.exports,b=n("5c96"),_=n.n(b),k=(n("0fae"),n("b2d6")),P=n.n(k);r["default"].use(_.a,{locale:P.a}),r["default"].config.productionTip=!1,new r["default"]({render:function(e){return e(g)}}).$mount("#app")},"64a9":function(e,t,n){},ec41:function(e,t,n){}});
//# sourceMappingURL=app.5e710c58.js.map