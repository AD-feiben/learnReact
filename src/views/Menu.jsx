import React, {Component} from 'react'
import {Child} from './Child.jsx'

export class Menu extends Component{
  constructor(props){
    super(props)
    this.state = {
      list: ['test', '测试', 'react', 'haha'],
      alert: false,
      alertStr: '',
      toast: false,
      toastStr: '',
      newList: ''
    }
    this.time = ''
  }

  alert(str){
    window.clearTimeout(this.time)
    this.setState({
      alert: true,
      alertStr: str,
      toast: false,
      toastStr: ''
    })
    this.time = setTimeout(() => {
      this.setState({
        alert: false,
        alertStr: ''
      })
    }, 3000)
  }

  toast(str){
    window.clearTimeout(this.time)
    this.setState({
      alert: false,
      alertStr: '',
      toast: true,
      toastStr: str
    })
    this.time = setTimeout(() => {
      this.setState({
        toast: false,
        toastStr: ''
      })
    }, 3000)
  }

  addList(){
    var newList = this.refs.newList.value
    if (newList) {
      var list = this.state.list;
      list.push(newList);
      this.setState({list, newList: ''});
      this.refs.newList.value = '';
    } else {
      this.toast('keyword is empty!')
    }
  }

  inputNewList(e){
    if (e.keyCode === 13){
      this.addList();
      return;
    }
    this.setState({
      newList: this.refs.newList.value
    })
  }

  render(){
    return(
      <div style={{paddingTop: '20px'}}>
        <div className="input">
          <input type="text" ref="newList" onKeyUp={this.inputNewList.bind(this)}  placeholder="add keyword to list"/>
          <button onClick={this.addList.bind(this)}>submit</button>
        </div>
        {this.state.list.map((item, index) => {
          return <Child name={item} key={index} alert={this.alert.bind(this, item)}/>
        })}
        {this.state.newList ? <Child name={this.state.newList} alert={this.alert.bind(this, this.state.newList)}/>: null}
        <div className={this.state.alert ? "tip alert" : 'none'}>{this.state.alertStr}</div>
        <div className={this.state.toast ? "tip toast" : 'none'}>{this.state.toastStr}</div>
      </div>
    )
  }
}
