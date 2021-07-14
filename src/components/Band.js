// Set up the new Band component that is in charge of displaying the information for a single band.

// In the Band component, you will need to add a button that dispatches an action of type 'DELETE_BAND' and then passes through that band's id as the action.id. This dispatched action should be provided as a prop from BandsContainer.

import React, { Component } from 'react';

class Band extends Component {

  render() {
    return(
      <li>
        {this.props.band.name}
        <button onClick={()=>{this.props.delete(this.props.band.id)}}>Break Up</button>
      </li>
    );
  }
};

export default Band;
