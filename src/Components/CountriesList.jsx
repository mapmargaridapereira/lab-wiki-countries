import React from 'react';
import App from '../App';

import { Link } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';

function CountriesList({ countries }) {
  let sort = (array) => {
    return array.sort((a, b) => a.name.common.localeCompare(b.name.common));
  };

  return (
    <div className="list-group">
      {countries ? (
        <>
          {sort(countries).map((country) => {
            return (
              <div key={country.alpha3Code}>
                <Link to={`/${country.alpha3Code}`}>
                  <h2>{country.name.common}</h2>
                </Link>
              </div>
            );
          })}
        </>
      ) : (
        <h4>Loading...</h4>
      )}
    </div>
  );
}

export default CountriesList;
