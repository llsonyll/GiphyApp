import { useState } from "react";
import "./addCategory.css";

const AddCategory = ({ addNewCategory }) => {
  const [input, setInput] = useState("");

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // if (input === "") return;
    if (input.trim().length <= 1) return;
    addNewCategory(input);
    setInput("");
  };

  return (
    <div className="addCategory">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={input}
          onChange={handleInputChange}
          placeholder="Buscar gifs"
        />
      </form>
    </div>
  );
};

export default AddCategory;
