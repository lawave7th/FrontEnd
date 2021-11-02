<template>
  <div class="border border-primary rounded rounded-3 px-md-7 py-md-5 mb-11 mb-md-0">
    <form>
      <!-- 表單填寫區塊 -->
      <div class="row g-3 justify-content-center ">
        <div class="col-10 col-md-5 ">
          <label for="peopleName" class="form-label mt-2 mt-md-0">名字</label>
          <input type="text" class="form-control" id="peopleName" v-model="data.firstName">
        </div>
        <div class="col-10 col-md-5">
          <label for="peopleLastName" class="form-label">姓氏</label>
          <input type="text" class="form-control" id="peopleLastName" v-model="data.lastName">
        </div>
        <div class="col-10">
          <div class="row">
            <div class="col-12 col-md-auto">
              <label for="peoplePhone" class="form-label">電話號碼</label>
              <input type="email" class="form-control" id="peoplePhone" v-model="data.phone">
            </div>
          </div>
        </div>
        <div class="col-10">
          <div class="row">
            <div class="col-12 col-md-auto">
              <label for="peopleEmail" class="form-label">電子信箱</label>
              <input type="text" class="form-control" id="peopleEmail" v-model="data.mail">
            </div>
          </div>
        </div>
<!--        <div class="col-10">-->
<!--          <p class="fw-bold">工作經歷</p>-->
<!--          <div class="row">-->
<!--            <div class="col-md-6  mb-3">-->
<!--              <label for="companyName" class="form-label">公司名稱：</label>-->
<!--              <input type="text" class="form-control" id="companyName">-->
<!--            </div>-->
<!--            <div class="col-md-6 mb-3">-->
<!--              <label for="jobTitle" class="form-label">職位名稱：</label>-->
<!--              <input type="text" class="form-control" id="jobTitle">-->
<!--            </div>-->
<!--          </div>-->
<!--          <button class="btn btn-primary-light rounded-pill fs-7">-->
<!--            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">-->
<!--              <path d="M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM15 11H11V15H9V11H5V9H9V5H11V9H15V11Z" fill="black"/>-->
<!--            </svg>-->
<!--            <span class="align-middle">-->
<!--              新增經歷-->
<!--            </span>-->
<!--          </button>-->
<!--        </div>-->
        <div class="col-10">
          <label for="professionalField" class="form-label">個人介紹</label>
          <textarea class="form-control" id="professionalField" rows="3" v-model="data.introduction"></textarea>
        </div>

        <div class="col-10 d-flex justify-content-end">
          <button class="btn btn-secondary rounded rounded-2 py-2 px-3 px-md-9 py-md-4 mb-3 mb-md-0" type="button" @click="onSubmit">儲存修改</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import { getMemberData, reviseMemberData } from '@/util/api'
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
          this.data = res.data
          console.log(this.data)
        })
        .catch((error) => { console.error(error) })
    },
    onSubmit () {
      reviseMemberData(this.data)
        .then((res) => {
          console.log(res)
        })
        .catch((error) => { console.error(error) })
    }
  }
}
</script>
