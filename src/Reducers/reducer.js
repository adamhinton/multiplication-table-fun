//NOTE: The reason I am "combining reducers" here when I only have one reducer, is that this app will soon have at least two, probably more reducers. So I am planning ahead.

import { combineReducers } from "@reduxjs/toolkit";
import tableValuesReducer from "./tableValuesSlice";

const rootReducer = combineReducers({
  tableValues: tableValuesReducer,
});
