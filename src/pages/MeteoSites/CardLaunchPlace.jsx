import './CardLaunchPlace.scss';
const cardLaunchPlace = ({dataWeather, index}) => {
  const pictureBank = [
    {nameSpaceCenter: 'Cap Canaveral', illustration: 'capCanaveral.jpg' },
    {nameSpaceCenter: 'Kourou', illustration: 'Kourou.jpg' },
    {nameSpaceCenter: 'Baïkonour', illustration: 'baikonourSpaceCenter.jpg' },
    {nameSpaceCenter: 'Juiquan', illustration: 'jiuquan.jpg' },
  ];
  let launchOk = false;
if(dataWeather?.wind10m_max <= 4) {
  launchOk = true;
}


  return (
    <div className="item">
          <ul>
            <li><h2>{pictureBank[index].nameSpaceCenter}</h2>{launchOk ? (<h3>Launch Pad ready for takeoff</h3>):(<h3>Launch Pad not ready for takeoff</h3>)}</li>
            <img className="LaunchPadPicture" src={`./src/assets/PicturesBank/${pictureBank[index].illustration}`} alt={pictureBank[index].nameSpaceCenter}/>
            <li>Weather : {dataWeather?.weather}</li>
            <li>Temperature maximum : {dataWeather?.temp2m?.max} °C</li>
            <li>Temperature minimum : {dataWeather?.temp2m?.min} °C</li>
            <li>Wind max at 10 m : {dataWeather?.wind10m_max} m/s | {dataWeather?.wind10m_max * 3.6} km/h </li>
          </ul>
    </div>
  )
}
export default cardLaunchPlace;
