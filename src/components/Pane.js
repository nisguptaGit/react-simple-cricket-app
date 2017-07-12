import React, { Component } from 'react';

class Pane extends Component {
  displayName: 'Pane'
  propTypes: {
    label: React.PropTypes.string.isRequired,
    children: React.PropTypes.element.isRequired
  }
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
};
export default Pane;
