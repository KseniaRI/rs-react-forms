export interface FormData {
  name: string;
  age: number;
  email: string;
  password: string;
  confirmPassword: string;
  gender: 'male' | 'female';
  accept: boolean;
  picture: Picture;
  country: string;
}

export interface Picture {
  base64: string;
  size: number;
  extension: 'png' | 'jpeg';
}
