import React, {useEffect, useState} from 'react';
import {ALL_COUNTRY_URL} from "../../../constansts";

interface Props {
  selectCountry: (countryCode: string) => void
}

const CountryList: React.FC<Props> = ({selectCountry}) => {
  const [countries, setCountries] = useState<{ alpha3Code: string; name: string }[]>([]);

  useEffect(() => {
    const Countries = async () => {
      try {
        const response = await fetch(ALL_COUNTRY_URL);
        const data = await response.json();
        setCountries(data);
      } catch (error) {
        console.error('Error', error);
      }
    }
    Countries();
  }, []);
  return (
    <div>
      <div>
        <h3>Выберите страну:</h3>
        <article className='d-flex flex-column'>{countries.map((countries) => (
          <button key={countries.alpha3Code} onClick={() => selectCountry(countries.alpha3Code)}>
            {countries.name}
          </button>
          ))}</article>
      </div>
    </div>
  );
};

export default CountryList;