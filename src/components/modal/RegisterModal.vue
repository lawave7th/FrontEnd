<template>
  <!-- 註冊Modal -->
  <div class="modal fade" ref="modal" id="modal"  tabindex="-1" aria-labelledby="registerModalLabel"
       aria-hidden="true">
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
          <h2 class="modal-title text-center mt-3 mt-md-7 mb-2 text-secondary" id="loginModalLabel">會員註冊</h2>
          <div class="line bg-primary mb-3 mb-md-5"></div>
        </div>
        <div class="modal-body px-md-6 mb-5">
          <ul class="nav row g-0" id="myTab" role="tablist">
            <li class="nav-item col col-md-5 d-grid gap-2 offset-md-1" role="presentation">
              <button class="nav-link border-0 rounded-top border-top border-start border-end  border-primary-light text-dark" :class="user.isLawyer == false ? 'bg-primary-shallow':'bg-white'" id="member-tab" @click="user.isLawyer = false"
                      data-bs-toggle="tab" data-bs-target="#member" type="button" role="tab"
                      aria-controls="member" aria-selected="true">一般會員
              </button>
            </li>
            <li class="nav-item col col-md-5 d-grid gap-2" role="presentation">
              <button class="nav-link border-0 rounded-top border-top border-start border-end border-primary-light  text-dark" :class="user.isLawyer == true ? 'bg-primary-shallow':'bg-white'"  id="lawyer-tab" @click="user.isLawyer = true"
                      data-bs-toggle="tab" data-bs-target="#lawyer" type="button" role="tab"
                      aria-controls="lawyer" aria-selected="false">律師會員
              </button>
            </li>
          </ul>
          <div class="tab-content" id="myTabContent">
            <div class="tab-pane fade show active row g-0" id="member" role="tabpanel"
                 aria-labelledby="member-tab">
              <!-- 下方 modal 內容外層 -->
              <div
                class="col col-md-10 bg-primary-shallow border-primary-light border border-1 border-top-0 rounded-bottom offset-md-1 py-3 px-4">
                <v-form ref="peopleRegisterForm" class="row " v-slot="{ errors }" @submit="onSubmit(value)">
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
                          v-model="user.mail"   id="registerEmail"></v-field>
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
                    <v-field type="password" name="密碼"  :class="{ 'is-invalid': errors['密碼'] }" rules="required|min:8" placeholder="至少 8 位數密碼，請區分大小寫" class="form-control"
                         v-model="user.password" id="registerPassword"></v-field>
                    <!-- 密碼錯誤提示 -->
                    <div class="d-flex align-items-center mt-1">
                      <error-message name="密碼" class="invalid-feedback">
                        <p class="text-danger fs-7 m-0 ms-1">
                          <span class="material-icons align-middle fs-7">cancel</span>&nbsp;{{ errors.密碼 }}</p>
                      </error-message>
                    </div>
                  </div>

                  <!-- 確認密碼 -->
                  <div class="mb-3">
                    <v-field type="password" name="確認密碼" :rules="checkPassword"  :class="{ 'is-invalid': errors['確認密碼'] }"  placeholder="再次輸入您的密碼" class="form-control"
                        v-model="passwordVerifyValue"   id="registerCheckPassword"></v-field>
                    <!-- 密碼錯誤提示 -->
                    <div class="d-flex align-items-center mt-1">
                      <error-message name="確認密碼" class="invalid-feedback">
                        <p class="text-danger fs-7  m-0 ms-1">
                          <span class="material-icons align-middle fs-7">cancel</span>&nbsp;密碼輸入不一致</p>
                      </error-message>
                    </div>
                  </div>

                  <!-- 按鈕 -->
                  <button  class="btn btn-secondary text-white">註冊
                  </button>
                </v-form>
              </div>
            </div>
            <div class="tab-pane fade" id="lawyer" role="tabpanel" aria-labelledby="lawyer-tab">
              <div
                class="col col-md-10 bg-primary-shallow border-primary-light border border-1 border-top-0 rounded-bottom offset-md-1 py-3 px-4">
                <v-form ref="lawyerRegisterForm" class="row" v-slot="{ errors }" @submit="onSubmit">
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
                    <v-field name="email" type="email"  :class="{ 'is-invalid': errors['email'] }" placeholder="請輸入 Email" rules="email|required" class="form-control"
                             v-model="user.mail"  id="lawyerRegisterEmail"></v-field>
                    <!-- 信箱錯誤提示 -->
                    <div class="d-flex align-items-center mt-1">
                      <error-message name="email" class="invalid-feedback">
                        <p class="text-danger fs-7 m-0 ms-1">
                          <span class="material-icons align-middle fs-7">cancel</span>&nbsp;{{ errors.email }}</p>
                      </error-message>
                    </div>
                  </div>
                  <!-- 密碼 -->
                  <div class="mb-3">
                    <v-field type="password" name="密碼"  :class="{ 'is-invalid': errors['密碼'] }" rules="required|min:8" placeholder="至少 8 位數密碼，請區分大小寫" class="form-control"
                             v-model="user.password" id="lawyerRegisterPassword"></v-field>
                    <!-- 密碼錯誤提示 -->
                    <div class="d-flex align-items-center mt-1">
                      <error-message name="密碼" class="invalid-feedback">
                        <p class="text-danger fs-7 m-0 ms-1">
                          <span class="material-icons align-middle fs-7">cancel</span>&nbsp;{{ errors.密碼 }}</p>
                      </error-message>
                    </div>
                  </div>

                  <!-- 確認密碼 -->
                  <div class="mb-3">
                    <v-field type="password" name="確認密碼" :rules="checkPassword"  :class="{ 'is-invalid': errors['確認密碼'] }"  placeholder="再次輸入您的密碼" class="form-control"
                             v-model="passwordVerifyValue"   id="lawyerCheckPassword"></v-field>
                    <!-- 密碼錯誤提示 -->
                    <div class="d-flex align-items-center mt-1">
                      <error-message name="確認密碼" class="invalid-feedback">
                        <p class="text-danger fs-7 m-0 ms-1">
                          <span class="material-icons align-middle fs-7">cancel</span>密碼輸入不一致</p>
                      </error-message>
                    </div>
                  </div>

                  <!-- 手機號碼驗證 -->
                  <div class="mb-3">
                    <div class="row d-flex align-items-center">
                      <div class="col-8">
                        <v-field v-model="user.phone"  name="電話" type="text" class="form-control" :class="{ 'is-invalid': errors['電話'] }" id="lawyerPhone"  placeholder="請輸入電話" :rules="isPhone"></v-field>

                      </div>
                      <div class="col-4">
                        <button type="button"
                                class="btn btn-secondary fs-7" @click.prevent="verifyPhone ()">送出驗證
                        </button>
                      </div>
                    </div>
                    <!-- 手機號碼錯誤提示 -->
                    <div class="d-flex align-items-center mt-1">
                      <error-message name="電話" class="invalid-feedback">
                        <p class="text-danger fs-7 m-0 ms-1">
                          <span class="material-icons align-middle fs-7">cancel</span>&nbsp;電話號碼格式不正確 </p>
                      </error-message>
                    </div>
                  </div>
                  <!-- 驗證碼輸入 -->
                  <div class="mb-3">
                    <v-field v-model="user.veriCode" type="text" placeholder="輸入您的驗證碼" name="驗證碼" class="form-control" :class="{ 'is-invalid': errors['驗證碼'] }" rules="required|max:4"
                           id="lawyerVerificationCode"></v-field>
                    <!-- 驗證碼錯誤提示 -->
                      <div class="d-flex align-items-center mt-1">
                        <error-message name="驗證碼" class="invalid-feedback">
                          <p class="text-danger fs-7 m-0 ms-1"> <span class="material-icons align-middle text-danger fs-7">cancel</span> {{ errors.驗證碼 }}</p>
                        </error-message>
                    </div>
                  </div>
                  <!-- 按鈕 -->
                  <button  class="btn  btn-secondary text-white">註冊</button>
                </v-form>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
  <!-- 歡迎 Modal -->
  <div class="modal fade" ref="welcomeModal" id="welcomeModal" tabindex="-1" aria-labelledby="welcomeModalLabel" aria-hidden="true">
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
          <h2 class="modal-title text-center mt-3 mt-md-7 mb-2 text-secondary" id="welcomeModalLabel">建立個人資料</h2>
          <div class="line bg-primary mb-3"></div>
        </div>
        <div class="modal-body">
          <div class="row ">
            <div class="col-md-8 offset-md-2 text-center">
          <img class="mb-3 mb-md-5" src="../../assets/img/logo.png" alt="logo">
              <h3 class="fs-4">歡迎使用法學電波</h3>
              <p>了解自身法律權益與周遭可使用的法律資源</p>
              <div class="d-grid gap-2 mb-md-7 mb-5">
                <button type="button" data-bs-dismiss="modal" class="btn btn-secondary" @click="goMemberPage">繼續</button>
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
import { userRegister, userVerifyPhone } from '@/util/api'

