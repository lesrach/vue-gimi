<template>
	<div id='message' class='clearfix'>
		<p class='info'></p>
		<input type="text" name='phone' placeholder="手机号" @blur='checkphone' v-model='phone'/>
		<input type="text" name='code' placeholder="短信验证码" class='code'/>
		<button class='sendm'>发送短信</button>
		<button @click='login' class="login">立即登录</button>
	</div>
</template>

<script>
	export default {
		name: 'Message',
		data(){
			return{
				phone:""
			}
		},
		methods: {
			checkphone(e){
				var val = e.target.value,
					reg = /^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/,
					info = e.target.previousElementSibling;
				this.cf = "";
				if(val === ""){
					info.innerHTML = '请输入手机号码';
					return;
				}
				if(!reg.test(val)){
					info.innerHTML = '请输入正确的手机号码';
					return;
				} else {
					info.innerHTML = "";
				}
				
			},
			login(){
				this.$router.push("/main");
			}
		}
	}
</script>

<style lang='scss'>
	#message{
		width: 100%;
		.code{
			width: 50%;
		}
		.info{
			line-height: .3rem;
			text-align: center;
			color: #f00;
		}
		
		input,button{
			margin-top: .1rem;
			width: 100%;
			float: left;
			box-sizing: border-box;
			border: 1px solid #ddd;
			line-height: .42rem;
			font-size: .14rem;
		}
		input{
			padding:0 .05rem;
		}
		button{
			background: #eee;
			width: 50%;
			line-height: .4rem;
		}


	}
</style>