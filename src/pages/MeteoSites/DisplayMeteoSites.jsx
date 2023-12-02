import PropTypes from 'prop-types';
import './CardLaunchPlace.scss';
import CardLaunchPlace from './CardLaunchPlace';
const DisplayMeteoSites = ({MeteoPlaces}) => {
  //console.log(MeteoPlaces)



  return (
    <div className='backGround'>
        
        {
          MeteoPlaces.map((element, index)=>(
          <div className="gallery " key={element + index}>
            <CardLaunchPlace dataWeather={element} index={index}/>
          </div>
          )
          )
        }
        
    </div>
  )

  
}
DisplayMeteoSites.propTypes = {
  MeteoPlaces: PropTypes.array,
};
export default DisplayMeteoSites;