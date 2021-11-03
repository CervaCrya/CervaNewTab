import React from 'react';
import './Weather.css';
import axios from "axios";

const Weather = () => {
    const apiKey = "52ddc500eb6bcb802d6c5b7b220ce090";
    const cityId = 484907;
    const url = `http://api.openweathermap.org/data/2.5/weather?id=${cityId}&appid=${apiKey}`
    console.log(localStorage.getItem("weather"))
    if(localStorage.getItem("weather") == undefined){
        console.log("Object weather is undef")
        axios.get(url).then(result => {
            console.log(result)
            console.log("Sho")
            localStorage.setItem("weather", result);
        })
    }
    return (
        <div id='Weather'>

        </div>
    );
};

export default Weather;