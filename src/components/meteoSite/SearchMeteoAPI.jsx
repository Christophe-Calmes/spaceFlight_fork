import DisplayMeteoSites from '../../pages/MeteoSites/DisplayMeteoSites';
import { useEffect, useState } from 'react';

const SearchMeteoAPI = () => {
  const dataLatLon = [
    { lat: '28.27', lon: '80.31'},
    { lat: '5.09', lon: '52.39' },
    { lat: '45.37', lon: '63.18' },
    { lat: '40.96', lon: '100.17' },
  ];

  const [MeteoPlaces, setMeteoPlaces] = useState([]);

  useEffect(() => {
    const fetchMeteoData = async () => {
      const promises = [];

      for (const item of dataLatLon) {
        const response = fetch(
          `http://www.7timer.info/bin/api.pl?lon=${item.lon}&lat=${item.lat}-&product=civillight&output=json`
        );
        promises.push(response);
      }

      const responses = await Promise.all(promises);

      const meteoData = [];
      for (const response of responses) {
        if (response.status === 200) {
          const jsonData = await response.json();
          meteoData.push(jsonData.dataseries[0]);
        } else {
          console.error('Error fetching API data');
        }
      }

      setMeteoPlaces(meteoData);
    };

    fetchMeteoData();
  }, []);

  if (MeteoPlaces.length === dataLatLon.length) {
    return (
      <div>
        <h1><DisplayMeteoSites MeteoPlaces={MeteoPlaces} /></h1>
      </div>
    );
  } else {
    return (
      <div>
        <h1 className="loading">***Loading data***</h1>
      </div>
    );
  }
};

export default SearchMeteoAPI;
