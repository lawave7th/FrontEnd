<template>
  <div
    class="border border-primary d-flex flex-column align-items-center justify-content-center rounded rounded-3 mb-11 mb-md-0 py-3 px-md-7 py-md-10">
    <img class="rounded mb-md-7" src="../../assets/img/center/change-password.png" alt="更換密碼圖片">
    <!-- 輸入舊密碼 -->
    <div class="enter-password" v-if="!isVerify">
      <div class="text-center mb-md-5 ">
        <h3 class="text-secondary">變更或者重設您的密碼</h3>
        <div class="line bg-primary mb-3"></div>
        <p class="mb-md-7">需要點協助來幫助您還原您的會員帳戶密碼</p>
      </div>
      <v-form v-slot="{ errors }" @submit="showVerifyModal">
        <!-- 信箱 -->
        <div class="mb-3">
          <label  class="form-label">輸入您的電子信箱</label>
          <v-field name="email" type="email"  :class="{ 'is-invalid': errors['email'] }" placeholder="請輸入 Email" rules="email|required" class="form-control"
                   v-model="user.mail"    id="lawyerEmail"></v-field>
          <!-- 信箱錯誤提示 -->
          <div class="d-flex align-items-center mt-1">
            <error-message name="email" class="invalid-feedback">
              <p class="text-danger m-0 ms-1">
                <span class="material-icons align-middle fs-7">cancel</span>&nbsp;{{ errors.email }}</p>
            </error-message>
          </div>
        </div>
        <div class="d-grid gap-2 col mx-auto mt-5 mb-3 mb-md-0">
          <button class="btn btn-secondary"
                  type="submit">繼續</button>
        </div>
      </v-form>
    </div>
    <!-- 輸入新密碼 -->
    <div class="enter-new-password" v-else>
      <div class="text-center mb-md-5">
        <h3 class="text-secondary">輸入您的新密碼</h3>
        <div class="line bg-primary mb-3"></div>
        <p class="mb-md-7">重新設定您的會員帳戶密碼</p>
      </div>
      <v-form v-slot="{ errors }" @submit="onSubmit">
        <div class="row">
          <div class="col-12 mb-3">
            <label class="form-label">輸入您的新密碼</label>
            <v-field name="密碼" type="password"  :class="{ 'is-invalid': errors['密碼'] }" rules="required|min:8" placeholder="至少 8 位數密碼，請區分大小寫"  class="form-control"
                     v-model="user.password"    id="lawyerNewEmail"></v-field>
            <!-- 信箱錯誤提示 -->
            <div class="d-flex align-items-center mt-1">
              <error-message name="密碼" class="invalid-feedback">
                <p class="text-danger m-0">
                  <span class="material-icons align-middle fs-7">cancel</span>&nbsp;{{ errors.密碼 }}</p>
              </error-message>
            </div>
            <div class="col-12">
              <label class="form-label">再次輸入您的新密碼</label>
              <v-field type="password" name="確認密碼" :rules="checkPassword"  :class="{ 'is-invalid': errors['確認密碼'] }"  placeholder="再次輸入您的密碼" class="form-control"
                       v-model="user.rePassword"   id="lawyerNewPassword"></v-field>
              <div class="d-flex justify-content-between">

                <!-- 密碼錯誤提示 -->
                <div class="d-flex align-items-center mt-1">
                  <error-message name="確認密碼" class="invalid-feedback">
                    <p class="text-danger m-0 ms-1">
                      <span class="material-icons align-middle fs-7">cancel</span>密碼輸入不一致</p>
                  </error-message>
                </div>
              </div>
            </div>
          </div>
          <div class="col-12">
            <div class="d-grid gap-2 col mx-auto mt-5 mb-3 mb-md-0">
              <button class="btn btn-secondary"
                      type="submit">更新密碼</button>
            </div>
          </div>
        </div>

      </v-form>
    </div>
  </div>
  <!-- 密碼修改成功 Modal -->
  <div class="modal fade" ref="successModal" id="successModal" tabindex="-1" aria-labelledby="successModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="position-relative">
          <button type="button" class="m-3 btn  fs-4 position-absolute top-0 end-0"
                  data-bs-dismiss="modal" aria-label="Close">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M14 1.41L12.59 0L7 5.59L1.41 0L0 1.41L5.59 7L0 12.59L1.41 14L7 8.41L12.59 14L14 12.59L8.41 7L14 1.41Z"
                fill="black"/>
            </svg>
          </button>
          <h2 class="modal-title text-center mt-3 mt-md-7 mb-2 text-secondary" id="successModalLabel">修改密碼成功</h2>
          <div class="line bg-primary mb-3"></div>
        </div>
        <div class="modal-body">
          <div class="row ">
            <div class="col-md-8 offset-md-2 text-center">
              <img class="mb-3 mb-md-5" src="../../assets/img/logo.png" alt="logo">
              <h3 class="fs-4">更改密碼已成功</h3>
              <div class="d-grid gap-2 mb-md-7 mb-5">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">確定</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <VerifyModal v-bind:mail="user.mail" v-on:verify-status="getVerifyStatus" v-on:verify-code="getVerifyCode" ref="verifyModal"></VerifyModal>
</template>

<script>
import VerifyModal from '../../components/modal/VerifyModal'
import { userResetPassword } from '@/util/api'
import Modal from 'bootstrap/js/dist/modal'

export default {
  components: {
    VerifyModal
  },
  data () {
    return {
      modal: {},
      successModal: {},
      isVerify: false,
      user: {
        mail: '',
        isLawyer: true,
        veriCode: '',
        password: '',
        rePassword: ''
      }
    }
  },
  mounted () {
    this.successModal = new Modal(this.$refs.successModal)
  },
  methods: {
    reset () {
      this.isVerify = false
      this.user = {
        mail: '',
        isLawyer: true,
        veriCode: '',
        password: '',
        rePassword: ''
      }
    },
    showVerifyModal () {
      this.$refs.verifyModal.showModal()
      this.$refs.verifyModal.verifyMail()
    },
    getVerifyCode (VerifyCode) {
      this.user.veriCode = VerifyCode
    },
    getVerifyStatus () {
      this.isVerify = true
    },
    checkPassword (value) {
      if (this.user.password === value) {
        return true
      }
    },
    onSubmit () {
      userResetPassword(this.user)
        .then((res) => {
          console.log(res)
          this.reset()
          this.successModal.show()
        })
        .catch((error) => { console.error(error) })
    }
  }
}
</script>
