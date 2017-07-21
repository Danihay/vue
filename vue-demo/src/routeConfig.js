
import Home from './components/Home.vue'
import News from './components/News.vue'
import MyInfo from './components/MyInfo.vue'
import NewDetail from './components/NewDetail.vue'

export default [
  {
	path: '/home', 
	component: Home  
  },
  { 
  	path: '/news', 
  	component: News 
  },
  { 
  	path: '/user-info', 
  	component:MyInfo 
  },
  { 
    path: '/new-detail/teaId:id', 
    component:NewDetail
  },
  { 
    path: '/', 
    redirect: '/home' 
  },
  { 
    path: '*', 
    redirect: '/home' 
  },
  { 
    path: '', 
    redirect: '/home' 
  },

];
