<template>
  <div class="border border-primary rounded rounded-3 py-2 px-3 px-md-7 py-md-3 mb-6 mb-md-7 ">
    <!-- 預約中心點擊按鈕 -->
    <ul class="row appointment-menu justify-content-between">
      <li class="col border-end text-center " @click.prevent="changeTabs('appointmentTime')"
          :class="activeClass === 'appointmentTime' ? 'appointment-bar-active' : ''"><router-link
        class="appointment-bar-fs rounded-start-3 text-secondary" :to="{name:'lawyerAppointmentTime'}"
        >可被預約</router-link></li>
      <li class="col border-end text-center ps-1"
          :class="activeClass === 'pendingReview' ? 'appointment-bar-active' : ''"><a
        class="appointment-bar-fs text-secondary" @click.prevent="changeTabs('pendingReview')" href="#">未審核</a></li>
      <li class="col border-end text-center ps-1" :class="activeClass === 'booked' ? 'appointment-bar-active' : ''"><a
        class="appointment-bar-fs text-secondary" @click.prevent="changeTabs('booked')" href="#">已預約</a></li>
      <li class="col border-end text-center ps-1"
          :class="activeClass === 'appointmentRecord' ? 'appointment-bar-active' : ''"><a
        class="appointment-bar-fs text-secondary" @click.prevent="changeTabs('appointmentRecord')" href="#">預約紀錄</a>
      </li>
      <li class="col text-center ps-1" :class="activeClass === 'blockMembersList' ? 'appointment-bar-active' : ''"><a
        class="appointment-bar-fs" @click.prevent="changeTabs('blockMembersList')" href="#">封鎖名單</a></li>
    </ul>
  </div>
    <router-view />

<!--  &lt;!&ndash; 待審核頁面 &ndash;&gt;-->
<!--  <div class="pending-review " :class="activeClass === 'pendingReview' ? 'active':'d-none' ">-->
<!--    <ul>-->
<!--      <li-->
<!--        class="row border m-0 justify-content-between rounded rounded-3 px-md-7  mb-md-4 py-md-3 align-items-center">-->
<!--        <div class="col-3">-->
<!--          <h4 class="mb-2">-->
<!--            Tim Turner-->
<!--          </h4>-->
<!--          <p class="m-0">02/21 14:00-15:00</p>-->
<!--        </div>-->
<!--        <div class="col-6">-->
<!--          <ul class="lawyer-tags d-flex flex-wrap justify-content-start">-->
<!--            <li-->
<!--              class="rounded-pill border fs-7 bg-secondary  text-white border-1 py-1 mb-1 me-2 px-2">-->
<!--              車禍調解-->
<!--            </li>-->
<!--            <li-->
<!--              class="rounded-pill border fs-7 bg-secondary  text-white border-1 py-1 mb-1 me-2 px-2">-->
<!--              金錢糾紛-->
<!--            </li>-->
<!--            <li-->
<!--              class="rounded-pill border fs-7 bg-secondary  text-white border-1 py-1 mb-1 me-2 px-2">-->
<!--              其他-->
<!--            </li>-->
<!--          </ul>-->
<!--          <p>自駕車經過十字路口，他車突然超車並阻擋行經路線造成我車撞上。</p>-->
<!--        </div>-->

<!--        <div class="col-3 d-flex ">-->
<!--          <button type="button" data-bs-toggle="modal" data-bs-target="#declineModal"-->
<!--                  class="btn btn-outline-secondary px-2 me-2">-->
<!--            <svg width="14" height="14" viewBox="0 0 14 14" fill="none"-->
<!--                 xmlns="http://www.w3.org/2000/svg">-->
<!--              <path-->
<!--                d="M14 1.41L12.59 0L7 5.59L1.41 0L0 1.41L5.59 7L0 12.59L1.41 14L7 8.41L12.59 14L14 12.59L8.41 7L14 1.41Z"-->
<!--                fill="#C4C4C4"/>-->
<!--            </svg>-->

<!--            拒絕-->
<!--          </button>-->
<!--          <button type="button" class="btn btn-dark px-2">-->
<!--            <svg width="18" height="14" viewBox="0 0 18 14" fill="none"-->
<!--                 xmlns="http://www.w3.org/2000/svg">-->
<!--              <path-->
<!--                d="M6.00039 11.1996L1.80039 6.99961L0.400391 8.39961L6.00039 13.9996L18.0004 1.99961L16.6004 0.599609L6.00039 11.1996Z"-->
<!--                fill="white"/>-->
<!--            </svg>-->
<!--            確認-->
<!--          </button>-->
<!--        </div>-->

<!--      </li>-->
<!--      <li-->
<!--        class="row border m-0 justify-content-between rounded rounded-3 px-md-7  mb-md-4 py-md-3 align-items-center">-->
<!--        <div class="col-3">-->
<!--          <h4 class="mb-2">-->
<!--            Tim Turner-->
<!--          </h4>-->
<!--          <p class="m-0">02/21 14:00-15:00</p>-->
<!--        </div>-->
<!--        <div class="col-6">-->
<!--          <ul class="lawyer-tags d-flex flex-wrap justify-content-start">-->
<!--            <li-->
<!--              class="rounded-pill border fs-7 bg-secondary  text-white border-1 py-1 mb-1 me-2 px-2">-->
<!--              車禍調解-->
<!--            </li>-->
<!--            <li-->
<!--              class="rounded-pill border fs-7 bg-secondary  text-white border-1 py-1 mb-1 me-2 px-2">-->
<!--              金錢糾紛-->
<!--            </li>-->
<!--            <li-->
<!--              class="rounded-pill border fs-7 bg-secondary  text-white border-1 py-1 mb-1 me-2 px-2">-->
<!--              其他-->
<!--            </li>-->
<!--          </ul>-->
<!--          <p>自駕車經過十字路口，他車突然超車並阻擋行經路線造成我車撞上。</p>-->
<!--        </div>-->

<!--        <div class="col-3 d-flex ">-->
<!--          <button type="button" data-bs-toggle="modal" data-bs-target="#declineModal"-->
<!--                  class="btn btn-outline-secondary px-2 me-2">-->
<!--            <svg width="14" height="14" viewBox="0 0 14 14" fill="none"-->
<!--                 xmlns="http://www.w3.org/2000/svg">-->
<!--              <path-->
<!--                d="M14 1.41L12.59 0L7 5.59L1.41 0L0 1.41L5.59 7L0 12.59L1.41 14L7 8.41L12.59 14L14 12.59L8.41 7L14 1.41Z"-->
<!--                fill="#C4C4C4"/>-->
<!--            </svg>-->

<!--            拒絕-->
<!--          </button>-->
<!--          <button type="button" class="btn btn-dark px-2">-->
<!--            <svg width="18" height="14" viewBox="0 0 18 14" fill="none"-->
<!--                 xmlns="http://www.w3.org/2000/svg">-->
<!--              <path-->
<!--                d="M6.00039 11.1996L1.80039 6.99961L0.400391 8.39961L6.00039 13.9996L18.0004 1.99961L16.6004 0.599609L6.00039 11.1996Z"-->
<!--                fill="white"/>-->
<!--            </svg>-->
<!--            確認-->
<!--          </button>-->
<!--        </div>-->

