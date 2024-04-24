import React, {Component} from 'react'
import axios from "axios"

const getWeatherData = () => axios
    .get(`https://api.aerisapi.com/forecasts/V1B3K4?&format=json&filter=day&limit=7&client_id=Cr0YRR2ZeUaVOkc1dzisr&client_secret=5KmCGBqh2wOaaDXRbUE2xa1SyqniaC6fCqUk1R1j`)




export default {
    weather_data: getWeatherData
}