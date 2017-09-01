import {Main} from '../views/Main.jsx'
import {App} from '../views/App.jsx'
import {About} from '../views/About.jsx'
import {Menu} from '../views/Menu.jsx'

export const routes = [{
  component: Main,
  routes: [
    {
      path: '/',
      exact: true,
      component: App
    },
    {
      path: '/about',
      component: About
    },
    {
      path: '/menu',
      component: Menu
    }
  ]
}]