<!--      </li>-->
<!--      <li-->
<!--        class="row border m-0 justify-content-between rounded rounded-3 px-md-7  mb-md-4 py-md-3 align-items-center">-->
<!--        <div class="col-3">-->
<!--          <h4 class="mb-2">-->
<!--            Tim Turner-->
<!--          </h4>-->
<!--          <p class="m-0">02/21 14:00-15:00</p>-->
<!--        </div>-->
<!--        <div class="col-6">-->
<!--          <ul class="lawyer-tags d-flex flex-wrap justify-content-start">-->
<!--            <li-->
<!--              class="rounded-pill border fs-7 bg-secondary  text-white border-1 py-1 mb-1 me-2 px-2">-->
<!--              車禍調解-->
<!--            </li>-->
<!--            <li-->
<!--              class="rounded-pill border fs-7 bg-secondary  text-white border-1 py-1 mb-1 me-2 px-2">-->
<!--              金錢糾紛-->
<!--            </li>-->
<!--            <li-->
<!--              class="rounded-pill border fs-7 bg-secondary  text-white border-1 py-1 mb-1 me-2 px-2">-->
<!--              其他-->
<!--            </li>-->
<!--          </ul>-->
<!--          <p>自駕車經過十字路口，他車突然超車並阻擋行經路線造成我車撞上。</p>-->
<!--        </div>-->

<!--        <div class="col-3 d-flex ">-->
<!--          <button type="button" data-bs-toggle="modal" data-bs-target="#declineModal"-->
<!--                  class="btn btn-outline-secondary px-2 me-2">-->
<!--            <svg width="14" height="14" viewBox="0 0 14 14" fill="none"-->
<!--                 xmlns="http://www.w3.org/2000/svg">-->
<!--              <path-->
<!--                d="M14 1.41L12.59 0L7 5.59L1.41 0L0 1.41L5.59 7L0 12.59L1.41 14L7 8.41L12.59 14L14 12.59L8.41 7L14 1.41Z"-->
<!--                fill="#C4C4C4"/>-->
<!--            </svg>-->

<!--            拒絕-->
<!--          </button>-->
<!--          <button type="button" class="btn btn-dark px-2">-->
<!--            <svg width="18" height="14" viewBox="0 0 18 14" fill="none"-->
<!--                 xmlns="http://www.w3.org/2000/svg">-->
<!--              <path-->
<!--                d="M6.00039 11.1996L1.80039 6.99961L0.400391 8.39961L6.00039 13.9996L18.0004 1.99961L16.6004 0.599609L6.00039 11.1996Z"-->
<!--                fill="white"/>-->
<!--            </svg>-->
<!--            確認-->
<!--          </button>-->
<!--        </div>-->

<!--      </li>-->
<!--    </ul>-->
<!--    &lt;!&ndash; 婉拒 modal select 要記得補下拉樣式&ndash;&gt;-->
<!--    <div class="modal fade" id="declineModal" tabindex="-1" aria-labelledby="declineModal"-->
<!--         aria-hidden="true">-->
<!--      <div class="modal-dialog">-->
<!--        <div class="modal-content">-->
<!--          <div class="position-relative">-->
<!--            <button type="button" class="m-1 m-md-3 btn  fs-4 position-absolute top-0 end-0"-->
<!--                    data-bs-dismiss="modal" aria-label="Close">-->
<!--              <svg width="14" height="14"-->
<!--                   viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">-->
<!--                <path-->
<!--                  d="M14 1.41L12.59 0L7 5.59L1.41 0L0 1.41L5.59 7L0 12.59L1.41 14L7 8.41L12.59 14L14 12.59L8.41 7L14 1.41Z"-->
<!--                  fill="black"/>-->
<!--              </svg>-->
<!--            </button>-->
<!--            <h2 class="modal-title text-center mt-3 mt-md-7 mb-2" id="loginModalLabel">-->
<!--              確定要婉拒此次諮詢？</h2>-->
<!--            <div class="line bg-dark mb-3"></div>-->
<!--          </div>-->
<!--          <div class="modal-body pt-5">-->
<!--            <div class="row">-->
<!--              <div class="col  d-flex  flex-column align-items-center offset-md-1 col-md-10">-->
<!--                <div class="d-flex flex-wrap mb-3 justify-content-center">-->
<!--                  <h3 class="fs-4">婉拒預約通知信：</h3>-->
<!--                  <select class="system-default rounded px-3">-->
<!--                    <option selected>系統預設</option>-->
<!--                    <option value="自行輸入">自行輸入</option>-->
<!--                  </select>-->

<!--                </div>-->
<!--                <textarea class="rounded" cols="30" rows="6">-->
<!--                                                    您好～我是OO律師，感謝您預約 2021/10/10 14:00 的媒合諮詢，不好意思由於專長領域不符合您的需求，便取消此次預約，懇請諒解。-->
<!--                                                </textarea>-->
<!--              </div>-->
<!--            </div>-->
<!--          </div>-->
<!--          <div class="modal-footer border-0 text-center d-flex justify-content-center mb-7">-->
<!--            <button type="button" class="btn btn-outline-secondary ">-->
<!--              <svg width="14" height="14" viewBox="0 0 14 14" fill="none"-->
<!--                   xmlns="http://www.w3.org/2000/svg">-->
<!--                <path-->
<!--                  d="M14 1.41L12.59 0L7 5.59L1.41 0L0 1.41L5.59 7L0 12.59L1.41 14L7 8.41L12.59 14L14 12.59L8.41 7L14 1.41Z"-->
<!--                  fill="#C4C4C4"/>-->
<!--              </svg>-->

