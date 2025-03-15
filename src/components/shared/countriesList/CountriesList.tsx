import styles from './CountriesList.module.css';

interface CountriesListProps {
  filteredCountries: string[];
  handleCountryClick: (country: string) => void;
}

const CountriesList = ({
  filteredCountries,
  handleCountryClick,
}: CountriesListProps) => {
  return (
    <ul className={styles.countriesList}>
      {filteredCountries.map(country => (
        <li
          key={country}
          className={styles.countriesListItem}
          onClick={() => handleCountryClick(country)}
        >
          {country}
        </li>
      ))}
    </ul>
  );
};

export default CountriesList;
