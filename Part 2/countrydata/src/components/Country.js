import React from "react";

import WeatherInfo from "./WeatherInfo";

const Country = ({country}) =>{

        if (Object.keys(country).length === 0){
            return(
                <p>Country not chosen</p>
            )
        }
        
        return (
            <>
                <ul>
                    <li>Name: {country.name.common}</li>
                    <li>Area: {country.area}</li>
                    <li>
                        Capital(s):
                        <ul>
                            {country.capital.map( capital => <li key={capital}>{capital}</li>)}
                        </ul>
                    </li>
                    <li>
                        Languages:
                        <ul>
                            {Object.values(country.languages).map ( language => <li key={language}>{language}</li> )}
                        </ul>
                    </li>
                    <li>
                        Flag
                        <img src={country.flags.svg} width='400px' alt={country.name.common + '\'s flag'}/>
                    </li>
                </ul>

                <WeatherInfo country={country} />
            </>
        )
};

export default Country;