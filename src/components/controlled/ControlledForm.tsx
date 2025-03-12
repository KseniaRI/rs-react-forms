import { useForm } from 'react-hook-form';
import { FieldData, FormData } from '../../types';
import { fieldsMap, fieldsNames } from '../shared/field/fieldsMap';
import { useDispatch } from 'react-redux';
import { setControlledFormData } from '../../app/formsSlice';
import FormPage from '../shared/formPage/FormPage';
import ControlledField from './ControlledField';

const ControlledForm = () => {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    dispatch(setControlledFormData({ ...data, picture: data.picture[0] }));
  };

  return (
    <FormPage formType="controlled">
      <form onSubmit={handleSubmit(onSubmit)}>
        {fieldsNames.map(fieldName => {
          const fieldData: FieldData = fieldsMap[fieldName as keyof FormData];
          return (
            <ControlledField
              key={fieldName}
              name={fieldName}
              fieldData={fieldData}
              errors={errors}
              register={register}
            />
          );
        })}
        <input type="submit" />
      </form>
    </FormPage>
  );
};

export default ControlledForm;
