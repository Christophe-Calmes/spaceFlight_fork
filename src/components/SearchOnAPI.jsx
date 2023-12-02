import './SearchOnAPI.scss';
import { useState, useEffect } from 'react'
import DisplayTitleSearch from './DisplayTitleSearch';

const debug = false;
const SearchOnAPI = () => {
  const [APIRequest, setAPIRequest] = useState('https://api.spaceflightnewsapi.net/v4/articles/?limit=2&offset=0&title_contains=')
  const [searchValue, setSearchValue] = useState('')
  const [startSearch, setStartSearch] = useState(false)
  const [resultSearch, setResultSearch] =  useState({
                                                      "count": 0,
                                                      "next": null,
                                                      "previous": null,
                                                      "results": []
                                                    });
  // Test 
  useEffect(()=> setStartSearch(true),[APIRequest]);
  useEffect(()=>{
    const fetchResultSearch = async() => {
        const response = await fetch(APIRequest + searchValue);
        if(response.status === 200) {
            const data = await response.json();
            setResultSearch(data);
        } else {
            return "Error fetch Get API";
        }
    }
    if(startSearch) {
     
      fetchResultSearch({
                        "count": 0,
                        "next": null,
                        "previous": null,
                        "results": []
                        });
      setStartSearch(false);
      setSearchValue('')
    }
}, [startSearch]);

if(debug) {
  console.log(searchValue);
  console.log(resultSearch);
  console.log(startSearch);
}

  return (
    <div>
      <section className="formFlex">
        <label htmlFor="searchInput" className="displayNone">Search a article</label>
       <input 
        id="searchInput" 
        type="text"
        placeholder="your search"
        value={searchValue}
        onChange={(event)=>setSearchValue(event.target.value)}  
      />
       <button type="submit" className="buttonSearh" onClick={()=>setStartSearch(true)}>Search</button>
       </section>
       <section className="formFlex">
        <DisplayTitleSearch resultSearch={resultSearch} setAPIRequest={setAPIRequest} />
       </section>
 
    </div>

  )
}
export default SearchOnAPI;
