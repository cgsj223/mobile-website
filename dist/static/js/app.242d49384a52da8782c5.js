webpackJsonp([0],{"+p9J":function(t,e,n){"use strict";e.a={name:"swiper-slide",data:function(){return{slideClass:"swiper-slide"}},ready:function(){this.update()},mounted:function(){this.update(),this.$parent.options.slideClass&&(this.slideClass=this.$parent.options.slideClass)},updated:function(){this.update()},attached:function(){this.update()},methods:{update:function(){this.$parent&&this.$parent.swiper&&this.$parent.swiper.update&&(this.$parent.swiper.update(!0),this.$parent.options.loop&&this.$parent.swiper.reLoop())}}}},"/971":function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,i=t._self._c||e;return!0===t.loading?i("div",{staticClass:"loading"},[i("img",{staticClass:"loadingImg",attrs:{src:n("r5Th"),alt:"loading"}})]):t._e()},a=[],s={render:i,staticRenderFns:a};e.a=s},"/Lvv":function(t,e,n){"use strict";var i=n("mZMy"),a=n("6iXU"),s=n("m3es"),o=n.n(s);e.a={mounted:function(){if("none"===this.contType)return this.showLoading=!1;this.initData()},data:function(){return{colors:["#99cccc","#996699","#ffcccc","#0099cc","#cccccc","#99cc66"],listData:null,showLoading:!0,contType:this.$route.params.type}},methods:{initData:function(){var t=this;setTimeout(function(){switch(t.contType){case"joke":t.listData=a.a.joke;break;case"movieRank":t.listData=a.a.movieRank;break;case"history":t.listData=a.a.history}t.$nextTick(function(){t.scroll=new o.a(t.$refs.contList,{click:!0})}),t.showLoading=!1},1600)},getColor:function(t){var e=this.colors.length,n=(e+t)%e;return this.colors[n]}},components:{Loading:i.a}}},"3rLN":function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"app-wrapper"},[n("myHeader"),t._v(" "),n("div",{staticClass:"view-wrapper"},[n("router-view")],1)],1)},a=[],s={render:i,staticRenderFns:a};e.a=s},"3y6W":function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"header-wrapper"},[n("h1",[t._v("每日资讯")]),t._v(" "),t.showBackButton?n("span",{staticClass:"back_button",on:{click:t.back}}):t._e()])},a=[],s={render:i,staticRenderFns:a};e.a=s},"4B0y":function(t,e){},"6iXU":function(t,e,n){"use strict";e.a={joke:[{content:"A：你在这个单位当司机怎么没几天就被开除了？　　B：前几天去一个沙漠小镇办事，车祸，撞树上了。　　A：哦，可够倒霉的。　　B：更倒霉的是，小镇只有这么一棵树。以前镇子的名字就叫“一棵树”"},{content:"今早上班在公交站台等公交车，旁边有个大肚子孕妇也在等车的样子，远远的来了一辆45路车，就听见那个孕妇说：“坐好了，妈妈要起飞啦！”然后就看见她捧着肚子风风火火地朝着公交车奔过去了，过去了，去了，了……"},{content:"邮递员蹬了很久的自行车把一封生日贺卡送到护林员手里，他喋喋不休的抱怨这个地方是多么的偏僻，护林员实在忍不住了：你再不闭嘴，我就要订报纸了！"},{content:"约翰因为与女朋友闹不和去看心理医生，医生问了他许多问题，也没有找到症结所在。最后，医生问道：“在亲吻时，你看到过你女朋友的脸吗？”　　约翰说：“看到过一次。”　　医生问：“情况怎么样？”　　约翰想了想，说：“她看起来很愤怒。”　　这时，医生感到自己找到答案，说：“很有意思，这正是问题症结所在。你看到你女朋友的脸，感到她很愤怒，你显然忽略了她的感受。对了，那么你是在什么情况下看到她愤怒的脸的呢？”　　约翰十分尴尬地说：“哦，她当时正站在窗户外面看着我和别人亲吻……”"},{content:"节假日后的第一天，班里只有三三两两几个同学来上课，班主任很不满，他问班长：“怎么这么多同学没来上课？”　　班长回答：“请假了。”　　班主任又问：“怎么只有三张请假条，其他人去哪儿了？”　　班长顿了顿，回答：“其他人都去陪假了！”　　班主任听了觉得莫名其妙，于是自言自语地说道：“什么时代了还要‘陪嫁’！”"},{content:"堂弟是卖馒头的，三十未婚。他最近相了一个妹子，各方面条件不错。可是堂弟嫌弃人家胸小，愣是不同意。二叔二婶气的半死，非要堂弟同意这门亲事。堂弟急了 : “我白天摸了一天小馒头，晚上想摸会包子不行吗？！”"},{content:"男：这么晚还没有睡觉呀？    女：还没呢。    男：我在XX酒店，你有男朋友吗？    女：我男朋友在我身上趴着看我和你聊天呢。"},{content:"男向女表白之后。    女：再多的花言巧语都掩饰不了你想上我的意图！    男：再多的矜持也改变不了最终被上的命运！    女：只要不是和你就好！    男!*##($"},{content:"大半夜睡得正香呐，突然一个电话打过来把我吵醒了，我迷迷糊糊地接了电话，就听电话那头说：“老公，我车路上抛锚了，周围又没人，你快开车来接我。。。”    我听这话当时就无语了：“你谁啊，老娘是女的，不是你老公，你打错了吧！”    然后我就挂了电话准备接着睡，正在这时我猛然醒悟过来，推醒身旁熟睡的客人：“大哥，好像是你老婆找你。。。”"},{content:"哥们失恋了，约我出来排解一下心中的苦闷。    我带着哥们去吃羊肉泡馍，哥们捧着一碗泡馍哭道：“现在我一看到泡馍，就想起了我的女友。”    我疑惑道：“怎么，你女朋友叫馍么？”    哥们愣了一下，怒道：“去你大爷！”"},{content:"昨夜惹女友生气，今早上她躺在床上不愿出门吃饭。    我知道硬拉她肯定不行，就说了句：“那我一个人去吃了啊！ ”    快走到门口了，她坐起来说：“你TM穿条裤子再演，好吗？”"},{content:"光棍节我果断的跟女朋友分手，女友又哭又闹，  问我是不是外面有女人了，是不是嫌她变胖变丑了，炒菜不好吃等等……  我无奈的说了句：过节了，要有点节日的气息。  然后我就跪遥控器去了。。。"},{content:"刚才餐厅吃饭看见一对情侣，男的帅气，女孩漂亮！两人你侬我侬羡煞旁人，  　但不知道两人怎么吵了起来，女的带着哭腔喊道“分手吧！”  　　男的也不甘示弱吼了句  　“分就分！谁先搭理谁就是王八蛋。”男的吼完又说了句“我是王八蛋”  　　女孩听见破涕为笑,两人立马和好了。  　　爱情中总该有一方要懂得包容和退让。"},{content:"今天班上一对同桌情侣吵架！女的嚷嚷到我不要和你坐在一起！男的说你换！你换！ 不坐就不坐！那女的哭着吼道我就是和班上最丑的男的坐在一起！也不要和你坐在一起！然后。。。。。。。她就朝我走来了！"},{content:"我家店旁边的女装店为了甩货，门窗上粘贴好多大减 价的条幅，门口小喇叭大声喊着最后三天清仓大甩卖。三天后，小喇叭依旧喊着最后三天大甩卖，小侄女跑过去拔下他的U盘对老板说“叔叔，你是不是没读过书，不会数数，今天都第四天了…”说完走了留下一脸懵 逼的老板"},{content:"在深圳给老板开车，昨天老板儿子结婚。 去接新娘被堵在门外，要求新郎回答问题。 前几道问题回答如流，最后问新娘穿什么颜色的内裤，新朗猜不上来。 也不知道脑子犯抽还是怎么地，我顺嘴说了句蓝色。 结果还真特,么蒙对了! 现在在回老家的动车上……"},{content:"早上上班，看到女同事脸上有伤，问她：“什么情况。”她说：“昨晚跟她老公干架了。”可是，昨天才听她说她老公出差去了，看着我不解的眼神。同事这时来了一句：“谁知道他半夜突然回来。”我：“呃，这剧情有点丰富啊！”"},{content:"芭莎慈善晚会事件持续发酵，作为当事人的赵丽颖受采访时说：不是款了就可吃了么？我捐了款的呀。旁边的林心如不屑一顾：切~有什么大不了的，我不捐款照样吃，我还了吃两回了呢，而且是两个人………✌✌✌"},{content:"上物理课，老师问同学：“同学们，你们说，要是世上没有摩擦力会变成什么样？”有的同学说没有摩擦就无法刹车，也有同学说没有摩擦就不会发热。只有小明说：“老师，没有摩擦力就不会有你我他”。。。。。"},{content:"昨天找了一大夫，把脉后，他建议我多运动，不要买饮料，多喝白开水，多坐公交车或步行，不要在外面吃饭，尽量吃素，少吃肉类和海鲜。  我点了点头问他：“我是啥毛病啊？”  老中医说：“收入太低，压力太大，不适合高消费。一花钱就上火。”  真神医啊!"}],history:[{year:2002,month:1,day:1,title:"欧元正式进入流通",type:1},{year:1999,month:1,day:1,title:"欧元诞生",type:1},{year:1998,month:1,day:1,title:"我国与南非建立外交关系",type:1},{year:1995,month:1,day:1,title:"世界贸易组织成立",type:1},{year:1994,month:1,day:1,title:"欧洲经济区成立",type:1},{year:1988,month:1,day:1,title:"天安门城楼正式对外开放",type:1},{year:1985,month:1,day:1,title:"活跃农村经济，中共中央、国务院出台新政策",type:1},{year:1984,month:1,day:1,title:"中国工商银行成立",type:1},{year:1984,month:1,day:1,title:"中国正式成为国际原子能机构成员国",type:1},{year:1984,month:1,day:1,title:"关于1984农村工作的通知",type:1},{year:1982,month:1,day:1,title:"全国农村工作会议纪要",type:1},{year:1981,month:1,day:1,title:"《中华人民共和国婚姻法》（修正草案）公布施行",type:1},{year:1979,month:1,day:1,title:"中国与美国建立外交关系",type:1},{year:1979,month:1,day:1,title:"《中华人民共和国全国人大常委会告台湾同胞书》发表",type:1},{year:1960,month:1,day:1,title:"刘家峡水利枢纽胜利截流",type:1},{year:1959,month:1,day:1,title:"古巴革命胜利",type:1},{year:1956,month:1,day:1,title:"《解放军报》创刊",type:1},{year:1948,month:1,day:1,title:"中国国民党革命委员会在香港成立",type:1},{year:1942,month:1,day:1,title:"中苏美英等国签署《联合国家共同宣言》",type:1},{year:1939,month:1,day:1,title:"国民党中常会决定开除汪精卫党籍",type:1}],movieRank:[{rid:"1",name:"奇异博士",wk:"2016.11.7- 2016.11.13（单位：万元）",wboxoffice:"27000",tboxoffice:"57100"},{rid:"2",name:"比利·林恩的中场战事",wk:"2016.11.7- 2016.11.13（单位：万元）",wboxoffice:"8100",tboxoffice:"8100"},{rid:"3",name:"航海王之黄金城",wk:"2016.11.7- 2016.11.13（单位：万元）",wboxoffice:"6980",tboxoffice:"6980"},{rid:"4",name:"外公芳龄38",wk:"2016.11.7- 2016.11.13（单位：万元）",wboxoffice:"3490",tboxoffice:"3490"},{rid:"5",name:"驴得水",wk:"2016.11.7- 2016.11.13（单位：万元）",wboxoffice:"2880",tboxoffice:"16312"},{rid:"6",name:"但丁密码",wk:"2016.11.7- 2016.11.13（单位：万元）",wboxoffice:"4370",tboxoffice:"12930"},{rid:"7",name:"捉迷藏",wk:"2016.11.7- 2016.11.13（单位：万元）",wboxoffice:"2750",tboxoffice:"6758"},{rid:"8",name:"邻家大贱谍",wk:"2016.11.7- 2016.11.13（单位：万元）",wboxoffice:"1110",tboxoffice:"1110"},{rid:"9",name:"湄公河行动",wk:"2016.11.7- 2016.11.13（单位：万元）",wboxoffice:"880",tboxoffice:"117908"},{rid:"10",name:"机械师2：复活",wk:"2016.11.7- 2016.11.13（单位：万元）",wboxoffice:"533",tboxoffice:"33733"}]}},"7oBO":function(t,e,n){"use strict";var i="undefined"!=typeof window;i&&(window.Swiper=n("gsqX")),e.a={name:"swiper",props:{options:{type:Object,default:function(){return{autoplay:3500}}},notNextTick:{type:Boolean,default:function(){return!1}}},data:function(){return{defaultSwiperClasses:{wrapperClass:"swiper-wrapper"}}},ready:function(){!this.swiper&&i&&(this.swiper=new Swiper(this.$el,this.options))},mounted:function(){var t=this,e=function(){if(!t.swiper&&i){delete t.options.notNextTick;var e=!1;for(var n in t.defaultSwiperClasses)t.defaultSwiperClasses.hasOwnProperty(n)&&t.options[n]&&(e=!0,t.defaultSwiperClasses[n]=t.options[n]);var a=function(){t.swiper=new Swiper(t.$el,t.options)};e?t.$nextTick(a):a()}}(this.options.notNextTick||this.notNextTick)?e():this.$nextTick(e)},updated:function(){this.swiper&&this.swiper.update()},beforeDestroy:function(){this.swiper&&(this.swiper.destroy(),delete this.swiper)}}},"9XOS":function(t,e){},"AR/D":function(t,e,n){t.exports=n.p+"static/img/banner3.548e5d0.jpg"},EFSR:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{class:t.slideClass},[t._t("default")],2)},a=[],s={render:i,staticRenderFns:a};e.a=s},Jbn8:function(t,e,n){t.exports=n.p+"static/img/banner1.b40af0f.jpg"},LFUf:function(t,e,n){"use strict";e.a={computed:{showBackButton:function(){return this.$store.state.viewedPages>0}},methods:{back:function(){this.$store.commit("decreaseViewedPages"),this.$router.go(-1)}}}},M93x:function(t,e,n){"use strict";function i(t){n("zjJb")}var a=n("xJD8"),s=n("3rLN"),o=n("VU/8"),r=i,c=o(a.a,s.a,r,null,null);e.a=c.exports},"N+zL":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n("+p9J"),a=n("EFSR"),s=n("VU/8"),o=s(i.a,a.a,null,null,null);e.default=o.exports},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n("7+uW"),a=n("M93x"),s=n("F3EI"),o=n.n(s),r=n("/ocq"),c=n("NYxO"),l=n("lrMX"),p=n("Pt1D");i.a.config.productionTip=!1,i.a.use(c.a),i.a.use(o.a),i.a.use(r.a);var u=new c.a.Store({state:{viewedPages:0},mutations:{increaseViewedPages:function(t){t.viewedPages++},decreaseViewedPages:function(t){t.viewedPages--}}}),d=[{path:"/m/my_content/:type",component:l.a},{path:"/m",component:p.a}],f=new r.a({mode:"history",routes:d});new i.a({el:"#app",router:f,store:u,template:"<App/>",components:{App:a.a}})},Pt1D:function(t,e,n){"use strict";function i(t){n("4B0y")}var a=n("WK65"),s=n("Sq5e"),o=n("VU/8"),r=i,c=o(a.a,s.a,r,null,null);e.a=c.exports},Sq5e:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("transition",{attrs:{name:"indexTransition"}},[i("div",{staticClass:"index_wrapper"},[i("div",{staticClass:"slideshow",on:{click:t.toContent}},[i("swiper",{ref:"mySwiper",attrs:{options:t.swiperOption,"not-next-tick":t.notNextTick}},[i("swiper-slide",[i("a",[i("img",{staticClass:"banner_img",attrs:{src:n("Jbn8"),"data-type":"joke"}})])]),t._v(" "),i("swiper-slide",[i("a",[i("img",{staticClass:"banner_img",attrs:{src:n("bJZr"),"data-type":"movieRank"}})])]),t._v(" "),i("swiper-slide",[i("a",[i("img",{staticClass:"banner_img",attrs:{src:n("AR/D"),"data-type":"history"}})])]),t._v(" "),i("swiper-slide",[i("a",[i("img",{staticClass:"banner_img",attrs:{src:n("jmAn"),"data-type":"none"}})])]),t._v(" "),i("div",{staticClass:"swiper-pagination",attrs:{slot:"pagination"},slot:"pagination"})],1)],1),t._v(" "),i("div",{staticClass:"info_wrapper"},[i("h1",[t._v("信息大全")]),t._v(" "),i("div",{staticClass:"info_content"},[i("ul",{on:{click:t.toContent}},[i("transition-group",{attrs:{name:"info_list"}},[t.showList?i("li",{key:"l1",style:{backgroundColor:"#99cccc"},attrs:{"data-type":"joke"}},[t._v("逗逼笑话")]):t._e(),t._v(" "),t.showList?i("li",{key:"l2",style:{backgroundColor:"#ff6666"},attrs:{"data-type":"movieRank"}},[t._v("电影票房")]):t._e(),t._v(" "),t.showList?i("li",{key:"l3",style:{backgroundColor:"#ff9900"},attrs:{"data-type":"history"}},[t._v("历史上的今天")]):t._e(),t._v(" "),t.showList?i("li",{key:"l4",style:{backgroundColor:"#336699"},attrs:{"data-type":"none"}},[t._v("什么都没有")]):t._e()])],1)])])])])},a=[],s={render:i,staticRenderFns:a};e.a=s},T8H5:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"swiper-container"},[t._t("parallax-bg"),t._v(" "),n("div",{class:t.defaultSwiperClasses.wrapperClass},[t._t("default")],2),t._v(" "),t._t("pagination"),t._v(" "),t._t("button-prev"),t._v(" "),t._t("button-next"),t._v(" "),t._t("scrollbar")],2)},a=[],s={render:i,staticRenderFns:a};e.a=s},Tfe8:function(t,e,n){"use strict";e.a={props:{loading:!0}}},WK65:function(t,e,n){"use strict";var i=n("F3EI");n.n(i);n("v2ns"),e.a={mounted:function(){this.showList=!0},methods:{toContent:function(t){var e=t.target.tagName;if("LI"===e||"IMG"===e){this.$store.commit("increaseViewedPages");var n=t.target.dataset.type;this.$router.push({path:"/m/my_content/"+n})}}},data:function(){return{showList:!1,notNextTick:!1,swiperOption:{autoplay:3e3,direction:"horizontal",setWrapperSize:!0,pagination:".swiper-pagination",slidesPerView:1,centeredSlides:!0,observeParents:!0,autoplayDisableOnInteraction:!1,loop:!0,paginationClickable:!0}}}}},bJZr:function(t,e,n){t.exports=n.p+"static/img/banner2.009bc78.jpg"},bkuW:function(t,e){},jmAn:function(t,e,n){t.exports=n.p+"static/img/banner4.fae6e31.jpg"},kTn2:function(t,e){},lrMX:function(t,e,n){"use strict";function i(t){n("9XOS")}var a=n("/Lvv"),s=n("p+FV"),o=n("VU/8"),r=i,c=o(a.a,s.a,r,null,null);e.a=c.exports},mZMy:function(t,e,n){"use strict";function i(t){n("bkuW")}var a=n("Tfe8"),s=n("/971"),o=n("VU/8"),r=i,c=o(a.a,s.a,r,null,null);e.a=c.exports},"p+FV":function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:"contentTransition"}},[n("div",{staticClass:"content"},[n("Loading",{attrs:{loading:t.showLoading}}),t._v(" "),n("div",{staticClass:"content-wrapper"},[n("div",{ref:"contList",staticClass:"list-wrapper"},["joke"===t.contType?n("ul",t._l(t.listData,function(e,i){return n("li",{style:{backgroundColor:t.getColor(i)}},[t._v(t._s(e.content))])})):t._e(),t._v(" "),"history"===t.contType?n("ul",t._l(t.listData,function(e,i){return n("li",{style:{backgroundColor:t.getColor(i)}},[n("h1",{staticClass:"content-title"},[t._v(t._s(e.year+"年"+e.month+"月"+e.day+"日"))]),t._v(" "),n("p",{staticClass:"content-data"},[t._v("\n                "+t._s(e.title)+"\n              ")])])})):t._e(),t._v(" "),"movieRank"===t.contType?n("ul",t._l(t.listData,function(e,i){return n("li",{style:{backgroundColor:t.getColor(i)}},[n("h1",{staticClass:"content-title"},[t._v(t._s(e.rid+" "+e.name))]),t._v(" "),n("p",{staticClass:"content-data"},[t._v("\n                "+t._s(e.wk)),n("br"),t._v("\n                票房："+t._s(e.tboxoffice)+"\n              ")])])})):t._e()])])],1)])},a=[],s={render:i,staticRenderFns:a};e.a=s},pYmz:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n("7oBO"),a=n("T8H5"),s=n("VU/8"),o=s(i.a,a.a,null,null,null);e.default=o.exports},r5Th:function(t,e,n){t.exports=n.p+"static/img/loading.bf6a6b9.gif"},v2ns:function(t,e){},wxqb:function(t,e,n){"use strict";function i(t){n("kTn2")}var a=n("LFUf"),s=n("3y6W"),o=n("VU/8"),r=i,c=o(a.a,s.a,r,null,null);e.a=c.exports},xJD8:function(t,e,n){"use strict";var i=n("wxqb");e.a={name:"app",components:{myHeader:i.a}}},zjJb:function(t,e){}},["NHnr"]);