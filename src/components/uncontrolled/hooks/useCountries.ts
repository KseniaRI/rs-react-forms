import { RefObject, useEffect, useState } from 'react';
import { useAppSelector } from '../../../app/hooks';

export const useCountries = (
  formRefs: RefObject<
    Record<string, HTMLInputElement | HTMLSelectElement | null>
  >
) => {
  const countries = useAppSelector(state => state.forms.countries);

  const [filteredCountries, setFilteredCountries] = useState<string[]>([]);
  const [showCountries, setShowCountries] = useState(false);

  useEffect(() => {
    const countriesInputEl = formRefs.current['country'];
    if (!countriesInputEl) return;

    const handleAutocompleteChange = () => {
      if (countriesInputEl.value) {
        setShowCountries(true);
        const searchCountries = countries.filter(country =>
          country.includes(countriesInputEl.value?.toLowerCase())
        );
        setFilteredCountries(searchCountries);
      }
    };
    countriesInputEl.addEventListener('input', handleAutocompleteChange);

    return () => {
      countriesInputEl.removeEventListener('input', handleAutocompleteChange);
    };
  }, [formRefs, countries]);

  const handleCountryClick = (country: string) => {
    const countriesInputEl = formRefs.current['country'];
    if (countriesInputEl) {
      // eslint-disable-next-line react-compiler/react-compiler
      countriesInputEl.value = country;
    }
    setShowCountries(false);
  };

  return {
    filteredCountries,
    showCountries,
    setShowCountries,
    handleCountryClick,
  };
};
