import 'vant/lib/index.css'
import { Button, NavBar, Tabbar, TabbarItem, Icon, Swipe, SwipeItem, Grid, GridItem, Image, Card, Tag, Tab, Tabs } from 'vant'

export default {
  install (Vue) {
    Vue
      .use(Button)
      .use(NavBar)
      .use(Tabbar).use(TabbarItem)
      .use(Icon)
      .use(Swipe).use(SwipeItem)
      .use(Grid).use(GridItem)
      .use(Image)
      .use(Card)
      .use(Tag)
      .use(Tab)
      .use(Tabs)
  }
}
