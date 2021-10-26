<template>
  <div class="border rounded rounded-3 px-md-7 py-md-5">
    <form>
      <!-- 表單填寫區塊 -->
      <div class="row g-3 justify-content-center">
        <div class="col-md-5">
          <label for="lawyer-name" class="form-label">名字</label>
          <input type="text" class="form-control" id="lawyer-name">
        </div>
        <div class="col-md-5">
          <label for="laywer-last-name" class="form-label">姓氏</label>
          <input type="text" class="form-control" id="laywer-last-name">
        </div>
        <div class="col-10">
          <div class="row">
            <div class="col-auto">
              <label for="laywer-email" class="form-label">電子信箱</label>
              <input type="email" class="form-control" id="laywer-email">
            </div>
          </div>
        </div>
        <div class="col-10">
          <div class="row">
            <div class="col-auto">
              <label for="laywer-phone" class="form-label">手機號碼</label>
              <input type="text" class="form-control" id="laywer-phone">
            </div>
          </div>
        </div>
        <div class="col-10">
          <label for="professional-field" class="form-label">個人介紹</label>
          <textarea class="form-control" id="professional-field" rows="3"></textarea>
        </div>

        <div class="col-10 d-flex justify-content-end">
          <button class="btn btn-dark rounded-pill px-9 py-4" type="button">儲存修改</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'PeopleEditPage'
}
</script>
