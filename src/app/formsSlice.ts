import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { FormData } from '../utils/types';

export type FormDataStore = Omit<FormData, 'picture'> & {
  picture: string;
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
    'brasil',
    'china',
    'japan',
    'usa',
    'canada',
    'germany',
    'france',
    'russia',
    'italy',
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
