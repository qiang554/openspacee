/* Layout */
import Layout from '@/layout'
import store from '@/store'

const Routes = [
  // {
  //   path: 'overview',
  //   name: 'overview',
  //   component: () => import('@/views/settings/overview/index'),
  //   meta: { title: '总览', icon: 'overview', 'group': 'settings' }
  // },
  {
    path: 'cluster',
    name: 'settinsCluster',
    component: () => import('@/views/settings/cluster/index'),
    meta: { title: '集群管理', icon: 'settings_cluster', 'group': 'settings', object: 'cluster' }
  },
  {
    path: 'member',
    name: 'member',
    component: () => import('@/views/settings/member/index'),
    meta: { title: '用户管理', icon: 'member', 'group': 'settings', object: 'user' }
  },
  {
    path: 'settings_role',
    name: 'settings_role',
    component: () => import('@/views/settings/role'),
    meta: { title: '角色管理', icon: 'settings_role', 'group': 'settings', object: 'role' }
  },
]

const settingsRoutes = [{
  path: 'settings',
  component: Layout,
  hidden: true,
  children: Routes
}]

export default settingsRoutes
