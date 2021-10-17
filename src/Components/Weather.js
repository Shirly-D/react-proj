import React, { useState }from 'react';
import axios from 'axios';

const WeatherApp = () => {
    const [temperature, setTemp] = useState("");
    const [city, setCity] = useState("");
    const [desc, setDesc] = useState("");
    const [message, setMsg] = useState("");

    const weatherData = (city) => {
        axios({
            method: "GET", 
            url: `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=b170acb94d7928180c0896f62be0baf7`
        })
        .then((response) => {
            console.log(response.data.main.temp);
            setTemp(response.data.main.temp - 273.15);
            setDesc(response.data.weather[0].main);
        })
        .catch((error) => {
            console.log(error);
            setMsg("Please enter proper city name..!")
        });
    };

    return (
        <>
            <div className="Weather-section">
                <h1>Weather App</h1>
                <div className="Weather-section__display">
                    <h3>City: {city}</h3>
                    <h3>Description: {desc}</h3>
                    <h4>Temperature: {Math.round(temperature * 100) / 100} °C</h4>
                </div> 
                <div className="Weather-section__input">
                    <input type="text" value={city} placeholder="Enter city name" onChange={(e) => setCity(e.target.value)}/>
                    <button onClick= {() => {weatherData(city)}}>Click here</button>
                </div>
                <p>{message}</p>        
            </div>
        </>
    )
}

export default WeatherApp;