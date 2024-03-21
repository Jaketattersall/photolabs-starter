import React from 'react';
import PhotoList from "./components/PhotoList";
import "./App.scss";
import HomeRoute from "routes/HomeRoute";

const App = () => {
    

  return (
    <div className="App">
        <HomeRoute />
    </div>
  );
};

export default App;
