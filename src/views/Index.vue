<template>
  <main>
    <div class="index-banner mb-7 pt-11" >
      <div class="container">
        <div class="row  d-flex justify-content-center">
          <div
            class="col-10 col-sm-8 col-lg-6 rounded-pill shadow-sm pe-1 bg-white mt-7 mt-md-4 mb-md-xxl "
          >
            <!-- banner 上下拉式選單 -->
              <div class="row">
                <div class="col-4 bg-primary-shallow py-2 py-md-4  rounded-pill ">
                  <select v-model="areaSelected"
                    class="border-0 text-secondary ps-2 pt-1 banner-select pe-8 select-area-position"
                  >
                    <option selected :value="-1">地區</option>
                    <option v-for="(item , index) in areaList" :key="index" :value="index">{{item}}</option>
                  </select>
                </div>
                <div class="col-4 col-md-5 b col-lg-6 py-2 py-md-4">
                  <select v-model="goodAtListSelected" class="border-0 text-secondary ps-2 pe-5 px-md-7 pt-1 banner-select select-case-position">
                    <option selected :value="-1">訴訟類型</option>
                    <option v-for="(item , index) in goodAtList" :key="index" :value="index">{{item}}</option>
                  </select>
                </div>
                <div class="col-4 col-md-2 d-flex justify-content-end">
                  <button @click="goSelectPage"
                    class="search-btn d-block ms-4 ms-lg-0 border-0 rounded-circle p-2 p-md-4 my-1 bg-secondary"
                    type="button"
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M17.1527 15.0943H16.0686L15.6844 14.7238C17.0292 13.1595 17.8388 11.1286 17.8388 8.91938C17.8388 3.99314 13.8456 0 8.91938 0C3.99314 0 0 3.99314 0 8.91938C0 13.8456 3.99314 17.8388 8.91938 17.8388C11.1286 17.8388 13.1595 17.0292 14.7238 15.6844L15.0943 16.0686V17.1527L21.9554 24L24 21.9554L17.1527 15.0943V15.0943ZM8.91938 15.0943C5.50257 15.0943 2.74443 12.3362 2.74443 8.91938C2.74443 5.50257 5.50257 2.74443 8.91938 2.74443C12.3362 2.74443 15.0943 5.50257 15.0943 8.91938C15.0943 12.3362 12.3362 15.0943 8.91938 15.0943Z"
                        fill="white"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        <!-- banner下方按鈕區塊 -->
          <div class="text-center">
            <h2 class="fs-4 mb-4 text-white ">
              最快速便利的律師媒合平台 <br> 找律師就來法學電波
            </h2>

            <button @click="this.$router.push({name: 'LawyerSolvation'})" class="btn btn-primary rounded-pill py-2 py-md-3 px-3 px-md-4 text-white" type="button">
              立即前往與律師諮詢
            </button>
        </div>
      </div>
    </div>
    <!-- 痛點區塊 -->
    <div class="container ">
      <div class="pain-points">
        <div class="row">
          <div class="col-md-6 offset-md-3 text-center mb-2">
            <h3 class="text-secondary">牽涉到法律糾紛，該怎麼辦？</h3>
            <div class="line bg-primary mb-3"></div>
            <p class="mb-5">
              生活中所見的一切事物，都跟法律有關係，與家人、朋友、職場甚至陌生人都可能會牽涉到法律糾紛，這些情境年是否也遇到過？或者正困擾著你？
            </p>
          </div>
        </div>
        <ul class="row justify-content-center justify-content-md-between mb-7">
          <li class="col-6 col-md-3 mb-md-6">
            <img
              class="rounded rounded-3  mb-3"
              src="../assets/img/index-img/index-pain-point-1.png"
              alt="痛點區塊"
            />
            <p>被告了，需不需要請律師？</p>
          </li>
          <li class="col-6 col-md-3 mb-md-6">
            <img
              class="rounded rounded-3  mb-3"
              src="../assets/img/index-img/index-pain-point-2.png"
              alt="痛點區塊"
            />
            <p>打官司一定要找律師處理嗎？</p>
          </li>
          <li class="col-6 col-md-3 mb-md-6">
            <img
              class="rounded rounded-3  mb-3"
              src="../assets/img/index-img/index-pain-point-3.png"
              alt="痛點區塊"
            />
            <p>怎麼找契合的律師？能配合外縣市?</p>
          </li>
          <li class="col-6 col-md-3 mb-md-6">
            <img
              class="rounded rounded-3  mb-3"
              src="../assets/img/index-img/index-pain-point-4.png"
              alt="痛點區塊"
            />
            <p>怎麼找契合的律師？能配合外縣市?</p>
          </li>
        </ul>
      </div>
    </div>
    <!-- 案件量介紹區塊 -->
    <div class="case-introduction-banner pb-4 pb-md-0">
      <div class="container px-4 px-md-0 ">
        <div class="row">
          <div class="col-md-6  offset-md-3 text-center mb-2 mt-7">
            <h3 class="text-secondary">法學電波與你一同面對法律糾紛</h3>
            <div class="line bg-primary mb-3"></div>
            <p class="mb-md-7">
              法學電波與全台各縣市律師合作，透過平台審核提供全面透明的律師資訊核實的經歷、辦案經驗及相關資料。讓你可以有效率的了解一個律師的專業能力，並透過線上諮詢對談的方式，與律師做初步媒合，幫助你找到最契合的律師。
            </p>
          </div>
        </div>
        <ul class="row text-center text-white mb-md-5 justify-content-around justify-content-md-between ">
          <li class="col-6 col-sm-5 col-md-3 mb-4">
            <div class="introduce-card py-4 bg-secondary rounded rounded-3">
              <h3>{{dashboardData.caseload}}</h3>
              <p class="text-white">媒合的案件數</p>
            </div>
          </li>
          <li class="col-6 col-sm-5 col-md-3 mb-4">
            <div class="introduce-card py-4 bg-secondary rounded rounded-3">
              <h3>{{dashboardData.totaltime}}</h3>
              <p class="text-white">線上諮詢總時數</p>
            </div>
          </li>
          <li class="col-6 col-sm-5 col-md-3 mb-4">
            <div class="introduce-card py-4 bg-secondary rounded rounded-3">
              <h3>{{dashboardData.OpinionCount}}</h3>
              <p class="text-white">會員回饋數量</p>
            </div>
          </li>
          <li class="col-6 col-sm-5 col-md-3 mb-4">
            <div class="introduce-card py-4 bg-secondary rounded rounded-3">
              <h3>{{dashboardData.cooperationLawyer}}</h3>
              <p class="text-white">合作律師人數</p>
            </div>
          </li>
        </ul>
        <!-- 情境照大圖 -->
        <div class="situational-photo "></div>

    </div>

      </div>
    <!--      電波零距離-->
    <div class="container mt-7">
      <div class="row ">
        <div
          class="col-md-6 text-center d-flex flex-column align-content-center justify-content-center"
        >
          <div>
            <h3 class="text-secondary">電波傳遞讓我跟法律零距離</h3>
            <div class="line bg-primary mb-3"></div>
            <p class="mb-4 mb-md-5">
              從互利的角度切入創造羈絆的聯繫，透過線上平台帶來的便利性，陪伴遇見法律困境的人們，建立與律師溝通的橋樑，讓我們在這裡，沒有距離。
            </p>
          </div>
          <div>
            <h3 class="text-secondary">服務優勢</h3>
            <ul class="row">
              <li class="col-6 col-md-12 mb-3">
                  <span class="material-icons text-primary align-middle"> check_circle </span
                  >&nbsp;&nbsp;可跨縣市律師媒合
              </li>
              <li class="col-6 col-md-12 mb-3">
                  <span class="material-icons text-primary align-middle"> check_circle </span
                  >&nbsp;&nbsp;把關律師資格審查
              </li>
              <li class="col-6 col-md-12 mb-3">
                  <span class="material-icons text-primary align-middle"> check_circle </span
                  >&nbsp;&nbsp;會員專屬諮詢系統
              </li>
              <li class="col-6 col-md-12 mb-3">
                  <span class="material-icons text-primary align-middle"> check_circle </span
                  >&nbsp;&nbsp;法律時事資訊補充
              </li>
            </ul>
          </div>
        </div>
        <div class="col-md-6 mb-11">
          <div class="rounded rounded-3 bg-secondary service-box"></div>
        </div>
      </div>
    </div>
