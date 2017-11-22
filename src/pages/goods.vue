<template>
	<div id="goods">
		<div class="img">
			<swiper :options="swiperOption" class="swiper-box">
			    <swiper-slide class="swiper-item"  v-for='(img,index) in products.src' :key='index'>
			    	<img :src='img'/>
			    </swiper-slide>
			   <div class="swiper-pagination" slot="pagination"></div>
		 	 </swiper>
		 	 <div @click='back' class='iconfont icon-xiangzuo-copy'></div>
		</div>
		<div class="name">{{products.name}}</div>
		<div class="price">{{products.price}}</div>
		<div class="details">{{products.details}}</div>
		<div class="tags">
			<div class="t-item">
				<span>补</span>买贵补差
			</div>
			<div class="t-item">
				<span>邮</span>满59元包邮
			</div>
		</div>
		<div class="num clearfix">
			<p>数量</p>
			<button class="re" @click='re'><span class="iconfont icon-jian"></span></button>
			<span class="numm">{{num}}</span>
			<button class="add" @click='num += 1'><span class="iconfont icon-jia"></span></button>
		</div>
		<div class="products">
			<div class="change">
				<div @click='region = "details"'>详情</div>
				<div @click='region = "param"'>参数</div>
				<div @click='region = "evaluate"'>晒单</div>
			</div>
			<div id="details" v-if='region === "details"'>
				<img :src="img" alt="" v-for='(img,index) in detailsImg' :key='index'>
			</div>
			<div id="details" v-if='region === "param"'>
				<img src="/static/img/banner.jpg" alt="">
				<img :src="img" alt="" v-for='(img,index) in paramImg' :key='index'>
			</div>
			<div id="details" v-if='region === "evaluate"'>
				<div>
					<router-link>全部</router-link>
					<router-link>好评(<span>{{good}}</span>)</router-link>
					<router-link>中评(<span>{{center}}</span>)</router-link>
					<router-link>差评(<span>{{bad}}</span>)</router-link>
				</div>
				<div class="empty">
					<p>未找到相关评论哦~</p>
				</div>
			</div>
		</div>
		<div class="top" @click='top' v-if='scroll > 300'>
			<span></span>
		</div>
		<div class="goods-footer">
			<a href='/shop'><span class='iconfont icon-shouye'></span></a>
			<button @click='cart'>加入购物车</button>
			<a href='/cart' class="tocart">
				<span class='iconfont icon-gouwuche' :class="{turn:animation}">
					<span class='cartnum' v-if='cartnum>0'>{{cartnum}}</span>
				</span>
			</a>
		</div>
	</div>	
</template>

<script>

	
export default{
	name: 'Cart',
	data(){
		return{
			products:{},
			num:1,
			region:'details',
			detailsImg:[],
			paramImg:[],
			good:0,
			center:0,
			bad:0,
			scroll:0,
			id:0,
			cartnum:0,
			animation:false,
			swiperOption: {
	         	 pagination: '.swiper-pagination',
	         	 loop:true
	        }
		}
	},
	created(){
		this.id = this.$route.params.id;
		var index = 0;
		for(var i = 0; i< this.$store.state.products.length; i++){
			if(this.$store.state.products[i].id == this.id){
				index = i;
			}
		}
		this.products = this.$store.state.products[index];
		this.detailsImg = this.$store.state.detailsImg;
		this.paramImg = this.$store.state.paramImg;
		this.$store.commit('ADDHISTORY',this.id);
		var cart = localStorage.getItem('products');
		if(cart){
			cart = JSON.parse(cart);
		}
		this.cartnum = cart.length;
	},
	computed:{
		count(){
			var num =0;
			for(var i= 0;i<this.products.length;i++){
				num += parseInt(this.products[i].price)*this.products[i].num;
			}
			return num
		}
	},
	methods:{
		back(){
			this.$router.go(-1);
		},
		re(){
			if(this.num<=1){
				return;
			}
			this.num--;
		},
		add(){
			this.num++;

		},
		scrollY(){
			this.scroll = window.scrollY;
		},
		top(){
			document.body.scrollTop = 0
			document.documentElement.scrollTop = 0
		},
		main(){
			this.$router.push('/shop');
		},
		cart(){
			var pro = localStorage.getItem('products');
			if(pro){
				pro = JSON.parse(pro);
			}
			var index = indexof(this.products,pro);
			if(index === -1){
				var _pro = this.products;
				Object.assign(_pro,{num:this.num});
				if(pro){
					pro.push(_pro);
				} else {
					pro = [_pro]
				}
				this.cartnum+=1;
				localStorage.setItem('products',JSON.stringify(pro));
			} else {
				pro[index].num += this.num;
				localStorage.setItem('products',JSON.stringify(pro));
			}
			this.animation = true;
			setTimeout(()=>{this.animation = false},400);
		}
	},
	mounted(){
		window.addEventListener('scroll',this.scrollY);
	}
}

