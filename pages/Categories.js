import React from "react";

const Categories = ({ categories, selectedCategory, onCategoryChange }) => {
  return (
    <div className="categories-row">
      {categories.map((category) => (
        <div
          key={category}
          className={`category-item ${selectedCategory === category ? "selected" : ""}`}
          onClick={() => onCategoryChange(category)}
        >
          {category}
        </div>
      ))}
    </div>
  );
};

export default Categories;
