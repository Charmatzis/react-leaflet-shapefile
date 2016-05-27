import React from 'react';
import { Map, Circle, TileLayer, LayersControl, FeatureGroup } from 'react-leaflet'
import JQuery from 'jquery'
import {ShapeFile} from '../src'

const { BaseLayer, Overlay } = LayersControl;


export default class ShapefileExample extends React.Component {

  constructor() {
    super();
    this.handleFile = this.handleFile.bind(this);
    this.handleZipFile = this.handleFile.bind(this);
    this.readerLoad = this.readerLoad.bind(this);



    this.state = {
      geodata: null,
      isadded: false
    }
  }


  readerLoad(e) {
    this.setState({ geodata: e.target.result });
    this.setState({ isadded: true });
  }

  handleFile(e) {
    var reader = new FileReader();
        var file = e.target.files[0];
        reader.onload = function(upload) {
          this.readerLoad(upload);
        }.bind(this);
        reader.readAsArrayBuffer(file);
  }
  
  onEachFeature(feature, layer) {
				if (feature.properties) {
					layer.bindPopup(Object.keys(feature.properties).map(function(k) {
						return k + ": " + feature.properties[k];
					}).join("<br />"), {
						maxHeight: 200
					});
				}
			}
		



  render() {
    let ShapeLayers = null;
    if (this.state.isadded === true) {
      ShapeLayers = (<Overlay checked name='Feature group'>
        <FeatureGroup color='purple'>
          <ShapeFile data={this.state.geodata} onEachFeature={this.onEachFeature} isArrayBufer={true}/>
        </FeatureGroup>
      </Overlay>);
    }
    
    

    return (
      <div>
        <div >
          <input type="file" onChange={this.handleFile.bind(this) } className="inputfile"/>
        </div>
        <Map center={[42.09618442380296, -71.5045166015625]} zoom={2} zoomControl={true}>
          <LayersControl position='topright'>
            <BaseLayer checked name='OpenStreetMap.Mapnik'>
              <TileLayer  url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"/>
            </BaseLayer>
            {ShapeLayers}
          </LayersControl>
        </Map>
      </div>

    )
  }
}