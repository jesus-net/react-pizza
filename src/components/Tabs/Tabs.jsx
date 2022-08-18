import React, { useState } from "react";

import { Button } from "../UI/Button/Button";
import "./Tabs.scss";

export const Tabs = ({ sortCategory, sortDropdown }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <div className="tabs">
      <ul className="tabs__menu">
        {sortCategory.map((item, index) => {
          return (
            <li key={index}>
              <Button value={item} active={index === activeIndex} onClick={() => setActiveIndex(index)}/>
            </li>
          );
        })}
      </ul>
      <Button type="dropdown" selects={sortDropdown} />
    </div>
  );
};
