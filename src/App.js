import React, { Component } from "react";
import Weather from "./components/index";
import "./App.css";
import Form from "./components/form";

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

    this.weatherIcon = {
      Thunderstorm: "fa-bolt",
      Rain: "fa-cloud-showers-heavy",
      Snow: "fa-snowflake",
      Clear: "fa-cloud-sun",
      Clouds: "fa-cloud",
    }
  }

  calCelsius(temp){
    let celsius = Math.floor(temp - 273.15);
    return celsius;
  }

  get_WeatherIcon(icons, rangeID){
    // eslint-disable-next-line default-case
    switch(true){
      case rangeID >= 200 && rangeID <= 232:
        this.setState({icon: this.weatherIcon.Thunderstorm});
        break;
      // eslint-disable-next-line no-duplicate-case
      case rangeID >= 500 && rangeID <= 531:
      this.setState({icon: this.weatherIcon.Rain});
      break;
      // eslint-disable-next-line no-duplicate-case
      case rangeID >= 600 && rangeID <= 622:
      this.setState({icon: this.weatherIcon.Snow});
      break;
      // eslint-disable-next-line no-duplicate-case
      case rangeID === 800:
      this.setState({icon: this.weatherIcon.Clear});
      break;
      // eslint-disable-next-line no-duplicate-case
      case rangeID >= 801 && rangeID <= 804:
      this.setState({icon: this.weatherIcon.Clouds});
      break;
      default: 
      this.setState({icon: this.weatherIcon.Clouds});
    }
  }

  getWeather = async(e) => {

    e.preventDefault();

    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;

  if(city && country){
    const API_call = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_key}`);

    const response = await API_call.json();

    console.log(response);

    this.setState({
      city: `${response.name}, ${response.sys.country}`,
      celsius: this.calCelsius(response.main.temp),
      temp_max: this.calCelsius(response.main.temp_max),
      temp_min: this.calCelsius(response.main.temp_min),
      description: response.weather[0].description,
    });

    this.get_WeatherIcon(this.weatherIcon, response.weather[0].id);
    }else{
      this.setState({error: true});
    }
  };


  render() {
    return(
    <div className="App">
      <Form loadweather={this.getWeather} error={this.state.error} />
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
