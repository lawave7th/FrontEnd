<template>
  <main>
    <div class="container-fluid g-0">
      <div class="lawyer-solvation-banner pt-11 mb-7">
        <div class="container">
          <div class="row  d-flex justify-content-center">
            <div
              class="col-10 col-sm-8 col-lg-6 rounded-pill shadow-sm pe-1 bg-white mt-7 mt-md-4 mb-md-xxl "
            >
              <!-- banner 上下拉式選單 -->
              <div class="row">
                <div class="col-4 bg-primary-shallow py-2 py-md-4  rounded-pill ">
                  <select   v-model="areaSelected"
                    class="border-0 text-secondary ps-2 pt-1 banner-select pe-8 select-area-position"
                  >
                    <option selected :value="-1">地區</option>
                    <option v-for="(item , index) in areaList" :key="index" :value="index">{{item}}</option>
                  </select>
                </div>
                <div class="col-4 col-md-5 b col-lg-6 py-2 py-md-4" >
                  <select v-model="goodAtListSelected" class="border-0 text-secondary ps-2 pe-5 px-md-7 pt-1 banner-select select-case-position">
                    <option selected :value="-1">訴訟類型</option>
                    <option v-for="(item , index) in goodAtList" :key="index" :value="index">{{item}}</option>
                  </select>
                </div>
                <div class="col-4 col-md-2 d-flex justify-content-end">
                  <button @click="getSelectData"
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
      </div>
    </div>
    </div>
    <!-- 媒合痛點 -->
    <div class="container">
      <div class="row">
        <div class="col-md-6  offset-md-3 text-center mb-2">
          <h3 class="text-secondary">與律師媒合的小眉角</h3>
          <div class="line bg-primary mb-3"></div>
          <p class="mb-7">
            別人推薦厲害的律師不一定真的「適合」你的情況。 我們整理出在找律師時，要把握的3大重點，協助您順利、快速媒合到合適您的好律師！
          </p>
        </div>
      </div>
      <ul class="row mb-md-7 justify-content-between">
        <li class="col-12 col-md-4 row justify-content-center mb-4 mb-md-0">
          <div class="col-6 ">
            <img src="../assets/img/lawyer-solvation-img/lawyer-pain-point-1.png" class="img-fluid rounded " alt="律師媒合痛點">
          </div>
          <div class="col-6 g-0">
            <h3 class="fs-4 text-secondary">是否有律師資格</h3>
            <p>建議先確認律師身份，可透過法務部的律師查詢系統。在法學電波上面的律師，都是經過認證資格審核有律師資格</p>
          </div>
        </li>
        <li class="col-12 col-md-4 row justify-content-center mb-4 mb-md-0">
          <div class="col-6">
            <img src="../assets/img/lawyer-solvation-img/lawyer-pain-point-2.png" class="img-fluid rounded " alt="律師媒合痛點">
          </div>
          <div class="col-6 g-0">
            <h3 class="fs-4 text-secondary">是否有律師資格</h3>
            <p>建議先確認律師身份，可透過法務部的律師查詢系統。在法學電波上面的律師，都是經過認證資格審核有律師資格</p>
          </div>
        </li>
        <li class="col-12 col-md-4 row justify-content-center mb-4 mb-md-0">
          <div class="col-6">
            <img src="../assets/img/lawyer-solvation-img/lawyer-pain-point-3.png" class="img-fluid rounded " alt="律師媒合痛點">
          </div>
          <div class="col-6 g-0">
            <h3 class="fs-4 text-secondary">是否有律師資格</h3>
            <p>建議先確認律師身份，可透過法務部的律師查詢系統。在法學電波上面的律師，都是經過認證資格審核有律師資格</p>
          </div>
        </li>
      </ul>
    </div>
    <!-- 律師卡片區塊 -->
    <div class="container py-md-7">
      <ul  class="row  row-cols-1 row-cols-md-3 justify-content-center justify-content-md-between">
        <!-- 卡片內容 -->
        <li v-for="item in lawyerData" :key="item"
          class="col d-flex  flex-column align-items-center lawyer-card py-4 py-md-5 mb-4 rounded rounded-3 border border-1  position-relative border-primary">
          <a href="#" @click.prevent="collectHeart(item.id)" class="position-absolute top-0 end-0 m-4">
            <span class="material-icons text-info text-primary" v-if="!item.collection">  favorite_border </span>
            <span class="material-icons text-danger" v-else>favorite</span>
          </a>
          <div class="lawyer-img mb-4">
            <img v-if="item.shot === null" class="rounded rounded-pill mug-shot-xl" src="../assets/img/member-logo.png" alt="律師照片">
            <img v-else  class="rounded rounded-pill mug-shot-xl"  :src="item.shot" alt="熱門律師照片" >
          </div>
          <div class="lawyer-card-content text-center">
            <h3 class="text-center mb-2 text-secondary">{{item.name}}</h3>
            <div class="line bg-primary mb-2"></div>
            <p class="mb-3">{{item.office}}</p>
            <p class="fs-7 px-10">{{item.saying}}</p>
            <ul class="lawyer-tags mb-3" >
              <li v-if="item.lawyerGoodAtType.length > 0" class="rounded-pill d-inline-block border px-3 py-1 fs-7 text-white bg-secondary border-1 " >{{item.lawyerGoodAtType[0]}}</li>
              <li v-if="item.lawyerGoodAtType.length > 1" class="rounded-pill d-inline-block border px-3 py-1 fs-7 text-white bg-secondary border-1 " >{{item.lawyerGoodAtType[1]}}</li><br>
              <li v-if="item.lawyerGoodAtType.length > 2" class="rounded-pill d-inline-block border px-3 py-1 fs-7 text-white bg-secondary border-1 " >{{item.lawyerGoodAtType[2]}}</li>
            </ul>
            <a class="text-center text-info" @click.prevent="goLawyerDetailedPage(item.id)" href="#">瞭解更多
              <span class="material-icons align-baseline fs-7"> arrow_forward_ios</span>
              <span class="material-icons align-baseline fs-7">arrow_forward_ios</span>
            </a>
          </div>
          </li>
      </ul>
    </div>
    <div class="container d-flex justify-content-end mb-7">
      <!-- 分頁按鈕 -->
      <ul class="appointment-pagination d-flex justify-content-md-end align-items-center">
        <li class="me-2">
          <a class="d-block   btn-primary rounded-pill text-center fs-7" :class="nowPage === 1 ? 'text-white' :'bg-primary-shallow'" @click.prevent="getData(1)" href="#">1</a>
        </li>
        <li class="me-2">
          <a class="d-block text-secondary  btn-primary  rounded-pill text-center fs-7" :class="nowPage === 2 ? 'text-white' :'bg-primary-shallow '" @click.prevent="getData(2)" href="#">2</a>
        </li>
        <li>
          <a class="d-block pagination-next text-white btn-primary bg-primary-shallow rounded-pill text-center"
             href="#" >
            <img src="../assets/img/next-page.png" class="mb-2" height="8" width="10"/></a>
        </li>
      </ul>
    </div>
  </main>
