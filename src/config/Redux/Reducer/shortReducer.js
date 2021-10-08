const initialStateShort = {
  data: {},
  loading: false,
  urlasli:''
};

const shortReducer = (state = initialStateShort, action) => {
  if (action.type === "UPDATE_DATA") {
    return {
      ...state,
      data: action.payload,
    };
  }
  if (action.type === "UPDATE_LOADING") {
    return {
      ...state,
      loading: action.payload,
    };
  }
  if (action.type === "UPDATE_URL") {
    return {
      ...state,
      urlasli: action.payload,
    };
  }
  return state;
};

export default shortReducer;
