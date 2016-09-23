
import Home from './module/home'
import Search from './module/search'

export default {
  '/': {
      name:'Home',
      component: Home
    },
  '/search': {
    name:'Search',
    component: Search
  },
}