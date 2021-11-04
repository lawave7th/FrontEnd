<template>
  <!-- 最新評價 -->
  <div class="new-evaluation mb-5">
    <div class="d-flex justify-content-between mb-3 align-items-end">
      <h3 class="text-secondary">最新評價</h3>
      <button type="button" class="btn btn-outline-secondary rounded-3 py-1 fs-7">查看更多評價  <svg
        width="6" height="8" viewBox="0 0 6 8" fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M1.66662 0L0.726624 0.94L3.77996 4L0.726624 7.06L1.66662 8L5.66662 4L1.66662 0Z"
          fill="black" />
      </svg>
      </button>
    </div>

    <div class="border border-primary rounded rounded-3 px-4 px-md-7 py-3 py-md-4" >
      <div class="row">
        <div class="col-12 col-md-3 d-flex justify-content-center d-md-block">
          <img class="rounded-pill mb-4 mt-md-0" src="../../assets/img/center/lawyer/evaluation-people.png" alt="評價民眾照片">
        </div>
        <div class="col-12 col-md-9 text-center text-md-start ">
          <p class="fs-7 mb-1 text-info">2021/10/03</p>
          <h3>Clara</h3>
          <div class="d-flex flex-column flex-md-row justify-content-between align-items-center mb-2">
            <Rating class="text-primary" :modelValue="5" :readonly="true" :stars="5" :cancel="false" />
            <ul class="lawyer-tags d-flex flex-wrap justify-content-center text-white">
              <li class="rounded-pill border border-1 bg-secondary me-2 py-1 fs-7 px-3">民事訴訟</li>
              <li class="rounded-pill border border-1 me-2 bg-secondary py-1 fs-7 px-3">刑事訴訟</li>
            </ul>
          </div>
          <p>目前已經是離婚狀態了，但是前夫並未照約定付撫養費，上網搜尋相關方式才發現法學電波的法律線上諮詢媒合律師的方式，嘗試預約媒合後，感謝律師的回覆，目前也委託律師解決問題中
          </p>
        </div>
      </div>
    </div>
  </div>

  <div class="recent-appointment">
    <h3 class="mb-3 text-secondary">近期預約</h3>

    <ul>
      <li
        class="row border border-primary flex-column flex-md-row m-0 justify-content-md-between rounded rounded-3 px-4 px-md-7 mb-4 py-3 align-items-md-center">
        <div class="col-12 col-md-3">
          <h4 class="mb-2 text-secondary">
            Tim Turner
          </h4>
          <p class="m-0">02/21 14:00-15:00</p>
        </div>
        <div class="col-12 col-md-6">
          <ul class="lawyer-tags d-flex flex-wrap justify-content-start">
          <li class="rounded-pill border fs-7 bg-secondary  text-white border-1 py-1 mb-1 me-2 px-2">車禍調解</li>
          <li class="rounded-pill border fs-7 bg-secondary  text-white border-1 py-1 mb-1 me-2 px-2">金錢糾紛</li>
          <li class="rounded-pill border fs-7 bg-secondary  text-white border-1 py-1 mb-1 me-2 px-2">其他</li>
        </ul>
          <p>自駕車經過十字路口，他車突然超車並阻擋行經路線造成我車撞上。</p>
        </div>
        <div class="col-12 col-md-3 d-flex justify-content-end justify-content-md-center">
          <button type="button" class="btn btn-secondary text-white">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19 4H17V13H4V15C4 15.55 4.45 16 5 16H16L20 20V5C20 4.45 19.55 4 19 4ZM15 10V1C15 0.45 14.55 0 14 0H1C0.45 0 0 0.45 0 1V15L4 11H14C14.55 11 15 10.55 15 10Z" fill="white"/>
          </svg>
            線上諮詢</button>
        </div>

      </li>
      <li
        class="row border border-primary flex-column flex-md-row m-0 justify-content-md-between rounded rounded-3 px-4 px-md-7 mb-4 py-3 align-items-md-center">
        <div class="col-12 col-md-3">
          <h4 class="mb-2 text-secondary">
            Tim Turner
          </h4>
          <p class="m-0">02/21 14:00-15:00</p>
        </div>
        <div class="col-12 col-md-6">
          <ul class="lawyer-tags d-flex flex-wrap justify-content-start">
            <li class="rounded-pill border fs-7 bg-secondary  text-white border-1 py-1 mb-1 me-2 px-2">車禍調解</li>
            <li class="rounded-pill border fs-7 bg-secondary  text-white border-1 py-1 mb-1 me-2 px-2">金錢糾紛</li>
            <li class="rounded-pill border fs-7 bg-secondary  text-white border-1 py-1 mb-1 me-2 px-2">其他</li>
          </ul>
          <p>自駕車經過十字路口，他車突然超車並阻擋行經路線造成我車撞上。</p>
        </div>
        <div class="col-12 col-md-3 d-flex justify-content-end justify-content-md-center">
          <button type="button" class="btn btn-outline-secondary">
            <span class="material-icons align-top">
circle_notifications
</span>
            預約提醒
          </button>
        </div>

      </li>
      <li
        class="row border border-primary flex-column flex-md-row m-0 justify-content-md-between rounded rounded-3 px-4 px-md-7 mb-4 py-3 align-items-md-center">
        <div class="col-12 col-md-3">
          <h4 class="mb-2 text-secondary">
            Tim Turner
          </h4>
          <p class="m-0">02/21 14:00-15:00</p>
        </div>
        <div class="col-12 col-md-6">
          <ul class="lawyer-tags d-flex flex-wrap justify-content-start">
            <li class="rounded-pill border fs-7 bg-secondary  text-white border-1 py-1 mb-1 me-2 px-2">車禍調解</li>
            <li class="rounded-pill border fs-7 bg-secondary  text-white border-1 py-1 mb-1 me-2 px-2">金錢糾紛</li>
            <li class="rounded-pill border fs-7 bg-secondary  text-white border-1 py-1 mb-1 me-2 px-2">其他</li>
          </ul>
          <p>自駕車經過十字路口，他車突然超車並阻擋行經路線造成我車撞上。</p>
        </div>
        <div class="col-12 col-md-3 d-flex justify-content-end justify-content-md-center">
          <button type="button" class="btn btn-outline-secondary">
           <span class="material-icons align-top">
circle_notifications
</span>
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
