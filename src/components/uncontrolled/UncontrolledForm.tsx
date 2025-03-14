import { FormEvent, useRef, useState } from 'react';
import { useNavigate } from 'react-router';
import { useDispatch } from 'react-redux';
import * as yup from 'yup';
import { setUncontrolledFormData } from '../../app/formsSlice';
import { validationSchema } from '../../utils/validationSchema';
import { FieldData } from '../../utils/types';
import { fieldsMap, fieldsNames } from '../shared/field/lib/fieldsMap';
import { fileToBase64 } from '../shared/field/lib/fileToBase64';
import FormPage from '../shared/formPage/FormPage';
import UncontrolledField from './UncontrolledField';

const UncontrolledForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const formRefs = useRef<
    Record<string, HTMLInputElement | HTMLSelectElement | null>
  >({});

  const validationErrors: Record<string, { message: string }> = {};

  const [localErrors, setLocalErrors] = useState<
    Record<string, { message: string }>
  >({});

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = Object.fromEntries(
      Object.entries(formRefs.current).map(([key, ref]) => {
        if (ref?.type === 'file') {
          return [key, ref.files];
        }
        if (ref?.type === 'checkbox') {
          return [key, ref.checked];
        }
        return [key, ref?.value || ''];
      })
    );
    const base64Picture = await fileToBase64(data.picture[0]);

    validationSchema
      .validate(data, { abortEarly: false })
      .then(validData => {
        dispatch(
          setUncontrolledFormData({ ...validData, picture: base64Picture })
        );
        setLocalErrors({});
        navigate('/');
      })
      .catch(err => {
        err.inner.forEach((error: yup.ValidationError) => {
          if (error.path) {
            validationErrors[error.path] = {
              message: error.message,
            };
          }
        });
        setLocalErrors(validationErrors);
      });
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
              errors={localErrors}
              formRefs={formRefs}
            />
          );
        })}
        <input
          type="submit"
          // disabled={Object.keys(localErrors).length > 0}
        />
      </form>
    </FormPage>
  );
};

export default UncontrolledForm;
