<template>
  <!-- 待審核頁面 -->
  <div class="audit">
    <ul>
      <li v-for="(item , index) in auditData.data" :key="index"
      >
        <p class="text-end">
          <a href="#" class="text-danger" @click.prevent="getId(item.id , 'blockMembers')">
            <span class="material-icons text-danger align-middle">block</span>
            加入封鎖</a>
        </p>
        <div
          class="row flex-column flex-md-row border border-primary m-0 justify-content-md-between rounded rounded-3 px-4 px-md-7  mb-4 py-3 align-items-md-center"
          :class="index%2===0? '':'bg-primary-shallow'">
          <div class="col-12 col-md-3">
            <h4 class="mb-2 text-secondary">
              {{item.firstName}} {{item.lastName}}
            </h4>
            <p class="m-0">{{item.date}} {{item.startTime}}-{{item.endTime}}</p>
          </div>
          <div class="col-12 col-md-5">
            <ul class="lawyer-tags d-flex flex-wrap justify-content-start">
              <li v-for="(caseItem , index ) in item.caseType" :key="index"
                  class="rounded-pill border border-1 bg-secondary me-2 fs-7 py-1 px-3 text-white">
                <div v-if="item.caseType.length > index">{{item.caseType[index]}}</div>
              </li>
            </ul>
            <p>{{ item.caseInfo }}</p>
          </div>
          <div class="col-12 col-md-4 d-flex justify-content-end">
            <button type="button"
                    class="btn btn-outline-secondary px-2 me-2" @click="getId(item.id ,'reject')">
              <span class="material-icons align-middle">close</span>
              拒絕
            </button>
            <button type="button" class="btn btn-secondary px-2" @click="onSubmit(item.id , true)">
              <span class="material-icons  align-middle">done</span>
              確認
            </button>
          </div>
        </div>
      </li>
    </ul>
    <!-- 婉拒 modal select 要記得補下拉樣式-->
    <div class="modal fade" id="declineModal" tabindex="-1" ref="declineModal" aria-labelledby="declineModal"
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
            <h2 class="modal-title text-center mt-3 mt-md-7 mb-2 text-secondary" id="declineModalLabel">
              確定要婉拒此次諮詢？</h2>
            <div class="line bg-primary mb-3"></div>
          </div>
          <div class="modal-body pt-5">
            <div class="row">
              <div class="col  d-flex  flex-column align-items-center offset-md-1 col-md-10">
                <div class="d-flex flex-wrap mb-3 justify-content-center">
                  <h3 class="fs-4">婉拒預約通知信：</h3>
                  <select class="system-default rounded px-3" v-model="selected" @change="changeText">
                    <option selected>系統預設</option>
                    <option value="自行輸入">自行輸入</option>
                  </select>
                </div>
                <textarea class="rounded" cols="30" rows="6" v-model="reservationData.rejection">
                  您好～感謝您預約此次媒合諮詢，不好意思由於專長領域不符合您的需求，便取消此次預約，懇請諒解。
                    </textarea>
              </div>
            </div>
          </div>
          <div class="modal-footer border-0 text-center d-flex justify-content-center mb-7">
            <button type="button" class="btn btn-outline-secondary " data-bs-dismiss="modal">
              <span class="material-icons align-middle">close</span>
              取消
            </button>
            <button type="button" class="btn btn-secondary " @click="onSubmit(this.reservationData.id , false ,this.reservationData.rejection )">
              <span class="material-icons  align-middle">done</span>
              確認送出
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!--    &lt;!&ndash; 封鎖會員警示 modal &ndash;&gt;-->
  <div class="modal fade" id="blockMembersModal" tabindex="-1"
       aria-labelledby="blockMembersModalLabel" aria-hidden="true" ref="blockMembersModal">
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
          <h2 class="modal-title text-center mt-3 mt-md-7 mb-2 text-secondary" id="blockMembersModalLabel">
            是否確定要封鎖此會員</h2>
          <div class="line bg-primary mb-3"></div>
        </div>
        <div class="modal-body">
          <div class="row ">
            <div class="col-md-8 offset-md-2 text-center">
              一旦封鎖此會員，會員便無法再透過媒合平台，預約線上會議與您諮詢，是否還要進行封鎖？
            </div>
          </div>
        </div>
        <div class="modal-footer border-0  d-flex justify-content-center mb-md-7">
          <button type="button" class="btn btn-outline-secondary me-2" data-bs-dismiss="modal">
            <span class="material-icons align-middle">close</span>
            取消
          </button>
          <button type="button" class="btn btn-secondary" @click="blockMembers">
            <span class="material-icons  align-middle">done</span>
            確定封鎖
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getReservationData, putReservationAssent, blockMembers } from '@/util/api'
import Modal from 'bootstrap/js/dist/modal'

export default {
  data () {
    return {
      auditData: {},
      reservationData: {},
      selected: '系統預設',
      declineModal: {},
      blockMembersModal: {},
      blockMembersId: ''
    }
  },
  created () {
    this.getReservationData()
  },
  mounted () {
    this.declineModal = new Modal(this.$refs.declineModal)
    this.blockMembersModal = new Modal(this.$refs.blockMembersModal)
  },
  methods: {
    reset () {
      this.reservationData = {}
      this.blockMembersId = ''
    },
    getReservationData () {
      getReservationData('mem/reservation/audit')
        .then((res) => {
          console.log(res.data)
          this.auditData = res.data
          this.auditData.data.forEach((item) => {
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
      this.auditData.data.forEach((item) => {
        item.date = item.startTime.substring(5, 10).replace('-', '/')
        item.startTime = item.startTime.substring(11, 16)
        const regex = /\d+(?=:)/
        item.endTime = (Number(regex.exec(item.startTime)) + 1).toString() + ':00'
      }
      )
    },
    blockMembers () {
      console.log(this.blockMembersId)
      blockMembers(`lawyer/blockReservation/add/${this.blockMembersId}`)
        .then((res) => {
          console.log(res.data)
          this.blockMembersModal.hide()
          this.reset()
          this.getReservationData()
        })
        .catch((error) => {
          console.error(error)
        })
    },
    changeText () {
      if (this.selected === '系統預設') {
        this.reservationData.rejection = '您好～感謝您預約此次媒合諮詢，不好意思由於專長領域不符合您的需求，便取消此次預約，懇請諒解。'
      } else if (this.selected === '自行輸入') {
        this.reservationData.rejection = ''
      }
    },
    getId (id, status) {
      if (status === 'reject') {
        this.reservationData.id = id
        this.changeText()
        this.declineModal.show()
      } else if (status === 'blockMembers') {
        this.blockMembersId = id
        this.blockMembersModal.show()
      }
    },
    onSubmit (id, status, rejection = '') {
      this.reservationData = {
        id: id,
        status: status,
        rejection: rejection
      }
      console.log(this.reservationData)
      putReservationAssent(this.reservationData)
        .then((res) => {
          if (status) {
            window.showToast.showSuccessToast('預約成功')
          } else if (!status) {
            window.showToast.showSuccessToast('拒絕成功')
            this.declineModal.hide()
          }
          console.log(res.data)
          this.reset()
          this.getReservationData()
        })
        .catch((error) => {
          console.error(error)
        })
    }
  }
}
</script>
