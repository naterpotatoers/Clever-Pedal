import React from "react";
import Form from "./components/Form";

import Map from "./components/Map";

function App() {
  return (
    <div className="container flex-container">
      <Map />
      <Form />
    </div>
  );
}

export default React.memo(App);
