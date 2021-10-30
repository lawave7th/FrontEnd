<template>
  <main>
    <div class="container-fluid g-0 ">
      <div class="knowledge-banner d-flex pt-11 align-items-end mb-7">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-8 col-lg-6 p-1  mt-md-4">
              <!-- banner下方按鈕區塊 -->
              <div class="text-center mb-5">
                <h2 class="fs-4 mb-md-4 text-white">我有版面你有故事嗎？</h2>
                <p class="text-white">身為身經百戰的專業律師，人生有太多光怪陸離的逸聞趣事或豐富專案經歷值得普渡大眾，拯救萬物蒼生脫離苦海嗎？立即開啟專欄與我們分享你的故事吧</p>
                <button class="btn btn-primary rounded-pill py-4 mb-md-7 text-white" type="button">律師資格即可立即發表文章</button>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
    <div class="container pb-md-6">
      <div class="row">
        <div class="col-md-6 offset-md-3 text-center mb-md-5 ">
          <h3 class="text-secondary">編輯精選</h3>
          <div class="line  bg-primary mb-3"></div>
          <p>生活中所見的一切事物，都離不開法律，快來看看各大律師的精闢分享經歷！</p>
        </div>
      </div>
      <!-- 精選卡片 -->
      <ul class="row justify-content-center justify-content-md-between pb-3 border-bottom">
        <li class="knowledge-card col-8 col-md-4 border mb-4 border-primary rounded rounded-3 p-0">
          <div class="mb-md-4 img-fluid">
            <img class="rounded-top-3" src="../assets/img/knowledge-img/knowledge-card.png" alt="文章封面">
          </div>
          <div class="knowledge-card-content px-2">
            <h3 class="mb-4 fs-4">「法庭現形記」最具爭議性恐龍法官還是恐龍法條案件</h3>
            <div class="d-flex justify-content-between">
              <div class="author d-flex align-items-start">
                <img class="rounded-pill me-2" src="../assets/img/knowledge-img/knowledge-photo.png" alt="作者">
                <div>
                  <div class="knowledge-name">
                    <h4 class="fs-6 ">Steve Lin</h4>
                    <p class="fs-7 text-info">21/11/27</p>
                  </div>
                </div>
              </div>
              <div class="article-like d-flex align-items-center">
                <a href="#"><span class="material-icons text-info align-middle">  favorite_border </span></a>
                <p class="m-0 ps-2 text-info">24</p>
              </div>
            </div>
          </div>
        </li>
        <li class="knowledge-card col-8 col-md-4 border mb-4 border-primary rounded rounded-3 p-0">
          <div class="mb-md-4 img-fluid">
            <img class="rounded-top-3" src="../assets/img/knowledge-img/knowledge-card.png" alt="文章封面">
          </div>
          <div class="knowledge-card-content px-2">
            <h3 class="mb-4 fs-4">「法庭現形記」最具爭議性恐龍法官還是恐龍法條案件</h3>
            <div class="d-flex justify-content-between">
              <div class="author d-flex align-items-start">
                <img class="rounded-pill me-2" src="../assets/img/knowledge-img/knowledge-photo.png" alt="作者">
                <div>
                  <div class="knowledge-name">
                    <h4 class="fs-6 ">Steve Lin</h4>
                    <p class="fs-7 text-info">21/11/27</p>
                  </div>
                </div>
              </div>
              <div class="article-like d-flex align-items-center">
                <a href="#"><span class="material-icons text-info align-middle">  favorite_border </span></a>
                <p class="m-0 ps-2 text-info">24</p>
              </div>
            </div>
          </div>
        </li>
        <li class="knowledge-card col-8 col-md-4 border mb-4 border-primary rounded rounded-3 p-0">
          <div class="mb-md-4 img-fluid">
            <img class="rounded-top-3" src="../assets/img/knowledge-img/knowledge-card.png" alt="文章封面">
          </div>
          <div class="knowledge-card-content px-2">
            <h3 class="mb-4 fs-4">「法庭現形記」最具爭議性恐龍法官還是恐龍法條案件</h3>
            <div class="d-flex justify-content-between">
              <div class="author d-flex align-items-start">
                <img class="rounded-pill me-2" src="../assets/img/knowledge-img/knowledge-photo.png" alt="作者">
                <div>
                  <div class="knowledge-name">
                    <h4 class="fs-6 ">Steve Lin</h4>
                    <p class="fs-7 text-info">21/11/27</p>
                  </div>
                </div>
              </div>
              <div class="article-like d-flex align-items-center">
                <a href="#"><span class="material-icons text-info align-middle">  favorite_border </span></a>
                <p class="m-0 ps-2 text-info">24</p>
              </div>
            </div>
          </div>
        </li>
      </ul>
      <!-- 專欄分類 -->
      <div class="text-center mb-5 mt-7">
        <h3 class="text-secondary">專欄分類</h3>
        <div class="line bg-primary"></div>
      </div>
      <ul class="knowledge-type row row-cols-2 row-cols-md-6 justify-content-center align-items-center justify-content-md-between ">
        <li class="d-flex justify-content-center align-items-center img-fluid mb-4">
          <img src="../assets/img/knowledge-img/knowledge-1.png" alt="專欄分類-民事">
          <a class="text-secondary ms-2 fs-5  mb-0" href="#">民事訴訟</a>
        </li>
        <li class="d-flex justify-content-center align-items-center img-fluid mb-4">
          <img src="../assets/img/knowledge-img/knowledge-2.png" alt="專欄分類-刑事">
          <a class="text-secondary ms-2 fs-5 p-0" href="#">刑事訴訟</a>
        </li>
        <li class="d-flex justify-content-center align-items-center img-fluid mb-4">
          <img src="../assets/img/knowledge-img/knowledge-3.png" alt="專欄分類-家事">
          <a class="text-secondary ms-2 fs-5 p-0" href="#">家事訴訟</a>
        </li>
        <li class="d-flex justify-content-center  align-items-center img-fluid mb-4">
          <img src="../assets/img/knowledge-img/knowledge-4.png" alt="專欄分類-勞資">
          <a class="text-secondary ms-2 fs-5 p-0" href="#">勞資爭議</a>
        </li>
        <li class="d-flex justify-content-center align-items-center img-fluid mb-4">
          <img src="../assets/img/knowledge-img/knowledge-5.png" alt="專欄分類-消費">
          <a class="text-secondary ms-2 fs-5 p-0" href="#">消費糾紛</a>
        </li>
        <li class="d-flex justify-content-center align-items-center img-fluid mb-4">
          <img src="../assets/img/knowledge-img/knowledge-6.png" alt="專欄分類-專利">
          <a class="text-secondary ms-2 fs-5 p-0" href="#">專利權益</a>
        </li>
      </ul>
      <!-- 專欄分類下方卡片 -->
      <ul class="row row-cols-1 row-cols-md-3 gx-md-4 justify-content-center justify-content-md-between">
        <li class="knowledge-card col-8 col-md-4 mb-4 border border-primary rounded rounded-3 p-0">
          <div class="mb-md-4 img-fluid">
            <img class="rounded-top-3" src="../assets/img/knowledge-img/knowledge-card.png" alt="文章封面">
          </div>
          <div class="knowledge-card-content px-2">
            <h3 class="mb-4 fs-4">「法庭現形記」最具爭議性恐龍法官還是恐龍法條案件</h3>
            <div class="d-flex justify-content-between">
              <div class="author d-flex align-items-start">
                <img class="rounded-pill me-2" src="../assets/img/knowledge-img/knowledge-photo.png" alt="作者">
                <div>
                  <div class="knowledge-name">
                    <h4 class="fs-6 ">Steve Lin</h4>
                    <p class="fs-7 text-info">21/11/27</p>
                  </div>
                </div>
              </div>
              <div class="article-like d-flex align-items-center">
                <a href="#"><span class="material-icons text-info align-middle">  favorite_border </span></a>
                <p class="m-0 ps-2 text-info">24</p>
              </div>
            </div>
          </div>
        </li>
        <li class="knowledge-card col-8 col-md-4 mb-4 border border-primary rounded rounded-3 p-0">
          <div class="mb-md-4 img-fluid">
            <img class="rounded-top-3" src="../assets/img/knowledge-img/knowledge-card.png" alt="文章封面">
          </div>
          <div class="knowledge-card-content px-2">
            <h3 class="mb-4 fs-4">「法庭現形記」最具爭議性恐龍法官還是恐龍法條案件</h3>
            <div class="d-flex justify-content-between">
              <div class="author d-flex align-items-start">
                <img class="rounded-pill me-2" src="../assets/img/knowledge-img/knowledge-photo.png" alt="作者">
                <div>
                  <div class="knowledge-name">
                    <h4 class="fs-6 ">Steve Lin</h4>
                    <p class="fs-7 text-info">21/11/27</p>
                  </div>
                </div>
              </div>
              <div class="article-like d-flex align-items-center">
                <a href="#"><span class="material-icons text-info align-middle">  favorite_border </span></a>
                <p class="m-0 ps-2 text-info">24</p>
              </div>
            </div>
          </div>
        </li>
        <li class="knowledge-card col-8 col-md-4 mb-4 border border-primary rounded rounded-3 p-0">
          <div class="mb-md-4 img-fluid">
            <img class="rounded-top-3" src="../assets/img/knowledge-img/knowledge-card.png" alt="文章封面">
          </div>
          <div class="knowledge-card-content px-2">
            <h3 class="mb-4 fs-4">「法庭現形記」最具爭議性恐龍法官還是恐龍法條案件</h3>
            <div class="d-flex justify-content-between">
              <div class="author d-flex align-items-start">
                <img class="rounded-pill me-2" src="../assets/img/knowledge-img/knowledge-photo.png" alt="作者">
                <div>
                  <div class="knowledge-name">
                    <h4 class="fs-6 ">Steve Lin</h4>
                    <p class="fs-7 text-info">21/11/27</p>
                  </div>
                </div>
              </div>
              <div class="article-like d-flex align-items-center">
                <a href="#"><span class="material-icons text-info align-middle">  favorite_border </span></a>
                <p class="m-0 ps-2 text-info">24</p>
              </div>
            </div>
          </div>
        </li>
        <li class="knowledge-card col-8 col-md-4 mb-4 border border-primary rounded rounded-3 p-0">
          <div class="mb-md-4 img-fluid">
            <img class="rounded-top-3" src="../assets/img/knowledge-img/knowledge-card.png" alt="文章封面">
          </div>
          <div class="knowledge-card-content px-2">
            <h3 class="mb-4 fs-4">「法庭現形記」最具爭議性恐龍法官還是恐龍法條案件</h3>
            <div class="d-flex justify-content-between">
              <div class="author d-flex align-items-start">
                <img class="rounded-pill me-2" src="../assets/img/knowledge-img/knowledge-photo.png" alt="作者">
                <div>
                  <div class="knowledge-name">
                    <h4 class="fs-6 ">Steve Lin</h4>
                    <p class="fs-7 text-info">21/11/27</p>
                  </div>
                </div>
              </div>
              <div class="article-like d-flex align-items-center">
                <a href="#"><span class="material-icons text-info align-middle">  favorite_border </span></a>
                <p class="m-0 ps-2 text-info">24</p>
              </div>
            </div>
          </div>
        </li>
        <li class="knowledge-card col-8 col-md-4 mb-4 border border-primary rounded rounded-3 p-0">
          <div class="mb-md-4 img-fluid">
            <img class="rounded-top-3" src="../assets/img/knowledge-img/knowledge-card.png" alt="文章封面">
          </div>
          <div class="knowledge-card-content px-2">
            <h3 class="mb-4 fs-4">「法庭現形記」最具爭議性恐龍法官還是恐龍法條案件</h3>
            <div class="d-flex justify-content-between">
              <div class="author d-flex align-items-start">
                <img class="rounded-pill me-2" src="../assets/img/knowledge-img/knowledge-photo.png" alt="作者">
                <div>
                  <div class="knowledge-name">
                    <h4 class="fs-6 ">Steve Lin</h4>
                    <p class="fs-7 text-info">21/11/27</p>
                  </div>
                </div>
              </div>
              <div class="article-like d-flex align-items-center">
                <a href="#"><span class="material-icons text-info align-middle">  favorite_border </span></a>
                <p class="m-0 ps-2 text-info">24</p>
              </div>
            </div>
          </div>
        </li>
        <li class="knowledge-card col-8 col-md-4 mb-4 border border-primary rounded rounded-3 p-0">
          <div class="mb-md-4 img-fluid">
            <img class="rounded-top-3" src="../assets/img/knowledge-img/knowledge-card.png" alt="文章封面">
          </div>
          <div class="knowledge-card-content px-2">
            <h3 class="mb-4 fs-4">「法庭現形記」最具爭議性恐龍法官還是恐龍法條案件</h3>
            <div class="d-flex justify-content-between">
              <div class="author d-flex align-items-start">
                <img class="rounded-pill me-2" src="../assets/img/knowledge-img/knowledge-photo.png" alt="作者">
                <div>
                  <div class="knowledge-name">
                    <h4 class="fs-6 ">Steve Lin</h4>
                    <p class="fs-7 text-info">21/11/27</p>
                  </div>
                </div>
              </div>
              <div class="article-like d-flex align-items-center">
                <a href="#"><span class="material-icons text-info align-middle">  favorite_border </span></a>
                <p class="m-0 ps-2 text-info">24</p>
              </div>
            </div>
          </div>
        </li>
        <li class="knowledge-card col-8 col-md-4 mb-4 border border-primary rounded rounded-3 p-0">
          <div class="mb-md-4 img-fluid">
            <img class="rounded-top-3" src="../assets/img/knowledge-img/knowledge-card.png" alt="文章封面">
          </div>
          <div class="knowledge-card-content px-2">
            <h3 class="mb-4 fs-4">「法庭現形記」最具爭議性恐龍法官還是恐龍法條案件</h3>
            <div class="d-flex justify-content-between">
              <div class="author d-flex align-items-start">
                <img class="rounded-pill me-2" src="../assets/img/knowledge-img/knowledge-photo.png" alt="作者">
                <div>
                  <div class="knowledge-name">
                    <h4 class="fs-6 ">Steve Lin</h4>
                    <p class="fs-7 text-info">21/11/27</p>
                  </div>
                </div>
              </div>
              <div class="article-like d-flex align-items-center">
                <a href="#"><span class="material-icons text-info align-middle">  favorite_border </span></a>
                <p class="m-0 ps-2 text-info">24</p>
              </div>
            </div>
          </div>
        </li>
        <li class="knowledge-card col-8 col-md-4 mb-4 border border-primary rounded rounded-3 p-0">
          <div class="mb-md-4 img-fluid">
            <img class="rounded-top-3" src="../assets/img/knowledge-img/knowledge-card.png" alt="文章封面">
          </div>
          <div class="knowledge-card-content px-2">
            <h3 class="mb-4 fs-4">「法庭現形記」最具爭議性恐龍法官還是恐龍法條案件</h3>
            <div class="d-flex justify-content-between">
              <div class="author d-flex align-items-start">
                <img class="rounded-pill me-2" src="../assets/img/knowledge-img/knowledge-photo.png" alt="作者">
                <div>
                  <div class="knowledge-name">
                    <h4 class="fs-6 ">Steve Lin</h4>
                    <p class="fs-7 text-info">21/11/27</p>
                  </div>
                </div>
              </div>
              <div class="article-like d-flex align-items-center">
                <a href="#"><span class="material-icons text-info align-middle">  favorite_border </span></a>
                <p class="m-0 ps-2 text-info">24</p>
              </div>
            </div>
          </div>
        </li>
        <li class="knowledge-card col-8 col-md-4 mb-4 border border-primary rounded rounded-3 p-0">
          <div class="mb-md-4 img-fluid">
            <img class="rounded-top-3" src="../assets/img/knowledge-img/knowledge-card.png" alt="文章封面">
          </div>
          <div class="knowledge-card-content px-2">
            <h3 class="mb-4 fs-4">「法庭現形記」最具爭議性恐龍法官還是恐龍法條案件</h3>
            <div class="d-flex justify-content-between">
              <div class="author d-flex align-items-start">
                <img class="rounded-pill me-2" src="../assets/img/knowledge-img/knowledge-photo.png" alt="作者">
                <div>
                  <div class="knowledge-name">
                    <h4 class="fs-6 ">Steve Lin</h4>
                    <p class="fs-7 text-info">21/11/27</p>
                  </div>
                </div>
              </div>
              <div class="article-like d-flex align-items-center">
                <a href="#"><span class="material-icons text-info align-middle">  favorite_border </span></a>
                <p class="m-0 ps-2 text-info">24</p>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <div class="container d-flex justify-content-end mb-7 mb-11">
    <!-- 分頁按鈕 -->
    <ul class="appointment-pagination d-flex justify-content-md-end align-items-center">
      <li class="me-2">
        <a class="d-block text-white  btn-primary rounded-pill text-center fs-7" href="#">1</a>
      </li>
      <li class="me-2">
        <a class="d-block text-secondary  btn-primary bg-primary-shallow rounded-pill text-center fs-7" href="#">2</a>
      </li>
      <li>
        <a class="d-block pagination-next text-white btn-primary bg-primary-shallow rounded-pill text-center"
           href="#">
          <img src="../assets/img/next-page.png" class="mb-2" height="8" width="10"/></a>
      </li>
    </ul>
  </div>
  </main>
</template>
