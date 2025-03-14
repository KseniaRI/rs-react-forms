import { InferType } from 'yup';
import { validationSchema } from './validationSchema';

export type FormData = InferType<typeof validationSchema>;

export interface Picture {
  name: string;
  size: number;
  type: 'png' | 'jpeg';
}

export type FieldData = {
  label: string;
  type: FieldType;
  validation?: {
    required?: boolean;
    message?: string;
    maxSize?: number;
    allowedExtensions?: string[];
  };
  allowCustomValue?: boolean;
  options?: string[];
  placeholder?: string;
};

export type FieldType =
  | 'text'
  | 'password'
  | 'email'
  | 'number'
  | 'checkbox'
  | 'file'
  | 'select'
  | 'autocomplete';

export type FormType = 'controlled' | 'uncontrolled';