<!--              取消-->
<!--            </button>-->
<!--            <button type="button" class="btn btn-dark ">-->
<!--              <svg width="18" height="14" viewBox="0 0 18 14" fill="none"-->
<!--                   xmlns="http://www.w3.org/2000/svg">-->
<!--                <path-->
<!--                  d="M6.00039 11.1996L1.80039 6.99961L0.400391 8.39961L6.00039 13.9996L18.0004 1.99961L16.6004 0.599609L6.00039 11.1996Z"-->
<!--                  fill="white"/>-->
<!--              </svg>-->
<!--              確認送出-->
<!--            </button>-->
<!--          </div>-->
<!--        </div>-->
<!--      </div>-->
<!--    </div>-->
<!--  </div>-->
<!--  &lt;!&ndash; 已預約畫面 &ndash;&gt;-->
<!--  <div class="booked" :class="activeClass === 'booked' ? 'active':'d-none' ">-->
<!--    <ul>-->
<!--      <li-->
<!--        class="row border m-0 justify-content-between rounded rounded-3 px-md-7  mb-md-4 py-md-3 align-items-center">-->
<!--        <div class="col-3">-->
<!--          <h4 class="mb-2">-->
<!--            Tim Turner-->
<!--          </h4>-->
<!--          <p class="m-0">02/21 14:00-15:00</p>-->
<!--        </div>-->
<!--        <div class="col-6">-->
<!--          <ul class="lawyer-tags d-flex flex-wrap justify-content-start">-->
<!--            <li-->
<!--              class="rounded-pill border fs-7 bg-secondary  text-white border-1 py-1 mb-1 me-2 px-2">-->
<!--              車禍調解-->
<!--            </li>-->
<!--            <li-->
<!--              class="rounded-pill border fs-7 bg-secondary  text-white border-1 py-1 mb-1 me-2 px-2">-->
<!--              金錢糾紛-->
<!--            </li>-->
<!--            <li-->
<!--              class="rounded-pill border fs-7 bg-secondary  text-white border-1 py-1 mb-1 me-2 px-2">-->
<!--              其他-->
<!--            </li>-->
<!--          </ul>-->
<!--          <p>自駕車經過十字路口，他車突然超車並阻擋行經路線造成我車撞上。</p>-->
<!--        </div>-->
<!--        <div class="col-3 d-flex">-->
<!--          <button type="button" class="btn btn-dark">-->
<!--            <svg width="24" height="24"-->
<!--                 viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">-->
<!--              <path-->
<!--                d="M21 6H19V15H6V17C6 17.55 6.45 18 7 18H18L22 22V7C22 6.45 21.55 6 21 6ZM17 12V3C17 2.45 16.55 2 16 2H3C2.45 2 2 2.45 2 3V17L6 13H16C16.55 13 17 12.55 17 12Z"-->
<!--                fill="white"/>-->
<!--            </svg>-->
<!--            線上諮詢-->
<!--          </button>-->
<!--        </div>-->

<!--      </li>-->
<!--      <li-->
<!--        class="row border m-0 justify-content-between rounded rounded-3 px-md-7  mb-md-4 py-md-3 align-items-center">-->
<!--        <div class="col-3">-->
<!--          <h4 class="mb-2">-->
<!--            Tim Turner-->
<!--          </h4>-->
<!--          <p class="m-0">02/21 14:00-15:00</p>-->
<!--        </div>-->
<!--        <div class="col-6">-->
<!--          <ul class="lawyer-tags d-flex flex-wrap justify-content-start">-->
<!--            <li-->
<!--              class="rounded-pill border fs-7 bg-secondary  text-white border-1 py-1 mb-1 me-2 px-2">-->
<!--              車禍調解-->
<!--            </li>-->
<!--            <li-->
<!--              class="rounded-pill border fs-7 bg-secondary  text-white border-1 py-1 mb-1 me-2 px-2">-->
<!--              金錢糾紛-->
<!--            </li>-->
<!--            <li-->
<!--              class="rounded-pill border fs-7 bg-secondary  text-white border-1 py-1 mb-1 me-2 px-2">-->
<!--              其他-->
<!--            </li>-->
<!--          </ul>-->
<!--          <p>自駕車經過十字路口，他車突然超車並阻擋行經路線造成我車撞上。</p>-->
<!--        </div>-->
<!--        <div class="col-3 d-flex">-->
<!--          <button type="button" class="btn btn-outline-dark">-->
<!--            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"-->
<!--                 xmlns="http://www.w3.org/2000/svg">-->
<!--              <path-->
<!--                d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 18.5C11.17 18.5 10.5 17.83 10.5 17H13.5C13.5 17.83 12.83 18.5 12 18.5ZM17 16H7V15L8 14V11.39C8 9.27 9.03 7.47 11 7V6.5C11 5.93 11.43 5.5 12 5.5C12.57 5.5 13 5.93 13 6.5V7C14.97 7.47 16 9.28 16 11.39V14L17 15V16Z"-->
<!--                fill="black"/>-->
<!--            </svg>-->

<!--            預約提醒-->
<!--          </button>-->
<!--        </div>-->

<!--      </li>-->
<!--      <li-->
<!--        class="row border m-0 justify-content-between rounded rounded-3 px-md-7  mb-md-4 py-md-3 align-items-center">-->
<!--        <div class="col-3">-->
<!--          <h4 class="mb-2">-->
<!--            Tim Turner-->
<!--          </h4>-->
<!--          <p class="m-0">02/21 14:00-15:00</p>-->
<!--        </div>-->
<!--        <div class="col-6">-->
<!--          <ul class="lawyer-tags d-flex flex-wrap justify-content-start">-->
<!--            <li-->
<!--              class="rounded-pill border fs-7 bg-secondary  text-white border-1 py-1 mb-1 me-2 px-2">-->
<!--              車禍調解-->
<!--            </li>-->
<!--            <li-->
<!--              class="rounded-pill border fs-7 bg-secondary  text-white border-1 py-1 mb-1 me-2 px-2">-->
<!--              金錢糾紛-->
<!--            </li>-->
<!--            <li-->
<!--              class="rounded-pill border fs-7 bg-secondary  text-white border-1 py-1 mb-1 me-2 px-2">-->
<!--              其他-->
<!--            </li>-->
<!--          </ul>-->
<!--          <p>自駕車經過十字路口，他車突然超車並阻擋行經路線造成我車撞上。</p>-->
<!--        </div>-->
<!--        <div class="col-3 d-flex">-->
<!--          <button type="button" class="btn btn-outline-dark">-->
<!--            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"-->
<!--                 xmlns="http://www.w3.org/2000/svg">-->
<!--              <path-->
<!--                d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 18.5C11.17 18.5 10.5 17.83 10.5 17H13.5C13.5 17.83 12.83 18.5 12 18.5ZM17 16H7V15L8 14V11.39C8 9.27 9.03 7.47 11 7V6.5C11 5.93 11.43 5.5 12 5.5C12.57 5.5 13 5.93 13 6.5V7C14.97 7.47 16 9.28 16 11.39V14L17 15V16Z"-->
<!--                fill="black"/>-->
<!--            </svg>-->

<!--            預約提醒-->
<!--          </button>-->
<!--        </div>-->

<!--      </li>-->
<!--      <li-->
<!--        class="row border m-0 justify-content-between rounded rounded-3 px-md-7  mb-md-4 py-md-3 align-items-center">-->
<!--        <div class="col-3">-->
<!--          <h4 class="mb-2">-->
<!--            Tim Turner-->
<!--          </h4>-->
<!--          <p class="m-0">02/21 14:00-15:00</p>-->
<!--        </div>-->
<!--        <div class="col-6">-->
<!--          <ul class="lawyer-tags d-flex flex-wrap justify-content-start">-->
<!--            <li-->
<!--              class="rounded-pill border fs-7 bg-secondary  text-white border-1 py-1 mb-1 me-2 px-2">-->
<!--              車禍調解-->
<!--            </li>-->
<!--            <li-->
<!--              class="rounded-pill border fs-7 bg-secondary  text-white border-1 py-1 mb-1 me-2 px-2">-->
<!--              金錢糾紛-->
<!--            </li>-->
<!--            <li-->
<!--              class="rounded-pill border fs-7 bg-secondary  text-white border-1 py-1 mb-1 me-2 px-2">-->
<!--              其他-->
<!--            </li>-->
<!--          </ul>-->
<!--          <p>自駕車經過十字路口，他車突然超車並阻擋行經路線造成我車撞上。</p>-->
<!--        </div>-->
<!--        <div class="col-3 d-flex">-->
<!--          <button type="button" class="btn btn-outline-dark">-->
<!--            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"-->
<!--                 xmlns="http://www.w3.org/2000/svg">-->
<!--              <path-->
<!--                d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 18.5C11.17 18.5 10.5 17.83 10.5 17H13.5C13.5 17.83 12.83 18.5 12 18.5ZM17 16H7V15L8 14V11.39C8 9.27 9.03 7.47 11 7V6.5C11 5.93 11.43 5.5 12 5.5C12.57 5.5 13 5.93 13 6.5V7C14.97 7.47 16 9.28 16 11.39V14L17 15V16Z"-->
<!--                fill="black"/>-->
<!--            </svg>-->

