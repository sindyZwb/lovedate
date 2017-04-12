<template>
    <div>
        <div class="header_back">
          <img src="../../assets/images/back.png">
        </div>
        <ul class="person_lists visiter_list" >
            <li class="person_item" :data-id="item.b80" v-for="item in visiterList" >
                <router-link v-bind:to="{path: 'detail', query: {id: item.b80, isrobot: item.b216}}">
                  <div class="box">
                      <img class="head_img" :src="item.b57">
                      <div class="content">
                          <div class="name" :class="{name_huangguan: item.b144 == 1}">
                              <span>{{item.b52}}</span><img src="../../assets/images/huangguan.png" v-if="item.b144 == 1"  />
                          </div>
                          <div class="info">{{item.b1 ? item.b1 + "岁": ''}} {{item.b1 && item.b33 ? "|" : ''}} {{item.b33 ? item.b33 + 'cm' : ''}}{{(item.b67 || item.b9) && (item.b1 || item.b33) ? " | " : ""}}{{item.b67 | filterProvince}} {{item.b9 | filterCity(item.b67)}} </div>
                          <div class="time">到访时间：<span>{{item.b16 ? item.b16 : ''}}</span></div>
                      </div>
                      <img class="right" src="../../assets/images/right.png">
                  </div>
                  <div class="border"></div>
                </router-link>
            </li>
        </ul>
    </div>
</template>
<script>
import {transResult} from '../../common/js/transresult'
import province from '../../common/data/province.json'

export default {
  data () {
    return {
      'visiterList': [],
      'loading': true
    }
  },
  methods: {
  },
  filters: {
    filterCity: function (cId, pId) {
      var returnName = ''
      console.log(cId, pId)
      province.body.forEach(function (value, index) {
        if (pId === value.provinceId) {
          (value.cityList).forEach(function (v, i) {
            if (cId === v.cityId) {
              returnName = v.cityName
            }
          })
        }
      })
      return returnName
    },
    filterProvince: function (id) {
      var returnName = ''
      province.body.forEach(function (value, index) {
        if (id === value.provinceId) {
          returnName = value.provinceName
        }
      })
      return returnName
    }
  },
  created () {
    const p2 = localStorage.getItem('userId')
    const p1 = localStorage.getItem('sessionId')
    console.log(111)
    this.$http.get('http://192.168.0.122:8080/lp-search-msc/f_109_10_1.service', { 'params': { p1: p1,
      p2: p2,
      a78: 2,
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
            this.visiterList = data
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
.visiter_list .person_lists{
	list-style: none;
}
.visiter_list .person_item{
	height: 1.6rem;
}
.visiter_list .person_item a{
	display: block;
}
.visiter_list .box{
	overflow: hidden;
}
.visiter_list .head_img{
	float: left;
	margin-left: .2rem;
	width: 1.2rem;
	height: 1.2rem;
	border-radius: .1rem;
}
.visiter_list .content{
	font-size: 0;
	float: left;
	margin-left: .2rem;
}
.visiter_list .name{
	font-size: .3rem;
	height: .3rem;
	color: #ffffff;
	margin-top: .06rem;
}
.visiter_list .name_huangguan{
	color: #e43f3f;
}
.visiter_list .name_huangguan span{
	/*vertical-align: middle;*/
}
.visiter_list .name_huangguan img{
	width: .36rem;
	height: .36rem;
	margin-left: .1rem;
	vertical-align: top;
}
.visiter_list .info{
	font-size: .24rem;
	color: #ffffff;
	margin-top: .13rem;
	height: .28rem;
	width: 4.5rem;
	white-space: nowrap;
	text-overflow:ellipsis; 
	overflow:hidden;
}
.visiter_list .time{
	font-size: .24rem;
	height: .24rem;
	color: #aaaaaa;
	margin-top: .13rem;
}
.visiter_list .right{
	display: block;
	float: right;
	width: .32rem;
	height: .32rem;
	margin-top: .44rem;
	margin-right: .2rem;
}
.visiter_list .border{
	margin-left: 1.6rem;
	margin-top: .2rem;
	border-bottom: 1px solid #3b3142;
}
.visiter_list .no_permission{
	font-size: 0;
	margin-top: .12rem;
	text-align: center;
}
.visiter_list .no_permission img{
	width: 4rem;
	height: 4rem;
}
.visiter_list .name_hint{
	font-size: .36rem;
	color: #ffffff;
}
.visiter_list .visiter_hint{
	font-size: .32rem;
	color: #ffffff;
	margin-top: .26rem;
}
.visiter_list .recent_days{
	color: #1c75bc;
}
.visiter_list .recent_visiter{
	color:#e43f3f;
	width: .4rem;
	display: inline-block;
}
.visiter_list .vip_box{
	width: 5.7rem;
	margin: auto;
	margin-top: 1rem;
	overflow: hidden;
}
.visiter_list .vip_sign{
	float: left;
	font-size: .32rem;
	margin: auto;
	color: #ffffff;
	width: .66rem;
	height: .38rem;
	line-height: .38rem;
	border-radius: 2rem;
	background: #D4CCDA;
	z-index: 2;
}
.visiter_list .border_left,.visiter_list .border_right{
	width: 2.48rem;
	border-bottom: 1px solid #3b3142;
	float: left;
	margin-top: .19rem;
}
.visiter_list .member_text.one{
	margin-top: .58rem;
}
.visiter_list .member_text{
	font-size: .28rem;
	line-height: .38rem;
	color: #ffffff;
}
.visiter_list .member_btn{
	font-size: .32rem;
	height: .8rem;
	line-height: .8rem;
	width: 5.5rem;
	background: #e43f3f;
	color: #ffffff;
	border-radius: 2rem;
	margin: auto;
	margin-top: .8rem;
}

.visiter_list .no_vister{
	font-size: 0;
	margin-top: 1.12rem;
	text-align: center;
}
.visiter_list .no_vister img{
	width: 4.8rem;
	height: 4.8rem;
}
.visiter_list .no_vister .to_btn{
	font-size: .32rem;
	color: #ffffff;
	width: 3rem;
	height: .8rem;
	line-height: .8rem;
	background: #e43f3f;
	border-radius: 2rem;
	margin: auto;
	margin-top: .8rem;
}
</style>

