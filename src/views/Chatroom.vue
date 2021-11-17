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
              <span>{{time}}</span>
              <button class="btn btn-secondary ms-3" type="button" @click="this.endCheckModal.show()">
                                <span class="material-icons align-middle">
                                    logout
                                    </span>
                結束諮詢
              </button>
            </div>
          </div>
          <div class="chatroom-content flex-grow-1 py-3 px-4" id="chatroomContent">
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
          <div class=" d-flex rounded-bottom-3 py-3 px-4 bg-primary shadow-sm align-items-center">
            <input id="chatroomInput" type="text" class="form-control rounded rounded-3 py-2 me-3" placeholder="輸入訊息"
                   v-model="inputMessage" @keydown.stop.prevent.enter="sendMessage">
            <button type="button" class="btn btn-secondary send-btn rounded-pill" @click="sendMessage">
              <span class="material-icons align-middle"> send </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </main>
  <Footer></Footer>
<!--  確認結束諮詢 modal-->
  <div class="modal fade" id="endCheckModal" tabindex="-1"
       aria-labelledby="endCheckModalLabel" aria-hidden="true" ref="endCheckModal">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="position-relative">
          <button type="button" class="m-1 m-mb-3 btn  fs-4 position-absolute top-0 end-0"
                  data-bs-dismiss="modal" aria-label="Close">
            <svg width="14" height="14"
                 viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M14 1.41L12.59 0L7 5.59L1.41 0L0 1.41L5.59 7L0 12.59L1.41 14L7 8.41L12.59 14L14 12.59L8.41 7L14 1.41Z"
                fill="black"/>
            </svg>
          </button>
          <h2 class="modal-title text-center mt-3 mt-md-7 mb-2 text-secondary" id="endCheckModalLabel">
            是否確定要結束諮詢</h2>
          <div class="line bg-primary mb-3"></div>
        </div>
        <div class="modal-body">
          <div class="row ">
            <div class="col-md-8 offset-md-2 text-center">
              您是否確定要結束此次諮詢
            </div>
          </div>
        </div>
        <div class="modal-footer border-0  d-flex justify-content-center mb-md-7">
          <button type="button" class="btn btn-outline-secondary me-2" data-bs-dismiss="modal">
            <span class="material-icons align-middle">close</span>
            取消
          </button>
          <button type="button" class="btn btn-secondary" @click="endChat">
            <span class="material-icons  align-middle">done</span>
            確定
          </button>
        </div>
      </div>
    </div>
  </div>
  <!--  評分 modal-->
  <div class="modal fade" id="scoreModal" ref="scoreModal" tabindex="-1"  aria-labelledby="scoreModal"
       aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="position-relative">
          <button type="button" class="m-1 m-md-3 btn  fs-4 position-absolute top-0 end-0"
                  data-bs-dismiss="modal" aria-label="Close">
            <svg width="14" height="14"
                 viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M14 1.41L12.59 0L7 5.59L1.41 0L0 1.41L5.59 7L0 12.59L1.41 14L7 8.41L12.59 14L14 12.59L8.41 7L14 1.41Z"
                fill="black"/>
            </svg>
          </button>
          <h2 class="modal-title text-center mt-3 mt-md-7 mb-2 text-secondary" id="scoreModalLabel">
            回饋評價</h2>
          <div class="line bg-primary "></div>
        </div>
        <div class="modal-body pt-5">
          <div class="row">
            <div class="col  d-flex  flex-column align-items-center offset-md-1 col-md-10">
              <div v-if="isLawyer" class="d-flex flex-wrap mb-3 justify-content-center">
                <p>感謝您選擇使用本媒合平台，請與我們分享您的使用經驗，幫我們製作出更符合您需求的法學電波</p>
                <p>媒合過程滿意程度：</p>
                <Rating class="text-primary" v-model="star" :cancel="false" />
              </div>
              <div v-else class="d-flex flex-wrap mb-3 justify-content-center">
                <p>感謝您選擇使用法學電波，請與我們分享您此次律師諮詢體驗，回饋給律師一起創造更好的體驗服務</p>
                <p>律師諮詢滿意程度：</p>
                <Rating class="text-primary" v-model="star" :cancel="false" />
              </div>
              <textarea class="rounded" cols="30" rows="4" v-model="opinion"></textarea>
            </div>
          </div>
        </div>
        <div class="modal-footer border-0 text-center d-flex justify-content-center mb-7">
          <button type="button" class="btn btn-outline-secondary " data-bs-dismiss="modal">
            下次再填
          </button>
          <button type="button" class="btn btn-secondary" @click="putScore">
            送出評價
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LawyerSidebar from '../components/centerComponents/lawyer/LawyerSidebar'
import Footer from '../components/Footer'
import Header from '../components/Header'
import CenterNav from '../components/centerComponents/CenterNav'
import PeopleSidebar from '../components/centerComponents/people/PeopleSidebar'
import { confirmStatus, getChatRoomInformation, putScore } from '@/util/api'
import Modal from 'bootstrap/js/dist/modal'

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
      name: '',
      time: '',
      scoreModal: {},
      endCheckModal: {},
      star: 0,
      opinion: '',
      intervalID: ''
    }
  },
  created () {
    this.checkStatus()
    this.id = this.$route.query.id
    this.getData()
    this.intervalID = setInterval(() => this.setTime(), 1000)
  },
  mounted () {
    this.initData()
    this.scoreModal = new Modal(this.$refs.scoreModal)
    this.endCheckModal = new Modal(this.$refs.endCheckModal)
  },
  methods: {
    initData () {
      const chat = $.connection.chatHub
      $.connection.hub.url = 'https://lawave.rocket-coding.com/signalr'
      chat.client.addNewMessageToPage = (name) => {
        const obj = {}
        obj.welcomeMessage = `歡迎${name}進入聊天室`
        console.log(obj)
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
        const chatroomContent = $('#chatroomContent')
        chatroomContent.animate({ scrollTop: $(document).height() }, 'slow')
      }
      $.connection.hub.start().done(() => {
        this.chat = chat
        chat.server.start(Number(this.id), this.isLawyer)
        console.log('start')
      })
    },
    getData () {
      getChatRoomInformation(`api/chatuserinfo/${this.id}`)
        .then((res) => {
          console.log(res)
          this.userData = res.data.Senderinfo[0]
          this.otherSideData = res.data.Recipientinfo[0]
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
    setTime () {
      const startTime = Number(this.$route.query.startTimestamp)
      const nowDate = new Date().getTime()
      const endTime = startTime + 3600000
      const reciprocalTime = endTime - nowDate
      let minute = (parseInt(reciprocalTime / 1000 / 60)).toString()
      if (minute < 10) {
        minute = '0' + minute
      }
      let seconds = (parseInt(reciprocalTime / 1000) - minute * 60).toString()
      if (seconds < 10) {
        seconds = '0' + seconds
      }
      this.time = minute + ':' + seconds
      if (parseInt(minute) === 0 && parseInt(seconds) === 0) {
        this.endChat()
      }
    },
    sendMessage () {
      if (this.inputMessage !== '') {
        this.chat.server.privateSendMsg(Number(this.id), this.inputMessage, this.isLawyer)
      }
      this.inputMessage = ''
    },
    endChat () {
      this.time = '00 : 00'
      clearInterval(this.intervalID)
      this.endCheckModal.hide()
      $('#chatroomInput').attr('readonly', 'readonly')
      this.scoreModal.show()
    },
    putScore () {
      let obj = {}
      if (this.star === 0 && this.opinion === '') {
        window.showToast.showErrorToast('請填寫評分')
        return
      }
      if (this.isLawyer) {
        obj = {
          lawaveStar: this.star,
          lawaveOpinion: this.opinion
        }
      } else {
        obj = {
          lawyerStar: this.star,
          lawyerOpinion: this.opinion
        }
      }
      putScore(`api/lawyerOpinion/${this.id}`, obj)
        .then((res) => {
          console.log(res)
          this.scoreModal.hide()
        })
        .catch((error) => {
          console.error(error)
        })
    }
  }

}
</script>
