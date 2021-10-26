<template>

  <div class="border d-flex flex-column align-items-center rounded rounded-3 shadow-sm">
    <div class="lawyer-photo img-fluid position-relative mx-4 my-5 ">
      <label for="photo-upload">
      <img class="rounded-pill " src="../../../assets/img/people-photo.jpeg" height="200" width="200" alt="民眾大頭照"/>
      </label>
      <input class="d-none" type="file" id="photo-upload"/>
    </div>
    <div class="people-information text-center">
      <p class="fs-7 mb-1">
        Welcome
      </p>
      <h3 class="fs-4">Johnny Hall</h3>
      <p>我的關注 <span class="fs-7">(0)</span></p>
    </div>
    <!-- 會員中心點擊欄位 -->
    <ul class="center-side-menu mb-5">
      <li>
        <router-link class="d-block p-4 border-bottom border-2" to="people-edit-page">
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none"
               xmlns="http://www.w3.org/2000/svg">
            <path
              d="M20 0C8.96 0 0 8.96 0 20C0 31.04 8.96 40 20 40C31.04 40 40 31.04 40 20C40 8.96 31.04 0 20 0ZM20 6C23.32 6 26 8.68 26 12C26 15.32 23.32 18 20 18C16.68 18 14 15.32 14 12C14 8.68 16.68 6 20 6ZM20 34.4C15 34.4 10.58 31.84 8 27.96C8.06 23.98 16 21.8 20 21.8C23.98 21.8 31.94 23.98 32 27.96C29.42 31.84 25 34.4 20 34.4Z"
              fill="black" />
          </svg>
          <span class="fs-4 ms-2 align-middle">個人資料</span>
        </router-link>
      </li>
      <li>
        <router-link class="d-block p-4 border-bottom border-2" to="people-password-setting">
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none"
               xmlns="http://www.w3.org/2000/svg">
            <circle cx="20" cy="20" r="20" fill="black" />
            <path
              d="M28.5899 18.0001H20.6499C19.6999 15.3101 16.8899 13.5001 13.7699 14.1201C11.4799 14.5801 9.61994 16.4201 9.13994 18.7001C8.31994 22.5801 11.2599 26.0001 14.9999 26.0001C17.6099 26.0001 19.8299 24.3301 20.6499 22.0001H20.9999L22.2899 23.2901C22.6799 23.6801 23.3099 23.6801 23.6999 23.2901L24.9999 22.0001L26.2899 23.2901C26.6799 23.6801 27.3199 23.6801 27.7099 23.2901L30.2999 20.6801C30.6899 20.2901 30.6899 19.6501 30.2899 19.2601L29.2999 18.2901C29.0999 18.1001 28.8499 18.0001 28.5899 18.0001ZM14.9999 23.0001C13.3499 23.0001 11.9999 21.6501 11.9999 20.0001C11.9999 18.3501 13.3499 17.0001 14.9999 17.0001C16.6499 17.0001 17.9999 18.3501 17.9999 20.0001C17.9999 21.6501 16.6499 23.0001 14.9999 23.0001Z"
              fill="white" />
          </svg>

          <span class="fs-4 ms-2 align-middle">帳戶安全</span>
        </router-link>
      </li>
      <li>
        <router-link class="d-block p-4 border-bottom border-2"  to="people-appointment-center">
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none"
               xmlns="http://www.w3.org/2000/svg">
            <circle cx="20" cy="20" r="20" fill="black" />
            <path
              d="M20 30H13C11.89 30 11 29.1 11 28L11.01 14C11.01 12.9 11.89 12 13 12H14V11C14 10.45 14.45 10 15 10C15.55 10 16 10.45 16 11V12H24V11C24 10.45 24.45 10 25 10C25.55 10 26 10.45 26 11V12H27C28.1 12 29 12.9 29 14V20H27V18H13V28H20V30ZM30.13 24.99L30.84 24.28C31.23 23.89 31.23 23.26 30.84 22.87L30.13 22.16C29.74 21.77 29.11 21.77 28.72 22.16L28.01 22.87L30.13 24.99ZM29.42 25.7L24.41 30.71C24.23 30.89 23.97 31 23.71 31H22.5C22.22 31 22 30.78 22 30.5V29.29C22 29.02 22.11 28.77 22.29 28.58L27.3 23.57L29.42 25.7Z"
              fill="white" />
          </svg>

          <span class="fs-4 ms-2 align-middle">預約中心</span>
        </router-link>
      </li>
    </ul>
  </div>

</template>
