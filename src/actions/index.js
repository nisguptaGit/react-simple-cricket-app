import * as actionTypes from '../actionTypes';
import axios from 'axios';
import * as apis from '../appConstants/api';


function getRequestID(){
    return { requestId: 1 }
}
export function makeChocolates(ingredients){
  console.log('makeChocolates');
  return{
    type : actionTypes.MAKE_CHOCOLATE,
    ingredients : ingredients
  }
}

export function giftChocolates(chocolateId){
  console.log(chocolateId)
  return{
    type : actionTypes.GIFT_CHOCOLATE,
    chocolateId : chocolateId
  }
}

export function getUsers(){
  var action = {
    type:'GET_USERS',
    payload:axios.get('https://api.github.com/user', getRequestID())
  }
  return action;
}

export function createBook(book){
  return {
    type:actionTypes.CREATE_BOOK,
    book:book
  }
}

export function deleteBook(id){
  return {
    type:actionTypes.DELETE_BOOK,
    id:id
  }
}


export function loadTabs(data){
  return {
    type:actionTypes.LOAD_TABS,
    data: data
  }
}

export function tabChange(tabid){
  return {
    type:actionTypes.TAB_CHANGE,
    tabid:tabid
  }
}

export function getCricNews(){
  var action = {
    type:actionTypes.CRIC_NEWS,
    tableData:axios.get(apis.cricketNewsAPI, getRequestID()),
    url : apis.cricketNewsAPI
  }
  return action;
}

export function getupcomingMatches(){
  var action = {
    type:actionTypes.UPCOMING_MATCHES,
    tableData:axios.get(apis.newMatchesAPI, getRequestID()),
    url : apis.newMatchesAPI
  }
  return action;
}
export function getOldMatches(){
  var action = {
    type:actionTypes.OLD_MATCHES,
    tableData:axios.get(apis.oldMatchesAPI, getRequestID()),
    url : apis.oldMatchesAPI
  }
  return action;
}

export function getMatchCalender(){
  var action = {
    type:actionTypes.MATCH_CALENDER,
    tableData:axios.get(apis.matchCalendarAPI, getRequestID()),
    url : apis.matchCalendarAPI
  }
  return action;
}

export function showData(response, url){
      console.log(url);
      console.log(response);
   var data = [{"msg" : "No Data Found"}];
   if(response.data)
     switch(url){
      case apis.cricketNewsAPI:
        data = response.data.data;
      break;
      case apis.newMatchesAPI:
        data = response.data.matches;
      break;
      case apis.oldMatchesAPI:
        data = response.data.data;
      break;
      case apis.matchCalendarAPI:
        data = response.data.data;
      break;
    }
  var action = {
    type:actionTypes.SHOW_DATA,
    tableData: data,
    url, url
  }
  return action;
}

