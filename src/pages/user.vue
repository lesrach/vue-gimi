<template>
	<div id="user">
		<div class="container">
			<div class="headimg">
				<p @click='$router.push("/login")' v-if='!login'>立即登录</p>
				<p v-else>{{username}}</p>
				<img src="/static/img/headimg.gif" alt="头像" />
			</div>
			<div class="my">
				<a src=''><p><span class='iconfont icon-dingdan'></span></p>全部订单</a>
				<a src=''><p><span class='iconfont icon-daifukuan'></span></p>代付款</a>
				<a src=''><p><span class='iconfont icon-daishouhuo'></span></p>待收货</a>
				<a src=''><p><span class='iconfont icon-yishouhuo'></span></p>已完成</a>
			</div>
			<div class="fuli">
				<a src=''><span class='iconfont icon-hui'></span>我的优惠券<span class='iconfont icon-iconxiangyou lr'></span></a>
				<a src=''><span class='iconfont icon-qian'></span>我的现金券<span class='iconfont icon-iconxiangyou lr'></span></a>
				<a src=''><span class='iconfont icon-37'></span>我的推荐码<span class='iconfont icon-iconxiangyou lr'></span></a>
				<a src=''><span class='iconfont icon-letter-g-outline'></span>G卡通道<span class='iconfont icon-iconxiangyou lr'></span></a>
				<a src=''><span class='iconfont icon-fuwu-copy'></span>我的服务<span class='iconfont icon-iconxiangyou lr'></span></a>
				<a src=''><span class='iconfont icon-shouhuodizhi'></span>地址管理<span class='iconfont icon-iconxiangyou lr'></span></a>
				<a src='' class='online'><span  class='iconfont icon-zaixiankefu'></span>地址管理<span class='iconfont icon-iconxiangyou lr'></span></a>
			</div>
			<div class="msg">
				<p>致电客服<a href="tel:4000028960">400-0028-960</a></p>
				<p class='under'>每日9:00-23:00（仅收取市话费）</p>
			</div>
			<div @click='exit' v-if='login' class='exit'>退出登录</div>
		</div>
		<Footers />
	</div>
	
</template>

<script>
import Footers from '../components/footer'

export default{
	name: 'User',
	data(){
		return{
			login:false,
			username:''
		}
	},
	methods:{
		exit(){
			this.$store.commit('EXIT');
			this.$router.push('/login');
		}
	},
	components:{
		Footers
	},
	created(){
		this.login = this.$store.state.login;
		this.username = this.$store.state.username;
	}
}

</script>

<style lang='scss'>
	.iconfont{
		color: #666;
	}
	#user{
		.container{
			padding-bottom: .5rem;
		}
		.headimg{
			line-height: 1rem;
			height: 1rem;
			background: #ec6c00;
			margin-bottom: .6rem;
			position: relative;
			p{
				line-height: .7rem;
				text-align: center;
				color: #fff;
				font-weight: bold;
				font-size: .16rem;
			}
			img{
				width: .8rem;
				height: .8rem;
				position: absolute;
				left: 1.2rem;
				top: .6rem;
				border-radius: 50%;
			}
		}
		.my{
			display: flex;
			border-bottom: .15rem solid #ccc;
			a{
				flex: 1;
				text-align: center;
				line-height: .3rem;
				p{
					text-align: center;
					height: .3rem;
				}
				span{
					font-size: .3rem;
				}
			}
		}
		.fuli{
			a{
				line-height: .5rem;
				width: 100%;
				display: block;
				border-bottom: 1px solid #f6f6f6;
				font-size: .14rem;
				span{
					padding:0 .1rem;
				}
			}
			.online{
				border-top: .15rem solid #ccc;
				border-bottom: .15rem solid #ccc;
			}
			.lr{
				float: right;
			}
			span{
				font-size: .18rem;
			}
			.icon-letter-g-outline{
				font-size: .2rem;
			}
		}
		.msg{
			border-bottom: .15rem solid #ccc;
			p{
				font-size: .16rem;
				line-height: .3rem;
				text-align: center;
			}
			.under{
				color: #999;
				font-size: .12rem;
			}
		}
		.exit{
			line-height: .5rem;
			border-top: .15rem solid #ccc;
			text-align: center;
		}
	}
</style>