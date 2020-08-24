import axios from 'axios'

//ACTION TYPES
const GOT_ALL_PLASTIC = 'GOT_ALL_PLASTIC'
const GOT_ALL_RESUABLE = 'GOT_ALL_RESUABLE'
const ADD_PLASTIC = 'ADD_PLASTIC'
const ADD_REUSABLE = 'ADD_REUSABLE'
const SUBTRACT_PLASTIC = 'SUBTRACT_PLASTIC'
const SUBTRACT_REUSABLE = 'SUBTRACT_REUSABLE'
const GET_OFFSET_COUNT = 'GET_OFFSET_COUNT'

//INITIAL STATE
export const initialState  = {
  totalPlastic: 0,
  totalReusable: 0,
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

export const addedPlastic = () => ({
  type: ADD_PLASTIC
})

export const addedReusable = () => ({
  type: ADD_REUSABLE
})

export const subtractedPlastic = () => ({
  type: SUBTRACT_PLASTIC
})

export const subtractedReusable = () => ({
  type: SUBTRACT_REUSABLE
})

export const gotOffsetCount = () => ({
  type: GET_OFFSET_COUNT
})

//THUNKS
export const getOffsetCount = () => async dispatch => {
  try {
    const {data} = await axios.get('api/user/plastic')
    dispatch(gotPlastic(data))
  }
  catch (error) {
    console.error(error)
  }
}

// export const getPlasticCount = () => async dispatch => {
//   try {
//     const {data} = await axios.get('api/user/plastic')
//     dispatch(gotPlastic(data))
//   }
//   catch (error) {
//     console.error(error)
//   }
// }

// export const getReusableCount = () => async dispatch => {
//   try {
//     const {data} = await axios.get('api/user/reusable')
//     dispatch(gotReusable(data))
//   }
//   catch (error) {
//     console.error(error)
//   }
// }

//REDUCER
export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GOT_ALL_PLASTIC:
      return {
        ...state,
        totalPlastic: action.totalPlastic
      }
    case GOT_ALL_RESUABLE:
      return {
        ...state,
        totalReusable: action.totalReusable
      }
    case ADD_PLASTIC:
      return {
        ...state,
        totalPlastic: state.totalPlastic + 1,
        offsetCount: state.offsetCount + 1
      }
    case ADD_REUSABLE:
      return {
        ...state,
        totalReusable: state.totalReusable + 1,
        offsetCount: state.offsetCount - 1
      }
    case SUBTRACT_PLASTIC:
      return {
        ...state,
        totalPlastic: state.totalPlastic - 1,
        offsetCount: state.offsetCount - 1
      }
    case SUBTRACT_REUSABLE:
      return {
        ...state,
        totalReusable: state.totalReusable - 1
      }
    case GET_OFFSET_COUNT:
    return {
      ...state,
      offsetCount: Math.abs(state.totalPlastic - state.totalReusable)
    }
    default:
      return state
  }
}

export default rootReducer
