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
          <button type="button" class="btn btn-outline-secondary" @click="getId(item.id)">
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
<!--          <div v-if="item.timestamp / 1000 / 60 > 10">-->
<!--            <p class="text-end fs-7">-->
<!--              <span class="material-icons align-middle text-secondary">circle_notifications</span>-->
<!--              預約將至-->
<!--            </p>-->
<!--            <button  type="button" class="btn btn-outline-secondary" @click="getId(item.id)">-->
<!--              <span class="material-icons align-middle text-secondary">close</span>-->
<!--              取消預約-->
<!--            </button>-->
<!--          </div>-->
         <div>
           <button  type="button" class="btn btn-secondary" @click="goChatRoom(item.id)">
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
          <button type="button" class="btn btn-secondary" @click="cancelAppointment(this.id)">
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
      <li
        class="row border m-0 justify-content-between rounded rounded-3 px-md-7  mb-md-4 py-md-3 align-items-center">
        <div class="col-3">
          <h4 class="mb-2">
            林恩琪律師
          </h4>
          <p class="m-0">02/21 14:00-15:00</p>
        </div>

        <div class="col-6">
          <ul class="d-flex flex-wrap justify-content-start">
            <li class="rounded-pill border fs-7 bg-secondary  text-white border-1 py-1 mb-1 me-2 px-2">民事訴訟</li>
            <li class="rounded-pill border fs-7 bg-secondary  text-white border-1 py-1 mb-1 me-2 px-2">刑事訴訟</li>
            <li class="rounded-pill border fs-7 bg-secondary  text-white border-1 py-1 mb-1 me-2 px-2">其他</li>
          </ul>
          <p>自駕車經過十字路口，他車突然超車並阻擋行經路線造成我車撞上。</p>
        </div>
        <div class="col-3 text-center">
          <button type="button" class="btn btn-dark">
            諮詢紀錄</button>
        </div>

      </li>
      <li
        class="row border m-0 justify-content-between rounded rounded-3 px-md-7  mb-md-4 py-md-3 align-items-center">
        <div class="col-3">
          <h4 class="mb-2">
            林恩琪律師
          </h4>
          <p class="m-0">02/21 14:00-15:00</p>
        </div>

        <div class="col-6">
          <ul class="d-flex flex-wrap justify-content-start">
            <li class="rounded-pill border fs-7 bg-secondary  text-white border-1 py-1 mb-1 me-2 px-2">民事訴訟</li>
            <li class="rounded-pill border fs-7 bg-secondary  text-white border-1 py-1 mb-1 me-2 px-2">刑事訴訟</li>
            <li class="rounded-pill border fs-7 bg-secondary  text-white border-1 py-1 mb-1 me-2 px-2">其他</li>
          </ul>
          <p>自駕車經過十字路口，他車突然超車並阻擋行經路線造成我車撞上。</p>
        </div>
        <div class="col-3 text-center">
          <button type="button" class="btn btn-dark">

            諮詢紀錄
          </button>
        </div>

      </li>
      <li id="cancelRecordOne"
          class="row border m-0 justify-content-between rounded rounded-3 px-md-7  mb-md-4 py-md-3 align-items-center">

        <div class="col-3">
          <h4 class="mb-2">
            林恩琪律師
          </h4>
          <p class="m-0">02/21 14:00-15:00</p>
        </div>

        <div class="col-6">
          <ul class="d-flex flex-wrap justify-content-start">
            <li class="rounded-pill border fs-7 bg-secondary  text-white border-1 py-1 mb-1 me-2 px-2">民事訴訟</li>
            <li class="rounded-pill border fs-7 bg-secondary  text-white border-1 py-1 mb-1 me-2 px-2">刑事訴訟</li>
            <li class="rounded-pill border fs-7 bg-secondary  text-white border-1 py-1 mb-1 me-2 px-2">其他</li>
          </ul>
          <p>自駕車經過十字路口，他車突然超車並阻擋行經路線造成我車撞上。</p>
        </div>
        <div class="col-3 text-center">
          <button type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne"
                  aria-expanded="false" aria-controls="flush-collapseOne"
                  class="btn btn-secondary ">
            已取消
            <svg width="12" height="8" viewBox="0 0 12 8" fill="none"
                 xmlns="http://www.w3.org/2000/svg">
              <path d="M10.59 0L6 4.58L1.41 0L0 1.41L6 7.41L12 1.41L10.59 0Z"
                    fill="white" />
            </svg>

          </button>
        </div>
        <div id="flush-collapseOne" class="accordion-collapse collapse"
             aria-labelledby="cancelRecordOne" data-bs-parent="#cancelRecord">
          <div class="accordion-body px-0">
            <div class="border-top border-3 pt-3">
                <p>02/22 13:10</p>
                <p>您好～我是OO律師，感謝您預約 2021/10/10 14:00
                  的媒合諮詢，不好意思由於專長領域不符合您的需求，便取消此次預約，懇請諒解。
                </p>
            </div>
          </div>
        </div>

      </li>

      <li
        class="row border m-0 justify-content-between rounded rounded-3 px-md-7  mb-md-4 py-md-3 align-items-center">
        <div class="col-3">
          <h4 class="mb-2">
            林恩琪律師
          </h4>
          <p class="m-0">02/21 14:00-15:00</p>
        </div>

        <div class="col-6">
          <ul class="d-flex flex-wrap justify-content-start">
            <li class="rounded-pill border fs-7 bg-secondary  text-white border-1 py-1 mb-1 me-2 px-2">民事訴訟</li>
            <li class="rounded-pill border fs-7 bg-secondary  text-white border-1 py-1 mb-1 me-2 px-2">刑事訴訟</li>
            <li class="rounded-pill border fs-7 bg-secondary  text-white border-1 py-1 mb-1 me-2 px-2">其他</li>
          </ul>
          <p>自駕車經過十字路口，他車突然超車並阻擋行經路線造成我車撞上。</p>
        </div>
        <div class="col-3 text-center">
          <button type="button" class="btn btn-dark">
            諮詢紀錄
          </button>
        </div>

      </li>
      <li
        class="row border m-0 justify-content-between rounded rounded-3 px-md-7  mb-md-4 py-md-3 align-items-center">
        <div class="col-3">
          <h4 class="mb-2">
            林恩琪律師
          </h4>
          <p class="m-0">02/21 14:00-15:00</p>
        </div>

        <div class="col-6">
          <ul class="d-flex flex-wrap justify-content-start">
            <li class="rounded-pill border fs-7 bg-secondary  text-white border-1 py-1 mb-1 me-2 px-2">民事訴訟</li>
            <li class="rounded-pill border fs-7 bg-secondary  text-white border-1 py-1 mb-1 me-2 px-2">刑事訴訟</li>
            <li class="rounded-pill border fs-7 bg-secondary  text-white border-1 py-1 mb-1 me-2 px-2">其他</li>
          </ul>
          <p>自駕車經過十字路口，他車突然超車並阻擋行經路線造成我車撞上。</p>
        </div>
        <div class="col-3 text-center">
          <button type="button" class="btn btn-dark">
            諮詢紀錄
          </button>
        </div>

      </li>

    </ul>
    <!-- 分頁按鈕 -->
    <ul class="appointment-pagination d-flex justify-content-md-end">
      <li class="me-2">
        <a class="d-block text-white bg-dark btn-dark rounded-pill text-center fs-7"
           href="#">1</a>
      </li>
      <li class="me-2">
        <a class="d-block text-white bg-dark btn-dark rounded-pill text-center fs-7"
           href="#">2</a>
      </li>
      <li>
        <a class="d-block pagination-next text-white bg-dark btn-dark rounded-pill text-center"
           href="#">
          <svg class="mb-2" width="10" height="8" viewBox="0 0 10 8" fill="none"
               xmlns="http://www.w3.org/2000/svg">
            <path
              d="M1.27398 0L0.333984 0.94L3.38732 4L0.333984 7.06L1.27398 8L5.27398 4L1.27398 0Z"
              fill="white" />
            <path
              d="M5.66656 0L4.72656 0.94L7.7799 4L4.72656 7.06L5.66656 8L9.66656 4L5.66656 0Z"
              fill="white" />
          </svg>

        </a>
      </li>
    </ul>
  </div>
</template>

<script>
import { getReservationData, cancelAppointment } from '@/util/api'
import Modal from 'bootstrap/js/dist/modal'
export default {
  data () {
    return {
      activeClass: 'audit',
      data: {},
      cancelAppointmentModal: {},
      id: ''
    }
  },
  created () {
    this.getReservationData()
  },
  mounted () {
    this.cancelAppointmentModal = new Modal(this.$refs.cancelAppointmentModal)
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
        item.timestamp -= nowDate
      })
    },
    getId (id) {
      this.id = id
      this.cancelAppointmentModal.show()
    },
    cancelAppointment (id) {
      cancelAppointment(`public/delReservation/${id}`)
        .then((res) => {
          console.log(res.data)
          window.showToast.showSuccessToast('取消成功')
          this.cancelAppointmentModal.hide()
          this.getReservationData()
        })
        .catch((error) => {
          console.error(error)
        })
    },
    goChatRoom (id) {
      this.$router.push({ name: 'Chatroom', query: { id: id } })
    }
  }
}
</script>
