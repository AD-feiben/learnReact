import React, {Component} from 'react'
import {renderRoutes} from 'react-router-config'
import {Link} from 'react-router-dom'
import '../style/reset.css'

export class Main extends Component {
  constructor(props){
    super(props);
    this.state = {
      name: 'Main',
      navs: [
        {
          name: 'Home',
          route: '/'
        },
        {
          name: 'Menu',
          route: '/menu'
        },
        {
          name: 'About',
          route: '/about'
        },
        {
          name: 'Contact',
          route: '/contact'
        }
      ]
    }
  }

  render(){
    let pathname = this.props.location.pathname
    let title = ''
    switch (pathname) {
      case '/menu':
        title = 'Menu'
        break;
      case '/about':
        title = 'About'
        break;
      case '/contact':
        title = 'Contact'
        break;
      default:
        title = 'Home'
    }
    return (
      <div style={{height: '100%'}}>
        <ul className="nav">
          {this.state.navs.map(item => {
            return (<li key={item.name}><Link to={item.route} className={pathname === item.route ? 'active' : ''}>{item.name}</Link></li>)
          })}
        </ul>
        <div className="content">
          <h2>{title}</h2>
          <p>This is {title} page</p>
          {renderRoutes(this.props.route.routes)}
        </div>
      </div>
    )
  }
}
