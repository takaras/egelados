import ReactMapboxGl, { RotationControl, ZoomControl } from 'react-mapbox-gl';
import MapLayer from '../map-layer/map-layer';

import 'mapbox-gl/dist/mapbox-gl.css';
import './mapbox.css';

const Map = ReactMapboxGl({
  minZoom: 0,
  maxZoom: 15,
  accessToken:
    'pk.eyJ1IjoidGFrYXJhcyIsImEiOiJja3Vtemdlemwwb2J4MnV0aHdkNXZpbm1jIn0.agG7_Nx_UOSrcg_wIotFHQ',
});

const MapContainer = ({ features }) => {
  const mapConfig = {
    zoom: [1],
    center: [13.404954, 52.520008],
  };

  return (
    <div className="map">
      <Map
        style={`mapbox://styles/takaras/ckulabfkletrm17o4wpio0z28`}
        zoom={mapConfig.zoom}
        center={mapConfig.center}
        containerStyle={{
          height: '68vh',
          width: '100%',
        }}
      >
        <ZoomControl />
        <RotationControl />
        <MapLayer features={features} />
      </Map>
    </div>
  );
};

export default MapContainer;
