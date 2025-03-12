import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { FormData } from '../types';

export type FormDataStore = Omit<FormData, 'picture'> & {
  picture: File;
};
interface FormsState {
  uncontrolledFormData: null | FormDataStore;
  controlledFormData: null | FormDataStore;
  countries: string[];
}
const initialState: FormsState = {
  uncontrolledFormData: null,
  controlledFormData: null,
  countries: [
    'Brasil',
    'China',
    'Japan',
    'USA',
    'Canada',
    'Germany',
    'France',
    'Russia',
    'Italy',
  ],
};

const formsSlice = createSlice({
  name: 'forms',
  initialState,
  reducers: {
    setUncontrolledFormData: (state, action: PayloadAction<FormDataStore>) => {
      state.uncontrolledFormData = action.payload;
    },
    setControlledFormData: (state, action: PayloadAction<FormDataStore>) => {
      state.controlledFormData = action.payload;
    },
  },
});

export const { setUncontrolledFormData, setControlledFormData } =
  formsSlice.actions;
export default formsSlice.reducer;
