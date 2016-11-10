export const indexShamwows = () => {
  return (dispatch) => {
    $.ajax({
      url: '/api/shamwows',
      type: 'GET',
      dataType: 'JSON'
    }).done( (shamwows) => {
      dispatch( {type: 'SHAMWOWS', shamwows} );
    })
  }
}

export const shimmyShamwow = (size, color) => {
  return (dispatch) => {
    $.ajax({
      url: '/api/shamwows',
      type: 'POST',
      data: { shamwow: { size: size, color: color}}
    }).done( shamwow => {
      dispatch( {type: 'ADD_SHAMWOW', ...shamwow} );
    })
  }
}

export const getchaShamwow = (id) => {
  return (dispatch) => {
    $.ajax({
      url: `/api/shamwows/${id}`,
      type: 'GET',
      dataType: 'JSON'
    }).done( shamwow => {
      dispatch( {type: 'GET_SHAMWOW', ...shamwow} );
    })
  }
}