<!--    熱門律師-->
    <div class="popular-lawyers">
      <div class="container">
        <h3 class="text-center mt-md-7 text-secondary">熱門律師</h3>
        <div class="line bg-primary mb-5"></div>
        <ul class="row text-center">
          <li class="col-md-3 mb-md-6" v-for="item in hotLawyerData" :key="item">
            <img v-if="item.shot === null" class="rounded rounded-3 mb-3 mug-shot-xxl" src="../assets/img/member-logo.png" alt="律師照片">
            <img v-else  class="rounded rounded-3 mb-3 mug-shot-xxl"  :src="item.shot" alt="熱門律師照片" >
            <h3>{{item.name}}</h3>
            <p>{{item.office}}</p>
          </li>
        </ul>
      </div>
    </div>
    <!-- 會員推薦區 -->
    <div class="member-praise mb-7 ">
      <div class="bg-primary-shallow pb-11 pb-md-0">
        <div class="container">
          <h3 class="text-center text-secondary pt-7">律師好評推薦</h3>
          <div class="line bg-primary mb-2"></div>
          <!-- 輪播功能 -->
          <div
            id="carouselExampleControls"
            class="carousel slide d-flex justify-content-center px-4 px-md-0"
            data-bs-ride="carousel"
          >
            <div class="carousel-inner praise-content mb-md-5">
              <div class="carousel-item" :class="index === 0 ? 'active':''" v-for="(item, index ) in memberPraise" :key="item">
                <div class="p-4"></div>
                <div
                  class="text-dark py-md-7 px-md-5 position-relative  bg-white rounded rounded-3"
                >
                  <div
                    class="rounded-pill
                                    member-photo position-absolute top-0 start-50 translate-middle"
                  >
                    <img v-if="item.shot === null" class="rounded rounded-pill mb-3 head-shot-xl" src="../assets/img/member-logo.png" alt="會員好評">
                    <img v-else  class="rounded rounded-pill head-shot-xl"  :src="item.shot" alt="熱門律師照片" >

                </div>
                <p class="pt-6 px-5 pb-1 p-md-0">
                  {{ item.lawyeropinion }}
                  </p>
                  <p class="text-end fs-4 px-5 pb-6 p-md-0">
                  -- {{item.name}}
                  </p>
                </div>
              </div>
            </div>
            <button
              class="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleControls"
              data-bs-slide="prev"
            >
              <span aria-hidden="true"
              >
                <span class="d-none d-lg-inline-block material-icons text-secondary icon-size-xl">arrow_circle_left</span>

              </span>

            </button>
            <button
              class="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleControls"
              data-bs-slide="next"
            >
              <span aria-hidden="true"
              >
                <span class="d-none d-lg-inline-block material-icons text-secondary icon-size-xl">arrow_circle_right</span>

              </span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
    </div>
    <!-- 加入會員區塊 -->
    <div class="join-member mb-11 ">
      <div class="container px-4 px-md-0">
        <div class="row ">
          <div class="col-md-6 offset-md-3 text-center mb-2">
            <h3 class="text-secondary">立即加入會員一解煩惱</h3>
            <div class="line bg-primary mb-3"></div>
            <p class="mb-md-7">
              立即加入會員，快速媒合想要的律師 ，幫助你走過所有法律訴訟上的困境。
            </p>
          </div>
        </div>
        <div
          class="row join-photo d-flex flex-column justify-content-center align-items-center"
        >
          <div class="col-6 col-md-3 offset-5 offset-md-8 text-center">
            <div class="mb-4">
              <img src="../assets/img/index-img/giftbox.png" class="d-none d-sm-inline-block mb-4"/>
              <h4 class="text-primary">會員獨家獻禮</h4>
              <div class="line bg-primary mb-2"></div>
              <p class="text-white mb-1"><span class="material-icons text-white align-middle">done</span>
                預約免費諮詢</p>
              <p class="text-white mb-1"><span class="material-icons text-white align-middle">done</span>
                無限次數配對</p>
              <p class="text-white mb-1"><span class="material-icons text-white align-middle">done</span>
                律師資格把關</p>
            </div>
            <button
              type="button"
              class="join-btn py-2 px-3 p-sm-4 fw-bold btn btn-primary text-white rounded-pill"
            >
              註冊成為會員
            </button>
          </div>
        </div>
      </div>
    </div>
  </main>
