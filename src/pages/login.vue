<template>
<div id="login">

	<router-link to='/login/account' class='change'>极米账户登录</router-link>
	<router-link to='/login/message' class='change'>短信快捷登录</router-link>
	<div class="formbox">
		<router-view></router-view>
	</div>
	
	<div class="clearfix">
	<router-link to='/register' class='register'>注册新账号</router-link>
	<router-link to='/register' class='help'>忘记密码</router-link>
	</div>
	<div class="info">
		<span>其他方式登录</span>
		<div class="back"></div>
	</div>
	<div class="other">
		<a href="#" class="qq"><span class="iconfont icon-qq"></span></a>
		<a href="#" class="sina"><span class="iconfont icon-xinlang-copy"></span></a>
	</div>
</div>
</template>

<script>
	export default {
		name: 'Login'
	}
</script>

<style lang='scss'>
	#login{
		padding:0 0.16rem;
		font-size: .14rem;
		.change{
			width:49%;
			display:inline-block;
			text-align: center;
			font-size:.18rem;
			line-height: .24rem;
			margin:.48rem 0 .16rem;

		}
		.router-link-active{
			color:#439CF0;
		}
		.login{
			width: 100%;
			display: block;
			line-height: .4rem;
			background: #00ca5e;
			color: #fff;
			text-align: center;
			margin: .1rem 0;
			font-size: .16rem;
		}
		.register{
			float: left;
			line-height: .4rem;

		} 
		.help{
			float: right;
			line-height: .4rem;
		}
		.info{
			width: 100%;
			line-height: .4rem;
			position: relative;
			text-align: center;
			span{
				padding:0 .2rem;
				background: #fff;
			}
			.back{
				position: absolute;
				left: 0;
				top: 0;
				height: .2rem;
				border-bottom: 1px solid #ccc;
				width: 100%;
				z-index: -1;
			}
		}
		.other{
			width: 100%;
			text-align: center;
			a{
				text-align: center;
				display: inline-block;
				height: .34rem;
				width: .34rem;
				border-radius: 50%;
				background: #7b7b7b;
				color: #fff;
				margin:.1rem;
				span{
					line-height: .34rem;
					color: #fff;
					font-size: .24rem;
				}
			}
		}
	}
</style>