const datBois = (state = [], action) => {
  switch(action.type) {
    case 'DATBOIS':
      console.log(action);
      return action.datBois;
    case 'CREATEDATBOI':
    let { id, name, catch_phrase } = action;
      return [
        ...state,
        { id, name, catch_phrase }
      ]
    default:
      return state;
  }
}
 export default datBois
