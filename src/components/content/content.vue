<template>
  <transition name='contentTransition'>
    <div class="content">
      <Loading :loading='showLoading'></Loading>
      <div class="content-wrapper">
        <div class="list-wrapper" ref='contList'>
          <ul v-if='contType==="joke"'>
            <li v-for="(item, index) in listData" :style="{backgroundColor:getColor(index)}">{{item.content}}</li>
          </ul>
          <ul v-if='contType==="history"'>
            <li v-for='(item,index) in listData' :style="{backgroundColor:getColor(index)}">
              <h1 class="content-title">{{item.year+"年"+item.month+"月"+item.day+"日"}}</h1>
              <p class="content-data">
                {{item.title}}
              </p>
            </li>
          </ul>
          <ul v-if='contType==="movieRank"'>
            <li v-for='(item ,index) in listData' :style="{backgroundColor:getColor(index)}">
              <h1 class="content-title">{{item.rid+" "+item.name}}</h1>
              <p class="content-data">
                {{item.wk}}<br/>
                票房：{{item.tboxoffice}}
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
</transition>
</template>

<script>
import Loading from '../comon/loading/loading.vue'
import myData from '../../../data.js'
import BScroll from 'better-scroll'

  export default {
    mounted:function(){
      if(this.contType==="none")return this.showLoading=false;
      this.initData()
    },
    data:function(){
      return {
        colors:['#99cccc','#996699','#ffcccc','#0099cc','#cccccc','#99cc66'],
        listData:null,
        showLoading:true,
        contType:this.$route.params.type
      }
    },
    methods:{
      /**
       * 判断信息类型，模拟异步数据获取，然后关闭loading界面
       * @return {[type]} [description]
       */
      initData:function(){
        let that=this
        let timer=setTimeout(function(){
          switch (that.contType){
            case 'joke':
              that.listData=myData.joke
            break;
            case 'movieRank':
              that.listData=myData.movieRank
            break;
            case 'history':
              that.listData=myData.history
            break;
          }

          //滑动插件初始化
          that.$nextTick(function(){
            that.scroll=new BScroll(that.$refs.contList,{
              click:true
            })
          });
          that.showLoading=false
        },1600)
      },
      /**
       * 获取li元素的背景颜色
       * @param  {[number]} index [li元素的索引]
       * @return {[type]}       [description]
       */
      getColor:function(index){
        let leng=this.colors.length;
        let color_index=(leng+index)%leng;
        return this.colors[color_index]
      }

    },
    components:{
      Loading
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .contentTransition-enter-active, .contentTransition-leave-active
    transition:all 1s
  .contentTransition-enter, .contentTransition-leave-to
    transform:translateX(100%);
  .content
    margin:0 auto
  .content-wrapper
    padding-top:0.5rem
    font-size:0.2rem
    width:100%
    box-sizing: border-box;
    .list-wrapper
      padding:0.1rem 0.1rem
      height:5rem
      overflow: hidden;
      li
        border:1px solid #e1e1e1
        font-size: 0.16rem
        padding:0.1rem
        color:rgba(0,0,0,0.7)
        margin-bottom:0.08rem
        text-indent:0.32rem
        border-radius:8px
        .content-title
          font-size:0.2rem
          text-indent: 0
          font-weight: bold;
        .content-data
          font-size:0.18rem
          text-indent:0
          margin-top:0.14rem
          line-height: 150%
      li:last-child
        margin-bottom:0


</style>
