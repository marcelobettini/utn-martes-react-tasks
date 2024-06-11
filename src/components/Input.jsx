import React from "react";

function Input({ onAddTask }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const input = form.elements.input;
    const description = input.value;
    onAddTask(description);
    form.reset();
  };
  return (
    <form action="" onSubmit={handleSubmit}>
      <input
        type="text"
        name="input"
        aria-label="Detalle de la tarea"
        placeholder="aprender React, comprar helado..."
        required
      />
      <input type="submit" value="Agregar tarea" />
    </form>
  );
}

export default Input;
