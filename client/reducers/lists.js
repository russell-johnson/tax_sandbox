const list = (state = {}, action) => {
  switch(action.type) {
    case 'LIST':
      let { id, name } = action
      return { id, name }
    case 'LISTS':
      return state
    default:
      return state
  }
}

export default list;
