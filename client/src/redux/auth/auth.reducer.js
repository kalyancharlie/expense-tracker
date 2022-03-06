import { TAUTH } from "./auth.types"

const authState = {

}

const authReducer = (state=authState, action) => {
  switch(action.type) {
    case TAUTH.LOGIN_REQUEST: {
      return {...state}
    }
    default: return state
  }
}

export default authReducer;