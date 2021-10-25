<template>
  <!-- 最新評價 -->
  <div class="new-evaluation mb-5">
    <div class="d-flex justify-content-between mb-3 align-items-end">
      <h3>最新評價</h3>
      <button type="button" class="btn btn-outline-dark rounded-3 py-1 fs-7">查看更多評價  <svg
        width="6" height="8" viewBox="0 0 6 8" fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M1.66662 0L0.726624 0.94L3.77996 4L0.726624 7.06L1.66662 8L5.66662 4L1.66662 0Z"
          fill="black" />
      </svg>
      </button>
    </div>

    <div class="border rounded rounded-3 px-md-7 py-md-4">
      <div class="row">
        <div class="col-3">
          <img class="rounded-pill" src="https://fakeimg.pl/166x166/" alt="">
        </div>
        <div class="col-9">
          <p class="fs-7 mb-1">2021/10/03</p>
          <h3>Clara</h3>
          <div class="d-flex justify-content-between align-items-center mb-2">
            <Rating class="text-warning" :modelValue="5" :readonly="true" :stars="5" :cancel="false" />
            <ul class="lawyer-tags d-flex flex-wrap justify-content-center">
              <li class="rounded-pill border border-1 me-2 py-1 px-3">民事訴訟</li>
              <li class="rounded-pill border border-1 me-2 py-1 px-3">刑事訴訟</li>
            </ul>
          </div>
          <p>目前已經是離婚狀態了，但是前夫並未照約定付撫養費，上網搜尋相關方式才發現法學電波的法律線上諮詢媒合律師的方式，嘗試預約媒合後，感謝律師的回覆，目前也委託律師解決問題中
          </p>
        </div>
      </div>
    </div>
  </div>

  <div class="recent-appointment">
    <h3 class="mb-3">近期預約</h3>

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
          <li class="rounded-pill border fs-7 bg-secondary  text-white border-1 py-1 mb-1 me-2 px-2">車禍調解</li>
          <li class="rounded-pill border fs-7 bg-secondary  text-white border-1 py-1 mb-1 me-2 px-2">金錢糾紛</li>
          <li class="rounded-pill border fs-7 bg-secondary  text-white border-1 py-1 mb-1 me-2 px-2">其他</li>
        </ul>
          <p>自駕車經過十字路口，他車突然超車並阻擋行經路線造成我車撞上。</p>
        </div>
        <div class="col-3 d-flex">
          <button type="button" class="btn btn-dark"><svg width="24" height="24"
                                                          viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M21 6H19V15H6V17C6 17.55 6.45 18 7 18H18L22 22V7C22 6.45 21.55 6 21 6ZM17 12V3C17 2.45 16.55 2 16 2H3C2.45 2 2 2.45 2 3V17L6 13H16C16.55 13 17 12.55 17 12Z"
              fill="white" />
          </svg>
            線上諮詢</button>
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
            <li class="rounded-pill border fs-7 bg-secondary  text-white border-1 py-1 mb-1 me-2 px-2">車禍調解</li>
            <li class="rounded-pill border fs-7 bg-secondary  text-white border-1 py-1 mb-1 me-2 px-2">金錢糾紛</li>
            <li class="rounded-pill border fs-7 bg-secondary  text-white border-1 py-1 mb-1 me-2 px-2">其他</li>
          </ul>
          <p>自駕車經過十字路口，他車突然超車並阻擋行經路線造成我車撞上。</p>
        </div>
        <div class="col-3 d-flex">
          <button type="button" class="btn btn-outline-dark">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                 xmlns="http://www.w3.org/2000/svg">
              <path
                d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 18.5C11.17 18.5 10.5 17.83 10.5 17H13.5C13.5 17.83 12.83 18.5 12 18.5ZM17 16H7V15L8 14V11.39C8 9.27 9.03 7.47 11 7V6.5C11 5.93 11.43 5.5 12 5.5C12.57 5.5 13 5.93 13 6.5V7C14.97 7.47 16 9.28 16 11.39V14L17 15V16Z"
                fill="black" />
            </svg>

            預約提醒
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
            <li class="rounded-pill border fs-7 bg-secondary  text-white border-1 py-1 mb-1 me-2 px-2">車禍調解</li>
            <li class="rounded-pill border fs-7 bg-secondary  text-white border-1 py-1 mb-1 me-2 px-2">金錢糾紛</li>
            <li class="rounded-pill border fs-7 bg-secondary  text-white border-1 py-1 mb-1 me-2 px-2">其他</li>
          </ul>
          <p>自駕車經過十字路口，他車突然超車並阻擋行經路線造成我車撞上。</p>
        </div>
        <div class="col-3 d-flex">
          <button type="button" class="btn btn-outline-dark">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                 xmlns="http://www.w3.org/2000/svg">
              <path
                d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 18.5C11.17 18.5 10.5 17.83 10.5 17H13.5C13.5 17.83 12.83 18.5 12 18.5ZM17 16H7V15L8 14V11.39C8 9.27 9.03 7.47 11 7V6.5C11 5.93 11.43 5.5 12 5.5C12.57 5.5 13 5.93 13 6.5V7C14.97 7.47 16 9.28 16 11.39V14L17 15V16Z"
                fill="black" />
            </svg>

            預約提醒
          </button>
        </div>

      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'LawyerHome.vue'
}
</script>
