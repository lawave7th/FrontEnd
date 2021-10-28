<template>
  <main>
    <div class="index-banner mb-md-7 pt-md-11" >
      <div class="container">
        <div class="row d-none d-md-flex justify-content-center ">
          <div
            class="col-8 col-lg-6 rounded-pill shadow-sm bg-white p-1 py-0  mt-md-4 mb-md-xxl "
          >
            <!-- banner 上下拉式選單 -->

              <div class="row">
                <div class="col-4 banner-select-area bg-primary py-4  rounded-pill ">
                  <select
                    class="border-0 text-secondary ps-2 pt-1 banner-select pe-8 select-area-position"
                  >
                    <option>地區</option>
                    <option>臺北市</option>
                    <option>新北市</option>
                    <option>桃園市</option>
                    <option>臺中市</option>
                    <option>臺南市</option>
                    <option>高雄市</option>
                    <option>基隆市</option>
                    <option>新竹市</option>
                    <option>嘉義市</option>
                    <option>新竹縣</option>
                    <option>苗栗縣</option>
                    <option>彰化縣</option>
                    <option>南投縣</option>
                    <option>雲林縣</option>
                    <option>嘉義縣</option>
                    <option>屏東縣</option>
                    <option>宜蘭縣</option>
                    <option>花蓮縣</option>
                    <option>臺東縣</option>
                    <option>澎湖縣</option>
                    <option>金門縣</option>
                    <option>連江縣</option>
                  </select>
                </div>
                <div class="col-5 banner-select-case col-lg-6 py-4">
                  <select class="border-0 text-secondary px-7 banner-select select-case-position">
                    <option>訴訟類型</option>
                    <option>民事訴訟</option>
                    <option>刑事訴訟</option>
                    <option>家事訴訟</option>
                    <option>勞資爭議</option>
                    <option>消費糾紛</option>
                  </select>
                </div>
                <div class="col-2">
                  <button
                    class="search-btn d-block ms-4 ms-lg-0 border-0 rounded-circle p-4 my-1 bg-secondary"
                    type="button"
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M17.1527 15.0943H16.0686L15.6844 14.7238C17.0292 13.1595 17.8388 11.1286 17.8388 8.91938C17.8388 3.99314 13.8456 0 8.91938 0C3.99314 0 0 3.99314 0 8.91938C0 13.8456 3.99314 17.8388 8.91938 17.8388C11.1286 17.8388 13.1595 17.0292 14.7238 15.6844L15.0943 16.0686V17.1527L21.9554 24L24 21.9554L17.1527 15.0943V15.0943ZM8.91938 15.0943C5.50257 15.0943 2.74443 12.3362 2.74443 8.91938C2.74443 5.50257 5.50257 2.74443 8.91938 2.74443C12.3362 2.74443 15.0943 5.50257 15.0943 8.91938C15.0943 12.3362 12.3362 15.0943 8.91938 15.0943Z"
                        fill="white"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

          <!-- banner下方按鈕區塊 -->
          <div class="text-center">
            <h2 class="fs-4 mb-4 text-white">
              最快速便利的律師媒合平台 <br> 找律師就來法學電波
            </h2>

            <button class="btn btn-primary rounded-pill py-4 text-white" type="button">
              立即前往與律師諮詢
            </button>
          </div>
        </div>
      </div>
    </div>
    <!-- 痛點區塊 -->
    <div class="container ">
      <div class="pain-points">
        <div class="row">
          <div class="col-md-6 offset-md-3 text-center mb-2">
            <h3 class="text-secondary">牽涉到法律糾紛，該怎麼辦？</h3>
            <div class="line bg-primary mb-3"></div>
            <p class="mb-md-7">
              生活中所見的一切事物，都跟法律有關係，與家人、朋友、職場甚至陌生人都可能會牽涉到法律糾紛，這些情境年是否也遇到過？或者正困擾著你？
            </p>
          </div>
        </div>
        <ul class="row">
          <li class="col-md-3 mb-md-6">
            <img
              class="rounded  mb-3"
              src="../assets/img/index-img/index-pain-point-1.png"
              alt="痛點區塊"
            />
            <p>被告了，需不需要請律師？</p>
          </li>
          <li class="col-md-3 mb-md-6">
            <img
              class="rounded  mb-3"
              src="../assets/img/index-img/index-pain-point-2.png"
              alt="痛點區塊"
            />
            <p>打官司一定要找律師處理嗎？</p>
          </li>
          <li class="col-md-3 mb-md-6">
            <img
              class="rounded  mb-3"
              src="../assets/img/index-img/index-pain-point-3.png"
              alt="痛點區塊"
            />
            <p>怎麼找契合的律師？能配合外縣市?</p>
          </li>
          <li class="col-md-3 mb-md-6">
            <img
              class="rounded  mb-3"
              src="../assets/img/index-img/index-pain-point-4.png"
              alt="痛點區塊"
            />
            <p>怎麼找契合的律師？能配合外縣市?</p>
          </li>
        </ul>
      </div>
    </div>
    <!-- 案件量介紹區塊 -->
    <div class="case-introduction-banner">
      <div class="container">
        <div class="row">
          <div class="col-md-6  offset-md-3 text-center mb-2 mt-md-7">
            <h3 class="text-secondary">法學電波與你一同面對法律糾紛</h3>
            <div class="line bg-primary mb-3"></div>
            <p class="mb-md-7">
              法學電波與全台各縣市律師合作，透過平台審核提供全面透明的律師資訊核實的經歷、辦案經驗及相關資料。讓你可以有效率的了解一個律師的專業能力，並透過線上諮詢對談的方式，與律師做初步媒合，幫助你找到最契合的律師。
            </p>
          </div>
        </div>
        <ul class="row text-center text-white mb-md-5 ">
          <li class="col-md-3 mb-md-5 ">
            <div class="introduce-card py-4 bg-secondary rounded">
              <h3>52</h3>
              <p>媒合的案件數</p>
            </div>
          </li>
          <li class="col-md-3 mb-md-5">
            <div class="introduce-card py-4 bg-secondary rounded">
              <h3>2000</h3>
              <p>線上諮詢總時數</p>
            </div>
          </li>
          <li class="col-md-3 mb-md-5">
            <div class="introduce-card py-4 bg-secondary rounded">
              <h3>34</h3>
              <p>會員回饋數量</p>
            </div>
          </li>
          <li class="col-md-3 mb-md-5">
            <div class="introduce-card py-4 bg-secondary rounded">
              <h3>47</h3>
              <p>合作律師人數</p>
            </div>
          </li>
        </ul>
        <!-- 情境照大圖 -->
        <div class="situational-photo mb-md-7"></div>

    </div>

      </div>
    <!--      電波零距離-->
    <div class="container">
      <div class="row ">
        <div
          class="col-md-6 text-center d-flex flex-column align-content-center justify-content-center"
        >
          <div>
            <h3 class="text-secondary">電波傳遞讓我跟法律零距離</h3>
            <div class="line bg-primary mb-3"></div>
            <p class="mb-md-5">
              從互利的角度切入創造羈絆的聯繫，透過線上平台帶來的便利性，陪伴遇見法律困境的人們，建立與律師溝通的橋樑，讓我們在這裡，沒有距離。
            </p>
          </div>
          <div>
            <h3 class="text-secondary">服務優勢</h3>
            <ul>
              <li>
                  <span class="material-icons text-primary"> check_circle </span
                  >&nbsp;&nbsp;可跨縣市律師媒合
              </li>
              <li>
                  <span class="material-icons text-primary"> check_circle </span
                  >&nbsp;&nbsp;把關律師資格審查
              </li>
              <li>
                  <span class="material-icons text-primary"> check_circle </span
                  >&nbsp;&nbsp;會員專屬諮詢系統
              </li>
              <li>
                  <span class="material-icons text-primary"> check_circle </span
                  >&nbsp;&nbsp;法律時事資訊補充
              </li>
            </ul>
          </div>
        </div>
        <div class="col-md-6 mb-md-7">
          <div class="rounded bg-secondary service-box"></div>
        </div>
      </div>
    </div>
