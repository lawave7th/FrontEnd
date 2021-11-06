<template>
  <Header></Header>
  <main>
    <CenterNav ></CenterNav>
    <div class="container pb-md-11">
      <div class="row justify-content-between mt-md-11">
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
import CenterNav from '../../components/centerComponents/CenterNav'

export default {
  name: 'LawyerHome.vue',
  components: { Header, PeopleSidebar, Footer, CenterNav }
}
</script>
