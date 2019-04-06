import React, { Component } from 'react';
import './App.css';
import icons from "./icons.json"
import IconContainer from './components/IconContainer';
import IconCard from './components/IconCard';
import Jumbotron from "./components/Jumbotron";
import Wrapper from "./components/Wrapper";

class App extends Component {

  state = { icons }

  componentDidMount() {
    console.log("app mounted")
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
            skill={icon.skill}>
            </IconCard>)
        })}
      </IconContainer>
      </Wrapper>
    );
  }
}

export default App;
