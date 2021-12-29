import { combineReducers } from "redux";
import allPosts from "./allPosts";
import pageValues from "./pageValues";

const rootReducer = combineReducers({
  allPosts: allPosts,
  pageValues: pageValues,
});

export default rootReducer;
