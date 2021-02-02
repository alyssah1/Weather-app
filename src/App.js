import React, { Component } from "react";
import Weather from "./components/index";
import "./App.css";

const API_key="a33e92de84ca0ba505abc69b46f89446";


class App extends Component{
  constructor() {
    super();
    this.state = {
      city: undefined,
      country: undefined,
      icon: undefined,
      main: undefined,
      celsius: undefined,
      temp_max: undefined,
      temp_min: undefined,
      description: "",
      error: false,
    };
    this.getWeather();

    this.weatherIcon = {
      Clouds: "fa-cloud"
    }
  }

  calCelsius(temp){
    let celsius = Math.floor(temp - 273.15);
    return celsius;
  }

  getWeather = async() => {
    const API_call = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=${API_key}`);

    const response = await API_call.json();

    console.log(response);

    this.setState({
      city: response.name,
      country: response.sys.country,
      celsius: this.calCelsius(response.main.temp),
      temp_max: this.calCelsius(response.main.temp_max),
      temp_min: this.calCelsius(response.main.temp_min),
      description: response.weather[0].description,
      icon: this.weatherIcon.Clouds


    });
  };


  render() {
    return(
    <div className="App">
      <Weather 
      city={this.state.city} 
      country={this.state.country}
      temp_celsius={this.state.celsius}  
      temp_max={this.state.temp_max}
      temp_min={this.state.temp_min}
      description={this.state.description}
      weatherIcon= {this.state.icon}
      />
    </div>

    );
  }
}


export default App;
