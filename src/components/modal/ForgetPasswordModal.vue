<template>
  <!-- 忘記密碼 Modal -->
  <div class="modal fade" ref="forgetPasswordModal" id="forgetPasswordModal" tabindex="-1" aria-labelledby="forgetPasswordModalLabel"
       aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="position-relative">
          <button type="button" class="m-3 btn  fs-4 position-absolute top-0 end-0" data-bs-dismiss="modal"
                  aria-label="Close">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none"
                 xmlns="http://www.w3.org/2000/svg">
              <path
                d="M14 1.41L12.59 0L7 5.59L1.41 0L0 1.41L5.59 7L0 12.59L1.41 14L7 8.41L12.59 14L14 12.59L8.41 7L14 1.41Z"
                fill="black"/>
            </svg>
          </button>
          <h2 class="modal-title text-center mt-3 mt-md-7 mb-2" id="forgetPasswordModalLabel">變更或者重設您的密碼
          </h2>
          <div class="line bg-dark mb-3"></div>
        </div>
        <div class="modal-body">
          <div class="col col-md-8 offset-md-2  px-4">
            <div class="enter-password">
              <form>
                <div class="mb-3">
                  <div class="d-flex justify-content-between">
                    <label for="email-check" class="form-label">輸入您的電子信箱</label>
                    <span class="form-text">
                                                <svg width="15" height="14" viewBox="0 0 15 14" fill="none"
                                                     xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                      d="M7.50016 0.250977C3.8135 0.250977 0.833496 3.23098 0.833496 6.91764C0.833496 10.6043 3.8135 13.5843 7.50016 13.5843C11.1868 13.5843 14.1668 10.6043 14.1668 6.91764C14.1668 3.23098 11.1868 0.250977 7.50016 0.250977ZM10.8335 9.31098L9.8935 10.251L7.50016 7.85764L5.10683 10.251L4.16683 9.31098L6.56016 6.91764L4.16683 4.52431L5.10683 3.58431L7.50016 5.97764L9.8935 3.58431L10.8335 4.52431L8.44016 6.91764L10.8335 9.31098Z"
                                                      fill="#DB3328"/>
                                                </svg>
                                                此欄位必填
                                            </span>
                  </div>
                  <input type="email" class="form-control" id="email-check">
                </div>
                <div class="d-grid gap-2 my-5">
                  <button class="btn btn-dark" type="button"  data-bs-dismiss="modal"
                          @click="$refs.verifyModal.showModal()">繼續
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <VerifyModal ref="verifyModal"></VerifyModal>
</template>

<script>
import Modal from 'bootstrap/js/dist/modal'
import VerifyModal from './VerifyModal'

export default {
  components: {
    VerifyModal
  },
  data () {
    return {
      forgetPasswordModal: {}
    }
  },
  methods: {
    showModal () {
      this.forgetPasswordModal.show()
    },
    hideModal () {
      this.forgetPasswordModal.hide()
    }
  },
  mounted () {
    this.forgetPasswordModal = new Modal(this.$refs.forgetPasswordModal)
  }
}
</script>
