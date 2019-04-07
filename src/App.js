import React, { Component } from 'react';
import './App.css';
import icons from "./icons.json"
import IconContainer from './components/IconContainer';
import IconCard from './components/IconCard';
import Jumbotron from "./components/Jumbotron";
import Wrapper from "./components/Wrapper";
import IconButton from './components/IconButton';

class App extends Component {

  state = { 
    icons,
  lastClicked: 99,
  score: 0
 }

  componentDidMount() {
    console.log("app mounted")
  }

  setLastClicked = id => {
    console.log(this, "setLastClick run")
    console.log(id , "sLC ID")
    this.setState(state => {
      console.log (state.lastClicked)
      return {lastClicked: id}
    })
    console.log(this.state.lastClicked , "tsLC")
  }

  scoreManipulator = (current) => {
    (this.state.lastClicked !== current) 
    ? this.setState(state => {
      return {score: (state.score + 1)}
    })
    : this.setState(state => {
      return {score: 0}
    })
  }

  componentDidUpdate() {
    console.log(this.state.lastClicked , "cDU")
    console.log(this.state.score , "cdu score")
  }

  render() {
    return (
      <Wrapper>
      <Jumbotron score={this.state.score}/>
      <IconContainer>
        {this.state.icons.map(icon => {
          return (<IconCard 
            icon={icon.icon}
            key={icon.id}
            id={icon.id}
            skill={icon.skill}
            >
            <IconButton setLastClicked={this.setLastClicked} scoreManipulator={this.scoreManipulator} />
            </IconCard>)
        })}
      </IconContainer>
      </Wrapper>
    );
  }
}

export default App;
