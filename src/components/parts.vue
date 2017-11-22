<template>
	<div class='parts'>
		<div class="header">{{title}}</div>
		<div class='item-box' v-for='i in item'>
			<a @click.capture='goods' :data-id='i.id'>
				<img :src="i.src[0]" alt="">
				<div class="msg">
					<div class="name">{{i.name}}</div>
					<div class="details">{{i.details}}</div>
					<div class="price">{{i.price}}</div>
				</div>
				<span  v-if="i.tip === 'send'" class='send'>下单赠</span>
				<span  v-if="i.tip === 're'" class='re'>立减</span>
				<span  v-if="i.tip === 'hot'" class='hot'>热销</span>
				<span  v-if="i.tip === 'new'" class='new'>新品</span>
			</a>
		</div>
		<router-link :to='href' class='load'>浏览更多>></router-link>	
	</div>
</template>

<script>
	export default{
		name:'Parts',
		props:['title','type','href'],
		data(){
			return{
				count:10,
				data:[]
			}
		},
		computed:{
			item(){
				return this.data.splice(0,this.count);
			}
		},
		created(){
			var that = this;
			this.data = this.$store.state.products.filter(function(el){
				return el.type == that.type;
			})
		},
		methods:{
			goods(e){
				var el = e.target
				while(el.dataset && !el.dataset.id){
					el = el.parentNode;
				}
				if(el.dataset && el.dataset.id){
					this.$router.push('/goods/' + el.dataset.id);
				}
			}
		}
	}
</script>

<style lang='scss'>
	.parts{
		.header{
			line-height: .45rem;
			text-align: center;
			background: #eee;
			color: #111;
			font-size: .16rem;
		}
		.item-box{
			border-top: 1px solid #f6f6f6;
			a{
				padding: .1rem;
				position: relative;
				display: flex;
				img,.msg{
					display: inline-block;
				}
				img{
					flex: 3;
					height: .7rem;
				}
				.msg{
					padding-left: .1rem;
					
					flex: 7;
					.name{
						color: #111;
						line-height: .24rem;
					}
					.details{
						color: #666;
						height: .4rem;
						line-height: .2rem;
						overflow: hidden;
					}
					.price{
						color: #EC6C00;
						line-height: .24rem;
					}
				}
				.hot,.re,.send,.new{
					position: absolute;
					left: .1rem;
					top: .1rem;
					padding: 0.03rem;
					color: #fff;
				}
				.hot{
					background: #f00;
				}
				.re{
					background: #EC615E;
				}
				.send{
					background: #FFAC13;
				}
				.new{
					background: #83C44E;
				}
			}
		}
		.load{
			border-top: 1px solid #f6f6f6;
			line-height: .56rem;
			text-align: center;
			width: 100%;
			display: block;
			font-size: .16rem;
		}
	}
</style>