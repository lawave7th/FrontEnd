<template>
    <!-- 已預約畫面 -->
    <div class="booked">
      <ul>
        <li
          class="row border m-0 justify-content-between rounded rounded-3 px-md-7  mb-md-4 py-md-3 align-items-center">
          <div class="col-3">
            <h4 class="mb-2">
              Tim Turner
            </h4>
            <p class="m-0">02/21 14:00-15:00</p>
          </div>
          <div class="col-6">
            <ul class="lawyer-tags d-flex flex-wrap justify-content-start">
              <li
                class="rounded-pill border fs-7 bg-secondary  text-white border-1 py-1 mb-1 me-2 px-2">
                車禍調解
              </li>
              <li
                class="rounded-pill border fs-7 bg-secondary  text-white border-1 py-1 mb-1 me-2 px-2">
                金錢糾紛
              </li>
              <li
                class="rounded-pill border fs-7 bg-secondary  text-white border-1 py-1 mb-1 me-2 px-2">
                其他
              </li>
            </ul>
            <p>自駕車經過十字路口，他車突然超車並阻擋行經路線造成我車撞上。</p>
          </div>
          <div class="col-3 d-flex">
            <button type="button" class="btn btn-dark">
              <svg width="24" height="24"
                   viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M21 6H19V15H6V17C6 17.55 6.45 18 7 18H18L22 22V7C22 6.45 21.55 6 21 6ZM17 12V3C17 2.45 16.55 2 16 2H3C2.45 2 2 2.45 2 3V17L6 13H16C16.55 13 17 12.55 17 12Z"
                  fill="white"/>
              </svg>
              線上諮詢
            </button>
          </div>

        </li>
        <li
          class="row border m-0 justify-content-between rounded rounded-3 px-md-7  mb-md-4 py-md-3 align-items-center">
          <div class="col-3">
            <h4 class="mb-2">
              Tim Turner
            </h4>
            <p class="m-0">02/21 14:00-15:00</p>
          </div>
          <div class="col-6">
            <ul class="lawyer-tags d-flex flex-wrap justify-content-start">
              <li
                class="rounded-pill border fs-7 bg-secondary  text-white border-1 py-1 mb-1 me-2 px-2">
                車禍調解
              </li>
              <li
                class="rounded-pill border fs-7 bg-secondary  text-white border-1 py-1 mb-1 me-2 px-2">
                金錢糾紛
              </li>
              <li
                class="rounded-pill border fs-7 bg-secondary  text-white border-1 py-1 mb-1 me-2 px-2">
                其他
              </li>
            </ul>
            <p>自駕車經過十字路口，他車突然超車並阻擋行經路線造成我車撞上。</p>
          </div>
          <div class="col-3 d-flex">
            <button type="button" class="btn btn-outline-dark">
             <span class="material-icons">circle_notifications</span>
              預約提醒
            </button>
          </div>

        </li>
      </ul>
      <!-- 分頁按鈕 -->
      <ul class="appointment-pagination d-flex justify-content-md-end">
        <li class="me-2">
          <a class="d-block text-white bg-dark btn-dark rounded-pill text-center fs-7" href="#">1</a>
        </li>
        <li class="me-2">
          <a class="d-block text-white bg-dark btn-dark rounded-pill text-center fs-7" href="#">2</a>
        </li>
        <li>
          <a class="d-block pagination-next text-white bg-dark btn-dark rounded-pill text-center"
             href="#">
            <svg class="mb-2" width="10" height="8" viewBox="0 0 10 8" fill="none"
                 xmlns="http://www.w3.org/2000/svg">
              <path
                d="M1.27398 0L0.333984 0.94L3.38732 4L0.333984 7.06L1.27398 8L5.27398 4L1.27398 0Z"
                fill="white"/>
              <path
                d="M5.66656 0L4.72656 0.94L7.7799 4L4.72656 7.06L5.66656 8L9.66656 4L5.66656 0Z"
                fill="white"/>
            </svg>

          </a>
        </li>
      </ul>
    </div>
</template>

<script>
export default {
  name: 'LawyerBooked'
}
</script>
