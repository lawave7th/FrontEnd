<template>
  <!-- 最新評價 -->
  <div class="new-evaluation mb-5">
    <div class="d-flex justify-content-between mb-3 align-items-end">
      <h3 class="text-secondary">最新評價</h3>
      <button type="button" class="btn btn-outline-secondary rounded-3 py-1 fs-7" @click="this.$router.push({ name: 'LawyerAppointmentRecord' })">查看更多評價
        <span class="material-icons align-middle fs-7">chevron_right</span>
      </button>
    </div>

    <div class="border border-primary rounded rounded-3 px-4 px-md-6 py-3 py-md-4" >
      <div class="row" v-if="scoreData === null">
        <h3>目前尚無評分資料唷</h3>
      </div>
      <div class="row" v-else>
        <div class="col-12 col-md-3 d-flex justify-content-center d-md-block">
          <img v-if="scoreData.shot === null" class="rounded rounded-pill mug-shot-md"
               src="../../assets/img/member-logo.png" alt="評價民眾照片">
          <img v-else class="rounded rounded-pill mug-shot-md" :src="scoreData.shot" alt="評價民眾照片">
        </div>
        <div class="col-12 col-md-9 text-center text-md-start ">
          <p class="fs-7 mb-1 text-info">{{scoreData.time}}</p>
          <h3>{{scoreData.name}}</h3>
          <div class="d-flex flex-column flex-md-row justify-content-between align-items-center mb-2">
            <Rating class="text-primary" v-model="lawyerStar" :readonly="true" :stars="5" :cancel="false" />
            <ul class="lawyer-tags d-flex flex-wrap justify-content-center text-white">
              <li v-for="(caseItem , index ) in scoreData.caseType" :key="index"
                  class="rounded-pill border border-1 bg-secondary me-2 fs-7 py-1 px-3">
                <div v-if="scoreData.caseType.length > index">{{scoreData.caseType[index]}}</div>
              </li>
            </ul>
          </div>
          <p>{{scoreData.lawyerOpinion}}
          </p>
        </div>
      </div>
    </div>
  </div>

  <div class="recent-appointment">
    <h3 class="mb-3 text-secondary">近期預約</h3>

    <ul>
      <li v-for="(item , index) in bookedData.data" :key="index"  :class="index%2===0? '':'bg-primary-shallow'"
          class="row flex-column flex-md-row border border-primary m-0 justify-content-md-between rounded rounded-3 px-4 px-md-7  mb-4 py-3 align-items-md-center">
        <div class="col-12 col-md-3">
          <h4 class="mb-2 text-secondary">
            {{item.lastName}}{{item.firstName}}
          </h4>
          <p class="m-0">{{item.date}} {{item.startTime}}-{{item.endTime}}</p>
        </div>
        <div class="col-12 col-md-6">
          <ul class="lawyer-tags d-flex flex-wrap justify-content-start">
            <li v-for="(caseItem , index ) in item.caseType" :key="index"
                class="rounded-pill border border-1 bg-secondary me-2 fs-7 py-1 px-3 text-white">
              <div v-if="item.caseType.length > index">{{item.caseType[index]}}</div>
            </li>
          </ul>
          <p>{{ item.caseInfo }}</p>
        </div>
        <div class="col-12 col-md-3 d-flex justify-content-end" >
                       <button v-if="item.timestamp / 1000 / 60 > 10" type="button" class="btn btn-outline-dark" @click="getId(item.id)">
                         <span class="material-icons align-middle">circle_notifications</span>
                         預約提醒
                       </button>
          <button v-else type="button" class="btn btn-secondary" @click="goChatRoom(item.id , item.startTimestamp)">
            <span class="material-icons align-middle">forum</span>
            線上諮詢
          </button>
        </div>

      </li>
    </ul>
  </div>
  <!--   會員提醒 modal -->
  <div class="modal fade" id="memberReminderModal" ref="memberReminderModal" tabindex="-1"  aria-labelledby="memberReminderModal"
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
          <h2 class="modal-title text-center mt-3 mt-md-7 mb-2 text-secondary" id="memberReminderLabel">
            傳送預約提醒</h2>
          <div class="line bg-primary mb-3"></div>
        </div>
        <div class="modal-body pt-5">
          <div class="row">
            <div class="col  d-flex  flex-column align-items-center offset-md-1 col-md-10">
              <div class="d-flex flex-wrap mb-3 justify-content-center">
                <h3 class="fs-4">預約提醒通知信：</h3>
                <select class="system-default rounded px-3" v-model="selected" @change="changeText">
                  <option selected>系統預設</option>
                  <option value="自行輸入">自行輸入</option>
                </select>
              </div>
              <textarea class="rounded" cols="30" rows="6" v-model="reminderData.mailBody">
                    </textarea>
            </div>
          </div>
        </div>
        <div class="modal-footer border-0 text-center d-flex justify-content-center mb-7">
          <button type="button" class="btn btn-outline-secondary " data-bs-dismiss="modal">
            <span class="material-icons align-middle">close</span>
            取消
          </button>
          <button type="button" class="btn btn-secondary" @click="sendRemindMail">
            <span class="material-icons  align-middle">done</span>
            確認送出
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getReservationData, sendRemindMail, getScoreData } from '@/util/api'
import Modal from 'bootstrap/js/dist/modal'
export default {
  data () {
    return {
      bookedData: {},
      memberReminderModal: {},
      selected: '系統預設',
      reminderData: {},
      id: '',
      scoreData: {},
      lawyerStar: 0
    }
  },
  created () {
    this.getReservationData()
    this.getScoreData()
  },
  mounted () {
    this.memberReminderModal = new Modal(this.$refs.memberReminderModal)
  },
  methods: {
    reset () {
      this.reminderData = {}
    },
    getReservationData () {
      getReservationData('mem/reservation/booked')
        .then((res) => {
          console.log(res.data)
          this.bookedData.data = res.data.data.splice(0, 3)
          this.bookedData.data.forEach((item) => {
            if (item.firstName === null && item.lastName === null) {
              item.firstName = '無名氏'
            }
          })
          this.processingTime()
        })
        .catch((error) => {
          console.error(error)
        })
    },
    processingTime () {
      this.bookedData.data.forEach((item) => {
        item.originalTime = item.startTime
        item.date = item.startTime.substring(5, 10).replace('-', '/')
        item.startTime = item.startTime.substring(11, 16)
        const regex = /\d+(?=:)/
        item.endTime = (Number(regex.exec(item.startTime)) + 1).toString() + ':00'
      }
      )
      this.setTimestamp()
    },
    setTimestamp () {
      const nowDate = new Date().getTime()
      this.bookedData.data.forEach((item) => {
        item.timestamp = new Date(item.originalTime.replace('T', ' ')).getTime()
        item.startTimestamp = item.timestamp
        item.timestamp -= nowDate
      })
    },
    changeText () {
      const index = this.bookedData.data.findIndex((item) => item.id === Number(this.reminderData.id))
      if (this.selected === '系統預設') {
        this.reminderData.mailBody = `您好～感謝您預約${this.bookedData.data[index].date} ${this.bookedData.data[index].startTime} - ${this.bookedData.data[index].endTime}的媒合諮詢，提醒您時間將至，請記得準時赴約。`
      } else if (this.selected === '自行輸入') {
        this.reminderData.mailBody = ''
      }
    },
    getScoreData () {
      getScoreData('lawyer/reservationReview')
        .then((res) => {
          this.scoreData = res.data
          if (this.scoreData !== null) {
            this.lawyerStar = res.data.lawyerStar
            this.scoreData.time = this.scoreData.time.substring(0, 10).replace(/-/g, '/')
          }
        })
        .catch((error) => {
          console.error(error)
        })
    },
    getId (id) {
      this.reminderData.id = id
      this.changeText()
      this.memberReminderModal.show()
    },
    sendRemindMail () {
      sendRemindMail(this.reminderData)
        .then((res) => {
          console.log(res.data)
          this.memberReminderModal.hide()
          this.reset()
        })
        .catch((error) => {
          console.error(error)
        })
    },
    goChatRoom (id, timestamp) {
      this.$router.push({ name: 'Chatroom', query: { id: id, startTimestamp: timestamp } })
    }
  }
}
</script>
