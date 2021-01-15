import request from 'axios'

export const loginFun = (params) => {
  return request({
    url: '/api/business/login',
    method: 'post',
    data: params,
  })
}

export const loginSellerFun = (params) => {
  return request({
    url: '/api/business/loginSeller',
    method: 'post',
    data: params,
  })
}


export const checkLoginFun = (params) => {
  return request({
    url: '/api/business/checkLogin',
    method: 'post',
    data: params,
  })
}
