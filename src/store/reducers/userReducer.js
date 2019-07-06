const initState = { currentUser: null };

const userReducer = (state = initState, action) => {
    
  switch (action.type) {
    case "SET_CURRENT_USER":
          console.log(state,action)
      return {
        ...state,
        currentUser: action.user
      };
    default:
          console.log(state,action,"default")
      return state;
  }
};

export default userReducer;


