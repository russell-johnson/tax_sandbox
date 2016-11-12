export const GetAllDatBois = () => {
  return (dispatch) => {
    $.ajax({
      url: '/api/dat_bois',
      type: 'GET'
    }).done( (datBois) => {
      dispatch({ type: 'DATBOIS', datBois })
    })
  }
}

export const createDatBoi = (name, catch_phrase) => {
  let payload = { dat_boi: { name, catch_phrase }}
  return(dispatch) => {
    $.ajax({
      url: '/api/dat_bois',
      type: 'POST',
      data: payload
    }).done( (datBois) => {
      dispatch({ type: 'CREATEDATBOI', ...datBois })
    })
  }
}
