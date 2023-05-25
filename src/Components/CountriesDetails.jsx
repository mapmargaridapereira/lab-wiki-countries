import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const CountriesDetails = ({ countries }) => {
  const [thisCountry, setThisCountry] = useState(null);

  const { countryId } = useParams();

  const findCountry = (code) => {
    return countries.find((country) => country.alpha3Code === code);
  };

  useEffect(() => {
    setThisCountry(findCountry(countryId));
  }, [countryId]);

  return (
    <div className="col-7">
      {thisCountry ? (
        <>
          <h1>{thisCountry.name.common}</h1>
          <table className="table">
            <tbody>
              <tr>
                <td style={{ width: '30%' }}>Capital</td>
                <td>{thisCountry.capital[0]}</td>
              </tr>
              <tr>
                <td>Area</td>
                <td>
                  {thisCountry.area} km
                  <sup>2</sup>
                </td>
              </tr>
              <tr>
                <td>Borders</td>
                <td>
                  {thisCountry.borders.length ? (
                    <ul>
                      {thisCountry.borders.map((border) => {
                        return (
                          <li key={border}>
                            <Link
                              className="list-group-item list-group-item-action"
                              to={`/${border}`}
                            >
                              {findCountry(border).name.common}
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  ) : (
                    <h4>There are no bordering countries</h4>
                  )}
                </td>
              </tr>
            </tbody>
          </table>
        </>
      ) : (
        <h4>Loading...</h4>
      )}
    </div>
  );
};

export default CountriesDetails;
