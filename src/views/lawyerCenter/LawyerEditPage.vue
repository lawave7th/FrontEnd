<template>
  <div class="border border-primary rounded rounded-3 pt-4 mb-11 mb-md-0 px-4 px-md-7 py-md-5">
    <form>
      <!-- 上方切換開關 -->
      <div
        class="form-check form-switch ms-0 d-flex justify-content-end align-items-center pb-4 border-bottom mb-4">
        <label class="form-check-label me-3" for="lawyerOpen">公開資料供媒合搜尋使用</label>
        <input class="fs-3 form-check-input ms-0" type="checkbox" id="lawyerOpen" v-model="data.isPublic" @change="changePublic" >
      </div>
      <!-- 表單填寫區塊 -->
      <div class="row g-3">
        <div class="col-12">
          <div class="row">
            <div class="col-md-4 mb-4 mb-md-0">
              <label for="lawyerName" class="form-label fw-bold">名字</label>
              <input type="text" class="form-control" id="lawyerName" v-model="data.firstName">
            </div>
            <div class="col-md-4">
              <label for="lawyerLastName" class="form-label fw-bold">姓氏</label>
              <input type="text" class="form-control" id="lawyerLastName" v-model="data.lastName">
            </div>
          </div>
        </div>
        <div class="col-12">
          <div class="row">
            <div class="col-md-4 mb-4 mb-md-0">
              <label for="lawyerPhoneNumber" class="form-label fw-bold">電話號碼</label>
              <input type="text" class="form-control" id="lawyerPhoneNumber" v-model="data.phone">
            </div>
            <div class="col-md-4 mb-4 mb-md-0">
              <label for="lawyerEmail" class="form-label fw-bold">電子信箱</label>
              <input type="email" class="form-control" id="lawyerEmail" v-model="data.mail" readonly >
            </div>
          </div>
        </div>
        <div class="col-12">
          <p class="fw-bold">工作經歷</p>
          <div class="row" v-for="(item,index) in data.experienceList" :key="index">
            <div class="col-md-4 mb-4 mb-md-3">
              <label for="companyName" class="form-label">公司名稱：</label>
              <input type="text" class="form-control" id="companyName" v-model="item.companyName">
            </div>
            <div class="col-md-4 mb-4 mb-md-3">
              <label for="jobTitle" class="form-label">職位名稱：</label>
              <input type="text" class="form-control" id="jobTitle" v-model="item.jobTitle">
            </div>
          </div>
          <button class="btn btn-primary-light rounded-pill fs-7" @click.prevent="addExperience">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM15 11H11V15H9V11H5V9H9V5H11V9H15V11Z"
                fill="black"/>
            </svg>
            <span class="align-middle">
              新增經歷
            </span>
          </button>
        </div>
        <div class="col-12">
          <p class="fw-bold">個人學歷</p>
          <div class="row" v-for="(item,index) in data.education" :key="index" >
            <div class="col-md-4 mb-4 mb-md-3">
              <label for="schoolName" class="form-label">學校名稱：</label>
              <input type="text" class="form-control" id="schoolName" v-model="item.schoolName">
            </div>
            <div class="col-md-4 mb-4 mb-md-3">
              <label for="departmentName" class="form-label">科系名稱：</label>
              <input type="text" class="form-control" id="departmentName" v-model="item.departmentName">
            </div>
            <div class="col-4 col-md-3 mb-4">
              <label for="degree" class="form-label" >學歷：</label>
              <select class="form-select select-icon" id="degree" v-model="item.degree">
                <option value="博士">博士</option>
                <option value="碩士">碩士</option>
                <option value="大學">大學</option>
                <option value="四技">四技</option>
                <option value="二技">二技</option>
              </select>
            </div>
          </div>
          <button class="btn btn-primary-light rounded-pill fs-7 mb-4" @click.prevent="addEducation">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM15 11H11V15H9V11H5V9H9V5H11V9H15V11Z"
                fill="black"/>
            </svg>
            <span class="align-middle">
              新增學歷
            </span>
          </button>
        </div>
        <div class="col-12 mb-4">
          <label for="lawyerSaying" class="form-label">律師名言</label>
          <input type="text" class="form-control" id="lawyerSaying" v-model="data.saying">
        </div>
        <div class="col-12">
          <p class="fw-bold">領域類別（最多選取三個）</p>
          <div class="row mb-md-2">
            <div class="col-12 col-md-auto mb-3 mb-md-0">
              <input class="form-check-input me-2" type="checkbox" value="民事訴訟"
                     id="civilAction" v-model="data.goodAtItem" @change="controlNum">
              <label class="form-check-label" for="civilAction">
                民事訴訟
              </label>
            </div>
            <div class="col-12 col-md-auto mb-3 mb-md-0">
              <input class="form-check-input me-2" type="checkbox" value="刑事訴訟"
                     id="criminalSuit" v-model="data.goodAtItem" @change="controlNum">
              <label class="form-check-label" for="criminalSuit">
                刑事訴訟
              </label>
            </div>
            <div class="col-12 col-md-auto mb-3 mb-md-0">
              <input class="form-check-input me-2" type="checkbox" value="家事訴訟"
                     id="familyLitigation" v-model="data.goodAtItem" @change="controlNum">
              <label class="form-check-label" for="familyLitigation">
                家事訴訟
              </label>
            </div>
            <div class="col-12 col-md-auto mb-3 mb-md-0">
              <input class="form-check-input me-2" type="checkbox" value="勞資爭議"
                     id="laborDispute" v-model="data.goodAtItem" @change="controlNum">
              <label class="form-check-label" for="laborDispute">
                勞資爭議
              </label>
            </div>
            <div class="col-12 col-md-auto mb-3 mb-md-0">
              <input class="form-check-input me-2" type="checkbox" value="消費糾紛"
                     id="consumerDisputes" v-model="data.goodAtItem" @change="controlNum">
              <label class="form-check-label" for="consumerDisputes">
                消費糾紛
              </label>
            </div>
            <div class="col-12 col-md-auto mb-3 mb-md-0">
              <input class="form-check-input me-2" type="checkbox" v-model="data.goodAtItem" @change="controlNum" value="其他" id="other">
              <label class="form-check-label" for="other">
                其他
              </label>
            </div>
          </div>

        </div>
        <div class="col-12">
          <label for="lawyerIntroduction" class="form-label fw-bold">律師介紹</label>
          <textarea class="form-control" id="lawyerIntroduction" v-model="data.introduction" rows="3"></textarea>
        </div>
        <div class="col-12">
          <p class="fw-bold">具有各縣市律師公會執業登入地區</p>
          <ul class="row mb-2">
            <li class="col-auto mb-3 mb-md-0">
              <input class="form-check-input me-2" type="checkbox" v-model="data.areaItem" value="台北" id="taipei">
              <label class="form-check-label" for="taipei">
                台北
              </label>
            </li>
            <li class="col-auto mb-3 mb-md-0">
              <input class="form-check-input me-2" type="checkbox" v-model="data.areaItem" value="新北" id="new-taipei">
              <label class="form-check-label" for="new-taipei">
                新北
              </label>
            </li>
            <li class="col-auto mb-3 mb-md-0">
              <input class="form-check-input me-2" type="checkbox" v-model="data.areaItem" value="桃園" id="taoyuan">
              <label class="form-check-label" for="taoyuan">
                桃園
              </label>
            </li>
            <li class="col-auto mb-3 mb-md-0">
              <input class="form-check-input me-2" type="checkbox" v-model="data.areaItem"  value="台中" id="taichung">
              <label class="form-check-label" for="taichung">
                台中
              </label>
            </li>
            <li class="col-auto mb-3 mb-md-0">
              <input class="form-check-input me-2" type="checkbox" v-model="data.areaItem" value="台南" id="tainan">
              <label class="form-check-label" for="tainan">
                台南
              </label>
            </li>
            <li class="col-auto mb-3 mb-md-0">
              <input class="form-check-input me-2" type="checkbox" v-model="data.areaItem" value="高雄" id="kaohsiung">
              <label class="form-check-label" for="kaohsiung">
                高雄
              </label>
            </li>
            <li class="col-auto mb-3 mb-md-0">
              <input class="form-check-input me-2" type="checkbox" v-model="data.areaItem" value="新竹" id="hsinchu">
              <label class="form-check-label" for="hsinchu">
                新竹
              </label>
            </li>
            <li class="col-auto mb-3 mb-md-0">
              <input class="form-check-input me-2" type="checkbox" v-model="data.areaItem"  value="苗栗" id="miaoli">
              <label class="form-check-label" for="miaoli">
                苗栗
              </label>
            </li>
            <li class="col-auto mb-3 mb-md-0">
              <input class="form-check-input me-2" type="checkbox" v-model="data.areaItem" value="彰化" id="changhua">
              <label class="form-check-label" for="changhua">
                彰化
              </label>
            </li>
            <li class="col-auto mb-3 mb-md-0">
              <input class="form-check-input me-2" type="checkbox" v-model="data.areaItem" value="南投" id="nantou">
              <label class="form-check-label" for="nantou">
                南投
              </label>
            </li>
            <li class="col-auto mb-3 mb-md-0">
              <input class="form-check-input me-2" type="checkbox" v-model="data.areaItem" value="雲林" id="yunlin">
              <label class="form-check-label" for="yunlin">
                雲林
              </label>
            </li>
            <li class="col-auto mb-3 mb-md-0">
              <input class="form-check-input me-2" type="checkbox" v-model="data.areaItem" value="嘉義" id="chiayi">
              <label class="form-check-label" for="chiayi">
                嘉義
              </label>
            </li>
            <li class="col-auto mb-3 mb-md-0">
              <input class="form-check-input me-2" type="checkbox" v-model="data.areaItem" value="屏東" id="pingtung">
              <label class="form-check-label" for="pingtung">
                屏東
              </label>
            </li>
            <li class="col-auto mb-3 mb-md-0">
              <input class="form-check-input me-2" type="checkbox" v-model="data.areaItem" value="宜蘭" id="yilan">
              <label class="form-check-label" for="yilan">
                宜蘭
              </label>
            </li>
            <li class="col-auto mb-3 mb-md-0">
              <input class="form-check-input me-2" type="checkbox" v-model="data.areaItem" value="花蓮" id="hualien">
              <label class="form-check-label" for="hualien">
                花蓮
              </label>
            </li>
            <li class="col-auto mb-3 mb-md-0">
              <input class="form-check-input me-2" type="checkbox" v-model="data.areaItem" value="台東" id="taitung">
              <label class="form-check-label" for="taitung">
                台東
              </label>
            </li>
            <li class="col-auto mb-3 mb-md-0">
              <input class="form-check-input me-2" type="checkbox" v-model="data.areaItem" value="澎湖" id="penghu">
              <label class="form-check-label" for="penghu">
                澎湖
              </label>
            </li>
            <li class="col-auto mb-3 mb-md-0">
              <input class="form-check-input me-2" type="checkbox" v-model="data.areaItem" value="金門" id="kinmen">
              <label class="form-check-label" for="kinmen">
                金門
              </label>
            </li>
            <li class="col-auto mb-3 mb-md-0">
              <input class="form-check-input me-2" type="checkbox" v-model="data.areaItem" value="連江" id="lienchiang">
              <label class="form-check-label" for="lienchiang">
                連江
              </label>
            </li>
            <li class="col-auto mb-3 mb-md-0">
              <input class="form-check-input me-2" type="checkbox" v-model="data.areaItem" value="其他" id="area-other">
              <label class="form-check-label" for="area-other">
                其他
              </label>
            </li>
          </ul>
        </div>
        <div class="col-12">
          <label for="professionalField" class="form-label fw-bold">專業領域</label>
          <textarea class="form-control" id="professionalField" rows="3"  v-model="data.professional" ></textarea>
        </div>
        <div class="col-12">
          <p class="fw-bold">諮詢費用</p>
          <div class="row g-3 align-items-center mb-3 mb-md-2">
            <div class="col-auto">
              <label for="onSitePrice" class="col-form-label">現場諮詢：</label>
            </div>
            <div class="col-auto">
              <input type="number" id="onSitePrice" class="form-control" v-model="data.faceCost">
            </div>
            <div class="col-auto">
             <span>
             元/小時
            </span>
            </div>
          </div>
          <div class="row g-3 align-items-center mb-3 mb-md-2">
            <div class="col-auto">
              <label for="telephonePrice" class="col-form-label">電話諮詢：</label>
            </div>
            <div class="col-auto">
              <input type="number" id="telephonePrice" class="form-control" v-model="data.phoneCost">
            </div>
            <div class="col-auto">
             <span>
              元/小時
               </span>
            </div>
          </div>
        </div>
        <div class="d-flex flex-column align-items-end">
          <button class="btn btn-secondary mb-3 py-md-4 px-md-10" @click="onSubmit" type="button">儲存修改</button>
          <p>通過資格審核便可開啟上方公開資料核取鈕</p></div>
      </div>
    </form>
  </div>
