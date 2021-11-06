import { createRouter, createWebHashHistory } from 'vue-router'
import Layout from '../views/Layout'

const routes = [
  {
    path: '/',
    name: Layout,
    component: Layout,
    redirect: 'index',
    children: [{
      path: 'index',
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
    },
    {
      path: 'lawyer-detailed/:lawyerId',
      name: 'lawyerDetailed',
      component: () => import('../views/LawyerDetailed'),
      props: (route) => {
        return {
          lawyerId: route.params.lawyerId
        }
      }
    }
    ]
  },
  {
    path: '/lawyer-center',
    name: 'LawyerCenter',
    redirect: { name: 'lawyerCenterWelcome' },
    component: () => import('../views/lawyerCenter/LawyerLayout'),
    children: [{
      path: 'lawyer-center-welcome',
      name: 'lawyerCenterWelcome',
      component: () => import('../views/lawyerCenter/LawyerHome')
    },
    {
      path: 'lawyer-certification',
      name: 'lawyerCertification',
      component: () => import('../views/lawyerCenter/LawyerCertification')
    },
    {
      path: 'lawyer-edit-page',
      name: 'lawyerEditPage',
      component: () => import('../views/lawyerCenter/LawyerEditPage')
    },
    {
      path: 'lawyer-password-setting',
      name: 'lawyerPasswordSetting',
      component: () => import('../views/lawyerCenter/LawyerPasswordSetting')
    },
    {
      path: 'lawyer-appointment-center',
      name: 'lawyerAppointmentCenter',
      redirect: { name: 'lawyerAppointmentTime' },
      component: () => import('../views/lawyerCenter/LawyerAppointmentCenter'),
      children: [{
        path: 'lawyer-appointment-time',
        name: 'lawyerAppointmentTime',
        component: () => import('../views/lawyerCenter/LawyerAppointmentTime')
      }]
    }]
  },
  {
    path: '/people-center',
    name: 'PeopleCenter',
    redirect: { name: 'peopleEditPage' },
    component: () => import('../views/peopleCenter/PeopleLayout'),
    children: [{
      path: 'people-edit-page',
      name: 'peopleEditPage',
      component: () => import('../views/peopleCenter/PeopleEditPage')
    },
    {
      path: 'people-password-setting',
      name: 'peoplePasswordSetting',
      component: () => import('../views/peopleCenter/PeoplePasswordSetting')
    },
    {
      path: 'people-appointment-center',
      name: 'peopleAppointmentCenter',
      component: () => import('../views/peopleCenter/PeopleAppointmentCenter')
    }]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
