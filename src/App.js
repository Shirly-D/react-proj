// import logo from './logo.svg';
import React, { Component } from 'react';
import './App.css';
import Parent from './Components/Parent.js';

export const PropApp = () => {
  return (
    <div>
      <Parent></Parent>
    </div>
  )
}

class App extends Component {

  constructor() {
    super();
    this.state = {
      name: "John",
      show: true
    }
    console.log("constructor");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("Get derived state from props");
    return {name: props.fname}
  }

  componentDidMount() {
    console.log("Component did mount");
  }

  shouldComponentUpdate() {
    console.log("should component update");
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("Get snapshot before update");
    document.querySelector('.div1').innerHTML = `Before name updated: ${prevState.name}`;
    return true;
  }

  componentDidUpdate() {
    console.log("component did update");
    document.querySelector('.div2').innerHTML = `After name updated : ${this.state.name}`;
  }

  changeState() {
    this.setState({name:"Jack"});
  }

  unmountEle() {
    this.setState(
      {show: false}
    );
  }

  render() {
    console.log("render");
    let display;
    if(this.state.show) {
      display = <Child/>;
    };
    return (
      <div className= "App">
        name: {this.state.name}
        <div>
          <p className="div1"></p>
          <p className="div2"></p>
        </div>
        {display}
        <div>
          <button onClick={this.changeState.bind(this)}>Change State</button>
          <br/>
          <button onClick={this.unmountEle.bind(this)}>Unmount element</button>
        </div>
        <div>
          <Message></Message>
        </div>
      </div>
    );
    
  }
}

class Child extends React.Component {
  componentWillUnmount() {
    console.log("Component will unmount");
  }
  render() {
    return (
      <p>Hello World!!</p>
    )
  }
}



export default App;
