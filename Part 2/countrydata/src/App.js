import React from "react";
import { useState, useEffect } from "react";
import axios from 'axios'

import Country from "./components/Country";
import CountryList from './components/CountryList'

const App = () =>{

  const [inp, setInp] = useState('');
  const [allCountries, setAllCountries] = useState([]);
  const [showCountries, setShowCountries] = useState([]);
  const [country, setCountry] = useState({});

  useEffect( ()=>{
    axios
      .get('https://restcountries.com/v3.1/all')
      .then( response =>{
        setAllCountries(response.data);
      })
  }, []);

  const handleInpChange = (e) => {
    const value = e.target.value
    let filteredCountries = (allCountries.filter( country => {
      return(country.name.common.toUpperCase().match(value.toUpperCase()));
    }));

    if(filteredCountries.length <= 10 && filteredCountries.length > 1){
      setShowCountries(filteredCountries);
      setCountry({});
    } else if(filteredCountries.length === 1){
      setShowCountries(filteredCountries);
      setCountry(filteredCountries[0]);
    } else{
      setShowCountries([]);
      setCountry({})
    }
    setInp(value);
  }

  return(
    <>
      <input type="text" onChange={handleInpChange} val={inp}></input>
      <h2>Filtered Countries</h2>
      <CountryList showCountries={showCountries} setCountry={setCountry} country={country} />
      {/* <ul>
        {showCountries.length===0 ? (showCountries.map( country => <li key={country.cca3}>{country.name.common}</li>)) : 'Narrow down filter' }
      </ul> */}
      <h2>Country Details</h2>
      <Country country={country} />
    </>
  );
};

export default App;