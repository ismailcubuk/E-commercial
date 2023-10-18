const initialState = {
  newFirstName: "",
  newLastName: "",
  newEmail: "",
  newPassword: "",
  newProfilePictures: "",
};

export const userFormReducer = (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE_FIRST_NAME":
      return {
        ...state,
        newFirstName: action.payload,
      };
    case "UPDATE_LAST_NAME":
      return {
        ...state,
        newLastName: action.payload,
      };
    case "UPDATE_EMAIL":
      return {
        ...state,
        newEmail: action.payload,
      };
    case "UPDATE_PASSWORD":
      return {
        ...state,
        newPassword: action.payload,
      };
    case "UPDATE_PROFILE_PICTURES":
      return {
        ...state,
        newProfilePictures: action.payload,
      };
    default:
      return state;
  }
};