<!--            預約提醒-->
<!--          </button>-->
<!--        </div>-->

<!--      </li>-->
<!--      <li-->
<!--        class="row border m-0 justify-content-between rounded rounded-3 px-md-7  mb-md-4 py-md-3 align-items-center">-->
<!--        <div class="col-3">-->
<!--          <h4 class="mb-2">-->
<!--            Tim Turner-->
<!--          </h4>-->
<!--          <p class="m-0">02/21 14:00-15:00</p>-->
<!--        </div>-->
<!--        <div class="col-6">-->
<!--          <ul class="lawyer-tags d-flex flex-wrap justify-content-start">-->
<!--            <li-->
<!--              class="rounded-pill border fs-7 bg-secondary  text-white border-1 py-1 mb-1 me-2 px-2">-->
<!--              車禍調解-->
<!--            </li>-->
<!--            <li-->
<!--              class="rounded-pill border fs-7 bg-secondary  text-white border-1 py-1 mb-1 me-2 px-2">-->
<!--              金錢糾紛-->
<!--            </li>-->
<!--            <li-->
<!--              class="rounded-pill border fs-7 bg-secondary  text-white border-1 py-1 mb-1 me-2 px-2">-->
<!--              其他-->
<!--            </li>-->
<!--          </ul>-->
<!--          <p>自駕車經過十字路口，他車突然超車並阻擋行經路線造成我車撞上。</p>-->
<!--        </div>-->
<!--        <div class="col-3 d-flex">-->
<!--          <button type="button" class="btn btn-outline-dark">-->
<!--            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"-->
<!--                 xmlns="http://www.w3.org/2000/svg">-->
<!--              <path-->
<!--                d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 18.5C11.17 18.5 10.5 17.83 10.5 17H13.5C13.5 17.83 12.83 18.5 12 18.5ZM17 16H7V15L8 14V11.39C8 9.27 9.03 7.47 11 7V6.5C11 5.93 11.43 5.5 12 5.5C12.57 5.5 13 5.93 13 6.5V7C14.97 7.47 16 9.28 16 11.39V14L17 15V16Z"-->
<!--                fill="black"/>-->
<!--            </svg>-->

<!--            預約提醒-->
<!--          </button>-->
<!--        </div>-->

<!--      </li>-->
<!--    </ul>-->
<!--    &lt;!&ndash; 分頁按鈕 &ndash;&gt;-->
<!--    <ul class="appointment-pagination d-flex justify-content-md-end">-->
<!--      <li class="me-2">-->
<!--        <a class="d-block text-white bg-dark btn-dark rounded-pill text-center fs-7" href="#">1</a>-->
<!--      </li>-->
<!--      <li class="me-2">-->
<!--        <a class="d-block text-white bg-dark btn-dark rounded-pill text-center fs-7" href="#">2</a>-->
<!--      </li>-->
<!--      <li>-->
<!--        <a class="d-block pagination-next text-white bg-dark btn-dark rounded-pill text-center"-->
<!--           href="#">-->
<!--          <svg class="mb-2" width="10" height="8" viewBox="0 0 10 8" fill="none"-->
<!--               xmlns="http://www.w3.org/2000/svg">-->
<!--            <path-->
<!--              d="M1.27398 0L0.333984 0.94L3.38732 4L0.333984 7.06L1.27398 8L5.27398 4L1.27398 0Z"-->
<!--              fill="white"/>-->
<!--            <path-->
<!--              d="M5.66656 0L4.72656 0.94L7.7799 4L4.72656 7.06L5.66656 8L9.66656 4L5.66656 0Z"-->
<!--              fill="white"/>-->
<!--          </svg>-->

<!--        </a>-->
<!--      </li>-->
<!--    </ul>-->
<!--  </div>-->
<!--  &lt;!&ndash; 預約記錄 &ndash;&gt;-->
<!--  <div class="appointment-record" :class="activeClass === 'appointmentRecord' ? 'active':'d-none' ">-->
<!--    <ul class="accordion accordion-flush" id="accordionScore">-->
<!--      <li id="lawyer-score-one">-->
<!--        <p class="text-end">-->
<!--          <a href="#" data-bs-toggle="modal" data-bs-target="#blockMembersModal">-->
<!--            <svg width="20" height="20" viewBox="0 0 20 20" fill="none"-->
<!--                 xmlns="http://www.w3.org/2000/svg">-->
<!--              <path-->
<!--                d="M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM2 10C2 5.58 5.58 2 10 2C11.85 2 13.55 2.63 14.9 3.69L3.69 14.9C2.63 13.55 2 11.85 2 10ZM10 18C8.15 18 6.45 17.37 5.1 16.31L16.31 5.1C17.37 6.45 18 8.15 18 10C18 14.42 14.42 18 10 18Z"-->
<!--                fill="black"/>-->
<!--            </svg>-->
<!--            加入封鎖</a>-->
<!--        </p>-->
<!--        <div-->
<!--          class="row border m-0 justify-content-between rounded rounded-3  px-md-7 mb-md-4 py-md-3 align-items-center">-->
<!--          <div class="col-3">-->
<!--            <h4 class="mb-2 ">-->
<!--              Tim Turner-->
<!--            </h4>-->
<!--            <p class="m-0 ">02/21 14:00-15:00</p>-->
<!--          </div>-->
<!--          <div class="col-5">-->
<!--            <ul class="lawyer-tags d-flex flex-wrap justify-content-start">-->
<!--              <li-->
<!--                class="rounded-pill border fs-7 bg-secondary  text-white border-1 py-1 mb-1 me-2 px-2">-->
<!--                車禍調解-->
<!--              </li>-->
<!--              <li-->
<!--                class="rounded-pill border fs-7 bg-secondary  text-white border-1 py-1 mb-1 me-2 px-2">-->
<!--                金錢糾紛-->
<!--              </li>-->
<!--              <li-->
<!--                class="rounded-pill border fs-7 bg-secondary  text-white border-1 py-1 mb-1 me-2 px-2">-->
<!--                其他-->
<!--              </li>-->
<!--            </ul>-->
<!--            <p>自駕車經過十字路口，他車突然超車並阻擋行經路線造成我車撞上。</p>-->
<!--          </div>-->
<!--          <div class="col-4 d-flex">-->
<!--            <button type="button" class="btn btn-outline-secondary  me-2">-->
<!--              諮詢紀錄-->
<!--            </button>-->
<!--            <button type="button" class="btn btn-dark" data-bs-toggle="collapse"-->
<!--                    data-bs-target="#flush-collapseOne" aria-expanded="false"-->
<!--                    aria-controls="flush-collapseOne">-->
<!--              查看評價-->
<!--              <svg width="12" height="8" viewBox="0 0 12 8" fill="none"-->
<!--                   xmlns="http://www.w3.org/2000/svg">-->
<!--                <path-->
<!--                  d="M10.59 0.589844L6 5.16984L1.41 0.589844L0 1.99984L6 7.99984L12 1.99984L10.59 0.589844Z"-->
<!--                  fill="white"/>-->
<!--              </svg>-->

