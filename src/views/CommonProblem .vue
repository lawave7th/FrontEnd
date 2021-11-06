<template>
  <main>
    <div class="container  py-10">
      <h2 class="text-center pb-2 text-secondary">Q&A 常見問題專區</h2>
      <div class="line bg-primary mb-3"></div>
      <p class="question-text mb-7">選擇您需要的支援服務類型指南，有任何問題都歡迎透過客服信箱（service@mail.com）或者服務專線（02-3456-7890）
        ，我們聯繫做詢問。</p>
      <ul  class="accordion accordion-flush" id="accordionFlush">
        <li v-for="(item , index) in problemData" :key="index" class="accordion-item  mb-6 bg-body border border-primary-light rounded rounded-3 shadow-sm">
          <h2 class="accordion-header" :id="`flush-heading${index}`">
            <button class="accordion-button collapsed  fs-2 rounded rounded-3 bg-primary-shallow text-secondary" type="button" data-bs-toggle="collapse"
                    :data-bs-target="`#flush-collapse${index}`" aria-expanded="false" :aria-controls="`flush-collapse${index}`">
              {{item.title}}
            </button>
          </h2>
          <div :id="`flush-collapse${index}`" class="accordion-collapse collapse" :aria-labelledby="`flush-heading${index}`"
               data-bs-parent="#accordionFlush">
            <div class="accordion-body">
    <p>{{item.ans}}</p>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </main>
</template>

<script>
import { getCommonProblem } from '@/util/api'
export default {
  data () {
    return {
      problemData: {}
    }
  },
  methods: {
    getData () {
      getCommonProblem()
        .then((res) => {
          this.problemData = res.data.data
        })
        .catch((error) => {
          console.error(error)
        })
    }
  },
  mounted () {
    this.getData()
  }
}
</script>
