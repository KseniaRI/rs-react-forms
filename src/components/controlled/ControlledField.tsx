import {
  Control,
  FieldErrors,
  UseFormRegister,
  UseFormSetValue,
  useWatch,
} from 'react-hook-form';
import { FieldData, FormData } from '../../utils/types';
import { useCountries } from './hooks/useCountries';
import Field from '../shared/field/Field';
import CountriesList from '../shared/countriesList/CountriesList';

interface ControlledFieldProps {
  name: keyof FormData;
  fieldData: FieldData;
  errors: FieldErrors<FormData>;
  register: UseFormRegister<FormData>;
  control: Control<FormData>;
  setValue: UseFormSetValue<FormData>;
}
const ControlledField = ({
  name,
  fieldData,
  errors,
  register,
  control,
  setValue,
}: ControlledFieldProps) => {
  const { type, label, validation, options, placeholder } = fieldData;

  const countryInputValue = useWatch({ control, name }) || '';

  const {
    filteredCountries,
    showCountries,
    handleAutocompleteChange,
    handleCountryClick,
    setShowCountries,
  } = useCountries(setValue);

  switch (type) {
    case 'text':
    case 'password':
    case 'email':
    case 'number':
    case 'checkbox':
    case 'file':
      return (
        <Field
          label={label}
          required={validation?.required}
          key={name}
          error={errors[name]}
        >
          <input
            {...register(name, { required: fieldData.validation?.message })}
            type={type}
            id={name}
            placeholder={placeholder}
          />
        </Field>
      );
    case 'select': {
      return (
        <Field
          label={label}
          required={validation?.required}
          key={name}
          error={errors[name]}
        >
          <select
            id={name}
            {...register(name, { required: fieldData.validation?.message })}
          >
            {options?.map(option => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </Field>
      );
    }
    case 'autocomplete': {
      return (
        <>
          <Field
            label={label}
            required={validation?.required}
            key={name}
            error={errors[name]}
          >
            <input
              {...register(name, { required: fieldData.validation?.message })}
              type="text"
              id={name}
              value={
                typeof countryInputValue === 'string' ? countryInputValue : ''
              }
              placeholder={placeholder || 'Start typing country...'}
              onChange={e => handleAutocompleteChange(e)}
              onBlur={() => setTimeout(() => setShowCountries(false), 200)}
              onFocus={() => setShowCountries(true)}
            />
          </Field>
          {showCountries && filteredCountries.length > 0 && (
            <CountriesList
              filteredCountries={filteredCountries}
              handleCountryClick={handleCountryClick}
            />
          )}
        </>
      );
    }
    default:
      throw new Error(`Unknown field type: ${fieldData.type}`);
  }
};

export default ControlledField;
