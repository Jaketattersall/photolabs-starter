import React from 'react';
import PhotoList from "./components/PhotoList";
import "./App.scss";
import HomeRoute from "routes/HomeRoute";
import useApplicationData from "hooks/useApplicationData";
const App = () => {
    

  return (
    <div className="App">
        <HomeRoute photos={state.photoData} topics={state.topicData} />
    </div>
  );
};

export default App;
