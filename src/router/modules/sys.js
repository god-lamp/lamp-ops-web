/** When your routing table is too long, you can split it into small modules **/

import Layout from '@/layout'

const sysRouter = {
  path: '/sys',
  component: Layout,
  redirect: '/sys/account',
  name: '系统管理',
  meta: {
    title: '系统管理',
    icon: 'table'
  },
  children: [
    {
      path: 'account',
      component: () => import('@/views/sys/account'),
      name: '账户管理',
      meta: { title: '账户管理', icon: 'peoples' }
    },
    {
      path: 'role',
      component: () => import('@/views/sys/role'),
      name: '角色管理',
      meta: { title: '角色管理', icon: 'people' }
    },
    {
      path: 'permission',
      component: () => import('@/views/sys/menu'),
      name: '权限管理',
      meta: { title: '权限管理', icon: 'nested' }
    },
    {
      path: 'setting',
      component: () => import('@/views/sys/setting'),
      name: '系统设置',
      meta: { title: '系统设置', icon: 'el-icon-s-tools' }
    }
  ]
}
export default sysRouter