function indexof(obj,arr){
	if(arr && arr.length){
		for(var i = 0;i<arr.length;i++){
			if(arr[i].id === obj.id){
				return i
			}
		}
	}
	return -1
}
</script>

<style lang='scss'>

	#goods{
		padding-bottom: .5rem;
		.img{
			position: relative;
			border-bottom: 1px solid #eee;
			.icon-xiangzuo-copy{
				width: .5rem;
				height: .5rem;
				position: absolute;
				left: .1rem;
				top: .1rem;
				font-size: .24rem;
				color: #aaa;
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
				height: 3.2rem;
			}
			
			.swiper-pagination{
				position: absolute;
				width: 100%;
				bottom: .2rem;
				text-align: center;
				span{
					display: inline-block;
					width: 5px;
					height: 5px;
					margin: 0 .04rem;
					background: #eee;
					border-radius: 50%;
				}
				.swiper-pagination-bullet-active{
					background: #bbb;
				}
			}
		}
		.name{
			font-size: .18rem;
		    color: #222;
		    padding: 0 .1rem;
		    line-height: .5rem;
		}
		.price{
			font-size: .2rem;
   			color: #EC6C00;
   			padding: 0 .1rem;
   			line-height: .3rem;
		}
		.details{
			color: #222;
			padding: 0 .1rem;
			line-height: .2rem;
		}
		.tags{
			display: flex;
			border-bottom: .15rem solid #eee;
			border-top: .15rem solid #eee;
			.t-item{
				flex: 1;
				line-height: .5rem;
				padding-left: 0.1rem;
				span{
					background: #4f87ff;
					color: #fff;
					border-radius: 2px;
					padding: 2px;
				}
			}
		}
		.num{
			border-bottom: .15rem solid #eee;
			padding: .1rem;
			p{
				line-height: .3rem;
			}
			.re,.numm,.add{
				height: .36rem;
				width: .36rem;
				text-align: center;
				border: 1px solid #aaa;
				vertical-align: middle;
				float: left;
				box-sizing: border-box;
				background: #fff;
			}
			.re,.numm{
				border-right: 0;
			}
			.numm{
				width: .54rem;
				display: inline-block;
				line-height: .36rem;
			}
		}
		.products{
			width: 100%;
			img{
				width: 100%;
			}
			.change{
				display: flex;
				div{
					flex: 1;
					text-align: center;
					margin: .2rem 0;
					font-size: .16rem;
					border-right: 1px solid #333;
				}
				div:nth-child(3){
					border-right: 0;
				}
			}
		}
		.top{
			position: fixed;
			right: .1rem;
			bottom: .7rem;
			width: .36rem;
			height: .36rem;
			background: rgba(100,100,100,0.3);
			border-radius: 50%;
			span{
				color: transparent;
			}
		}
		.goods-footer{
			position: fixed;
			bottom: 0;
			width: 100%;
			background: #eee;
			height: .4rem;
			line-height: .5rem;
			padding: .05rem 0;
			display: flex;
			a{
				flex: 1;
				text-align: center;
				line-height: .4rem;
				display: block;
				span{
					color: #aaa;
					display: block;
					font-size: .3rem;
				}
			}
			button{
				flex: 3;
				text-align: center;
				background: #ff6700;
				color: #fff;
				line-height: .4rem;
			}
			.tocart{
				position: relative;
				.cartnum{
					position: absolute;
					color: #fff;
					background: #ff6700;
					border-radius: 50%;
					font-size: .12rem;
					display: block;
					width: .16rem;
					height: .16rem;
					line-height: .16rem;
					top: .05rem;
					left: .35rem;
					right: 0.1rem;
					text-align: center;
				}
				.turn{
					animation: turn  0.4s infinite;
					right: .1rem;
				}
			}
		}

	}

@keyframes turn{
	0%{
		transform: translateY(0);
	}
	25%{
		transform: translateY(-10px);
	}
	50%{
		transform: translateY(0);
	}
	75%{
		transform: translateY(-6px);
	}
	100%{
		transform: translateY(0);
	}
}
</style>