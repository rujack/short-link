import axios from "axios";

export const setShort = (url) => (dispatch) => {
  dispatch({
    type: "UPDATE_LOADING",
    payload: true,
  });
  return new Promise((resolve, reject) => {
    axios
      .post(`https://is.gd/create.php?format=json&url=${url}`)
      .then((result) => {
        const responseApi = result.data;
        dispatch({
          type: "UPDATE_DATA",
          payload: responseApi,
        });
        dispatch({
          type: "UPDATE_LOADING",
          payload: false,
        });
        dispatch({
          type: "UPDATE_URL",
          payload: url,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  });
};
