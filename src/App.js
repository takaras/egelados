import { useEffect, useState } from 'react';

import Layout from './components/layout/layout';
import MapContainer from './components/map-container/map-container';
import MapControls from './components/map-controls/map-controls';
import MapLoader from './components/map-loader/map-loader';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const [timespan, setTimespan] = useState('all_hour');
  const [countEarthquakes, setCountEarthquakes] = useState(0);
  const [features, setFeatures] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    const url = `https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/${timespan}.geojson`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setIsLoading(false);
        if (data.metadata.status !== 200) {
          setError(true);
          return;
        }

        setFeatures(data.features);
        setCountEarthquakes(data.metadata.count);
      })
      .catch((e) => {
        setError(true);
        setIsLoading(false);
      });
  }, [timespan]);

  if (error) {
    return (
      <Layout>
        <p>The data are currently not available.</p>
        <p>
          Please <a href="/">try again</a>.
        </p>
      </Layout>
    );
  }

  let timespanText;
  switch (timespan) {
    case 'all_day':
      timespanText = '24 hours';
      break;
    case 'all_week':
      timespanText = '7 days';
      break;
    case 'all_month':
      timespanText = '30 days';
      break;
    default:
      timespanText = 'hour';
      break;
  }

  return (
    <Layout>
      <div className="container">
        {isLoading ? (
          <MapLoader />
        ) : (
          <>
            <p style={{ marginBottom: '0.8rem' }}>
              {countEarthquakes > 0 ? countEarthquakes : 'No'} earthquakes in
              the past {timespanText}
            </p>
            <MapContainer features={features} />
          </>
        )}
        <MapControls active={timespan} changeTimespan={setTimespan} />
      </div>
    </Layout>
  );
};

export default App;
