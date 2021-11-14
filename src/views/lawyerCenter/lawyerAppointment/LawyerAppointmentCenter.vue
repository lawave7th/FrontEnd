<template>
  <div class="border border-primary rounded rounded-3 py-2 px-3 px-md-7 py-md-3 mb-6 mb-md-7 ">
    <!-- 預約中心點擊按鈕 -->
    <ul class="row appointment-menu justify-content-between">
      <li class="col border-end text-center " @click.prevent="changeTabs('appointmentTime')"
          :class="activeClass === 'appointmentTime' ? 'appointment-bar-active' : ''"><router-link
        class="appointment-bar-fs rounded-start-3 text-secondary" :to="{name:'LawyerAppointmentTime'}"
        >可被預約</router-link></li>
      <li class="col border-end text-center ps-1"
          :class="activeClass === 'pendingReview' ? 'appointment-bar-active' : ''" @click.prevent="changeTabs('pendingReview')"><router-link
        class="appointment-bar-fs text-secondary"  :to="{name:'LawyerPendingReview'}">未審核</router-link></li>
      <li class="col border-end text-center ps-1" @click.prevent="changeTabs('booked')" :class="activeClass === 'booked' ? 'appointment-bar-active' : ''"><router-link
        class="appointment-bar-fs text-secondary"  :to="{name:'LawyerBooked'}">已預約</router-link></li>
      <li class="col border-end text-center ps-1"
          :class="activeClass === 'appointmentRecord' ? 'appointment-bar-active' : ''" @click.prevent="changeTabs('appointmentRecord')"><router-link
        class="appointment-bar-fs text-secondary"  :to="{name:'LawyerAppointmentRecord'}">預約紀錄</router-link>
      </li>
      <li class="col text-center ps-1" :class="activeClass === 'blockMembersList' ? 'appointment-bar-active' : ''" @click.prevent="changeTabs('blockMembersList')"><router-link
        class="appointment-bar-fs"  :to="{name:'LawyerBlacklist'}">封鎖名單</router-link></li>
    </ul>
  </div>
    <router-view />

</template>

<script>
export default {
  data () {
    return {
      activeClass: 'appointmentTime'
    }
  },
  created () {
    console.log(this.$route.name)
    switch (this.$route.name) {
      case 'LawyerAppointmentTime':
        this.activeClass = 'appointmentTime'
        break
      case 'LawyerPendingReview':
        this.activeClass = 'pendingReview'
        break
      case 'LawyerBooked':
        this.activeClass = 'booked'
        break
      case 'LawyerBlacklist':
        this.activeClass = 'blockMembersList'
        break
      case 'LawyerAppointmentRecord':
        this.activeClass = 'appointmentRecord'
        break
    }
  },
  methods: {
    changeTabs (item) {
      this.activeClass = item
    }
  }
}
</script>
