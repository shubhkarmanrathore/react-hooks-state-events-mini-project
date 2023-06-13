import React, { useState } from "react";

function NewForm({ onTaskFormSubmit, categories }) {
  const [newItemFields, setNewItemFields] = useState({
    text: "",
    category: "Code",
  });

  function FieldHandler(e) {
    const { name, value } = e.target;
    setNewItemFields({ ...newItemFields, [name]: value });
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onTaskFormSubmit(newItemFields);
      }}
      className="new-task-form"
    >
      <label>
        Details
        <input value={newItemFields.text} onChange={FieldHandler} type="text" name="text" />
      </label>

      <label>
        Category
        <select value={newItemFields.category} onChange={FieldHandler} name="category">
          {categories.map((category, index) => (
            <option key={index}>{category}</option>
          ))}
        </select>
      </label>

      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewForm;