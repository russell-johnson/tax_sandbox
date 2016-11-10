export const getAllRobots = () => {
  return (dispatch) => {
    $.ajax({
      url: '/api/robots',
      type: 'GET'
    }).done( (robots) => {
      dispatch({ type: 'ROBOTS', robots })
    })
  }
}

export const createRobot = (name, color) => {
  let payload = { robot: { name, color }}
  return (dispatch) => {
    $.ajax({
      url: '/api/robots',
      type: 'POST',
      data: payload
    }).done( robot => {
      dispatch({ type: 'ADD_ROBOT', ...robot })
    });
  }
}
