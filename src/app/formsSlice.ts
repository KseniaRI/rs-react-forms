import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { FormData } from '../types';

interface FormsState {
  uncontrolledFormData: null | FormData;
  controlledFormData: null | FormData;
}
const initialState: FormsState = {
  uncontrolledFormData: null,
  controlledFormData: null,
};

const formsSlice = createSlice({
  name: 'forms',
  initialState,
  reducers: {
    setUncontrolledFormData: (state, action: PayloadAction<FormData>) => {
      state.uncontrolledFormData = action.payload;
    },
    setControlledFormData: (state, action: PayloadAction<FormData>) => {
      state.controlledFormData = action.payload;
    },
  },
});

export const { setUncontrolledFormData, setControlledFormData } =
  formsSlice.actions;
export default formsSlice.reducer;
