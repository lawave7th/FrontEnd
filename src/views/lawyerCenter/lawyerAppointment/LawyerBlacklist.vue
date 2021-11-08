<template>
  <!-- 封鎖名單 -->
  <div class="block-members-list">
    <ul>
      <li v-for="(item , index) in blackList.data" :key="index" :class="index%2===0? '':'bg-primary-shallow'"
          class="row flex-column flex-md-row border border-primary m-0 justify-content-md-between rounded rounded-3 px-4 px-md-7  mb-4 py-3 align-items-md-center">
        <div class="col-12 col-md-2 mb-4 mb-md-0">
          <img v-if="item.shot === null" class="rounded rounded-pill mug-shot-sm"
               src="../../../assets/img/member-logo.png" alt="黑名單照片">
          <img v-else class="rounded rounded-pill mug-shot-sm" :src="item.shot" alt="黑名單照片">
        </div>
        <div class="col-12 col-md-7">
          <h4 class="mb-2 text-secondary">
            {{item.lastName}}{{item.firstName}}
          </h4>
          <div class="d-flex flex-column flex-md-row">
            <p class="m-0 me-2 mb-2 mb-md-0">
                <span class="material-icons align-middle text-secondary">
                local_phone
                </span>
              {{item.phone}}
            </p>
            <p class="m-0 mb-3 mb-md-0">
                <span class="material-icons align-middle text-secondary">
                  email
                </span>
              {{item.mail}}
            </p>
          </div>
        </div>
        <div class="col-12 col-md-3 d-flex justify-content-end">
          <button type="button" class="btn btn-outline-secondary" @click="onSubmit(item.id)">
            <span class="material-icons align-middle">lock_open</span>
            解除封鎖
          </button>
        </div>

      </li>
    </ul>
  </div>
</template>

<script>
import { getBlacklist, unblock } from '@/util/api'

export default {
  data () {
    return {
      blackList: {}
    }
  },
  created () {
    this.getBlacklist()
  },
  methods: {
    getBlacklist () {
      getBlacklist()
        .then((res) => {
          console.log(res.data)
          this.blackList = res.data
        })
        .catch((error) => {
          console.error(error)
        })
    },
    onSubmit (id) {
      unblock(`lawyer/blockReservation/del/${id}`)
        .then((res) => {
          console.log(res.data)
          this.getBlacklist()
          window.showToast.showSuccessToast('取消黑名單成功')
        })
        .catch((error) => {
          console.error(error)
        })
    }
  }
}
</script>
