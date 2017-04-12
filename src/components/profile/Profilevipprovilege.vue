<template>
    <div>
        <div class="header_back">
            <img src="../../assets/images/back.png">
        </div>
        <div class="hot-show vip_banner">
            <swiper :options="swiperOptionIn" >
              <swiper-slide v-for="item in bannerList">
                <img :src="item.b181"  width="100%" height="100%" @click="jump(item.b183)">
              </swiper-slide>
              <div class="swiper-pagination-white swiper-pagination-position" slot="pagination"></div>
            </swiper>
        </div>
        <div class="package_title">超值套餐</div>
        <div class="package">
            <div class="package_item" v-for="item in vipPackage" :data-goodscode="item.b13" :data-price="item.b126" :data-discountprice="item.b126 | discountprice(item.b128)">
                <img src="../../assets/images/huangguan.png">
                <div class="package_name">{{item.b51}}</div>
                <div><span>￥</span>{{item.b126}}</div>
                <div><span>{{item.b48}}</span><span>{{item.b138 ? '送'+ item.b138 + '个月会员' : ''}}</span></div>
                <div class="buy_btn">购买</div>
            </div>
        </div>
        <div class="provilege_title">VIP会员特权</div>
        <div class="provilege">
            <div class="provilege_item">
                <img src="../../assets/images/vip_right1.png">
                <div>无限制看异性相册</div>
            </div>
            <div class="provilege_item">
                <img src="../../assets/images/vip_right2.png">
                <div>查看用户微信、QQ、手机号</div>
            </div>
            <div class="provilege_item">
                <img src="../../assets/images/vip_right3.png">
                <div>查看最近访客，全面了解关注我的人</div>
            </div>
            <div class="provilege_item">
                <img src="../../assets/images/vip_right4.png">
                <div>无限制给异性发消息</div>
            </div>
        </div>
        <div class="message">
            <div id="awarde-wrapper">
                  <Marquee :duration="600" :interval="500" :direction="down" v-if="awardeList.length">
                    <div v-for="item in awardeList" :content="item.b52" class="awarde-item"> 
                      <span class="name">[{{item.b52}}]</span>刚刚获得了100元话费
                    </div>
                  </Marquee>
            </div>
            <div class="convert_btn">兑换话费</div>
        </div>
    </div>
</template>
<script>
  import {swiper, swiperSlide} from 'vue-awesome-swiper'
  import {transResult} from '../../common/js/transresult'
  import Marquee from '../common/Marquee'
  // import {Marquee} from 'vue-marquee'
  export default {
    data () {
      return {
        swiperOptionIn: {
          pagination: '.swiper-pagination-white',
          paginationClickable: true,
          autoplay: 3000
        },
        bannerList: [],
        awardeList: [],
        vipPackage: [],
        down: 'up'
      }
    },
    filters: {
      discountprice (price, discount) {
        return (Number(price) * (Number(discount) * 10) / 100).toFixed(2)
      }
    },
    components: {
      swiper,
      swiperSlide,
      Marquee
    },
    created () {
      const p2 = localStorage.getItem('userId')
      const p1 = localStorage.getItem('sessionId')
      console.log(111)
      this.$http.get('http://192.168.0.122:8080/lp-search-msc/f_135_10_1.service', { 'params': { p1: p1,
        p2: p2,
        m3: 'f2db3f54-70e2-426c-b4da-ad70ab479e14',
        m2: 'f2db3f54-70e2-426c-b4da-ad70ab479e14',
        m1: 'f2db3f54-70e2-426c-b4da-ad70ab479e14',
        m4: '爱约会',
        m5: 1000,
        m6: '1.0.0.0',
        m7: 3,
        m11: '',
        m16: 1999,
        m18: 'com.yue.wap' }}).then((response) => {
          response.bodyText.then((response) => {
            const res = transResult(response)
            console.log(res)
            if (res.code === 1002) {
              this.$router.push('/login')
            } else {
              const data = res.body
              this.bannerList = data
              this.loading = false
              console.log(data)
            }
          })
        }, (err) => {
          console.log(err)
        })
      this.$http.get('http://192.168.0.122:8080/lp-search-msc/f_115_12_1.service', { 'params': { p1: p1,
        p2: p2,
        a78: 1,
        a188: 1,
        m3: 'f2db3f54-70e2-426c-b4da-ad70ab479e14',
        m2: 'f2db3f54-70e2-426c-b4da-ad70ab479e14',
        m1: 'f2db3f54-70e2-426c-b4da-ad70ab479e14',
        m4: '爱约会',
        m5: 1000,
        m6: '1.0.0.0',
        m7: 3,
        m11: '',
        m16: 1999,
        m18: 'com.yue.wap' }}).then((response) => {
          response.bodyText.then((response) => {
            const res = transResult(response)
            console.log(res)
            if (res.code === 1002) {
              this.$router.push('/login')
            } else {
              const data = res.body
              this.vipPackage = data && data[0] && data[0].b111
              console.log(data, 333333)
            }
          })
        }, (err) => {
          console.log(err)
        })
      this.$http.get('http://192.168.0.122:8080/lp-search-msc/f_108_23_1.service', { 'params': { p1: p1,
        p2: p2,
        m3: 'f2db3f54-70e2-426c-b4da-ad70ab479e14',
        m2: 'f2db3f54-70e2-426c-b4da-ad70ab479e14',
        m1: 'f2db3f54-70e2-426c-b4da-ad70ab479e14',
        m4: '爱约会',
        m5: 1000,
        m6: '1.0.0.0',
        m7: 3,
        m11: '',
        m16: 1999,
        m18: 'com.yue.wap' }}).then((response) => {
          response.bodyText.then((response) => {
            const res = transResult(response)
            console.log(res)
            if (res.code === 1002) {
              this.$router.push('/login')
            } else {
              const data = res.body
              this.awardeList = data
              console.log(data)
            }
          })
        }, (err) => {
          console.log(err)
        })
    }
  }
