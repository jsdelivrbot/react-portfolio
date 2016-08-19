import { FETCH_PROJECT } from '../actions/index'

const INITIAL_STATE = { all: [] }

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_PROJECT:
      return { ...state, all: action.payload.data.reverse() }
    default:
      return state
  }
}