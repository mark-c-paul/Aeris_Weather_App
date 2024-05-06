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
  
  handleChange = (e) => {
    this.setState({
      code: e.target.code,
      format: e.target.format,
      filter: e.target.filter,
      limit: e.target.limit
    });
  };
  
  render() {
    const { data, weekly_forecast, clicked} = this.state;
    console.log("Data Collected", weekly_forecast, clicked);
    return (
    <div className="wrapper">
      <h1>Aeris Weather App</h1>
      <form>
      <fieldset>
         <div class="form-group">
           <label for="Code">Postal/Zip Code: </label>
           <input id="inputCode"
                  type="text"           
                  size="6" 
                  placeholder="V1B3K4"
                  minlength="5"
                  maxlength="6"
                  onChange={this.handleChange}
                  value={this.state.code}
                  />
           <label for="Format">  Format: </label>
           <input id="inputFormat"
                  type="text"
                  size="6" 
                  placeholder="json"
                  onChange={this.handleChange}
                  value={this.state.format}
                  />
           <label for="Filter">  Filter: </label>
           <input id="inputFilter"
                  type="text"
                  size="6" 
                  placeholder="days"
                  onChange={this.handleChange}
                  value={this.state.filter}
                  />
           <label for="Limit">  Limit: </label>
           <input id="inputLimit"
                  type="text"
                  size="6" 
                  placeholder="7"
                  onChange={this.handleChange}
                  value={this.state.limit}
                  />
         </div>
       </fieldset>
       <h3 for="Query"> 
       Query: <a href = {'https://api.aerisapi.com/forecasts/'
       + this.inputCode + '?&format=' + this.inputFormat + '&filter=' + this.inputFilter + '&limit=' + this.inputLimit +
       '&client_id=Cr0YRR2ZeUaVOkc1dzisr&client_secret=5KmCGBqh2wOaaDXRbUE2xa1SyqniaC6fCqUk1R1j'
       }>Link</a>
       </h3>
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

 
