// import logo from './logo.svg';
import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor() {
    super();
    this.state = {
      name: "John"
    }
    console.log("constructor");
  }

  componentWillMount() {
    if(window.innerWidth > 500) {
      this.setState(
        {innerWidth: window.innerWidth}
      )
    }
    console.log("Component will mount");
  }

  componentDidMount() {
    console.log("Component did mount");
  }

  componentWillReceiveProps() {
    console.log("component will receive props");
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("should component update");
    return true;
  }

  componentWillUpdate() {
    console.log("component will update");
  }

  componentDidUpdate(prevProps, presState) {
    console.log("component did update",prevProps, presState);
  }

  componentWillUnmount() {
    console.log("Component will unmount");
  }

  changeState() {
    this.setState({name:"Jack"});
  }

  unmountEle() {
    this.setState(
      {name: "Robert"}
    );
  }

  render() {
    console.log("render");
    if(this.state.name === "Robert") {
      return (<div/>);
    }
    return (
      <div className= "App">
        name: {this.state.name}
        innerWidth: {this.state.innerWidth}
        <button onClick={this.changeState.bind(this)}>Change State</button>
        <button onClick={this.unmountEle.bind(this)}>Unmount element</button>
      </div>
    );
    
  }
}



export default App;
