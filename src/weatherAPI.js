import React, { Component } from "react";
import axios from "axios"
import WeatherApp from './App.js'

var zip = 'V1B3K4';
var path = 'https://api.aerisapi.com/forecasts/';
var clientID = '&client_id=Cr0YRR2ZeUaVOkc1dzisr';
var clientSecret = '&client_secret=5KmCGBqh2wOaaDXRbUE2xa1SyqniaC6fCqUk1R1j';
var format = '?&format=json';
var filter = '&filter=day';
var limit = '&limit=7';
var query = path + zip + format + filter + limit + clientID + clientSecret;
const getWeatherData = () => axios
    .get(query)


export default {
    weather_data: getWeatherData
}