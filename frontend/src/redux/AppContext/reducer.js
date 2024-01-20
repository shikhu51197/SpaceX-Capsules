import {
  GET_Data_Error,
  GET_Data_Success,
  GET_Data_request,
} from "./actionTypes";

const initialState = {
  isLoad: false,
  isError: false,
  productdata: [],
};

export const reducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_Data_request:
      return {
        ...state,
        isLoad: true,
        isError: false,
      };
    case GET_Data_Success:
      return {
        ...state,
        isLoad: false,
        isError: false,
        productdata: payload,
      };
    case GET_Data_Error:
      return {
        ...state,
        isLoad: false,
        isError: true,
      };
    default:
      return state;
  }
};
