import React, { Component } from 'react';
import * as ChocolateStoreActions from '../actions'

import Tabs  from './Tabs';
import Pane from './Pane';
import ScoreBlog from './ScoreBlog';
import List from '../components/List'
import * as appData from '../appConstants/appData';

class TabHolder extends Component {
    componentDidMount(prevProps, prevState) {
   //Todo 
    }
  componentDidUpdate(){
   //Todo 
  }
  render() {
    const {data, actions, isFetching, tabid, url} = this.props;
    const ingredients = ['Chocolate Liquor','Cocoa Butter','Sugar','Milk'];
    var getButtonAction= function(tab){
   // alert(JSON.stringify(tab))
    switch(appData.tablist.indexOf(tab)){
        /*case 0: 
          return actions.makeChocolates(ingredients);
        case 1: 
          return actions.getCricNews();
        case 2:
           return actions.getupcomingMatches();
        case 3:
           return actions.getOldMatches();
        case 4:
           return actions.getMatchCalender();
        */
        case 0: 
          return actions.getCricNews();
        case 1:
           return actions.getupcomingMatches();
        case 2:
           return actions.getOldMatches();
        case 3:
           return actions.getMatchCalender();
        default: 
          return null;
      
      }
      
  };
  var getTableAction= function(tab){
    switch(appData.tablist.indexOf(tab)){
        /*case 0: 
          return actions.giftChocolates;
        case 1: 
          return actions.getCricNews;
        case 2:
           return actions.getupcomingMatches;
        case 3:
           return actions.getOldMatches;
        case 4:
           return actions.getMatchCalender;
        */
        case 0: 
          return actions.getCricNews;
        case 1:
           return actions.getupcomingMatches;
        case 2:
           return actions.getOldMatches;
        case 3:
           return actions.getMatchCalender;
        default: 
          return null;
      
      }
      
  };
    var getTabLabel = appData.tablist.map(function(tabname){
          return ( <Pane label={tabname} >
       {  tabname !== 'blog' && <input type="button" value={tabname}  onClick={() => getButtonAction(tabname)}/>
        }
        {
          tabname !== 'blog' && this.props.showList ? <List url={url}  tabid={tabid} data={data} someaction= {actions.giftChocolates}/> :  null
        }
           <div>  {tabname === 'blog' ? <ScoreBlog></ScoreBlog> : '' } </div>
          </Pane>)
    },this);

    return (
      <div>
        <Tabs selected={0}>
           {getTabLabel}
        </Tabs >
        </div>
    );
  }
}

export default TabHolder