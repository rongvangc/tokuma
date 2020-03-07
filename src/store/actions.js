import axios from '../axios-store';

export const EDIT_FORM = 'EDIT_FORM';
export const SAVE_FORM_DATA = 'SAVE_FORM_DATA';
export const SAVE_FORM_FAIL = 'SAVE_FORM_FAIL';
export const SAVE_FORM_SUCCESS = 'SAVE_FORM_SUCCESS';
export const CLOSE_MODAL = 'CLOSE_MODAL';
export const UPLOAD_IMAGE_SUCCESS = 'UPLOAD_IMAGE_SUCCESS';
export const UPLOAD_IMAGE_FAIL = 'UPLOAD_IMAGE_FAIL'
export const FETCH_DATA = 'FETCH_DATA';
export const FETCH_DATA_FAIL = 'FETCH_DATA_FAIL';
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS'
export const FETCH_DATA_START = 'FETCH_DATA_START';

export const editForm = () => {
  return {
    type: EDIT_FORM
  }
}

export const saveFormSuccess = () => {
  return {
    type: SAVE_FORM_SUCCESS,
  }
}

export const saveFormFail = () => {
  return {
    type: SAVE_FORM_FAIL,
  }
}

export const saveFormData = (formDataUpload) => {
    return dispatch => {
      axios.put('/store.json', {...formDataUpload})
      .then(response => {
        console.log(response.data);
        dispatch(saveFormSuccess());
        setTimeout(() => {
          dispatch(fetchData())
        }, 700)
      })
      .catch(error => {
        dispatch(saveFormFail(error))
      })
  }
}

// export const saveFormData = (formDataUpload) => {
//   return dispatch => {
//     axios.put('/store.json', {
//       ...formDataUpload}, )
//     .then(response => {
//       dispatch(fetchData());
//       dispatch(saveFormSuccess());
//     })
//     .catch(error => {
//       dispatch(saveFormFail(error))
//     })
//   }
// }

export const closeModal = () => {
  return {
    type: CLOSE_MODAL
  }
}

export const fetchDataStart = () => {
  return  {
    type: FETCH_DATA_START,
  }
}

export const fetchDataSuccess = (dataStore) => {
  return  {
    type: FETCH_DATA_SUCCESS,
    dataStore: dataStore
  }
}

export const fetchDataFail = (error) => {
  return {
    type: FETCH_DATA_FAIL,
    error: error
  }
}

export const fetchData = () => {
  return dispatch => {
    dispatch(fetchDataStart())
    axios.get('/store.json')
    .then(response => {
      console.log('response',response.data);
      dispatch(fetchDataSuccess(response.data))
    })
    .catch(error => {
      dispatch(fetchDataFail(error))
    })
  }
}

export const upLoadImageSuccess = () => {
  return {
    type: UPLOAD_IMAGE_SUCCESS,
  }
}

export const upLoadImageFail = (error) => {
  return {
    type: UPLOAD_IMAGE_FAIL,
    error: error
  }
}
