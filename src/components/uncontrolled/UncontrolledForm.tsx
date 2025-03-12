import { FormEvent, useRef } from 'react';
import { FieldData } from '../../types';
import { fieldsMap, fieldsNames } from '../shared/field/fieldsMap';
import FormPage from '../shared/formPage/FormPage';
import UncontrolledField from './UncontrolledField';
import { useDispatch } from 'react-redux';
import { setUncontrolledFormData } from '../../app/formsSlice';

const UncontrolledForm = () => {
  const dispatch = useDispatch();
  const formRefs = useRef<
    Record<string, HTMLInputElement | HTMLSelectElement | null>
  >({});

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = Object.fromEntries(
      Object.entries(formRefs.current).map(([key, ref]) => {
        if (ref?.type === 'file') {
          return [key, ref.files?.[0] || null];
        }
        if (ref?.type === 'checkbox') {
          return [key, ref.checked];
        }
        return [key, ref?.value || ''];
      })
    );
    dispatch(setUncontrolledFormData(data));
  };
  return (
    <FormPage formType="uncontrolled">
      <form onSubmit={onSubmit}>
        {fieldsNames.map(fieldName => {
          const fieldData: FieldData = fieldsMap[fieldName];
          return (
            <UncontrolledField
              key={fieldName}
              name={fieldName}
              fieldData={fieldData}
              fieldRef={el => (formRefs.current[fieldName] = el)}
            />
          );
        })}
        <input type="submit" />
      </form>
    </FormPage>
  );
};

export default UncontrolledForm;
