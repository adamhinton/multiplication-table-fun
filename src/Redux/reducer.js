//NOTE: The reason I am "combining reducers" here when I only have one reducer, is that this app will soon have at least two, probably more reducers. So I am planning ahead.
//This combines all reducers in to one for modularity. Much easier than having a giant file since I will eventually have four or five reducers.

import { combineReducers } from "@reduxjs/toolkit";
import tableValuesReducer from "./tableValuesSlice";

const rootReducer = combineReducers({
  tableValues: tableValuesReducer,
});

export default rootReducer;
