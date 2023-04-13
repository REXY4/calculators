/* eslint-disable default-param-last */
const initialState = {
  showModalAlert: {
    variant: '',
    message: '',
    status: false
  }
};

const Case = {
  showModalAlert: 'SHOW_MODAL_ALERT'
};

const modalReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case Case.showModalAlert:
      return {
        ...initialState,
        showModalAlert: {
          variant: payload.variant,
          message: payload.message,
          status: payload.status
        }
      };
    default:
      return state;
  }
};

export default modalReducer;
