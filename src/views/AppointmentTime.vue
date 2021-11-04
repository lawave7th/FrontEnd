<template>
  <main>
    <div class="container pt-md-7 pb-md-11">
      <h2>立即預約律師可諮詢時段</h2>
      <p class="mb-5 fs-7">View now consultation time</p>
      <div class="row">
        <div class="col-md-4">
          <div class="border shadow-sm rounded rounded-3  py-4 px-6">
            <form>
              <h3 class="fs-4 mb-3">選擇初次免費諮詢時段</h3>
              <div class="col-12 ">
                <div class="row align-items-center ">
                  <!-- 日期 -->
                  <div class="col-12 mb-3">
                    <label for="date-start" class="form-label">選擇日期</label>
                    <select id="date-start" class="form-select" aria-label="default-select">
                      <option selected>mm/dd/yyyy</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>

                  </div>
                  <!-- 時段 -->
                  <div class="col-12 mb-3">
                    <p class="mb-3">選擇時段 <span class="fs-7">(初次預約以 1hr 為上限）</span> </p>
                    <div class="row mb-3">
                      <div class="col-7 d-flex align-items-center justify-content-between">
                        <label for="timeStart" class="me-3">起</label>
                        <input type="text" placeholder="10:00 AM" class="form-control"
                               id="timeStart">
                      </div>
                      <div class="col-5 d-flex align-items-center justify-content-between">
                        <p class="m-0">止 </p>
                        <p class="m-0">11:00 AM</p>
                      </div>
                    </div>
                  </div>
                  <!-- 諮詢日期 -->
                  <div class="col-12">
                    <p class="mb-3">諮詢類別<span class="fs-7">(最多選取三個)</span></p>
                    <ul class="row mb-2">
                      <li class="col-auto mb-2">
                        <input class="form-check-input" type="checkbox" value="婚姻諮詢"
                               id="carAccident">
                        <label class="form-check-label fs-7" for="carAccident">
                          婚姻諮詢
                        </label>
                      </li>
                      <li class="col-auto mb-2">
                        <input class="form-check-input" type="checkbox" value="土地糾紛"
                               id="personalDisputes">
                        <label class="form-check-label fs-7" for="personalDisputes">
                          土地糾紛
                        </label>
                      </li>
                      <li class="col-auto mb-2">
                        <input class="form-check-input" type="checkbox" value="車禍調解"
                               id="landDispute">
                        <label class="form-check-label fs-7" for="landDispute">
                          車禍調解
                        </label>
                      </li>
                      <li class="col-auto">
                        <input class="form-check-input" type="checkbox" value="勞資糾紛"
                               id="laborDispute">
                        <label class="form-check-label fs-7" for="laborDispute">
                          勞資糾紛
                        </label>
                      </li>
                      <li class="col-auto">
                        <input class="form-check-input" type="checkbox" value="金錢糾紛"
                               id="civilDispute">
                        <label class="form-check-label fs-7" for="civilDispute">
                          金錢糾紛
                        </label>
                      </li>
                      <li class="col-auto">
                        <input class="form-check-input" type="checkbox" value="其它"
                               id="criminalDispute">
                        <label class="form-check-label fs-7" for="criminalDispute">
                          其它
                        </label>
                      </li>
                    </ul>
                  </div>
                  <div class="col-12 mb-3">
                    <label for="caseDescription" class="form-label">案件簡述</label>
                    <input type="text" class="form-control" placeholder="一句話簡述案件情形"
                           id="caseDescription">
                  </div>

                  <!-- 送出預約按鈕 -->
                  <div class="col-12">
                    <div class="d-grid gap-2">
                      <button class="btn btn-dark py-２" type="button" data-bs-toggle="modal"
                              data-bs-target="#appointment">
                        送出預約
                      </button>
                    </div>
                  </div>
                  <!-- Modal -->
                  <div class="modal fade" id="appointment" tabindex="-1"
                       aria-labelledby="appointmentLabel" aria-hidden="true">
                    <div class="modal-dialog">
                      <div class="modal-content">
                        <div class="position-relative">
                          <button type="button"
                                  class="m-3 btn  fs-4 position-absolute top-0 end-0"
                                  data-bs-dismiss="modal" aria-label="Close"><svg width="14"
                                                                                  height="14" viewBox="0 0 14 14" fill="none"
                                                                                  xmlns="http://www.w3.org/2000/svg">
                            <path
                              d="M14 1.41L12.59 0L7 5.59L1.41 0L0 1.41L5.59 7L0 12.59L1.41 14L7 8.41L12.59 14L14 12.59L8.41 7L14 1.41Z"
                              fill="black" />
                          </svg>
                          </button>
                          <h2 class="modal-title text-center mt-3 mt-md-7 mb-2"
                              id="welcomeModalLabel">預約資料已送出</h2>
                          <div class="line bg-dark mb-3"></div>
                        </div>
                        <div class="modal-body">
                          <div class="row ">
                            <div class="col-md-8 offset-md-2 text-center">

                              <svg width="64" height="64" viewBox="0 0 64 64" fill="none"
                                   xmlns="http://www.w3.org/2000/svg">
                                <path
                                  d="M32.0002 5.3335C17.2802 5.3335 5.3335 17.2802 5.3335 32.0002C5.3335 46.7202 17.2802 58.6668 32.0002 58.6668C46.7202 58.6668 58.6668 46.7202 58.6668 32.0002C58.6668 17.2802 46.7202 5.3335 32.0002 5.3335ZM26.6668 45.3335L13.3335 32.0002L17.0935 28.2402L26.6668 37.7868L46.9068 17.5468L50.6668 21.3335L26.6668 45.3335Z"
                                  fill="black" />
                              </svg>

                              <h3 class="fs-4">感謝使用法學電波線上諮詢功能</h3>
                              <p>已送出您的預約申請，待律師審核通過後將以信件寄送預約成功通知您，近期請留意通知</p>
                              <div class="d-grid gap-2 mb-md-7 mb-5">
                                <button type="button" class="btn btn-dark">繼續</button>
                              </div>
                            </div>

                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>

        </div>
        <div class="col-md-8">
          <div class="border shadow-sm rounded rounded-3 py-4 px-6">
            <div class="d-flex justify-content-between">
              <div>
                <p class="text-left">恆采律師事務所</p>
                <h3 class="text-left mb-md-4">邱彩恆</h3>
                <div class="line ms-0 bg-dark mb-md-2"></div>

              </div>
              <div>
                <p class="fs-7 m-0">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                       xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M7.99992 1.33301C4.31992 1.33301 1.33325 4.31967 1.33325 7.99967C1.33325 11.6797 4.31992 14.6663 7.99992 14.6663C11.6799 14.6663 14.6666 11.6797 14.6666 7.99967C14.6666 4.31967 11.6799 1.33301 7.99992 1.33301ZM8.93992 12.0597V13.333H7.15992V12.0463C6.01992 11.8063 5.05325 11.073 4.97992 9.77967H6.28659C6.35325 10.4797 6.83325 11.0263 8.05325 11.0263C9.35992 11.0263 9.65325 10.373 9.65325 9.96634C9.65325 9.41301 9.35992 8.89301 7.87325 8.53967C6.21992 8.13968 5.08659 7.45967 5.08659 6.09301C5.08659 4.94634 6.01325 4.19967 7.15992 3.95301V2.66634H8.93992V3.96634C10.1799 4.26634 10.7999 5.20634 10.8399 6.22634H9.53325C9.49992 5.48634 9.10659 4.97967 8.05325 4.97967C7.05325 4.97967 6.45325 5.43301 6.45325 6.07301C6.45325 6.63301 6.88659 6.99967 8.23325 7.34634C9.57992 7.69301 11.0199 8.27301 11.0199 9.95301C11.0133 11.173 10.0999 11.8397 8.93992 12.0597Z"
                      fill="black" fill-opacity="0.78" />
                  </svg>
                  現場諮詢：3000元/小時
                </p>
                <p class="fs-7">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                       xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M7.99992 1.33301C4.31992 1.33301 1.33325 4.31967 1.33325 7.99967C1.33325 11.6797 4.31992 14.6663 7.99992 14.6663C11.6799 14.6663 14.6666 11.6797 14.6666 7.99967C14.6666 4.31967 11.6799 1.33301 7.99992 1.33301ZM8.93992 12.0597V13.333H7.15992V12.0463C6.01992 11.8063 5.05325 11.073 4.97992 9.77967H6.28659C6.35325 10.4797 6.83325 11.0263 8.05325 11.0263C9.35992 11.0263 9.65325 10.373 9.65325 9.96634C9.65325 9.41301 9.35992 8.89301 7.87325 8.53967C6.21992 8.13968 5.08659 7.45967 5.08659 6.09301C5.08659 4.94634 6.01325 4.19967 7.15992 3.95301V2.66634H8.93992V3.96634C10.1799 4.26634 10.7999 5.20634 10.8399 6.22634H9.53325C9.49992 5.48634 9.10659 4.97967 8.05325 4.97967C7.05325 4.97967 6.45325 5.43301 6.45325 6.07301C6.45325 6.63301 6.88659 6.99967 8.23325 7.34634C9.57992 7.69301 11.0199 8.27301 11.0199 9.95301C11.0133 11.173 10.0999 11.8397 8.93992 12.0597Z"
                      fill="black" fill-opacity="0.78" />
                  </svg>
                  電話諮詢：3000元/小時
                </p>
              </div>
            </div>
            <p class="fs-7 mb-md-4">法學電波提供初次免費線上媒合諮詢服務，後續詳談辦法與收費方式，請洽律師個人提供</p>

            <!-- 選取時間線先用 ul 寫死的 用 +active 改 li 顏色 -->
            <h3 class="border-bottom border-2 mb-md-4">當日可預約時段</h3>
            <!-- 按鈕選取 -->
            <ul class="d-flex  flex-wrap justify-content-between align-items-center">
              <li class="btn-group-vertical mb-4">
                <button type="button" class="btn  btn-secondary rounded-top-3 py-2 px-6">10/10</button>
                <button type="button" class="btn btn-light rounded-bottom-3">不開放</button>
              </li>
              <li class="btn-group-vertical mb-4">
                <button type="button" class="btn  btn-secondary rounded-top-3 py-2 px-6">10/10</button>
                <button type="button" class="btn btn-light rounded-bottom-3">不開放</button>
              </li>
              <li class="btn-group-vertical mb-4">
                <button type="button" class="btn  btn-secondary rounded-top-3 py-2 px-6">10/10</button>
                <button type="button" class="btn btn-light rounded-bottom-3">不開放</button>
              </li>
              <li class="btn-group-vertical mb-4">
                <button type="button" class="btn  btn-secondary rounded-top-3 py-2 px-6">10/10</button>
                <button type="button" class="btn btn-light rounded-bottom-3">不開放</button>
              </li>
              <li class="btn-group-vertical mb-4">
                <button type="button" class="btn  btn-secondary rounded-top-3 py-2 px-6">10/10</button>
                <button type="button" class="btn btn-light rounded-bottom-3">不開放</button>
              </li>
              <li class="btn-group-vertical mb-4">
                <button type="button" class="btn  btn-secondary rounded-top-3 py-2 px-6">10/10</button>
                <button type="button" class="btn btn-light rounded-bottom-3">不開放</button>
              </li>
              <li class="btn-group-vertical mb-4">
                <button type="button" class="btn  btn-secondary rounded-top-3 py-2 px-6">10/10</button>
                <button type="button" class="btn btn-light rounded-bottom-3">不開放</button>
              </li>
              <li class="btn-group-vertical mb-4">
                <button type="button" class="btn  btn-secondary rounded-top-3 py-2 px-6">10/10</button>
                <button type="button" class="btn btn-light rounded-bottom-3">不開放</button>
              </li>
              <li class="btn-group-vertical mb-4">
                <button type="button" class="btn  btn-secondary rounded-top-3 py-2 px-6">10/10</button>
                <button type="button" class="btn btn-light rounded-bottom-3">不開放</button>
              </li>
              <li class=" mb-4">
                <button type="button" class="btn btn-dark rounded rounded-3 px-5 py-4">
                  <svg width="32" height="9" viewBox="0 0 32 9" fill="none"
                       xmlns="http://www.w3.org/2000/svg">
                    <circle cx="4" cy="4.5" r="4" fill="white" />
                    <circle cx="16" cy="4.5" r="4" fill="white" fill-opacity="0.8" />
                    <circle cx="28" cy="4.5" r="4" fill="white" fill-opacity="0.6" />
                  </svg>
                </button>

              </li>
            </ul>
            <p>待律師審核諮詢預約時段，預約成功將以會員註冊信箱進行通知，近期勞煩留意信箱信息。</p>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: 'AppointmentTime'
}
</script>
