<template>
  <div
    class="border d-flex flex-column align-items-center justify-content-center rounded rounded-3 px-md-7 py-md-5">
    <img class="rounded mb-md-7" src="https://fakeimg.pl/480x200/" alt="">
    <!-- 輸入舊密碼 -->
    <div class="enter-password d-none">
      <div class="text-center mb-md-5 ">
        <h3>變更或者重設您的密碼</h3>
        <div class="line bg-dark mb-3"></div>
        <p class="mb-md-7">需要點協助來幫助您還原您的會員帳戶密碼</p>
      </div>
      <v-form v-slot="{ errors }" @submit="onSubmit">
        <!-- 信箱 -->
        <div class="mb-3">
          <label  class="form-label">輸入您的電子信箱</label>
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
        <div class="d-grid gap-2 col mx-auto mt-5">
          <button class="btn btn-dark" @click="$refs.verifyModal.showModal()"
                  type="button">繼續</button>
        </div>
      </v-form>
    </div>
    <!-- 輸入新密碼 -->
    <div class="enter-new-password">
      <div class="text-center mb-md-5">
        <h3>輸入您的新密碼</h3>
        <div class="line bg-dark mb-3"></div>
        <p class="mb-md-7">重新設定您的會員帳戶密碼</p>
      </div>
      <v-form v-slot="{ errors }" @submit="onSubmit">
        <div class="row">
          <div class="col-12 mb-3">
            <label class="form-label">輸入您的新密碼</label>
            <v-field name="密碼" type="password"  :class="{ 'is-invalid': errors['密碼'] }" rules="required|min:8" placeholder="至少 8 位數密碼，請區分大小寫"  class="form-control"
                     v-model="user.password"    id="newEmail"></v-field>
            <!-- 信箱錯誤提示 -->
            <div class="d-flex align-items-center mt-1">
              <error-message name="密碼" class="invalid-feedback">
                <p class="text-danger m-0">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none"
                       xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M6.99992 0.333374C3.31325 0.333374 0.333252 3.31337 0.333252 7.00004C0.333252 10.6867 3.31325 13.6667 6.99992 13.6667C10.6866 13.6667 13.6666 10.6867 13.6666 7.00004C13.6666 3.31337 10.6866 0.333374 6.99992 0.333374ZM10.3333 9.39337L9.39325 10.3334L6.99992 7.94004L4.60659 10.3334L3.66659 9.39337L6.05992 7.00004L3.66659 4.60671L4.60659 3.66671L6.99992 6.06004L9.39325 3.66671L10.3333 4.60671L7.93992 7.00004L10.3333 9.39337Z"
                      fill="#DB3328"/>
                  </svg>&nbsp;{{ errors.密碼 }}</p>
              </error-message>
            </div>
            <div class="col-12">
              <label class="form-label">再次輸入您的新密碼</label>
              <v-field type="password" name="確認密碼" :rules="checkPassword"  :class="{ 'is-invalid': errors['確認密碼'] }"  placeholder="再次輸入您的密碼" class="form-control"
                       id="checkNewPassword"></v-field>
              <div class="d-flex justify-content-between">

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
            </div>
          </div>
          <div class="col-12">
            <div class="d-grid gap-2 col mx-auto mt-5">
              <button class="btn btn-dark" data-bs-toggle="modal" data-bs-target="#verifyBtn"
                      type="button">更新密碼</button>
            </div>
          </div>
        </div>

      </v-form>
    </div>
  </div>
  <VerifyModal ref="verifyModal"></VerifyModal>
</template>

<script>
import VerifyModal from '../../components/modal/VerifyModal'
export default {
  components: {
    VerifyModal
  },
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
  }
}
</script>