<!--            </button>-->
<!--          </div>-->
<!--          <div id="flush-collapseOne" class="accordion-collapse collapse"-->
<!--               aria-labelledby="lawyer-score-one" data-bs-parent="#accordionScore">-->
<!--            <div class="accordion-body px-0">-->
<!--              <div class="d-flex border-top border-3 pt-3">-->

<!--                <div class="pe-md-7">-->

<!--                  <div class="d-flex justify-content-between align-items-center mb-3">-->

<!--                    <Rating class="text-warning" :modelValue="5" :readonly="true" :stars="5" :cancel="false"/>-->
<!--                    <p class="fs-7 mb-1">2021/10/03</p>-->
<!--                  </div>-->
<!--                  <p>目前已經是離婚狀態了，但是前夫並未照約定付撫養費，上網搜尋相關方式才發現法學電波的法律線上諮詢媒合律師的方式，嘗試預約媒合後，感謝律師的回覆，目前也委託律師解決問題中-->
<!--                  </p>-->
<!--                </div>-->
<!--              </div>-->
<!--            </div>-->
<!--          </div>-->
<!--        </div>-->

<!--      </li>-->
<!--      <li id="lawyer-score-two">-->
<!--        <p class="text-end">-->
<!--          <a href="#" data-bs-toggle="modal" data-bs-target="#blockMembersModal">-->
<!--            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">-->
<!--              <path-->
<!--                d="M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM2 10C2 5.58 5.58 2 10 2C11.85 2 13.55 2.63 14.9 3.69L3.69 14.9C2.63 13.55 2 11.85 2 10ZM10 18C8.15 18 6.45 17.37 5.1 16.31L16.31 5.1C17.37 6.45 18 8.15 18 10C18 14.42 14.42 18 10 18Z"-->
<!--                fill="black"/>-->
<!--            </svg>-->
<!--            加入封鎖</a>-->
<!--        </p>-->

<!--        <div-->
<!--          class="row border m-0 justify-content-between rounded rounded-3 px-md-7 mb-md-4 py-md-3 align-items-center">-->
<!--          <div class="col-3">-->
<!--            <h4 class="mb-2">-->
<!--              Tim Turner-->
<!--            </h4>-->
<!--            <p class="m-0">02/21 14:00-15:00</p>-->
<!--          </div>-->
<!--          <div class="col-5">-->
<!--            <ul class="lawyer-tags d-flex flex-wrap justify-content-start">-->
<!--              <li-->
<!--                class="rounded-pill border fs-7 bg-secondary  text-white border-1 py-1 mb-1 me-2 px-2">-->
<!--                車禍調解-->
<!--              </li>-->
<!--              <li-->
<!--                class="rounded-pill border fs-7 bg-secondary  text-white border-1 py-1 mb-1 me-2 px-2">-->
<!--                金錢糾紛-->
<!--              </li>-->
<!--              <li-->
<!--                class="rounded-pill border fs-7 bg-secondary  text-white border-1 py-1 mb-1 me-2 px-2">-->
<!--                其他-->
<!--              </li>-->
<!--            </ul>-->
<!--            <p>自駕車經過十字路口，他車突然超車並阻擋行經路線造成我車撞上。</p>-->
<!--          </div>-->
<!--          <div class="col-4 d-flex">-->
<!--            <button type="button" class="btn btn-outline-secondary  me-2">-->
<!--              諮詢紀錄-->
<!--            </button>-->
<!--            <button type="button" class="btn btn-dark" data-bs-toggle="collapse"-->
<!--                    data-bs-target="#flush-collapseTwo" aria-expanded="false"-->
<!--                    aria-controls="flush-collapseTwo">-->
<!--              查看評價-->
<!--              <svg width="12" height="8" viewBox="0 0 12 8" fill="none"-->
<!--                   xmlns="http://www.w3.org/2000/svg">-->
<!--                <path-->
<!--                  d="M10.59 0.589844L6 5.16984L1.41 0.589844L0 1.99984L6 7.99984L12 1.99984L10.59 0.589844Z"-->
<!--                  fill="white"/>-->
<!--              </svg>-->

<!--            </button>-->
<!--          </div>-->
<!--          <div id="flush-collapseTwo" class="accordion-collapse collapse"-->
<!--               aria-labelledby="lawyer-score-two" data-bs-parent="#accordionScore">-->
<!--            <div class="accordion-body px-0">-->
<!--              <div class="d-flex border-top border-3 pt-3">-->

<!--                <div class="pe-md-7">-->

<!--                  <div class="d-flex justify-content-between align-items-center mb-3">-->

<!--                    <Rating class="text-warning" :modelValue="5" :readonly="true" :stars="5" :cancel="false"/>-->
<!--                    <p class="fs-7 mb-1">2021/10/03</p>-->
<!--                  </div>-->
<!--                  <p>目前已經是離婚狀態了，但是前夫並未照約定付撫養費，上網搜尋相關方式才發現法學電波的法律線上諮詢媒合律師的方式，嘗試預約媒合後，感謝律師的回覆，目前也委託律師解決問題中-->
<!--                  </p>-->
<!--                </div>-->
<!--              </div>-->
<!--            </div>-->
<!--          </div>-->
<!--        </div>-->

<!--      </li>-->
<!--      <li id="lawyer-score-three">-->
<!--        <p class="text-end">-->
<!--          <a href="#" data-bs-toggle="modal" data-bs-target="#blockMembersModal">-->
<!--            <svg width="20" height="20" viewBox="0 0 20 20" fill="none"-->
<!--                 xmlns="http://www.w3.org/2000/svg">-->
<!--              <path-->
<!--                d="M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM2 10C2 5.58 5.58 2 10 2C11.85 2 13.55 2.63 14.9 3.69L3.69 14.9C2.63 13.55 2 11.85 2 10ZM10 18C8.15 18 6.45 17.37 5.1 16.31L16.31 5.1C17.37 6.45 18 8.15 18 10C18 14.42 14.42 18 10 18Z"-->
<!--                fill="black"/>-->
<!--            </svg>-->
<!--            加入封鎖</a>-->
<!--        </p>-->

