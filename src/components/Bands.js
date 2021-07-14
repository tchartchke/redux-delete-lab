// Create a new Bands component. This component will handle the rendering of all Band components from a list of bands provided as props.
import React from 'react';
import Band from './Band';

const Bands = props => {
  return (
    <div>
      {props.bands.map((band)=><Band key={band.id} band={band} delete={props.deleteBand}/>)}
    </div>
  )
}

export default Bands