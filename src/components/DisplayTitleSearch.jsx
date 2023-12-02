import PropTypes from 'prop-types';
import './DisplayTitleSearch.scss';
import NextArticles from './NextArticles';

export const DisplayTitleSearch = ({ resultSearch, setAPIRequest }) => {
    let articles = null;
    let nextArticles = null;
    if (resultSearch?.results.length > 0) {
        articles = resultSearch.results;
        nextArticles = resultSearch.next;
    }

    if (resultSearch?.results.length > 0) {
        return (
        <div className="backGround">
            <ul className="flexList">
                {articles.map((element) => { 
                return (
                    <li className="articleBox" key={element.id}>
                        <h2 className="articleTitle">{element.title}</h2>
                        <h4 className="articleSource">{element.news_site}</h4>
                        <img className="articlePicture" src={element.image_url} alt={element.title}/>
                        {
                            element.summary != '' ? (<p className="articleDescription">{element.summary}</p>) : 
                            (<p className="articleDescription">No article</p>)
                        }
                    </li>
                    )}   
                )};  
                <li><NextArticles nextArticles={nextArticles} setAPIRequest={setAPIRequest} /></li>
            </ul>
        </div>
        );
    } else {
        return (
            <div>
                <p>No search results</p>
            </div>
        );
    }
};

DisplayTitleSearch.propTypes = {
    resultSearch: PropTypes.object,
    setAPIRequest: PropTypes.func,
};

export default DisplayTitleSearch;
