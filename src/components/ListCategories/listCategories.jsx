import "./listCategories.css";

const ListCategories = ({ categories }) => {
  return (
    <>
      <ol>
        {categories.map((cat, index) => (
          <li key={`${cat}-${index}`}> {cat}</li>
        ))}
      </ol>
    </>
  );
};

export default ListCategories;
