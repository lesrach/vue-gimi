<template>

	<div id="community">
		<div class="header">
			<a href="#" @click='user'><span class='iconfont icon-yonghu'></span></a>
			<a href="/search"><span class='iconfont icon-search'></span></a>
			<img src="/static/img/logo.png" alt="GIMI社区" />
		</div>
		<div class="container">
			<div class="ad">
				<swiper :options="swiperOption" class="swiper-box">
				    <swiper-slide class="swiper-item">
				    	<router-link to='#'>
				    		<img src='/static/img/com-banner1.jpg' />
				    	</router-link>
				    </swiper-slide>
				    <swiper-slide class="swiper-item">
				    	<router-link to='#'>
							<img src='/static/img/com-banner2.jpg' />
						</router-link>
					</swiper-slide>
				    <swiper-slide class="swiper-item">
				    	<router-link to='#'>
							<img src='/static/img/com-banner3.jpg' />
						</router-link>
					</swiper-slide>
					<swiper-slide class="swiper-item">
				    	<router-link to='#'>
							<img src='/static/img/com-banner4.jpg' />
						</router-link>
					</swiper-slide>
					<div class="swiper-pagination" slot="pagination"></div>
			 	 </swiper>
			</div>
			<div class="task">
				<a href=""><span class='qing iconfont icon-bankuaifl'></span><p>论坛版块</p></a>
				<a href=""><span class='lv iconfont icon-shangcheng'></span><p>积分商城</p></a>
				<a href=""><span class='hong iconfont icon-qiandao'></span><p>每日签到</p></a>
				<a href=""><span class='cheng iconfont icon-liwu'></span><p>极客视界</p></a>
			</div>
			<Flow />
			<div class="hot">
				<h2>热帖推荐</h2>
				<div class="item" v-for='hot in hots'>
					<a :href="hot.link"><span class='iconfont icon-huoyan'></span>{{hot.text}}</a>
				</div>
				<a href='' class="load">查看更多...</a>
			</div>
			<a href="plugin.php?id=shake_lottery&mobile=2" class='yao'>
				<span class='hand iconfont icon-yaoyiyao'></span><span>摇一摇 赢取极点</span><span class='toright iconfont icon-iconxiangyou'></span>
			</a>
			<div class="com-footer">
				<span class='phone'>触屏版</span><span class='both'>|</span><span class="pc">电脑版</span>
			</div>
		</div>
	</div>
	
</template>

<script>

import Flow from '../components/flow'

export default{
	name: 'Community',
	components:{
		Flow
	},
	data(){
		return{
			swiperOption: {
	         	 pagination: '.swiper-pagination',
	         	 loop:true
	        },
	        hots:[]
    	}
	},
	methods:{
		user(){
			this.$router.push('/login/account');
		}
	},
	created(){
		this.hots = this.$store.state.hots;
	}
}

</script>

<style lang='scss'>
	#community{
		.header{
			overflow: hidden;
			background: #fff;
			padding-left: .1rem;
			width: 100%;
			box-sizing: border-box;
			line-height: .5rem;
			height: .5rem;
			img{
				height: .2rem;
				margin: .15rem 0;
			}
			a{
				float: right;
				display: inline-block;
				width: .5rem;
				height: .5rem;
				text-align: center;
				span{
					font-size: .24rem;
					line-height: .5rem;
					color: #666;
				}
			}
		}
		.swiper-container{
			position: relative;
			overflow: hidden;
		}
		.swiper-wrapper {
		    display: flex;
		}
		.swiper-item {
		    flex-shrink: 0;
		    width: 100%;
		    height: 100%;
		}
		.swiper-item img{
			width: 100%;
			height: 1.6rem;
		}
		.swiper-pagination{
			position: absolute;
			width: 100%;
			bottom: .2rem;
			text-align: center;
			span{
				display: inline-block;
				width: 8px;
				height: 8px;
				margin: 0 .04rem;
				background: #eee;
				border-radius: 50%;
			}
			.swiper-pagination-bullet-active{
				background: rgb(0,127,255);
			}
		}
		.task{
			display: flex;
			a{
				padding: .15rem 0;
				flex: 1;
				display: block;
				text-align: center;
				span{
					display: inline-block;
					text-align: center;
					height: .3rem;
					width: .3rem;
					font-size: .24rem;
				}
			}
		}
		.load{
			display: block;
			text-align: center;
			line-height: .5rem;
			border-top: 1px solid #ccc;
			color: #2A53A9;
		}	
		.hot{
			padding: .1rem;
			border-top: .1rem solid #ccc;
			h2{
				padding-left: .1rem;
				line-height: .3rem;
			}
			.item{
				line-height: .45rem;
				border-top: 1px solid #ccc;
				overflow: hidden;
				height: .45rem;
				span{
					padding:0 .1rem;
					color: #D7263C;
				}
				a{
					width: 100%;
					box-sizing: border-box;
					overflow: hidden;
					text-overflow: ellipsis;
					white-space: nowrap;
					display: inline-block;
					line-height: .45rem;
					font-size: .14rem;
				}
			}
		}
		.yao{
			height: .5rem;
			line-height: .5rem;
			display: block;
			border-top: .15rem solid #eee;
			border-bottom: .15rem solid #eee;
			font-size: .16rem;
			overflow: hidden;
			.hand{
				color: #f00;
				padding: 0 .1rem;
				font-size: .24rem;
			}
			.toright{
				float: right;
			}
			span{
				line-height: .5rem;
				height: 100%;
				display: inline-block;
				vertical-align: middle;
			}
		}
		.com-footer{
			text-align: center;
			background: #eee;
			line-height: .5rem;
			.phone{
				color: #ddd;
			}
			.both{
				padding: .1rem;
			}
			.pc{
				color: #aaa;
			}
		}
		.qing{
			color: #7dbade;
		}
		.lv{
			color: #5bb8b4;
		}
		.hong{
			color: #ed8ea3;
		}
		.cheng{
			color: #f2ddbb;
		}
	}
</style>