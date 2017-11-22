import Vue from 'vue'
import Router from 'vue-router'
import Shop from '@/pages/shop'
import Cart from '@/pages/cart'
import User from '@/pages/user'
import Community from '@/pages/community'
import Login from '@/pages/login'
import Account from '@/components/account'
import Message from '@/components/message'
import Register from '@/pages/register'
import Goods from '@/pages/goods'


Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/shop',
      component: Shop
    },
    {
      path: '/cart',
      component: Cart
    },
    {
      path: '/user',
      component: User
    },
    {
      path: '/community',
      component: Community
    },
    {
    	path:'/login',
      redirect:'/login/account',
    	component: Login,
    	children:[{
    		path:'account',
    		component:Account
    	},
    	{
    		path:'message',
    		component:Message
    	}]
    },
    {
    	path:'/register',
    	component: Register
    },
    {
      path:'/goods/:id',
      component: Goods
    },
    { ///重定向
        path:'*',
        redirect:'/shop'
    }
  ]
})
