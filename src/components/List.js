import React, { Component } from 'react';
import './List.css';
import ListItem from './ListItem'
import axios from 'axios';
import * as apis from '../appConstants/api';

class List extends Component {
  constructor(){
    super();
  }
  componentDidMount(prevProps, prevState) {
   //Todo
  }
  componentWillMount(prevProps, prevState) {
   //Todo
  }
  
  render() {

  const {data,someaction} = this.props;

    let keys =  Object.keys(data[0]);
    var th = '';

    keys && (th = keys.map(function(t){
             return (<th>{t}</th>)   
     }, this))
  var rows = data.map(function(row, index){
      return (<ListItem key={row.Id || index.toString()} item={row} title="Sell" handleClick={() => someaction(row.Id)}/>)
    },this)

  	return (
  		<table>
        <thead>
  			 <tr>
  				{th}
         </tr>
        </thead>
        <tbody>
  			{rows}
        </tbody>
  		</table>
  	);
  }
}

export default List