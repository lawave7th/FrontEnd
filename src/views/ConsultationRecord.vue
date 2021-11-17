<template>

  <Header></Header>
  <main>
    <CenterNav></CenterNav>
    <div class="container pb-11">
      <div class="row justify-content-between position-relative mt-md-11">
        <div class="col-md-3">
          <LawyerSidebar v-if="isLawyer"></LawyerSidebar>
          <PeopleSidebar v-else></PeopleSidebar>
        </div>
        <div
          class="col-12 col-md-9 d-flex flex-column justify-content-between border border-primary rounded rounded-3 shadow-sm g-0">
          <div
            class="d-flex  justify-content-between  align-items-center rounded-top-3 py-3 px-4 bg-primary shadow-sm">
            <div class="chatroom-name d-flex align-items-center">
              <img v-if="otherSideData.shot === null" class="rounded rounded-pill chatroom-img" src="../assets/img/member-logo.png" alt="聊天室對方照片">
              <img v-else  class="rounded rounded-pill chatroom-img"  :src="otherSideData.shot" alt="聊天室對方照片" >
              <h3 class="ms-3 mb-0">{{otherSideData.lastName}}{{otherSideData.firstName}}</h3>
            </div>
              <button class="btn btn-secondary ms-3" type="button" @click="goAppointmentRecord">
                                <span class="material-icons align-middle">
                                    logout
                                    </span>
                返回列表
              </button>
            </div>
          <div class="chatroom-content flex-grow-1 py-3 px-4">
            <div class="message-list" v-for="item in messageList" :key="item">
              <div class="row mb-3"  v-if = "item.name === `${this.otherSideData.lastName}${this.otherSideData.firstName}`">
                <div class="col-auto">
                  <img v-if="item.shot === null" class="rounded rounded-pill chatroom-img" src="../assets/img/member-logo.png" alt="聊天室對方照片">
                  <img v-else  class="rounded rounded-pill chatroom-img"  :src="item.shot" alt="聊天室對方照片" >
                </div>
                <div class="col-auto">
                  <h4 class="fs-7">{{item.name}}</h4>
                  <div class="message-txt">
                    <p class="p-1 other-txt d-inline-block">{{item.message}}
                    </p>
                    <span class="fs-7">  {{item.msgTime}}</span>
                  </div>
                </div>
              </div>
              <div class="row mb-3 flex-row-reverse text-end" v-else>
                <div class="col-12">
                  <h4 class="fs-7 d-none">{{item.name}}</h4>
                  <div class="message-txt">
                    <span class="fs-7">  {{item.msgTime}}</span>
                    <p class="p-1 user-txt d-inline-block">{{item.message}}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>
  </main>
  <Footer></Footer>

</template>

<script>
import LawyerSidebar from '../components/centerComponents/lawyer/LawyerSidebar'
import Footer from '../components/Footer'
import Header from '../components/Header'
import CenterNav from '../components/centerComponents/CenterNav'
import PeopleSidebar from '../components/centerComponents/people/PeopleSidebar'
import { confirmStatus, getChatHistory } from '@/util/api'
export default {
  components: {
    Header,
    PeopleSidebar,
    LawyerSidebar,
    Footer,
    CenterNav
  },
  data () {
    return {
      isLawyer: false,
      userData: {},
      otherSideData: {},
      messageList: []
    }
  },
  created () {
    this.checkStatus()
    this.id = this.$route.query.id
    this.getData()
  },
  methods: {
    checkStatus () {
      confirmStatus()
        .then((res) => {
          this.isLawyer = res.data.isLawyer
        })
        .catch((error) => {
          console.error(error)
        })
    },
    getData () {
      getChatHistory(`api/chatHistory/${this.id}`)
        .then((res) => {
          console.log(res)
          this.userData = res.data.Senderinfo[0]
          this.otherSideData = res.data.Recipientinfo[0]
          res.data.message.forEach((item) => {
            const obj = {}
            obj.shot = this.otherSideData.shot
            obj.name = item.name
            obj.message = item.Message
            obj.msgTime = item.MsgTime.substring(11, 16)
            this.messageList.push(obj)
          })
          this.messageList.reverse()
        })
        .catch((error) => {
          console.error(error)
        })
    },
    goAppointmentRecord () {
      this.isLawyer === true ? this.$router.push({ name: 'LawyerAppointmentRecord' }) : this.$router.push({ name: 'PeopleAppointmentCenter' })
    }
  }
}
</script>
