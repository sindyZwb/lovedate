<template>
    <div v-if="albulmbigoptions.isShow">
        <div class="bigPicBg"></div>
        <div class="bigPicBox">
            <div class="bigPicCounter">{{curIndex}}/{{albulmbigoptions.imgList.length}}</div>
            <img class="closeBtn" src="../../assets/images/closeBtn.png" @click="close">
            <img class="delBtn" src="../../assets/images/delBtn.png"  @click="deleteImg" v-if="albulmbigoptions.showDel">
            <div class="bigPicLists">
              <swiper :options="swiperOptionIn" class="swiper-position"  ref="mySwiper">
                <swiper-slide v-for="item in albulmbigoptions.imgList">
                  <div class="bigPicItem" :style='{height : itemHeight}'>
                    <img class="bigPicItemImg" :src="item.b58" >
                  </div>
                </swiper-slide>
                <div class="swiper-pagination-white swiper-pagination-position" slot="pagination"></div>
              </swiper>
            </div>
        </div>
    </div>
</template>
<script>
  import {swiper, swiperSlide} from 'vue-awesome-swiper'
  export default {
    components: {
      swiper,
      swiperSlide
    },
    props: ['albulmbigoptions'],
    data () {
      return {
        curIndex: 1,
        itemHeight: 'auto',
        swiperOptionIn: {
          initialSlide: 0,
          loop: true,
          onSlideChangeEnd: swiper => {
            this.curIndex = swiper.realIndex + 1
          }
        }
      }
    },
    watch: {
      albulmbigoptions (value, oldValue) {
        console.log(value)
      }
    },
    created () {
      this.itemHeight = document.documentElement.clientHeight + 'px'
      // console.log(this.itemHeight, 122334)
    },
    methods: {
      close () {
        this.albulmbigoptions.isShow = false
      },
      deleteImg () {
        this.albulmbigoptions.delFn()
      }
    }
  }
</script>

<style>
.bigPicBg {
    width: 100%;
    height: 100%;
    background: #000000;
    position: fixed;
    z-index: 1009;
    left: 0;
    top: 0;
    overflow: hidden;
    font-size: 0;
}
.bigPicBox{
  z-index: 1010;
  position: absolute;
  left: 0;
  top: 0;
  width:100%;
  height: 100%;
}
.bigPicCounter{
    position: absolute;
    bottom: .4rem;
    left: .4rem;
    height: .5rem;
    line-height: .5rem;
    width: 1rem;
    background: #000000;
    text-align: center;
    color: #ffffff;
    opacity: 0.5;
    font-size: .36rem;
    z-index: 1000;
}
.closeBtn{
    z-index:1011;
    position:absolute;
    right: .2rem;
    top: .2rem;
    width: .48rem;
    height: .48rem;
}
.delBtn{
    z-index:1011;
    position:absolute;
    left: .2rem;
    top: .2rem;
    width: .48rem;
    height: .48rem;
}
.bigPicLists{
    width: 100%;
    margin: 0;
    padding: 0;
    position: absolute;
    left: -0px;
    top: 0;
    height: 100%;
}
.bigPicLists .bigPicItem{
    transform-origin: 0% 0% 0px;
    transform: scale3d(1, 1, 1) translate3d(0px, 0px, 0px);
    width: 100%;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    background: #000;
}
.bigPicLists .bigPicItemImg{
    max-width: 100%;
    max-height: 100%;
}
</style>
