<template>
  <!-- 登入 Modal -->
  <div class="modal fade" ref="modal" id="loginModal" tabindex="-1" aria-labelledby="loginModalLabel" aria-hidden="true">
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
          <h2 class="modal-title text-center mt-3 mt-md-7 mb-2 text-secondary" id="loginModalLabel">會員登入</h2>
          <div class="line bg-primary mb-3 mb-md-5 "></div>
        </div>
        <div class="modal-body px-md-6 mb-5">
          <ul class="nav row g-0" id="myLoginTab" role="tablist">
            <li class="nav-item col col-md-5 d-grid gap-2 offset-md-1" role="presentation">
              <button class="nav-link border-0 rounded-top border-top border-start border-end  border-primary-light text-dark" :class="user.isLawyer == false ? 'bg-primary-shallow':'bg-white'" @click="user.isLawyer = false"  id="loginMemberTab"
                      data-bs-toggle="tab" data-bs-target="#loginMember" type="button" role="tab"
                      aria-controls="member" aria-selected="true">一般會員
              </button>
            </li>
            <li class="nav-item col col-md-5 d-grid gap-2" role="presentation">
              <button class="nav-link border-0 rounded-top border-top border-start border-end border-primary-light  text-dark" :class="user.isLawyer == true ? 'bg-primary-shallow':'bg-white'" @click="user.isLawyer = true" id="loginLawyerTab"
                      data-bs-toggle="tab" data-bs-target="#loginLawyer" type="button" role="tab"
                      aria-controls="lawyer" aria-selected="false">律師會員
              </button>
            </li>
          </ul>
          <div class="tab-content" id="myLoginTabContent">
            <div class="tab-pane fade show active row g-0" id="loginMember" role="tabpanel"
                 aria-labelledby="loginMemberTab">
              <!-- 下方 modal 內容外層 -->
              <div
                class="col col-md-10  bg-primary-shallow border-primary-light border border-1 border-top-0 rounded-bottom offset-md-1 py-3 px-4">
                <v-form ref="peopleLoginForm" class="row" v-slot="{ errors }" @submit="onSubmit">
                  <!-- google 按鈕 -->
                  <div class="my-3">
                    <a href="#" class="btn d-block btn-light">
                      <img src="../../assets/img/google.png" height="24" width="72.77" alt="google-icon">
                    </a>
                  </div>
                  <!-- 分隔線 -->
                  <div class="text-center">
                    <p class="divider mb-3">或</p>
                  </div>
                  <!-- 信箱 -->
                  <div class="mb-3">
                    <v-field name="email" type="email" :class="{ 'is-invalid': errors['email'] }" placeholder="請輸入 Email" rules="email|required" class="form-control"
                       v-model="user.mail"    id="loginEmail"></v-field>
                    <!-- 信箱錯誤提示 -->
                    <div class="d-flex align-items-center mt-1">
                      <error-message name="email" class="invalid-feedback">
                        <p class="text-danger m-0 ms-1 fs-7">
                          <span class="material-icons align-middle fs-7">cancel</span>{{ errors.email }}</p>
                      </error-message>
                    </div>
                  </div>
                  <!-- 密碼 -->
                  <div class="mb-3">

                    <v-field type="password" name="密碼" :class="{ 'is-invalid': errors['密碼'] }" rules="required|min:8" placeholder="至少 8 位數密碼，請區分大小寫" class="form-control"
                             v-model="user.password"   id="loginPassword"></v-field>
                    <!-- 密碼錯誤提示 -->
                    <div class="d-flex align-items-center mt-1">
                      <error-message name="密碼" class="invalid-feedback">
                        <p class="text-danger m-0 ms-1 fs-7">
                          <span class="material-icons align-middle fs-7">cancel</span>{{ errors.密碼 }}</p>
                      </error-message>
                    </div>
                  </div>
                  <a data-bs-dismiss="modal" aria-label="Close"  @click="$refs.forgetPasswordModal.showModal()" class="d-block mb-3" href="#">忘記密碼？</a>
                  <button type="submit" class="btn btn-secondary">登入</button>
                </v-form>
              </div>
            </div>
            <div class="tab-pane fade" id="loginLawyer" role="tabpanel" aria-labelledby="loginLawyerTab">
              <div
                class="col col-md-10  bg-primary-shallow border-primary-light border border-1 border-top-0 rounded-bottom offset-md-1 py-3 px-4">
                <v-form ref="lawyerLoginForm" class="row" v-slot="{ errors }" @submit="onSubmit">
                  <!-- google 按鈕 -->
                  <div class="my-3">
                    <a href="#" class="btn d-block btn-light">
                      <img src="../../assets/img/google.png" height="24" width="72.77" alt="google-icon">
                    </a>
                  </div>
                  <!-- 分隔線 -->
                  <div class="text-center">
                    <p class="divider mb-3">或</p>
                  </div>
                  <!-- 信箱 -->
                  <div class="mb-3">
                    <v-field name="email" type="email" :class="{ 'is-invalid': errors['email'] }" placeholder="請輸入 Email" rules="email|required" class="form-control"
                             v-model="user.mail"       id="lawyerLoginEmail">
                    </v-field>
                    <!-- 信箱錯誤提示 -->
                    <div class="d-flex align-items-center mt-1">
                      <error-message name="email" class="invalid-feedback">
                        <p class="text-danger m-0 ms-1 fs-7">
                          <span class="material-icons align-middle fs-7">cancel</span>{{ errors.email }}</p>
                      </error-message>
                    </div>
                  </div>

                  <!-- 密碼 -->
                  <div class="mb-3">

                    <v-field type="password" name="密碼" :class="{ 'is-invalid': errors['密碼'] }" rules="required|min:8" placeholder="至少 8 位數密碼，請區分大小寫" class="form-control" v-model="user.password" id="lawyerLoginPassword"></v-field>
                    <!-- 密碼錯誤提示 -->
                    <div class="d-flex align-items-center mt-1">
                      <error-message name="密碼" class="invalid-feedback">
                        <p class="text-danger m-0 ms-1 fs-7">
                          <span class="material-icons align-middle fs-7">cancel</span>&nbsp;{{ errors.密碼 }}</p>
                      </error-message>
                    </div>
                  </div>
                  <a class="d-block mb-3" data-bs-dismiss="modal"
                     @click="$refs.forgetPasswordModal.showModal()" href="#">忘記密碼？</a>
                  <button type="submit" class="btn btn-secondary">登入</button>
                </v-form>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  </div>

  <ForgetPasswordModal ref="forgetPasswordModal"></ForgetPasswordModal>
</template>
<script>

import modalMixin from '@/mixins/modalMixin'
import ForgetPasswordModal from './ForgetPasswordModal'
import { userLogin } from '@/util/api'
export default {
  components: {
    ForgetPasswordModal

  },
  data () {
    return {
      modal: {},
      user: {
        isLawyer: false,
        mail: '',
        password: '',
        uid: '',
        isCommunity: false
      }
    }
  },
  methods: {
    reset () {
      this.user = {
        isLawyer: false,
        mail: '',
        password: '',
        uid: '',
        isCommunity: false
      }
      this.$refs.lawyerLoginForm.resetForm()
      this.$refs.peopleLoginForm.resetForm()
    },
    onSubmit () {
      userLogin(this.user)
        .then((res) => {
          console.log(res)
          const token = res.data.token
          this.$public.setToken(token)
          this.$store.commit('updateToken', token)
          this.reset()
          this.hideModal()
        })
        .catch((error) => { console.error(error) })
    }
  },
  mixins: [modalMixin]
}
</script>
