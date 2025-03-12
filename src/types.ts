export interface FormData {
  name: string;
  age: number;
  email: string;
  password: string;
  confirmPassword: string;
  gender: 'male' | 'female';
  accept: boolean;
  picture: FileList;
  country: string;
}

export interface Picture {
  name: string;
  size: number;
  type: 'png' | 'jpeg' | 'jpg';
}

export type FieldData = {
  label: string;
  type: string;
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

export type FormType = 'controlled' | 'uncontrolled';
