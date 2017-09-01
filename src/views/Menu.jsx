import React, {Component} from 'react'
import {Child} from './Child.jsx'

export class Menu extends Component{
  constructor(props){
    super(props)
    this.state = {
      list: ['test', '测试', 'react', 'haha'],
      alert: false,
      alertStr: ''
    }
    this.time = ''
  }

  alert(str){
    window.clearTimeout(this.time)
    this.setState({
      alert: true,
      alertStr: str
    })
    this.time = setTimeout(() => {
      this.setState({
        alert: false,
        alertStr: ''
      })
    }, 3000)
  }

  render(){
    return(
      <div style={{paddingTop: '20px'}}>
        {this.state.list.map(item => {
          return <Child name={item} key={item} alert={this.alert.bind(this, item)}/>
        })}
        <div className={this.state.alert ? "alert" : 'none'}>{this.state.alertStr}</div>
      </div>
    )
  }
}
