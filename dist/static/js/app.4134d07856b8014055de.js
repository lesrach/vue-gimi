webpackJsonp([1],{"2o1a":function(t,s){},Fov0:function(t,s){},GHD2:function(t,s){},I7OC:function(t,s){},LMWv:function(t,s){},NHnr:function(t,s,i){"use strict";function e(t){i("LMWv")}function a(t){i("rIOR")}function n(t){i("GHD2")}function r(t){i("syEQ")}function o(t){i("WK04")}function c(t){i("zRWw")}function l(t){i("Fov0")}function p(t){i("I7OC")}function d(t){i("X53L")}function u(t){i("rs/R")}function v(t){i("Rdl6")}function m(t){i("2o1a")}function _(t,s){if(s&&s.length)for(var i=0;i<s.length;i++)if(s[i].id===t.id)return i;return-1}function h(t){i("peXC")}function g(t,s){var i;return s.forEach(function(s,e){s.id==t&&(i=s)}),i||(i=s[0]),i}Object.defineProperty(s,"__esModule",{value:!0});var f=i("TWX9"),C={name:"app"},w=function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{attrs:{id:"app"}},[i("router-view")],1)},x=[],y={render:w,staticRenderFns:x},b=y,k=i("/Xao"),$=e,j=k(C,b,!1,$,null,null),S=j.exports,I=i("zO6J"),E={name:"Parts",props:["title","type","href"],data:function(){return{count:10,data:[]}},computed:{item:function(){return this.data.splice(0,this.count)}},created:function(){var t=this;this.data=this.$store.state.products.filter(function(s){return s.type==t.type})},methods:{goods:function(t){for(var s=t.target;s.dataset&&!s.dataset.id;)s=s.parentNode;s.dataset&&s.dataset.id&&this.$router.push("/goods/"+s.dataset.id)}}},R=function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"parts"},[i("div",{staticClass:"header"},[t._v(t._s(t.title))]),t._v(" "),t._l(t.item,function(s){return i("div",{staticClass:"item-box"},[i("a",{attrs:{"data-id":s.id},on:{"!click":function(s){t.goods(s)}}},[i("img",{attrs:{src:s.src[0],alt:""}}),t._v(" "),i("div",{staticClass:"msg"},[i("div",{staticClass:"name"},[t._v(t._s(s.name))]),t._v(" "),i("div",{staticClass:"details"},[t._v(t._s(s.details))]),t._v(" "),i("div",{staticClass:"price"},[t._v(t._s(s.price))])]),t._v(" "),"send"===s.tip?i("span",{staticClass:"send"},[t._v("下单赠")]):t._e(),t._v(" "),"re"===s.tip?i("span",{staticClass:"re"},[t._v("立减")]):t._e(),t._v(" "),"hot"===s.tip?i("span",{staticClass:"hot"},[t._v("热销")]):t._e(),t._v(" "),"new"===s.tip?i("span",{staticClass:"new"},[t._v("新品")]):t._e()])])}),t._v(" "),i("router-link",{staticClass:"load",attrs:{to:t.href}},[t._v("浏览更多>>")])],2)},X=[],F={render:R,staticRenderFns:X},A=F,P=i("/Xao"),H=a,O=P(E,A,!1,H,null,null),N=O.exports,D={name:"Footer",data:function(){return{cartnum:0}},created:function(){var t=localStorage.getItem("products");t&&(t=JSON.parse(t),this.cartnum=t.length)}},T=function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"footer"},[i("router-link",{staticClass:"link",attrs:{to:"/shop"}},[i("span",{staticClass:"iconfont icon-shouye"}),i("p",[t._v("首页")])]),t._v(" "),i("router-link",{staticClass:"link",attrs:{to:"/cart"}},[i("span",{staticClass:"iconfont icon-gouwuche1"},[t.cartnum>0?i("span",{staticClass:"cartnum"},[t._v(t._s(t.cartnum))]):t._e()]),t._v(" "),i("p",[t._v("购物车")])]),t._v(" "),i("router-link",{staticClass:"link",attrs:{to:"/user"}},[i("span",{staticClass:"iconfont icon-gerenzhongxin"}),i("p",[t._v("用户中心")])]),t._v(" "),i("router-link",{staticClass:"link",attrs:{to:"/community"}},[i("span",{staticClass:"iconfont icon-shequ"}),i("p",[t._v("社区")])])],1)},Z=[],L={render:T,staticRenderFns:Z},M=L,G=i("/Xao"),K=n,q=G(D,M,!1,K,null,null),z=q.exports,J={name:"Shop",data:function(){return{swiperOption:{pagination:".swiper-pagination",loop:!0}}},components:{Parts:N,Footers:z}},W=function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{attrs:{id:"shop"}},[i("div",{staticClass:"container"},[i("div",{staticClass:"focusad"},[i("swiper",{staticClass:"swiper-box",attrs:{options:t.swiperOption}},[i("swiper-slide",{staticClass:"swiper-item"},[i("router-link",{attrs:{to:"#"}},[i("img",{attrs:{src:"/static/img/banner1.jpg"}})])],1),t._v(" "),i("swiper-slide",{staticClass:"swiper-item"},[i("router-link",{attrs:{to:"#"}},[i("img",{attrs:{src:"/static/img/banner2.jpg"}})])],1),t._v(" "),i("swiper-slide",{staticClass:"swiper-item"},[i("router-link",{attrs:{to:"#"}},[i("img",{attrs:{src:"/static/img/banner3.jpg"}})])],1),t._v(" "),i("div",{staticClass:"swiper-pagination",attrs:{slot:"pagination"},slot:"pagination"})],1)],1),t._v(" "),t._m(0,!1,!1),t._v(" "),i("Parts",{attrs:{title:"无屏电视",href:"/category/1",type:"tv",id:"main"}}),t._v(" "),i("Parts",{attrs:{title:"精选套餐",href:"/category/2",type:"select",id:"group"}}),t._v(" "),i("Parts",{attrs:{title:"推荐配件",href:"/category/1",type:"part",id:"parts"}})],1),t._v(" "),i("Footers")],1)},U=[function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"href"},[i("a",{attrs:{href:"#main"}},[i("p",[i("img",{attrs:{src:"/static/img/href1.png",alt:""}})]),i("p",[t._v("无屏电视")])]),t._v(" "),i("a",{attrs:{href:"#group"}},[i("p",[i("img",{attrs:{src:"/static/img/href2.png",alt:""}})]),i("p",[t._v("精选套餐")])]),t._v(" "),i("a",{attrs:{href:"#parts"}},[i("p",[i("img",{attrs:{src:"/static/img/href3.png",alt:""}})]),i("p",[t._v("推荐配件")])])])}],B={render:W,staticRenderFns:U},Q=B,V=i("/Xao"),Y=r,tt=V(J,Q,!1,Y,null,null),st=tt.exports,it=i("3cXf"),et=i.n(it),at={name:"Cart",data:function(){return{products:[],rproducts:[],height:0}},components:{Footers:z},created:function(){var t=localStorage.getItem("products");t&&t.length&&(t=JSON.parse(t),this.products=t),this.rproducts=this.$store.state.rproducts,this.height=window.innerHeight+"px",console.log(this.rproducts)},computed:{count:function(){for(var t=0,s=0;s<this.products.length;s++)t+=parseInt(this.products[s].price)*this.products[s].num;return t}},methods:{back:function(){this.$router.go(-1)},re:function(t){var s=this.products.indexOf(t);this.products[s].num<=1||(this.products[s].num--,localStorage.setItem("products",et()(this.products)))},add:function(t){var s=this.products.indexOf(t);this.products[s].num++,localStorage.setItem("products",et()(this.products))},deleted:function(t){var s=this.products.indexOf(t);this.products.splice(s,1),localStorage.setItem("products",et()(this.products))}}},nt=function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{attrs:{id:"cart"}},[i("div",{staticClass:"back",style:{height:t.height}}),t._v(" "),i("div",{staticClass:"header"},[i("div",{on:{click:t.back}},[i("span",{staticClass:"iconfont icon-xiangzuo-copy"})]),t._v(" "),i("span",[t._v("购物车")])]),t._v(" "),i("div",{staticClass:"container"},[0==t.products.length?i("div",{staticClass:"empty-result"},[i("span",{staticClass:"iconfont icon-gouwuche"}),t._v("你的购物车是空的\n\t\t")]):t._e(),t._v(" "),0!=t.products.length?i("div",{staticClass:"cartbox"},[t._l(t.products,function(s){return i("div",{staticClass:"item"},[i("a",{staticClass:"img",attrs:{href:"/goods/"+s.id}},[i("img",{attrs:{src:s.src[0],alt:""}})]),t._v(" "),i("div",{staticClass:"msg"},[i("div",{staticClass:"name"},[t._v(t._s(s.name))]),t._v(" "),i("div",{staticClass:"price"},[t._v(t._s(s.price))]),t._v(" "),i("div",{staticClass:"clearfix"},[i("button",{staticClass:"re",on:{click:function(i){t.re(s)}}},[i("span",{staticClass:"iconfont icon-jian"})]),t._v(" "),i("span",{staticClass:"num"},[t._v(t._s(s.num))]),t._v(" "),i("button",{staticClass:"add",on:{click:function(i){t.add(s)}}},[i("span",{staticClass:"iconfont icon-jia"})]),t._v(" "),i("button",{staticClass:"delete",on:{click:function(i){t.deleted(s)}}},[i("span",{staticClass:"iconfont icon-shanchu"})])])])])}),t._v(" "),i("a",{staticClass:"info",attrs:{href:"#"}},[t._v("购买前请仔细阅读《极米激光无屏电视售后政策》")])],2):t._e(),t._v(" "),i("div",{staticClass:"suggest"},[i("div",{staticClass:"title"},[t._v("最近浏览或相关推荐")]),t._v(" "),i("div",{staticClass:"sbox"},t._l(t.rproducts,function(s){return i("div",{staticClass:"r-item"},[i("a",{attrs:{href:s.link}},[i("img",{attrs:{src:s.src[0],alt:""}}),t._v(" "),i("p",[t._v(t._s(s.name))]),t._v(" "),i("p",{staticClass:"price"},[t._v(t._s(s.price))])])])}))]),t._v(" "),0!=t.products.length?i("div",{staticClass:"settle"},[i("span",[t._v("总计：￥"+t._s(t.count)+"元")]),t._v(" "),i("a",{attrs:{href:"/check"}},[t._v("去结算")])]):t._e()]),t._v(" "),0==t.products.length?i("Footers"):t._e()],1)},rt=[],ot={render:nt,staticRenderFns:rt},ct=ot,lt=i("/Xao"),pt=o,dt=lt(at,ct,!1,pt,null,null),ut=dt.exports,vt={name:"User",data:function(){return{login:!1,username:""}},methods:{exit:function(){this.$store.commit("EXIT"),this.$router.push("/login")}},components:{Footers:z},created:function(){this.login=this.$store.state.login,this.username=this.$store.state.username}},mt=function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{attrs:{id:"user"}},[i("div",{staticClass:"container"},[i("div",{staticClass:"headimg"},[t.login?i("p",[t._v(t._s(t.username))]):i("p",{on:{click:function(s){t.$router.push("/login")}}},[t._v("立即登录")]),t._v(" "),i("img",{attrs:{src:"/static/img/headimg.gif",alt:"头像"}})]),t._v(" "),t._m(0,!1,!1),t._v(" "),t._m(1,!1,!1),t._v(" "),t._m(2,!1,!1),t._v(" "),t.login?i("div",{staticClass:"exit",on:{click:t.exit}},[t._v("退出登录")]):t._e()]),t._v(" "),i("Footers")],1)},_t=[function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"my"},[i("a",{attrs:{src:""}},[i("p",[i("span",{staticClass:"iconfont icon-dingdan"})]),t._v("全部订单")]),t._v(" "),i("a",{attrs:{src:""}},[i("p",[i("span",{staticClass:"iconfont icon-daifukuan"})]),t._v("代付款")]),t._v(" "),i("a",{attrs:{src:""}},[i("p",[i("span",{staticClass:"iconfont icon-daishouhuo"})]),t._v("待收货")]),t._v(" "),i("a",{attrs:{src:""}},[i("p",[i("span",{staticClass:"iconfont icon-yishouhuo"})]),t._v("已完成")])])},function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"fuli"},[i("a",{attrs:{src:""}},[i("span",{staticClass:"iconfont icon-hui"}),t._v("我的优惠券"),i("span",{staticClass:"iconfont icon-iconxiangyou lr"})]),t._v(" "),i("a",{attrs:{src:""}},[i("span",{staticClass:"iconfont icon-qian"}),t._v("我的现金券"),i("span",{staticClass:"iconfont icon-iconxiangyou lr"})]),t._v(" "),i("a",{attrs:{src:""}},[i("span",{staticClass:"iconfont icon-37"}),t._v("我的推荐码"),i("span",{staticClass:"iconfont icon-iconxiangyou lr"})]),t._v(" "),i("a",{attrs:{src:""}},[i("span",{staticClass:"iconfont icon-letter-g-outline"}),t._v("G卡通道"),i("span",{staticClass:"iconfont icon-iconxiangyou lr"})]),t._v(" "),i("a",{attrs:{src:""}},[i("span",{staticClass:"iconfont icon-fuwu-copy"}),t._v("我的服务"),i("span",{staticClass:"iconfont icon-iconxiangyou lr"})]),t._v(" "),i("a",{attrs:{src:""}},[i("span",{staticClass:"iconfont icon-shouhuodizhi"}),t._v("地址管理"),i("span",{staticClass:"iconfont icon-iconxiangyou lr"})]),t._v(" "),i("a",{staticClass:"online",attrs:{src:""}},[i("span",{staticClass:"iconfont icon-zaixiankefu"}),t._v("地址管理"),i("span",{staticClass:"iconfont icon-iconxiangyou lr"})])])},function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"msg"},[i("p",[t._v("致电客服"),i("a",{attrs:{href:"tel:4000028960"}},[t._v("400-0028-960")])]),t._v(" "),i("p",{staticClass:"under"},[t._v("每日9:00-23:00（仅收取市话费）")])])}],ht={render:mt,staticRenderFns:_t},gt=ht,ft=i("/Xao"),Ct=c,wt=ft(vt,gt,!1,Ct,null,null),xt=wt.exports,yt={name:"Community",components:{Footers:z,Flow:Rt},data:function(){return{_flows:[],num:5}},computed:{flows:function(){return this._flows.splice(0,this.num)}},created:function(){this._flows=this.$store.state.flows},methods:{add:function(){this.num+=2}}},bt=function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{attrs:{id:"flow"}},[t._l(t.flows,function(s){return i("div",{staticClass:"item"},[i("img",{attrs:{src:s.src,alt:""}}),t._v(" "),i("h3",[t._v(t._s(s.title))]),t._v(" "),i("p",[t._v(t._s(s.text))])])}),t._v(" "),i("div",{staticClass:"load",on:{click:t.add}},[t._v("查看更多...")])],2)},kt=[],$t={render:bt,staticRenderFns:kt},jt=$t,St=i("/Xao"),It=l,Et=St(yt,jt,!1,It,null,null),Rt=Et.exports,Xt={name:"Community",components:{Flow:Rt},data:function(){return{swiperOption:{pagination:".swiper-pagination",loop:!0},hots:[]}},methods:{user:function(){this.$router.push("/login/account")}},created:function(){this.hots=this.$store.state.hots}},Ft=function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{attrs:{id:"community"}},[i("div",{staticClass:"header"},[i("a",{attrs:{href:"#"},on:{click:t.user}},[i("span",{staticClass:"iconfont icon-yonghu"})]),t._v(" "),t._m(0,!1,!1),t._v(" "),i("img",{attrs:{src:"/static/img/logo.png",alt:"GIMI社区"}})]),t._v(" "),i("div",{staticClass:"container"},[i("div",{staticClass:"ad"},[i("swiper",{staticClass:"swiper-box",attrs:{options:t.swiperOption}},[i("swiper-slide",{staticClass:"swiper-item"},[i("router-link",{attrs:{to:"#"}},[i("img",{attrs:{src:"/static/img/com-banner1.jpg"}})])],1),t._v(" "),i("swiper-slide",{staticClass:"swiper-item"},[i("router-link",{attrs:{to:"#"}},[i("img",{attrs:{src:"/static/img/com-banner2.jpg"}})])],1),t._v(" "),i("swiper-slide",{staticClass:"swiper-item"},[i("router-link",{attrs:{to:"#"}},[i("img",{attrs:{src:"/static/img/com-banner3.jpg"}})])],1),t._v(" "),i("swiper-slide",{staticClass:"swiper-item"},[i("router-link",{attrs:{to:"#"}},[i("img",{attrs:{src:"/static/img/com-banner4.jpg"}})])],1),t._v(" "),i("div",{staticClass:"swiper-pagination",attrs:{slot:"pagination"},slot:"pagination"})],1)],1),t._v(" "),t._m(1,!1,!1),t._v(" "),i("Flow"),t._v(" "),i("div",{staticClass:"hot"},[i("h2",[t._v("热帖推荐")]),t._v(" "),t._l(t.hots,function(s){return i("div",{staticClass:"item"},[i("a",{attrs:{href:s.link}},[i("span",{staticClass:"iconfont icon-huoyan"}),t._v(t._s(s.text))])])}),t._v(" "),i("a",{staticClass:"load",attrs:{href:""}},[t._v("查看更多...")])],2),t._v(" "),t._m(2,!1,!1),t._v(" "),t._m(3,!1,!1)],1)])},At=[function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("a",{attrs:{href:"/search"}},[i("span",{staticClass:"iconfont icon-search"})])},function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"task"},[i("a",{attrs:{href:""}},[i("span",{staticClass:"qing iconfont icon-bankuaifl"}),i("p",[t._v("论坛版块")])]),t._v(" "),i("a",{attrs:{href:""}},[i("span",{staticClass:"lv iconfont icon-shangcheng"}),i("p",[t._v("积分商城")])]),t._v(" "),i("a",{attrs:{href:""}},[i("span",{staticClass:"hong iconfont icon-qiandao"}),i("p",[t._v("每日签到")])]),t._v(" "),i("a",{attrs:{href:""}},[i("span",{staticClass:"cheng iconfont icon-liwu"}),i("p",[t._v("极客视界")])])])},function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("a",{staticClass:"yao",attrs:{href:"plugin.php?id=shake_lottery&mobile=2"}},[i("span",{staticClass:"hand iconfont icon-yaoyiyao"}),i("span",[t._v("摇一摇 赢取极点")]),i("span",{staticClass:"toright iconfont icon-iconxiangyou"})])},function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"com-footer"},[i("span",{staticClass:"phone"},[t._v("触屏版")]),i("span",{staticClass:"both"},[t._v("|")]),i("span",{staticClass:"pc"},[t._v("电脑版")])])}],Pt={render:Ft,staticRenderFns:At},Ht=Pt,Ot=i("/Xao"),Nt=p,Dt=Ot(Xt,Ht,!1,Nt,null,null),Tt=Dt.exports,Zt={name:"Login"},Lt=function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{attrs:{id:"login"}},[i("router-link",{staticClass:"change",attrs:{to:"/login/account"}},[t._v("极米账户登录")]),t._v(" "),i("router-link",{staticClass:"change",attrs:{to:"/login/message"}},[t._v("短信快捷登录")]),t._v(" "),i("div",{staticClass:"formbox"},[i("router-view")],1),t._v(" "),i("div",{staticClass:"clearfix"},[i("router-link",{staticClass:"register",attrs:{to:"/register"}},[t._v("注册新账号")]),t._v(" "),i("router-link",{staticClass:"help",attrs:{to:"/register"}},[t._v("忘记密码")])],1),t._v(" "),t._m(0,!1,!1),t._v(" "),t._m(1,!1,!1)],1)},Mt=[function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"info"},[i("span",[t._v("其他方式登录")]),t._v(" "),i("div",{staticClass:"back"})])},function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"other"},[i("a",{staticClass:"qq",attrs:{href:"#"}},[i("span",{staticClass:"iconfont icon-qq"})]),t._v(" "),i("a",{staticClass:"sina",attrs:{href:"#"}},[i("span",{staticClass:"iconfont icon-xinlang-copy"})])])}],Gt={render:Lt,staticRenderFns:Mt},Kt=Gt,qt=i("/Xao"),zt=d,Jt=qt(Zt,Kt,!1,zt,null,null),Wt=Jt.exports,Ut={name:"Account",data:function(){return{username:"",password:""}},methods:{login:function(){this.$router.push("/main")}}},Bt=function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"clearfix",attrs:{id:"account"}},[i("p",{staticClass:"info"}),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.username,expression:"username"}],staticClass:"username",attrs:{type:"text",name:"username",placeholder:"邮箱/手机号/用户名"},domProps:{value:t.username},on:{input:function(s){s.target.composing||(t.username=s.target.value)}}}),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"password",attrs:{type:"password",name:"password",placeholder:"登录密码"},domProps:{value:t.password},on:{input:function(s){s.target.composing||(t.password=s.target.value)}}}),t._v(" "),i("button",{staticClass:"login",on:{click:t.login}},[t._v("立即登录")])])},Qt=[],Vt={render:Bt,staticRenderFns:Qt},Yt=Vt,ts=i("/Xao"),ss=u,is=ts(Ut,Yt,!1,ss,null,null),es=is.exports,as={name:"Message",data:function(){return{phone:""}},methods:{checkphone:function(t){var s=t.target.value,i=/^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/,e=t.target.previousElementSibling;return this.cf="",""===s?void(e.innerHTML="请输入手机号码"):i.test(s)?void(e.innerHTML=""):void(e.innerHTML="请输入正确的手机号码")},login:function(){this.$router.push("/main")}}},ns=function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"clearfix",attrs:{id:"message"}},[i("p",{staticClass:"info"}),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.phone,expression:"phone"}],attrs:{type:"text",name:"phone",placeholder:"手机号"},domProps:{value:t.phone},on:{blur:t.checkphone,input:function(s){s.target.composing||(t.phone=s.target.value)}}}),t._v(" "),i("input",{staticClass:"code",attrs:{type:"text",name:"code",placeholder:"短信验证码"}}),t._v(" "),i("button",{staticClass:"sendm"},[t._v("发送短信")]),t._v(" "),i("button",{staticClass:"login",on:{click:t.login}},[t._v("立即登录")])])},rs=[],os={render:ns,staticRenderFns:rs},cs=os,ls=i("/Xao"),ps=v,ds=ls(as,cs,!1,ps,null,null),us=ds.exports,vs=i("2sCs"),ms=i.n(vs),_s={name:"Register",data:function(){return{region:"中国",pre:"+86",codesrc:"",code:"",username:"",inCode:"",info:""}},methods:{getCode:function(){var t=this;ms.a.get("http://route.showapi.com/26-4?showapi_appid=45024&showapi_sign=a2bede57b62649b2bc42a1c043b07dab&textproducer_char_string=qwertyuiopasdfghjklzxcvbnm").then(function(s){t.code=s.data.showapi_res_body.text,t.codesrc=s.data.showapi_res_body.img_path}),console.log("get")},check:function(){var t=/^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/;return""==this.username?void(this.info="请输入手机号码"):""==this.inCode?void(this.info="请输入验证码"):t.test(this.username)?this.code!=this.inCode?void(this.info="请输入正确的验证码"):void this.$router.push("/login/account"):void(this.info="请输入正确的手机号码")}},created:function(){this.getCode()}},hs=function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{attrs:{id:"register"}},[i("div",{staticClass:"header"},[i("h1",[t._v("注册极米账户")]),t._v(" "),i("p",[t._v("如果你已经拥有极米账号 请在此"),i("router-link",{attrs:{to:"/login/account"}},[t._v("登录")])],1)]),t._v(" "),i("div",{staticClass:"container"},[i("div",{staticClass:"info"},[t._v(t._s(t.info))]),t._v(" "),i("div",{staticClass:"clearfix"},[i("div",{staticClass:"data"},[t._v("\n\t\t\t\t"+t._s(t.region)+"("+t._s(t.pre)+")\n\t\t\t")]),t._v(" "),i("div",{staticClass:"icon"})]),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.username,expression:"username"}],staticClass:"phone",attrs:{type:"text",placeholder:"手机号码"},domProps:{value:t.username},on:{input:function(s){s.target.composing||(t.username=s.target.value)}}}),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.inCode,expression:"inCode"}],staticClass:"code",attrs:{type:"text",placeholder:"验证码"},domProps:{value:t.inCode},on:{input:function(s){s.target.composing||(t.inCode=s.target.value)}}}),t._v(" "),i("img",{staticClass:"codeimg",attrs:{src:t.codesrc,alt:"验证码"},on:{click:t.getCode}}),t._v(" "),i("button",{staticClass:"register",on:{click:t.check}},[t._v("立即注册")]),t._v(" "),t._m(0,!1,!1)])])},gs=[function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("p",[t._v("点击“立即注册”，即表示您同意并愿意遵守"),i("a",{attrs:{href:"",target:"_blank"}},[t._v("《极米用户注册协议》")])])}],fs={render:hs,staticRenderFns:gs},Cs=fs,ws=i("/Xao"),xs=m,ys=ws(_s,Cs,!1,xs,null,null),bs=ys.exports,ks=i("aA9S"),$s=i.n(ks),js={name:"Cart",data:function(){return{products:{},num:1,region:"details",detailsImg:[],paramImg:[],good:0,center:0,bad:0,scroll:0,id:0,cartnum:0,animation:!1,swiperOption:{pagination:".swiper-pagination",loop:!0}}},created:function(){this.id=this.$route.params.id;for(var t=0,s=0;s<this.$store.state.products.length;s++)this.$store.state.products[s].id==this.id&&(t=s);this.products=this.$store.state.products[t],this.detailsImg=this.$store.state.detailsImg,this.paramImg=this.$store.state.paramImg,this.$store.commit("ADDHISTORY",this.id);var i=localStorage.getItem("products");i&&(i=JSON.parse(i)),this.cartnum=i.length},computed:{count:function(){for(var t=0,s=0;s<this.products.length;s++)t+=parseInt(this.products[s].price)*this.products[s].num;return t}},methods:{back:function(){this.$router.go(-1)},re:function(){this.num<=1||this.num--},add:function(){this.num++},scrollY:function(){this.scroll=window.scrollY},top:function(){document.body.scrollTop=0,document.documentElement.scrollTop=0},main:function(){this.$router.push("/shop")},cart:function(){var t=this,s=localStorage.getItem("products");s&&(s=JSON.parse(s));var i=_(this.products,s);if(-1===i){var e=this.products;$s()(e,{num:this.num}),s?s.push(e):s=[e],this.cartnum+=1,localStorage.setItem("products",et()(s))}else s[i].num+=this.num,localStorage.setItem("products",et()(s));this.animation=!0,setTimeout(function(){t.animation=!1},400)}},mounted:function(){window.addEventListener("scroll",this.scrollY)}},Ss=function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{attrs:{id:"goods"}},[i("div",{staticClass:"img"},[i("swiper",{staticClass:"swiper-box",attrs:{options:t.swiperOption}},[t._l(t.products.src,function(t,s){return i("swiper-slide",{key:s,staticClass:"swiper-item"},[i("img",{attrs:{src:t}})])}),t._v(" "),i("div",{staticClass:"swiper-pagination",attrs:{slot:"pagination"},slot:"pagination"})],2),t._v(" "),i("div",{staticClass:"iconfont icon-xiangzuo-copy",on:{click:t.back}})],1),t._v(" "),i("div",{staticClass:"name"},[t._v(t._s(t.products.name))]),t._v(" "),i("div",{staticClass:"price"},[t._v(t._s(t.products.price))]),t._v(" "),i("div",{staticClass:"details"},[t._v(t._s(t.products.details))]),t._v(" "),t._m(0,!1,!1),t._v(" "),i("div",{staticClass:"num clearfix"},[i("p",[t._v("数量")]),t._v(" "),i("button",{staticClass:"re",on:{click:t.re}},[i("span",{staticClass:"iconfont icon-jian"})]),t._v(" "),i("span",{staticClass:"numm"},[t._v(t._s(t.num))]),t._v(" "),i("button",{staticClass:"add",on:{click:function(s){t.num+=1}}},[i("span",{staticClass:"iconfont icon-jia"})])]),t._v(" "),i("div",{staticClass:"products"},[i("div",{staticClass:"change"},[i("div",{on:{click:function(s){t.region="details"}}},[t._v("详情")]),t._v(" "),i("div",{on:{click:function(s){t.region="param"}}},[t._v("参数")]),t._v(" "),i("div",{on:{click:function(s){t.region="evaluate"}}},[t._v("晒单")])]),t._v(" "),"details"===t.region?i("div",{attrs:{id:"details"}},t._l(t.detailsImg,function(t,s){return i("img",{key:s,attrs:{src:t,alt:""}})})):t._e(),t._v(" "),"param"===t.region?i("div",{attrs:{id:"details"}},[i("img",{attrs:{src:"/static/img/banner.jpg",alt:""}}),t._v(" "),t._l(t.paramImg,function(t,s){return i("img",{key:s,attrs:{src:t,alt:""}})})],2):t._e(),t._v(" "),"evaluate"===t.region?i("div",{attrs:{id:"details"}},[i("div",[i("router-link",[t._v("全部")]),t._v(" "),i("router-link",[t._v("好评("),i("span",[t._v(t._s(t.good))]),t._v(")")]),t._v(" "),i("router-link",[t._v("中评("),i("span",[t._v(t._s(t.center))]),t._v(")")]),t._v(" "),i("router-link",[t._v("差评("),i("span",[t._v(t._s(t.bad))]),t._v(")")])],1),t._v(" "),t._m(1,!1,!1)]):t._e()]),t._v(" "),t.scroll>300?i("div",{staticClass:"top",on:{click:t.top}},[i("span")]):t._e(),t._v(" "),i("div",{staticClass:"goods-footer"},[t._m(2,!1,!1),t._v(" "),i("button",{on:{click:t.cart}},[t._v("加入购物车")]),t._v(" "),i("a",{staticClass:"tocart",attrs:{href:"/cart"}},[i("span",{staticClass:"iconfont icon-gouwuche",class:{turn:t.animation}},[t.cartnum>0?i("span",{staticClass:"cartnum"},[t._v(t._s(t.cartnum))]):t._e()])])])])},Is=[function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"tags"},[i("div",{staticClass:"t-item"},[i("span",[t._v("补")]),t._v("买贵补差\n\t\t")]),t._v(" "),i("div",{staticClass:"t-item"},[i("span",[t._v("邮")]),t._v("满59元包邮\n\t\t")])])},function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"empty"},[i("p",[t._v("未找到相关评论哦~")])])},function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("a",{attrs:{href:"/shop"}},[i("span",{staticClass:"iconfont icon-shouye"})])}],Es={render:Ss,staticRenderFns:Is},Rs=Es,Xs=i("/Xao"),Fs=h,As=Xs(js,Rs,!1,Fs,null,null),Ps=As.exports;f.a.use(I.a);var Hs=new I.a({mode:"history",routes:[{path:"/shop",component:st},{path:"/cart",component:ut},{path:"/user",component:xt},{path:"/community",component:Tt},{path:"/login",redirect:"/login/account",component:Wt,children:[{path:"account",component:es},{path:"message",component:us}]},{path:"/register",component:bs},{path:"/goods/:id",component:Ps},{path:"*",redirect:"/shop"}]}),Os=i("9rMa");f.a.use(Os.a);var Ns=new Os.a.Store({state:{username:"lesrach",login:!1,products:[{src:["/static/img/goods1.jpg","/static/img/goods2.jpg","/static/img/goods3.jpg","/static/img/goods4.jpg","/static/img/goods5.jpg"],id:"285",name:"极米激光无屏电视A1",details:"3000ANSI Lumens/Harman Kardon量身定制/VIP专属服务",price:"25999元",type:"tv",tip:""},{src:["/static/img/goods2.jpg","/static/img/goods1.jpg","/static/img/goods3.jpg","/static/img/goods4.jpg","/static/img/goods5.jpg"],id:"259",name:"极米无屏电视H1S",details:"<下单立减100，到手价4499>1100ANSI流明/Harman Kardon音响/全新人工智能系统/3G大运存/新增自动对焦/1:2:1投射比/上下左右梯形校正/2D转3D功能",price:"4999元",type:"tv",tip:""},{src:["/static/img/goods3.jpg","/static/img/goods2.jpg","/static/img/goods1.jpg","/static/img/goods4.jpg","/static/img/goods5.jpg"],id:"260",name:"极米无屏电视Z5",details:"<到手价3299>1000ANSI流明/哈曼卡顿音响/上下左右梯形校正/双屏模式",price:"3299元",type:"tv",tip:"give"},{src:["/static/img/goods4.jpg","/static/img/goods2.jpg","/static/img/goods3.jpg","/static/img/goods1.jpg","/static/img/goods5.jpg"],id:"74",name:"极米无屏电视Z4X",details:"<到手价2399>哈曼卡顿音响/海量影视、娱乐资源",price:"2399元",type:"tv",tip:"give"},{src:["/static/img/goods5.jpg","/static/img/goods2.jpg","/static/img/goods3.jpg","/static/img/goods4.jpg","/static/img/goods1.jpg"],id:"224",name:"极米无屏电视CC",details:"<下单即送3D眼镜>长时续航/JBL音响/快速自动对焦",price:"2799元",type:"tv",tip:"give"},{src:"",id:"252",name:"极米激光无屏电视A1Pro",details:"（含100吋软幕）3500ANSI Lumens/Harman Kardon量身定制/VIP专属服务",price:"29999元",type:"tv",tip:""},{src:"",id:"158",name:"极米无屏电视H1",details:"<到手价3999>1080P/Harman Kardon高品质重低音音响",price:"3999元",type:"tv",tip:"re"},{src:"",id:"270",name:"imea儿童智能投影",details:"儿童视力防护体系/儿童专属正版优质内容/家长远程管控APP",price:"1999元",type:"tv",tip:""},{src:"",id:"191",name:"极米无屏电视Z4Air",details:"轻薄澳铝一体机身/内置13600mAh电池",price:"2499元",type:"tv",tip:""},{src:"",id:"268",name:"极米无屏电视H1S极光",details:"1200ANSI流明/1.2:1投射比/上下左右梯形校正",price:"5999yuan",type:"tv",tip:""},{src:"",id:"290",name:"H1S眼镜支架套餐",details:"套餐立省395元，含H1S、2副3D眼镜、X-Floor 落地支架（F062S）。",price:"5499元",type:"select",tip:""},{src:"",id:"288",name:"Z5眼镜支架套餐",details:"套餐立省395元，含Z5、2副3D眼镜、X-Floor 落地支架（F062S）。",price:"3999元",type:"select",tip:""},{src:"",id:"124",name:"Z4X支架幕布眼镜套餐",details:"套餐立省493元，含Z4X、2副3D眼镜、三脚架、100吋电动幕布。",price:"3299元",type:"select",tip:""},{src:"",id:"291",name:"H1S眼镜套餐",details:"套餐立省99元，含H1S、3D眼镜一副。",price:"5098元",type:"select",tip:""},{src:"",id:"289",name:"Z5眼镜支架幕布套餐",details:"套餐立省494元。含Z5、2副3D眼镜、X-Floor 落地支架（F062S）、100吋电动幕布。",price:"4399元",type:"select",tip:""},{src:"",id:"122",name:"Z4X支架眼镜套餐",details:"套餐立省294元。含Z4X、2副3D眼镜、三脚架。",price:"2999元",type:"select",tip:""},{src:"",id:"271",name:"imea儿童智能投影套装版",details:"儿童视力防护体系/儿童专属正版优质内容/家长远程管控APP/AR智慧早教系统",price:"2499元",type:"select",tip:""},{src:"",id:"136",name:"Air支架便携包套餐",details:"套餐立省135元。含Z4Air（深空灰）、转接盘、桌面支架、便携包",price:"2599元",type:"select",tip:""},{src:"",id:"226",name:"极米K歌无线麦克风",details:"拾音清晰防干扰/震撼混响音效/无线低失真传输/在家体验KTV包厢专业音效",price:"569元",type:"part",tip:"hot"},{src:"",id:"300",name:"极米100英寸16：9激光抗光幕布（软幕）",details:"降低90%环境干扰/160°超广可视角度/全金属边框",price:"5999元",type:"part",tip:"new"},{src:"",id:"84",name:"极米DLP-id液晶快门式3D眼镜G102L",details:"一次充电可使用30个小时，看15部大片。178度更广视角，有效减少重影，消除眼睛疲劳，呈现更生动的3D画面！",price:"198元",type:"part",tip:"hot"},{src:"",id:"129",name:"极米100英寸16:10电动白塑幕布(升级版)",details:"电动幕布 更广视域 画质增强（幕布因地域区别，运费各不相同，默认为申通快递，不支持包邮活动）",price:"499元",type:"part",tip:"hot"},{src:"",id:"251",name:"极米蓝牙手柄",details:"无线蓝牙连接/360°游戏摇杆/微触动灵敏肩键/人体工学设计/智能电量管理",price:"199元",type:"part",tip:"hot"},{src:"",id:"292",name:"X-Floor 落地支架（F062S）",details:"多角度自由调节/4+1节支撑杆/巧妙底座设计",price:"499元",type:"part",tip:"hot"},{src:"",id:"206",name:"极米Care+服务for A1/A1Pro",details:"适用于极米激光无屏电视A1/A1Pro",price:"2999元",type:"part",tip:"new"},{src:"",id:"269",name:"X-Wall壁挂支架",details:"视角可调，铝合金材质，工字钢结构形态，工艺精湛。",price:"129元",type:"part",tip:""},{src:"",id:"43",name:"极米X-Roof吊顶支架",details:"2+1模块结构高度自由调节/云台角度正负10°可调适应多种吊装环境",price:"199元",type:"part",tip:""},{src:"",id:"141",name:"极米三脚架",details:"高强度铝合金和进口ABS管径可达20mm 承载1.5Kg 4节伸缩式脚架设计。适用于所有极米无屏电视（Z4系列需配专用转接盘）。",price:"98元",type:"part",tip:""}],rproducts:[{src:["/static/img/goods1.jpg"],id:"",name:"极米激光无屏电视A1",details:"3000ANSI Lumens/Harman Kardon量身定制/VIP专属服务",price:"25999元",type:"tv",tip:""},{src:["/static/img/goods2.jpg"],id:"",name:"极米无屏电视H1S",details:"<下单立减100，到手价4499>1100ANSI流明/Harman Kardon音响/全新人工智能系统/3G大运存/新增自动对焦/1:2:1投射比/上下左右梯形校正/2D转3D功能",price:"4999元",type:"tv",tip:""},{src:["/static/img/goods3.jpg"],id:"",name:"极米无屏电视Z5",details:"<到手价3299>1000ANSI流明/哈曼卡顿音响/上下左右梯形校正/双屏模式",price:"3299元",type:"tv",tip:"give"}],flows:[{src:"https://file02.xgimi.com/bbs/twoexploit/thread/CR-gesRigu2RD.png",title:"极米 X 生活家装饰 | 您有一份价值1111的红包待领取！",text:"这一次，品质生活提供商生活家装饰联合无屏电视开创者极米科技，从居家物质追求到精神角落充填一并出发，共同探寻品质生活家的真实模样。"},{src:"https://file02.xgimi.com/bbs/twoexploit/thread/CR-bH8gqaOlig.jpg",title:"极米双十一四连冠 但我并没有那么高兴",text:"2017年双十一结束了，先简单给大家汇报下成绩吧。和往常一样，没有太大悬念，极米连续四年获得第一，双十一当天全网销售总额突破2亿元。在京东平台，极米无屏电视双十一销售额是第二名的五倍。在天猫平台，11日20点11分，天猫单店销售额率先突破1亿元，并跻身天猫双十一“亿元俱乐部”"},{src:"https://file02.xgimi.com/bbs/twoexploit/thread/CR-6j37RkBFyy.jpg",title:"极米A1 Pro和CC极光斩获CES 2018创新大奖",text:"美东时间11月9日下午（北京时间11月10日凌晨），全球消费类电子第一展CES在纽约正式揭晓2018年度创新奖项，极米激光无屏电视A1 Pro和极米无屏电视CC极光双双获得创新大奖。其中，A1 Pro获得2018年CES家用影音设备和配件品类创新大奖，CC极光获得2018年CES便携式播放器和配件品类创新大奖。"},{src:"https://file02.xgimi.com/bbs/twoexploit/thread/CR-hZu15XmZOP.jpg",title:"双十一宝妈购物推荐：imea儿童智能投影",text:"之前上班的时候，公婆特别宠大宝，天天给她看电视，结果去医院一查发现弱视了，找了好久找到这款智能投影，这款是红外息屏，蓝光调校的，看的时候很大程度减少了对视力的伤害，里边的内容全是筛选过的，不用怕大宝乱按按到不良信息。重点是！可以远程操控，今年暑假真的是全靠这台了，大宝每天看电视的时间我上班都能控制了。"},{src:"https://file02.xgimi.com/bbs/twoexploit/thread/CR-Kyr920oBSH.jpg",title:"[极客试界] 第78期 幻响风小净电动智能防霾口罩 0元试用",text:"秋冬季最怕的便是雾霾、灰尘了，为了健康，口罩是必须配备的。随着科技进步，口罩逐渐先进起来。市面上的智能口罩层出不穷、好坏参差不齐。到底应该如何选购智能防霾口罩才不会被坑？真智能还是真忽悠？欢迎报名体验本期免费试用产品——幻响风小净电动智能防霾口罩，一试便知！"},{src:"https://file02.xgimi.com/bbs/twoexploit/thread/CR-uOArbhOJcc.jpg",title:"极米双11 极米商城全网价保 免单 配件 VIP卡 都送！",text:"亲爱的极友，我们定了一个小目标：继续蝉联双11全网销量冠军！为了完成这个小目标，我们需要你参与一下，比如说——极米双十一，买几台极米来自己用、送朋友、送老师、送老板、送媳妇儿啥的，这都是可以的！大家加把劲儿，保送极米成销冠！"},{src:"https://file02.xgimi.com/bbs/twoexploit/thread/CR-4otklIPQ5q.png",title:"[社区活动]助力双十一，踩楼赢奖励",text:"这个世界对单身狗已经越来越没有包容之心了，好好的一个光棍节愣是被玩成了一年一度的狂欢购物节。也对，除了买买买好像也没有其它方式能让单身狗们得到相对较多的快乐。今年双十一，你准备剁手了没？？？"},{src:"https://file02.xgimi.com/bbs/twoexploit/thread/CR-oSdiMG22b9.png",title:"画质好 音质佳 更有人情味——杭州极米直营店体验",text:"新店刚刚安家落户，店员小哥不停的整理货柜忙的满头汗水。可是当小朋友进店体验imea时，他马上放下手里的事情，耐心的在一旁陪伴引导。一款智能产品走进用户的心里，并不需要花哨的噱头或者华丽的数据，这种面对面的感受最直接也最能打动用户。"},{src:"https://file02.xgimi.com/bbs/twoexploit/thread/CR-31fGcDCDLb.jpg",title:"激光无屏电视A1Pro、imea儿童机线下品鉴会 欢迎报名！",text:"为方便大家更加详细地了解极米激光无屏电视与imea儿童投影灯极米产品，我们决定在全国8座城市9个门店同时启动极米激光电视A1Pro与imea儿童无屏电视品鉴会，活动将于2017年11月4日星期六下午14：30开始签到，15时正式开始活动。报名审核通过的极友，请准时前往所在城市的极米旗舰店签到赴约，即可现场体验激光无屏电视A1Pro、imea儿童智能投影等极米产品。"},{src:"https://file02.xgimi.com/bbs/twoexploit/thread/CR-H0tKbctQMQ.jpg",title:"大家好，给大家介绍一下，这是极米的GMUI3.0",text:"Z5系列机型已率先搭载GMUI3.0，其他兄弟机型也陆续加入3.0大军。目前H1、H1极光也正式推送3.0，H1S和H1S极光机型的GMUI3.0公测也已完成，正式版固件即将和大家见面，敬请期待。我们正按计划在准备Z4X机型的公测固件，请持续关注我们。这回简单制作了一期视频介绍，方便大家更清晰全面直观的认识新UI，极米这新UI这段路，还得靠大伙儿多担待接纳它，我们一起齐头并进，继续向前跑吧！"}],hots:[{link:"/thread/112126-1-1.html",text:"[社区活动] H1S固件内测组招募 组织派专车来接你了"},{link:"/thread/112736-1-1.html",text:"[社区活动] 晒出你的Z5 抢免单 赢硬盘 小米路由"},{link:"/thread/112604-1-1.html",text:"极米无屏电视Z5获评天猫2017趋势先锋 兑现理想生活"},{link:"/thread/112571-1-1.html",text:"快速攒极点必看！交晒机作业 最高奖500极点！长期有效！"},{link:"/thread/112143-1-1.html",text:"[应用分享] 极米实用应用集合帖，不断更新中~"},{link:"/thread/112127-1-1.html",text:"[固件合辑] 极米刷机需要使用的固件，请区别机型、版本"}],paramImg:["/static/img/param-1.jpg"],detailsImg:["/static/img/de-1.jpg","/static/img/de-2.jpg","/static/img/de-3.jpg","/static/img/de-4.jpg"]},mutations:{LOGIN:function(t){this.username=t,this.login=!0},EXIT:function(){this.login=!1},ADDHISTORY:function(t,s){var i=g(s,t.products);t.rproducts.unshift(i),t.rproducts.length>3&&t.rproducts.pop()}}}),Ds=Ns,Ts=i("41jX"),Zs=i.n(Ts);f.a.use(Zs.a);var Ls={components:{swiper:Ts.swiper,swiperSlide:Ts.swiperSlide}};f.a.config.productionTip=!1,new f.a({el:"#app",router:Hs,store:Ds,swiper:Ls,template:"<App/>",components:{App:S}})},Rdl6:function(t,s){},UGy7:function(t,s,i){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var e={name:"swiper-slide",data:function(){return{slideClass:"swiper-slide"}},ready:function(){this.update()},mounted:function(){this.update(),this.$parent.options.slideClass&&(this.slideClass=this.$parent.options.slideClass)},updated:function(){this.update()},attached:function(){this.update()},methods:{update:function(){this.$parent&&this.$parent.swiper&&this.$parent.swiper.update&&(this.$parent.swiper.update(!0),this.$parent.options.loop&&this.$parent.swiper.reLoop())}}},a=function(){var t=this,s=t.$createElement;return(t._self._c||s)("div",{class:t.slideClass},[t._t("default")],2)},n=[],r={render:a,staticRenderFns:n},o=r,c=i("/Xao"),l=c(e,o,!1,null,null,null);s.default=l.exports},WK04:function(t,s){},X53L:function(t,s){},peXC:function(t,s){},rIOR:function(t,s){},"rs/R":function(t,s){},syEQ:function(t,s){},syvT:function(t,s,i){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var e="undefined"!=typeof window;e&&(window.Swiper=i("Bnvi"));var a={name:"swiper",props:{options:{type:Object,default:function(){return{autoplay:3500}}},notNextTick:{type:Boolean,default:function(){return!1}}},data:function(){return{defaultSwiperClasses:{wrapperClass:"swiper-wrapper"}}},ready:function(){!this.swiper&&e&&(this.swiper=new Swiper(this.$el,this.options))},mounted:function(){var t=this,s=function(){if(!t.swiper&&e){delete t.options.notNextTick;var s=!1;for(var i in t.defaultSwiperClasses)t.defaultSwiperClasses.hasOwnProperty(i)&&t.options[i]&&(s=!0,t.defaultSwiperClasses[i]=t.options[i]);var a=function(){t.swiper=new Swiper(t.$el,t.options)};s?t.$nextTick(a):a()}}(this.options.notNextTick||this.notNextTick)?s():this.$nextTick(s)},updated:function(){this.swiper&&this.swiper.update()},beforeDestroy:function(){this.swiper&&(this.swiper.destroy(),delete this.swiper)}},n=function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"swiper-container"},[t._t("parallax-bg"),t._v(" "),i("div",{class:t.defaultSwiperClasses.wrapperClass},[t._t("default")],2),t._v(" "),t._t("pagination"),t._v(" "),t._t("button-prev"),t._v(" "),t._t("button-next"),t._v(" "),t._t("scrollbar")],2)},r=[],o={render:n,staticRenderFns:r},c=o,l=i("/Xao"),p=l(a,c,!1,null,null,null);s.default=p.exports},zRWw:function(t,s){}},["NHnr"]);
//# sourceMappingURL=app.4134d07856b8014055de.js.map