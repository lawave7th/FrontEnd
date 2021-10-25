<template>
  <div class="border rounded rounded-3 px-md-7 py-md-5">
    <form>
      <!-- 上方切換開關 -->
      <div
        class="form-check form-switch ms-0 d-flex justify-content-end align-items-center pb-4 border-bottom mb-4">
        <label class="form-check-label me-3" for="lawyer-open">公開資料供媒合搜尋使用</label>
        <input class="fs-3 form-check-input ms-0" type="checkbox" id="lawyer-open">
      </div>
      <!-- 表單填寫區塊 -->
      <div class="row g-3">
        <div class="col-12">
          <div class="row">
            <div class="col-md-4">
              <label for="lawyer-name" class="form-label fw-bold">名字</label>
              <input type="text" class="form-control" id="lawyer-name">
            </div>
            <div class="col-md-4">
              <label for="laywer-last-name" class="form-label fw-bold">姓氏</label>
              <input type="text" class="form-control" id="laywer-last-name">
            </div>
          </div>
        </div>
        <div class="col-12">
          <div class="row">
            <div class="col-md-4">
            <label for="laywer-phone" class="form-label fw-bold">電話號碼</label>
            <input type="text" class="form-control" id="laywer-phone">
          </div>
            <div class="col-md-4">
              <label for="laywer-email" class="form-label fw-bold">電子信箱</label>
              <input type="email" class="form-control" id="laywer-email">
            </div>
          </div>
        </div>
        <div class="col-12">
          <p class="fw-bold">工作經歷</p>
          <div class="row">
            <div class="col-md-4">
              <label for="company-name" class="form-label">公司名稱：</label>
              <input type="text" class="form-control" id="company-name">
            </div>
            <div class="col-md-4">
              <label for="job-title" class="form-label">職位名稱：</label>
              <input type="text" class="form-control" id="job-title">
            </div>
          </div>
          <button class="btn btn-secondary rounded-pill fs-7">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM15 11H11V15H9V11H5V9H9V5H11V9H15V11Z" fill="black"/>
            </svg>
            新增經歷
          </button>
        </div>
        <div class="col-12">
          <label for="laywer-saying" class="form-label">律師名言</label>
          <input type="text" class="form-control" id="laywer-saying">
        </div>
        <div class="col-12">
          <p>領域類別（最多選取三個）</p>
          <div class="row mb-2">
            <div class="col-auto">
              <input class="form-check-input" type="checkbox" value="民事訴訟"
                     id="civil-action">
              <label class="form-check-label" for="civil-action">
                民事訴訟
              </label>
            </div>
            <div class="col-auto">
              <input class="form-check-input" type="checkbox" value="刑事訴訟"
                     id="criminal-suit">
              <label class="form-check-label" for="criminal-suit">
                刑事訴訟
              </label>
            </div>
            <div class="col-auto">
              <input class="form-check-input" type="checkbox" value="家事訴訟"
                     id="family-litigation">
              <label class="form-check-label" for="family-litigation">
                家事訴訟
              </label>
            </div>
            <div class="col-auto">
              <input class="form-check-input" type="checkbox" value="勞資爭議"
                     id="labor-dispute">
              <label class="form-check-label" for="labor-dispute">
                勞資爭議
              </label>
            </div>
            <div class="col-auto">
              <input class="form-check-input" type="checkbox" value="消費糾紛"
                     id="consumer-disputes">
              <label class="form-check-label" for="consumer-disputes">
                消費糾紛
              </label>
            </div>
          </div>
          <div class="row align-items-center">
            <div class="col-auto">
              <input class="form-check-input" type="checkbox" value="其他" id="other">
              <label class="form-check-label" for="other">
                其他
              </label>
            </div>
            <div class="col-auto">
              <input type="text" class="form-control">
            </div>
          </div>
        </div>
        <div class="col-12">
          <label for="lawyer-introduction" class="form-label">律師介紹</label>
          <textarea class="form-control" id="lawyer-introduction" rows="3"></textarea>
        </div>
        <div class="col-12">
          <label for="lawyer-education" class="form-label">學歷與工作經歷介紹</label>
          <textarea class="form-control" id="lawyer-education" rows="3"></textarea>
        </div>
        <div class="col-12">
          <p>具有各縣市律師公會執業登入地區</p>
          <div class="row mb-2">
            <div class="col-auto">
              <input class="form-check-input" type="checkbox" value="台北" id="taipei">
              <label class="form-check-label" for="taipei">
                台北
              </label>
            </div>
            <div class="col-auto">
              <input class="form-check-input" type="checkbox" value="新北" id="new-taipei">
              <label class="form-check-label" for="new-taipei">
                新北
              </label>
            </div>
            <div class="col-auto">
              <input class="form-check-input" type="checkbox" value="桃園" id="taoyuan">
              <label class="form-check-label" for="taoyuan">
                桃園
              </label>
            </div>
            <div class="col-auto">
              <input class="form-check-input" type="checkbox" value="台中" id="taichung">
              <label class="form-check-label" for="taichung">
                台中
              </label>
            </div>
            <div class="col-auto">
              <input class="form-check-input" type="checkbox" value="台南" id="tainan">
              <label class="form-check-label" for="tainan">
                台南
              </label>
            </div>
            <div class="col-auto">
              <input class="form-check-input" type="checkbox" value="高雄" id="kaohsiung">
              <label class="form-check-label" for="kaohsiung">
                高雄
              </label>
            </div>
            <div class="col-auto">
              <input class="form-check-input" type="checkbox" value="新竹" id="hsinchu">
              <label class="form-check-label" for="hsinchu">
                新竹
              </label>
            </div>
            <div class="col-auto">
              <input class="form-check-input" type="checkbox" value="苗栗" id="miaoli">
              <label class="form-check-label" for="miaoli">
                苗栗
              </label>
            </div>
            <div class="col-auto">
              <input class="form-check-input" type="checkbox" value="彰化" id="changhua">
              <label class="form-check-label" for="changhua">
                彰化
              </label>
            </div>
            <div class="col-auto">
              <input class="form-check-input" type="checkbox" value="南投" id="nantou">
              <label class="form-check-label" for="nantou">
                南投
              </label>
            </div>
            <div class="col-auto">
              <input class="form-check-input" type="checkbox" value="雲林" id="yunlin">
              <label class="form-check-label" for="yunlin">
                雲林
              </label>
            </div>
            <div class="col-auto">
              <input class="form-check-input" type="checkbox" value="嘉義" id="chiayi">
              <label class="form-check-label" for="chiayi">
                嘉義
              </label>
            </div>
            <div class="col-auto">
              <input class="form-check-input" type="checkbox" value="屏東" id="pingtung">
              <label class="form-check-label" for="pingtung">
                屏東
              </label>
            </div>
            <div class="col-auto">
              <input class="form-check-input" type="checkbox" value="宜蘭" id="yilan">
              <label class="form-check-label" for="yilan">
                宜蘭
              </label>
            </div>
            <div class="col-auto">
              <input class="form-check-input" type="checkbox" value="花蓮" id="hualien">
              <label class="form-check-label" for="hualien">
                花蓮
              </label>
            </div>
            <div class="col-auto">
              <input class="form-check-input" type="checkbox" value="台東" id="taitung">
              <label class="form-check-label" for="taitung">
                台東
              </label>
            </div>
            <div class="col-auto">
              <input class="form-check-input" type="checkbox" value="澎湖" id="penghu">
              <label class="form-check-label" for="penghu">
                澎湖
              </label>
            </div>
            <div class="col-auto">
              <input class="form-check-input" type="checkbox" value="金門" id="kinmen">
              <label class="form-check-label" for="kinmen">
                金門
              </label>
            </div>
            <div class="col-auto">
              <input class="form-check-input" type="checkbox" value="連江" id="lienchiang">
              <label class="form-check-label" for="lienchiang">
                連江
              </label>
            </div>
            <div class="col-auto">
              <input class="form-check-input" type="checkbox" value="其他" id="area-other">
              <label class="form-check-label" for="area-other">
                其他
              </label>
            </div>
          </div>
        </div>
        <div class="col-12">
          <label for="professional-field" class="form-label">專業領域</label>
          <textarea class="form-control" id="professional-field" rows="3"></textarea>
        </div>
        <div class="col-12">
          <label for="consultation-fees" class="form-label">諮詢費用</label>
          <textarea class="form-control" id="consultation-fees" rows="3"></textarea>
        </div>
        <div class="col-12 d-grid">
          <p>＊＊ 須通過律師資格審核方可開啟右上方公開資料核取按鈕</p>
          <button class="btn btn-dark" type="button">儲存修改</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'LawyerEditPage'
}
</script>