export default {
  data () {
    return {
      modal: {},
      welcomeModal: {},
      user: {
        isLawyer: false,
        isCommunity: false,
        mail: '',
        password: '',
        uid: '',
        phone: '',
        veriCode: ''
      },
      passwordVerifyValue: ''
    }
  },
  mounted () {
    this.welcomeModal = new Modal(this.$refs.welcomeModal)
  },
  methods: {
    reset () {
      this.user = {
        isLawyer: false,
        isCommunity: false,
        mail: '',
        password: '',
        uid: '',
        phone: '',
        veriCode: ''
      }
      this.passwordVerifyValue = ''
      this.$refs.lawyerRegisterForm.resetForm()
      this.$refs.peopleRegisterForm.resetForm()
    },
    checkPassword (value) {
      if (this.user.password === value) {
        this.passwordVerifyValue = value
        return true
      }
    },
    isPhone (value) {
      const phoneNumber = /^(09)[0-9]{8}$/
      return phoneNumber.test(value)
    },
    onSubmit () {
      console.log(this.user.isLawyer)
      userRegister(this.user)
        .then((res) => {
          const token = res.data.token
          this.$public.setToken(token)
          this.$store.commit('updateToken', token)
          this.hideModal()
          this.welcomeModal.show()
        })
        .catch((error) => { console.error(error) })
    },
    verifyPhone () {
      const toaddr = this.user.phone
      if (!toaddr) {
        return
      }
      userVerifyPhone(toaddr)
        .then((res) => {
          console.log(res)
        })
        .catch((error) => { console.error(error) })
    },
    goMemberPage () {
      this.user.isLawyer === true ? this.$router.push({ name: 'LawyerCenter' }) : this.$router.push({ name: 'PeopleCenter' })
      this.reset()
    }
  },
  mixins: [modalMixin]
}

</script>
