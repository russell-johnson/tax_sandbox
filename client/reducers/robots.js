const robots = (state = [], action) => {
  switch(action.type) {
    case 'ROBOTS':
      return action.robots;
    case 'ADD_ROBOT':
      let { id, name, color } = action;
      return [
        ...state,
        {id, name, color}
      ]
    default:
      return state;
  }
}

export default robots;
