import { API_URL } from "../constants";
import { userActions } from "./userSlice";

import axios from "axios";
const fetchUserData = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get(API_URL);
      const result = await response.data;
      dispatch(userActions.updateUserList(result));
    } catch (error) {
      console.log(error);
    }
  };
};
export default fetchUserData;
