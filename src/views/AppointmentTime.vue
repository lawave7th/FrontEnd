<template>
  <main>
    <div class="container pt-6 pt-md-7 pb-md-11">
      <h2 class="text-secondary">立即預約律師可諮詢時段</h2>
      <p class="mb-5 fs-7 text-primary">View now consultation time</p>
      <div class="row">
        <div class="col-12 col-md-4 mb-7 mb-md-0">
          <div class="border border-primary shadow-sm rounded rounded-3  py-4 px-6">
            <form>
              <h3 class="fs-4 mb-3">選擇預約免費諮詢時段</h3>
              <div class="col-12 ">
                <div class="row align-items-center ">
                  <!-- 日期 -->
                  <div class="col-12 mb-3">
                    <label for="date-start" class="form-label">選擇日期</label>
                    <select id="date-start" v-model="selectTime" @change="filterShowTimeData" class="form-select"
                            aria-label="default-select">
                      <option :value="'preset'" selected>yyyy/mm/dd
                      </option>
                      <option v-for="(item,index) in selectTimeData" :key="index" :value="item.date">{{item.date}}
                      </option>
                    </select>
                  </div>
                  <!-- 時段 -->
                  <div class="col-12 mb-3">
                    <p class="mb-3">選擇時段 <span class="fs-7">(預約以 1hr 為上限）</span></p>
                    <div class="row mb-3">
                      <div class="col-7 d-flex align-items-center justify-content-around">
                        <label for="timeStart" class="me-3">起</label>
                        <input type="text" placeholder="10:00" class="form-control"
                               id="timeStart" v-model="time" readonly>
                      </div>
                      <div class="col-5 d-flex align-items-center justify-content-around">
                        <p class="m-0">止 </p>
                        <p class="m-0">{{endTime}}</p>
                      </div>
                    </div>
                  </div>
                  <!-- 諮詢日期 -->
                  <div class="col-12">
                    <p class="mb-3">諮詢類別
                      <span class="fs-7">
                        ( 最多選取三個 )
                      </span>
                    </p>
                    <ul class="row mb-2">
                      <li class="col-auto mb-2">
                        <input class="form-check-input me-1" type="checkbox" value="婚姻諮詢"
                               id="carAccident" @change="controlNum" v-model="postData.caseType">
                        <label class="form-check-label fs-7" for="carAccident">
                          婚姻諮詢
                        </label>
                      </li>
                      <li class="col-auto mb-2">
                        <input class="form-check-input me-1" type="checkbox" value="土地糾紛"
                               id="personalDisputes" @change="controlNum" v-model="postData.caseType">
                        <label class="form-check-label fs-7" for="personalDisputes">
                          土地糾紛
                        </label>
                      </li>
                      <li class="col-auto mb-2">
                        <input class="form-check-input me-1" type="checkbox" value="車禍調解"
                               id="landDispute" @change="controlNum" v-model="postData.caseType">
                        <label class="form-check-label fs-7" for="landDispute">
                          車禍調解
                        </label>
                      </li>
                      <li class="col-auto">
                        <input class="form-check-input me-1" type="checkbox" value="勞資糾紛"
                               id="laborDispute" @change="controlNum" v-model="postData.caseType">
                        <label class="form-check-label fs-7" for="laborDispute">
                          金錢糾紛
                        </label>
                      </li>
                      <li class="col-auto">
                        <input class="form-check-input me-1" type="checkbox" value="金錢糾紛"
                               id="civilDispute" @change="controlNum" v-model="postData.caseType">
                        <label class="form-check-label fs-7" for="civilDispute">
                          勞資糾紛
                        </label>
                      </li>
                      <li class="col-auto">
                        <input class="form-check-input me-1" type="checkbox" value="其他事由"
                               id="criminalDispute" @change="controlNum" v-model="postData.caseType">
                        <label class="form-check-label fs-7" for="criminalDispute">
                          其他事由
                        </label>
                      </li>
                    </ul>
                  </div>
                  <div class="col-12 mb-3">
                    <label for="caseDescription" class="form-label">案件簡述</label>
                    <input type="text" class="form-control" placeholder="一句話簡述案件情形"
                           id="caseDescription" v-model="postData.caseInfo">
                  </div>

                  <!-- 送出預約按鈕 -->
                  <div class="col-12">
                    <div class="d-grid gap-2">
                      <button class="btn btn-secondary py-２" type="button" @click="onSubmit">
                        送出預約
                      </button>
                    </div>
                  </div>
                  <!-- Modal -->
                  <div class="modal fade" id="appointment" tabindex="-1"
                       aria-labelledby="appointmentLabel" aria-hidden="true" ref="appointmentModal">
                    <div class="modal-dialog">
                      <div class="modal-content">
                        <div class="position-relative">
                          <button type="button"
                                  class="m-3 btn  fs-4 position-absolute top-0 end-0"
                                  data-bs-dismiss="modal" aria-label="Close">
                            <svg width="14" height="14" viewBox="0 0 14 14" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                              <path
                                d="M14 1.41L12.59 0L7 5.59L1.41 0L0 1.41L5.59 7L0 12.59L1.41 14L7 8.41L12.59 14L14 12.59L8.41 7L14 1.41Z"
                                fill="black"/>
                            </svg>
                          </button>
                          <h2 class="modal-title text-center mt-3 mt-md-7 mb-2 text-secondary"
                              id="welcomeModalLabel">預約資料已送出</h2>
                          <div class="line bg-primary mb-3"></div>
                        </div>
                        <div class="modal-body">
                          <div class="row ">
                            <div class="col-md-8 offset-md-2 text-center">

                              <span class="material-icons icon-size-xl text-primary" >check_circle</span>

                              <h3 class="fs-4">感謝使用法學電波線上諮詢功能</h3>
                              <p>已送出您的預約申請，待律師審核通過後將以信件寄送預約成功通知您，近期請留意通知</p>
                              <div class="d-grid gap-2 mb-md-7 mb-5">
                                <button type="button" data-bs-dismiss="modal" class="btn btn-secondary" @click="goPeopleAppointmentCenter">前往預約中心查看記錄</button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>

        </div>
        <div class="col-12 col-md-8">
          <div class="appointment-time-border shadow-sm rounded rounded-3 py-4 px-6">
            <div class="d-flex  flex-column flex-md-row justify-content-between">
              <div>
                <p class="text-left text-primary">{{lawyerData.office}}</p>
                <h3 class="text-left mb-md-4 text-secondary">{{lawyerData.lastName}}{{lawyerData.firstName}}</h3>
                <div class="d-none d-md-block line ms-0 bg-primary mb-md-2"></div>
              </div>
              <div>
                <p class="fs-7 m-0">
                  <span class="material-icons align-middle">monetization_on</span>
                  現場諮詢：{{lawyerData.faceCost}}元/小時
                </p>
                <p class="fs-7">
                  <span class="material-icons align-middle">monetization_on</span>
                  電話諮詢：{{lawyerData.phoneCost}}元/小時
                </p>
              </div>
              <div class="d-md-none line ms-0 bg-primary mb-md-2"></div>
            </div>
            <p class="fs-7 mb-md-4">法學電波提供初次免費線上媒合諮詢服務，後續詳談辦法與收費方式，請洽律師個人提供</p>
            <h3 class="border-bottom border-2 mb-4">當日可預約時段</h3>
            <!-- 按鈕選取 -->
            <ul class="row row-cols-2 row-cols-md-5 align-items-center">
              <li v-if="selectTime === 'preset'" class="mb-4 fw-bold">請選擇日期</li>
              <li v-else v-for="(item , index) in showTimeData" :key="index" class="mb-4 d-flex justify-content-around">
                <div class="btn-group-vertical d-block">
                  <button type="button" class="btn  btn-primary-light rounded-top-3 " disabled>{{item.date}}</button>
                  <button type="button" class="btn  btn-primary rounded-bottom-3" @click="getTime(item.time)">
                    {{item.time}}
                  </button>
                </div>
              </li>
            </ul>
            <p>待律師審核諮詢預約時段，預約成功將以會員註冊信箱進行通知，近期勞煩留意信箱信息。</p>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import { getAppointmentTime, getLawyerDetailed, postAppointmentTime } from '@/util/api'
import Modal from 'bootstrap/js/dist/modal'

export default {
  props: ['lawyerId'],
  data () {
    return {
      appointmentModal: {},
      lawyerData: {},
      timeData: {},
      selectTimeData: [],
      showTimeData: [],
      selectTime: 'preset',
      time: '',
      endTime: '',
      postData: { caseType: [] }
    }
  },
  created () {
    this.getAppointmentTime()
    this.getLawyerData()
  },
  mounted () {
    this.appointmentModal = new Modal(this.$refs.appointmentModal)
  },
  methods: {
    reset () {
      this.selectTime = 'preset'
      this.time = ''
      this.endTime = ''
      this.postData = { caseType: [] }
    },
    getLawyerData () {
      getLawyerDetailed(`lawyerlist/Info/${this.lawyerId}`)
        .then((res) => {
          this.lawyerData = res.data
        })
        .catch((error) => {
          console.error(error)
        })
    },
    getAppointmentTime () {
      getAppointmentTime(`mem/publicReservationSet/${this.lawyerId}`)
        .then((res) => {
          console.log(res)
          this.timeData = JSON.parse(JSON.stringify(res.data))
          this.dataProcessing(this.timeData)
        })
        .catch((error) => {
          console.error(error)
        })
    },
    dataProcessing (timeData) {
      // date 同值（同日期）時只取一個
      const time = JSON.parse(JSON.stringify(timeData))
      const set = new Set()
      const result = time.filter((item) => !set.has(item.date) ? set.add(item.date) : false)
      result.forEach((item) => {
        delete item.time
      })
      this.selectTimeData = result
    },
    filterShowTimeData () {
      // 按鈕資料顯示（刪除年份）
      const filterData = JSON.parse(JSON.stringify(this.timeData))
      const showTimeData = filterData.filter((item) => {
        if (item.date === this.selectTime) {
          item.date = item.date.substring(5, 10)
          return item
        }
      })
      this.showTimeData = showTimeData
    },
    getTime (time) {
      // 日期顯示 +1 小時，去 :00 +1 再補回去
      this.time = time
      const regex = /\d+(?=:)/
      const endTime = (Number(regex.exec(time)[0]) + 1).toString() + ':00'
      this.endTime = endTime
    },
    controlNum () {
      if (this.postData.caseType.length > 3) {
        window.showToast.showErrorToast('不能選許超過3個')
        this.postData.caseType.pop()
      }
    },
    onSubmit () {
      const token = localStorage.getItem('lawavaToken')
      console.log(token)
      if (token === null) {
        window.showToast.showErrorToast('請先登入')
        return
      }
      this.postData.date = this.selectTime
      this.postData.time = this.time
      console.log(this.postData)
      postAppointmentTime(`mem/publicReservationSet/${this.lawyerId}`, this.postData)
        .then((res) => {
          console.log(res.data)
          this.appointmentModal.show()
          this.reset()
        })
        .catch((error) => {
          console.error(error)
        })
    },
    goPeopleAppointmentCenter () {
      this.appointmentModal.hide()
      this.$router.push({ name: 'PeopleAppointmentCenter' })
    }
  }
}
</script>
