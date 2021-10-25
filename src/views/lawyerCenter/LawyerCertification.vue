<template>
  <div class="border rounded rounded-3 px-md-7 py-md-5">
    <!-- 上傳檔案欄位 -->
    <ul class="mb-md-4">
      <li class="d-flex justify-content-between mb-md-5">
        <div>
          <div class="d-flex">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                 xmlns="http://www.w3.org/2000/svg">
              <path
                d="M21 19V5C21 3.9 20.1 3 19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19ZM8.5 13.5L11 16.51L14.5 12L19 18H5L8.5 13.5Z"
                fill="black" />
            </svg>
            <h3 class="fs-4 mb-md-4">請上傳律師證明檔案</h3>
          </div>
          <p>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none"
                 xmlns="http://www.w3.org/2000/svg">
              <path
                d="M7.00004 0.333496C3.31337 0.333496 0.333374 3.3135 0.333374 7.00016C0.333374 10.6868 3.31337 13.6668 7.00004 13.6668C10.6867 13.6668 13.6667 10.6868 13.6667 7.00016C13.6667 3.3135 10.6867 0.333496 7.00004 0.333496ZM10.3334 9.3935L9.39337 10.3335L7.00004 7.94016L4.60671 10.3335L3.66671 9.3935L6.06004 7.00016L3.66671 4.60683L4.60671 3.66683L7.00004 6.06016L9.39337 3.66683L10.3334 4.60683L7.94004 7.00016L10.3334 9.3935Z"
                fill="#DB3328" />
            </svg>
            <span class="text-danger align-middle fs-7">
              請重新上傳</span>
          </p>

        </div>
        <div>
          <div class="upload-image-box">
            <label for="img-upload">
              <svg width="400" height="300" viewBox="0 0 400 300" fill="none"
                   xmlns="http://www.w3.org/2000/svg">
                <rect x="0.5" y="0.5" width="399" height="299" rx="15.5" fill="#E5E5E5"
                      stroke="black" stroke-linecap="round" stroke-dasharray="10 10" />
                <line x1="160" y1="149.5" x2="240" y2="149.5" stroke="black"
                      stroke-dasharray="10 10" />
                <line x1="200.5" y1="110" x2="200.5" y2="190" stroke="black"
                      stroke-dasharray="10 10" />
              </svg>
            </label>
            <input class="d-none" type="file" id="img-upload"/>
          </div>
        </div>
      </li>
      <li class="d-flex justify-content-between mb-md-5">
        <div>
          <div class="d-flex">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                 xmlns="http://www.w3.org/2000/svg">
              <path
                d="M21 19V5C21 3.9 20.1 3 19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19ZM8.5 13.5L11 16.51L14.5 12L19 18H5L8.5 13.5Z"
                fill="black" />
            </svg>
            <h3 class="fs-4 mb-md-4">請上傳個人身分證檔案</h3>
          </div>
          <p>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none"
                 xmlns="http://www.w3.org/2000/svg">
              <path
                d="M7.00004 0.333496C3.31337 0.333496 0.333374 3.3135 0.333374 7.00016C0.333374 10.6868 3.31337 13.6668 7.00004 13.6668C10.6867 13.6668 13.6667 10.6868 13.6667 7.00016C13.6667 3.3135 10.6867 0.333496 7.00004 0.333496ZM10.3334 9.3935L9.39337 10.3335L7.00004 7.94016L4.60671 10.3335L3.66671 9.3935L6.06004 7.00016L3.66671 4.60683L4.60671 3.66683L7.00004 6.06016L9.39337 3.66683L10.3334 4.60683L7.94004 7.00016L10.3334 9.3935Z"
                fill="#DB3328" />
            </svg>
            <span class="text-danger align-middle fs-7">
              請重新上傳</span>
          </p>
        </div>
        <div>
          <div class="upload-image-box">
            <label for="img-upload">
              <svg width="400" height="300" viewBox="0 0 400 300" fill="none"
                   xmlns="http://www.w3.org/2000/svg">
                <rect x="0.5" y="0.5" width="399" height="299" rx="15.5" fill="#E5E5E5"
                      stroke="black" stroke-linecap="round" stroke-dasharray="10 10" />
                <line x1="160" y1="149.5" x2="240" y2="149.5" stroke="black"
                      stroke-dasharray="10 10" />
                <line x1="200.5" y1="110" x2="200.5" y2="190" stroke="black"
                      stroke-dasharray="10 10" />
              </svg>
            </label>
            <input class="d-none" type="file" id="img-upload"/>
          </div>
        </div>
      </li>
      <li class="d-flex justify-content-between mb-md-5">
        <div>
          <div class="d-flex">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                 xmlns="http://www.w3.org/2000/svg">
              <path
                d="M21 19V5C21 3.9 20.1 3 19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19ZM8.5 13.5L11 16.51L14.5 12L19 18H5L8.5 13.5Z"
                fill="black" />
            </svg>
            <h3 class="fs-4 mb-md-4">請上傳身份證明第二證件</h3>
          </div>
          <p>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none"
                 xmlns="http://www.w3.org/2000/svg">
              <path
                d="M7.00004 0.333496C3.31337 0.333496 0.333374 3.3135 0.333374 7.00016C0.333374 10.6868 3.31337 13.6668 7.00004 13.6668C10.6867 13.6668 13.6667 10.6868 13.6667 7.00016C13.6667 3.3135 10.6867 0.333496 7.00004 0.333496ZM10.3334 9.3935L9.39337 10.3335L7.00004 7.94016L4.60671 10.3335L3.66671 9.3935L6.06004 7.00016L3.66671 4.60683L4.60671 3.66683L7.00004 6.06016L9.39337 3.66683L10.3334 4.60683L7.94004 7.00016L10.3334 9.3935Z"
                fill="#DB3328" />
            </svg>
            <span class="text-danger align-middle fs-7">
              請重新上傳</span>
          </p>
        </div>
        <div>
          <div class="upload-image-box">
            <label for="img-upload">
            <svg width="400" height="300" viewBox="0 0 400 300" fill="none"
                 xmlns="http://www.w3.org/2000/svg">
              <rect x="0.5" y="0.5" width="399" height="299" rx="15.5" fill="#E5E5E5"
                    stroke="black" stroke-linecap="round" stroke-dasharray="10 10" />
              <line x1="160" y1="149.5" x2="240" y2="149.5" stroke="black"
                    stroke-dasharray="10 10" />
              <line x1="200.5" y1="110" x2="200.5" y2="190" stroke="black"
                    stroke-dasharray="10 10" />
            </svg>
            </label>
            <input class="d-none" type="file" id="img-upload"/>
          </div>
        </div>
      </li>
    </ul>
    <div class="d-flex flex-column align-items-end">
      <button class="btn btn-dark mb-md-3 py-md-4 px-md-10 rounded-pill" type="button">送出審核</button>
      <p>需待 5 個工作天審核，通過即可開始媒合</p></div>
  </div>
</template>

<script>
export default {
  name: 'LawyerCertification'
}
</script>
