import 'vant/lib/index.css'
import { Button, NavBar, Tabbar, TabbarItem, Icon, Swipe, SwipeItem } from 'vant'

export default {
  install (Vue) {
    Vue
      .use(Button)
      .use(NavBar)
      .use(Tabbar).use(TabbarItem)
      .use(Icon)
      .use(Swipe).use(SwipeItem)
  }
}
