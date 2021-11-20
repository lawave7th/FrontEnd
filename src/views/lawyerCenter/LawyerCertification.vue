<template>
  <div class="border border-primary rounded rounded-3 px-4 px-md-7 py-md-5 mb-11 mb-md-0">
    <!-- 上傳檔案欄位 -->
    <ul class="my-4 my-md-0 mb-md-4">
      <li class="d-flex flex-column flex-md-row align-items-center align-items-md-start justify-content-center justify-content-md-between mb-4 mb-md-5">
        <div>
          <div class="d-flex">
            <span class="material-icons text-secondary">
image
</span>
            <h3 class="fs-4  mb-md-4 text-secondary">請上傳律師證明檔案</h3>
          </div>
          <p v-show="errorMessage">
            <span class="material-icons text-danger  align-middle fs-7">cancel</span>
            <span class="text-danger align-middle fs-7">
              圖片格式不符，請重新上傳</span>
          </p>
        </div>
        <div>
          <div class="upload-image-box">
            <label for="certificateImg"  >
              <img v-if="!image[0].imgNum" src="../../assets/img/center/lawyer/photo-preview.png" alt="預覽圖">
              <img v-else  class="rounded rounded-3" :src="image[0].imgNum" alt="預覽圖" width="400">
            </label>
            <input class="d-none" name="fileOne" @change="uploadFile($event , 0)" ref="fileInputOne" type="file" id="certificateImg"/>
          </div>
        </div>
      </li>
      <li class="d-flex flex-column flex-md-row align-items-center align-items-md-start justify-content-center justify-content-md-between mb-4 mb-md-5">
        <div>
          <div class="d-flex">
          <span class="material-icons text-secondary">
image
</span>
            <h3 class="fs-4 mb-md-4 text-secondary">請上傳個人身分證檔案</h3>
          </div>
          <p v-show="errorMessage">
            <span class="material-icons text-danger  align-middle fs-7">cancel</span>
            <span class="text-danger align-middle fs-7">
              圖片格式不符，請重新上傳</span>
          </p>
        </div>
        <div>
          <div class="upload-image-box">
            <label for="identityCardImg">
              <img v-if="!image[1].imgNum" src="../../assets/img/center/lawyer/photo-preview.png" alt="預覽圖">
              <img v-else  class="rounded rounded-3" :src="image[1].imgNum" alt="預覽圖" width="400">
            </label>
            <input class="d-none" name="fileTwo" @change="uploadFile($event , 1)" ref="fileInputTwo" type="file" id="identityCardImg"/>
          </div>
        </div>
      </li>
      <li class="d-flex flex-column flex-md-row align-items-center align-items-md-start justify-content-center justify-content-md-between mb-md-5">
        <div>
          <div class="d-flex">
            <span class="material-icons text-secondary">
image
</span>
            <h3 class="fs-4 mb-md-4 text-secondary">請上傳身份證明第二證件</h3>
          </div>
          <p v-show="errorMessage">
            <span class="material-icons text-danger  align-middle fs-7">cancel</span>
            <span class="text-danger align-middle fs-7">
              圖片格式不符，請重新上傳</span>
          </p>
        </div>
        <div>
          <div class="upload-image-box">
            <label for="secondCertificateImg">
              <img v-if="!image[2].imgNum" src="../../assets/img/center/lawyer/photo-preview.png" alt="預覽圖">
              <img v-else  class="rounded rounded-3" :src="image[2].imgNum" alt="預覽圖" width="400">
            </label>
            <input class="d-none" name="fileThree" @change="uploadFile($event , 2)" ref="fileInputThree" type="file" id="secondCertificateImg"/>
          </div>
        </div>
      </li>
    </ul>
    <div class="d-flex flex-column align-items-end">
      <button class="btn btn-secondary mb-3 py-md-4 px-md-10 rounded" @click="onSubmit" type="button">送出審核</button>
      <p>需待 5 個工作天審核，通過即可開始媒合</p></div>
  </div>
</template>

<script>
import { lawyerCertificationData } from '@/util/api'
export default {
  data () {
    return {
      tempProduct: {},
      image: [{ imgNum: '' }, { imgNum: '' }, { imgNum: '' }],
      errorMessage: false

    }
  },
  created () {
    this.getData()
  },
  methods: {
    getData () {
      lawyerCertificationData()
        .then((response) => {
          console.log(response.data)
          this.image[0].imgNum = response.data.verifyPhotolawyer
          this.image[1].imgNum = response.data.verifyPhotoFir
          this.image[2].imgNum = response.data.verifyPhotoSec
        }).catch((error) => {
          console.log(error)
        })
    },
    uploadFile (event, num) {
      const file = event.target.files.item(0)
      const reader = new FileReader()
      if (/\.(jpe?g|png|gif)$/i.test(file.name)) {
        reader.addEventListener('load', (event) => {
          this.image[num].imgNum = event.target.result
        })
        reader.readAsDataURL(file)
      } else {
        this.errorMessage = true
      }
    },
    onSubmit () {
      const formData = new FormData()
      formData.append('fileOne', this.$refs.fileInputOne.files[0])
      formData.append('fileTwo', this.$refs.fileInputTwo.files[0])
      formData.append('fileThree', this.$refs.fileInputThree.files[0])
      const token = localStorage.getItem('lawavaToken')
      this.axios({
        method: 'post',
        url: 'https://lawave.rocket-coding.com/lawyer/veriPhoto/',
        data: formData,
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${token}`
        }
      }).then((response) => {
        console.log(response.data)
      }).catch((error) => {
        console.log(error.response)
        window.showToast.showErrorToast('圖片上傳失敗')
      })
    }
  }
}
</script>
