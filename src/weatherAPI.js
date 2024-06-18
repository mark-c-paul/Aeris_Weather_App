import React, { Component } from "react";
import axios from "axios"
import WeatherApp from './App.js'

var zip = 'V1B3K4';
var path = 'https://api.aerisapi.com/forecasts/';
//Replace String with aeris credentials
var clientID = '&' + 'REMOVED';
var clientSecret = '&' + 'REMOVED';
var format = '?&format=json';
var filter = '&filter=day';
var limit = '&limit=7';
var query = path + zip + format + filter + limit + clientID + clientSecret;
const getWeatherData = () => axios
    .get(query)


export default {
    weather_data: getWeatherData
}