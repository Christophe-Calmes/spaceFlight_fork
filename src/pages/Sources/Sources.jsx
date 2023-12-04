import React, { useEffect, useState } from 'react'
import CardsPost from '../../components/CardsPost';
import "./Sources.scss"

const Sources = () => {
  const [trigger, setTrigger] = useState(false);

  const [posts, setPosts] = useState([]);
  const [sourceSelected, setSourceSelected] = useState("");

  const [optionSource, setOptionSource] = useState([
    {
      id: 1,
      name: "SpaceNews",
    },
    {
      id: 2,
      name: "European Spaceflight",
    },
    {
      id: 3,
      name: "NASASpaceflight",
    },
  ]);

  useEffect(() => {
    async function fetchSpace() {
      //  const response = await fetch("https://api.spaceflightnewsapi.net/v4/articles");
      const response = await fetch(
        "https://api.spaceflightnewsapi.net/v4/articles/?limit=20"
      );
      const spaceArticles = await response.json();
      console.log(spaceArticles?.results);

      setPosts(spaceArticles?.results);
    }

    fetchSpace();
  }, []);

  return (
    <div className='sources_container'>
      <form>
        <label>
          Filter by{" "}
          <select
            onChange={(e) => {
              setSourceSelected(e.target.value);
              setTrigger(true);
            }}
          >
            <option value="">---</option>
            {optionSource.map((source) => {
              return (
                <option key={source.id} value={source.name}>
                  {source.name}
                </option>
              );
            })}
          </select>
        </label>
      </form>
      <div className='cardlist_container'>
          {
            trigger ? (
              posts?.filter((each)=>{
                return sourceSelected ? each?.news_site === sourceSelected : true
              })
              .map((each)=>{
                return (
                      <CardsPost key={each?.id} each={each}/>
                )
              })
            ) : (
              <>
              </>
            )
          }
      </div>
    </div>
  );
};

export default Sources;
