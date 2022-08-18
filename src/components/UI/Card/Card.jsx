import React, { useState } from "react";

import { Button } from "../Button/Button";
import "./Card.scss";

export const Card = ({title, imageUrl, price, sizes, types }) => {
  const typeNames = ["тонкое", "традиционное"];
  const [countProduct, setCountProduct] = useState(0);
  const [activeType, setActiveType] = useState(0);
  const [activeSize, setActiveSize] = useState(0);
  
  const addProduct = (e) => {
    e.preventDefault();
    let count = countProduct + 1;
    setCountProduct(count);
  };
  return (
    <div className="card">
      <img src={imageUrl} alt={`$pizza ${title}`} />
      <h2 className="sub-title">{title}</h2>
        <div className="card__selector">
          <ul className="card__toggles">
            {types.map((typeId) => (
              <li
                key={typeId}
                onClick={() => setActiveType(typeId)}
                className={
                  activeType === typeId
                    ? "card__toggle card__toggle--active"
                    : "card__toggle"
                }
              >
                {typeNames[typeId]}
              </li>
            ))}
          </ul>
          <ul className="card__toggles">
            {sizes.map((size, index) => (
              <li
                key={index}
                onClick={() => setActiveSize(index)}
                className={
                  activeSize === index
                    ? "card__toggle card__toggle--active"
                    : "card__toggle"
                }
              >
                {size} см.
              </li>
            ))}
          </ul>
        </div>
        <div className="card__block">
          <span className="card__price">{`от ${price} ₽`}</span>
          <Button
            type="add"
            onClick={(e) => addProduct(e)}
            count={countProduct}
          />
        </div>
    </div>
  );
};
