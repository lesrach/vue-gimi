<template>

	<div id="shop">
		<div class="container">
			<div class="focusad">
				 <swiper :options="swiperOption" class="swiper-box">
				    <swiper-slide class="swiper-item">
				    	<router-link to='#'>
				    		<img src='/static/img/banner1.jpg' />
				    	</router-link>
				    </swiper-slide>
				    <swiper-slide class="swiper-item">
				    	<router-link to='#'>
							<img src='/static/img/banner2.jpg' />
						</router-link>
					</swiper-slide>
				    <swiper-slide class="swiper-item">
				    	<router-link to='#'>
							<img src='/static/img/banner3.jpg' />
						</router-link>
					</swiper-slide>
				    <div class="swiper-pagination" slot="pagination"></div>
			 	 </swiper>
			</div>
			<div class="href">
				<a href="#main"> <p><img src="/static/img/href1.png" alt=""></p><p>无屏电视</p></a>
				<a href="#group"><p><img src="/static/img/href2.png" alt=""></p><p>精选套餐</p></a>
				<a href="#parts"><p><img src="/static/img/href3.png" alt=""></p><p>推荐配件</p></a>
			</div>
			<Parts title='无屏电视' href='/category/1' type='tv' id='main'></Parts>
			<Parts title='精选套餐' href='/category/2' type='select' id='group'></Parts>
			<Parts title='推荐配件' href='/category/1' type='part' id='parts'></Parts>
		</div>
		<Footers/>
	</div>
	
</template>

<script>

import Parts from '../components/parts'
import Footers from '../components/footer'

export default{
	name: 'Shop',
	data(){
		return{
			swiperOption: {
	         	 pagination: '.swiper-pagination',
	         	 loop:true
	        }
    	}
	},
	components:{
		Parts,
		Footers
	}
}
</script>

<style lang='scss'>
	#shop{
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
		.container{
			padding-bottom: .53rem;
			.task{
				display: flex;
				a{
					flex: 1;
					display: block;
					
				}
			}
			.href{
				display: flex;
				a{
					flex: 1;
					text-align: center;
					display: block;
					height: .8rem;
					padding-top: .1rem;
					box-sizing: border-box;
					img{
						width: .5rem;
						display: inline-block;
					}
					p{
						line-height: .2rem;
					}
				}
			}
		}
	}



</style>