import React, { useState } from "react";

const Select = ({
  selectedCategory,
  items,
  changeCategoryHandler,
  ...props
}) => {
  let [selected, setSelected] = useState(selectedCategory);

  const handleSelect = e => {
    const arrow = document.querySelector(".select-arrow");
    const options = document.querySelector(".options");

    options.classList.toggle("closed");
    arrow.classList.toggle("select-arrow-up");
  };

  const handleOption = category => {
    setSelected(category.categoryName || "Tüm kategoriler");
    changeCategoryHandler(category);
  };

  return (
    <>
      <div onClick={handleSelect} className="selectbox">
        {selected}
        <span className="select-arrow"></span>
        <ul className="options closed">
          <li className="option" onClick={() => handleOption({})}>
            Tüm kategoriler
          </li>
          {items ? items.map(category => (
            <li
              key={category.categoryId}
              onClick={() => handleOption(category)}
              className="option"
            >
              {category.categoryName}
            </li>
          )) : ""}
        </ul>
      </div>
    </>
  );
};

export default Select;
