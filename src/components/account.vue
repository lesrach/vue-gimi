<template>
	<div id='account' class='clearfix'>
		<p class='info'></p>
		<input type="text" name='username' placeholder="邮箱/手机号/用户名" class='username' v-model='username'/>
		<input type="password" name='password' placeholder="登录密码" class='password' v-model='password'/>
		<button @click='login' class="login">立即登录</button>
	</div>
</template>

<script>
	export default{
		name: 'Account',
		data(){
			return{
				username:'',
				password:''
			}
		},
		methods:{
			login(){
				this.$router.push('/main');
			}
		}
	}
</script>

<style lang="scss">
	#account{
		.info{
			line-height: .3rem;
			text-align: center;
			color: #f00;
		}
		.username{
			border-radius: 0.1rem 0.1rem 0 0;
		}
		.password{
			border-radius: 0 0 0.1rem 0.1rem ;
			border-top:0;
		}
		input{
			line-height: .4rem;
			width: 100%;
			border:1px solid #ccc;
			box-sizing:border-box;
			padding: 0 .1rem;
		}
	}
</style>