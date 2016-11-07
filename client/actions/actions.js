export const indexLists = () => {
  return (dispatch) => {
    $.ajax({
      url: '/api/lists/all',
      type: 'GET',
      dataType: 'JSON'
    }).done( lists => {
      dispatch(allLists(lists));
    })
  }
}

const allLists = (lists) => {
  return { ...lists, type: 'LISTS'}
}
