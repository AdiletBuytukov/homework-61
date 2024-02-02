import React, { useState, useEffect } from 'react';

interface CountryInfoProps {
  countryCode: string | null;
}

const CountryInfo: React.FC<CountryInfoProps> = ({ countryCode }) => {
  const [countryInfo, setCountryInfo] = useState<any>(null);

  useEffect(() => {
    const fetchCountryInfo = async () => {
      if (!countryCode) return;

      try {
        const response = await fetch(`https://restcountries.com/v2/alpha/${countryCode}`);
        const data = await response.json();
        setCountryInfo(data);
      } catch (error) {
        console.error(`Error fetching country info for ${countryCode}`, error);
      }
    };

    fetchCountryInfo();
  }, [countryCode]);

  return (
    <div>
      <h2>Информация о стране:</h2>
      {countryInfo ? (
        <div>
          <p>Название: {countryInfo.name}</p>
          <p>Столица: {countryInfo.capital}</p>
          <p>Граничит с: {countryInfo.borders.join(', ')}</p>
        </div>
      ) : (
        <p>Выберите страну</p>
      )}
    </div>
  );
};

export default CountryInfo;
