<template lang="html">
  <transition name='indexTransition'>
    <div class="index_wrapper">
      <div class="slideshow" @click='toContent'>
        <swiper :options="swiperOption" :not-next-tick="notNextTick" ref="mySwiper">
          <swiper-slide><a><img src="./banner1.jpg" :data-type='"joke"' class="banner_img"></a></swiper-slide>
          <swiper-slide><a><img src="./banner2.jpg" :data-type='"movieRank"' class="banner_img"></a></swiper-slide>
          <swiper-slide><a><img src="./banner3.jpg" :data-type='"history"' class="banner_img"></a></swiper-slide>
          <swiper-slide><a><img src="./banner4.jpg" :data-type='"none"' class="banner_img"></a></swiper-slide>
          <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
      </div>
      <div class="info_wrapper">
        <h1>信息大全</h1>
        <div class="info_content">
          <ul @click="toContent">
            <transition-group name="info_list">
              <li v-if="showList" :data-type='"joke"' key="l1" :style="{ backgroundColor:'#99cccc' }">逗逼笑话</li>
              <li v-if="showList" :data-type='"movieRank"' key="l2" :style="{ backgroundColor:'#ff6666' }">电影票房</li>
              <li v-if="showList" :data-type='"history"' key="l3" :style="{ backgroundColor:'#ff9900' }">历史上的今天</li>
              <li v-if="showList" :data-type='"none"' key="l4" :style="{ backgroundColor:'#336699' }">什么都没有</li>
            </transition-group>
          </ul>
        </div>
      </div>
  </div>
  </transition>
</template>

<script>
require('swiper/dist/css/swiper.css');
import {
  swiper,
  swiperSlide
} from "vue-awesome-swiper"

export default {
  mounted:function(){
    this.showList=true;
  },
  methods:{
    /**
     * 事件代理，跳转至内容页
     * @param  {[type]} e [事件对象]
     * @return {[type]}   [description]
     */
    toContent:function(e){
      let tagName=e.target.tagName
      if(tagName==="LI"||tagName==="IMG"){
        this.$store.commit('increaseViewedPages')
        let type=e.target.dataset.type;
        this.$router.push({path:'/m/my_content/'+type,})
      }
    }
  },
  data: function() {
    return {
      showList: false,
      notNextTick: false,
      swiperOption: {
        autoplay: 3000,
        direction: "horizontal",
        setWrapperSize: true,
        pagination: '.swiper-pagination',
        slidesPerView: 1,
        centeredSlides: true,
        observeParents: true,
        autoplayDisableOnInteraction: false,
        loop: true,
        paginationClickable: true
      }
    }
  }
}
</script>

<style lang="stylus" rel='stylesheet/stylus'>
.indexTransition-enter-active, .indexTransition-leave-active
  transition:all 1s
.indexTransition-enter, .indexTransition-leave-to
  transform:translateX(-100%);
.index_wrapper
  font-size:0.3rem
  padding-top:0.5rem
  margin:0 auto
  .slideshow
    padding:0 0.1rem
    a
      display: block
    .banner_img
      width:100%
      height:2.02rem
.info_wrapper
  margin:0.1rem 0.1rem
  border:1px solid #e1e1e1
  border-radius:6px;
  box-shadow:0 0 3px rgba(0,0,0,0.2)
  h1
    font-size:0.2rem
    color:#369
    padding-left:0.06rem
    height:0.4rem
    line-height: 0.4rem
    border-bottom:1px solid #e1e1e1
  .info_content
    width:100%
    li
      height:0.6rem
      line-height:0.6rem
      font-size: 0.24rem
      margin:0.1rem 0.1rem
      color:rgba(0,0,0,0.7)
      border-radius:6px
      padding-left:0.16rem
    .info_list-enter-active, .info_list-leave-active
      transition: all 2s;
    .info_list-enter
      opacity: 0;
      transform: rotateX(90deg);
</style>
