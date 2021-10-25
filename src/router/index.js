import { createRouter, createWebHashHistory } from 'vue-router'
import Layout from '../views/Layout'

const routes = [
  {
    path: '/',
    name: Layout,
    component: Layout,
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
    component: () => import('../views/lawyerCenter/LawyerLayout'),
    children: [{
      path: '/lawyer-center',
      component: () => import('../views/lawyerCenter/LawyerHome')
    },
    {
      path: '/lawyer-certification',
      name: 'lawyerCertification',
      component: () => import('../views/lawyerCenter/LawyerCertification')
    }, {
      path: '/lawyer-edit-page',
      name: 'lawyerEditPage',
      component: () => import('../views/lawyerCenter/LawyerEditPage')
    }]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
