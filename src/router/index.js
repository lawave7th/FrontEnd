import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home'

const routes = [
  {
    path: '/',
    name: Home,
    component: Home,
    children: [{
      path: '/',
      name: 'Index',
      component: () => import('../views/Index.vue')
    },
    {
      path: 'lawyer-solvation',
      name: 'LawyerSolvation',
      component: () => import('../views/LawyerSolvation.vue')
    },
    {
      path: 'common-problem',
      name: 'CommonProblem',
      component: () => import('../views/CommonProblem ')
    },
    {
      path: 'knowledge',
      name: 'Knowledge',
      component: () => import('../views/Knowledge')
    }]
  },
  {
    path: '/lawyer-center',
    name: 'LawyerCenter',
    component: () => import('../views/lawyerCenter/LawyerHome'),
    children: [{
      path: '/lawyer-center'
    }]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