<!--    熱門律師-->
    <div class="popular-lawyers">
      <div class="container">
        <h3 class="text-center mt-md-7 text-secondary">熱門律師</h3>
        <div class="line bg-primary mb-md-5"></div>
        <ul class="row text-center">
          <li class="col-md-3 mb-md-6">
           <img
              class="rounded mb-3"
              src="../assets/img/index-img/popular-lawyers-1.png"
              alt="熱門律師"
            />
            <h3>田田律師事務所</h3>
            <p>田田律師事務所</p>
          </li>
          <li class="col-md-3 mb-md-6">
            <img
              class="rounded mb-3"
              src="../assets/img/index-img/popular-lawyers-2.png"
              alt="熱門律師"
            />
            <h3>田田律師事務所</h3>
            <p>田田律師事務所</p>
          </li>
          <li class="col-md-3 mb-md-6">
            <img
              class="rounded mb-3"
              src="../assets/img/index-img/popular-lawyers-3.png"
              alt="熱門律師"
            />
            <h3>田田律師事務所</h3>
            <p>田田律師事務所</p>
          </li>
          <li class="col-md-3 mb-md-6">
            <img
              class="rounded mb-3"
              src="../assets/img/index-img/popular-lawyers-4.png"
              alt="熱門律師"
            />
            <h3>田田律師事務所</h3>
            <p>田田律師事務所</p>
          </li>
        </ul>
      </div>
    </div>
    <!-- 會員推薦區 -->
    <div class="member-praise mb-md-7 ">
      <div class="bg-primary-shallow">
        <div class="container">
          <h3 class="text-center text-secondary pt-md-7">會員好評推薦</h3>
          <div class="line bg-primary mb-md-2"></div>
          <!-- 輪播功能 -->
          <div
            id="carouselExampleControls"
            class="carousel slide d-flex justify-content-center"
            data-bs-ride="carousel"
          >
            <div class="carousel-inner praise-content mb-md-5">
              <div class="carousel-item active">
                <div class="p-4"></div>
                <div
                  class="text-dark py-md-7 px-md-5 position-relative  bg-white rounded"
                >
                  <div
                    class="rounded-pill
                                    member-photo position-absolute top-0 start-50 translate-middle"
                  ></div>
                  <p>
                    我在上班途中發生小碰撞車禍，還好雙方都沒受傷，但是車損的費用，對方的保險公司僅憑著初判表就要我負全責，還好有在法學電波上與律師線上諮詢，才知道應該要去申請車禍鑑定，並且後續按照責任比例處理協調雙方賠償都可接受的價格範圍。
                  </p>
                  <p class="text-end fs-4">
                    -- 李利敬
                  </p>
                </div>
              </div>
              <div class="carousel-item">
                <div class="p-4"></div>
                <div
                  class="text-dark py-md-7 px-md-5 position-relative  bg-white rounded"
                >
                  <div
                    class="rounded-pill
                                    member-photo position-absolute top-0 start-50 translate-middle"
                  ></div>
                  <p>
                    我在上班途中發生小碰撞車禍，還好雙方都沒受傷，但是車損的費用，對方的保險公司僅憑著初判表就要我負全責，還好有在法學電波上與律師線上諮詢，才知道應該要去申請車禍鑑定，並且後續按照責任比例處理協調雙方賠償都可接受的價格範圍。
                  </p>
                  <p class="text-end fs-4">
                    -- 李利敬
                  </p>
                </div>
              </div>
              <div class="carousel-item">
                <div class="p-4"></div>
                <div
                  class="text-dark py-md-7 px-md-5 position-relative  bg-white rounded"
                >
                  <div
                    class="rounded-pill
                                    member-photo position-absolute top-0 start-50 translate-middle"
                  ></div>
                  <p>
                    我在上班途中發生小碰撞車禍，還好雙方都沒受傷，但是車損的費用，對方的保險公司僅憑著初判表就要我負全責，還好有在法學電波上與律師線上諮詢，才知道應該要去申請車禍鑑定，並且後續按照責任比例處理協調雙方賠償都可接受的價格範圍。
                  </p>
                  <p class="text-end fs-4">
                    -- 李利敬
                  </p>
                </div>
              </div>
            </div>
            <button
              class="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleControls"
              data-bs-slide="prev"
            >
              <span aria-hidden="true"
              >
                <span class="material-icons text-secondary fs-1">arrow_circle_left</span>

              </span>

            </button>
            <button
              class="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleControls"
              data-bs-slide="next"
            >
              <span aria-hidden="true"
              >
                <span class="material-icons text-secondary fs-1">arrow_circle_right</span>

              </span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
    </div>
    <!-- 加入會員區塊 -->
    <div class="join-member mb-md-7 ">
      <div class="container">
        <div class="row ">
          <div class="col-md-6 offset-md-3 text-center mb-2">
            <h3 class="text-secondary">立即加入會員一解煩惱</h3>
            <div class="line bg-primary mb-3"></div>
            <p class="mb-md-7">
              生活中所見的一切事物，都跟法律有關係，與家人、朋友、職場甚至陌生人都可能會牽涉到法律糾紛，這些情境你是否也遇到過？或者正困擾著你？
            </p>
          </div>
        </div>
        <div
          class="row join-photo d-flex flex-column justify-content-md-center  "
        >
          <div class="col-md-3 offset-md-8">
            <button
              type="button"
              class="join-btn py-4 fw-bold btn btn-dark rounded-pill btn-lg me-md-9"
            >
              註冊成為會員
            </button>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
