import * as actionTypes from './actions';

const initialState = {
  edit: false,
  errorValid: false,
  isSuccess: false,
  isPreview: false
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.PREVIEW:
      return {
          ...state,
          isPreview: true
        }
    case actionTypes.CLOSE_PREVIEW:
      return {
          ...state,
          isPreview: false
        }
    case actionTypes.EDIT_FORM:
      return {
          ...state,
          edit: true
        }
    case actionTypes.CLOSE_MODAL:
    return {
          ...state,
          edit: false
        }
    case actionTypes.SAVE_FORM_DATA:
      return {
          ...action.formDataUpload
        }
    case actionTypes.SAVE_FORM_SUCCESS:
      return {
          ...state,
          edit: false,
          errorValid: false,
          isSuccess: true
        }
    case actionTypes.SAVE_FORM_FAIL:
      return {
          ...state,
          errorValid: true
        }
    case actionTypes.FETCH_DATA_START:
      return {
          ...state
        }
    case actionTypes.FETCH_DATA_SUCCESS:
      return {
          ...action.dataStore,
        }  
    case actionTypes.FETCH_DATA_FAIL:
      return {
          ...state
        }    
    case actionTypes.UPLOAD_IMAGE_SUCCESS:
      return {
          ...state
        }
    case actionTypes.UPLOAD_IMAGE_FAIL:
      return {
          ...state
        }
    default:
      return state;
  }
}

export default reducer