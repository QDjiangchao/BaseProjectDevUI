import request from 'axios'

export const logoutFun = (params) => {
  return request({
    url: '/api/business/logout',
    method: 'post',
    data: params,
  })
}
