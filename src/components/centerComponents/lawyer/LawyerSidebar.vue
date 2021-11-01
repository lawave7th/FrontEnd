<template>

    <div class="border d-none d-md-block border-primary d-flex flex-column align-items-center rounded rounded-3 shadow-md px-4">
      <div class="lawyer-photo img-fluid position-relative mx-4 my-5">
        <label for="photo-upload">
          <img class="rounded-pill" src="../../../assets/img/lawyer-photo.jpeg" alt="律師照片">
        </label>
        <input class="d-none" type="file" id="photo-upload"/>
      </div>
      <div class="lawyer-information text-center">
        <p class="fs-7 mb-1 text-info">
          Welcome
        </p>
        <h3 class="fs-4 text-secondary">Emma Corrin</h3>
        <div class="star_box d-flex align-items-center justify-content-center mb-md-6">
          <Rating class="text-primary" :modelValue="lawyerData.starAvg" :readonly="true" :stars="5" :cancel="false" />
          <span class="fs-7 ms-1">({{ lawyerData.starAvg }})</span>
        </div>
      </div>
      <!-- 會員中心點擊欄位 -->
      <ul class="center-side-menu mb-5">
        <li>
          <router-link class="d-block px-3 py-4 border-bottom border-top border-2" to="lawyer-certification">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20 0C8.96 0 0 8.96 0 20C0 31.04 8.96 40 20 40C31.04 40 40 31.04 40 20C40 8.96 31.04 0 20 0ZM20 33C18.34 33 17 31.66 17 30H23C23 31.66 21.66 33 20 33ZM30 28H10V26L12 24V18.78C12 14.54 14.06 10.94 18 10V9C18 7.86 18.86 7 20 7C21.14 7 22 7.86 22 9V10C25.94 10.94 28 14.56 28 18.78V24L30 26V28Z" fill="#172A39"/>
            </svg>
            <span class="fs-4 ms-2 align-middle text-secondary pe-1">資格認證</span>
            <svg width="22" height="19" viewBox="0 0 22 19" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 19H22L11 0L0 19ZM12 16H10V14H12V16ZM12 12H10V8H12V12Z" fill="#C4C4C4"/>
            </svg>
          </router-link>
        </li>
        <li>
          <router-link class="d-block px-3 py-4 border-bottom border-2 " to="lawyer-edit-page">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20 0C8.96 0 0 8.96 0 20C0 31.04 8.96 40 20 40C31.04 40 40 31.04 40 20C40 8.96 31.04 0 20 0ZM20 6C23.32 6 26 8.68 26 12C26 15.32 23.32 18 20 18C16.68 18 14 15.32 14 12C14 8.68 16.68 6 20 6ZM20 34.4C15 34.4 10.58 31.84 8 27.96C8.06 23.98 16 21.8 20 21.8C23.98 21.8 31.94 23.98 32 27.96C29.42 31.84 25 34.4 20 34.4Z" fill="#172A39"/>
            </svg>
            <span class="fs-4 ms-2 align-middle text-secondary">個人資料</span>
          </router-link>
        </li>
        <li>
          <router-link class="d-block px-3 py-4 border-bottom border-2" to="lawyer-password-setting">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="20" cy="20" r="20" fill="#172A39"/>
              <path d="M28.5902 18.0001H20.6502C19.7002 15.3101 16.8902 13.5001 13.7702 14.1201C11.4802 14.5801 9.62018 16.4201 9.14018 18.7001C8.32018 22.5801 11.2602 26.0001 15.0002 26.0001C17.6102 26.0001 19.8302 24.3301 20.6502 22.0001H21.0002L22.2902 23.2901C22.6802 23.6801 23.3102 23.6801 23.7002 23.2901L25.0002 22.0001L26.2902 23.2901C26.6802 23.6801 27.3202 23.6801 27.7102 23.2901L30.3002 20.6801C30.6902 20.2901 30.6902 19.6501 30.2902 19.2601L29.3002 18.2901C29.1002 18.1001 28.8502 18.0001 28.5902 18.0001ZM15.0002 23.0001C13.3502 23.0001 12.0002 21.6501 12.0002 20.0001C12.0002 18.3501 13.3502 17.0001 15.0002 17.0001C16.6502 17.0001 18.0002 18.3501 18.0002 20.0001C18.0002 21.6501 16.6502 23.0001 15.0002 23.0001Z" fill="white"/>
            </svg>
            <span class="fs-4 ms-2 align-middle text-secondary">帳戶安全</span>
          </router-link>
        </li>
        <li>
          <router-link class="d-block px-3 py-4 border-bottom border-2"  to="lawyer-appointment-center">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="20" cy="20" r="20" fill="#172A39"/>
              <path d="M20 30H13C11.89 30 11 29.1 11 28L11.01 14C11.01 12.9 11.89 12 13 12H14V11C14 10.45 14.45 10 15 10C15.55 10 16 10.45 16 11V12H24V11C24 10.45 24.45 10 25 10C25.55 10 26 10.45 26 11V12H27C28.1 12 29 12.9 29 14V20H27V18H13V28H20V30ZM30.13 24.99L30.84 24.28C31.23 23.89 31.23 23.26 30.84 22.87L30.13 22.16C29.74 21.77 29.11 21.77 28.72 22.16L28.01 22.87L30.13 24.99ZM29.42 25.7L24.41 30.71C24.23 30.89 23.97 31 23.71 31H22.5C22.22 31 22 30.78 22 30.5V29.29C22 29.02 22.11 28.77 22.29 28.58L27.3 23.57L29.42 25.7Z" fill="white"/>
            </svg>
            <span class="fs-4 ms-2 align-middle text-secondary">預約中心</span>
          </router-link>
        </li>
      </ul>
    </div>
</template>

<script>
import { getLawyerSidebar } from '@/util/api'
export default {
  data () {
    return {
      lawyerData: {}
    }
  },
  mounted () {
    this.getDeta()
  },
  methods: {
    getDeta () {
      getLawyerSidebar()
        .then((res) => {
          console.log(res)
          this.lawyerData = res.data
          if (this.lawyerData.starAvg === null) {
            this.lawyerData.starAvg = 0
          } else {
            this.lawyerData.starAvg = Math.ceil(res.data.starAvg)
          }
        })
        .catch((error) => { console.error(error) })
    }
  }
}
</script>