</template>
<script>
import { getLawyerList, collectLawyer, getFilterCondition, getSelectData } from '@/util/api'
export default {
  data () {
    return {
      lawyerData: {},
      nowPage: '',
      areaList: '',
      goodAtList: '',
      areaSelected: -1,
      goodAtListSelected: -1
    }
  },
  created () {
    console.log(this.$route.query)
    if ('goodAtListSelected' in this.$route.query) {
      this.goodAtListSelected = this.$route.query.goodAtListSelected
      this.areaSelected = this.$route.query.areaSelected
      this.getSelectData()
    } else {
      this.getData()
    }
    this.getData()
    this.getFilterCondition()
  },
  methods: {
    getData (page = 1) {
      getLawyerList(`api/lawyerlist/${page}`)
        .then((res) => {
          this.nowPage = page
          this.lawyerData = res.data.data
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
    collectHeart (id) {
      collectLawyer(`api/PublicCollection/${id}`)
        .then((res) => {
          const index = this.lawyerData.findIndex(item => item.id === id)
          if (this.lawyerData[index].collection === true) {
            this.lawyerData[index].collection = false
          } else {
            this.lawyerData[index].collection = true
          }
        })
        .catch((error) => {
          console.error(error)
        })
    },
    goLawyerDetailedPage (id) {
      this.$router.push(`/lawyer-detailed/${id}`)
    },
    getSelectData () {
      getSelectData(`api/lawyerlistsearch/${this.goodAtListSelected}/${this.areaSelected}/`)
        .then((res) => {
          console.log(res)
          this.lawyerData = res.data.data
          this.$router.push({ query: {} })
        })
        .catch((error) => {
          console.error(error)
        })
    }
  }
}
</script>
