<template>
  <main class="mb-md-11">
    <div class="container pt-7">
      <!-- 聯絡資訊 -->
      <div class="contact-information pb-md-7 border-bottom border-3">
        <router-link class="fs-4 pe-1  mb-6 text-info"  :to="{ name: 'LawyerSolvation' }">
          <span class="material-icons text-info align-middle">
            arrow_back_ios_new
            </span>
          返回
        </router-link>
        <h2 class="fs-4 d-inline-block text-secondary mb-6 border-start border-2 border-secondary ps-2">聯絡資訊</h2>
        <div class="row ">
          <div class="col-12 col-md-6 mb-4 mb-md-0 ">
            <img v-if="lawyerData.shot === null" class="rounded rounded-3" src="../assets/img/member-logo.png" alt="律師照片">
            <img v-else  class="rounded rounded-3"  :src="lawyerData.shot" alt="熱門律師照片" >
<!--            <img class="rounded rounded-3 d-none d-sm-block " src="https://fakeimg.pl/548x411/" alt="律師照片">-->
<!--            <img class="rounded rounded-3 d-block d-sm-none " src="https://fakeimg.pl/328x246/" alt="律師照片">-->
          </div>
          <div class="col-12 col-md-6  d-flex flex-column justify-content-between">
            <div>
              <h3 class="fs-4 text-dark-shallow mb-6 mb-md-0">{{lawyerData.saying}}</h3>
            </div>
            <div class="d-flex flex-column flex-md-row justify-content-md-between">
              <div>
                <p class="text-primary">恆采律師事務所</p>
                <h3 class="text-secondary">{{lawyerData.firstName}}{{lawyerData.lastName}}</h3>
                <p>
                  <span class="material-icons text-dark-shallow align-middle">local_phone</span>
                  02-3456-7890
                </p>
                <p>
                  <span class="material-icons text-dark-shallow align-middle">local_post_office</span>
                  service@mail.com
                </p>
                <ul class="lawyer-tags d-flex mb-4 mb-md-0">
