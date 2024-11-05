import React from "react";

const Card = ({ data }) => {
    //   console.log(data);

  return (
    <div className="cardContainer">
      {Array.isArray(data) && data.length > 0 ? (
              data.map((curItem, index) => {
                  if (!curItem.urlToImage)
                  {
                      return null;
                  }
                  else {
                      return (
                        <div className="card" key={index}>
                          <img src={curItem.urlToImage} alt="no image" />
                          <div className="content">
                            <a
                              className="title"
                              onClick={() => window.open(curItem.url)}
                            >
                              {curItem.title}
                            </a>
                            <p>{curItem.description}</p>
                            <button onClick={() => window.open(curItem.url)}>
                              Read More
                            </button>
                          </div>
                        </div>
                      );
                  }
          
        })
      ) : (
        <p>No data available</p>
      )}
    </div>
  );
};

export default Card;
