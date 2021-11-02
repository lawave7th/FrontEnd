<template>
  <Header></Header>
  <main class="pt-7 pt-md-11">
    <div class="container pb-md-11">
      <div class="row justify-content-between">
        <div class="col-12 col-md-3">
          <PeopleSidebar></PeopleSidebar>
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
import PeopleSidebar from '../../components/centerComponents/people/PeopleSidebar'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

export default {
  name: 'LawyerHome.vue',
  components: { Header, PeopleSidebar, Footer }
}
</script>
