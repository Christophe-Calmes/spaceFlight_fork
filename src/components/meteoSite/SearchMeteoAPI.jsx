import DisplayMeteoSites from '../../pages/MeteoSites/DisplayMeteoSites';
import { useEffect, useState } from 'react';
import CallAPI from "../callAPI/CallAPIfunction.jsx";

const SearchMeteoAPI = () => {
  const dataLatLon = [
    { lat: '28.27', lon: '80.31'},
    { lat: '5.09', lon: '52.39' },
    { lat: '45.37', lon: '63.18' },
    { lat: '40.96', lon: '100.17' },
  ];
  const APIRequests = [];
  for(const item of dataLatLon) {
    APIRequests.push(`http://www.7timer.info/bin/api.pl?lon=${item.lon}&lat=${item.lat}-&product=civillight&output=json`);
  }
//console.log(APIRequests);
  const [MeteoPlaces, setMeteoPlaces] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const MeteoResult = [];
      for (const request of APIRequests) {
        const result = await CallAPI(request);
        MeteoResult.push(result?.dataseries[0]);
      }
      setMeteoPlaces(MeteoResult);
    };
  
    fetchData();
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
