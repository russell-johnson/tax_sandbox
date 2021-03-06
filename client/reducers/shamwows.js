const shamwows = (state = [], action) => {
  switch(action.type) {
    case 'SHAMWOWS':
      return action.shamwows;
    case 'ADD_SHAMWOW':
        let { id, size, color } = action;
        return [
          ...state,
          {id, size, color}
        ]
    case 'GET_SHAMWOW':
      return {
        id: action.shamwow.id,
        size: action.shamwow.size,
        color: action.shamwow.color
      }
    default:
      return state
  }
}

export default shamwows;
