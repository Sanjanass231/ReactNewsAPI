// rafce ----  react arrow function component
import React, { useEffect, useState } from 'react'
import Card from './Card'

const Newsapp = () => {

    const API_KEY = "";
    const [search, setSearch] = useState("india")
    const [newsData, setNewsData] = useState(null);

    // use here promise function async, await
    const getData = async() => {
      try {
        // wait till the data come
        const response = await fetch(
          `https://newsapi.org/v2/everything?q=${search}&apiKey=${API_KEY}`
        );
        //  await in front of response.json(), which is necessary to wait for the JSON parsing to complete.
        const jsonData = await response.json();
          console.log(jsonData.articles);
          setNewsData(jsonData.articles);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
// useEffect hook run after every component render
    useEffect(() => {
        getData()
    },[]);

    const handleInput = (e) => {
        console.log(e.target.value);
        setSearch(e.target.value);
    }

    const userInput = (e) => {
        setSearch(e.target.value);
    }

  return (
    <div>
          <nav>
              <div>
                  <h1>
                      Trendy News
                  </h1>
              </div>
              <ul>
                  <a>All News</a>
                  <a>Trending</a>
              </ul>
              <div className='searchBar'>
                  <input type='text' value={search} placeholder='Search News' onChange={handleInput} />
                  <button onClick={getData}>Search</button>
              </div>
          </nav>
          <div>
              <p className='head'>Stay Update with TrendyNews</p>
          </div>
          <div className='categoryBtn'>
              <button onClick={userInput} value="sports">Sports</button>
              <button onClick={userInput} value="politics">Politics</button>
              <button onClick={userInput} value="entertainment">Entertainment</button>
              <button onClick={userInput} value="health">Health</button>
              <button onClick={userInput} value="fitness">Fitness</button>
          </div>
          <div>
              {newsData?<Card data = {newsData} />
 :null}
          </div>
    </div>
  )
}

export default Newsapp
