import React, {useState} from 'react';

interface Props {
  selectCountry: (countryCode: string) => void
}

const CountryList: React.FC<Props> = ({selectCountry}) => {
  const [countries, setCountries] = useState();

  return (
    <div>

    </div>
  );
};

export default CountryList;