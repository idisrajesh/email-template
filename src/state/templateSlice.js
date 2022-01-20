import { ClearAll } from '@mui/icons-material';
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  templateArray: 0,
}

export const templateSlice = createSlice({
    name: 'template',
    initialState: {
        templateArray: [],
    },
    reducers: {
      addTextEditor: (state,action) => {
        // Redux Toolkit allows us to write "mutating" logic in reducers. It
        // doesn't actually mutate the state because it uses the Immer library,
        // which detects changes to a "draft state" and produces a brand new
        // immutable state based off those changes
        state.templateArray.push(action.payload) ;
      },
      deleteLastComponent:(state)=>{
        state.templateArray.pop();
      },

      clearAll:(state)=>{
        state.templateArray=[];
      }
    },
  })
  
  // Action creators are generated for each case reducer function
  export const { addTextEditor } = templateSlice.actions;
  
  export default templateSlice.reducer