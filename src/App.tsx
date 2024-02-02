import React, { useState } from 'react';
import CountryList from "./components/CountryList/CountryList";
import CountryInfo from "./components/AboutCountry/AboutContry";


const App: React.FC = () => {
  const [selectedCountry, setSelectedCountry] = useState<string | null>(null);

  const handleSelectCountry = (countryCode: string) => {
    setSelectedCountry(countryCode);
  };

  return (
    <div className='d-flex flex-row'>
      <CountryList selectCountry={handleSelectCountry} />
      <CountryInfo countryCode={selectedCountry} />
    </div>
  );
};

export default App;