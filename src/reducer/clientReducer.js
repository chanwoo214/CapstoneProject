import * as types from "../constants/client.constants";
const initialState = {
  clientList: [],
  selectedClient: null,
  loading: false,
  error: "",
  totalPageNum: 1,
};

function clientReducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case types.SET_SELECTED_CLIENT: {
      return { ...state, selectedClient: payload };
    }
    case types.CLIENT_GET_REQUEST:
    case types.CLIENT_CREATE_REQUEST:
    case types.CLIENT_DELETE_REQUEST:
    case types.CLIENT_EDIT_REQUEST:
    case types.GET_CLIENT_DETAIL_REQUEST:
      return { ...state, loading: true };
    case types.CLIENT_GET_SUCCESS: {
      return {
        ...state,
        loading: false,
        clientList: payload.data,
        totalPageNum: payload.totalPageNum,
        error: "",
      };
    }

    case types.GET_CLIENT_DETAIL_SUCCESS: {
      return { ...state, loading: false, selectedClient: payload };
    }
    case types.CLIENT_CREATE_SUCCESS:
    case types.CLIENT_DELETE_SUCCESS:
    case types.CLIENT_EDIT_SUCCESS: {
      return { ...state, loading: false, error: "" };
    }
    case types.CLIENT_GET_FAIL:
    case types.CLIENT_CREATE_FAIL:
    case types.CLIENT_DELETE_FAIL:
    case types.CLIENT_EDIT_FAIL:
    case types.GET_CLIENT_DETAIL_FAIL: {
      return { ...state, loading: false, error: payload };
    }
    case types.SET_FILTERED_LIST: {
      return { ...state, filteredList: payload };
    }

    default:
      return { ...state };
  }
}

export default clientReducer;
