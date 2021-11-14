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
            <div class="chatroom-name d-flex align-items-center" id="test">
              <img v-if="otherSideData.shot === null" class="rounded rounded-pill chatroom-img" src="../assets/img/member-logo.png" alt="聊天室對方照片">
              <img v-else  class="rounded rounded-pill chatroom-img"  :src="otherSideData.shot" alt="聊天室對方照片" >
              <h3 class="ms-3 mb-0">{{otherSideData.lastName}}{{otherSideData.firstName}}</h3>
            </div>
            <div class="chatroom-time">
                            <span class="material-icons align-middle">
                                alarm
                                </span>
              <span>59:00</span>
              <button class="btn btn-secondary ms-3" type="button">
                                <span class="material-icons align-middle">
                                    logout
                                    </span>
                結束諮詢
              </button>
            </div>
          </div>
          <div class="chatroom-content flex-grow-1 py-3 px-4" ref="chatroomContent">
            <div class="system-hint d-flex flex-column align-items-center" v-for="item in welcomeMessageList" :key="item">
              <p class="d-inline-block rounded-pill border border-1 me-2 py-1 px-3">{{item.welcomeMessage}}
              </p>
            </div>
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
                <div class="col-8">
                  <h4 class="fs-7 d-none">{{item.name}}</h4>
                  <div class="message-txt">
                    <span class="fs-7">  {{item.msgTime}}</span>
                    <p class="p-1 user-txt d-inline-block">{{item.message}}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="chatroom-input d-flex rounded-bottom-3 py-3 px-4 bg-primary shadow-sm align-items-center">
            <input type="text" class="form-control rounded rounded-3 py-2 me-3" placeholder="輸入訊息"
                   v-model="inputMessage">
            <button type="button" class="btn btn-secondary send-btn rounded-pill" @click="sendMessage">
              <span class="material-icons align-middle"> send </span>
            </button>
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
import { confirmStatus, getChatRoomInformation } from '@/util/api'

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
      inputMessage: '',
      connection: '',
      chat: null,
      messageList: [],
      id: '',
      userData: {},
      otherSideData: {},
      welcomeMessageList: [],
      name: ''
    }
  },
  created () {
    this.checkStatus()
    this.id = this.$route.query.id
    this.getData()
    this.initData()
  },
  methods: {
    initData () {
      const chat = $.connection.chatHub
      $.connection.hub.url = 'https://lawave.rocket-coding.com/signalr'
      $.connection.hub.start().done(() => {
        console.log('start')
        this.chat = chat
        chat.server.start(Number(this.id), this.isLawyer)
      })
      chat.client.addNewMessageToPage = (name) => {
        const obj = {}
        obj.welcomeMessage = `歡迎${name}進入聊天室`
        this.welcomeMessageList.push(obj)
      }
      chat.client.register = (id) => {
        console.log('register：' + id)
      }
      chat.client.topople = (name, message, msgTime) => {
        const obj = {}
        obj.shot = this.otherSideData.shot
        obj.name = name
        obj.message = message
        obj.msgTime = msgTime
        this.messageList.push(obj)
        // const chatroomContent = this.$refs.chatroomContent
        // chatroomContent.scrollTop = chatroomContent.scrollHeight
      }
    },
    getData () {
      getChatRoomInformation(`api/chatuserinfo/${this.id}`)
        .then((res) => {
          console.log(res)
          this.userData = res.data.Recipientinfo[0]
          this.otherSideData = res.data.Senderinfo[0]
        })
        .catch((error) => {
          console.error(error)
        })
    },
    checkStatus () {
      confirmStatus()
        .then((res) => {
          this.isLawyer = res.data.isLawyer
        })
        .catch((error) => {
          console.error(error)
        })
    },
    sendMessage () {
      if (this.inputMessage !== '') {
        this.chat.server.privateSendMsg(Number(this.id), this.inputMessage, this.isLawyer)
      }
      this.inputMessage = ''
    }
  }

}
</script>
