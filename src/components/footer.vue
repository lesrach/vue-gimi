<template>
	<div class="footer">
		<router-link to='/shop' class='link'><span class='iconfont icon-shouye'></span><p>首页</p></router-link>	
		<router-link to='/cart' class='link'>
			<span class='iconfont icon-gouwuche1'>
				<span class='cartnum' v-if='cartnum>0'>{{cartnum}}</span>
			</span>
			<p>购物车</p>
		</router-link>	
		<router-link to='/user' class='link'><span class='iconfont icon-gerenzhongxin'></span><p>用户中心</p></router-link>	
		<router-link to='/community' class='link'><span class='iconfont icon-shequ'></span><p>社区</p></router-link>	
	</div>
</template>

<script>
	export default{
		name:'Footer',
		data(){
			return{
				cartnum:0
			}
		},
		created(){
			var cart = localStorage.getItem('products');
			if(cart){
				cart = JSON.parse(cart);
			}
			this.cartnum = cart.length;
		}
	}
</script>

<style lang='scss'>
	.footer{
		line-height: .53rem;
		height: .53rem;
		background: #000;
		display: flex;
		position: fixed;
		bottom: 0;
		width: 100%;
		.cartnum{
			position: absolute;
			color: #000;
			background: #fff000;
			border-radius: 50%;
			font-size: .12rem;
			display: block;
			width: .16rem;
			height: .16rem;
			line-height: .16rem;
			top: .05rem;
			left: 1.25rem;
			right: 0.1rem;
			text-align: center;
		}
	}
 	.footer a{
 		flex: 1;
 		display: block;
		text-align: center;
		color: #fff;
		span{
			line-height: .35rem;
			font-size: .2rem;
		}
 	}
 	.footer .router-link-active{
		color: #FFF000;
		.iconfont{
			color: #FFF000;
		}
	}
</style>