<!--        <div-->
<!--          class="row border m-0 justify-content-between rounded rounded-3 px-md-7 mb-md-4 py-md-3 align-items-center">-->
<!--          <div class="col-3">-->
<!--            <h4 class="mb-2">-->
<!--              Tim Turner-->
<!--            </h4>-->
<!--            <p class="m-0">02/21 14:00-15:00</p>-->
<!--          </div>-->
<!--          <div class="col-5">-->
<!--            <ul class="lawyer-tags d-flex flex-wrap justify-content-start">-->
<!--              <li-->
<!--                class="rounded-pill border fs-7 bg-secondary  text-white border-1 py-1 mb-1 me-2 px-2">-->
<!--                車禍調解-->
<!--              </li>-->
<!--              <li-->
<!--                class="rounded-pill border fs-7 bg-secondary  text-white border-1 py-1 mb-1 me-2 px-2">-->
<!--                金錢糾紛-->
<!--              </li>-->
<!--              <li-->
<!--                class="rounded-pill border fs-7 bg-secondary  text-white border-1 py-1 mb-1 me-2 px-2">-->
<!--                其他-->
<!--              </li>-->
<!--            </ul>-->
<!--            <p>自駕車經過十字路口，他車突然超車並阻擋行經路線造成我車撞上。</p>-->
<!--          </div>-->
<!--          <div class="col-4 d-flex">-->
<!--            <button type="button" class="btn btn-outline-secondary  me-2">-->
<!--              諮詢紀錄-->
<!--            </button>-->
<!--            <button type="button" class="btn btn-dark" data-bs-toggle="collapse"-->
<!--                    data-bs-target="#flush-collapseThree" aria-expanded="false"-->
<!--                    aria-controls="flush-collapseThree">-->
<!--              查看評價-->
<!--              <svg width="12" height="8" viewBox="0 0 12 8" fill="none"-->
<!--                   xmlns="http://www.w3.org/2000/svg">-->
<!--                <path-->
<!--                  d="M10.59 0.589844L6 5.16984L1.41 0.589844L0 1.99984L6 7.99984L12 1.99984L10.59 0.589844Z"-->
<!--                  fill="white"/>-->
<!--              </svg>-->
<!--            </button>-->
<!--          </div>-->
<!--          <div id="flush-collapseThree" class="accordion-collapse collapse"-->
<!--               aria-labelledby="lawyer-score-three" data-bs-parent="#accordionScore">-->
<!--            <div class="accordion-body px-0">-->
<!--              <div class="d-flex border-top border-3 pt-3">-->

<!--                <div class="pe-md-7">-->

<!--                  <div class="d-flex justify-content-between align-items-center mb-3">-->

<!--                    <Rating class="text-warning" :modelValue="5" :readonly="true" :stars="5" :cancel="false"/>-->
<!--                    <p class="fs-7 mb-1">2021/10/03</p>-->
<!--                  </div>-->
<!--                  <p>目前已經是離婚狀態了，但是前夫並未照約定付撫養費，上網搜尋相關方式才發現法學電波的法律線上諮詢媒合律師的方式，嘗試預約媒合後，感謝律師的回覆，目前也委託律師解決問題中-->
<!--                  </p>-->
<!--                </div>-->
<!--              </div>-->
<!--            </div>-->
<!--          </div>-->
<!--        </div>-->

<!--      </li>-->

<!--    </ul>-->
<!--    &lt;!&ndash; 封鎖會員警示 modal &ndash;&gt;-->
<!--    <div class="modal fade" id="blockMembersModal" tabindex="-1"-->
<!--         aria-labelledby="blockMembersModalLabel" aria-hidden="true">-->
<!--      <div class="modal-dialog">-->
<!--        <div class="modal-content">-->
<!--          <div class="position-relative">-->
<!--            <button type="button" class="m-1 m-mb-3 btn  fs-4 position-absolute top-0 end-0"-->
<!--                    data-bs-dismiss="modal" aria-label="Close">-->
<!--              <svg width="14" height="14"-->
<!--                   viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">-->
<!--                <path-->
<!--                  d="M14 1.41L12.59 0L7 5.59L1.41 0L0 1.41L5.59 7L0 12.59L1.41 14L7 8.41L12.59 14L14 12.59L8.41 7L14 1.41Z"-->
<!--                  fill="black"/>-->
<!--              </svg>-->
<!--            </button>-->
<!--            <h2 class="modal-title text-center mt-3 mt-md-7 mb-2" id="blockMembersModalLabel">-->
<!--              是否確定要封鎖此會員</h2>-->
<!--            <div class="line bg-dark mb-3"></div>-->
<!--          </div>-->
<!--          <div class="modal-body">-->
<!--            <div class="row ">-->
<!--              <div class="col-md-8 offset-md-2 text-center">-->
<!--                一旦封鎖此會員，會員便無法再透過媒合平台，預約線上會議與您諮詢，是否還要進行封鎖？-->
<!--              </div>-->
<!--            </div>-->
<!--          </div>-->
<!--          <div class="modal-footer border-0  d-flex justify-content-center mb-md-7">-->
<!--            <button type="button" class="btn btn-outline-secondary  me-2">-->
<!--              <svg width="14" height="14" viewBox="0 0 14 14" fill="none"-->
<!--                   xmlns="http://www.w3.org/2000/svg">-->
<!--                <path-->
<!--                  d="M14 1.41L12.59 0L7 5.59L1.41 0L0 1.41L5.59 7L0 12.59L1.41 14L7 8.41L12.59 14L14 12.59L8.41 7L14 1.41Z"-->
<!--                  fill="#C4C4C4"/>-->
<!--              </svg>-->
<!--              取消-->
<!--            </button>-->
<!--            <button type="button" class="btn btn-dark">-->
<!--              <svg width="18" height="14" viewBox="0 0 18 14" fill="none"-->
<!--                   xmlns="http://www.w3.org/2000/svg">-->
<!--                <path-->
<!--                  d="M5.99844 11.1996L1.79844 6.99961L0.398438 8.39961L5.99844 13.9996L17.9984 1.99961L16.5984 0.599609L5.99844 11.1996Z"-->
<!--                  fill="white"/>-->
<!--              </svg>-->
<!--              確定封鎖-->
<!--            </button>-->
<!--          </div>-->
<!--        </div>-->
<!--      </div>-->
<!--    </div>-->
<!--    &lt;!&ndash; 分頁按鈕 &ndash;&gt;-->
<!--    <ul class="appointment-pagination d-flex justify-content-md-end">-->
<!--      <li class="me-2">-->
<!--        <a class="d-block text-white bg-dark btn-dark rounded-pill text-center fs-7" href="#">1</a>-->
<!--      </li>-->
<!--      <li class="me-2">-->
<!--        <a class="d-block text-white bg-dark btn-dark rounded-pill text-center fs-7" href="#">2</a>-->
<!--      </li>-->
<!--      <li>-->
<!--        <a class="d-block pagination-next text-white bg-dark btn-dark rounded-pill text-center"-->
<!--           href="#">-->
<!--          <svg class="mb-2" width="10" height="8" viewBox="0 0 10 8" fill="none"-->
<!--               xmlns="http://www.w3.org/2000/svg">-->
<!--            <path-->
<!--              d="M1.27398 0L0.333984 0.94L3.38732 4L0.333984 7.06L1.27398 8L5.27398 4L1.27398 0Z"-->
<!--              fill="white"/>-->
<!--            <path-->
<!--              d="M5.66656 0L4.72656 0.94L7.7799 4L4.72656 7.06L5.66656 8L9.66656 4L5.66656 0Z"-->
<!--              fill="white"/>-->
<!--          </svg>-->

