<template>
  <!--   預約記錄 -->
    <div class="appointment-record">
      <ul class="accordion accordion-flush" id="accordionScore">
        <li v-for="(item , index) in appointmentRecordData.data" :key="index" :id="`cancelRecord${index}`" :class="index%2===0? '':'bg-primary-shallow'"
            class="row border border-primary m-0 justify-content-between rounded rounded-3 py-3 px-4 px-md-7 mb-4 py-md-3 align-items-center">
            <div class="col-12 col-md-3">
              <h4 class="mb-2 ">
                {{item.lastName}}{{item.firstName}}
              </h4>
              <p class="m-0 ">{{item.date}} {{item.startTime}}-{{item.endTime}}</p>
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
              <button type="button" class="btn btn-outline-secondary border-2 me-2 px-2 py-2" @click="goConsultationRecord (item.id)">
                諮詢紀錄
              </button>
              <button type="button" class="btn btn-secondary px-2 py-2" data-bs-toggle="collapse"
                      :data-bs-target="`#flush-collapse${index}`" aria-expanded="false"
                      :aria-controls="`flush-collapse${index}`" @click="getScoreData(item.id)">
                查看評價
                <span class="material-icons align-middle">expand_more</span>
              </button>
            </div>
            <div :id="`flush-collapse${index}`" class="accordion-collapse collapse"
                 :aria-labelledby="`cancelRecord${index}`" data-bs-parent="#accordionScore">
              <div class="accordion-body px-0">
                <div class="border-top border-3 pt-3">
                  <div class="pe-md-7">
                    <div class="d-flex justify-content-between align-items-center mb-3">
                        <Rating class="text-warning" v-model="lawyerStar" :readonly="true" :stars="5" :cancel="false"/>
                      <p class="fs-7 mb-1">{{scoreData.time}}</p>
                    </div>
                    <p>{{scoreData.lawyerOpinion}}
                    </p>
                  </div>
                </div>
              </div>
            </div>
        </li>
      </ul>
    </div>
</template>

<script>
import { getReservationData, getScoreData } from '@/util/api'
export default {
  data () {
    return {
      appointmentRecordData: {},
      scoreData: {},
      lawyerStar: 0
    }
  },
  created () {
    this.getReservationData()
  },
  methods: {
    getReservationData () {
      getReservationData('mem/reservation/completed')
        .then((res) => {
          console.log(res.data)
          this.appointmentRecordData = res.data
          this.appointmentRecordData.data.forEach((item) => {
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
      this.appointmentRecordData.data.forEach((item) => {
        item.date = item.startTime.substring(5, 10).replace('-', '/')
        item.startTime = item.startTime.substring(11, 16)
        const regex = /\d+(?=:)/
        item.endTime = (Number(regex.exec(item.startTime)) + 1).toString() + ':00'
      }
      )
    },
    getScoreData (id) {
      getScoreData(`lawyer/reservationReview/${id}`)
        .then((res) => {
          if (res.data === null) {
            this.scoreData = {}
            this.scoreData.lawyerOpinion = '目前尚未評價'
            return
          }
          this.scoreData = res.data
          this.lawyerStar = res.data.lawyerStar
          this.scoreData.time = this.scoreData.time.substring(0, 10).replace(/-/g, '/')
        })
        .catch((error) => {
          console.error(error)
        })
    },
    goConsultationRecord (id) {
      this.$router.push({ name: 'ConsultationRecord', query: { id: id } })
    }
  }
}
</script>
