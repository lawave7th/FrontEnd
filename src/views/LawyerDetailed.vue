<template>
  <main class="mb-md-11">
    <div class="container pt-7">
      <!-- 聯絡資訊 -->
      <div class="contact-information pb-md-7 border-bottom border-3">
        <router-link class="fs-4 pe-1  mb-6 text-info" :to="{ name: 'LawyerSolvation' }">
          <span class="material-icons text-info align-middle">
            arrow_back_ios_new
            </span>
          返回
        </router-link>
        <h2 class="fs-4 d-inline-block text-secondary mb-6 border-start border-2 border-secondary ps-2">聯絡資訊</h2>
        <div class="row ">
          <div class="col-12 col-md-6 mb-4 mb-md-0 ">
            <img v-if="lawyerData.shot === null" class="rounded rounded-3 mug-shot-square"
                 src="../assets/img/member-logo.png" alt="律師照片">
            <img v-else class="rounded rounded-3 mug-shot-square" :src="lawyerData.shot" alt="熱門律師照片">
          </div>
          <div class="col-12 col-md-6  d-flex flex-column justify-content-between">
            <div>
              <h3 class="fs-4 text-dark-shallow mb-6 mb-md-0">{{lawyerData.saying}}</h3>
            </div>
            <div class="d-flex flex-column flex-md-row justify-content-md-between">
              <div>
                <p class="text-primary">{{lawyerData.office}}</p>
                <h3 class="text-secondary">{{lawyerData.lastName}}{{lawyerData.firstName}}</h3>
                <p>
                  <span class="material-icons text-dark-shallow align-middle">local_phone</span>
                  {{lawyerData.phone}}
                </p>
                <p>
                  <span class="material-icons text-dark-shallow align-middle">local_post_office</span>
                  {{lawyerData.mail}}
                </p>
                <ul class="lawyer-tags d-flex mb-4 mb-md-0">
                  <li v-for="(item , index ) in lawyerData.goodAtItem" :key="index"
                      class="rounded-pill border fs-7 bg-secondary  text-white border-1 py-1 mb-1 me-2 px-3">
                    <div v-if="lawyerData.goodAtItem.length > index">{{lawyerData.goodAtItem[index]}}</div>
                  </li>
                </ul>
              </div>
              <div class="d-grid gap-2 d-md-flex flex-md-column justify-content-md-end align-items-md-end mb-7 mb-md-0">
                <button type="button" class="btn btn-primary rounded rounded-3 px-md-6 py-3 py-md-4 text-white"
                        @click="goAppointmentPage(lawyerData.id)">預約此位律師
                </button>
              </div>
            </div>

          </div>
        </div>

      </div>
      <!-- 律師詳細資料 -->
      <div class="details my-7  pb-md-7 border-bottom border-3 px-3 px-md-0">
        <ul class="row">
          <li class="col-md-6 mb-md-5">
            <div class="d-flex mb-3 align-items-center">
              <div class="me-3">
                <img class="rounded rounded-3" src="../assets/img/lawyer-detailed/detailed-icon-1.png"
                     alt="律師詳細資訊 icon">
              </div>
              <div>
                <h4 class="text-secondary">律師介紹</h4>
                <p class="fs-7 text-primary">Introduce</p>
              </div>
            </div>
            <p>{{lawyerData.introduction}}
            </p>
          </li>
          <li class="col-md-6  mb-md-5">
            <div class="d-flex mb-3 align-items-center">
              <div class="me-3">
                <img class="rounded rounded-3" src="../assets/img/lawyer-detailed/detailed-icon-2.png"
                     alt="律師詳細資訊 icon">
              </div>
              <div>
                <h4 class="text-secondary">各縣市執業登入</h4>
                <p class="fs-7 text-primary">Law Society Practice Login Area</p>
              </div>
            </div>
            <ul class="d-flex flex-wrap">
              <li class="mb-4 me-3" v-for="(item , index ) in lawyerData.areaItem" :key="index">
                <span class="material-icons align-middle text-secondary">place</span>
                <span class="text-dark-shallow">{{item}}</span>
              </li>
            </ul>
          </li>
          <li class="col-md-6  mb-md-5">
            <div class="d-flex mb-3 align-items-center">
              <div class="me-3">
                <img class="rounded rounded-3" src="../assets/img/lawyer-detailed/detailed-icon-3.png"
                     alt="律師詳細資訊 icon">
              </div>
              <div>
                <h4 class="text-secondary">學歷</h4>
                <p class="fs-7 text-primary">Education </p>
              </div>
            </div>
            <p v-for="(item , index ) in lawyerData.education" :key="index">{{item.schoolName}} {{item.departmentName}}
              {{item.degree}}</p>
          </li>
          <li class="col-md-6  mb-md-5">
            <div class="d-flex mb-3 align-items-center">
              <div class="me-3">
                <img class="rounded rounded-3" src="../assets/img/lawyer-detailed/detailed-icon-4.png"
                     alt="律師詳細資訊 icon">
              </div>
              <div>
                <h4 class="text-secondary">工作經歷</h4>
                <p class="fs-7 text-primary">Work experience</p>
              </div>
            </div>
            <p v-for="(item , index ) in lawyerData.experienceList" :key="index">{{item.companyName}}
              {{item.jobTitle}} </p>
          </li>
          <li class="col-md-6  mb-md-5">
            <div class="d-flex mb-3 align-items-center">
              <div class="me-3">
                <img class="rounded rounded-3" src="../assets/img/lawyer-detailed/detailed-icon-5.png"
                     alt="律師詳細資訊 icon">
              </div>
              <div>
                <h4 class="text-secondary">專業領域</h4>
                <p class="fs-7 text-primary">Professional field</p>
              </div>
            </div>
            <p>{{lawyerData.professional}}
            </p>
          </li>
          <li class="col-md-6  mb-md-5">
            <div class="d-flex mb-3 align-items-center">
              <div class="me-3">
                <img class="rounded rounded-3" src="../assets/img/lawyer-detailed/detailed-icon-6.png"
                     alt="律師詳細資訊 icon">
              </div>
              <div>
                <h4 class="text-secondary">諮詢費用</h4>
                <p class="fs-7 text-primary">Consultation fees</p>
              </div>
            </div>
            <p>
              <span class="material-icons align-middle">monetization_on</span>
              現場諮詢：{{lawyerData.faceCost}}元/小時
            </p>
            <p>
              <span class="material-icons align-middle">monetization_on</span>
              電話諮詢：{{lawyerData.phoneCost}}元/小時
            </p>
          </li>
        </ul>
      </div>
      <!-- 評分區塊 -->
      <div class="new-evaluation mb-11 mb-md-0">
        <div class="d-flex justify-content-between mb-3 align-items-end">
          <h3 class="text-secondary">
            <span class="material-icons fs-2 text-secondary align-top">star</span>
            {{totalScore}} <span class="fs-7">({{evaluationData.lawercount}} 則評價)</span>
          </h3>
          <button type="button" class="btn btn-outline-dark rounded-3 py-1 fs-7" @click="getAllEvaluation">查看更多評價
            <span class="material-icons align-middle fs-7">
