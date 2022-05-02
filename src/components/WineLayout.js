import React from "react";

const WineLayout = ({ wines, isLoading }) => {
  const { pairedWines, pairingText, productMatches } = wines;
  return isLoading ? (
    <h1>Loading...</h1>
  ) : (
    <div className="container">
      <div className="card-deck">
        {pairedWines.map((wine, index) => (
          <div key={index} className="card">
            <img
              className="card-img-top"
              src={productMatches[0].imageUrl}
              alt="Card image cap"
            />
            <div className="card text-white bg-dark">
              <div className="card-body">
                <h5 className="card-title">{wine}</h5>
                <p className="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div style={{ height: 300 }}></div>
    </div>
  );
};

export default WineLayout;
