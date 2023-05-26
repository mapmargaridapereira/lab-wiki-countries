import './App.css';
import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import axios from 'axios';

import Header from './Components/Header';
import CountriesList from './Components/CountriesList';
import CountriesDetails from './Components/CountriesDetails';

const apiURL = "https://ih-countries-api.herokuapp.com/countries";


function App() {

    const [fetching, setFetching] = useState(false);

    const [countries, setCountries] = useState([]);

    useEffect(()=>{
        axios.get(apiURL).then((response)=>{
            setCountries(response.data);
            setFetching(true);
        })
    })
  return (
    <div className="App">
    <Header>LAB- WikiCountries</Header>

    <div className= "container">

    { countries ? 
    <div className="row">
    
    <CountriesList/> 
{/*     <Routes>  
      <Route
        path="/:countryId" element={<CountriesDetails countries= {countries} />} />
                
    </Routes> */}

  </div>

  : <h3>Loading ...</h3>
}

</div>
</div>
);

}

export default App;
