import React from 'react';
import Image from './Image';
import NotFound from './NotFound';

const ImageList = props => { 
  
  const results = props.data;
  const loading = props.loading;
  let images;

  // If there are search results display them, otherwise display a Not Found message
  if (results.length) {
    images = results.map(image => 
      <Image 
        source={`https://farm${image.farm}.staticflickr.com/${image.server}/${image.id}_${image.secret}_q.jpg`}
        alt={image.title} 
        key={image.id} 
      />
    );
  } else {
    images = <NotFound />
  }

  return(
    <div className="photo-container">
      <h2>Images For: {props.text}</h2>
      <ul>
        {
          (loading) ? <p>Loading...</p> : images
        }
      </ul>
    </div>
  );
}

export default ImageList;
