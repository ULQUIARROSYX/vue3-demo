import { RouteRecordRaw } from 'vue-router';

const UserList = () => import('../views/UserList.vue');
const MDetail = () => import('../views/MDetail.vue');

const routes: Array<RouteRecordRaw> = [
    { path: '/', redirect: 'userlist' },
    { path: '/userlist', component: UserList },
    { path: '/userdetail', component: MDetail },
];

export default routes;