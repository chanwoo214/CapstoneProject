import api from "../utils/api";
import * as types from "../constants/client.constants"

const getClientList = (query) => async (dispatch) => {
  try {
    dispatch({ type: types.CLIENT_GET_REQUEST });
    const response = await api.get("/clients", {
      params: { ...query },
    });
    if (response.status !== 200) throw new Error(response.error);
    dispatch({ type: types.CLIENT_GET_SUCCESS, payload: response.data });
  } catch (error) {
    dispatch({ type: types.CLIENT_GET_FAIL, payload: error.error });
  }
};

const getClientDetail = (id) => async (dispatch) => {
  try {
    dispatch({ type: types.GET_CLIENT_DETAIL_REQUEST });
    const response = await api.get(`/clients/${id}`);
    if (response.status !== 200) throw new Error(response.error);
    dispatch({
      type: types.GET_CLIENT_DETAIL_SUCCESS,
      payload: response.data.data,
    });
  } catch (error) {
    dispatch({ type: types.GET_CLIENT_DETAIL_FAIL, payload: error.error });
  }
};

const createClient = (formData) => async (dispatch) => {
  try {
    dispatch({ type: types.CLIENT_CREATE_REQUEST });
    const response = await api.post("/clients", formData);
    if (response.status !== 200) throw new Error(response.error);
    dispatch({
      type: types.CLIENT_CREATE_SUCCESS,
      payload: response.data.data,
    });
    
    dispatch(getClientList({ page: 1 }));
  } catch (error) {
    dispatch({ type: types.CLIENT_CREATE_FAIL, payload: error.error });
  
  }
};
const deleteClient = (id) => async (dispatch) => {
  try {
    dispatch({ type: types.CLIENT_DELETE_REQUEST });
    const response = await api.delete(`/clients/${id}`);
    if (response.status !== 200) throw new Error(response.error);
    dispatch({
      type: types.CLIENT_DELETE_SUCCESS,
    });

   dispatch(getClientList({ page: 1 }));
  } catch (error) {
    dispatch({ type: types.CLIENT_DELETE_FAIL, payload: error.message });
  }
};

  const editClient = (formData, id) => async (dispatch) => {
    try {
      dispatch({ type: types.CLIENT_EDIT_REQUEST });
      const response = await api.put(`/clients/${id}`, formData);
      if (response.status !== 200) throw new Error(response.error);

      dispatch({
        type: types.CLIENT_EDIT_SUCCESS,
        payload: response.data.data,
      });


      dispatch(getClientList({ page: 1, name: "" }));
    } catch (error) {
      dispatch({ type: types.CLIENT_EDIT_FAIL, payload: error.error });
    }
  };

export const clientActions = {
  getClientList,
  createClient,
  editClient,
  deleteClient,
  getClientDetail
};
