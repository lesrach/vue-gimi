<template>
	<div id="cart">
		<div class="back" :style='{height:height}'></div>
		<div class="header">
			<div @click='back'><span class="iconfont icon-xiangzuo-copy"></span></div>
			<span>购物车</span>
		</div>
		<div class="container">
			<div class="empty-result" v-if='products.length == 0'>
				<span class="iconfont icon-gouwuche"></span>你的购物车是空的
			</div>
			<div class="cartbox" v-if='products.length != 0'>
				<div class="item" v-for="pro in products">
					<a :href="'/goods/'+pro.id" class="img">
						<img :src="pro.src[0]" alt="">
					</a>
					<div class="msg">
						<div class="name">{{pro.name}}</div>
						<div class="price">{{pro.price}}</div>
						<div class="clearfix">
							<button class="re" @click='re(pro)'><span class="iconfont icon-jian"></span></button>
							<span class="num">{{pro.num}}</span>
							<button class="add" @click='add(pro)'><span class="iconfont icon-jia"></span></button>
							<button class="delete" @click='deleted(pro)'><span class="iconfont icon-shanchu"></span></button>
						</div>
					</div>
				</div>
				<a href='#' class="info">购买前请仔细阅读《极米激光无屏电视售后政策》</a>
			</div>
			<div class='suggest'>
				<div class="title">最近浏览或相关推荐</div>
				<div class="sbox">
					<div class="r-item" v-for="rp in rproducts">
						<a :href="rp.link">
							<img :src="rp.src[0]" alt="">
							<p>{{rp.name}}</p>
							<p class='price'>{{rp.price}}</p>
						</a>
					</div>
				</div>
			</div>
			<div class="settle" v-if='products.length != 0'>
				<span>总计：￥{{count}}元</span>
				<a href="/check">去结算</a>
			</div>
		</div>
		<Footers v-if='products.length == 0'/>
	</div>
	
</template>

<script>
import Footers from '../components/footer'
	
export default{
	name: 'Cart',
	data(){
		return{
			products:[],
			rproducts:[],
			height:0
		}
	},
	components:{
		Footers
	},
	created(){
		 var p = localStorage.getItem('products');
		 if(p.length){
		 	p = JSON.parse(p);
		 	this.products = p;
		 }
		this.rproducts = this.$store.state.rproducts;
		this.height = window.innerHeight + "px";
		console.log(this.rproducts);
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
		re(pro){
			var index = this.products.indexOf(pro);
			if(this.products[index].num<=1){
				return;
			}
			this.products[index].num--;
			localStorage.setItem('products',JSON.stringify(this.products))
		},
		add(pro){
			var index = this.products.indexOf(pro);
			this.products[index].num++;
			localStorage.setItem('products',JSON.stringify(this.products));
		},
		deleted(pro){
			var index = this.products.indexOf(pro);
			this.products.splice(index,1);
			localStorage.setItem('products',JSON.stringify(this.products))
		}
	}
}
</script>

<style lang='scss'>
$y : #fff000;
$o : #EC6C00;
	#cart{
		position: relative;
		.back{
			position: absolute;
			left: 0;
			top: 0;
			height: 9999px;
			background: #efefef;
			width: 100%;
			z-index: -1;
		}
		.header{
			line-height: .5rem;
			text-align: center;
			color: $y;
			position: relative;
			font-size: .15rem;
			background: #000;
			div{
				position: absolute;
				left: 0;
				top: 0;
				width: .5rem;
				height: .5rem;
				color: #ccc;
			}
		}
		.container{
			.empty-result{
				padding: .7rem 0;
				text-align: center;
				font-size: .16rem;
				color: #666;
			}
			.cartbox{
				.info{
					font-size: .14rem;
					color: #666;
					padding: .1rem;
					display: block;
					line-height: .2rem;
				}
				.item{
					padding: 0.1rem;
					background: #fff;
					.img{
						display: inline-block;
						img{
							width: .72rem;
							height: .72rem;
						}
					}
					.msg{
						display: inline-block;
						position: relative;
						min-width: 2rem;
						padding-left: .1rem;
						.name{
							line-height: .3rem;
						}
						.price{
							line-height: .3rem;
							color: $o;
						}
						.re,.num,.add{
							float: left;
							height: .3rem;
							border: 1px solid #333;
							display: block;
							width: .3rem;
							box-sizing: border-box;
							text-align: center;
						}
						.num{
							width: .4rem;
						}
						.re,.num{
							border-right: 0;
						}
						.num{
							text-align: center;
							line-height: .3rem;
						}
						.delete{
							float: right;
							display: block;
							width: .24rem;
							height: .24rem;
							background: transparent;
							span{
								font-size: .24rem;
							}
						}
					}
				}
			}
			.suggest{
				.title{
					padding-left: .2rem;
					font-size: .14rem;
					line-height: .2rem;
				}
				.sbox{
					display: flex;
					.r-item{
						width: 33.3%;
						display: inline-block;
						border-left: 1px solid #efefef;
						background: #fff;
						box-sizing: border-box;
						a{
							display: block;
							box-sizing: border-box;
							width: 100%;
							padding: .1rem;
							img{
								width: 100%;
								height: .8rem;
							}
							p{
								width: 100%;
								overflow: hidden;
								text-overflow: ellipsis;
								white-space: nowrap;
								line-height: .24rem;
								text-align: center;
							}
							.price{
								color: $o;
							}
						}
					}
				}
			}
			.settle{
				position: fixed;
				line-height: .45rem;
				bottom: 0;
				width: 100%;
				background: #000;
				color: $y;
				font-size: .14rem;
				padding-left: .1rem;
				box-sizing: border-box;
				a{
					float: right;
					padding: .1rem .2rem;
					color: $y;
					border: 1px solid $y;
					border-radius: 5px;
					margin: .05rem;
				}
			}
		}
	}
</style>
