
const setData = (state = {}, action) => {
  switch (action.type) {
    case 'SETDATAID':
      console.log(state, action);
      return {
        ...state,
        id: action.id
      };
    default:
      return {...state}
  }
}

export default setData;
