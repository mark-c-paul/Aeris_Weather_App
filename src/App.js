import React, { Component } from "react";
import w_api from "./weatherAPI";
import Forecast from './Forecast'


class WeatherApp extends Component {
  constructor() {
    super();
    this.state = {
      data: null,
      weekly_forecast: null,
      clicked: false
    };
  }

  componentWillMount() {
    w_api
      .weather_data()
      .then(res => {
        this.setState({
          data: res.data.response,
          weekly_forecast: res.data.response[0].periods
        });
      })
      .catch(err => {
        console.log("Error Fetching Data: ", err);
      });
  }
  
  render() {
    const { data, weekly_forecast, clicked } = this.state;
    console.log("Data Collected", weekly_forecast, clicked);
    return (
    <div className="wrapper">
      <h1>Aeris Weather App</h1>
      <form>
      <fieldset>
         <div class="form-group">
           <label for="code">Postal/Zip Code: </label>
           <input name="location" 
                  size="6" 
                  placeholder="V1B3K4"
                  minlength="5"
                  maxlength="6"/>
         </div>
       </fieldset>
       <p>
       <button type="submit">Submit</button>
       </p>
      </form>
      <div className="weather_app">
      <div className='btn'>
        <button type='btn' onClick={() => this.setState({clicked: !clicked})}>{clicked ? "Celsius" : "Fahrenheit"}</button>
      </div>
      {weekly_forecast ? <Forecast values={weekly_forecast} scale={clicked} /> : ''} 
      </div>
      </div>
    );
  }
}

export default WeatherApp;

 
