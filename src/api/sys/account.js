import request from '@/utils/request'

export function fetchAccounts(query) {
  return request({
    baseURL: 'http://localhost:19999/api/devops',
    url: '/account',
    method: 'get',
    params: query
  })
}

export function createAccount(data) {
  return request({
    baseURL: 'http://localhost:19999/api/devops',
    url: '/account',
    method: 'post',
    data
  })
}

export function fetchPv(pv) {
  return request({
    url: '/vue-element-admin/article/pv',
    method: 'get',
    params: { pv }
  })
}

export function createArticle(data) {
  return request({
    url: '/vue-element-admin/article/create',
    method: 'post',
    data
  })
}

export function updateArticle(data) {
  return request({
    url: '/vue-element-admin/article/update',
    method: 'post',
    data
  })
}
