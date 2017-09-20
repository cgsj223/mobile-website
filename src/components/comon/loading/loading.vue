<template>
  <div class="loading" v-if='loading===true'>
    <img src="./loading.gif" alt="loading" class='loadingImg'>
  </div>
</template>

<script>
  export default {
    props:{
      loading:true
    }
  }
</script>


<style lang='stylus' rel='stylesheet/stylus'>
.loading
  width:100%
  height:100%
  background-color:white
  line-height:5.9rem
  text-align:center
  .loadingImg
    width:1.6rem
    height:1.6rem
    vertical-align:middle
</style>
