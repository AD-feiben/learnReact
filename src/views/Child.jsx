import React, {Component} from 'react'

export class Child extends Component{
  alert() {
    this.props.alert()
  }
  render(){
    return (
      <div className="menu-child">
        <span onClick={this.alert.bind(this)}>{this.props.name}</span>
      </div>
    )
  }
}
