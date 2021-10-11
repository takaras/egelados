import { useEffect, useState } from 'react';

import Layout from './components/layout/layout';
import MapContainer from './components/map-container/map-container';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const [features, setFeatures] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    const url = `https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_hour.geojson`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setIsLoading(false);
        if (data.metadata.status !== 200) {
          setError(true);
          return;
        }

        setFeatures(data.features);
      })
      .catch((e) => {
        setError(true);
        setIsLoading(false);
      });
  }, []);

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

  return (
    <Layout>
      <div className="container">
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <>
            <MapContainer features={features} />
          </>
        )}
      </div>
    </Layout>
  );
};

export default App;
