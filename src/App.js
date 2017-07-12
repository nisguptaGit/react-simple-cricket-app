import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ScoreBlog from './component/ScoreBlog';
import * as apis from './appConstants/api.js'
class App extends Component {

  componentWillMount(prevProps, prevState) {
    console.log("cricketNewsAPI : "+apis.cricketNewsAPI);
    console.log("newMatchesAPI : "+apis.newMatchesAPI);
    console.log("oldMatchesAPI : "+apis.oldMatchesAPI);
    console.log("matchCalendarAPI : "+apis.matchCalendarAPI);
    console.log("cricketScoreAPI : "+apis.cricketScoreAPI);
    console.log("cricketCommentaryAPI : "+apis.cricketCommentaryAPI);
    console.log("playerStatsAPI : "+apis.playerStatsAPI);
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <ScoreBlog></ScoreBlog>
      </div>
    );
  }
}

export default App;
