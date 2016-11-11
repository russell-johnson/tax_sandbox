const lists = (state = [], action) => {
  switch(action.type) {
    case 'LISTS':
      return action.lists;
    case 'LIST':
      return {
        id: action.id,
        name: action.name
        }
    default:
      return state
  }
}

export default lists;
