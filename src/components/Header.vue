<template>
  <header class="py-md-2 " ref="header"
          :class="isBottomBanner === true ?'position-fixed  start-0 end-0 ':'bg-secondary'">
    <div class="container p-0">
      <nav class="navbar">
        <div class="container">
          <div class="d-flex align-items-center">
            <!-- logo -->
            <h1>
              <router-link class="navbar-brand ps-3 fs-2 text-white" :to="{ name: 'Index' }">
                <svg width="32" height="45" viewBox="0 0 32 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clip-path="url(#clip0_1305:10861)">
                    <path
                      d="M23.0899 40.8233H9.21373C9.06121 40.8233 8.91494 40.7627 8.8071 40.6549C8.69925 40.547 8.63867 40.4008 8.63867 40.2482C8.63867 40.0957 8.69925 39.9495 8.8071 39.8416C8.91494 39.7338 9.06121 39.6732 9.21373 39.6732H23.0899C23.2424 39.6732 23.3886 39.7338 23.4965 39.8416C23.6043 39.9495 23.6649 40.0957 23.6649 40.2482C23.6649 40.4008 23.6043 40.547 23.4965 40.6549C23.3886 40.7627 23.2424 40.8233 23.0899 40.8233Z"
                      fill="white"/>
                    <path
                      d="M20.3766 44.082H11.7316C11.5282 44.082 11.3332 44.0012 11.1894 43.8574C11.0456 43.7136 10.9648 43.5186 10.9648 43.3152C10.9648 43.1119 11.0456 42.9168 11.1894 42.773C11.3332 42.6292 11.5282 42.5485 11.7316 42.5485H20.3766C20.58 42.5485 20.775 42.6292 20.9188 42.773C21.0626 42.9168 21.1433 43.1119 21.1433 43.3152C21.1433 43.5186 21.0626 43.7136 20.9188 43.8574C20.775 44.0012 20.58 44.082 20.3766 44.082Z"
                      fill="white"/>
                    <path
                      d="M23.0919 37.8483H9.62403C9.42067 37.8483 9.22565 37.7675 9.08186 37.6238C8.93807 37.48 8.85728 37.2849 8.85728 37.0816V34.7814C8.78444 34.3692 8.28223 31.7374 7.02861 30.2652C6.87718 30.087 6.68932 29.8819 6.47271 29.6327C4.40634 27.3056 0.104918 22.4636 0.0090747 16.2147C-0.048431 12.381 1.86268 8.02204 4.99291 4.83623C8.05988 1.7175 12.0297 0 16.1548 0C20.6402 0 24.7499 1.75392 27.7249 4.93782C30.443 7.84761 32.0033 11.7235 32.0033 15.5687C32.0033 22.985 28.2022 26.9913 26.1588 29.1458C25.7371 29.5905 25.2138 30.1426 25.1429 30.3343C24.9614 31.208 24.8334 32.0921 24.7595 32.9814C24.7482 33.1381 24.689 33.2874 24.5901 33.4093C24.4911 33.5312 24.357 33.6198 24.2061 33.6631C24.0551 33.7064 23.8945 33.7023 23.746 33.6513C23.5975 33.6004 23.4682 33.505 23.3756 33.3782L18.8345 27.158C18.7145 26.9938 18.6647 26.7887 18.696 26.5877C18.7273 26.3868 18.8371 26.2065 19.0013 26.0865C19.1655 25.9665 19.3706 25.9167 19.5716 25.948C19.7725 25.9792 19.9528 26.0891 20.0728 26.2533L23.4733 30.9055C23.5232 30.6103 23.5826 30.2978 23.6497 29.9873C23.7704 29.4295 24.2516 28.9234 25.0471 28.0839C26.9409 26.0865 30.4698 22.3659 30.4698 15.563C30.4698 8.8137 24.9953 1.52773 16.1548 1.52773C12.4437 1.52773 8.8707 3.08422 6.08551 5.90775C3.22747 8.80987 1.48505 12.7471 1.53681 16.1859C1.62307 21.856 5.66955 26.4085 7.61325 28.5976C7.83944 28.8525 8.03496 29.073 8.1883 29.2589C9.81763 31.1758 10.3505 34.444 10.3716 34.582C10.3777 34.6213 10.3809 34.6611 10.3812 34.7009V36.3091H23.088C23.2914 36.3091 23.4864 36.3899 23.6302 36.5337C23.774 36.6775 23.8548 36.8725 23.8548 37.0758C23.8548 37.2792 23.774 37.4742 23.6302 37.618C23.4864 37.7618 23.2914 37.8426 23.088 37.8426L23.0919 37.8483Z"
                      fill="white"/>
                    <path
                      d="M17.9762 26.2399C17.8513 26.24 17.7299 26.1996 17.6301 26.1246C17.5303 26.0497 17.4576 25.9443 17.423 25.8244C17.3883 25.7045 17.3937 25.5766 17.4381 25.4599C17.4826 25.3433 17.5638 25.2443 17.6694 25.1779L18.6279 24.576C18.6916 24.5306 18.764 24.4987 18.8406 24.4822C18.9171 24.4657 18.9962 24.465 19.073 24.4802C19.1499 24.4954 19.2228 24.5261 19.2873 24.5704C19.3518 24.6148 19.4066 24.6718 19.4483 24.7381C19.49 24.8044 19.5178 24.8785 19.5298 24.9558C19.5419 25.0332 19.538 25.1122 19.5184 25.188C19.4988 25.2639 19.464 25.3349 19.416 25.3968C19.368 25.4586 19.3079 25.5101 19.2394 25.5479L18.2809 26.1517C18.1896 26.2091 18.084 26.2396 17.9762 26.2399Z"
                      fill="white"/>
                    <path
                      d="M17.4365 24.7236C17.3169 24.7237 17.1991 24.6958 17.0922 24.6422C16.9854 24.5886 16.8926 24.5108 16.8211 24.415L14.4788 21.2771C14.4185 21.1964 14.3747 21.1046 14.3498 21.007C14.325 20.9094 14.3197 20.8079 14.3341 20.7082C14.3485 20.6085 14.3824 20.5127 14.4339 20.4261C14.4853 20.3395 14.5533 20.2639 14.634 20.2036C14.7147 20.1434 14.8065 20.0995 14.9041 20.0747C15.0017 20.0499 15.1032 20.0445 15.2029 20.059C15.3026 20.0734 15.3984 20.1073 15.485 20.1587C15.5716 20.2102 15.6472 20.2782 15.7075 20.3589L18.0575 23.4968C18.143 23.6107 18.195 23.7462 18.2078 23.888C18.2206 24.0298 18.1936 24.1724 18.1299 24.2997C18.0662 24.4271 17.9684 24.5342 17.8472 24.6091C17.7261 24.6839 17.5865 24.7236 17.4441 24.7236H17.4365Z"
                      fill="white"/>
                    <path d="M11.1589 22.2739L17.6129 17.2326L12.8994 11.3881L6.44531 16.4294L11.1589 22.2739Z"
                          fill="white"/>
                    <path
                      d="M18.4598 16.9834C18.3738 16.9834 18.2888 16.9642 18.2112 16.927C18.1335 16.8898 18.0652 16.8357 18.0113 16.7687L13.614 11.3171C13.5632 11.2588 13.5247 11.1908 13.5008 11.1172C13.4769 11.0436 13.4681 10.9659 13.4749 10.8888C13.4817 10.8117 13.504 10.7368 13.5405 10.6686C13.5769 10.6003 13.6268 10.5401 13.6871 10.4916C13.7473 10.443 13.8168 10.4072 13.8913 10.3861C13.9657 10.3651 14.0437 10.3593 14.1204 10.3691C14.1972 10.3788 14.2712 10.404 14.338 10.4431C14.4048 10.4822 14.463 10.5343 14.5092 10.5964L18.9065 16.0403C18.9749 16.1246 19.0181 16.2267 19.0309 16.3346C19.0437 16.4425 19.0257 16.5518 18.979 16.6499C18.9323 16.748 18.8587 16.8308 18.7668 16.8888C18.6749 16.9468 18.5685 16.9776 18.4598 16.9776V16.9834Z"
                      fill="white"/>
                    <path
                      d="M10.0067 23.309C9.92063 23.3091 9.83566 23.2898 9.75803 23.2526C9.68039 23.2155 9.61208 23.1614 9.55815 23.0943L5.1628 17.6447C5.06697 17.526 5.02222 17.3741 5.0384 17.2224C5.05458 17.0707 5.13036 16.9316 5.24906 16.8358C5.36777 16.7399 5.51968 16.6952 5.67138 16.7114C5.82308 16.7276 5.96215 16.8033 6.05798 16.922L10.4457 22.3659C10.5135 22.4503 10.5562 22.5522 10.5687 22.6598C10.5813 22.7674 10.5631 22.8763 10.5165 22.974C10.4698 23.0718 10.3965 23.1544 10.3049 23.2123C10.2134 23.2702 10.1074 23.301 9.99904 23.3013L10.0067 23.309Z"
                      fill="white"/>
                  </g>
                  <defs>
                    <clipPath id="clip0_1305:10861">
                      <rect width="32" height="44.0819" fill="white"/>
                    </clipPath>
                  </defs>

                </svg>
                <span class="d-none d-md-inline-block align-middle ps-3">法學電波</span></router-link>
            </h1>
            <!-- PC版左側選單 -->
            <ul class="title-bar d-none d-md-flex">
              <li>
                <router-link class="fs-4 d-block  me-4 text-decoration-none" :to="{ name: 'LawyerSolvation' }">律師媒合
                </router-link>
              </li>
              <li>
                <router-link class="fs-4 d-block  me-4 text-decoration-none" :to="{ name: 'Knowledge' }">法律知識+
                </router-link>
              </li>
              <li>
                <router-link class="fs-4 d-block  text-decoration-none" :to="{ name: 'CommonProblem' }">常見問題
                </router-link>
              </li>
            </ul>
          </div>

          <div class="dropdown d-md-flex align-items-md-center" v-if="isLogin()">
            <div class="header-search d-none d-lg-block me-4" :class="isBottomBanner === true ?'d-lg-none ':''">
            </div>
            <button
              class="d-flex  align-items-center justify-content-between
 btn  py-2 px-3 btn-primary rounded-pill"
              type="button"
              id="dropdownMenuButton2"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <span class="align-middle material-icons text-white">
                menu
              </span>
              <div class="photo-icons-wrap bg-white border rounded-pill position-relative">
            <span>
              <img v-if="this.shot === null" class="rounded rounded-pill mb-3 head-shot" src="../assets/img/member-logo.png" alt="會員頭貼">
             <img v-else  class="rounded rounded-pill head-shot"  :src="this.shot" alt="會員頭貼" >
            </span>
              </div>
            </button>
            <ul class="dropdown-menu dropdown-menu rounded rounded-3" aria-labelledby="dropdownMenuButton2">
              <li v-show="isLawyer">
                <a class="dropdown-item ps-4 pe-11 fs-4" href="#"  @click.prevent="goMemberPage('certification')">資格認證
                  <span class="align-top">
                  <svg width="22" height="19" viewBox="0 0 22 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 19H22L11 0L0 19ZM12 16H10V14H12V16ZM12 12H10V8H12V12Z" fill="black"/>
                  </svg>
                </span>
                </a>
              </li>
              <li><a class="dropdown-item fs-4  ps-4 pe-11 fs-4" href="#" @click.prevent="goMemberPage('center')">會員中心</a></li>
              <li><a class="dropdown-item fs-4  ps-4 pe-11 fs-4" href="#" @click.prevent="goMemberPage('appointmentCenter')">預約管理</a></li>
              <li><a class="dropdown-item fs-4  ps-4 pe-11 fs-4" href="#" @click.prevent="logout">登出帳戶</a></li>
              <li class="d-block d-md-none">
                <router-link class="dropdown-item border-top fs-4 ps-4 pe-7" :to="{ name: 'LawyerSolvation' }">律師媒合
                </router-link>
              </li>
              <li class="d-block d-md-none">
                <router-link class="dropdown-item fs-4 ps-4 pe-7" :to="{ name: 'Knowledge' }">法律知識+</router-link>
              </li>
              <li class="d-block d-md-none">
                <router-link class="dropdown-item fs-4 ps-4 pe-7" :to="{ name: 'CommonProblem' }">常見問題</router-link>
              </li>
            </ul>
          </div>
          <div class="dropdown d-flex" v-else>
            <div class="header-search d-none d-lg-block m4-2" :class="isBottomBanner === true ?'d-lg-none ':''">
            </div>
            <button
              class="d-flex  align-items-center justify-content-between
 btn  py-2 px-3 btn  btn-dark rounded-pill text-white"
              type="button"
              id="dropdownMenuNotLogin"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <span class="align-middle material-icons">
                menu
              </span>
              <span class=" ms-2 text-white">
                未登入
              </span>
            </button>
            <ul
              class="dropdown-menu dropdown-menu rounded rounded-3"
              aria-labelledby="dropdownMenuNotLogin"
            >
              <li class="mt-2">
                <a @click.prevent="$refs.registerModal.showModal()"
                   class="dropdown-item fs-4 ps-4 pe-11"
                   href="#"
                >註冊</a
                >
              </li>
              <li class="mb-2 ">
                <a @click.prevent="$refs.loginModal.showModal()"
                   class="dropdown-item fs-4 ps-4 pe-11"
                   href="#"
                >登入</a
                >
              </li>
              <li class="d-block d-md-none">
                <router-link class="dropdown-item border-top fs-4 ps-4 pe-7" :to="{ name: 'LawyerSolvation' }">律師媒合
                </router-link>
              </li>
              <li class="d-block d-md-none">
                <router-link class="dropdown-item fs-4 ps-4 pe-7" :to="{ name: 'Knowledge' }">法律知識+</router-link>
              </li>
              <li class="d-block d-md-none">
                <router-link class="dropdown-item fs-4 ps-4 pe-7" :to="{ name: 'CommonProblem' }">常見問題</router-link>
              </li>
            </ul>
          </div>

        </div>
      </nav>
    </div>
  </header>
  <RegisterModal ref="registerModal"></RegisterModal>
  <LoginModal ref="loginModal"></LoginModal>

</template>

<script>
import RegisterModal from './modal/RegisterModal'
import LoginModal from './modal/LoginModal'
import { confirmStatus, getMemberPhoto } from '@/util/api'

export default {
  components: {
    RegisterModal,
    LoginModal
  },
  data () {
    return {
      token: '',
      isBottomBanner: true,
      isLawyer: false,
      pages: ['Index', 'Knowledge', 'LawyerSolvation'],
      scrollPosition: null,
      shot: ''
    }
  },
  created () {
    this.changeNavColor(this.$route.name)
  },
  methods: {
    changeNavColor (page) {
      if (this.pages.includes(page)) {
        this.isBottomBanner = true
      } else {
        this.isBottomBanner = false
      }
    },
    goMemberPage (page) {
      confirmStatus()
        .then((res) => {
          this.isLawyer = res.data.isLawyer
          switch (page) {
            case 'center':
              this.isLawyer === true ? this.$router.push({ name: 'LawyerCenter' }) : this.$router.push({ name: 'PeopleCenter' })
              break
            case 'appointmentCenter':
              this.isLawyer === true ? this.$router.push({ name: 'LawyerAppointmentCenter' }) : this.$router.push({ name: 'PeopleAppointmentCenter' })
              break
            case 'certification':
              this.$router.push({ name: 'LawyerCertification' })
              break
          }
        })
        .catch((error) => {
          console.error(error)
        })
    },
    getMemberPhoto () {
      getMemberPhoto()
        .then((res) => {
          this.shot = res.data.shot
        })
        .catch((error) => {
          console.error(error)
        })
    },
    logout () {
      localStorage.clear()
      this.$store.commit('updateToken', '')
      this.$router.push({ name: 'Index' })
    },
    isLogin () {
      this.token = localStorage.getItem('lawavaToken')
      if (this.token !== null) {
        this.getMemberPhoto()
      }
      return this.token !== null
    }
  },
  watch: {
    '$store.state.nowPage': function () {
      this.changeNavColor(this.$store.state.nowPage)
    },
    '$store.state.token': function () {
      this.isLogin()
      if (this.$store.state.token) {
        this.goMemberPage()
      }
    }
  }
}
</script>
