<template>
  <ul>
    <li v-for="(item , index) in data.data" :key="index" :class="index%2===0? '':'bg-primary-shallow'"
      class="d-flex flex-column flex-md-row justify-content-md-between align-items-md-center border m-0 border-primary rounded rounded-3 px-4 py-3 px-md-7  mb-md-4 py-md-3">
      <div>
        <span class="material-icons text-danger d-none d-md-block" v-if="true">favorite</span>
        <span class="material-icons text-info text-primary d-none d-md-block" v-else>  favorite_border </span>
      </div>
      <div>
        <div class="d-flex justify-content-between">
          <h4 class="mb-2">
            {{item.lastName}}{{item.firstName}}
          </h4>
          <span class="material-icons text-danger d-block d-md-none" v-if="true">favorite</span>
          <span class="material-icons text-info text-primary d-block d-md-none" v-else>  favorite_border </span>
        </div>
        <p class="m-0">{{item.office}}</p>
      </div>
      <div>
        <p class="m-0 mb-2">
          <span class="material-icons align-middle text-secondary">
            local_phone
          </span>
          {{item.phone}}</p>
        <p class="m-0 mb-2">
          <span class="material-icons align-middle text-secondary">
          forum
          </span>

          {{item.mail}}</p>
      </div>
      <ul class="lawyer-tags d-flex flex-row flex-wrap flex-md-column align-items-md-center mb-2 mb-md-0 ">
        <li v-for="(goodAtItem , index ) in item.goodAtItem" :key="index"
            class="rounded-pill border border-1 bg-secondary me-2 fs-7 py-1 px-3 text-white">
          <div v-if="item.goodAtItem.length > index">{{item.goodAtItem[index]}}</div>
        </li>
      </ul>
      <div class="text-end text-md-center">
        <button type="button" class="btn btn-secondary" @click="goLawyerDetailedPage(item.id)" >
          個人資訊
          <span class="material-icons align-middle">arrow_right_alt</span>
        </button>
      </div>
    </li>
  </ul>
</template>

<script>
import { getCollection } from '@/util/api'

export default {
  data () {
    return {
      data: {}
    }
  },
  created () {
    this.getCollection()
  },
  methods: {
    getCollection () {
      getCollection()
        .then((res) => {
          console.log(res.data)
          this.data = res.data
          this.data.data.forEach((item) => {
            if (item.firstName === null && item.lastName === null) {
              item.firstName = '無名氏'
            }
          })
        })
        .catch((error) => {
          console.error(error)
        })
    },
    goLawyerDetailedPage (id) {
      this.$router.push(`/lawyer-detailed/${id}`)
    }
  }
}
</script>
