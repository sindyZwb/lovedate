<template>
  <div>
    <div class="page page_profile clearfix">
      <div class="profile_header">
        <div class="head_avatar">
          <img class="head_img" :src="persionInfo.b57">
          <div class="check_status" v-if="persionInfo.b142 !== 1">{{persionInfo.b142 == 2 ? "待审核" : persionInfo.b142 == 3 ? "未通过": ''}}</div>
        </div>
        <div class="info_box">
          <div class="name" :class="{name_huangguan: persionInfo.b144 == 1}">
            <span>{{persionInfo.b52}}</span>
            <img src="../../assets/images/huangguan.png" v-if="persionInfo.b144 == 1">
          </div>
          <div class="status"></div>
          <div class="info"><span>我的资料</span> <div class="info_degree">完善度<span></span></div></div>
        </div>
      </div>
      <div class="profile_album">
        <ul class="ablum_list">
          <li class="addImg"><img src="../../assets/images/add_img.png"></li>
          <li class="ablum_item" v-for="item in ablumList"><img :src="item.b58"></li>
        </ul>
      </div>
      <div class="profile_classify">
        <div class="classify_item vip ">
          <div class="classify_cont">
            <img class="classify_icon" src="../../assets/images/profile_vip.png">
            <router-link to="/profilevipprovilege">
              <div class="classify_describe">
                <div class="name">会员特权</div>
                <div class="open_vip" v-if="!vipTime">立即开通</div>
                <div class="time" v-if="vipTime">到期时间: <span>{{vipTime}}</span></div>
              </div>
            </router-link>
          </div>
          <div class="line"></div>
        </div>
        <div class="classify_item phone clearfix">
          <div class="classify_cont">
            <img class="classify_icon" src="../../assets/images/profile_phone.png">
            <router-link to="/profilephone">
              <div class="classify_describe">
                <div class="name">手机认证</div>
                <div class="to_auth" v-if="!persionInfo.b81">立即认证</div>
                <div class="value" v-if="persionInfo.b81">手机号: <span>{{persionInfo.b81}}</span></div>
              </div>
            </router-link>
          </div>
          <div class="line"></div>
        </div>
        <div class="classify_item friend clearfix">
          <div class="classify_cont classify_cont2">
            <router-link to="/profilefriendcondition">
              <img class="classify_icon" src="../../assets/images/profile_friend.png">
              <div class="classify_describe">
                <div class="name name2">择友条件</div>
              </div>
            </router-link>
          </div>
          <div class="line"></div>
        </div>
        <div class="classify_item visiter clearfix">
          <div class="classify_cont">
            <router-link to="/profilevisiter">
              <img class="classify_icon" src="../../assets/images/profile_visiter.png">
              <div class="classify_describe">
                <div class="name">最近访客</div>
                <div class="value">访客数<span>{{visiterNum}}</span>位</div>
              </div>
            </router-link>
          </div>
          <div class="line"></div>
        </div>
        <div class="classify_item lover clearfix">
          <div class="classify_cont classify_cont2">
            <router-link to="/profilelover">
              <img class="classify_icon" src="../../assets/images/profile_lover.png">
              <div class="classify_describe">
                <div class="name name2">我喜欢的人</div>
              </div>
            </router-link>
          </div>
          <div class="line"></div>
        </div>
        <div class="classify_item loveme clearfix">
          <div class="classify_cont">
            <router-link to="/profileloveme">
              <img class="classify_icon" src="../../assets/images/profile_loveme.png">
              <div class="classify_describe">
                <div class="name name2">喜欢我的人</div>
                <div class="value"><span>{{persionInfo.b200 ? persionInfo.b200 : 0 }}</span>位</div>
              </div>
            </router-link>
          </div>
          <div class="line"></div>
        </div>
        <div class="classify_item  clearfix">
          <router-link to="/information">
            <div class="classify_cont classify_cont2">
              <img class="classify_icon" src="../../assets/images/profile_icon.png">
              <div class="classify_describe">
                <div class="name name2">账号与安全</div>
              </div>
            </div>	
          </router-link>
          <div class="line"></div>
        </div>
        <div class="classify_item  clearfix">
          <div class="classify_cont classify_cont2">	
            <router-link to="/feedback">
              <img class="classify_icon" src="../../assets/images/profile_icon_yjfk.png">
              <div class="classify_describe">
                <div class="name name2">意见反馈</div>
              </div>
            </router-link>
          </div>	
          <div class="line"></div>
        </div>
        <div class="classify_item  clearfix">
          <div class="classify_cont classify_cont2">
            <router-link to="/about">
              <img class="classify_icon" src="../../assets/images/about.png">
              <div class="classify_describe">
                <div class="name name2">关于我们</div>
              </div>
            </router-link>
          </div>	
          <div class="line"></div>
        </div>
        <div class="classify_item  clearfix J_updateApp" style="display: none">
          <div class="classify_cont classify_cont2  ">
            <router-link to="/download">
              <img class="classify_icon" src="../../assets/images/profile_icon_sjkhd.png">
              <div class="classify_describe">
                <div class="name name2">升级成客户端</div>
              </div>
            </router-link>
          </div>	
          <div class="line"></div>
        </div>
        <div class="classify_item loginout clearfix " >
          <div class="classify_cont classify_cont2  ">
            <img class="classify_icon" src="../../assets/images/loginout.png">
            <div class="classify_describe">
              <div class="name name2">退出登录</div>
            </div>
          </div>	
          <div class="line"></div>
        </div>
      </div>
    </div>
    <v-footer :footerindex = "4"></v-footer>
  </div>
