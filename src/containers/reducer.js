import { TEST } from "./action";
export default function reducer(state = {}, action) {
  if (action.type === TEST)
    return {
      ...state,
      val: action.val
    };
  return state;
}