<!--        </a>-->
<!--      </li>-->
<!--    </ul>-->
<!--  </div>-->
<!--  &lt;!&ndash; 封鎖名單 &ndash;&gt;-->
<!--  <div class="block-members-list" :class="activeClass === 'blockMembersList' ? 'active':'d-none' ">-->
<!--    <ul>-->
<!--      <li-->
<!--        class="row border m-0 justify-content-between rounded rounded-3 px-md-7 mb-md-4 py-md-3 align-items-center">-->
<!--        <div class="col-3">-->
<!--          <h4 class="mb-2">-->
<!--            Tim Turner-->
<!--          </h4>-->
<!--          <p class="m-0">02/21 14:00-15:00</p>-->
<!--        </div>-->
<!--        <div class="col-6">-->
<!--          <ul class="lawyer-tags d-flex flex-wrap justify-content-start">-->
<!--            <li-->
<!--              class="rounded-pill border fs-7 bg-secondary  text-white border-1 py-1 mb-1 me-2 px-2">-->
<!--              車禍調解-->
<!--            </li>-->
<!--            <li-->
<!--              class="rounded-pill border fs-7 bg-secondary  text-white border-1 py-1 mb-1 me-2 px-2">-->
<!--              金錢糾紛-->
<!--            </li>-->
<!--            <li-->
<!--              class="rounded-pill border fs-7 bg-secondary  text-white border-1 py-1 mb-1 me-2 px-2">-->
<!--              其他-->
<!--            </li>-->
<!--          </ul>-->
<!--          <p>自駕車經過十字路口，他車突然超車並阻擋行經路線造成我車撞上。</p>-->
<!--        </div>-->
<!--        <div class="col-3 d-flex">-->
<!--          <button type="button" class="btn btn-outline-secondary">-->
<!--            <svg width="16" height="21" viewBox="0 0 16 21" fill="none"-->
<!--                 xmlns="http://www.w3.org/2000/svg">-->
<!--              <path-->
<!--                d="M8 16C9.1 16 10 15.1 10 14C10 12.9 9.1 12 8 12C6.9 12 6 12.9 6 14C6 15.1 6.9 16 8 16ZM14 7H13V5C13 2.24 10.76 0 8 0C5.24 0 3 2.24 3 5H4.9C4.9 3.29 6.29 1.9 8 1.9C9.71 1.9 11.1 3.29 11.1 5V7H2C0.9 7 0 7.9 0 9V19C0 20.1 0.9 21 2 21H14C15.1 21 16 20.1 16 19V9C16 7.9 15.1 7 14 7ZM14 19H2V9H14V19Z"-->
<!--                fill="#C4C4C4"/>-->
<!--            </svg>-->

<!--            解除封鎖-->
<!--          </button>-->
<!--        </div>-->

<!--      </li>-->
<!--      <li-->
<!--        class="row border m-0 justify-content-between rounded rounded-3 px-md-7  mb-md-4 py-md-3 align-items-center">-->
<!--        <div class="col-3">-->
<!--          <h4 class="mb-2">-->
<!--            Tim Turner-->
<!--          </h4>-->
<!--          <p class="m-0">02/21 14:00-15:00</p>-->
<!--        </div>-->
<!--        <div class="col-6">-->
<!--          <ul class="lawyer-tags d-flex flex-wrap justify-content-start">-->
<!--            <li-->
<!--              class="rounded-pill border fs-7 bg-secondary  text-white border-1 py-1 mb-1 me-2 px-2">-->
<!--              車禍調解-->
<!--            </li>-->
<!--            <li-->
<!--              class="rounded-pill border fs-7 bg-secondary  text-white border-1 py-1 mb-1 me-2 px-2">-->
<!--              金錢糾紛-->
<!--            </li>-->
<!--            <li-->
<!--              class="rounded-pill border fs-7 bg-secondary  text-white border-1 py-1 mb-1 me-2 px-2">-->
<!--              其他-->
<!--            </li>-->
<!--          </ul>-->
<!--          <p>自駕車經過十字路口，他車突然超車並阻擋行經路線造成我車撞上。</p>-->
<!--        </div>-->
<!--        <div class="col-3 d-flex">-->
<!--          <button type="button" class="btn btn-outline-dark">-->
<!--            <svg width="16" height="21" viewBox="0 0 16 21" fill="none"-->
<!--                 xmlns="http://www.w3.org/2000/svg">-->
<!--              <path-->
<!--                d="M8 16C9.1 16 10 15.1 10 14C10 12.9 9.1 12 8 12C6.9 12 6 12.9 6 14C6 15.1 6.9 16 8 16ZM14 7H13V5C13 2.24 10.76 0 8 0C5.24 0 3 2.24 3 5H4.9C4.9 3.29 6.29 1.9 8 1.9C9.71 1.9 11.1 3.29 11.1 5V7H2C0.9 7 0 7.9 0 9V19C0 20.1 0.9 21 2 21H14C15.1 21 16 20.1 16 19V9C16 7.9 15.1 7 14 7ZM14 19H2V9H14V19Z"-->
<!--                fill="#C4C4C4"/>-->
<!--            </svg>-->

<!--            解除封鎖-->
<!--          </button>-->
<!--        </div>-->

<!--      </li>-->
<!--      <li-->
<!--        class="row border m-0 justify-content-between rounded rounded-3 px-md-7 mb-md-4 py-md-3 align-items-center">-->
<!--        <div class="col-3">-->
<!--          <h4 class="mb-2">-->
<!--            Tim Turner-->
<!--          </h4>-->
<!--          <p class="m-0">02/21 14:00-15:00</p>-->
<!--        </div>-->
<!--        <div class="col-6">-->
<!--          <ul class="lawyer-tags d-flex flex-wrap justify-content-start">-->
<!--            <li-->
<!--              class="rounded-pill border fs-7 bg-secondary  text-white border-1 py-1 mb-1 me-2 px-2">-->
<!--              車禍調解-->
<!--            </li>-->
<!--            <li-->
<!--              class="rounded-pill border fs-7 bg-secondary  text-white border-1 py-1 mb-1 me-2 px-2">-->
<!--              金錢糾紛-->
<!--            </li>-->
<!--            <li-->
<!--              class="rounded-pill border fs-7 bg-secondary  text-white border-1 py-1 mb-1 me-2 px-2">-->
<!--              其他-->
<!--            </li>-->
<!--          </ul>-->
<!--          <p>自駕車經過十字路口，他車突然超車並阻擋行經路線造成我車撞上。</p>-->
<!--        </div>-->
<!--        <div class="col-3 d-flex">-->
<!--          <button type="button" class="btn btn-outline-dark">-->
<!--            <svg width="16" height="21" viewBox="0 0 16 21" fill="none"-->
<!--                 xmlns="http://www.w3.org/2000/svg">-->
<!--              <path-->
<!--                d="M8 16C9.1 16 10 15.1 10 14C10 12.9 9.1 12 8 12C6.9 12 6 12.9 6 14C6 15.1 6.9 16 8 16ZM14 7H13V5C13 2.24 10.76 0 8 0C5.24 0 3 2.24 3 5H4.9C4.9 3.29 6.29 1.9 8 1.9C9.71 1.9 11.1 3.29 11.1 5V7H2C0.9 7 0 7.9 0 9V19C0 20.1 0.9 21 2 21H14C15.1 21 16 20.1 16 19V9C16 7.9 15.1 7 14 7ZM14 19H2V9H14V19Z"-->
<!--                fill="#C4C4C4"/>-->
<!--            </svg>-->

