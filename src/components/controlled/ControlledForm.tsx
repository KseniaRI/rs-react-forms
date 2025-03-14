import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { yupResolver } from '@hookform/resolvers/yup';
import { setControlledFormData } from '../../app/formsSlice';
import { FieldData, FormData } from '../../utils/types';
import { validationSchema } from '../../utils/validationSchema';
import { fileToBase64 } from '../shared/field/lib/fileToBase64';
import { fieldsMap, fieldsNames } from '../shared/field/lib/fieldsMap';
import FormPage from '../shared/formPage/FormPage';
import ControlledField from './ControlledField';

const ControlledForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
    control,
    setValue,
  } = useForm<FormData>({
    resolver: yupResolver(validationSchema),
    mode: 'onChange',
  });

  const onSubmit = async (data: FormData) => {
    if (data.picture && data.picture.length > 0) {
      const base64Picture = await fileToBase64(data.picture[0]);
      dispatch(setControlledFormData({ ...data, picture: base64Picture }));
    }
    reset();
    navigate('/?newData=controlled', { replace: true });
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
              control={control}
              setValue={setValue}
            />
          );
        })}
        <input type="submit" disabled={!isValid} />
      </form>
    </FormPage>
  );
};

export default ControlledForm;
