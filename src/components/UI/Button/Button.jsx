import React, { useState } from "react";
import cart from "../../../assets/img/icon-cart.svg";
import vector from "../../../assets/img/icon-vector.svg";
import plus from "../../../assets/img/icon-plus.svg";
import "./Button.scss";
export const Button = ({
  value,
  type,
  price,
  count,
  active,
  onClick,
  selects,
}) => {
  let button = null;
  const [isActiveMenu, setActiveMenu] = useState(0);
  const [titleDropdown, setTitleDropdown] = useState(
    selects ? selects[0] : undefined
  );
  switch (type) {
    case "cart":
      button = (
        <button type="submit" className="button cart" onClick={onClick}>
          <span>{`${price} ₽`}</span>
          <span>
            <img src={cart} alt="Cart" />
            {count}
          </span>
        </button>
      );
      break;
    case "add":
      button = (
        <button
          className={count ? "button add add--active" : "button add"}
          onClick={onClick}
        >
          <img src={plus} alt="Plus" />
          Добавить
          {count ? <div>{count}</div> : undefined}
        </button>
      );
      break;
    case "dropdown":
      button = (
        <button
          className={
            isActiveMenu
              ? "button dropdown dropdown--active"
              : "button dropdown"
          }
          onClick={() => setActiveMenu(!isActiveMenu)}
        >
          <img src={vector} alt="Arrow" />
          <span>Сортировка по:</span>
          <span className="button dropdown__title">{titleDropdown}</span>
          <ul className="button dropdown__menu">
            {selects.map((item, index) => (
              <li
                key={index}
                onClick={() => setTitleDropdown(item)}
                className={
                  item === titleDropdown
                    ? "button dropdown__item--active"
                    : undefined
                }
              >
                {item}
              </li>
            ))}
          </ul>
        </button>
      );
      break;
    default:
      button = (
        <button
          type="submit"
          className={active ? "button sort sort--active" : "button sort"}
          onClick={onClick}
        >
          {value || "Button"}
        </button>
      );
  }
  return button;
};
