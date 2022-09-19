import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

const WeatherInfo = ({country}) => {

    const [weather, setWeather] = useState({});

    useEffect( () => {
        const latitude = country.capitalInfo.latlng[0];
        const longitude = country.capitalInfo.latlng[1];
        const apiKey = process.env.REACT_APP_API_KEY;
        axios
        .get(`https://api.tomorrow.io/v4/timelines?location=${latitude},${longitude}&fields=temperature,humidity,windSpeed&timesteps=1h&units=metric&apikey=${apiKey}`)
        .then( (response) =>{
            setWeather(response.data);
        });
    }, [country]);

        if (Object.keys(weather ).length=== 0){
            return (
                <p>No weather information received</p>
            )
        }

        const weatherFields= weather.data.timelines[0].intervals[0].values;
        return(
            <>
                <h3>Weather in {country.capital[0]}</h3>
                <p>
                    Temperature :{weatherFields.temperature}&deg; C <br/>
                    Wind Speed: {weatherFields.windSpeed} m/s <br />
                    Humidity: {weatherFields.humidity}% <br />
                </p>
            </>
        );
;}

export default WeatherInfo