<template>
  <Header></Header>
  <main>
      <CenterNav ></CenterNav>
    <div class="container pb-md-11">
      <div class="row justify-content-between position-relative mt-md-11">
        <div class="col-md-3">
          <LawyerSidebar></LawyerSidebar>
        </div>
        <div class="col-12 col-md-9">
          <router-view />
        </div>
      </div>
    </div>
  </main>
  <Footer></Footer>
</template>

<script>
import LawyerSidebar from '../../components/centerComponents/lawyer/LawyerSidebar'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import CenterNav from '../../components/centerComponents/CenterNav'

export default {
  name: 'LawyerHome.vue',
  components: { Header, LawyerSidebar, Footer, CenterNav }
}
</script>
