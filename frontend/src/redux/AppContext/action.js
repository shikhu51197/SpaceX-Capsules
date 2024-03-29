import axios from "axios";
import {
  GET_Data_Error,
  GET_Data_Success,
  GET_Data_request,
} from "./actionTypes";


const get_Data_request = () => {
  return {
    type: GET_Data_request,
  };
};
const get_Data_success = (payload) => {
  return {
    type: GET_Data_Success,
    payload,
  };
};

const get_Data_Error = () => {
  return {
    type: GET_Data_Error,
  };
};

export const getdataData = ( selectedStatus="", selectedLaunchDate="", selectedType="",currentPage) => (dispatch) => {


    dispatch(get_Data_request());
    axios
      .get(`https://brainstormforce.onrender.com/api/app/capsule?page=${currentPage}&Original_lunches=${selectedLaunchDate}&status=${selectedStatus}&type=${selectedType}`)
      .then((res) => {
        dispatch(get_Data_success(res.data.capsules));
        console.log(res.data.capsules)
      })
      .catch((e) => {
        dispatch(get_Data_Error(e));
      });
 
}

