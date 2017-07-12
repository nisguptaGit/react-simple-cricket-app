import React, { Component } from 'react';
import './Tab.css';


import axios from 'axios';
import * as apis from '../appConstants/api';

class Tabs extends Component {
  displayName: 'Tabs'
  constructor(){
    super();
    this.state = {selected: 0};
  }


  componentDidMount(nextProps, nextState) {
    //Todo
  }
  componentWillUpdate(nextProps, nextState){
    //Todo 
  }
  componentDidUpdate(nextProps, nextState){
    //Todo
  }

  getDefaultProps() {
    return {
      selected: 0
    };
  }
  getInitialState() {
    return {
      selected: this.props.selected
    };
  }
  handleClick(index, event) {
    event.preventDefault();
    this.setState({
      selected: index
    });
  }

  
  _renderTitles() {
    function labels(child, index) {
      console.log(child);
      let activeClass = (this.state && (this.state.selected === index ? 'active' : ''))|| '';
      return (
        <li key={index}>
          <a href="#" 
            className={activeClass}
            onClick={this.handleClick.bind(this, index)}>
            {child.props.label}
          </a>
        </li>
      );
    }
    return (
      <ul className="tabs__labels">
        {this.props.children.map(labels.bind(this))}
      </ul>
    );
  }
  _renderContent() {
    return (
      <div className="tabs__content">
        {this.props.children[(this.state && this.state.selected) || 0]}
      </div>
    );
  }
  render() {
    return (
      <div className="tabs">
        {this._renderTitles()}
        {this._renderContent()}
      </div>
    );
  }
};
export default Tabs;
