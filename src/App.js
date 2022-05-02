import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Header from "./components/Header";
import Banner from "./components/Banner";
import SearchBar from "./components/SearchBar";
import WineLayout from "./components/WineLayout";

function App() {
  const [wines, setWines] = useState({});
  const [foods, setFoods] = useState({ pairings: [], test: "" });
  const [wineRecco, setWineRecco] = useState({
    recommendedWines: [],
    totalFound: 0,
  });
  const [isLoading, setIsLoading] = useState(true);

  //Fetching wines to pair with food value
  useEffect(() => {
    setIsLoading(true);
    const fetchWines = async () => {
      const result = await axios(
        `https://api.spoonacular.com/food/wine/pairing?apiKey=e124b1c42e104ed6bc75d66367b6e78b&food=burger`
      );
      console.log(result.data);
      setWines(result.data);
      setIsLoading(false);
    };

    //Dummy Wines data ==> delete later
    let data = {
      pairedWines: ["merlot", "cabernet sauvignon", "pinot noir"],
      pairingText:
        "Merlot, Cabernet Sauvignon, and Pinot Noir are my top picks for Steak. After all, beef and red wine are a classic combination. Generally, leaner steaks go well with light or medium-bodied reds, such as pinot noir or merlot, while fattier steaks can handle a bold red, such as cabernet sauvingnon. The Sterling Vineyards Merlot with a 5 out of 5 star rating seems like a good match. It costs about 29 dollars per bottle.",
      productMatches: [
        {
          id: 428278,
          title: "Sterling Vineyards Merlot",
          averageRating: 1.0,
          description: null,
          imageUrl: "https://spoonacular.com/productImages/428278-312x231.jpg",
          link: "https://www.amazon.com/2014-Sterling-Vineyards-Valley-Merlot/dp/B071FP8NPG?tag=spoonacular-20",
          price: "$28.99",
          ratingCount: 1.0,
          score: 0.75,
        },
      ],
    };

    setWines(data);

    // fetchWines();
  }, []);

  //Fetching foods to pair with wine value
  useEffect(() => {
    setIsLoading(true);
    const fetchFoods = async () => {
      const result = await axios(
        `https://api.spoonacular.com/food/wine/dishes?apiKey=e124b1c42e104ed6bc75d66367b6e78b&wine=malbec`
      );
      console.log(result.data);
      setFoods(result.data);
    };

    // fetchFoods();
  }, []);

  //Fetching wine reccomendations to display image of wine
  useEffect(() => {
    setIsLoading(true);
    const fetchWineRecco = async () => {
      const result = await axios(
        `https://api.spoonacular.com/food/wine/recommendation?apiKey=e124b1c42e104ed6bc75d66367b6e78b&wine=merlot&number=1`
      );
      console.log(result.data);
      setWineRecco(result.data);
      setIsLoading(false);
    };

    // fetchWineRecco();
  }, [foods.pairings]);

  //Fetching food data to display image and for recipes
  useEffect(() => {
    let urls = [];
    if (foods.pairings.length) {
      foods.pairings.forEach((foodItem) => {
        urls.push(
          "https://api.spoonacular.com/recipes/complexSearch?apiKey=e124b1c42e104ed6bc75d66367b6e78b&number=1&query=" +
            foodItem.split(" ").join("+")
        );
      });

      // getRecipes();
    }
    const getRecipes = async () => {
      let recipes = await Promise.all(
        urls.map(async (url) => {
          let response = await axios(url);
          return response.data;
        })
      );
    };

    setIsLoading(false);
  }, [foods.pairings]);

  // const printFiles = async () => {
  //   let names = ["Breaking Bad", "Better Call Saul"];
  //   let queryArray = [];
  //   if (names.length) {
  //     names.forEach((name) => {
  //       queryArray.push(
  //         "https://www.breakingbadapi.com/api/characters?category=" +
  //           name.split(" ").join("+")
  //       );
  //     });
  //   }
  //   console.log(queryArray);

  //   const texts = await Promise.all(
  //     queryArray.map(async (url) => {
  //       const resp = await axios(url);
  //       return resp.data;
  //     })
  //   );
  //   console.log(texts);
  // };

  // printFiles();

  return (
    <div>
      <Header />
      <Banner />
      <SearchBar />
      <WineLayout isLoading={isLoading} wines={wines} />
    </div>
  );
}

export default App;
