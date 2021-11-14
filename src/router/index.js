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
      name: 'LawyerDetailed',
      component: () => import('../views/LawyerDetailed'),
      props: (route) => {
        return {
          lawyerId: route.params.lawyerId
        }
      }
    },
    {
      path: 'appointment-time/:lawyerId',
      name: 'AppointmentTime',
      component: () => import('../views/AppointmentTime'),
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
    redirect: { name: 'LawyerCenterWelcome' },
    component: () => import('../views/lawyerCenter/LawyerLayout'),
    children: [{
      path: 'lawyer-center-welcome',
      name: 'LawyerCenterWelcome',
      component: () => import('../views/lawyerCenter/LawyerHome')
    },
    {
      path: 'lawyer-certification',
      name: 'LawyerCertification',
      component: () => import('../views/lawyerCenter/LawyerCertification')
    },
    {
      path: 'lawyer-edit-page',
      name: 'LawyerEditPage',
      component: () => import('../views/lawyerCenter/LawyerEditPage')
    },
    {
      path: 'lawyer-password-setting',
      name: 'LawyerPasswordSetting',
      component: () => import('../views/lawyerCenter/LawyerPasswordSetting')
    },
    {
      path: 'lawyer-appointment-center',
      name: 'LawyerAppointmentCenter',
      redirect: { name: 'LawyerAppointmentTime' },
      component: () => import('../views/lawyerCenter/lawyerAppointment/LawyerAppointmentCenter'),
      children: [{
        path: 'lawyer-appointment-time',
        name: 'LawyerAppointmentTime',
        component: () => import('../views/lawyerCenter/lawyerAppointment/LawyerAppointmentTime')
      },
      {
        path: 'lawyer-pending-review',
        name: 'LawyerPendingReview',
        component: () => import('../views/lawyerCenter/lawyerAppointment/LawyerAppointmentAudit')
      },
      {
        path: 'lawyer-booked',
        name: 'LawyerBooked',
        component: () => import('../views/lawyerCenter/lawyerAppointment/LawyerAppointmentBooked')
      },
      {
        path: 'lawyer-blacklist',
        name: 'LawyerBlacklist',
        component: () => import('../views/lawyerCenter/lawyerAppointment/LawyerBlacklist')
      },
      {
        path: 'lawyer-appointment-record',
        name: 'LawyerAppointmentRecord',
        component: () => import('../views/lawyerCenter/lawyerAppointment/LawyerAppointmentRecord')
      }]
    }]
  },
  {
    path: '/people-center',
    name: 'PeopleCenter',
    redirect: { name: 'PeopleEditPage' },
    component: () => import('../views/peopleCenter/PeopleLayout'),
    children: [{
      path: 'people-edit-page',
      name: 'PeopleEditPage',
      component: () => import('../views/peopleCenter/PeopleEditPage')
    },
    {
      path: 'people-password-setting',
      name: 'PeoplePasswordSetting',
      component: () => import('../views/peopleCenter/PeoplePasswordSetting')
    },
    {
      path: 'people-appointment-center',
      name: 'PeopleAppointmentCenter',
      component: () => import('../views/peopleCenter/PeopleAppointmentCenter')
    },
    {
      path: 'people-focus',
      name: 'PeopleFocus',
      component: () => import('../views/peopleCenter/PeopleFocus')
    }]
  },
  {
    path: '/chatroom',
    name: 'Chatroom',
    component: () => import('../views/Chatroom')
  },
  {
    path: '/consultation-record',
    name: 'ConsultationRecord',
    component: () => import('../views/ConsultationRecord')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
