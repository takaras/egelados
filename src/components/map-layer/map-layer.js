import { useState } from 'react';
import { Feature, Layer, Popup } from 'react-mapbox-gl';

import styles from './map-layer.module.css';

const MapLayer = ({ features }) => {
  const [popup, setPopup] = useState(false);

  const openPopup = (feature, e) => {
    e.originalEvent.preventDefault();
    setPopup(feature);
  };

  const removePopup = (e) => {
    if (!e?.originalEvent?.defaultPrevented) {
      setPopup(false);
    }
  };

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

  return (
    <>
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
          className={styles.popup}
        >
          <div>{popup.properties.place}</div>
          <div>Magnitude: {popup.properties.mag}</div>
          <div>
            <a
              href={popup.properties.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              More info
            </a>
          </div>
          <button
            type="button"
            className={`${styles.popupClose} no-btn`}
            onClick={(e) => removePopup(e)}
          >
            <span className="visually-hidden">Close popup</span>
          </button>
        </Popup>
      )}
    </>
  );
};

export default MapLayer;
