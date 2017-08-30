
import React, { Component } from 'react';

export default class ImageDisplay extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let images = this.props.images.map((photos) => {
      return(
        <img key={photos.id} src={photos.img_src} />
      )
    });

    return (
      <section style={this.props.style}>
        {images}
      </section>
    );
  }
}