</script>

<style>
  .vip_banner{
	width: 100%;
	
}
.package_title{
	font-size: .28rem;
	color: #aaaaaa;
	background: #241b2a;
	height: .4rem;
	line-height: .4rem;
	margin-top: .2rem;
	margin-left: .2rem;
}
.package{
	font-size: 0;
	color: #ffffff;
	background: #312837;
}
.package_item{
	height: .96rem;
	line-height: .96rem;
	overflow: hidden;
}
.package_item img{
	float: left;
	width: .48rem;
	line-height: .48rem;
	margin-top: .24rem;
	margin-left: .1rem;
}
.package_item div:nth-child(2){
	float: left;
	font-size: .26rem;
	margin-left: .1rem;
	width: 1.8rem;
}
.package_item div:nth-child(3){ 
	float: left;
	font-size: .26rem;
	margin:0 .2rem 0 .2rem;
	width: 1rem;
}
.package_item div:nth-child(3) span{
	font-size: .3rem;
	/*margin-left: 1.5rem;*/

}
.package_item div:nth-child(4) {
	float: left;
	font-size: .26rem;
	width: 2.2rem;
	position: relative;
	height: .96rem;
}
.package_item div:nth-child(4) span{
	width: 2.2rem;
	line-height: .4rem;
	display: block;
	color: #e43f3f;
	position: absolute;
    left: 50%;
    top: 50%;
    transform: translateX(-50%) translateY(-50%);
    -ms-transform: translateX(-50%) translateY(-50%);
    -moz-transform: translateX(-50%) translateY(-50%);
    -webkit-transform: translateX(-50%) translateY(-50%);
}
.package_item div:nth-child(5){ 
	font-size: .28rem;
	width: 1rem;
	height: .5rem;
	line-height: .5rem;
	background: #e43f3f;
	text-align: center;
	float: right;
	margin-right: .4rem;
	margin-top: .23rem;
	border-radius: 2rem;
}
.provilege_title{
	font-size: .28rem;
	color: #aaaaaa;
	background: #241b2a;
	height: .4rem;
	line-height: .4rem;
	margin-top: .2rem;
	margin-left: .2rem;
}
.provilege{
	font-size: 0;
	color: #ffffff;
	background: #312837;
}
.provilege_item{
	height: .64rem;
	line-height: .64rem;
}
.provilege_item img{
	float: left;
	width: .36rem;
	height: .36rem;
	margin-left: .4rem;
	margin-top: .14rem;
}
.provilege_item div{
	float: left;
	font-size: .28rem;
	margin-left: .3rem;
}
.message{
	font-size: .28rem;
	color: #ffffff;
}

.message .awarde-item{
	height: .48rem;
  line-height: .48rem;
}
.message .awarde-item .name{
	color: #e43f3f;
	margin-left: .2rem;
}
.message .convert_btn{
	font-size: .32rem;
	height: .6rem;
	line-height: .6rem;
	text-align: center;
	width: 3rem;
	margin: auto;
	margin-top: .6rem;
	background: #e43f3f;
	border-radius: 2rem;
	margin-bottom: .2rem;
}
.swiper-position {
  position: relative;
  cursor: pointer;
}
.recommand-swiper-img {
  width: 100%;
  display: block;
}
.swiper-pagination-position {
  position: absolute;
  z-index: 1;
  display: flex;
  flex-direction: row;
  justify-content: center;
}
#awarde-wrapper{
	margin-top: .8rem;
	width: 100%;
	height: 2.9rem;
	overflow: hidden;
}
.awardeList {
  height: 2.9rem;
  overflow: hidden;
}
</style>
