import React, { useState } from "react";

function Form(props: any) {
  const [name, setName] = useState("");

  function handleChange(e: any) {
    setName(e.target.value);
  }

  function handleSubmit(e: any) {
    e.preventDefault();
    // props.addTask(name);
    fetch(`http://localhost:5000/gps`)
      .then((response) => response.json())
      .then((data) => console.log(data));
    setName("");
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2 className="label-wrapper">
          <label htmlFor="input" className="label__lg">
            Bicycle ID
          </label>
        </h2>
        <input
          type="text"
          id="input"
          className="input input__lg"
          name="text"
          autoComplete="off"
          value={name}
          onChange={handleChange}
        />
        <button type="submit" className="btn btn__primary btn__lg">
          Add
        </button>
      </form>
    </div>
  );
}

export default Form;
