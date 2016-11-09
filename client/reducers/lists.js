const lists = (state = [], action) => {
  console.log(state)
  console.log(action.type);
  switch(action.type) {
    case 'LISTS':
      console.log(action.lists)
      console.log("in reducer")
      return [...state,{
        lists: action.lists
      }];
    default:
      return state
  }
}

export default lists;
