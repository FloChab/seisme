import { useState } from 'react';

function Filter({ countries, onFilter }) {
  const [selectedCountry, setSelectedCountry] = useState('');
  const [selectedMagnitude, setSelectedMagnitude] = useState('');
  //console.log('Filtre de filtrer', selectedCountry, ",", selectedMagnitude);
  const handleCountryChange = (event) => {
    setSelectedCountry(event.target.value);
  };

  const handleMagnitudeChange = (event) => {
    setSelectedMagnitude(parseInt(event.target.value));
  };

  const handleFilterClick = () => {
    onFilter(selectedCountry, selectedMagnitude);
  };

  return (
    <div class="my-4">
      <div className="d-flex align-items-center mb-3">
        <label className='w-50' for="sel_pays">
          <strong>Choix du pays:</strong></label>
        <select id="sel_pays" class="form-select" value={selectedCountry} onChange={handleCountryChange} onLoad={handleMagnitudeChange}>
          <option value={-1} selected >Tous les pays</option>
          {countries.map((country) => (
            <option key={country} value={country}>
              {country}
            </option>
          ))}
        </select>
      </div>
      <br />
      <div className="d-flex align-items-center mb-3">
        <label className='w-50' for="sel_mag">
          <strong>Choix de la magnitude:</strong></label>
        <select id="sel_mag" class="form-select" value={selectedMagnitude} onChange={handleMagnitudeChange} onLoad={handleMagnitudeChange}>
          <option value={0} selected >Toutes les magnitudes</option>
          <option value={1}>0</option>
          <option value={2}>1</option>
          <option value={3}>2</option>
          <option value={4}>3</option>
          <option value={5}>4</option>
          <option value={6}>5</option>
          <option value={7}>6</option>
          <option value={8}>7</option>
          <option value={9}>8+</option>
        </select>
      </div>
      <br />
      <button class="btn btn-primary btn-lg" onClick={handleFilterClick}>Filtrer</button>
    </div>
  );
}

export default Filter;
