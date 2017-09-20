<template>
  <div class="header-wrapper">
    <h1>每日资讯</h1>
    <span class="back_button" @click='back' v-if='showBackButton'></span>
  </div>
</template>

<script >
  export default {
    computed:{
      showBackButton:function(){
        return this.$store.state.viewedPages>0
      }
    },
    methods:{
      back:function(){
        this.$store.commit('decreaseViewedPages');
        this.$router.go(-1);
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .header-wrapper
    width:100%
    background-color:#336699
    position: fixed
    height:0.5rem
    line-height: 0.5rem
    z-index: 99
    h1
      font-size:0.2rem
      text-align:center
      color:white
      height:100%
      letter-spacing: 0.02rem
    .back_button
      display:block
      height:0.16rem
      width:0.16rem
      vertical-align: center
      position: absolute;
      top:50%
      margin-top:-0.08rem
      left:0.2rem
      border-top:0.02rem solid white
      border-left:0.02rem solid white
      transform:rotateZ(-45deg);
    .back_button:before
      content:'';
      width:0.3rem
      height:0.3rem
      margin:-0.1rem 0 0 -0.1rem
      display: block
</style>