</template>

<script>
  import footer from '../footer/footer.vue'
  import {transResult} from '../../common/js/transresult'
  export default {
    props: {
      footerindex: {
        type: Number
      }
    },
    components: {
      'v-footer': footer
    },
    data () {
      return {
        'persionInfo': '',
        'ablumList': [],
        'visiterNum': 0,
        'vipTime': ''
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
      console.log(111)
      const jsonData = {
        p1: p1,
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
        m18: 'com.yue.wap'
      }
      this.$http.get('http://192.168.0.122:8080/lp-bus-msc/f_108_13_1.service', { 'params': jsonData }).then((response) => {
        response.bodyText.then((response) => {
          const res = transResult(response)
          console.log(res)
          if (res.code === 1002) {
            this.$router.push('/login')
          } else {
            const data = res.body
            console.log(data)
            this.persionInfo = data.b112
            this.ablumList = data.b113
          }
        })
      }, (err) => {
        console.log(err)
      })
      this.$http.get('http://192.168.0.122:8080/lp-search-msc/f_109_12_1.service', { 'params': jsonData }).then((response) => {
        response.bodyText.then((response) => {
          const res = transResult(response)
          console.log(res)
          if (res.code === 1002) {
            this.$router.push('/login')
          } else {
            const data = res.body
            console.log(data)
            this.visiterNum = data.b15 || 0
          }
        })
      }, (err) => {
        console.log(err)
      })
      this.$http.get('http://192.168.0.122:8080/lp-search-msc/f_115_22_1.service', { 'params': jsonData }).then((response) => {
        response.bodyText.then((response) => {
          const res = transResult(response)
          console.log(res)
          if (res.code === 1002) {
            this.$router.push('/login')
          } else {
            const data = res.body
            console.log(data)
            this.vipTime = data && data.b140 && data.b140[0] && data.b140[0].b136.split(' ')[0]
          }
        })
      }, (err) => {
        console.log(err)
      })
    }

  }
</script>

<style>
/* page_profile */
.page_profile{
	font-size: 0;
}
.profile_header{
	height: 2.8rem;
	width: 100%;
	background: #19191b;
}
.profile_header .head_img{
	height: 1.6rem;
	width: 1.6rem;
	border-radius: 50%;
  margin-left: 0;
}
.profile_header .head_avatar{
	position: relative;
	height: 1.6rem;
    width: 1.6rem;
    margin-left: 0.2rem;
	margin-top: 0.6rem;
	float: left;
}
.profile_header .head_avatar .check_status{
	font-size: .24rem;
    height: .4rem;
    line-height: .4rem;
    text-align: center;
    opacity: .5;
    color: #ffffff;
    background: black;
    position: absolute;
    bottom: 0;
    left: 0;
    border-radius: 0 0 0.1rem 0.1rem;
    width: 100%;
}
.profile_header .info_box{
	margin-top: 0.76rem;
	margin-left: 0.4rem;
	float: left;
}
.profile_header .name,.profile_header .name span{
	font-size: 0.32rem;
	height: .32rem;
	color: #ffffff;
	display: inline-block;
}
.profile_header .name img{
	display: none;
}
.profile_header .status{
	font-size: 0.24rem;
	height: .24rem;
	color: #aaaaaa;
	margin-top: 0.16rem;
}
.profile_header .info{
	font-size: 0.26rem;
	height: .26rem;
	color: #ffffff;
	margin-top: 0.2rem;
}
.profile_header .info .info_degree{
    font-size: 0.22rem;
    border: 1px solid #ffffff;
    height: 0.4rem;
    line-height: 0.4rem;
    width: 1.8rem;
    text-align: center;
    border-radius: 2rem;
    display: inline-block;
}
.profile_album{
	width: 100%;
	/*height: 2rem;*/
	background: #312837;
	margin-top: 0.2rem;
}
.profile_album .ablum_list{
	list-style: none;
	height: 2rem;
	overflow: hidden;
}
.profile_album .ablum_item{
	display: inline-block;
	margin-top: 0.2rem;
	margin-bottom: 0.2rem;
	margin-left: 0.22rem;
}
.profile_album .addImg{
	display: inline-block;
	margin-top: 0.2rem;
	margin-bottom: 0.2rem;
	margin-left: 0.22rem;
}
.profile_album .ablum_item img,.profile_album .addImg img{
	width: 1.6rem;
	height: 1.6rem;
	border-radius: 0.1rem;

}
.profile_classify{
	margin-top: 0.2rem;
}


.profile_classify .classify_item {
	width:49%;
	float: left;
}
.profile_classify .classify_item .classify_cont{
	height: 1rem; 
	margin:0.3rem 0 0;	
}
.profile_classify .classify_item .classify_cont2{
	margin-top:0.4rem;
	height: .9rem;
}

.profile_classify .classify_item .line{
	background:  #3b3142;
	height: 1px;
	font-size: 0;
	clear: both;
	width: 3rem;
	margin:.3rem auto 0;
}
.profile_classify .classify_cont a{
	display: block;
	width: 100%;
	height: 1rem;
}
.profile_classify .classify_item:nth-of-type(even) .classify_cont{
	border-left: 1px solid #3b3142;
}
.profile_classify .classify_icon{
	width: 0.78rem;
	height: 0.78rem;
	margin-left: 0.001rem;
	/*margin-top: 0.4rem;*/
	float: left;
}
.profile_classify .classify_describe{
	float: left;
	/*
	margin-top: 0.4rem;*/
}
.profile_classify .name{
	font-size: 0.25rem;
	color: #ffffff;
}
.profile_classify .time{
	font-size: 0.24rem;
	margin-top: 0.26rem;
	color: #aaaaaa;
}
.profile_classify .value{
	font-size: 0.24rem;
	margin-top: 0.26rem;
	color: #aaaaaa;
}
.profile_classify .open_vip,.profile_classify .to_auth{
	font-size: 0.24rem;
	margin-top: 0.26rem;
	color: #e43f3f;
	display: none;
}
.profile_classify .name2{
	margin-top: 0.2rem;
}
.profile_classify .name2 a{
	color: #fff;
}
.name_huangguan,.profile_header .name_huangguan span{
	color: #e43f3f;
}

.name_huangguan img{
	width: .36rem;
	height: .36rem;
	margin-left: .1rem;
	vertical-align: top;
}
.profile_header .name_huangguan img{
	float: right;
	display: block;
}
</style>
