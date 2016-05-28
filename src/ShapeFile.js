import React, {PropTypes}  from 'react';
import {Path} from 'react-leaflet';
import Shapefile from './leaflet.shpfile';


export default class ShapeFile extends Path {
  static propTypes = {
    data: PropTypes.object.isRequired
  };

  componentWillMount() {
    super.componentWillMount();
    const { data, map: _map, layerContainer: _lc, ...props, } = this.props;
    this.leafletElement = L.shapefile(data, props); 
  }
 
   componentDidUpdate(prevProps) {
   //todo
    
     this.setStyleIfChanged(prevProps, this.props);
  }
}

