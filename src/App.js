import React, { Component } from "react";
import Card from "./components/Card";
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
import Score from "./components/Score";
import friends from "./pics.json";

var _ = require('underscore');

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends,
    score: 0
  };

  handleClick = (id, checked) => {
    const click = this.state.friends;
    let score = this.state.score;

    if (click[id - 1].clicked === 1) {

      console.log('You Lose')

      click.map(friend => (friend.clicked = 0))
      score = 0;
      this.setState ({ score })
      

    } else {
      score = score + 1
      console.log(score);
      click[id - 1].clicked = checked;
      
    }

    this.setState({ friends: click, score });
    console.log(this.state)
    this.checkWin();

   
  }

  checkWin = () => {
    const checkScore = this.state.score;
    if(checkScore >= 11){
      console.log("You Win")
    }
  }



  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Header>Clicky Game <Score score = {this.state.score} /></Header>
        {_.shuffle(this.state.friends).map(friend => (
          <Card
            id={friend.id}
            image={friend.image}
            clicked={friend.clicked}
            handleClick={this.handleClick}

          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
