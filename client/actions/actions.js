export const indexLists = (dispatch) => {
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

function allLists(lists) {
  console.log(lists)
  console.log("return of action")
  return { type: 'LISTS', lists }
}
