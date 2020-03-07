import reducer from './reducers';

describe('Test Reducer', () => {
  it('should return initial state', () => {
    expect(reducer(undefined, {})).toEqual({
      edit: false,
      errorValid: false
    })
  })
})