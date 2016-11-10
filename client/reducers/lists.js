const lists = (state = [], action) => {
  switch(action.type) {
    case 'LISTS':
      return action.lists;
    case 'LIST':
      return {
        id: action.list.id,
        name: action.list.name
        }
    default:
      return state
  }
}

export default lists;
