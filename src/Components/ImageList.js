import React from 'react';
import Image from './Image';
import NotFound from './NotFound';

const ImageList = props => { 
  
  const results = props.data;
  let images;

  // if (results.length) {
  //   images = results.map(gif => <Image />);
  // } else {
  //   images = <NotFound />
  // }

  return(
    <ul className="photo-container">
      {/*images*/}
      <p>test</p>
    </ul> 
  );
}

export default ImageList;
