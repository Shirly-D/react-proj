// import logo from './logo.svg';
import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom';
import Home from './Components/Home.js';
import About from './Components/About.js';
import './App.css';
import Parent from './Components/Parent.js';
import data from './Task1/data.js'
// import CardList from './Task1/index.js';
import AxiosApp from './Components/Axios.js';
import Emp from './Task2/Employee.js';
import EmployeeDetails from './Task2/EmpDetails.js';

export const PropApp = () => {
  return (
    <div>
      <Parent></Parent>
    </div>
  )
}

const Message = props => <div>{props.msg}</div>;

class App extends Component {

  // react lifecycle implementatiom
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
      <Router>
        <div className= "App">
          {/* change state and implement react lifecycle */}
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
            <Parent></Parent>
          </div>

          {/* reusable component example */}
          <div>
            <Message msg="This is reusable component"></Message>
            <Message msg="This is sub re-usable comp"></Message>
          </div>
          <ul className="header">
            <li>
              <Link to="/">Home</Link>
            </li> 
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
          <Switch>
            <Route exact path="/" render={() => <Home data={data} />}></Route>
            <Route exact path="/about" component={About}></Route>
            <Route exact path="/employee" component={Emp}></Route>
            <Route exact path="/employee/:id" component={EmployeeDetails}></Route>
          </Switch>
          <div>
            <Emp></Emp>
          </div>
          {/* <div className="List-card">
            <CardList></CardList>
          </div> */}

          <div>
            <AxiosApp />
          </div>
        </div>
      </Router>
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
