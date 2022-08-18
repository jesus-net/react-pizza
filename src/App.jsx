import { useState, useEffect } from "react";
import { Header } from "./components/Header/Header";
import { Tabs } from "./components/Tabs/Tabs";
import { Card } from "./components/UI/Card/Card";

import "./App.scss";
import "normalize.css";

const App = () => {
  const [cardData, setCardData] = useState([]);
  const sortCategory = [
    "Все",
    "Мясные",
    "Вегетарианская",
    "Гриль",
    "Острые",
    "Закрытые",
  ];
  const sortDropdown = ["популярности", "по цене", "по алфавиту"];

  useEffect(() => {
    const fetchData = async () => {
      await fetch("https://62fcc0b36e617f88de9d5ef3.mockapi.io/items")
        .then((res) => res.json())
        .then((json) => setCardData(json));
    };
    fetchData();
  }, []);
  
  return (
    <div className="wrapper">
      <div className="container">
        <Header />
        <main className="home">
          <div className="home__container">
            <Tabs sortCategory={sortCategory} sortDropdown={sortDropdown} />
            <h1 className="title">Все пиццы</h1>
            <div className="home__content">
              {cardData.map((item) => (
                <Card {...item} key={item.id} />
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default App;
