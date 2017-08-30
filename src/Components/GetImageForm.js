import React, { Component } from 'react';

import GetImageButton from './GetImageButton.js';
import ImageDisplay from './ImageDisplay.js'

// https://api.nasa.gov/planetary/apod?api_key=yOIKJg4DcqZaqiFipn9zAbSEVWuxuDcFDe9ywIZQ

const API_KEY = "yOIKJg4DcqZaqiFipn9zAbSEVWuxuDcFDe9ywIZQ";

export default class GetImageForm extends Component {
  constructor(){
    super();

  this.state = {
    rover: "Curiosity",
    camera: "FHAZ",
    images: [],
    sol: "1000",
  }

  this.fetchRoverImage = this.fetchRoverImage.bind(this);
  this.handleRover = this.handleRover.bind(this);
  this.handleCamera = this.handleCamera.bind(this);
  this.handleSol = this.handleSol.bind(this);
}


// The .value is referencing the form value=""
handleRover(event){
  this.setState({rover: event.target.value})
}

handleCamera(event){
  this.setState({camera: event.target.value})
}

handleSol(event){
  this.setState({sol: event.target.value})
}

fetchRoverImage = () => {

  let cam = this.state.camera;
  let rove = this.state.rover;
  let num = this.state.sol;

  let imageUrl = `https://api.nasa.gov/mars-photos/api/v1/rovers/${rove}/photos?sol=${num}&camera=${cam}&api_key=${API_KEY}`;

// Photos is part of the console.log key which is an array of images
  fetch(imageUrl)
     .then(results => results.json())
     .then(json => {
       console.log("Fetch Data", json)
       this.setState({
         images: json.photos});
     })
     .catch((error) => {
       console.log("Error with Fetching : ", error);
     });
   }

  render() {
    return (
      <div className="container-fluid">
        <h1>Mars Rover Images</h1>


      <form>
        <label htmlFor="rover">Rover</label>

          <select onChange={this.handleRover} id="rover" value={this.state.rover}>
            <option value="Curiosity">Curiosity</option>
            <option value="Opportunity">Opportunity</option>
            <option value="Spirit">Spirt</option>
          </select>

          <label htmlFor="camera">Camera Type</label>

          <select onChange={this.handleCamera} id="rover" value={this.state.value}>
            <option value="fhaz">FHAZ (Front Hazard)</option>
            <option value="rhaz">RHAZ (Rear Hazard)</option>
            <option value="navcam">NAVCAM (Navigation Cam)</option>
          </select>

          <label htmlFor="sol">Martian Sol: 1000-2000</label>

          <input type="number" onChange={this.handleSol} max="2000" min="1000" value={this.state.value}/>
        </form>


        <div className="App">
          <GetImageButton action={this.fetchRoverImage} prompt="Submit Button"/>
          <ImageDisplay images={this.state.images}/>
        </div>

      </div>
    );
  }

}
