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
          <h2 class="modal-title text-center mt-3 mt-md-7 mb-2" id="forgetPasswordModalLabel">變更或者重設您的密碼
          </h2>
          <div class="line bg-dark mb-3"></div>
        </div>
        <div class="modal-body">
          <div class="col col-md-8 offset-md-2  px-4">
            <div class="enter-password">
              <v-form class="row" v-slot="{ errors }" @submit="onSubmit">
                <!-- 信箱 -->
                <div class="mb-3">
                  <label for="changePasswordEmail" class="form-label">輸入您的電子信箱</label>
                  <v-field name="email" type="email"  :class="{ 'is-invalid': errors['email'] }" placeholder="請輸入 Email" rules="email|required" class="form-control"
                           id="changePasswordEmail"></v-field>
                  <!-- 信箱錯誤提示 -->
                  <div class="d-flex align-items-center mt-1">
                    <error-message name="email" class="invalid-feedback">
                      <p class="text-danger m-0 ms-1">
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M6.99992 0.333374C3.31325 0.333374 0.333252 3.31337 0.333252 7.00004C0.333252 10.6867 3.31325 13.6667 6.99992 13.6667C10.6866 13.6667 13.6666 10.6867 13.6666 7.00004C13.6666 3.31337 10.6866 0.333374 6.99992 0.333374ZM10.3333 9.39337L9.39325 10.3334L6.99992 7.94004L4.60659 10.3334L3.66659 9.39337L6.05992 7.00004L3.66659 4.60671L4.60659 3.66671L6.99992 6.06004L9.39325 3.66671L10.3333 4.60671L7.93992 7.00004L10.3333 9.39337Z"
                            fill="#DB3328"/>
                        </svg>&nbsp;{{ errors.email }}</p>
                    </error-message>
                  </div>
                </div>
                <!-- 電子信箱驗證 -->
                <div class="mb-3">
                  <div class="row d-flex align-items-center justify-content-between">
                    <div class="col-12">
                      <label for="verificationCodeEmail" class="form-label">輸入您的電子郵件驗證碼</label>
                    </div>
                    <div class="col-7">
                      <input type="text" class="form-control"  id="verificationCodeEmail" placeholder="請輸入驗證碼">
                    </div>
                    <div class="col-5">
                      <button type="button"
                              class="btn btn-dark">送出驗證
                      </button>
                    </div>
                  </div>
                  <!-- 電子信箱錯誤提示 -->
                  <div class="d-flex align-items-center mt-1">
                      <p class="text-danger m-0 ms-1">
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M6.99992 0.333374C3.31325 0.333374 0.333252 3.31337 0.333252 7.00004C0.333252 10.6867 3.31325 13.6667 6.99992 13.6667C10.6866 13.6667 13.6666 10.6867 13.6666 7.00004C13.6666 3.31337 10.6866 0.333374 6.99992 0.333374ZM10.3333 9.39337L9.39325 10.3334L6.99992 7.94004L4.60659 10.3334L3.66659 9.39337L6.05992 7.00004L3.66659 4.60671L4.60659 3.66671L6.99992 6.06004L9.39325 3.66671L10.3333 4.60671L7.93992 7.00004L10.3333 9.39337Z"
                            fill="#DB3328"/>
                        </svg>&nbsp;驗證碼輸入不正確 </p>
                  </div>
                </div>
                <!--  輸入新密碼-->
                <div class="mb-3">
                  <label for="newEmail" class="form-label">輸入您的新密碼</label>
                  <v-field name="密碼" type="password"  :class="{ 'is-invalid': errors['密碼'] }" rules="required|min:8" placeholder="至少 8 位數密碼，請區分大小寫"  class="form-control"
                       v-model="user.password"    id="newEmail"></v-field>
                  <!-- 信箱錯誤提示 -->
                  <div class="d-flex align-items-center mt-1">
                    <error-message name="密碼" class="invalid-feedback">
                      <p class="text-danger m-0 ms-1">
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M6.99992 0.333374C3.31325 0.333374 0.333252 3.31337 0.333252 7.00004C0.333252 10.6867 3.31325 13.6667 6.99992 13.6667C10.6866 13.6667 13.6666 10.6867 13.6666 7.00004C13.6666 3.31337 10.6866 0.333374 6.99992 0.333374ZM10.3333 9.39337L9.39325 10.3334L6.99992 7.94004L4.60659 10.3334L3.66659 9.39337L6.05992 7.00004L3.66659 4.60671L4.60659 3.66671L6.99992 6.06004L9.39325 3.66671L10.3333 4.60671L7.93992 7.00004L10.3333 9.39337Z"
                            fill="#DB3328"/>
                        </svg>&nbsp;{{ errors.密碼 }}</p>
                    </error-message>
                  </div>
                </div>
                <!--  再次輸入您的新密碼-->
                <div class="mb-3">
                  <label for="checkNewPassword" class="form-label">再次輸入您的新密碼</label>
                  <v-field type="password" name="確認密碼" :rules="checkPassword"  :class="{ 'is-invalid': errors['確認密碼'] }"  placeholder="再次輸入您的密碼" class="form-control"
                           id="checkNewPassword"></v-field>
                  <!-- 密碼錯誤提示 -->
                  <div class="d-flex align-items-center mt-1">
                    <error-message name="確認密碼" class="invalid-feedback">
                      <p class="text-danger m-0 ms-1">
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M6.99992 0.333374C3.31325 0.333374 0.333252 3.31337 0.333252 7.00004C0.333252 10.6867 3.31325 13.6667 6.99992 13.6667C10.6866 13.6667 13.6666 10.6867 13.6666 7.00004C13.6666 3.31337 10.6866 0.333374 6.99992 0.333374ZM10.3333 9.39337L9.39325 10.3334L6.99992 7.94004L4.60659 10.3334L3.66659 9.39337L6.05992 7.00004L3.66659 4.60671L4.60659 3.66671L6.99992 6.06004L9.39325 3.66671L10.3333 4.60671L7.93992 7.00004L10.3333 9.39337Z"
                            fill="#DB3328"/>
                        </svg>&nbsp;密碼輸入不一致</p>
                    </error-message>
                  </div>
                </div>
                <div class="d-grid gap-2 my-5">
                  <button class="btn btn-dark" type="button"  data-bs-dismiss="modal">確定
                  </button>
                </div>
              </v-form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import modalMixin from '@/mixins/modalMixin'

export default {
  data () {
    return {
      modal: {},
      user: {
        password: ''
      }
    }
  },
  methods: {
    checkPassword (value) {
      if (this.user.password === value) {
        return true
      }
    },
    onSubmit () {
      console.log('submit')
    }
  },
  mixins: [modalMixin]
}
</script>
