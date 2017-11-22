<template>
	<div id="flow">
		<div class="item" v-for='fl in flows'>
			<img :src="fl.src" alt="">
			<h3>{{fl.title}}</h3>
			<p>{{fl.text}}</p>
		</div>
		<div class="load" @click='add'>查看更多...</div>
	</div>
</template>

<script>

import Footers from '../components/footer'
import Flow from '../components/flow'

export default{
	name: 'Community',
	components:{
		Footers,
		Flow
	},
	data(){
		return{
			_flows:[],
			num:5
    	}
	},
	computed:{
		flows(){
			return this._flows.splice(0,this.num);
		}
	},
	created(){
		this._flows = this.$store.state.flows;
	},
	methods:{
		add(){
			this.num += 2;
		}
	}
}

</script>

<style lang='scss'>
	#flow{
		.item{
			border-top: .1rem solid #ccc;
			img{
				width: 100%;
				height: 1rem;
				display: block;
			}
			h3{
				font-size: .16rem;
				padding: 0 .1rem;
				line-height: .24rem;
				margin: .1rem 0;
			}
			p{
				padding: 0 .1rem;
			    font-size: .14rem;
			    overflow: hidden;
			    text-overflow: ellipsis;
			    color: #999;
			    height: .36rem;
			    line-height: .18rem;
			    margin-bottom: .1rem;
			}
		}
	}
</style>