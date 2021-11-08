<template>

  <!-- 可被預約頁面 -->
  <div class="appointment-time" >
    <div class="d-flex justify-content-between pb-2 border-bottom border-info mb-4">
      <h2 class="fs-4">設定可被預約時段表</h2>
      <!--      先不做有時間在做-->
      <!--      <button type="button" class="btn btn-secondary rounded-pill">-->
      <!--        <svg width="19" height="19" viewBox="0 0 19 19" fill="none"-->
      <!--             xmlns="http://www.w3.org/2000/svg">-->
      <!--          <path-->
      <!--            d="M0 15.2505V19.0005H3.75L14.81 7.94055L11.06 4.19055L0 15.2505ZM17.71 5.04055C18.1 4.65055 18.1 4.02055 17.71 3.63055L15.37 1.29055C14.98 0.900547 14.35 0.900547 13.96 1.29055L12.13 3.12055L15.88 6.87055L17.71 5.04055V5.04055Z"-->
      <!--            fill="black"/>-->
      <!--        </svg>-->
      <!--        編輯-->
      <!--      </button>-->
    </div>

    <div class="appointment-time-border rounded rounded-3 px-md-7 py-md-4 mb-md-7">
      <ul>
        <li class="mb-4">
          <h3 class="fs-2 border-bottom pb-3 mb-3 text-secondary">星期一</h3>
          <h4 class="fs-6">營業時段</h4>
          <div v-for="( item , index ) in timeData.mon" :key="index" class="d-flex align-items-center justify-content-between mb-3">
            <span class="m-0 d-none d-md-block">設定營業時段</span>
            <select v-model = "item.time" class="rounded select-icon border ps-1 pe-5  ps-md-3 pe-md-6 py-2">
              <option  value="未選擇">－－</option>
              <option  value="上午" >上午</option>
              <option  value="下午">下午</option>
            </select>
            <span class="m-0 d-none d-md-inline-block">開始</span>
            <span class="m-0 fs-7 d-inline-block d-md-none">起</span>
            <select v-if="item.time === '上午'" v-model = "item.startTime" class="rounded select-icon border ps-1 pe-5 ps-md-3 pe-md-8 py-2">
              <option value="9:00">9:00</option>
              <option value="10:00">10:00</option>
              <option value="11:00">11:00</option>
            </select>
            <select v-else v-model = "item.startTime" class="rounded select-icon border ps-1 pe-5 ps-md-3 pe-md-8 py-2">
              <option value="12:00">12:00</option>
              <option value="13:00">13:00</option>
              <option value="14:00">14:00</option>
              <option value="15:00">15:00</option>
              <option value="16:00">16:00</option>
              <option value="17:00">17:00</option>
              <option value="18:00">18:00</option>
              <option value="19:00">19:00</option>
              <option value="20:00">20:00</option>
            </select>
            <span class="m-0 d-none d-md-inline-block">結束</span>
            <span class="m-0 fs-7 d-inline-block d-md-none">止</span>
            <select v-if="item.time === '上午'" v-model = "item.endTime" class="rounded select-icon border ps-1 pe-5 ps-md-3 pe-md-8 py-2">
              <option value="10:00">10:00</option>
              <option value="11:00">11:00</option>
              <option value="12:00">12:00</option>
            </select>
            <select v-else v-model = "item.endTime" class="rounded select-icon border ps-md-3 ps-1 pe-5 pe-md-8 py-2">
              <option value="未選擇">－－</option>
              <option value="13:00">13:00</option>
              <option value="14:00">14:00</option>
              <option value="15:00">15:00</option>
              <option value="16:00">16:00</option>
              <option value="17:00">17:00</option>
              <option value="18:00">18:00</option>
              <option value="19:00">19:00</option>
              <option value="20:00">20:00</option>
              <option value="21:00">21:00</option>
            </select>
            <button type="button" class="border-0 bg-transparent">
              <span v-if="timeData.mon.length - (index+1) === 0 " class="material-icons text-secondary" @click.prevent="addTime('mon')">add_circle</span>
              <span  v-else class="material-icons text-secondary" @click.prevent="removeTime(index , 'mon')">remove_circle_outline</span>
            </button>
          </div>

        </li>
        <li class="mb-4">
          <h3 class="fs-2 border-bottom pb-3 mb-3 text-secondary">星期二</h3>
          <h4 class="fs-6">營業時段</h4>
          <div v-for="( item , index ) in timeData.tues" :key="index" class="d-flex align-items-center justify-content-between mb-3">
            <span class="m-0 d-none d-md-block">設定營業時段</span>
            <select v-model = "item.time" class="rounded select-icon border ps-1 pe-5  ps-md-3 pe-md-6 py-2">
              <option  value="未選擇">－－</option>
              <option  value="上午" >上午</option>
              <option  value="下午">下午</option>
            </select>
            <span class="m-0 d-none d-md-inline-block">開始</span>
            <span class="m-0 fs-7 d-inline-block d-md-none">起</span>
            <select v-if="item.time === '上午'" v-model = "item.startTime" class="rounded select-icon border ps-1 pe-5 ps-md-3 pe-md-8 py-2">
              <option value="9:00">9:00</option>
              <option value="10:00">10:00</option>
              <option value="11:00">11:00</option>
            </select>
            <select v-else v-model = "item.startTime" class="rounded select-icon border ps-1 pe-5 ps-md-3 pe-md-8 py-2">
              <option value="12:00">12:00</option>
              <option value="13:00">13:00</option>
              <option value="14:00">14:00</option>
              <option value="15:00">15:00</option>
              <option value="16:00">16:00</option>
              <option value="17:00">17:00</option>
              <option value="18:00">18:00</option>
              <option value="19:00">19:00</option>
              <option value="20:00">20:00</option>
            </select>
            <span class="m-0 d-none d-md-inline-block">結束</span>
            <span class="m-0 fs-7 d-inline-block d-md-none">止</span>
            <select v-if="item.time === '上午'" v-model = "item.endTime" class="rounded select-icon border ps-1 pe-5 ps-md-3 pe-md-8 py-2">
              <option value="10:00">10:00</option>
              <option value="11:00">11:00</option>
              <option value="12:00">12:00</option>
            </select>
            <select v-else v-model = "item.endTime" class="rounded select-icon border ps-md-3 ps-1 pe-5 pe-md-8 py-2">
              <option value="13:00">13:00</option>
              <option value="14:00">14:00</option>
              <option value="15:00">15:00</option>
              <option value="16:00">16:00</option>
              <option value="17:00">17:00</option>
              <option value="18:00">18:00</option>
              <option value="19:00">19:00</option>
              <option value="20:00">20:00</option>
              <option value="21:00">21:00</option>
            </select>
            <button type="button" class="border-0 bg-transparent">
              <span v-if="timeData.tues.length - (index+1) === 0 " class="material-icons text-secondary" @click.prevent="addTime('tues')">add_circle</span>
              <span  v-else class="material-icons text-secondary" @click.prevent="removeTime(index , 'tues')">remove_circle_outline</span>
            </button>
          </div>

        </li>
        <li class="mb-4">
          <h3 class="fs-2 border-bottom pb-3 mb-3 text-secondary">星期三</h3>
          <h4 class="fs-6">營業時段</h4>
          <div v-for="( item , index ) in timeData.wed" :key="index" class="d-flex align-items-center justify-content-between mb-3">
            <span class="m-0 d-none d-md-block">設定營業時段</span>
            <select v-model = "item.time" class="rounded select-icon border ps-1 pe-5  ps-md-3 pe-md-6 py-2">
              <option  value="上午" >上午</option>
              <option  value="下午">下午</option>
            </select>
            <span class="m-0 d-none d-md-inline-block">開始</span>
            <span class="m-0 fs-7 d-inline-block d-md-none">起</span>
            <select v-if="item.time === '上午'" v-model = "item.startTime" class="rounded select-icon border ps-1 pe-5 ps-md-3 pe-md-8 py-2">
              <option value="9:00">9:00</option>
              <option value="10:00">10:00</option>
              <option value="11:00">11:00</option>
            </select>
            <select v-else v-model = "item.startTime" class="rounded select-icon border ps-1 pe-5 ps-md-3 pe-md-8 py-2">
              <option value="12:00">12:00</option>
              <option value="13:00">13:00</option>
              <option value="14:00">14:00</option>
              <option value="15:00">15:00</option>
              <option value="16:00">16:00</option>
              <option value="17:00">17:00</option>
              <option value="18:00">18:00</option>
              <option value="19:00">19:00</option>
              <option value="20:00">20:00</option>
            </select>
            <span class="m-0 d-none d-md-inline-block">結束</span>
            <span class="m-0 fs-7 d-inline-block d-md-none">止</span>
            <select v-if="item.time === '上午'" v-model = "item.endTime" class="rounded select-icon border ps-1 pe-5 ps-md-3 pe-md-8 py-2">
              <option value="10:00">10:00</option>
              <option value="11:00">11:00</option>
              <option value="12:00">12:00</option>
            </select>
            <select v-else v-model = "item.endTime" class="rounded select-icon border ps-md-3 ps-1 pe-5 pe-md-8 py-2">
              <option value="未選擇">－－</option>
              <option value="13:00">13:00</option>
              <option value="14:00">14:00</option>
              <option value="15:00">15:00</option>
              <option value="16:00">16:00</option>
              <option value="17:00">17:00</option>
              <option value="18:00">18:00</option>
              <option value="19:00">19:00</option>
              <option value="20:00">20:00</option>
              <option value="21:00">21:00</option>
            </select>
            <button type="button" class="border-0 bg-transparent">
              <span v-if="timeData.wed.length - (index+1) === 0 " class="material-icons text-secondary" @click.prevent="addTime('wed')">add_circle</span>
              <span  v-else class="material-icons text-secondary" @click.prevent="removeTime(index , 'wed')">remove_circle_outline</span>
            </button>
          </div>

        </li>
        <li class="mb-4">
          <h3 class="fs-2 border-bottom pb-3 mb-3 text-secondary">星期四</h3>
          <h4 class="fs-6">營業時段</h4>
          <div v-for="( item , index ) in timeData.thur" :key="index" class="d-flex align-items-center justify-content-between mb-3">
            <span class="m-0 d-none d-md-block">設定營業時段</span>
            <select v-model = "item.time" class="rounded select-icon border ps-1 pe-5  ps-md-3 pe-md-6 py-2">
              <option  value="未選擇">－－</option>
              <option  value="上午" >上午</option>
              <option  value="下午">下午</option>
            </select>
            <span class="m-0 d-none d-md-inline-block">開始</span>
            <span class="m-0 fs-7 d-inline-block d-md-none">起</span>
            <select v-if="item.time === '上午'" v-model = "item.startTime" class="rounded select-icon border ps-1 pe-5 ps-md-3 pe-md-8 py-2">
              <option value="9:00">9:00</option>
              <option value="10:00">10:00</option>
              <option value="11:00">11:00</option>
            </select>
            <select v-else v-model = "item.startTime" class="rounded select-icon border ps-1 pe-5 ps-md-3 pe-md-8 py-2">
              <option value="12:00">12:00</option>
              <option value="13:00">13:00</option>
              <option value="14:00">14:00</option>
              <option value="15:00">15:00</option>
              <option value="16:00">16:00</option>
              <option value="17:00">17:00</option>
              <option value="18:00">18:00</option>
              <option value="19:00">19:00</option>
              <option value="20:00">20:00</option>
            </select>
            <span class="m-0 d-none d-md-inline-block">結束</span>
            <span class="m-0 fs-7 d-inline-block d-md-none">止</span>
            <select v-if="item.time === '上午'" v-model = "item.endTime" class="rounded select-icon border ps-1 pe-5 ps-md-3 pe-md-8 py-2">
              <option value="10:00">10:00</option>
              <option value="11:00">11:00</option>
              <option value="12:00">12:00</option>
            </select>
            <select v-else v-model = "item.endTime" class="rounded select-icon border ps-md-3 ps-1 pe-5 pe-md-8 py-2">
              <option value="未選擇">－－</option>
              <option value="13:00">13:00</option>
              <option value="14:00">14:00</option>
              <option value="15:00">15:00</option>
              <option value="16:00">16:00</option>
              <option value="17:00">17:00</option>
              <option value="18:00">18:00</option>
              <option value="19:00">19:00</option>
              <option value="20:00">20:00</option>
              <option value="21:00">21:00</option>
            </select>
            <button type="button" class="border-0 bg-transparent">
              <span v-if="timeData.thur.length - (index+1) === 0 " class="material-icons text-secondary" @click.prevent="addTime('thur')">add_circle</span>
              <span  v-else class="material-icons text-secondary" @click.prevent="removeTime(index , 'thur')">remove_circle_outline</span>
            </button>
          </div>

        </li>
        <li class="mb-4">
          <h3 class="fs-2 border-bottom pb-3 mb-3 text-secondary">星期五</h3>
          <h4 class="fs-6">營業時段</h4>
          <div v-for="( item , index ) in timeData.fri" :key="index" class="d-flex align-items-center justify-content-between mb-3">
            <span class="m-0 d-none d-md-block">設定營業時段</span>
            <select v-model = "item.time" class="rounded select-icon border ps-1 pe-5  ps-md-3 pe-md-6 py-2">
              <option  value="未選擇">－－</option>
              <option  value="上午" >上午</option>
              <option  value="下午">下午</option>
            </select>
            <span class="m-0 d-none d-md-inline-block">開始</span>
            <span class="m-0 fs-7 d-inline-block d-md-none">起</span>
            <select v-if="item.time === '上午'" v-model = "item.startTime" class="rounded select-icon border ps-1 pe-5 ps-md-3 pe-md-8 py-2">
              <option value="9:00">9:00</option>
              <option value="10:00">10:00</option>
              <option value="11:00">11:00</option>
            </select>
            <select v-else v-model = "item.startTime" class="rounded select-icon border ps-1 pe-5 ps-md-3 pe-md-8 py-2">
              <option value="12:00">12:00</option>
              <option value="13:00">13:00</option>
              <option value="14:00">14:00</option>
              <option value="15:00">15:00</option>
              <option value="16:00">16:00</option>
              <option value="17:00">17:00</option>
              <option value="18:00">18:00</option>
              <option value="19:00">19:00</option>
              <option value="20:00">20:00</option>
            </select>
            <span class="m-0 d-none d-md-inline-block">結束</span>
            <span class="m-0 fs-7 d-inline-block d-md-none">止</span>
            <select v-if="item.time === '上午'" v-model = "item.endTime" class="rounded select-icon border ps-1 pe-5 ps-md-3 pe-md-8 py-2">
              <option value="10:00">10:00</option>
              <option value="11:00">11:00</option>
              <option value="12:00">12:00</option>
            </select>
            <select v-else v-model = "item.endTime" class="rounded select-icon border ps-md-3 ps-1 pe-5 pe-md-8 py-2">
              <option value="未選擇">－－</option>
              <option value="13:00">13:00</option>
              <option value="14:00">14:00</option>
              <option value="15:00">15:00</option>
              <option value="16:00">16:00</option>
              <option value="17:00">17:00</option>
              <option value="18:00">18:00</option>
              <option value="19:00">19:00</option>
              <option value="20:00">20:00</option>
              <option value="21:00">21:00</option>
            </select>
            <button type="button" class="border-0 bg-transparent">
              <span v-if="timeData.fri.length - (index+1) === 0 " class="material-icons text-secondary" @click.prevent="addTime('fri')">add_circle</span>
              <span  v-else class="material-icons text-secondary" @click.prevent="removeTime(index , 'fri')">remove_circle_outline</span>
            </button>
          </div>

        </li>
        <li class="mb-4">
          <h3 class="fs-2 border-bottom pb-3 mb-3 text-secondary">星期六</h3>
          <h4 class="fs-6">營業時段</h4>
          <div v-for="( item , index ) in timeData.sat" :key="index" class="d-flex align-items-center justify-content-between mb-3">
            <span class="m-0 d-none d-md-block">設定營業時段</span>
            <select v-model = "item.time" class="rounded select-icon border ps-1 pe-5  ps-md-3 pe-md-6 py-2">
              <option  value="未選擇">－－</option>
              <option  value="上午" >上午</option>
              <option  value="下午">下午</option>
            </select>
            <span class="m-0 d-none d-md-inline-block">開始</span>
            <span class="m-0 fs-7 d-inline-block d-md-none">起</span>
            <select v-if="item.time === '上午'" v-model = "item.startTime" class="rounded select-icon border ps-1 pe-5 ps-md-3 pe-md-8 py-2">
              <option value="9:00">9:00</option>
              <option value="10:00">10:00</option>
              <option value="11:00">11:00</option>
            </select>
            <select v-else v-model = "item.startTime" class="rounded select-icon border ps-1 pe-5 ps-md-3 pe-md-8 py-2">
              <option value="12:00">12:00</option>
              <option value="13:00">13:00</option>
              <option value="14:00">14:00</option>
              <option value="15:00">15:00</option>
              <option value="16:00">16:00</option>
              <option value="17:00">17:00</option>
              <option value="18:00">18:00</option>
              <option value="19:00">19:00</option>
              <option value="20:00">20:00</option>
            </select>
            <span class="m-0 d-none d-md-inline-block">結束</span>
            <span class="m-0 fs-7 d-inline-block d-md-none">止</span>
            <select v-if="item.time === '上午'" v-model = "item.endTime" class="rounded select-icon border ps-1 pe-5 ps-md-3 pe-md-8 py-2">
              <option value="10:00">10:00</option>
              <option value="11:00">11:00</option>
              <option value="12:00">12:00</option>
            </select>
            <select v-else v-model = "item.endTime" class="rounded select-icon border ps-md-3 ps-1 pe-5 pe-md-8 py-2">
              <option value="未選擇">－－</option>
              <option value="13:00">13:00</option>
              <option value="14:00">14:00</option>
              <option value="15:00">15:00</option>
              <option value="16:00">16:00</option>
              <option value="17:00">17:00</option>
              <option value="18:00">18:00</option>
              <option value="19:00">19:00</option>
              <option value="20:00">20:00</option>
              <option value="21:00">21:00</option>
            </select>
            <button type="button" class="border-0 bg-transparent">
              <span v-if="timeData.sat.length - (index+1) === 0 " class="material-icons text-secondary" @click.prevent="addTime('sat')">add_circle</span>
              <span  v-else class="material-icons text-secondary" @click.prevent="removeTime(index , 'sat')">remove_circle_outline</span>
            </button>
          </div>

        </li>
        <li class="mb-4">
          <h3 class="fs-2 border-bottom pb-3 mb-3 text-secondary">星期日</h3>
          <h4 class="fs-6">營業時段</h4>
          <div v-for="( item , index ) in timeData.sun" :key="index" class="d-flex align-items-center justify-content-between mb-3">
            <span class="m-0 d-none d-md-block">設定營業時段</span>
            <select v-model = "item.time" class="rounded select-icon border ps-1 pe-5  ps-md-3 pe-md-6 py-2">
              <option  value="未選擇">－－</option>
              <option  value="上午" >上午</option>
              <option  value="下午">下午</option>
            </select>
            <span class="m-0 d-none d-md-inline-block">開始</span>
            <span class="m-0 fs-7 d-inline-block d-md-none">起</span>
            <select v-if="item.time === '上午'" v-model = "item.startTime" class="rounded select-icon border ps-1 pe-5 ps-md-3 pe-md-8 py-2">
              <option value="9:00">9:00</option>
              <option value="10:00">10:00</option>
              <option value="11:00">11:00</option>
            </select>
            <select v-else v-model = "item.startTime" class="rounded select-icon border ps-1 pe-5 ps-md-3 pe-md-8 py-2">
              <option value="12:00">12:00</option>
              <option value="13:00">13:00</option>
              <option value="14:00">14:00</option>
              <option value="15:00">15:00</option>
              <option value="16:00">16:00</option>
              <option value="17:00">17:00</option>
              <option value="18:00">18:00</option>
              <option value="19:00">19:00</option>
              <option value="20:00">20:00</option>
            </select>
            <span class="m-0 d-none d-md-inline-block">結束</span>
            <span class="m-0 fs-7 d-inline-block d-md-none">止</span>
            <select v-if="item.time === '上午'" v-model = "item.endTime" class="rounded select-icon border ps-1 pe-5 ps-md-3 pe-md-8 py-2">
              <option value="10:00">10:00</option>
              <option value="11:00">11:00</option>
              <option value="12:00">12:00</option>
            </select>
            <select v-else v-model = "item.endTime" class="rounded select-icon border ps-md-3 ps-1 pe-5 pe-md-8 py-2">
              <option value="未選擇">－－</option>
              <option value="13:00">13:00</option>
              <option value="14:00">14:00</option>
              <option value="15:00">15:00</option>
              <option value="16:00">16:00</option>
              <option value="17:00">17:00</option>
              <option value="18:00">18:00</option>
              <option value="19:00">19:00</option>
              <option value="20:00">20:00</option>
              <option value="21:00">21:00</option>
            </select>
            <button type="button" class="border-0 bg-transparent">
              <span v-if="timeData.sun.length - (index+1) === 0 " class="material-icons text-secondary" @click.prevent="addTime('sun')">add_circle</span>
              <span  v-else class="material-icons text-secondary" @click.prevent="removeTime(index , 'sun')">remove_circle_outline</span>
            </button>
          </div>

        </li>
        <li class="d-flex justify-content-end mb-11 mb-md-0">
          <button type="button" @click="reservationSet" class="btn-secondary rounded btn-secondary py-2 px-3 py-md-3 px-md-6">
            新增此時段
          </button>
        </li>
      </ul>
    </div>

    <div class="border d-none rounded rounded-3 px-md-3 py-md-4 mb-md-7">
      <table class="table table-bordered">
        <thead>
        <tr class="border-top-0">
          <th class="fs-4  border-0" scope="col"></th>
          <th class="fs-4 bg-warning" scope="col">星期日</th>
          <th class="fs-4 bg-warning" scope="col">星期一</th>
          <th class="fs-4 bg-warning" scope="col">星期二</th>
          <th class="fs-4 bg-warning" scope="col">星期三</th>
          <th class="fs-4 bg-warning" scope="col">星期四</th>
          <th class="fs-4 bg-warning" scope="col">星期五</th>
          <th class="fs-4 bg-warning" scope="col">星期六</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <th class="border-0" scope="row">09 AM</th>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <th class="border-0" scope="row">10 AM</th>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <th class="border-0" scope="row">11 AM</th>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <th class="border-0" scope="row">12 AM</th>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <th class="border-0" scope="row">13 PM</th>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <th class="border-0" scope="row">14 PM</th>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <th class="border-0" scope="row">15 PM</th>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <th class="border-0" scope="row">16 PM</th>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <th class="border-0" scope="row">17 PM</th>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <th class="border-0" scope="row">18 PM</th>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <th class="border-0" scope="row">19 PM</th>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <th class="border-0" scope="row">20 PM</th>
          <td></td>
          <td class="bg-success">可預約時段</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import { getLawyerReservationSet, lawyerReservationSet } from '@/util/api'

export default {
  data () {
    return {
      timeData: {},
      addTimeData: []
    }
  },
  created () {
    this.getLawyerReservationSet()
  },
  methods: {
    getLawyerReservationSet () {
      getLawyerReservationSet()
        .then((res) => {
          console.log(res)
          this.timeData = res.data
        })
        .catch((error) => {
          console.error(error)
        })
    },
    addTime (day) {
      this.timeData[day].push({
        startTime: '',
        endTime: ''
      })
    },
    removeTime (index, day) {
      this.timeData[day].splice(index, 1)
    },
    reservationSet () {
      console.log(this.timeData)
      lawyerReservationSet(this.timeData)
        .then((res) => {
          console.log(res)
        })
        .catch((error) => {
          console.error(error)
        })
    }
  }
}
</script>
