import styles from './map-controls.module.css';

const MapControls = ({ active, changeTimespan }) => {
  return (
    <div className="mapControls">
      <button
        type="button"
        className={`${styles.button} btn ${
          active === 'all_hour' ? styles.active : ''
        }`}
        onClick={() => changeTimespan('all_hour')}
      >
        past hour
      </button>
      <button
        type="button"
        className={`${styles.button} btn ${
          active === 'all_day' ? styles.active : ''
        }`}
        onClick={() => changeTimespan('all_day')}
      >
        past day
      </button>
      <button
        type="button"
        className={`${styles.button} btn ${
          active === 'all_week' ? styles.active : ''
        }`}
        onClick={() => changeTimespan('all_week')}
      >
        past week
      </button>
      <button
        type="button"
        className={`${styles.button} btn ${
          active === 'all_month' ? styles.active : ''
        }`}
        onClick={() => changeTimespan('all_month')}
      >
        past month
      </button>
    </div>
  );
};

export default MapControls;
