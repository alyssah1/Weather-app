import React from "react";
import Weather from "./components/index";
import "./App.css";

const API_key="a33e92de84ca0ba505abc69b46f89446";


class App extends React.Component{
  state={}
  render() {
    return(
    <div className="App">
      <Weather/>
    </div>

    );
  }
}


export default App;
