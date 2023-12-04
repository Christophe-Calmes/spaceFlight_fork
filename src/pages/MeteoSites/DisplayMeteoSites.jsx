import PropTypes from 'prop-types';
import './CardLaunchPlace.scss';
import CardLaunchPlace from './CardLaunchPlace';

const DisplayMeteoSites = ({MeteoPlaces}) => {
  return (
    <div className='backGround gallery'>
        
        {
          MeteoPlaces.map((element, index)=>(
          <div  key={element + index}>
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