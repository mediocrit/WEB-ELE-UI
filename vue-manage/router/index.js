import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes=[{
    path:'/',
    name:'vueMain',
    // component:Home
    component:()=>import('../views/Main.vue'),
    children:[
        {
            path:'/home',
            name:'vueHome',
            component:()=>import('../views/Home')
            
        },
        {
            path:'/user',
            name:'vueUser',
            component:()=>import('../views/User')
            
        }
        
    ]
}

]
const router=new VueRouter({
    mode:'history',
    routes
})

export default router