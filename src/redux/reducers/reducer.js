const initialState = {
  dicData: [],
};

const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCHED_DATA":
      return {
        ...state,
        dicData: action.payload,
      };

    default:
      return state;
  }
};

export default dataReducer;