<template>
  <div class="border border-primary rounded rounded-3 py-2 px-3 px-md-7 py-md-3 mb-6 mb-md-7">
    <!-- 預約中心點擊按鈕 -->
    <ul class="row appointment-menu">
      <li class="col-4 border-end text-center" :class="activeClass === 'audit' ? 'appointment-bar-active' : ''"><a class="appointment-bar-fs text-secondary" @click.prevent="changeTabs('audit')" href="#">未審核</a></li>
      <li class="col-4 border-end text-center" :class="activeClass === 'booked' ? 'appointment-bar-active' : ''"><a class="appointment-bar-fs text-secondary" @click.prevent="changeTabs('booked')" href="#">已預約</a></li>
      <li class="col-4 text-center" :class="activeClass === 'completed' ? 'appointment-bar-active' : ''"><a class="appointment-bar-fs text-secondary" @click.prevent="changeTabs('completed')" href="#">預約紀錄</a></li>
    </ul>
  </div>
  <!-- 未審核頁面 -->
  <div class="people-pending-review " :class="activeClass === 'audit' ? 'active':'d-none' ">
    <ul>
      <li v-for="(item , index) in data.data" :key="index"
        class="row flex-column flex-md-row border border-primary m-0 justify-content-md-between rounded rounded-3 px-4 px-md-7  mb-4 py-3 align-items-md-center" :class="index%2===0? '':'bg-primary-shallow'">
        <div class="col-12 col-md-3">
          <h4 class="mb-2 text-secondary">
            {{item.lastName}}{{item.firstName}} 律師
          </h4>
          <p class="m-0 mb-3 mb-md-0">{{item.date}} {{item.startTime}}-{{item.endTime}}</p>
        </div>
        <div class="col-12 col-md-6">
          <ul class="d-flex flex-wrap justify-content-start mb-2 mb-md-0">
            <li v-for="(caseItem , index ) in item.caseType" :key="index"
                class="rounded-pill border border-1 bg-secondary me-2 fs-7 py-1 px-3 text-white">
              <div v-if="item.caseType.length > index">{{item.caseType[index]}}</div>
            </li>
          </ul>
          <p>{{ item.caseInfo }}</p>
        </div>
        <div class="col-12 col-md-3 d-flex justify-content-between align-items-end flex-md-column">
          <p class="fs-7 m-0 mb-md-3">審核中</p>
          <button type="button" class="btn btn-outline-secondary" @click="getId(item.id ,'audit')">
            <span class="material-icons align-middle">close</span>
            取消預約
          </button>
        </div>
      </li>
      </ul>
  </div>
  <!-- 已預約頁面 -->
  <div class="people-booked" :class="activeClass === 'booked' ? 'active':'d-none' ">
    <ul>
      <li v-for="(item , index) in data.data" :key="index"
          class="row flex-column flex-md-row border border-primary m-0 justify-content-md-between rounded rounded-3 px-4 px-md-7  mb-4 py-3 align-items-md-center" :class="index%2===0? '':'bg-primary-shallow'">
        <div class="col-12 col-md-3">
          <h4 class="mb-2 text-secondary">
            {{item.lastName}}{{item.firstName}} 律師
          </h4>
          <p class="m-0 mb-3 mb-md-0">{{item.date}} {{item.startTime}}-{{item.endTime}}</p>
        </div>
        <div class="col-12 col-md-6">
          <ul class="d-flex flex-wrap justify-content-start mb-2 mb-md-0">
            <li v-for="(caseItem , index ) in item.caseType" :key="index"
                class="rounded-pill border border-1 bg-secondary me-2 fs-7 py-1 px-3 text-white">
              <div v-if="item.caseType.length > index">{{item.caseType[index]}}</div>
            </li>
          </ul>
          <p>{{ item.caseInfo }}</p>
        </div>
        <div class="col-12 col-md-3 d-flex justify-content-end" >
          <div v-if="item.timestamp / 1000 / 60 > 10">
            <p class="text-end fs-7">
              <span class="material-icons align-middle text-secondary">circle_notifications</span>
              預約將至
            </p>
            <button  type="button" class="btn btn-outline-secondary" @click="getId(item.id)">
              <span class="material-icons align-middle text-secondary">close</span>
              取消預約
            </button>
          </div>
         <div class="v-else">
           <button  type="button" class="btn btn-secondary" @click="goChatRoom(item.id , item.startTimestamp)">
             <span class="material-icons align-middle">forum</span>
             線上諮詢
           </button>
         </div>
        </div>
      </li>
    </ul>
  </div>
  <!--  取消預約警示-->
  <div class="modal fade" id="cancelAppointmentModal" tabindex="-1"
       aria-labelledby="cancelAppointmentModalLabel" aria-hidden="true" ref="cancelAppointmentModal">
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
          <h2 class="modal-title text-center mt-3 mt-md-7 mb-2 text-secondary" id="cancelAppointmentModalLabel">
            是否確定要取消預約</h2>
          <div class="line bg-primary mb-3"></div>
        </div>
        <div class="modal-body">
          <div class="row ">
            <div class="col-md-8 offset-md-2 text-center">
              一旦取消預約，便無法再透過媒合平台，與律師諮詢，是否還要進行取消？
            </div>
          </div>
        </div>
        <div class="modal-footer border-0  d-flex justify-content-center mb-md-7">
          <button type="button" class="btn btn-outline-secondary me-2" data-bs-dismiss="modal">
            <span class="material-icons align-middle">close</span>
            取消
          </button>
          <button type="button" class="btn btn-secondary" @click="cancelAppointment(this.auditId)">
            <span class="material-icons  align-middle">done</span>
            確定
          </button>
        </div>
      </div>
    </div>
  </div>
  <!-- 預約記錄頁面 -->
  <div class="people-appointment-record " :class="activeClass === 'completed' ? 'active':'d-none' ">
    <ul id="cancelRecord">
      <li v-for="(item , index) in data.data" :key="index" :id="`cancelRecord${index}`" :class="index%2===0? '':'bg-primary-shallow'"
        class="row border m-0 border-primary justify-content-between rounded rounded-3 px-4 py-3 px-md-7  mb-4 py-md-3 align-items-center">
        <div class="col-12 col-md-3">
          <h4 class="mb-2">
            {{item.lastName}}{{item.firstName}} 律師
          </h4>
          <p class="m-0">{{item.date}} {{item.startTime}}-{{item.endTime}}</p>
        </div>

        <div class="col-12 col-md-5">
          <ul class="d-flex flex-wrap justify-content-start">
            <li v-for="(caseItem , index ) in item.caseType" :key="index"
                class="rounded-pill border border-1 bg-secondary me-2 fs-7 py-1 px-3 text-white">
              <div v-if="item.caseType.length > index">{{item.caseType[index]}}</div>
            </li>
          </ul>
          <p>{{ item.caseInfo }}</p>
        </div>
        <div class="col-12 col-md-4 text-end" v-if="item.status === 'completed'">
          <button type="button" class="btn px-3 py-2 btn-outline-secondary me-2 border-2" @click="getId(item.id , 'score')" :disabled="item.isEvaluation">
            評價</button>
          <button type="button" class="btn px-3 py-2 btn-secondary text-center" @click="goConsultationRecord(item.id)">
            諮詢紀錄
            <span class="material-icons align-middle">chevron_right</span>
          </button>
        </div>
        <div class="col-12 col-md-4 text-end" v-else>
          <button type="button" data-bs-toggle="collapse" :data-bs-target="`#flush-collapse${index}`"
                  aria-expanded="false" :aria-controls="`flush-collapse${index}`"
                  class="btn btn-secondary " @click="getRejectionData(item.id)">
            已取消
            <span class="material-icons align-middle">expand_more</span>
          </button>
        </div>
        <div v-if="item.status === 'reject'" :id="`flush-collapse${index}`" class="accordion-collapse collapse"
             :aria-labelledby="`cancelRecord${index}`" data-bs-parent="#cancelRecord">
          <div class="accordion-body px-0">
            <div class="border-top border-primary border-3 pt-3">
              <p>{{ rejectionData.date }}  {{ rejectionData.startTime }}</p>
              <p>{{ rejectionData.rejection }}
              </p>
            </div>
          </div>
        </div>
      </li>
    </ul>
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
              <div class="d-flex flex-wrap mb-3 justify-content-center">
                <p>感謝您選擇使用法學電波，請與我們分享您此次律師諮詢體驗，回饋給律師一起創造更好的體驗服務</p>
                <p>律師諮詢滿意程度：</p>
                <Rating class="text-primary" v-model="lawyerStar" :cancel="false" />
              </div>
              <textarea class="rounded" cols="30" rows="4" v-model="lawyerOpinion"></textarea>
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
import { getReservationData, cancelAppointment, getRejectionData, putScore } from '@/util/api'
import Modal from 'bootstrap/js/dist/modal'
export default {
  data () {
    return {
      activeClass: 'audit',
      data: {},
      cancelAppointmentModal: {},
      auditId: '',
      scoreId: '',
      rejectionData: {},
      scoreModal: {},
      lawyerStar: 0,
      lawyerOpinion: ''
    }
  },
  created () {
    this.getReservationData()
  },
  mounted () {
    this.cancelAppointmentModal = new Modal(this.$refs.cancelAppointmentModal)
    this.scoreModal = new Modal(this.$refs.scoreModal)
  },
  methods: {
    changeTabs (item) {
      this.activeClass = item
      this.getReservationData()
    },
    getReservationData () {
      getReservationData(`mem/reservation/${this.activeClass}`)
        .then((res) => {
          console.log(res.data)
          this.data = res.data
          this.data.data.forEach((item) => {
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
      this.data.data.forEach((item) => {
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
      this.data.data.forEach((item) => {
        item.timestamp = new Date(item.originalTime.replace('T', ' ')).getTime()
        item.startTimestamp = item.timestamp
        item.timestamp -= nowDate
      })
    },
    getId (id, status) {
      if (status === 'audit') {
        this.auditId = id
        this.cancelAppointmentModal.show()
      } else if (status === 'score') {
        this.scoreId = id
        this.scoreModal.show()
      }
    },
    cancelAppointment (id) {
      cancelAppointment(`public/delReservation/${id}`)
        .then((res) => {
          console.log(res.data)
          window.showToast.showSuccessToast('取消成功')
          this.cancelAppointmentModal.hide()
          this.getReservationData()
          this.auditId = ''
        })
        .catch((error) => {
          console.error(error)
        })
    },
    getRejectionData (id) {
      getRejectionData(`public/rejection/${id}`)
        .then((res) => {
          this.rejectionData = res.data
          this.rejectionData.date = res.data.rejectionTime.substring(5, 10).replace('-', '/')
          this.rejectionData.startTime = res.data.rejectionTime.substring(11, 16)
        })
        .catch((error) => {
          console.error(error)
        })
    },
    goChatRoom (id, timestamp) {
      this.$router.push({ name: 'Chatroom', query: { id: id, startTimestamp: timestamp } })
    },
    goConsultationRecord (id) {
      this.$router.push({ name: 'ConsultationRecord', query: { id: id } })
    },
    putScore () {
      if (this.lawyerStar === 0 && this.lawyerOpinion === '') {
        window.showToast.showErrorToast('請填寫評分')
        return
      }
      const obj = {
        lawyerStar: this.lawyerStar,
        lawyerOpinion: this.lawyerOpinion
      }
      putScore(`api/lawyerOpinion/${this.scoreId}`, obj)
        .then((res) => {
          console.log(res)
          this.scoreModal.hide()
          this.lawyerStar = 0
          this.lawyerOpinion = ''
        })
        .catch((error) => {
          console.error(error)
        })
    }
  }
}
</script>
