import React, { Component } from "react";
import w_api from "./weatherAPI";
import Forecast from './Forecast'

//replace strings with proper credentials
let CLIENT_SECRET="REMOVED";
let CLIENT_ID="REMOVED";

class WeatherApp extends Component {
  constructor() {
    super();
    this.state = {
      data: null,
      weekly_forecast: null,
      clicked: false,
      location: 'V1B3K4',
      format: 'json',
      filter: 'days',
      limit: '7'
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
  
  handleChangelocation = (e) => {
    this.setState({
      location: e.target.value,
    });
  };
  handleChangeFormat = (e) => {
    this.setState({
      format: e.target.value
    });
  };
  handleChangeFilter = (e) => {
    this.setState({
      filter: e.target.value
    });
  };
  handleChangeLimit = (e) => {
    this.setState({
      limit: e.target.value
    });
  };
  
  render() {
    const { data, weekly_forecast, clicked, location, format, filter, limit} = this.state;
    console.log("Data Collected", weekly_forecast, clicked);
    return (
    <div className="wrapper">
      <h1>Aeris Weather App</h1>
      <form>
      <fieldset>
         <div class="form-group">
           <label for="Location">Location: </label>
           <input id="inputLocation"
                  type="text"           
                  size="30" 
                  placeholder="V1B3K4"
                  onChange={event => this.handleChangelocation(event)}
                  value={this.state.location}
                  />
           <label for="Format">  Format: </label>
           <input id="inputFormat"
                  type="text"
                  size="6" 
                  placeholder="json"
                  onChange={event => this.handleChangeFormat(event)}
                  value={this.state.format}
                  />
           <label for="Filter">  Filter: </label>
           <input id="inputFilter"
                  type="text"
                  size="6" 
                  placeholder="days"
                  onChange={event => this.handleChangeFilter(event)}
                  value={this.state.filter}
                  />
           <label for="Limit">  Limit: </label>
           <input id="inputLimit"
                  type="text"
                  size="6" 
                  placeholder="7"
                  onChange={event => this.handleChangeLimit(event)}
                  value={this.state.limit}
                  />
         </div>
       </fieldset>
       <h3 for="Query"> 
       Query: <a href = {'https://dbef4efb-43cb-4325-92c6-cbcf9278359b.mock.pstmn.io/forecasts/'
       + this.state.location + '?&format=' + this.state.format + '&filter=' + this.state.filter + '&limit=' + this.state.limit +
       '&client_id=' + CLIENT_ID + '&client_secret=' + CLIENT_SECRET
       }>https://api.aerisapi.com/forecasts/${this.state.location}?&format=${this.state.format}&filter=${this.state.filter}&limit=${this.state.limit}</a>
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


 
