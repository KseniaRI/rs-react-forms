import { FieldData, FormData } from '../../../../utils/types';

export const fieldsMap: Record<keyof FormData, FieldData> = {
  name: {
    label: 'name',
    type: 'text',
    validation: {
      required: true,
      message: 'This field is required',
    },
    placeholder: 'Maria',
  },
  age: {
    label: 'age',
    type: 'number',
    validation: {
      required: true,
      message: 'This field is required',
    },
    placeholder: '30',
  },
  email: {
    label: 'email',
    type: 'email',
    validation: {
      required: true,
      message: 'This field is required',
    },
    placeholder: 'maria@example.com',
  },
  password: {
    label: 'password',
    type: 'password',
    validation: {
      required: true,
      message: 'This field is required',
    },
  },
  confirmPassword: {
    label: 'confirmPassword',
    type: 'password',
    validation: {
      required: true,
      message: 'This field is required',
    },
  },
  gender: {
    label: 'gender',
    type: 'select',
    validation: {
      required: true,
      message: 'This field is required',
    },
    options: ['female', 'male'],
  },
  accept: {
    label: 'accept',
    type: 'checkbox',
    validation: {
      required: true,
    },
  },
  picture: {
    label: 'picture',
    type: 'file',
    validation: {
      required: true,
      message: 'This field is required',
      maxSize: 500000, //500KB
      allowedExtensions: ['png', 'jpeg', 'jpg'],
    },
  },
  country: {
    label: 'country',
    type: 'autocomplete',
    validation: {
      required: true,
      message: 'This field is required',
    },
  },
};

export const fieldsNames = Object.keys(fieldsMap) as Array<keyof FormData>;
