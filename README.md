# react-leaflet-shapefile

React component build on top of [React-Leaflet](https://github.com/PaulLeCam/react-leaflet) that integrate [leaflet.shapefile](https://github.com/calvinmetcalf/leaflet.shapefile) functionality.

![example](images/example.gif)

## Install

```
npm install react-leaflet-shapefile
```

## Getting started

Add some 'react-leaflet' so you can have a map.
Then add

```
import { Map, TileLayer, FeatureGroup } from 'react-leaflet';
import { ShapeFile } from "react-leaflet-shapefile"

...

 <ShapeFile data={this.somedata} onEachFeature={this.onEachFeature} isArrayBufer={true}/>

```

For more details on how to use this plugin check the [example](https://github.com/Charmatzis/react-leaflet-shapefile/tree/master/example).


