import React, { Component } from "react";
import "./App.css";

export default class Forecast extends Component {
  render() {
    const { values, scale } = this.props;

    console.log("In forecast component", values);
    return values.map(weather => {
      let date = weather.dateTimeISO
        .split("")
        .slice(0, 10)
        .join("");
      return (
        <div className="forecast_container">
          <span className="dataTimeISO">{date}</span>
          <div className="forecast_img_container">
            <img
              src={require(`./icons/${weather.icon}`)}
              className="forecast_img"
            />
          </div>
          <div className="temp_data">
            High: {scale ? `${weather.maxTempF}° F` : `${weather.maxTempC}° C`}
            <br />
            Low: {scale ? `${weather.minTempF}° F` : `${weather.minTempC}° C`}
          </div>
        </div>
      );
    });
  }
}
