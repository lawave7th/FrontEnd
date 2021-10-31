<template>
  <!-- 忘記密碼 Modal -->
  <div class="modal fade" ref="modal" id="forgetPasswordModal" tabindex="-1" aria-labelledby="forgetPasswordModalLabel"
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
          <h2 class="modal-title text-center mt-3 mt-md-7 mb-2 text-secondary" id="forgetPasswordModalLabel">變更或者重設您的密碼
          </h2>
          <div class="line bg-primary mb-3"></div>
        </div>
        <div class="modal-body">
          <div class="col col-md-8 offset-md-2  px-4">
            <div class="enter-password">
              <v-form class="row" v-slot="{ errors }" ref="forgetPasswordForm" @submit="onSubmit">
                <!-- 身份別 -->
                <div class="mb-3">
                  <label class="form-check-label d-block mb-2">選擇身份</label>
                  <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="check-identity" v-model="user.isLawyer" :value="false"  id="forgetPasswordPeople">
                    <label class="form-check-label" for="forgetPasswordPeople">民眾</label>
                  </div>
                  <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="check-identity" v-model="user.isLawyer" :value="true" id="forgetPasswordLawyer">
                    <label class="form-check-label" for="forgetPasswordLawyer">律師</label>
                  </div>
                </div>
                <!-- 信箱 -->
                <div class="mb-3">
                  <label class="form-label">輸入您的電子信箱</label>
                  <v-field name="email" type="email"  :class="{ 'is-invalid': errors['email'] }" placeholder="請輸入 Email" rules="email|required" class="form-control"
                           v-model="user.mail" id="changePasswordEmail"></v-field>
                  <!-- 信箱錯誤提示 -->
                  <div class="d-flex align-items-center mt-1">
                    <error-message name="email" class="invalid-feedback">
                      <p class="text-danger m-0 ms-1 fs-7">
                        <span class="material-icons align-middle fs-7">cancel</span>{{ errors.email }}</p>
                    </error-message>
                  </div>
                </div>
                <!-- 電子信箱驗證 -->
                <div class="mb-3">
                  <div class="row d-flex align-items-center justify-content-between">
                    <div class="col-12">
                      <label class="form-label">輸入您的電子郵件驗證碼</label>
                    </div>
                    <div class="col-7">
                      <v-field  v-model="user.veriCode" type="text" placeholder="輸入您的驗證碼" name="驗證碼" class="form-control" :class="{ 'is-invalid': errors['驗證碼'] }" rules="required|max:4"  id="verificationCodeEmail"></v-field>
                    </div>
                    <div class="col-5">
                      <button type="button"
                              class="btn btn-secondary" @click="verifyMail">送出驗證
                      </button>
                    </div>
                  </div>
                  <!-- 電子信箱錯誤提示 -->
                  <div class="d-flex align-items-center mt-1">
                    <error-message name="驗證碼" class="invalid-feedback">
                      <p class="text-danger m-0 ms-1 fs-7">
                        <span class="material-icons align-middle text-danger fs-7">cancel</span> {{ errors.驗證碼 }}
                      </p>
                    </error-message>
                  </div>
                </div>
                <!--  輸入新密碼-->
                <div class="mb-3">
                  <label class="form-label">輸入您的新密碼</label>
                  <v-field name="密碼" type="password"  :class="{ 'is-invalid': errors['密碼'] }" rules="required|min:8" placeholder="至少 8 位數密碼，請區分大小寫"  class="form-control"
                       v-model="user.password"  id="newEmail"></v-field>
                  <!-- 信箱錯誤提示 -->
                  <div class="d-flex align-items-center mt-1">
                    <error-message name="密碼" class="invalid-feedback">
                      <p class="text-danger m-0 ms-1 fs-7">
                        <span class="material-icons align-middle fs-7">cancel</span>{{ errors.密碼 }}</p>
                    </error-message>
                  </div>
                </div>
                <!--  再次輸入您的新密碼-->
                <div class="mb-3">
                  <label class="form-label">再次輸入您的新密碼</label>
                  <v-field type="password" name="確認密碼" :rules="checkPassword"  :class="{ 'is-invalid': errors['確認密碼'] }"  placeholder="再次輸入您的密碼" class="form-control"
                           v-model="user.rePassword" id="checkNewPassword"></v-field>
                  <!-- 密碼錯誤提示 -->
                  <div class="d-flex align-items-center mt-1">
                    <error-message name="確認密碼" class="invalid-feedback">
                      <p class="text-danger m-0 ms-1 fs-7">
                        <span class="material-icons align-middle fs-7">cancel</span>&nbsp;密碼輸入不一致</p>
                    </error-message>
                  </div>
                </div>
                <div class="d-grid gap-2 mb-5">
                  <button class="btn btn-secondary" type="submit" >確定
                  </button>
                </div>
              </v-form>
            </div>
          </div>
        </div>
      </div>
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
</template>

<script>
import modalMixin from '@/mixins/modalMixin'
import Modal from 'bootstrap/js/dist/modal'
import { userResetPassword, userVerifyMail } from '@/util/api'

export default {
  data () {
    return {
      modal: {},
      successModal: {},
      user: {
        mail: '',
        isLawyer: false,
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
      this.user = {
        mail: '',
        isLawyer: false,
        veriCode: '',
        password: '',
        rePassword: ''
      }
      this.$refs.forgetPasswordForm.resetForm()
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
          this.hideModal()
          this.successModal.show()
        })
        .catch((error) => { console.error(error) })
    },
    verifyMail () {
      const toaddr = this.user.mail
      if (!toaddr) {
        return
      }
      userVerifyMail(toaddr)
        .then((res) => {
          console.log(res)
        })
        .catch((error) => { console.error(error) })
    }
  },
  mixins: [modalMixin]
}
</script>
