import React from 'react';
import { render } from 'react-dom';
import ShapefileExample from "./shapefile";



const example = (
  <div>
    <h1>React-Leaflet-Shape example</h1>
    <ShapefileExample />
  </div>
)

render(example, document.getElementById('app'));