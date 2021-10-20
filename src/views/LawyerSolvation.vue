<template>
  <main>
    <div class="container-fluid g-0  ">
      <div class="banner pt-md-11 mb-md-7">
        <div class="container">
          <div class="row d-none d-md-flex justify-content-center">
            <div
              class="col-8 col-lg-6 rounded-pill shadow-sm bg-white p-1  mt-md-4 mb-md-xxl"
            >
              <!-- banner 上下拉式選單 -->
              <div class="banner-select">
                <div class="row">
                  <div class="col-4 banner-select-area">
                    <select
                      class=" border-0 bg-secondary py-3 fs-2 rounded-pill px-4"
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
                  <div class="col-5 banner-select-case col-lg-6">
                    <select class=" border-0 py-3 fs-2 pe-5">
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
                      class="search-btn d-block ms-4 ms-lg-0 border-0 rounded-circle p-4 mt-1"
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
            </div>
        </div>

      </div>
    </div>
    </div>
    <!-- 媒合痛點 -->
    <div class="container">
      <div class="row">
        <div class="col-md-6  offset-md-3 text-center mb-2">
          <h3>與律師媒合的小眉角</h3>
          <div class="line bg-dark mb-3"></div>
          <p class="mb-md-7">
            別人推薦厲害的律師不一定真的「適合」你的情況。 我們整理出在找律師時，要把握的3大重點，協助您順利、快速媒合到合適您的好律師！
          </p>
        </div>
      </div>
      <ul class="row mb-md-7 justify-content-between">
        <li class="col-md-4 row">
          <div class="col-6 ">
            <img class="img-fluid rounded " src="https://fakeimg.pl/166x166/" alt="">
          </div>
          <div class="col-6 g-0">
            <h3 class="fs-4">是否有律師資格</h3>
            <p>建議先確認律師身份，可透過法務部的律師查詢系統。在法學電波上面的律師，都是經過認證資格審核有律師資格</p>
          </div>
        </li>
        <li class="col-md-4 row ">
          <div class="col-6">
            <img class="img-fluid rounded  " src="https://fakeimg.pl/166x166/" alt="">
          </div>
          <div class="col-6 g-0">
            <h3 class="fs-4">是否有律師資格</h3>
            <p>建議先確認律師身份，可透過法務部的律師查詢系統。在法學電波上面的律師，都是經過認證資格審核有律師資格</p>
          </div>
        </li>
        <li class="col-md-4 row ">
          <div class="col-6">
            <img class="img-fluid rounded " src="https://fakeimg.pl/166x166/" alt="">
          </div>
          <div class="col-6 g-0">
            <h3 class="fs-4">是否有律師資格</h3>
            <p>建議先確認律師身份，可透過法務部的律師查詢系統。在法學電波上面的律師，都是經過認證資格審核有律師資格</p>
          </div>
        </li>
      </ul>
    </div>
    <!-- 律師卡片區塊 -->
    <div class="container py-md-7">
      <ul class="row   row-cols-1 row-cols-md-3 justify-content-center justify-content-md-between">
        <!-- 卡片內容 -->
        <li
          class="col d-flex  flex-column align-items-center lawyer-card py-md-5 mb-md-4 rounded border border-1  position-relative">
          <a href="#" class="position-absolute top-0 end-0 m-4">
            <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M14.5 0C12.76 0 11.09 0.81 10 2.09C8.91 0.81 7.24 0 5.5 0C2.42 0 0 2.42 0 5.5C0 9.28 3.4 12.36 8.55 17.04L10 18.35L11.45 17.03C16.6 12.36 20 9.28 20 5.5C20 2.42 17.58 0 14.5 0ZM10.1 15.55L10 15.65L9.9 15.55C5.14 11.24 2 8.39 2 5.5C2 3.5 3.5 2 5.5 2C7.04 2 8.54 2.99 9.07 4.36H10.94C11.46 2.99 12.96 2 14.5 2C16.5 2 18 3.5 18 5.5C18 8.39 14.86 11.24 10.1 15.55Z"
                fill="black" />
            </svg>
          </a>
          <div class="lawyer-img mb-md-4">
            <img class="rounded-pill" src="https://fakeimg.pl/212x212/" alt="">
          </div>
          <div class="lawyer-card-content text-center">
            <h3 class="text-center mb-2">邱彩恆</h3>
            <div class="line bg-dark mb-2"></div>
            <p class="mb-md-5">恆采律師事務所</p>
            <p>「我不是在開庭，就是在跟當事人開會，我會為您做好一切準備。」</p>
            <ul class="lawyer-tags d-flex flex-wrap justify-content-center">
              <li class="rounded-pill border border-1 me-2 py-1 px-3">民事訴訟</li>
              <li class="rounded-pill border border-1 me-2 py-1 px-3">刑事訴訟</li>
              <li class="rounded-pill border border-1 me-2 py-1 px-3">其他</li>
            </ul>
          </div>
        </li>
        <li
          class="col d-flex  flex-column align-items-center lawyer-card py-md-5 mb-md-4 rounded border border-1 rounded-2 position-relative">
          <a href="#" class="position-absolute top-0 end-0 m-4">
            <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M14.5 0C12.76 0 11.09 0.81 10 2.09C8.91 0.81 7.24 0 5.5 0C2.42 0 0 2.42 0 5.5C0 9.28 3.4 12.36 8.55 17.04L10 18.35L11.45 17.03C16.6 12.36 20 9.28 20 5.5C20 2.42 17.58 0 14.5 0ZM10.1 15.55L10 15.65L9.9 15.55C5.14 11.24 2 8.39 2 5.5C2 3.5 3.5 2 5.5 2C7.04 2 8.54 2.99 9.07 4.36H10.94C11.46 2.99 12.96 2 14.5 2C16.5 2 18 3.5 18 5.5C18 8.39 14.86 11.24 10.1 15.55Z"
                fill="black" />
            </svg>
          </a>
          <div class="lawyer-img mb-md-4">
            <img class="rounded-pill" src="https://fakeimg.pl/212x212/" alt="">
          </div>
          <div class="lawyer-card-content text-center">
            <h3 class="text-center mb-2">邱彩恆</h3>
            <div class="line bg-dark mb-2"></div>
            <p class="mb-md-5">恆采律師事務所</p>
            <p>「我不是在開庭，就是在跟當事人開會，我會為您做好一切準備。」</p>
            <ul class="lawyer-tags d-flex flex-wrap justify-content-center">
              <li class="rounded-pill border border-1 me-2 py-1 px-3">民事訴訟</li>
              <li class="rounded-pill border border-1 me-2 py-1 px-3">刑事訴訟</li>
              <li class="rounded-pill border border-1 me-2 py-1 px-3">其他</li>
            </ul>
          </div>
        </li>
        <li
          class="col d-flex  flex-column align-items-center lawyer-card py-md-5 mb-md-4 rounded border border-1  position-relative">
          <a href="#" class="position-absolute top-0 end-0 m-4">
            <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M14.5 0C12.76 0 11.09 0.81 10 2.09C8.91 0.81 7.24 0 5.5 0C2.42 0 0 2.42 0 5.5C0 9.28 3.4 12.36 8.55 17.04L10 18.35L11.45 17.03C16.6 12.36 20 9.28 20 5.5C20 2.42 17.58 0 14.5 0ZM10.1 15.55L10 15.65L9.9 15.55C5.14 11.24 2 8.39 2 5.5C2 3.5 3.5 2 5.5 2C7.04 2 8.54 2.99 9.07 4.36H10.94C11.46 2.99 12.96 2 14.5 2C16.5 2 18 3.5 18 5.5C18 8.39 14.86 11.24 10.1 15.55Z"
                fill="black" />
            </svg>
          </a>
          <div class="lawyer-img mb-md-4">
            <img class="rounded-pill" src="https://fakeimg.pl/212x212/" alt="">
          </div>
          <div class="lawyer-card-content text-center">
            <h3 class="text-center mb-2">邱彩恆</h3>
            <div class="line bg-dark mb-2"></div>
            <p class="mb-md-5">恆采律師事務所</p>
            <p>「我不是在開庭，就是在跟當事人開會，我會為您做好一切準備。」</p>
            <ul class="lawyer-tags d-flex flex-wrap justify-content-center">
              <li class="rounded-pill border border-1 me-2 py-1 px-3">民事訴訟</li>
              <li class="rounded-pill border border-1 me-2 py-1 px-3">刑事訴訟</li>
              <li class="rounded-pill border border-1 me-2 py-1 px-3">其他</li>
            </ul>
          </div>
        </li>
        <li
          class="col d-flex  flex-column align-items-center lawyer-card py-md-5 mb-md-4 rounded border border-1  position-relative">
          <a href="#" class="position-absolute top-0 end-0 m-4">
            <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M14.5 0C12.76 0 11.09 0.81 10 2.09C8.91 0.81 7.24 0 5.5 0C2.42 0 0 2.42 0 5.5C0 9.28 3.4 12.36 8.55 17.04L10 18.35L11.45 17.03C16.6 12.36 20 9.28 20 5.5C20 2.42 17.58 0 14.5 0ZM10.1 15.55L10 15.65L9.9 15.55C5.14 11.24 2 8.39 2 5.5C2 3.5 3.5 2 5.5 2C7.04 2 8.54 2.99 9.07 4.36H10.94C11.46 2.99 12.96 2 14.5 2C16.5 2 18 3.5 18 5.5C18 8.39 14.86 11.24 10.1 15.55Z"
                fill="black" />
            </svg>
          </a>
          <div class="lawyer-img mb-md-4">
            <img class="rounded-pill" src="https://fakeimg.pl/212x212/" alt="">
          </div>
          <div class="lawyer-card-content text-center">
            <h3 class="text-center mb-2">邱彩恆</h3>
            <div class="line bg-dark mb-2"></div>
            <p class="mb-md-5">恆采律師事務所</p>
            <p>「我不是在開庭，就是在跟當事人開會，我會為您做好一切準備。」</p>
            <ul class="lawyer-tags d-flex flex-wrap justify-content-center">
              <li class="rounded-pill border border-1 me-2 py-1 px-3">民事訴訟</li>
              <li class="rounded-pill border border-1 me-2 py-1 px-3">刑事訴訟</li>
              <li class="rounded-pill border border-1 me-2 py-1 px-3">其他</li>
            </ul>
          </div>
        </li>
        <li
          class="col d-flex  flex-column align-items-center lawyer-card py-md-5 mb-md-4 rounded border border-1  position-relative">
          <a href="#" class="position-absolute top-0 end-0 m-4">
            <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M14.5 0C12.76 0 11.09 0.81 10 2.09C8.91 0.81 7.24 0 5.5 0C2.42 0 0 2.42 0 5.5C0 9.28 3.4 12.36 8.55 17.04L10 18.35L11.45 17.03C16.6 12.36 20 9.28 20 5.5C20 2.42 17.58 0 14.5 0ZM10.1 15.55L10 15.65L9.9 15.55C5.14 11.24 2 8.39 2 5.5C2 3.5 3.5 2 5.5 2C7.04 2 8.54 2.99 9.07 4.36H10.94C11.46 2.99 12.96 2 14.5 2C16.5 2 18 3.5 18 5.5C18 8.39 14.86 11.24 10.1 15.55Z"
                fill="black" />
            </svg>
          </a>
          <div class="lawyer-img mb-md-4">
            <img class="rounded-pill" src="https://fakeimg.pl/212x212/" alt="">
          </div>
          <div class="lawyer-card-content text-center">
            <h3 class="text-center mb-2">邱彩恆</h3>
            <div class="line bg-dark mb-2"></div>
            <p class="mb-md-5">恆采律師事務所</p>
            <p>「我不是在開庭，就是在跟當事人開會，我會為您做好一切準備。」</p>
            <ul class="lawyer-tags d-flex flex-wrap justify-content-center">
              <li class="rounded-pill border border-1 me-2 py-1 px-3">民事訴訟</li>
              <li class="rounded-pill border border-1 me-2 py-1 px-3">刑事訴訟</li>
              <li class="rounded-pill border border-1 me-2 py-1 px-3">其他</li>
            </ul>
          </div>
        </li>
        <li
          class="col d-flex  flex-column align-items-center lawyer-card py-md-5 mb-md-4 rounded border border-1  position-relative">
          <a href="#" class="position-absolute top-0 end-0 m-4">
            <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M14.5 0C12.76 0 11.09 0.81 10 2.09C8.91 0.81 7.24 0 5.5 0C2.42 0 0 2.42 0 5.5C0 9.28 3.4 12.36 8.55 17.04L10 18.35L11.45 17.03C16.6 12.36 20 9.28 20 5.5C20 2.42 17.58 0 14.5 0ZM10.1 15.55L10 15.65L9.9 15.55C5.14 11.24 2 8.39 2 5.5C2 3.5 3.5 2 5.5 2C7.04 2 8.54 2.99 9.07 4.36H10.94C11.46 2.99 12.96 2 14.5 2C16.5 2 18 3.5 18 5.5C18 8.39 14.86 11.24 10.1 15.55Z"
                fill="black" />
            </svg>
          </a>
          <div class="lawyer-img mb-md-4">
            <img class="rounded-pill" src="https://fakeimg.pl/212x212/" alt="">
          </div>
          <div class="lawyer-card-content text-center">
            <h3 class="text-center mb-2">邱彩恆</h3>
            <div class="line bg-dark mb-2"></div>
            <p class="mb-md-5">恆采律師事務所</p>
            <p>「我不是在開庭，就是在跟當事人開會，我會為您做好一切準備。」</p>
            <ul class="lawyer-tags d-flex flex-wrap justify-content-center">
              <li class="rounded-pill border border-1 me-2 py-1 px-3">民事訴訟</li>
              <li class="rounded-pill border border-1 me-2 py-1 px-3">刑事訴訟</li>
              <li class="rounded-pill border border-1 me-2 py-1 px-3">其他</li>
            </ul>
          </div>
        </li>
        <li
          class="col d-flex  flex-column align-items-center lawyer-card py-md-5 mb-md-4 rounded border border-1  position-relative">
          <a href="#" class="position-absolute top-0 end-0 m-4">
            <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M14.5 0C12.76 0 11.09 0.81 10 2.09C8.91 0.81 7.24 0 5.5 0C2.42 0 0 2.42 0 5.5C0 9.28 3.4 12.36 8.55 17.04L10 18.35L11.45 17.03C16.6 12.36 20 9.28 20 5.5C20 2.42 17.58 0 14.5 0ZM10.1 15.55L10 15.65L9.9 15.55C5.14 11.24 2 8.39 2 5.5C2 3.5 3.5 2 5.5 2C7.04 2 8.54 2.99 9.07 4.36H10.94C11.46 2.99 12.96 2 14.5 2C16.5 2 18 3.5 18 5.5C18 8.39 14.86 11.24 10.1 15.55Z"
                fill="black" />
            </svg>
          </a>
          <div class="lawyer-img mb-md-4">
            <img class="rounded-pill" src="https://fakeimg.pl/212x212/" alt="">
          </div>
          <div class="lawyer-card-content text-center">
            <h3 class="text-center mb-2">邱彩恆</h3>
            <div class="line bg-dark mb-2"></div>
            <p class="mb-md-5">恆采律師事務所</p>
            <p>「我不是在開庭，就是在跟當事人開會，我會為您做好一切準備。」</p>
            <ul class="lawyer-tags d-flex flex-wrap justify-content-center">
              <li class="rounded-pill border border-1 me-2 py-1 px-3">民事訴訟</li>
              <li class="rounded-pill border border-1 me-2 py-1 px-3">刑事訴訟</li>
              <li class="rounded-pill border border-1 me-2 py-1 px-3">其他</li>
            </ul>
          </div>
        </li>
        <li
          class="col d-flex  flex-column align-items-center lawyer-card py-md-5 mb-md-4 rounded border border-1  position-relative">
          <a href="#" class="position-absolute top-0 end-0 m-4">
            <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M14.5 0C12.76 0 11.09 0.81 10 2.09C8.91 0.81 7.24 0 5.5 0C2.42 0 0 2.42 0 5.5C0 9.28 3.4 12.36 8.55 17.04L10 18.35L11.45 17.03C16.6 12.36 20 9.28 20 5.5C20 2.42 17.58 0 14.5 0ZM10.1 15.55L10 15.65L9.9 15.55C5.14 11.24 2 8.39 2 5.5C2 3.5 3.5 2 5.5 2C7.04 2 8.54 2.99 9.07 4.36H10.94C11.46 2.99 12.96 2 14.5 2C16.5 2 18 3.5 18 5.5C18 8.39 14.86 11.24 10.1 15.55Z"
                fill="black" />
            </svg>
          </a>
          <div class="lawyer-img mb-md-4">
            <img class="rounded-pill" src="https://fakeimg.pl/212x212/" alt="">
          </div>
          <div class="lawyer-card-content text-center">
            <h3 class="text-center mb-2">邱彩恆</h3>
            <div class="line bg-dark mb-2"></div>
            <p class="mb-md-5">恆采律師事務所</p>
            <p>「我不是在開庭，就是在跟當事人開會，我會為您做好一切準備。」</p>
            <ul class="lawyer-tags d-flex flex-wrap justify-content-center">
              <li class="rounded-pill border border-1 me-2 py-1 px-3">民事訴訟</li>
              <li class="rounded-pill border border-1 me-2 py-1 px-3">刑事訴訟</li>
              <li class="rounded-pill border border-1 me-2 py-1 px-3">其他</li>
            </ul>
          </div>
        </li>
        <li
          class="col d-flex  flex-column align-items-center lawyer-card py-md-5 mb-md-4 rounded border border-1  position-relative">
          <a href="#" class="position-absolute top-0 end-0 m-4">
            <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M14.5 0C12.76 0 11.09 0.81 10 2.09C8.91 0.81 7.24 0 5.5 0C2.42 0 0 2.42 0 5.5C0 9.28 3.4 12.36 8.55 17.04L10 18.35L11.45 17.03C16.6 12.36 20 9.28 20 5.5C20 2.42 17.58 0 14.5 0ZM10.1 15.55L10 15.65L9.9 15.55C5.14 11.24 2 8.39 2 5.5C2 3.5 3.5 2 5.5 2C7.04 2 8.54 2.99 9.07 4.36H10.94C11.46 2.99 12.96 2 14.5 2C16.5 2 18 3.5 18 5.5C18 8.39 14.86 11.24 10.1 15.55Z"
                fill="black" />
            </svg>
          </a>
          <div class="lawyer-img mb-md-4">
            <img class="rounded-pill" src="https://fakeimg.pl/212x212/" alt="">
          </div>
          <div class="lawyer-card-content text-center">
            <h3 class="text-center mb-2">邱彩恆</h3>
            <div class="line bg-dark mb-2"></div>
            <p class="mb-md-5">恆采律師事務所</p>
            <p>「我不是在開庭，就是在跟當事人開會，我會為您做好一切準備。」</p>
            <ul class="lawyer-tags d-flex flex-wrap justify-content-center">
              <li class="rounded-pill border border-1 me-2 py-1 px-3">民事訴訟</li>
              <li class="rounded-pill border border-1 me-2 py-1 px-3">刑事訴訟</li>
              <li class="rounded-pill border border-1 me-2 py-1 px-3">其他</li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
    <div class="conteiner d-flex justify-content-center mb-7">
      <nav aria-label="Page navigation example">
        <ul class="pagination">
          <li class="page-item">
            <a class="page-link" href="#" aria-label="Previous">
              <span aria-hidden="true">&laquo;</span>
            </a>
          </li>
          <li class="page-item"><a class="page-link" href="#">1</a></li>
          <li class="page-item"><a class="page-link" href="#">2</a></li>
          <li class="page-item"><a class="page-link" href="#">3</a></li>
          <li class="page-item">
            <a class="page-link" href="#" aria-label="Next">
              <span aria-hidden="true">&raquo;</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </main>
</template>
