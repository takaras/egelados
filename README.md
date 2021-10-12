# Egelados

This project is a web app that visualizes earthquakes data received from [earthquake.usgs.gov](https://earthquake.usgs.gov/).\
The data are visible on a map provided by [Mapbox](https://www.mapbox.com/) and the color of the marker (circle) depends on the magnitude of the earthquake.\
The user can choose between 4 time intervals (last hour, last day, last week and last month).\
Some information about the selected time interval are displayed at the top of the map.

## Technologies

This project was developed with:
- React -  [Create React App](https://github.com/facebook/create-react-app)
- [Mapbox](https://www.mapbox.com/) and [react-mapbox-gl](https://www.npmjs.com/package/react-mapbox-gl)
- Data from https://earthquake.usgs.gov/earthquakes/feed/v1.0/geojson.php
- [yarn](https://yarnpkg.com/) package manager

## Development

Use `yarn start` to run the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

You have to create a valid API token for Mapbox, in order to see the map.\
Use your API token in `components/map-container/map-container-js` during the initialization of the map:
```js
const Map = ReactMapboxGl({
  ...
  accessToken: 'YOUR_MAPBOX_API_TOKEN',
});
```

## Deployment
Use `yarn build` to create a production build for the web app.\
[craco](https://www.npmjs.com/package/@craco/craco) is used for a successful build.\
You can find more about this [here](https://github.com/alex3165/react-mapbox-gl/issues/931).\
Use `yarn deploy` to deploy the web app on github pages.

## Roadmap
- Allow users to filter earthquakes according to magnitude
- Allow users to subscribe to receive notifications if an earthquake (greater than a minimum magnitude) happens close to them.\
The radius could be configured from the users.
- Add a memo to explain the colors used for the visualization of the earthquakes
- Add a live ticker with the latest earthquakes (also magnitude filter)
- Add useful information (e.g. what to do before, during and after an earthquake) to increase search rankings
- Implement a dark theme
- Cache datasets to reduce data requests and data usage (especially for mobile users)
- Progressive Web App
