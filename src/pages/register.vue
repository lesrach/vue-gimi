<template>
	<div id="register">
		<div class="header">
			<h1>注册极米账户</h1>
			<p>如果你已经拥有极米账号 请在此<router-link to='/login/account'>登录</router-link> </p>
		</div>
		<div class="container">
			<div class="info">{{info}}</div>
			<div class="clearfix">
				<div class="data">
					{{region}}({{pre}})
				</div>
				<div class="icon">
					
				</div>
			</div>
			
			<input type="text" placeholder="手机号码" class='phone' v-model='username'/>
			<input type="text" placeholder="验证码" class="code" v-model='inCode'/>
			<img :src="codesrc" alt="验证码" class="codeimg" @click='getCode'>
			<button class="register" @click='check'>立即注册</button>
			<p>点击“立即注册”，即表示您同意并愿意遵守<a href="" target="_blank">《极米用户注册协议》</a> </p>
		</div>
	</div>
</template>

<script>
	import axios from "axios";
	export default{
		name: 'Register',
		data(){
			return{
				region: '中国',
				pre:"+86",
				codesrc:"",
				code:"",
				username:'',
				inCode:'',
				info:''			}
		},
		methods:{
			getCode(){
				var that = this;
				axios.get("http://route.showapi.com/26-4?showapi_appid=45024&showapi_sign=a2bede57b62649b2bc42a1c043b07dab&textproducer_char_string=qwertyuiopasdfghjklzxcvbnm").then(function(data){
					that.code = data.data.showapi_res_body.text;
					that.codesrc = data.data.showapi_res_body.img_path;
				})
				console.log("get");
			},
			check(){
				var reg = /^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/;
				if(this.username == ""){
					this.info = "请输入手机号码";
					return
				}
				if(this.inCode == ''){
					this.info = "请输入验证码"
					return
				}
				if(!reg.test(this.username)){
					this.info = "请输入正确的手机号码";
					return
				}
				if(this.code != this.inCode){
					this.info = "请输入正确的验证码";
					return
				}
				this.$router.push('/login/account')
			}
		},
		created(){
			this.getCode();
		}
	}
</script>

<style lang='scss'>
	#register{
		padding:0 .16rem;
		.header{
			text-align: center;
			padding: 0.05rem 0;
			border-bottom: 1px solid #f4f4f4;
			p,h1{
				text-align: center;
			}
			h1{
				line-height: .4rem;
			}
			p{
				color: #aaa;
				font-size: .14rem;
				a{
					color: #70bdff;
					text-decoration: underline;
				}
			}
		}
		.container{
			line-height: .4rem;
			.info{
				text-align: center;
				color: #f00;
				height: .3rem;
				line-height: .3rem;
			}
			.data{
				width: 84%;
				float: left;
				border: 1px solid #ccc;
				border-right: 0;
				box-sizing:  border-box;
				padding-left: .1rem;
			}
			.icon{
				width: 16%;
				float: left;
				height: .42rem;
				border: 1px solid #ccc;
				box-sizing: border-box;
			}
			input{
				line-height: .42rem;
				margin-top: .1rem;
				width: 100%;
				box-sizing: border-box;
				padding-left: .1rem;
				border: 1px solid #ccc;
			}
			.code{
				width: 50%;
				margin-right: 5%;
			}
			img{
				width: 43%;
				display: inline-block;
				vertical-align: middle;
				height: .42rem;
			}
			.register{
				width: 100%;
				display: block;
				line-height: .4rem;
				background: #00ca5e;
				color: #fff;
				text-align: center;
				margin: .1rem 0;
				font-size: .16rem;
			}
			p{
				line-height: .18rem;
				a{
					color: #70BDFF;
					text-decoration: underline;
				}
			}
		}
	}
</style>