import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { yupResolver } from '@hookform/resolvers/yup';
import { setControlledFormData } from '../../app/formsSlice';
import { FieldData, FormData } from '../../utils/types';
import { validationSchema } from '../../utils/validationSchema';
import { fieldsMap, fieldsNames } from '../shared/field/fieldsMap';
import FormPage from '../shared/formPage/FormPage';
import ControlledField from './ControlledField';
import { fileToBase64 } from '../shared/field/lib/fileToBase64';

const ControlledForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = async (data: FormData) => {
    if (data.picture && data.picture.length > 0) {
      const base64Picture = await fileToBase64(data.picture[0]);
      dispatch(setControlledFormData({ ...data, picture: base64Picture }));
    }
    reset();
    navigate('/');
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
