import React from 'react';
import { Map, Circle, TileLayer, LayersControl, FeatureGroup, ImageOverlay, GeoJson } from 'react-leaflet'
import JQuery from 'jquery'


const { BaseLayer, Overlay } = LayersControl;
let geodataurl = 'http://localhost:8000/countries.json';

let geojsonFeature = {
  "type": "Feature",
  "properties": {
    "name": "Coors Field",
    "amenity": "Baseball Stadium",
    "popupContent": "This is where the Rockies play!"
  },
  "geometry": {
    "type": "Point",
    "coordinates": [-104.99404, 39.75621]
  }
};

export default class GeojsonExample extends React.Component {

  constructor() {
    super();
    this.state = {
      urlImageOverlay: {},
      username: ''
    }
  }

  jsondata() {
    return geojsonFeature;
  }
  
  
  componentDidMount(){
    this.serverRequest = JQuery.get(this.props.url, function (result) {
      var lastGist = result;
      this.setState({
        urlImageOverlay: lastGist
      });
    }.bind(this));
  }
  componentWillUnmount() {
    this.serverRequest.abort();
  }
  

  getdata() {
    JQuery.ajax({
      dataType: "json",
      url: this.props.url,
      success: function (data) {
        JQuery(data.features).each(function (key, feature) {
          this.setState({ username: 'Chris' });
        });
      }
    }).error(function () { });
  }
  
  onEachFeature(feature, layer) {
    if (feature.properties && feature.properties.name) {
        layer.bindPopup(feature.properties.name);
    }
}

  render() {
    return (<Map center={[42.09618442380296, -71.5045166015625]} zoom={2} zoomControl={true}>
      <LayersControl position='topright'>
        <BaseLayer checked name='OpenStreetMap.Mapnik'>
          <TileLayer  url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"/>
        </BaseLayer>
        <Overlay checked name='Feature group'>
          <FeatureGroup color='purple'>
            <GeoJson
                data={this.state.urlImageOverlay}
                color='red'
                fillColor='green'
                fillOpacity= {0.5}
                weight={1} 
                onEachFeature={this.onEachFeature}/>
          </FeatureGroup>
        </Overlay>
      </LayersControl>
    </Map>)
  }


}

