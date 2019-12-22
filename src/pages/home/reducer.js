import {
  ADD_BILL,
  ADD_FRIEND
} from './actions'


export default reducer = (state = {}, action) => {
  switch (action.type) {
    case ADD_BILL:
      return {
        ...state,
        bill: action.bill
      }
      case ADD_FRIEND:
        return {
          ...state,
          friends: [...state.friends, action.friend]
        }
        default:
          return state
  }
}