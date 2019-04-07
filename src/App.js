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
  lastClicked: 99
 }

  componentDidMount() {
    console.log("app mounted")
  }

  increaseScore = _ => {
    console.log(this, "increaseScore run")
  }

  render() {
    return (
      <Wrapper>
      <Jumbotron />
      <IconContainer>
        {this.state.icons.map(icon => {
          return (<IconCard 
            icon={icon.icon}
            key={icon.id}
            id={icon.id}
            skill={icon.skill}
            >
            <IconButton increaseScore={this.increaseScore} />
            </IconCard>)
        })}
      </IconContainer>
      </Wrapper>
    );
  }
}

export default App;
