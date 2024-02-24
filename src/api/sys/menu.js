import request from '@/utils/request'

export function fetchMenus(query) {
  return request({
    baseURL: 'http://localhost:19999/api/devops',
    url: '/menu',
    method: 'get',
    params: query
  })
}

export function createMenu(data) {
  return request({
    baseURL: 'http://localhost:19999/api/devops',
    url: '/menu',
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
