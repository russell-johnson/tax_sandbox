export const indexLists = () => {
  return (dispatch) => {
    $.ajax({
      url: '/api/lists',
      type: 'GET',
      dataType: 'JSON'
    }).done( (lists) => {
      dispatch( {type: 'LISTS', lists} );
    })
  }
}

export const showList = (id) => {
  return (dispatch) => {
    $.ajax({
      url: `/api/lists/${id}`,
      type: 'GET',
      dataType: 'JSON'
    }).done( (list) => {
      dispatch( {type: 'LIST', list} );
    })
  }
}
