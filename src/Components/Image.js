import React from 'react';

const Image = props => (
  <li>
    <img alt={props.alt} src={props.source} />
  </li>
);

export default Image;
