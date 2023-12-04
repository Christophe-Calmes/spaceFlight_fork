import PropTypes from 'prop-types';
import './SearchOnAPI.scss';

const NextArticles = ({ nextArticles, setAPIRequest}) => {
    console.log(nextArticles);
    console.log(setAPIRequest);
  return (
    <div>
        <button className="buttonSearh" onClick={()=>setAPIRequest(nextArticles)} href="#top">Next articles</button>
    </div>
  )
}
NextArticles.propTypes = {
    nextArticles: PropTypes.string,
    setAPIRequest: PropTypes.func,
    setStartSearch: PropTypes.func
}
export default NextArticles;