</template>

<script>
// 防呆

import { getMemberData, reviseMemberData, lawyerChangePublic } from '@/util/api'

export default {
  data () {
    return {
      data: {}
    }
  },
  mounted () {
    this.getDeta()
  },
  methods: {
    getDeta () {
      getMemberData()
        .then((res) => {
          console.log(res)
          this.data = res.data
        })
        .catch((error) => {
          console.error(error)
        })
    },
    controlNum () {
      if (this.data.goodAtItem.length > 3) {
        window.showToast.showErrorToast('不能選許超過3個')
        this.data.goodAtItem.pop()
      }
    },
    addExperience () {
      this.data.experienceList.push({
        companyName: '',
        jobTitle: ''
      })
    },
    addEducation () {
      this.data.education.push({
        schoolName: '',
        departmentName: '',
        degree: ''
      })
    },
    changePublic () {
      lawyerChangePublic({ isPublic: this.data.isPublic })
        .then((res) => {
          console.log(res)
        })
        .catch((error) => {
          console.error(error.response)
          if (error.response.data.Message === '未驗證不能修改') {
            this.data.isPublic = false
          }
        })
    },
    onSubmit () {
      reviseMemberData(this.data)
        .then((res) => {
          console.log(res)
        })
        .catch((error) => {
          console.log(error.response)
        })
    }
  }

}
</script>
