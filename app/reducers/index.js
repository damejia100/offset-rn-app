import axios from 'axios'

//ACTION TYPES
const GOT_ALL_PLASTIC = 'GOT_ALL_PLASTIC'
const GOT_ALL_RESUABLE = 'GOT_ALL_RESUABLE'
const ADD_PLASTIC = 'ADD_PLASTIC'
const ADD_REUSABLE = 'ADD_REUSABLE'
const SUBTRACT_PLASTIC = 'SUBTRACT_PLASTIC'
const SUBTRACT_REUSABLE = 'SUBTRACT_REUSABLE'

//INITIAL STATE
export const initialState  = {
  totalPlastic: 0,
  totalReusale: 0,
  offsetCount: 0
}

//ACTION CREATOR
export const gotPlastic = plastic => ({
  type: GOT_ALL_PLASTIC,
  plastic
})

export const gotReusable = reusable => ({
  type: GOT_ALL_RESUABLE,
  reusable
})

export const addedPlastic = plastic => ({
  type: ADD_PLASTIC,
  plastic
})

export const addedReusable = reusable => ({
  type: ADD_REUSABLE,
  reusable
})

//THUNKS
export const getPlasticCount = () => async dispatch => {
  try {
    const {data} = await axios.get('api/user/plastic')
    dispatch(gotPlastic(data))
  }
  catch (error) {
    console.error(error)
  }
}

export const getReusableCount = () => async dispatch => {
  try {
    const {data} = await axios.get('api/user/reusable')
    dispatch(gotReusable(data))
  }
  catch (error) {
    console.error(error)
  }
}

//REDUCER
export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GOT_ALL_RESUABLE:
      return {
        ...state,
        totalPlastic: action.totalPlastic
      }
    case GOT_ALL_RESUABLE:
      return {
        ...state,
        totalReusale: action.totalReusale
      }
    case ADD_PLASTIC:
      return {
        totalPlastic: + 1
      }
    case ADD_REUSABLE:
      return {
        ...state,
        totalReusale: totalReusale + 1
      }
    case SUBTRACT_PLASTIC:
      return {
        totalPlastic: - 1
      }
    case SUBTRACT_REUSABLE:
      return {
        ...state,
        totalReusale: totalReusale - 1
      }
    default:
      return state
  }
}

export default rootReducer
