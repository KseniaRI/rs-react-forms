// import { FieldData } from '../../types';
// import { Field } from '../shared/field/Field';
// import { fieldsMap, fieldsNames } from '../shared/field/fieldsMap';

const UncontrolledForm = () => {
  return (
    <form action="">
      {/* {fieldsNames.map(fieldName => {
        const fieldData: FieldData = fieldsMap[fieldName as keyof FormData];
        const { type, label, validation, options, placeholder } = fieldData;
        return (
          <Field key={fieldName} label={label} required={validation?.required} >
            {fieldName}
          </Field>
        );
      })} */}
    </form>
  );
};

export default UncontrolledForm;
