import request from '@/utils/request'

export function login(data) {
  return request({
    baseURL: 'http://localhost:19999/api/devops',
    url: '/login',
    // url: '/vue-element-admin/user/login',
    method: 'post',
    data
  })
}

/*
export function getInfo(token) {
  return request({
    url: '/vue-element-admin/user/info',
    method: 'get',
    params: { token }
  })
}
*/

export function getInfo() {
  return request({
    baseURL: 'http://localhost:19999/api/devops',
    url: '/info',
    method: 'get'
  })
}

export function logout() {
  return request({
    url: '/vue-element-admin/user/logout',
    method: 'post'
  })
}
