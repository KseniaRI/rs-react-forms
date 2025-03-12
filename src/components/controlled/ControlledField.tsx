import { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form';
import { FieldData, FormData } from '../../types';
import { Field } from '../shared/field/Field';
import { useAppSelector } from '../../app/hooks';

interface ControlledFieldProps {
  name: keyof FormData;
  fieldData: FieldData;
  errors: FieldErrors<FieldValues>;
  register: UseFormRegister<FormData>;
}
const ControlledField = ({
  name,
  fieldData,
  errors,
  register,
}: ControlledFieldProps) => {
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
            {...register(name, { required: fieldData.validation?.message })}
            type={fieldData.type}
            id={name}
            placeholder={placeholder}
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
          <select
            {...register(name, { required: fieldData.validation?.message })}
          >
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

export default ControlledField;
