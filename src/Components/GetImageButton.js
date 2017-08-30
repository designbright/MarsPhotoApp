// This component is a functional stateless component. It should return a <button> and receive props. It should fire the fetchRoverImage function when clicked and return the images if there were any from that day.



import React, { Component } from 'react';


export default class GetImageButton extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div className="App">
        <button onClick={this.props.action}> {this.props.Button}</button>
      </div>
    );
  }
}
