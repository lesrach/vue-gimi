import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

var store = new Vuex.Store({
	state:{
		username:"lesrach",
		login:false,
		products:[
			{src:['/static/img/goods1.jpg','/static/img/goods2.jpg','/static/img/goods3.jpg','/static/img/goods4.jpg','/static/img/goods5.jpg'],id:'285',name:'极米激光无屏电视A1',details:'3000ANSI Lumens/Harman Kardon量身定制/VIP专属服务',price:'25999元',type:'tv',tip:''},
			{src:['/static/img/goods2.jpg','/static/img/goods1.jpg','/static/img/goods3.jpg','/static/img/goods4.jpg','/static/img/goods5.jpg'],id:'259',name:'极米无屏电视H1S',details:'<下单立减100，到手价4499>1100ANSI流明/Harman Kardon音响/全新人工智能系统/3G大运存/新增自动对焦/1:2:1投射比/上下左右梯形校正/2D转3D功能',price:'4999元',type:'tv',tip:''},
			{src:['/static/img/goods3.jpg','/static/img/goods2.jpg','/static/img/goods1.jpg','/static/img/goods4.jpg','/static/img/goods5.jpg'],id:'260',name:'极米无屏电视Z5',details:'<到手价3299>1000ANSI流明/哈曼卡顿音响/上下左右梯形校正/双屏模式',price:'3299元',type:'tv',tip:'give'},
			{src:['/static/img/goods4.jpg','/static/img/goods2.jpg','/static/img/goods3.jpg','/static/img/goods1.jpg','/static/img/goods5.jpg'],id:'74',name:'极米无屏电视Z4X',details:'<到手价2399>哈曼卡顿音响/海量影视、娱乐资源',price:'2399元',type:'tv',tip:'give'},
			{src:['/static/img/goods5.jpg','/static/img/goods2.jpg','/static/img/goods3.jpg','/static/img/goods4.jpg','/static/img/goods1.jpg'],id:'224',name:'极米无屏电视CC',details:'<下单即送3D眼镜>长时续航/JBL音响/快速自动对焦',price:'2799元',type:'tv',tip:'give'},
			{src:'',id:'252',name:'极米激光无屏电视A1Pro',details:'（含100吋软幕）3500ANSI Lumens/Harman Kardon量身定制/VIP专属服务',price:'29999元',type:'tv',tip:''},
			{src:'',id:'158',name:'极米无屏电视H1',details:'<到手价3999>1080P/Harman Kardon高品质重低音音响',price:'3999元',type:'tv',tip:'re'},
			{src:'',id:'270',name:'imea儿童智能投影',details:'儿童视力防护体系/儿童专属正版优质内容/家长远程管控APP',price:'1999元',type:'tv',tip:''},
			{src:'',id:'191',name:'极米无屏电视Z4Air',details:'轻薄澳铝一体机身/内置13600mAh电池',price:'2499元',type:'tv',tip:''},
			{src:'',id:'268',name:'极米无屏电视H1S极光',details:'1200ANSI流明/1.2:1投射比/上下左右梯形校正',price:'5999yuan',type:'tv',tip:''},
			{src:'',id:'290',name:'H1S眼镜支架套餐',details:'套餐立省395元，含H1S、2副3D眼镜、X-Floor 落地支架（F062S）。',price:'5499元',type:'select',tip:''},
			{src:'',id:'288',name:'Z5眼镜支架套餐',details:'套餐立省395元，含Z5、2副3D眼镜、X-Floor 落地支架（F062S）。',price:'3999元',type:'select',tip:''},
			{src:'',id:'124',name:'Z4X支架幕布眼镜套餐',details:'套餐立省493元，含Z4X、2副3D眼镜、三脚架、100吋电动幕布。',price:'3299元',type:'select',tip:''},
			{src:'',id:'291',name:'H1S眼镜套餐',details:'套餐立省99元，含H1S、3D眼镜一副。',price:'5098元',type:'select',tip:''},
			{src:'',id:'289',name:'Z5眼镜支架幕布套餐',details:'套餐立省494元。含Z5、2副3D眼镜、X-Floor 落地支架（F062S）、100吋电动幕布。',price:'4399元',type:'select',tip:''},
			{src:'',id:'122',name:'Z4X支架眼镜套餐',details:'套餐立省294元。含Z4X、2副3D眼镜、三脚架。',price:'2999元',type:'select',tip:''},
			{src:'',id:'271',name:'imea儿童智能投影套装版',details:'儿童视力防护体系/儿童专属正版优质内容/家长远程管控APP/AR智慧早教系统',price:'2499元',type:'select',tip:''},
			{src:'',id:'136',name:'Air支架便携包套餐',details:'套餐立省135元。含Z4Air（深空灰）、转接盘、桌面支架、便携包',price:'2599元',type:'select',tip:''},
			{src:'',id:'226',name:'极米K歌无线麦克风',details:'拾音清晰防干扰/震撼混响音效/无线低失真传输/在家体验KTV包厢专业音效',price:'569元',type:'part',tip:'hot'},
			{src:'',id:'300',name:'极米100英寸16：9激光抗光幕布（软幕）',details:'降低90%环境干扰/160°超广可视角度/全金属边框',price:'5999元',type:'part',tip:'new'},
			{src:'',id:'84',name:'极米DLP-id液晶快门式3D眼镜G102L',details:'一次充电可使用30个小时，看15部大片。178度更广视角，有效减少重影，消除眼睛疲劳，呈现更生动的3D画面！',price:'198元',type:'part',tip:'hot'},
			{src:'',id:'129',name:'极米100英寸16:10电动白塑幕布(升级版)',details:'电动幕布 更广视域 画质增强（幕布因地域区别，运费各不相同，默认为申通快递，不支持包邮活动）',price:'499元',type:'part',tip:'hot'},
			{src:'',id:'251',name:'极米蓝牙手柄',details:'无线蓝牙连接/360°游戏摇杆/微触动灵敏肩键/人体工学设计/智能电量管理',price:'199元',type:'part',tip:'hot'},
			{src:'',id:'292',name:'X-Floor 落地支架（F062S）',details:'多角度自由调节/4+1节支撑杆/巧妙底座设计',price:'499元',type:'part',tip:'hot'},
			{src:'',id:'206',name:'极米Care+服务for A1/A1Pro',details:'适用于极米激光无屏电视A1/A1Pro',price:'2999元',type:'part',tip:'new'},
			{src:'',id:'269',name:'X-Wall壁挂支架',details:'视角可调，铝合金材质，工字钢结构形态，工艺精湛。',price:'129元',type:'part',tip:''},
			{src:'',id:'43',name:'极米X-Roof吊顶支架',details:'2+1模块结构高度自由调节/云台角度正负10°可调适应多种吊装环境',price:'199元',type:'part',tip:''},
			{src:'',id:'141',name:'极米三脚架',details:'高强度铝合金和进口ABS管径可达20mm 承载1.5Kg 4节伸缩式脚架设计。适用于所有极米无屏电视（Z4系列需配专用转接盘）。',price:'98元',type:'part',tip:''}
		],
		rproducts:[
			{src:['/static/img/goods1.jpg'],id:'',name:'极米激光无屏电视A1',details:'3000ANSI Lumens/Harman Kardon量身定制/VIP专属服务',price:'25999元',type:'tv',tip:''},
			{src:['/static/img/goods2.jpg'],id:'',name:'极米无屏电视H1S',details:'<下单立减100，到手价4499>1100ANSI流明/Harman Kardon音响/全新人工智能系统/3G大运存/新增自动对焦/1:2:1投射比/上下左右梯形校正/2D转3D功能',price:'4999元',type:'tv',tip:''},
			{src:['/static/img/goods3.jpg'],id:'',name:'极米无屏电视Z5',details:'<到手价3299>1000ANSI流明/哈曼卡顿音响/上下左右梯形校正/双屏模式',price:'3299元',type:'tv',tip:'give'}
		],
		flows:[
			{src:'https://file02.xgimi.com/bbs/twoexploit/thread/CR-gesRigu2RD.png',title:'极米 X 生活家装饰 | 您有一份价值1111的红包待领取！',text:'这一次，品质生活提供商生活家装饰联合无屏电视开创者极米科技，从居家物质追求到精神角落充填一并出发，共同探寻品质生活家的真实模样。'},
			{src:'https://file02.xgimi.com/bbs/twoexploit/thread/CR-bH8gqaOlig.jpg',title:'极米双十一四连冠 但我并没有那么高兴',text:'2017年双十一结束了，先简单给大家汇报下成绩吧。和往常一样，没有太大悬念，极米连续四年获得第一，双十一当天全网销售总额突破2亿元。在京东平台，极米无屏电视双十一销售额是第二名的五倍。在天猫平台，11日20点11分，天猫单店销售额率先突破1亿元，并跻身天猫双十一“亿元俱乐部”'},
			{src:'https://file02.xgimi.com/bbs/twoexploit/thread/CR-6j37RkBFyy.jpg',title:'极米A1 Pro和CC极光斩获CES 2018创新大奖',text:'美东时间11月9日下午（北京时间11月10日凌晨），全球消费类电子第一展CES在纽约正式揭晓2018年度创新奖项，极米激光无屏电视A1 Pro和极米无屏电视CC极光双双获得创新大奖。其中，A1 Pro获得2018年CES家用影音设备和配件品类创新大奖，CC极光获得2018年CES便携式播放器和配件品类创新大奖。'},
			{src:'https://file02.xgimi.com/bbs/twoexploit/thread/CR-hZu15XmZOP.jpg',title:'双十一宝妈购物推荐：imea儿童智能投影',text:'之前上班的时候，公婆特别宠大宝，天天给她看电视，结果去医院一查发现弱视了，找了好久找到这款智能投影，这款是红外息屏，蓝光调校的，看的时候很大程度减少了对视力的伤害，里边的内容全是筛选过的，不用怕大宝乱按按到不良信息。重点是！可以远程操控，今年暑假真的是全靠这台了，大宝每天看电视的时间我上班都能控制了。'},
			{src:'https://file02.xgimi.com/bbs/twoexploit/thread/CR-Kyr920oBSH.jpg',title:'[极客试界] 第78期 幻响风小净电动智能防霾口罩 0元试用',text:'秋冬季最怕的便是雾霾、灰尘了，为了健康，口罩是必须配备的。随着科技进步，口罩逐渐先进起来。市面上的智能口罩层出不穷、好坏参差不齐。到底应该如何选购智能防霾口罩才不会被坑？真智能还是真忽悠？欢迎报名体验本期免费试用产品——幻响风小净电动智能防霾口罩，一试便知！'},
			{src:'https://file02.xgimi.com/bbs/twoexploit/thread/CR-uOArbhOJcc.jpg',title:'极米双11 极米商城全网价保 免单 配件 VIP卡 都送！',text:'亲爱的极友，我们定了一个小目标：继续蝉联双11全网销量冠军！为了完成这个小目标，我们需要你参与一下，比如说——极米双十一，买几台极米来自己用、送朋友、送老师、送老板、送媳妇儿啥的，这都是可以的！大家加把劲儿，保送极米成销冠！'},
			{src:'https://file02.xgimi.com/bbs/twoexploit/thread/CR-4otklIPQ5q.png',title:'[社区活动]助力双十一，踩楼赢奖励',text:'这个世界对单身狗已经越来越没有包容之心了，好好的一个光棍节愣是被玩成了一年一度的狂欢购物节。也对，除了买买买好像也没有其它方式能让单身狗们得到相对较多的快乐。今年双十一，你准备剁手了没？？？'},
			{src:'https://file02.xgimi.com/bbs/twoexploit/thread/CR-oSdiMG22b9.png',title:'画质好 音质佳 更有人情味——杭州极米直营店体验',text:'新店刚刚安家落户，店员小哥不停的整理货柜忙的满头汗水。可是当小朋友进店体验imea时，他马上放下手里的事情，耐心的在一旁陪伴引导。一款智能产品走进用户的心里，并不需要花哨的噱头或者华丽的数据，这种面对面的感受最直接也最能打动用户。'},
			{src:'https://file02.xgimi.com/bbs/twoexploit/thread/CR-31fGcDCDLb.jpg',title:'激光无屏电视A1Pro、imea儿童机线下品鉴会 欢迎报名！',text:'为方便大家更加详细地了解极米激光无屏电视与imea儿童投影灯极米产品，我们决定在全国8座城市9个门店同时启动极米激光电视A1Pro与imea儿童无屏电视品鉴会，活动将于2017年11月4日星期六下午14：30开始签到，15时正式开始活动。报名审核通过的极友，请准时前往所在城市的极米旗舰店签到赴约，即可现场体验激光无屏电视A1Pro、imea儿童智能投影等极米产品。'},
			{src:'https://file02.xgimi.com/bbs/twoexploit/thread/CR-H0tKbctQMQ.jpg',title:'大家好，给大家介绍一下，这是极米的GMUI3.0',text:'Z5系列机型已率先搭载GMUI3.0，其他兄弟机型也陆续加入3.0大军。目前H1、H1极光也正式推送3.0，H1S和H1S极光机型的GMUI3.0公测也已完成，正式版固件即将和大家见面，敬请期待。我们正按计划在准备Z4X机型的公测固件，请持续关注我们。这回简单制作了一期视频介绍，方便大家更清晰全面直观的认识新UI，极米这新UI这段路，还得靠大伙儿多担待接纳它，我们一起齐头并进，继续向前跑吧！'}
		],
		hots:[
			{link:'/thread/112126-1-1.html',text:'[社区活动] H1S固件内测组招募 组织派专车来接你了'},
			{link:'/thread/112736-1-1.html',text:'[社区活动] 晒出你的Z5 抢免单 赢硬盘 小米路由'},
			{link:'/thread/112604-1-1.html',text:'极米无屏电视Z5获评天猫2017趋势先锋 兑现理想生活'},
			{link:'/thread/112571-1-1.html',text:'快速攒极点必看！交晒机作业 最高奖500极点！长期有效！'},
			{link:'/thread/112143-1-1.html',text:'[应用分享] 极米实用应用集合帖，不断更新中~'},
			{link:'/thread/112127-1-1.html',text:'[固件合辑] 极米刷机需要使用的固件，请区别机型、版本'}
		],
		paramImg:['/static/img/param-1.jpg'],
		detailsImg:['/static/img/de-1.jpg','/static/img/de-2.jpg','/static/img/de-3.jpg','/static/img/de-4.jpg']
	},
	mutations:{
		LOGIN(username){
			this.username = username;
			this.login = true;
		},
		EXIT(){
			this.login = false;
		},
		ADDHISTORY(vuex,id){
			var product = findId(id,vuex.products);
			vuex.rproducts.unshift(product);
			if(vuex.rproducts.length>3){
				vuex.rproducts.pop();
			}
		}
	}
})

function findId(id,arr){
	var el;
	arr.forEach(function(curr,index){
		if(curr.id == id){
			el = curr
		}
	})
	if(!el){
		el = arr[0];
	}
	return el;
}

export default store