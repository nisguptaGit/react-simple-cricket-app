import React, { Component } from 'react';

class ListItem extends Component {


  static propTypes = {
    item : React.PropTypes.object.isRequired,
    handleClick : React.PropTypes.func.isRequired,
    title : React.PropTypes.string.isRequired
    }
  
  static defaultProps = {
      title : "Gift"
  }

  render(){
    let keys = Object.keys(this.props.item);
  	//alert(keys)
  	var tds = keys.map(function(td){
             return (<td> {td!=='Soh' ?  String(this.props.item[td]) : (this.props.item[td] || "No Stock")}</td>)
    }, this)

    return <tr>{tds}
  		{this.props.item.Soh > 0 ? <td>
  			{this.props.title && <input type="button" 
  				   value={this.props.title}
  				   onClick={this.props.handleClick}
  		    />} 
  		</td> : <td></td>}
  	</tr>	
 }
}

export default ListItem