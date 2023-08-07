import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  jsonData: null,
  allFilterData:null,
  updateJsonData: null,
  checkboxData: {},
  status: null,
  userInfo: {},
};
const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    addFilter(state, action) {
      state.jsonData = action.payload;
    },
    allFilterData(state, action) {
      state.allFilterData = action.payload;
    },
    updateFilter(state, action) {
      state.updateJsonData = action.payload;
    },
    updateValue(state, action) {
      const { key, value } = action.payload;
      state.allFilterData[key] = value;
    },
    updateDynamicValue(state, action) {
      const { key, value } = action.payload;
      state.updateJsonData[key] = value;
    },
    checkboxData(state, action) {
      const { key, value } = action.payload;
      if (!state.checkboxData) {
        state.checkboxData = {}; // create a new object if it doesn't exist
      }
      state.checkboxData[key] = value;
    },
    updatecheckboxData(state, action) {
      state.checkboxData = action.payload;
    },
    loginStatus(state, action) {
      state.status = action.payload;
    },
    userInfo(state, action) {
      state.userInfo = action.payload;
    },
    resetState(state) {
      // Reset the state to the initial values
      return initialState;
    },
  },
});
export default filterSlice.reducer;
export const {
  addFilter,
  updateFilter,
  updateValue,
  updateDynamicValue,
  checkboxData,
  updatecheckboxData,
  loginStatus,
  userInfo,
  allFilterData,
  resetState
} = filterSlice.actions;
