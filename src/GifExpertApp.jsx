import { useState } from "react";

import { AddCategory, GiftGrid } from "./components";
// import GiftGrid from "./components/GiftGrid";
// import ListCategories from "./components/ListCategories";

const GifExpertApp = () => {
  const [categories, setCategories] = useState(["One Punch"]);

  const addNewCategory = (category) => {
    if (categories.includes(category)) return;
    if (
      categories.find(
        (cat) =>
          cat.trim().toLocaleLowerCase() === category.trim().toLocaleLowerCase()
      )
    )
      return;
    setCategories((prev) => [...prev, category]);
  };

  return (
    <>
      <h1>GifExpertApp</h1>
      <AddCategory addNewCategory={(value) => addNewCategory(value)} />
      {/* <ListCategories categories={categories} /> */}
      {categories.map((cat, index) => (
        <GiftGrid key={`${cat}-${index}`} category={cat} />
      ))}
    </>
  );
};

export default GifExpertApp;
