<template>
<div class="app-wrapper">
  <myHeader />
  <div class="view-wrapper">
    <router-view></router-view>
  </div>
</div>
</template>

<script>

import myHeader from "./components/comon/header/header.vue"


export default {
  name: 'app',
  components: {
    myHeader
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
.view-wrapper
  margin:0 auto


@media screen and (max-width:320px)
  html
    font-size: 89px

@media screen and (min-width:321px) and (max-width:500px)
  html
    font-size:100px

@media screen and (min-width:501px)
  html
    font-size:139px
    .view-wrapper
      width:3rem
</style>
