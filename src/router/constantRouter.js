import BasicLayout from '@/layout/BasicLayout'
import UserLayout from '@/layout/UserLayout'

/**
 * 基础路由
 * @type {{redirect: string, path: string, component: *, hidden: boolean, children: {path: string, component: (function()), name: string}[]}[]}
 */
export const constantRouterMap = [
    {
        path: '/auth',
        component: UserLayout,
        redirect: '/auth/login',
        hidden: true,
        children: [
            {
                path: 'login',
                name: 'login',
                component: () => import('@/views/login/login')
            }
        ]
    },
    {
        path: '/error',
        name: 'error',
        component: BasicLayout,
        meta: { title: 'error' },
        redirect: '/error/404',
        children: [
            {
                path: '404',
                name: '404',
                component: () => import('@/views/error/404'),
                meta: { title: '404', keepAlive: true }
            }
        ]
    },
    {
        path: '/',
        name: 'DASHBOARD',
        component: BasicLayout,
        meta: { title: 'test', left_show: true },
        redirect: 'a',
        children: [
            {
                path: 'a',
                name: 'workplace',
                component: () => import('@/views/dashboard/index'),
                meta: { title: 'testa', left_show: true }
            },
            {
                path: 'team',
                name: 'MEMBER_LIST',
                component: () => import('@/views/member/TeamList'),
                meta: { title: 'checkTeam', left_show: true }
            },
            {
                path: 'bill',
                name: 'USER_BILL_LIST',
                component: () => import('@/views/userBill/list'),
                meta: { title: 'checkBill', left_show: true }
            },
            // {
            //     path: 'customerService',
            //     name: 'CUSTOMER_SERVICE',
            //     component: () => import('@/views/dashboard/customerService'),
            //     meta: { title: 'checkBill', left_show: true }
            // }
        ]
    }
]
