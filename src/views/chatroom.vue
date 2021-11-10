<template>

  <Header></Header>
  <main>
    <CenterNav ></CenterNav>
    <div class="container pb-md-11">
      <div class="row justify-content-between position-relative mt-md-11">
        <div class="col-md-3">
          <LawyerSidebar v-if="isLawyer"></LawyerSidebar>
          <PeopleSidebar v-else ></PeopleSidebar>
        </div>
        <div class="col-12 col-md-9 d-flex flex-column justify-content-between border border-primary rounded rounded-3 shadow-sm g-0">
          <div
            class="d-flex  justify-content-between  align-items-center rounded-top-3 py-3 px-4 bg-primary shadow-sm">
            <div class="chatroom-name d-flex align-items-center">
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none"
                   xmlns="http://www.w3.org/2000/svg">
                <rect width="48" height="48" rx="24" fill="#C4C4C4" />
                <path
                  d="M34.6673 34.6663V35.5596H13.334V34.6663C13.3364 32.4851 14.0074 30.357 15.2567 28.569C16.5059 26.7809 18.2733 25.4188 20.3206 24.6663C19.4032 24.059 18.6504 23.234 18.1293 22.2651C17.6081 21.2961 17.3349 20.2132 17.334 19.113C17.334 17.3448 18.0364 15.6492 19.2866 14.3989C20.5368 13.1487 22.2325 12.4463 24.0007 12.4463C25.7688 12.4463 27.4644 13.1487 28.7147 14.3989C29.9649 15.6492 30.6673 17.3448 30.6673 19.113C30.6657 20.2138 30.3914 21.2971 29.8691 22.2661C29.3468 23.2351 28.5926 24.0597 27.674 24.6663C29.7225 25.4177 31.4914 26.7793 32.7419 28.5675C33.9924 30.3556 34.6644 32.4843 34.6673 34.6663Z"
                  fill="white" />
              </svg>
              <h3 class="ms-3 mb-0">Tim Turner</h3>
            </div>
            <div class="chatroom-time">
                            <span class="material-icons align-middle">
                                alarm
                                </span>
              <span>59:00</span>
              <button class="btn btn-secondary ms-3" type="button">
                                <span class="material-icons align-middle">
                                    logout
                                    </span>
                結束諮詢
              </button>
            </div>
          </div>
          <div class="chatroom-content flex-grow-1 py-3 px-4 overflow-auto">
            <div class="system-hint d-flex flex-column align-items-center">
              <p class="d-inline-block rounded-pill border border-1 me-2 py-1 px-3">Emma Corrin 已加入聊天室
              </p>
              <p class="d-inline-block rounded-pill border border-1 me-2 py-1 px-3">Tim Turner 已加入聊天室
              </p>
            </div>
            <div class="row mb-3">
              <div class="col-auto">
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="48" height="48" rx="24" fill="#C4C4C4"/>
                  <path d="M34.6673 34.6663V35.5596H13.334V34.6663C13.3364 32.4851 14.0074 30.357 15.2567 28.569C16.5059 26.7809 18.2733 25.4188 20.3206 24.6663C19.4032 24.059 18.6504 23.234 18.1293 22.2651C17.6081 21.2961 17.3349 20.2132 17.334 19.113C17.334 17.3448 18.0364 15.6492 19.2866 14.3989C20.5368 13.1487 22.2325 12.4463 24.0007 12.4463C25.7688 12.4463 27.4644 13.1487 28.7147 14.3989C29.9649 15.6492 30.6673 17.3448 30.6673 19.113C30.6657 20.2138 30.3914 21.2971 29.8691 22.2661C29.3468 23.2351 28.5926 24.0597 27.674 24.6663C29.7225 25.4177 31.4914 26.7793 32.7419 28.5675C33.9924 30.3556 34.6644 32.4843 34.6673 34.6663Z" fill="white"/>
                </svg>
              </div>
              <div class="col-auto">
                <h4 class="fs-7">Tim Turner</h4>
                <div class="message-txt">
                  <p class="p-1 other-txt d-inline-block">哈摟～律師您好
                  </p>
                  <span class="fs-7">下午 2:00</span>
                </div>
              </div>
            </div>
            <div class="row mb-3 flex-row-reverse text-end">
              <!-- <div class="col-auto ">
                  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect width="48" height="48" rx="24" fill="#C4C4C4"/>
                      <path d="M34.6673 34.6663V35.5596H13.334V34.6663C13.3364 32.4851 14.0074 30.357 15.2567 28.569C16.5059 26.7809 18.2733 25.4188 20.3206 24.6663C19.4032 24.059 18.6504 23.234 18.1293 22.2651C17.6081 21.2961 17.3349 20.2132 17.334 19.113C17.334 17.3448 18.0364 15.6492 19.2866 14.3989C20.5368 13.1487 22.2325 12.4463 24.0007 12.4463C25.7688 12.4463 27.4644 13.1487 28.7147 14.3989C29.9649 15.6492 30.6673 17.3448 30.6673 19.113C30.6657 20.2138 30.3914 21.2971 29.8691 22.2661C29.3468 23.2351 28.5926 24.0597 27.674 24.6663C29.7225 25.4177 31.4914 26.7793 32.7419 28.5675C33.9924 30.3556 34.6644 32.4843 34.6673 34.6663Z" fill="white"/>
                      </svg>
              </div> -->
              <div class="col-8">
                <h4 class="fs-7 d-none">Tim Turner</h4>
                <div class="message-txt">
                  <span class="fs-7">下午 2:00</span>
                  <p class="p-1 user-txt d-inline-block">您好~感謝您前來諮詢</p>
                </div>
              </div>
            </div>
          </div>
          <div class="chatroom-input d-flex rounded-bottom-3 py-3 px-4 bg-primary shadow-sm align-items-center">
            <input type="text" class="form-control rounded rounded-3 py-2 me-3" placeholder="輸入訊息">
            <button type="button" class="btn btn-secondary send-btn rounded-pill">
            <span class="material-icons align-middle"> send </span>
            </button>
          </div>
  </div>
      </div>
    </div>
  </main>
  <Footer></Footer>
</template>

<script>
import LawyerSidebar from '../components/centerComponents/lawyer/LawyerSidebar'
import Footer from '../components/Footer'
import Header from '../components/Header'
import CenterNav from '../components/centerComponents/CenterNav'
import PeopleSidebar from '../components/centerComponents/people/PeopleSidebar'
import { confirmStatus } from '@/util/api'

export default {
  components: { Header, PeopleSidebar, LawyerSidebar, Footer, CenterNav },
  data () {
    return {
      isLawyer: false
    }
  },
  created () {
    this.checkStatus()
  },
  methods: {
    checkStatus () {
      confirmStatus()
        .then((res) => {
          this.isLawyer = res.data.isLawyer
        })
        .catch((error) => {
          console.error(error)
        })
    }
  }

}
</script>
