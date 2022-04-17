import React, { useState, useEffect } from "react";
import Todo from "./Todo";

// interface GpsData = {
//   date= string;
// id: 1;
// latitude: -122;
// longitude: 39;
// name: "Nates-RPi";
// }

function Form(props: any) {
  const [name, setName] = useState("");
  const [gps, setGps] = useState([]);

  function handleChange(e: any) {
    setName(e.target.value);
  }

  function fetchData() {
    fetch(`http://localhost:5000/gps`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setGps(data);
      });
  }

  function handleSubmit(e: any) {
    e.preventDefault();
    setName("");
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <h2>Nates-RPi GPS Coordinates</h2>
      <ul>
        <Todo
          name="Nates-RPi"
          date="2022-04-17T16:26:16.000Z"
          id="0"
          longitude="-122"
          latitude="39"
        />
        <Todo
          name="Nates-RPi"
          date="2022-04-17T16:26:16.000Z"
          id="1"
          longitude="-122"
          latitude="39"
        />
      </ul>
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
        <button type="submit" onClick={handleSubmit}>
          Search
        </button>
      </form>
    </div>
  );
}

export default Form;
