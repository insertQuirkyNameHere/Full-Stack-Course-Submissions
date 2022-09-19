import React from "react";

const CountryList = ({showCountries, setCountry, country}) =>{
    if(showCountries.length > 0 && showCountries.length <=10){
        return(
            <ul>
                {showCountries.map( country => {
                    return (
                        <div key={country.cca3}>
                            <li>{country.name.common}</li>
                            <button onClick={() => setCountry(country)}>Show</button>
                        </div>
                    );
                })}
            </ul>
        );
    }
    else{
        return(
            <p>Narrow down the filter</p>
        )
    }
};

export default CountryList;

