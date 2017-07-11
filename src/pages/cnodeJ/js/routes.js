/* eslint-disable */

import Index from '../page/index.vue';
import User from '../page/user.vue';
import Topic from '../page/topic.vue';

const routes = [
  {
    path: '/',
    name: 'index',
    component: Index
  },
  {
    path: '/user/:id',
    name: 'user',
    component: User
  },
  {
    path: '/topic/:id',
    name: 'topic',
    component: Topic
  }
];

export default routes;