<!--                  <li v-if="lawyerData.goodAtItem.length > 0" class="rounded-pill border fs-7 bg-secondary  text-white border-1 py-1 mb-1 me-2 px-3">{{lawyerData.goodAtItem[0]}}</li>-->
<!--                  <li v-if="lawyerData.goodAtItem.length > 1" class="rounded-pill border fs-7 bg-secondary  text-white border-1 py-1 mb-1 me-2 px-3">{{lawyerData.goodAtItem[1]}}</li>-->
<!--                  <li v-if="lawyerData.goodAtItem.length > 2" class="rounded-pill border fs-7 bg-secondary  text-white border-1 py-1 mb-1 me-2 px-3">{{lawyerData.goodAtItem[2]}}</li>-->
                </ul>
              </div>
              <div class="d-grid gap-2 d-md-flex flex-md-column justify-content-md-end align-items-md-end mb-7 mb-md-0">
                <button type="button" class="btn btn-primary rounded rounded-3 px-md-6 py-3 py-md-4 text-white">預約此位律師</button>
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
                <img class="rounded rounded-3" src="../assets/img/lawyer-detailed/detailed-icon-1.png" alt="律師詳細資訊 icon">
              </div>
              <div>
                <h4 class="text-secondary">律師介紹</h4>
                <p class="fs-7 text-primary">Introduce</p>
              </div>
            </div>
            <p>我能夠用法律思維考慮、解決實際問題。熟悉行政法、公司法、合同法、勞動法、金融法、房地產法、智慧財產權法等實用性法律法規，我熱愛法律事業，對企業法務、合規及反洗錢管理有實際操作經驗和較深的理解，希望能在崗位上實現自己的人生價值。
            </p>
          </li>
          <li class="col-md-6  mb-md-5">
            <div class="d-flex mb-3 align-items-center">
              <div class="me-3">
                <img class="rounded rounded-3" src="../assets/img/lawyer-detailed/detailed-icon-2.png" alt="律師詳細資訊 icon">
              </div>
              <div>
                <h4 class="text-secondary">各縣市執業登入</h4>
                <p class="fs-7 text-primary" >Law Society Practice Login Area</p>
              </div>
            </div>
            <ul class="d-flex flex-wrap">
              <li class="mb-4 me-3">
                <span class="material-icons align-middle text-secondary">place</span>
                <span  class="text-dark-shallow">桃園</span>
              </li>
              <li class="mb-4 me-3">
                <span class="material-icons align-middle text-secondary">place</span>
                <span  class="text-dark-shallow">桃園</span>
              </li>
              <li class="mb-4 me-3">
                <span class="material-icons align-middle text-secondary">place</span>
                <span  class="text-dark-shallow">桃園</span>
              </li>
              <li class="mb-4 me-3">
                <span class="material-icons align-middle text-secondary">place</span>
                <span  class="text-dark-shallow">桃園</span>
              </li>
            </ul>
          </li>
          <li class="col-md-6  mb-md-5">
            <div class="d-flex mb-3 align-items-center">
              <div class="me-3">
                <img class="rounded rounded-3" src="../assets/img/lawyer-detailed/detailed-icon-3.png" alt="律師詳細資訊 icon">
              </div>
              <div>
                <h4 class="text-secondary">學歷</h4>
                <p class="fs-7 text-primary">Education </p>
              </div>
            </div>
            <p>國立oo大學法律學系 法學碩士</p>
            <p>國立oo大學法律學系法律學系 學士</p>
          </li>
          <li class="col-md-6  mb-md-5">
            <div class="d-flex mb-3 align-items-center">
              <div class="me-3">
                <img class="rounded rounded-3" src="../assets/img/lawyer-detailed/detailed-icon-4.png" alt="律師詳細資訊 icon">
              </div>
              <div>
                <h4 class="text-secondary">工作經歷</h4>
                <p class="fs-7 text-primary">Work experience</p>
              </div>
            </div>
            <p>oo律師事務所-律師</p>
            <p>oo法律事務所-律師 </p>
            <p>統一法律職業資格考試 合格</p>
            <p>oo市政府 法律諮詢服務律師</p>
            <p>有形資產 評價管理師</p>
            <p>勞資事務師</p>
          </li>
          <li class="col-md-6  mb-md-5">
            <div class="d-flex mb-3 align-items-center">
              <div class="me-3">
                <img class="rounded rounded-3" src="../assets/img/lawyer-detailed/detailed-icon-5.png" alt="律師詳細資訊 icon">
              </div>
              <div>
                <h4 class="text-secondary">專業領域</h4>
                <p class="fs-7 text-primary">Professional field</p>
              </div>
            </div>
            <p>不動產、土地 、 企業商務 、債務糾紛 、 刑事犯罪 、勞動問題 、婚姻、監護、家事 、政府採購、工程爭議 、消費糾紛 、車禍事故 、 遺產、繼承
            </p>
          </li>
          <li class="col-md-6  mb-md-5">
            <div class="d-flex mb-3 align-items-center">
              <div class="me-3">
                <img class="rounded rounded-3" src="../assets/img/lawyer-detailed/detailed-icon-6.png" alt="律師詳細資訊 icon">
              </div>
              <div>
                <h4 class="text-secondary">諮詢費用</h4>
                <p class="fs-7 text-primary">Consultation fees</p>
              </div>
            </div>
            <p>
              <span class="material-icons align-middle">monetization_on</span>
              現場諮詢：3000元/小時
            </p>
            <p>
              <span class="material-icons align-middle">monetization_on</span>
              電話諮詢：3000元/小時
            </p>
          </li>
        </ul>
      </div>
      <!-- 評分區塊 -->
      <div class="new-evaluation mb-11 mb-md-0">
        <div class="d-flex justify-content-between mb-3 align-items-end">
          <h3 class="text-secondary">
            <span class="material-icons fs-2 text-secondary align-top">star</span>
            4.5 <span class="fs-7">(17 則評價)</span>
          </h3>
          <button type="button" class="btn btn-outline-dark rounded-3 py-1 fs-7">查看更多評價
            <span class="material-icons align-middle fs-7">
chevron_right
</span>
          </button>
        </div>
        <div class="border border-primary rounded rounded-3 px-4 px-md-7 py-3 py-md-4" >
          <div class="row">
            <div class="col-12 col-md-3 d-flex justify-content-center d-md-block">
              <img class="rounded-pill mb-4 mt-md-0"  src="https://fakeimg.pl/166x166/" alt="評價民眾照片">
            </div>
            <div class="col-12 col-md-9 text-center text-md-start ">
              <p class="fs-7 mb-1 text-info">2021/10/03</p>
              <h3>Clara</h3>
              <div class="d-flex flex-column flex-md-row justify-content-between align-items-center mb-2">
                <Rating class="text-primary" :modelValue="5" :readonly="true" :stars="5" :cancel="false" />
                <ul class="lawyer-tags d-flex flex-wrap justify-content-center text-white">
                  <li class="rounded-pill border border-1 bg-secondary me-2 fs-7 py-1 px-3">民事訴訟</li>
                  <li class="rounded-pill border border-1 me-2 bg-secondary fs-7 py-1 px-3">刑事訴訟</li>
                </ul>
              </div>
              <p>目前已經是離婚狀態了，但是前夫並未照約定付撫養費，上網搜尋相關方式才發現法學電波的法律線上諮詢媒合律師的方式，嘗試預約媒合後，感謝律師的回覆，目前也委託律師解決問題中
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

  </main>
</template>

<script>
import { getLawyerDetailed } from '@/util/api'
export default {
  props: ['lawyerId'],
  data () {
    return {
      lawyerData: {}
    }
  },
  created () {
    this.getLawyerData()
  },
  methods: {
    getLawyerData () {
      getLawyerDetailed(`lawyerlist/Info/${this.lawyerId}`)
        .then((res) => {
          console.log(res)
          this.lawyerData = res.data
        })
        .catch((error) => {
          console.error(error)
        })
    }
  }
}
</script>
