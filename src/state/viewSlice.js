import { createSlice } from '@reduxjs/toolkit'

export const viewSlice = createSlice({
    name: 'view',
    initialState: {
        viewElement: [],
    },
    reducers: {
      addViewElement: (state,action) => {
        
        state.viewElement =action.payload ;
      },
      deleteLastComponent:(state)=>{
        state.viewElement.pop();
      },

      clearAll:(state)=>{
        state.viewElement=[];
      }
    },
  })
  
  // Action creators are generated for each case reducer function
  export const { addViewElement } = viewSlice.actions;
  
  export default viewSlice.reducer