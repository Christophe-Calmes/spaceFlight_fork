import DisplayMeteoSites from '../../pages/MeteoSites/DisplayMeteoSites';
import { useEffect, useState } from 'react';

const SearchMeteoAPI = () => {
  const dataLatLon = [
    { lat: '28.27', lon: '80.31' },
    { lat: '5.09', lon: '52.39' },
    { lat: '45.37', lon: '63.18' },
    { lat: '40.96', lon: '100.17' },
  ];

  const [MeteoPlaces, setMeteoPlaces] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchMeteoData = async () => {
      try {
        const promises = dataLatLon.map((item) =>
          fetch(
            `http://www.7timer.info/bin/api.pl?lon=${item.lon}&lat=${item.lat}&product=civillight&output=json`
          ).then(response => {
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
            return response.json();
          })
        );

        const meteoData = await Promise.all(promises);
        setMeteoPlaces(meteoData.map(data => data.dataseries[0]));
      } catch (error) {
        console.error('Error fetching API data:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMeteoData();
  }, []);

  return (
    <div>
      {isLoading ? (
        <h1>***Loading data***</h1>
      ) : (
        <DisplayMeteoSites MeteoPlaces={MeteoPlaces} />
      )}
    </div>
  );
};

export default SearchMeteoAPI;