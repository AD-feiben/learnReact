import React, {Component} from 'react'

export class Child extends Component{
  alert() {
    this.props.alert()
  }
  render(){
    return (
      <div>
        <div className="menu-child" onClick={this.alert.bind(this)}>{this.props.name}</div>
      </div>
    )
  }
}
