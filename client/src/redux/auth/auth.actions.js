import {TAUTH} from './auth.types'

export const loginRequest = (payload) => {
  return {
    type: TAUTH.LOGIN_REQUEST,
    payload
  }
}