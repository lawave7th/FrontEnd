<template>
  <div class="border d-none d-md-block border-primary d-flex flex-column align-items-center rounded rounded-3 shadow-md ">
    <div class="people-photo img-fluid text-center my-5 ">
      <label for="photo-upload">
        <img v-if="!image" class="rounded rounded-pill mug-shot-md" src="../../../assets/img/member-logo.png" alt="民眾照片">
        <img v-else  name="file" class="rounded rounded-pill mug-shot-md"  :src="image" alt="民眾照片" width="200" height="200">
      </label>
      <input class="d-none" type="file" id="photo-upload" ref="peoplePhoto" @change="uploadFile"/>
    </div>
    <div class="people-information text-center">
      <p class="fs-7 mb-1 text-info">
        Welcome
      </p>
      <h3 class="fs-4 text-secondary">{{peopleData.lastName}}{{peopleData.firstName}}</h3>
      <router-link :to="{ name : 'PeopleFocus'}" class="text-secondary">我的關注 <span class="fs-7">({{this.peopleData.collection}})</span></router-link>
    </div>
    <!-- 會員中心點擊欄位 -->
    <ul class="center-side-menu mb-5 px-4">
      <li>
        <router-link class="d-block px-2 py-4 border-bottom border-2" :to="{name:'PeopleEditPage'}">
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 0C8.96 0 0 8.96 0 20C0 31.04 8.96 40 20 40C31.04 40 40 31.04 40 20C40 8.96 31.04 0 20 0ZM20 6C23.32 6 26 8.68 26 12C26 15.32 23.32 18 20 18C16.68 18 14 15.32 14 12C14 8.68 16.68 6 20 6ZM20 34.4C15 34.4 10.58 31.84 8 27.96C8.06 23.98 16 21.8 20 21.8C23.98 21.8 31.94 23.98 32 27.96C29.42 31.84 25 34.4 20 34.4Z" fill="#172A39"/>
          </svg>
          <span class="fs-4 ms-2 align-middle text-secondary">個人資料</span>
        </router-link>
      </li>
      <li>
        <router-link class="d-block px-2 py-4 border-bottom border-2" :to="{name:'PeoplePasswordSetting'}">
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="20" cy="20" r="20" fill="#172A39"/>
            <path d="M28.5902 18.0001H20.6502C19.7002 15.3101 16.8902 13.5001 13.7702 14.1201C11.4802 14.5801 9.62018 16.4201 9.14018 18.7001C8.32018 22.5801 11.2602 26.0001 15.0002 26.0001C17.6102 26.0001 19.8302 24.3301 20.6502 22.0001H21.0002L22.2902 23.2901C22.6802 23.6801 23.3102 23.6801 23.7002 23.2901L25.0002 22.0001L26.2902 23.2901C26.6802 23.6801 27.3202 23.6801 27.7102 23.2901L30.3002 20.6801C30.6902 20.2901 30.6902 19.6501 30.2902 19.2601L29.3002 18.2901C29.1002 18.1001 28.8502 18.0001 28.5902 18.0001ZM15.0002 23.0001C13.3502 23.0001 12.0002 21.6501 12.0002 20.0001C12.0002 18.3501 13.3502 17.0001 15.0002 17.0001C16.6502 17.0001 18.0002 18.3501 18.0002 20.0001C18.0002 21.6501 16.6502 23.0001 15.0002 23.0001Z" fill="white"/>
          </svg>
          <span class="fs-4 ms-2 align-middle text-secondary">帳戶安全</span>
        </router-link>
      </li>
      <li>
        <router-link class="d-block px-2 py-4 border-bottom border-2"  :to="{name:'PeopleAppointmentCenter'}">
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
import { getMemberSidebar, getMemberPhoto } from '@/util/api'
export default {
  data () {
    return {
      peopleData: {},
      image: ''
    }
  },
  mounted () {
    this.getDeta()
    this.getPhotoData()
  },
  methods: {
    getPhotoData () {
      getMemberPhoto()
        .then((response) => {
          console.log(response.data)
          this.image = response.data.shot
        }).catch((error) => {
          console.log(error)
        })
    },
    getDeta () {
      getMemberSidebar()
        .then((res) => {
          this.peopleData = res.data
          this.presetDataStatus(res)
        })
        .catch((error) => { console.error(error) })
    },
    presetDataStatus (res) {
      if (this.peopleData.firstName === null && this.peopleData.lastName === null) {
        this.peopleData.firstName = '尚未填寫名稱'
        this.peopleData.lastName = ''
      }
    },
    uploadFile (event) {
      const file = event.target.files.item(0)
      const reader = new FileReader()
      if (/\.(jpe?g|png|gif)$/i.test(file.name)) {
        reader.addEventListener('load', (event) => {
          this.image = event.target.result
        })
        reader.readAsDataURL(file)
        this.onSubmit()
      }
    },
    onSubmit () {
      const formData = new FormData()
      formData.append('file', this.$refs.peoplePhoto.files[0])
      console.log(Object.fromEntries(formData))
      const token = localStorage.getItem('lawavaToken')
      this.axios({
        method: 'put',
        url: 'https://lawave.rocket-coding.com/mem/shotPhoto',
        data: formData,
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${token}`
        }
      }).then((response) => {
        console.log(response.data)
      }).catch((error) => {
        window.showToast.showErrorToast(error.response.data.Message)
      })
    }
  }
}
</script>
