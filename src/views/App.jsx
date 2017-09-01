import React, {Component} from 'react'

export class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      name: 'App'
    }
  }
  render(){
    return (
      <div className="appWrap">
      </div>
    )
  }
}
