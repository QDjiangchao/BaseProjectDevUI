import request from 'axios'

export const getIndexCompanyLists = (params) => {
  return request({
    url: '/api/business/getIndexCompanyList',
    method: 'post',
    data: params,
  })
}

export const getProductLists = (params) => {
  return request({
    url: '/api/product/getProductList',
    method: 'post',
    data: params,
  })
}

export const getAllProductCategory = (params) => {
  return request({
    url: '/api/product/getAllProductCategorys',
    method: 'post',
    data: params,
  })
}

export const logoutFun = (params) => {
  return request({
    url: '/api/business/logout',
    method: 'post',
    data: params,
  })
}
