import React, {Component} from 'react'

export class About extends Component {
  constructor(props){
    super(props);
    this.state = {
      name: 'About',
      list: ['zhangsan', 'lisi', 'wangwu', 'zhaoliu']
    }
  }
  render(){
    return (
      <div className="aboutWrap">
        <ol>
        {this.state.list.map(item => {
          let color = `rgb(${Math.round(Math.random()*255)}, ${Math.round(Math.random()*255)}, ${Math.round(Math.random()*255)})`
          return <li key={item} style={{color: color, listStyle: 'circle inside', marginLeft: '30px', textAlign: 'left'}}>{item}</li>
        })}
        </ol>
      </div>
    )
  }
}
