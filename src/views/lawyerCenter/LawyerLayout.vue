<template>
  <Header></Header>
  <main>
    <div class="container pb-md-11">
      <div class="row justify-content-between">
        <div class="col-3">
          <LawyerSidebar></LawyerSidebar>
        </div>
        <div class="col-9">
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

export default {
  name: 'LawyerHome.vue',
  components: { Header, LawyerSidebar, Footer }
}
</script>
