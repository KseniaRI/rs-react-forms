import * as yup from 'yup';

export const validationSchema = yup
  .object({
    name: yup
      .string()
      .matches(/^[A-Z]/, 'Name must start with an uppercase letter')
      .required('Name is required'),
    age: yup
      .number()
      .positive('Age must be a positive number')
      .integer('Age must be an integer')
      .required('Age is required'),
    email: yup
      .string()
      .email('Invalid email address')
      .required('Email is required'),
    password: yup
      .string()
      .min(6, 'Password must be at least 6 characters long')
      .matches(/[0-9]/, 'Password must contain at least one number')
      .matches(/[A-Z]/, 'Name must start with an uppercase letter')
      .matches(/[a-z]/, 'Password must contain at least one lowercase letter')
      .matches(/[\W_]/, 'Password must contain at least one special character')
      .required('Password is required'),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref('password')], 'Passwords must match')
      .required('Password confirmation is required'),
    gender: yup
      .string()
      .oneOf(['male', 'female'], 'Invalid gender')
      .required('Gender is required'),
    accept: yup
      .boolean()
      .oneOf([true], 'Accept the terms and conditions')
      .required('Accept the terms and conditions'),
    picture: yup
      .mixed<FileList>()
      .test(
        'fileRequired',
        'Picture is required',
        value => value && value.length > 0
      )
      .test('fileSize', 'File size must be less than 500KB', value => {
        if (!value || value.length === 0) return true;
        return value[0].size <= 500 * 1024;
      })
      .test('fileType', 'Only PNG or JPEG files are allowed', value => {
        if (!value || value.length === 0) return true;
        return ['image/png', 'image/jpeg'].includes(value[0].type);
      })
      .required('Picture is required'),
    country: yup.string().required('Country is required'),
  })
  .required();
