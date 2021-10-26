<template>
  <CenterHeader></CenterHeader>
  <main>
    <div class="container pb-md-11">
      <div class="row justify-content-between">
        <div class="col-3">
          <PeopleSidebar></PeopleSidebar>
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
import PeopleSidebar from '../../components/centerComponents/people/PeopleSidebar'
import CenterHeader from '../../components/centerComponents/CenterHeader'
import Footer from '../../components/Footer'

export default {
  name: 'LawyerHome.vue',
  components: { CenterHeader, PeopleSidebar, Footer }
}
</script>
