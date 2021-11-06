<template>
<div class="mb-7 bg-primary d-block d-md-none">
  <ul class="d-flex justify-content-around align-items-center center-nav">
    <li class="py-3"  v-if="isLawyer">
      <a  href="#" @click.prevent="goMemberPage('certification')">
        資格認證
        <span class="material-icons align-top">
          warning
        </span>
      </a>
    </li>
    <li class="py-3">
      <a  href="#" @click.prevent="goMemberPage('editPage')">
    個人資料
    </a>
    </li>
    <li class="py-3">
      <a  href="#" @click.prevent="goMemberPage('passwordSetting')">
    帳戶安全
      </a>
    </li>
    <li class="py-3">
      <a  href="#" @click.prevent="goMemberPage('appointmentCenter')">
    預約中心
      </a>
    </li>
  </ul>
</div>
</template>

<script>
import { confirmStatus } from '@/util/api'

export default {
  data () {
    return {
      isLawyer: false
    }
  },
  created () {
    this.goMemberPage()
  },
  methods: {
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
            case 'passwordSetting':
              this.isLawyer === true ? this.$router.push({ name: 'LawyerPasswordSetting' }) : this.$router.push({ name: 'PeoplePasswordSetting' })
              break
            case 'editPage':
              this.isLawyer === true ? this.$router.push({ name: 'LawyerEditPage' }) : this.$router.push({ name: 'PeopleEditPage' })
              break
            case 'certification':
              this.$router.push({ name: 'LawyerCertification' })
              break
          }
        })
        .catch((error) => {
          console.error(error)
        })
    }
  }
}
</script>