chevron_right
</span>
          </button>
        </div>
        <div v-for="(item , index) in lawyerlist" :key="index"
             class="border border-primary rounded rounded-3 px-4 px-md-7 py-3 py-md-4 mb-3">
          <div class="row">
            <div class="col-12 col-md-3 d-flex justify-content-center d-md-block">
              <img v-if="item.shot === null" class="rounded rounded-pill mug-shot-xl"
                   src="../assets/img/member-logo.png" alt="評價民眾照片">
              <img v-else class="rounded rounded-pill mug-shot-xl" :src="item.shot" alt="評價民眾照片">
            </div>
            <div class="col-12 col-md-9 text-center text-md-start ">
              <p class="fs-7 mb-1 text-info">{{item.date}}</p>
              <h3>{{item.name}}</h3>
              <div class="d-flex flex-column flex-md-row justify-content-between align-items-center mb-2">
                <Rating class="text-primary" :modelValue="item.LawaverStar" :readonly="true" :stars="5" :cancel="false"/>
                <ul class="lawyer-tags d-flex flex-wrap justify-content-center text-white">
                  <li v-for="(caseItem , index ) in item.caseType" :key="index"
                      class="rounded-pill border border-1 bg-secondary me-2 fs-7 py-1 px-3">
                    <div v-if="item.caseType.length > index">{{item.caseType[index]}}</div>
                  </li>
                </ul>
              </div>
              <p>{{item.lawaverOpinion}}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

  </main>
</template>

<script>
import { getLawyerDetailed, getLawyerEvaluation } from '@/util/api'

export default {
  props: ['lawyerId'],
  data () {
    return {
      lawyerData: {},
      evaluationData: {},
      totalScore: 0,
      lawyerlist: []
    }
  },
  created () {
    this.getLawyerData()
    this.getLawyerEvaluation()
  },
  methods: {
    getLawyerData () {
      getLawyerDetailed(`lawyerlist/Info/${this.lawyerId}`)
        .then((res) => {
          console.log(res.data)
          this.lawyerData = res.data
        })
        .catch((error) => {
          console.error(error)
        })
    },
    getLawyerEvaluation () {
      getLawyerEvaluation(`lawyerlist/lawyerReview/${this.lawyerId}`)
        .then((res) => {
          console.log(res)

          this.evaluationData = JSON.parse(JSON.stringify(res.data))
          this.lawyerlist = JSON.parse(JSON.stringify(res.data.lawyerlist.splice(0, 1)))
          if (this.lawyerlist.length > 0) {
            this.totalScore = res.data.totalScore.toFixed(1)
          }

          this.processingTime()
        })
        .catch((error) => {
          console.error(error)
        })
    },
    processingTime () {
      this.lawyerlist.forEach((item) => {
        const regex = /-/g
        item.date = item.evalTime.substring(0, 10).replace(regex, '/')
      }
      )
    },
    getAllEvaluation () {
      console.log(this.evaluationData.lawyerlist)
      this.lawyerlist = JSON.parse(JSON.stringify(this.evaluationData.lawyerlist))
      this.processingTime()
    },
    goAppointmentPage (id) {
      this.$router.push(`/appointment-time/${id}`)
    }
  }
}
</script>
