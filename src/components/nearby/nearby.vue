<template>
  <div>
    <div class="page page_nearby">
      <div class="nearby_info" style="display:none">你现在<span class="position"></span>下面的<span class="sex"></span>最近在你附近出没过，赶紧给<span class="baby"></span>们打个招呼</div>
      <ul class="nearby_person_list"  v-show="nearByPersonList && nearByPersonList.length > 0">
        <li v-for="item in nearByPersonList" class="person_item"  :data-id="item.b80" :data-robot="item.b216 == 1 ? true : false">
          <router-link v-bind:to="{path: 'detail', query: {id: item.b80, isrobot: item.b216}}">
            <div class="box">
              <img class="head_img" :src="item.b57">
              <div class="content">
                <div class="name " :class="{name_huangguan: item.b144 == 1}">
                  {{item.b52 ? item.b52 : ''}}
                  <img src="../../assets/images/huangguan.png" v-if="item.b144 == 1">
                </div>
                <div class="info">
                  {{item.b1 ? item.b1 + "岁" : ""}}
                  .
                  {{item.b33 ? item.b33 + "cm" : ""}}
                  </div>
              </div>
              <div class="status">
                <div class="time" v-if="item.b94"><img src="../../assets/images/position.png">
                  <span>
                  {{item.b94 | toKilUint}}km</span>
                  </div>
                <div class="is_read"><span class="read"></span><span  class="J_greet">打招呼</span></div>
              </div>
            </div>
            <div class="border"></div>
          </router-link>
          </li>
      </ul>
      <ul class="nearby_person_list" v-show="!loading && nearByPersonList.length == 0">
        <li class="no-person">
          <img src="../../assets/images/gps.png" alt="" />
          <p>你的身边，可以有很多人</p>
          <div class="btn J_openGps">打开定位</div>
        </li>
      </ul>
    </div>
    <v-footer :footerindex="3"></v-footer>
  </div>
</template>

<script>
  import Footer from '../footer/Footer.vue'
  import {transResult} from '../../common/js/transresult'
  export default {
    components: {
      'v-footer': Footer
    },
    props: {
      footerindex: {
        type: Number
      }
    },
    data () {
      return {
        'nearByPersonList': [],
        'loading': true
      }
    },
    filters: {
      toKilUint: function (value) {
        return value ? (value / 1000).toFixed(1) > 0.1 ? (value / 1000).toFixed(1) : '0.1' : '0.1'
      }
    },
    created () {
      const p2 = localStorage.getItem('userId')
      const p1 = localStorage.getItem('sessionId')
      const sex = localStorage.getItem('sex')
      console.log(111)
      this.$http.get('http://192.168.0.122:8080/lp-search-msc/f_108_20_1.service', { 'params': { p1: p1,
        p2: p2,
        a69: sex,
        a9: 330100,
        a67: 330000,
        a38: 120.15507,
        a40: 30.274085,
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
              this.nearByPersonList = data
              this.loading = false
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
/* page_nearby */
.page_nearby,.page_recommend{
	font-size: 0;
	box-sizing:border-box;
	-moz-box-sizing:border-box; /* Firefox */
	-webkit-box-sizing:border-box;
}
.page_nearby .nearby_info{
	font-size: 0.3rem;
	color: #ffffff;
	text-align: center;
}

.page_nearby .position{
	color: #e43f3f;
	margin-left: 0.22rem;
	margin-right: 0.22rem;
	/*height: 0.8rem;*/
	line-height: 0.4rem;
}
.nearby_person_list .no-person{
	margin-top: 1rem;
}
.nearby_person_list .no-person img{
	width: 4rem;
	height: 4rem;
	margin:0 auto;
	display: block;
}
.nearby_person_list .no-person p{
	font-size: .3rem;
	color: #fff;
	margin-top: .4rem;
	text-align: center;
}
.nearby_person_list .no-person .btn{
	width: 3.5rem;
	height: .8rem;
	text-align: center;
	line-height: .8rem;
	color: #fff;
	font-size: .32rem;
	background: #e43f3f;
	border-radius: 20px;
	margin: .6rem auto 0;
}
.nearby_person_list {
	margin-top: 0.2rem;	
}
.nearby_person_list .person_item{
	padding-top: 0.2rem;
	height: 1.8rem;
	box-sizing:border-box;
	-moz-box-sizing:border-box; /* Firefox */
	-webkit-box-sizing:border-box; /* Safari */
}
.nearby_person_list .box{
	overflow: hidden;
}
.nearby_person_list .head_img{
	width: 1.4rem;
	height: 1.4rem;
	border-radius: 0.1rem;
	/*display: inline-block;*/
	/*vertical-align: top;*/
	float: left;
  margin:0;
}
.nearby_person_list .content{
	margin-left: 0.3rem;
	margin-top: 0.2rem;
	color: #ffffff;
	float: left;
}
.nearby_person_list .name{
	font-size: 0.32rem;
	height: .32rem;
}
.nearby_person_list .name_huangguan img{
  width:.3rem;
  height: .3rem;
  vertical-align: top;
}
.nearby_person_list .info{
	margin-top: 0.42rem;
	font-size: 0.26rem;
	height: .26rem;
}
.nearby_person_list .status{
	margin-top: 0.2rem;
	float: right;
}
.nearby_person_list .time{
	font-size: 0;
}
.nearby_person_list .time img{
	width: 0.36rem;
	height: 0.36rem;
	vertical-align: middle;
}
.nearby_person_list .time span{
	font-size: 0.26rem;
	color: #ffffff;
	vertical-align: middle;
	margin-left: 0.1rem;
}
.nearby_person_list .is_read{
	margin-top: 0.26rem;
}
.nearby_person_list .person_item .is_read .read{
	width: 0.36rem;
	vertical-align: middle;
	height: 0.36rem;
	background: url(../../assets/images/greet_nearby.png);
	background-size: cover;
	display: inline-block;
}
.nearby_person_list .person_item .is_read span,.nearby_person_list .person_item .is_read a{
	font-size: 0.26rem;
	margin-left: 0.1rem;
	vertical-align: middle;
	color: #fda1a1;
}
.nearby_person_list .person_item.active .is_read .read{
	background: url(../../assets/images/black_nearby.png);
	background-size: cover;
}
.nearby_person_list .person_item.active .is_read span,.nearby_person_list .person_item.active .is_read a{
	color: #aaa;
}
.nearby_person_list .border{
	margin-left: 1.7rem;
	margin-top: 0.2rem;
	border-bottom: 1px solid #3b3142;
}
.nearby_greet_btn,.nearby_greet_btn_index{
	font-size: 0.32rem;
	color: #ffffff;
	width: 5.5rem;
	height: 0.8rem;
	line-height: 0.8rem;
	background: #e43f3f;
	position: fixed;
	bottom: 1.28rem;
	border-radius: 2rem;
	text-align: center;
	margin-left: 0.8rem;
}
</style>
