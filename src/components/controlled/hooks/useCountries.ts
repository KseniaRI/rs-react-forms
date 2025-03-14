import { ChangeEvent, useState } from 'react';
import { UseFormSetValue } from 'react-hook-form';
import { useAppSelector } from '../../../app/hooks';
import { FormData } from '../../../utils/types';

export const useCountries = (setValue: UseFormSetValue<FormData>) => {
  const countries = useAppSelector(state => state.forms.countries);

  const [filteredCountries, setFilteredCountries] = useState<string[]>([]);
  const [showCountries, setShowCountries] = useState(false);

  const handleAutocompleteChange = (event: ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value.toLowerCase();
    setShowCountries(true);
    setValue('country', inputValue);

    if (inputValue) {
      const matchedCountries = countries.filter(country =>
        country.includes(inputValue)
      );
      setFilteredCountries(matchedCountries);
    } else {
      setFilteredCountries([]);
    }
  };
  const handleCountryClick = (country: string) => {
    setValue('country', country.toLowerCase());
    setShowCountries(false);
    setFilteredCountries([]);
  };

  return {
    filteredCountries,
    showCountries,
    handleAutocompleteChange,
    handleCountryClick,
    setShowCountries,
  };
};
