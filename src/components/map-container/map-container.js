import { useState } from 'react';
import ReactMapboxGl, {
  Feature,
  Layer,
  Popup,
  RotationControl,
  ZoomControl,
} from 'react-mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import './mapbox.css';

const Map = ReactMapboxGl({
  minZoom: 0,
  maxZoom: 15,
  accessToken:
    'pk.eyJ1IjoidGFrYXJhcyIsImEiOiJja3Vtemdlemwwb2J4MnV0aHdkNXZpbm1jIn0.agG7_Nx_UOSrcg_wIotFHQ',
});

const MapContainer = ({ features }) => {
  const [popup, setPopup] = useState(false);
  const [mapConfig, setMapConfig] = useState({
    zoom: [1],
    center: [13.404954, 52.520008],
  });

  // Docu: https://docs.mapbox.com/mapbox-gl-js/style-spec/expressions/
  // Example: https://docs.mapbox.com/mapbox-gl-js/example/visualize-population-density/
  const featureCircleStyles = {
    'circle-color': [
      'interpolate',
      ['linear'],
      ['*', ['get', 'mag'], 1000],
      1000,
      '#FFBA08',
      2000,
      '#F48C06',
      3000,
      '#E85D04',
      4000,
      '#DC2F02',
      5000,
      '#D00000',
      6000,
      '#9D0208',
      7000,
      '#6A040F',
      8000,
      '#370617',
    ],
    'circle-radius': [
      'interpolate',
      ['linear'],
      ['zoom'],
      1,
      ['*', ['ceil', ['get', 'mag']], 1.5],
      4,
      ['*', ['ceil', ['get', 'mag']], 3],
      8,
      8,
    ],
  };

  const openPopup = (feature, e) => {
    e.originalEvent.preventDefault();
    setPopup(feature);
  };

  const removePopup = (map, e) => {
    if (!e.originalEvent.defaultPrevented) {
      setPopup(false);
    }
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
        onClick={(map, e) => removePopup(map, e)}
      >
        <ZoomControl />
        <RotationControl />
        <Layer type="circle" paint={featureCircleStyles}>
          {features.map((feature) => {
            return (
              <Feature
                key={feature.id}
                coordinates={feature.geometry.coordinates}
                properties={feature.properties}
                onClick={(e) => openPopup(feature, e)}
              />
            );
          })}
        </Layer>
        {popup && (
          <Popup
            key={`popup${popup.id}`}
            coordinates={popup.geometry.coordinates}
          >
            <p>{popup.properties.place}</p>
            <p>Magnitude: {popup.properties.mag}</p>
            <p>
              <a
                href={popup.properties.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                More info
              </a>
            </p>
          </Popup>
        )}
      </Map>
    </div>
  );
};

export default MapContainer;
