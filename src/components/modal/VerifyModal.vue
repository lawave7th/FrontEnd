<template>
  <!-- 輸入驗證碼 -->
  <div
    class="modal fade"
    id="verifyModal"
    tabindex="-1"
    aria-labelledby="verifyModal"
    aria-hidden="true"
    ref="modal"
  >
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="position-relative">
          <button
            type="button"
            class="m-3 btn  fs-4 position-absolute top-0 end-0"
            data-bs-dismiss="modal"
            aria-label="Close"
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14 1.41L12.59 0L7 5.59L1.41 0L0 1.41L5.59 7L0 12.59L1.41 14L7 8.41L12.59 14L14 12.59L8.41 7L14 1.41Z"
                fill="black"
              />
            </svg>
          </button>
          <h2
            class="modal-title text-center mt-3 mt-md-7 mb-2 text-secondary"
            id="verifyModalLabel"
          >
            請確認您的電子信箱
          </h2>
          <div class="line bg-primary mb-3"></div>
        </div>
        <div class="modal-body d-flex flex-column align-items-center">
          <h3 class="fs-4">輸入驗證碼</h3>
          <p class="mb-md-5">請輸入法學電波剛傳送至您信箱的 4 位數驗證碼</p>
          <ul class="d-flex verify-box justify-content-center">
            <li>
              <input class="border  border-1 rounded text-center" type="text" v-model="nums[0].val" />
            </li>
            <li class="ms-4">
              <input class="border  border-1 rounded text-center" type="text" v-model="nums[1].val"/>
            </li>
            <li class="ms-4">
              <input class="border  border-1 rounded text-center" type="text" v-model="nums[2].val"/>
            </li>
            <li class="ms-4">
              <input class="border  border-1 rounded text-center" type="text" v-model="nums[3].val" @input="groupVerification"/>
            </li>
          </ul>
        </div>
        <div
          class="modal-footer border-0 text-center flex-column align-items-center "
        >
          <p class="text-danger m-0 ms-1" v-show="showError">
            <span class="material-icons align-middle fs-7">cancel</span>&nbsp;驗證碼輸入不一致，請重新輸入</p>
          <span
          >沒有收到信件？<a class="border-bottom text-primary" @click.prevent="verifyMail" href="#">重新傳送</a></span
          >
          <a class="d-block mb-7 border-bottom text-primary" data-bs-dismiss="modal" href="#">稍後再完成</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import modalMixin from '@/mixins/modalMixin'
import { userVerifyMail } from '@/util/api'

export default {
  props: ['mail'],
  data () {
    return {
      modal: {},
      verifyCode: '',
      showError: false,
      nums: [{ val: '' }, { val: '' }, { val: '' }, { val: '' }]
    }
  },
  methods: {
    reset () {
      this.showError = false
      this.nums = [{ val: '' }, { val: '' }, { val: '' }, { val: '' }]
    },
    sendVerifyCode (verifyCode) {
      this.$emit('verify-status')
      this.$emit('verify-code', verifyCode)
    },
    groupVerification  () {
      let str = ''
      this.nums.forEach((item) => {
        str += item.val
      })
      if (str === this.verifyCode) {
        this.sendVerifyCode(str)
        this.reset()
        this.hideModal()
      } else {
        this.showError = true
      }
    },
    verifyMail () {
      userVerifyMail(this.mail)
        .then((res) => {
          this.verifyCode = res.data
        })
        .catch((error) => {
          console.error(error)
        })
    }
  },
  mixins: [modalMixin]
}
</script>
