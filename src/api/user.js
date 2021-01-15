import request from 'axios'
import {
  bladeAuthOauthToken,
  bladeSystemMenuButtons,
  bladeAuthOauthLogout,
  bladeAuthOauthUserInfo,
} from './apiUrl';


export const loginByUsername = (tenantId, username, password, type, key, code, companyId) => {
  return request({
    url: bladeAuthOauthToken,
    headers: {
      'Tenant-Id': tenantId,
      'Captcha-Key': key,
      'Captcha-Code': code,
      "Company-Id": companyId
    },
    method: 'post',
    params: {
      tenantId,
      username,
      password,
      grant_type: ("captcha"),
      scope: "all",
      type
    }
  })
}

export const getUserInfo = () => {
  return request({
    url: bladeAuthOauthUserInfo,
    method: 'get',
  })
}

export const logout = () => {
  return request({
    url: bladeAuthOauthLogout,
    method: 'get',
  })
}

export const getButtons = () => {
  return request({
    url: bladeSystemMenuButtons,
    method: 'get',
  })
}
