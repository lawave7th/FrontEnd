<template>
  <Header></Header>
  <main>
    <div class="container py-md-11">
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
import LawyerSidebar from '../../components/LawyerSidebar'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

export default {
  name: 'LawyerHome.vue',
  components: { Header, LawyerSidebar, Footer }
}
</script>
