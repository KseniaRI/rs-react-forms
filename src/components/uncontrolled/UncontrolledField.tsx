import { RefObject } from 'react';
import { FieldData, FormData } from '../../utils/types';
import { useCountries } from './hooks/useCountries';
import CountriesList from '../shared/countriesList/CountriesList';
import Field from '../shared/field/Field';

interface UncontrolledFieldProps {
  name: keyof FormData;
  fieldData: FieldData;
  fieldRef: (el: HTMLInputElement | HTMLSelectElement | null) => void;
  errors: Record<string, { message: string }>;
  formRefs: RefObject<
    Record<string, HTMLInputElement | HTMLSelectElement | null>
  >;
}
const UncontrolledField = ({
  name,
  fieldData,
  fieldRef,
  errors,
  formRefs,
}: UncontrolledFieldProps) => {
  const { type, label, validation, options, placeholder } = fieldData;

  const {
    filteredCountries,
    showCountries,
    setShowCountries,
    handleCountryClick,
  } = useCountries(formRefs);

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
            name={name}
            type={type}
            id={name}
            required={validation?.required}
            placeholder={placeholder}
            ref={fieldRef}
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
            name={name}
            id={name}
            required={validation?.required}
            ref={fieldRef}
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
              type="text"
              id={name}
              ref={fieldRef}
              placeholder={placeholder || 'Start typing country...'}
              onBlur={() => setTimeout(() => setShowCountries(false), 200)}
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

export default UncontrolledField;