<!--            解除封鎖-->
<!--          </button>-->
<!--        </div>-->

<!--      </li>-->
<!--      <li-->
<!--        class="row border m-0 justify-content-between rounded rounded-3 px-md-7 mb-md-4 py-md-3 align-items-center">-->
<!--        <div class="col-3">-->
<!--          <h4 class="mb-2">-->
<!--            Tim Turner-->
<!--          </h4>-->
<!--          <p class="m-0">02/21 14:00-15:00</p>-->
<!--        </div>-->
<!--        <div class="col-6">-->
<!--          <ul class="lawyer-tags d-flex flex-wrap justify-content-start">-->
<!--            <li-->
<!--              class="rounded-pill border fs-7 bg-secondary  text-white border-1 py-1 mb-1 me-2 px-2">-->
<!--              車禍調解-->
<!--            </li>-->
<!--            <li-->
<!--              class="rounded-pill border fs-7 bg-secondary  text-white border-1 py-1 mb-1 me-2 px-2">-->
<!--              金錢糾紛-->
<!--            </li>-->
<!--            <li-->
<!--              class="rounded-pill border fs-7 bg-secondary  text-white border-1 py-1 mb-1 me-2 px-2">-->
<!--              其他-->
<!--            </li>-->
<!--          </ul>-->
<!--          <p>自駕車經過十字路口，他車突然超車並阻擋行經路線造成我車撞上。</p>-->
<!--        </div>-->
<!--        <div class="col-3 d-flex">-->
<!--          <button type="button" class="btn btn-outline-dark">-->
<!--            <svg width="16" height="21" viewBox="0 0 16 21" fill="none"-->
<!--                 xmlns="http://www.w3.org/2000/svg">-->
<!--              <path-->
<!--                d="M8 16C9.1 16 10 15.1 10 14C10 12.9 9.1 12 8 12C6.9 12 6 12.9 6 14C6 15.1 6.9 16 8 16ZM14 7H13V5C13 2.24 10.76 0 8 0C5.24 0 3 2.24 3 5H4.9C4.9 3.29 6.29 1.9 8 1.9C9.71 1.9 11.1 3.29 11.1 5V7H2C0.9 7 0 7.9 0 9V19C0 20.1 0.9 21 2 21H14C15.1 21 16 20.1 16 19V9C16 7.9 15.1 7 14 7ZM14 19H2V9H14V19Z"-->
<!--                fill="#C4C4C4"/>-->
<!--            </svg>-->

<!--            解除封鎖-->
<!--          </button>-->
<!--        </div>-->

<!--      </li>-->
<!--      <li-->
<!--        class="row border m-0 justify-content-between rounded rounded-3 px-md-7 mb-md-4 py-md-3 align-items-center">-->
<!--        <div class="col-3">-->
<!--          <h4 class="mb-2">-->
<!--            Tim Turner-->
<!--          </h4>-->
<!--          <p class="m-0">02/21 14:00-15:00</p>-->
<!--        </div>-->
<!--        <div class="col-6">-->
<!--          <ul class="lawyer-tags d-flex flex-wrap justify-content-start">-->
<!--            <li-->
<!--              class="rounded-pill border fs-7 bg-secondary  text-white border-1 py-1 mb-1 me-2 px-2">-->
<!--              車禍調解-->
<!--            </li>-->
<!--            <li-->
<!--              class="rounded-pill border fs-7 bg-secondary  text-white border-1 py-1 mb-1 me-2 px-2">-->
<!--              金錢糾紛-->
<!--            </li>-->
<!--            <li-->
<!--              class="rounded-pill border fs-7 bg-secondary  text-white border-1 py-1 mb-1 me-2 px-2">-->
<!--              其他-->
<!--            </li>-->
<!--          </ul>-->
<!--          <p>自駕車經過十字路口，他車突然超車並阻擋行經路線造成我車撞上。</p>-->
<!--        </div>-->
<!--        <div class="col-3 d-flex">-->
<!--          <button type="button" class="btn btn-outline-dark">-->
<!--            <svg width="16" height="21" viewBox="0 0 16 21" fill="none"-->
<!--                 xmlns="http://www.w3.org/2000/svg">-->
<!--              <path-->
<!--                d="M8 16C9.1 16 10 15.1 10 14C10 12.9 9.1 12 8 12C6.9 12 6 12.9 6 14C6 15.1 6.9 16 8 16ZM14 7H13V5C13 2.24 10.76 0 8 0C5.24 0 3 2.24 3 5H4.9C4.9 3.29 6.29 1.9 8 1.9C9.71 1.9 11.1 3.29 11.1 5V7H2C0.9 7 0 7.9 0 9V19C0 20.1 0.9 21 2 21H14C15.1 21 16 20.1 16 19V9C16 7.9 15.1 7 14 7ZM14 19H2V9H14V19Z"-->
<!--                fill="#C4C4C4"/>-->
<!--            </svg>-->

<!--            解除封鎖-->
<!--          </button>-->
<!--        </div>-->

<!--      </li>-->
<!--    </ul>-->
<!--    &lt;!&ndash; 分頁按鈕 &ndash;&gt;-->
<!--    <ul class="appointment-pagination d-flex justify-content-md-end">-->
<!--      <li class="me-2">-->
<!--        <a class="d-block text-white bg-dark btn-dark rounded-pill text-center fs-7" href="#">1</a>-->
<!--      </li>-->
<!--      <li class="me-2">-->
<!--        <a class="d-block text-white bg-dark btn-dark rounded-pill text-center fs-7" href="#">2</a>-->
<!--      </li>-->
<!--      <li>-->
<!--        <a class="d-block pagination-next text-white bg-dark btn-dark rounded-pill text-center"-->
<!--           href="#">-->
<!--          <svg class="mb-2" width="10" height="8" viewBox="0 0 10 8" fill="none"-->
<!--               xmlns="http://www.w3.org/2000/svg">-->
<!--            <path-->
<!--              d="M1.27398 0L0.333984 0.94L3.38732 4L0.333984 7.06L1.27398 8L5.27398 4L1.27398 0Z"-->
<!--              fill="white"/>-->
<!--            <path-->
<!--              d="M5.66656 0L4.72656 0.94L7.7799 4L4.72656 7.06L5.66656 8L9.66656 4L5.66656 0Z"-->
<!--              fill="white"/>-->
<!--          </svg>-->

<!--        </a>-->
<!--      </li>-->
<!--    </ul>-->
<!--  </div>-->
</template>

<script>
export default {
  data () {
    return {
      activeClass: 'appointmentTime'
    }
  },
  methods: {
    changeTabs (item) {
      this.activeClass = item
    }
  }
}
</script>
