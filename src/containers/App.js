import React, { Component } from 'react';
import logo from '../icon/cric.ico';
import './App.css';
import List from '../components/List'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'
import * as actians from '../actions'
import * as apis from '../appConstants/api.js';
import TabHolder from '../components/TabHolder';
import * as appData from '../appConstants/appData';



class App extends Component {
  constructor(){
    super();
  }


  componentDidUpdate(){
    const {data, url, actions} = this.props;  

   if(data instanceof Promise){

    data.then((response)=>{
        actions.showData(response, url);
        this.render();
      })
    }  
  }
  
  componentWillMount(prevProps, prevState) {
    //Todo
  }
  render() {
    const {data, actions, showList, tabid} = this.props;
    const ingredients = ['Chocolate Liquor','Cocoa Butter','Sugar','Milk'];
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>{appData.title}</h2>
        </div>
        <TabHolder data={data} tabid={tabid} url={this.props.url} actions={actions} showList={showList}></TabHolder >
      </div>
    );
  }  
}
function mapStateToProps(state){
  
  return {
    chocolates:state.C1.chocolates,
    isChocolatesMade:state.C1.isChocolatesMade,
    cars:state.C1.cars,
    isFetching:state.C1.isFetching,
    url: state.CR.url,
    tabid: state.CR.tabid,
    data: state.CR.data,
    showList:state.CR.showList,
   
  }
}

function mapDispathToProps(dispatch){
  return {
    actions: bindActionCreators(actians,dispatch)
  }
  
}


export default connect(mapStateToProps,mapDispathToProps)(App);
