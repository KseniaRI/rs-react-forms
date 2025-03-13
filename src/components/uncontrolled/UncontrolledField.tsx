import { useAppSelector } from '../../app/hooks';
import { FieldData, FormData } from '../../utils/types';
import { Field } from '../shared/field/Field';

interface UncontrolledFieldProps {
  name: keyof FormData;
  fieldData: FieldData;
  fieldRef: (el: HTMLInputElement | HTMLSelectElement | null) => void;
  errors: Record<string, { message: string }>;
}
const UncontrolledField = ({
  name,
  fieldData,
  fieldRef,
  errors,
}: UncontrolledFieldProps) => {
  const { type, label, validation, options, placeholder } = fieldData;
  const countries = useAppSelector(state => state.forms.countries);

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
      const selectOptions = name !== 'country' ? options : countries;
      return (
        <Field
          label={label}
          required={validation?.required}
          key={name}
          error={errors[name]}
        >
          <select name={name} required={validation?.required} ref={fieldRef}>
            {selectOptions?.map(option => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </Field>
      );
    }

    default:
      throw new Error(`Unknown field type: ${fieldData.type}`);
  }
};

export default UncontrolledField;