<!--  <RegisterModal ref="registerModal"></RegisterModal>-->
</template>
<script>

import { getIndexDashboard, getIndexHotLawyer, getMemberPraise, getFilterCondition } from '@/util/api'
// 會導致重複註冊，要再研究
// import RegisterModal from '../components/modal/RegisterModal'

export default {
  components: {
    // RegisterModal
  },
  data () {
    return {
      dashboardData: {},
      hotLawyerData: {},
      memberPraise: {},
      areaList: '',
      goodAtList: '',
      areaSelected: -1,
      goodAtListSelected: -1
    }
  },
  created () {
    this.getIndexDashboard()
    this.getIndexHotLawyer()
    this.getMemberPraise()
    this.getFilterCondition()
  },
  methods: {
    getIndexDashboard () {
      getIndexDashboard()
        .then((res) => {
          this.dashboardData = res.data
        })
        .catch((error) => {
          console.error(error)
        })
    },
    getIndexHotLawyer () {
      getIndexHotLawyer()
        .then((res) => {
          console.log(res.data)
          this.hotLawyerData = res.data.slice(0, 4)
        })
        .catch((error) => {
          console.error(error)
        })
    },
    getMemberPraise () {
      getMemberPraise()
        .then((res) => {
          console.log(res)
          this.memberPraise = res.data
          console.log(this.memberPraise)
        })
        .catch((error) => {
          console.error(error)
        })
    },
    getFilterCondition () {
      getFilterCondition()
        .then((res) => {
          console.log(res)
          this.areaList = res.data.areaList
          this.areaList.shift()
          this.goodAtList = res.data.goodAtList
          this.goodAtList.shift()
        })
        .catch((error) => {
          console.error(error)
        })
    },
    goSelectPage () {
      console.log(this.areaSelected, this.goodAtListSelected)
      this.$router.push({
        name: 'LawyerSolvation',
        query: {
          goodAtListSelected: this.goodAtListSelected,
          areaSelected: this.areaSelected
        }
      })
    }
  }
}
</script>
