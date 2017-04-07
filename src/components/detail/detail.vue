<template>
	<div>
    <div class="header_back">
      <img src="../../assets/images/back.png">
    </div>
    <div class="fontsize_0 overflow_hidden">
      <img class="head_img" :src="persionInfo.b57">
      <div class="head_info">
        <div class="name">{{persionInfo.b52}}</div>
        <div class="age_height_education"><span class="age">{{persionInfo.b1 ? persionInfo.b1 + '岁' : ''}}</span><span class="height">{{persionInfo.b33 ? persionInfo.b33 +'cm':''}}</span>
          <span class="education">{{persionInfo.b88 ? persionInfo.b88 + 'kg' :''}}</span>
        </div>
        <div class="address"><span class="province">{{persionInfo.b67 | filterProvince }}</span><span class="city">{{persionInfo.b9 | filterCity(persionInfo.b67)}}</span></div>
      </div>
    </div>
    <ul class="connect_btns">
      <li class="connect_btn love">
        <img src="../../assets/images/love.png">
        <span>
          {{isLove ? "喜欢":"已喜欢"}}
        </span>
      </li>
      <li class="connect_btn greet" data-robot="">
        <img src="../../assets/images/greet_hi.png">
        <span @click="greet()">打招呼</span>
      </li>
      <li class="connect_btn connect">
        <router-link to="/message">
          <img src="../../assets/images/write_message.png">
          写私信
        </router-link>
      </li>
    </ul>
    <div class="albums J_albums  clearfix" v-if="albums && albums.length > 0">
        <img :src="item.b60" v-for="item in albums">
    </div>
    <div class="gift" v-if="gifts && gifts.length > 0">
      <div class="gift-title">TA收到的礼物</div>
      <div class="gift-list clearfix">
        <div class="gift-wrapper">
          <div class="gift-item" v-for="item in gifts">
            <img :src="item.b35" alt="">
          </div>
        </div>
      </div>
    </div>
    <div class="tab-header">
      <div class="tab-list" :class="{active: tabIndex == 1}" @click="tab(1)">基本信息</div>
      <div class="tab-list" :class="{active: tabIndex == 2}" @click="tab(2)">私密信息</div>
    </div>
    <ul class="classify_infos"  v-show="tabIndex == 1" >
      <li class="classify_item" v-if="persionInfo.b17">
        <ul class="detail_lists">
          <li class="detail_header"><div class="front"></div>自我介绍</li>
          <li class="motto"><img src="../../assets/images/icon_wz.png">{{persionInfo.b17}}</li>
          <li class="motto clearfix" v-if="voiceIntro && voiceIntro.b218"><img src="../../assets/images/icon_yy.png"><div class="talk J_talk"><div class="talk_audio"><audio :src="voiceIntro.b218" controls="controls"></audio><span class="talk_icon"></span></div>
          <span class="time" v-if="voiceIntro.b187">{{voiceIntro.b187}}″</span></div>
          </li>
        </ul>
      </li>
      <li class="classify_item" v-if="persionInfo.b1 || persionInfo.b67 || persionInfo.b9 || persionInfo.b88 || persionInfo.b62 || persionInfo.b87 || persionInfo.b86">
        <ul class="detail_lists">
          <li class="detail_header">
            <div class="front"></div>详细资料</li>
          <li class="detail_item" v-if="persionInfo.b1">
            <img src="../../assets/images/info_age.png">
            <div class="key">年龄</div>
            <div class="value">{{persionInfo.b1?persionInfo.b1:'0'}}岁</div>
          </li>
          <li class="detail_item" v-if="persionInfo.b67 && persionInfo.b9">
            <img src="../../assets/images/info_address.png">
            <div class="key">居住地</div>
            <div class="value">{{persionInfo.b67 | filterProvince }}{{persionInfo.b9 | filterCity(persionInfo.b67) }}</div>
          </li>
          <li class="detail_item" v-if="persionInfo.b88">
            <img src="../../assets/images/info_weight.png">
            <div class="key">体重</div>
            <div class="value">{{persionInfo.b88?persionInfo.b88:'0'}}kg</div>
          </li>
          <li class="detail_item" v-if="persionInfo.b62">
            <img src="../../assets/images/info_job.png">
            <div class="key">职业</div>
            <div class="value" v-if="persionInfo.b62">{{persionInfo.b62 | filterEnum("profession_personal")}}</div>
            <div class="value" v-else>保密</div>
          </li>
          <li class="detail_item" v-if="persionInfo.b87 && persionInfo.b86">
            <img src="../../assets/images/info_income.png">
            <div class="key">月收入</div>
            <div class="value">{{persionInfo.b87 ? persionInfo.b87 : ""}}-{{persionInfo.b86 ? persionInfo.b86 : ''}}</div>
          </li>
        </ul>
      </li>
      <li class="classify_item" v-if="friendsStandard">
        <ul class="detail_lists">
          <li class="detail_header">
            <div class="front"></div>择友标准</li>
          <li class="detail_item" v-if="friendsStandard.b1">
            <img src="../../assets/images/info_age_to.png">
            <div class="key">年龄范围</div>
            <div class="value">{{friendsStandard.b1 ? friendsStandard.b1+'岁':'保密'}}</div>
          </li>
          <li class="detail_item" v-if="friendsStandard.b67 || friendsStandard.b9">
            <img src="../../assets/images/info_address_to.png">
            <div class="key">居住地</div>
            <div class="value"><b v-if="friendsStandard.b67">{{friendsStandard.b67 | filterProvince}}</b><b v-if="friendsStandard.b69">{{friendsStandard.b69 | filterCity(friendsStandard.b67)}}</b></div>
          </li>
          <li class="detail_item"  v-if="friendsStandard.b33">
            <img src="../../assets/images/info_height_to.png">
            <div class="key">身高</div>
            <div class="value">{{friendsStandard.b33}}</div>
          </li>
          <li class="detail_item"  v-if="friendsStandard.b19">
            <img src="../../assets/images/info_education_to.png">
            <div class="key">学历</div>
            <div class="value" v-if="persionInfo.b19">{{persionInfo.b19 | filterEnum("educationLevel")}}</div>
            <div class="value" v-else>保密</div>
          </li>
          <li class="detail_item"  v-if="friendsStandard.b85">
            <img src="../../assets/images/info_income_to.png">
            <div class="key">月收入</div>
            <div class="value">{{friendsStandard.b85}}</div>
          </li>
        </ul>
      </li>
    </ul>
    <ul class="classify_infos"  v-show="tabIndex == 2" >
      <li class="classify_item">
        <ul class="detail_lists">
          <li class="detail_header">
            <div class="front"></div>秘密照
          </li>
          <li class="detail-albums">
            <div class="albums J_albumsPrivate albums-private clearfix" v-if="albumsPrivate && albumsPrivate.length > 0">
              <div class="albums-wrapper">
                <div class="albums-item" v-for="item in albumsPrivate">
                  <img :src="item.b60"> 
                </div>
              </div>
            </div>
            <div class="no-photo" v-else>
              Ta有点腼腆，还没上传私密照片哦~
            </div>
          </li>
        </ul>
      </li>
      <li class="classify_item">
        <ul class="detail_lists">	
          <li class="detail_header">
            <div class="front"></div>秘密信息
          </li>
          <li class="detail_item">
            <div v-if="!isVip">
              <router-link to="/profilevipprovilege">
                <img src="../../assets/images/info_time.png">
                <div class="key">最近上线时间</div>
                <div class="value"><span>查看</span></div>
              </router-link>
            </div>
            <div v-else>
                <img src="../../assets/images/info_time.png">
                <div class="key">最近上线时间</div>
                <div class="value">{{persionInfo.b44}}</div>
            </div>
          </li>
          <li class="detail_item">
            <img src="../../assets/images/info_goal.png">
            <div class="key">交友目的</div>
            <div class="value" v-if="persionInfo.b194">{{persionInfo.b194 | filterEnum("dating_purpose") }}</div>
            <div class="value" v-else>保密</div>
          </li>
          <li class="detail_item">
            <img src="../../assets/images/info_lovevalue.png">
            <div class="key">恋爱观</div>
            <div class="value" v-if="persionInfo.b195">{{persionInfo.b195 | filterEnum("indulged") }}</div>
            <div class="value" v-else>保密</div>
          </li>
          <li class="detail_item">
            <img src="../../assets/images/info_firstmeet.png">
            <div class="key">首次希望见面</div>
            <div class="value" v-if="persionInfo.b196">{{persionInfo.b196 | filterEnum("meet_place") }}</div>
            <div class="value" v-else>保密</div>
          </li>
          <li class="detail_item">
            <img src="../../assets/images/info_loveaddress.png">
            <div class="key">喜欢爱爱的地点</div>
            <div class="value" v-if="persionInfo.b197">{{persionInfo.b197 | filterEnum("love_place") }}</div>
            <div class="value" v-else>保密</div>
          </li>
        </ul>
      </li>
      <li class="classify_item" id="weixin">
        <ul class="detail_lists">
          <li class="detail_header">
            <div class="front"></div>联系方式
          </li>
          <li class="detail_item">
            <div v-if="!isVip">
              <router-link to="/profilevipprovilege">
                <img src="../../assets/images/info_qq.png">
                <div class="key">QQ</div>
                <div class="value">
                  <span>查看</span>
                </div>
              </router-link>
            </div>
            <div v-else>
              <img src="../../assets/images/info_qq.png">
              <div class="key">QQ</div>
              <div class="value">
                {{persionInfo.b158 == 1 && persionInfo.b156 ? persionInfo.b156 : "保密" }}
              </div>
            </div>  
          </li>
          <li class="detail_item">
            <div v-if="!isVip">
              <router-link to="/profilevipprovilege">
                <img src="../../assets/images/info_wechat.png">
                <div class="key">微信</div>
                <div class="value">
                  <span>查看</span>
                </div>
              </router-link>
            </div>
            <div v-else>
              <img src="../../assets/images/info_wechat.png">
              <div class="key">微信</div>
              <div class="value">
                {{persionInfo.b159 == 1 && persionInfo.b157 ? persionInfo.b157 : "保密"}}
              </div>
            </div>
          </li>
          <li class="detail_item">
            <div v-if="isVip">
              <router-link to="/profilevipprovilege">
                <img src="../../assets/images/info_phone.png">
                <div class="key">手机</div>
                <div class="value">
                  <span>查看</span>
                </div>
              </router-link>
            </div>
            <div v-else>
              <img src="../../assets/images/info_phone.png">
              <div class="key">手机</div>
              <div class="value">
                {{persionInfo.b202 ? persionInfo.b202 : "保密" }}
              </div>
            </div>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
import {transResult} from '../../common/js/transresult'
import province from '../../common/data/province.json'
import enumJson from '../../common/data/enum.json'
export default {
  data () {
    return {
      persionInfo: '',
      isLove: false,
      personId: '',
      albums: [],
      gifts: [],
      voiceIntro: '',
      friendsStandard: '',
      tabIndex: 1,
      albumsPrivate: [],
      isVip: false
    }
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
    },

    filterEnum: function (code, key) {
      var returnValue = ''
      enumJson.body.forEach(function (value, index) {
        if (key === value.b20) {
          value.b98.forEach(function (v, i) {
            if (code.toString() === v.b22) {
              returnValue = v.b21
            }
          })
        }
      })
      return returnValue
    }
  },
  methods: {
    greet: function () {
      console.log(this.personId)
    },
    tab: function (index) {
      console.log(111)
      this.tabIndex = index
    },
    fetchData: function () {
      console.log(province)
      console.log(enumJson)
      console.log(this.$route)
      console.log(this.$route.query)
      const p2 = this.$route.query.id
      const p1 = localStorage.getItem('sessionId')
      this.personId = p2
      this.$http.get('http://192.168.0.122:8080/lp-bus-msc/f_108_13_1.service', { 'params': { p1: p1,
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
              if (data) {
                this.persionInfo = data.b112
                this.isLove = data.b116
                this.albums = data.b113
                this.gifts = data.b250
                this.voiceIntro = data.b221
                this.friendsStandard = data.b114
                this.albumsPrivate = data.b237
              }
            }
          })
        }, (err) => {
          console.log(err)
        })
    }
  },
  watch: {
    '$route': 'fetchData'
  },
  created () {
    this.fetchData()
  }
}
</script>

<style>
.head_img {
	float: left;
	height: 1.52rem;
	width: 1.52rem;
	margin-left: .4rem;
	border-radius: 50%;
}

.head_info {
	float: left;
	margin-left: .4rem;
	/* overflow: hidden; */
}

.name {
	font-size: .32rem;
	color: #ffffff;
	height: .32rem;
	margin-top: .1rem;
}

.age_height_education {
	font-size: .26rem;
	height: .26rem;
	color: #aaaaaa;
	margin-top: .26rem;
}

.address {
	font-size: .26rem;
	height: .26rem;
	color: #aaaaaa;
	margin-top: .26rem;
}

.connect_btns {
	list-style: none;
	font-size: 0;
	margin-top: .4rem;
	overflow: hidden;
	margin-bottom: .2rem;
}

.connect_btn {
	float: left;
	width: 33%;
	height: .8rem;
	line-height: .8rem;
	text-align: center;
}

.connect_btn img {
	width: .48rem;
	height: .48rem;
	vertical-align: middle;
}

.love span {
	font-size: .28rem;
	color: #f47272;
	vertical-align: middle;
	margin-left: .1rem;
}

.greet span,
.greet a {
	font-size: .28rem;
	color: #85d1ea;
	vertical-align: middle;
	margin-left: .1rem;
}

.connect span,
.connect a {
	font-size: .28rem;
	color: #ad8dd0;
	vertical-align: middle;
	margin-left: .1rem;
}

.albums {
	position: relative;
	background: #272728;
	overflow: hidden;
	padding: .15rem 0;
	white-space: nowrap;
	overflow-x: auto;
	height: 1.6rem;
}

.albums-wrapper {
	overflow-x: scroll;
	white-space: nowrap;
	width: auto;
	height: 1.6rem;
}
.albums-item{
	display: inline-block;
}

.albums .vip {
	width: 100%;
	height: 100%;
	text-align: center;
	font-size: .3rem;
	position: absolute;
	/*left: 50%;
    top: 50%;*/
	display: inline-block;
	z-index: 100;
	color: #fff;
	padding-top: .85rem;
	height: .9rem;
	/*transform:translateX(-50%) translateY(-50%);
	-ms-transform:translateX(-50%) translateY(-50%);
	-moz-transform:translateX(-50%) translateY(-50%); 
	-webkit-transform:translateX(-50%) translateY(-50%);
	-o-transform:translateX(-50%) translateY(-50%);*/
}

.albums .filter {
	-webkit-filter: blur(2px);
	-moz-filter: blur(2px);
	-ms-filter: blur(2px);
	filter: blur(2px);
}

.albums .opacity {
	width: 100%;
	height: 100%;
	position: absolute;
	background: rgba(190, 190, 190, .9);
	left: 0;
	top: 0;
	display: none;
}

.albums .btn {
	position: absolute;
	left: 0;
	top: 0;
	width: 100%;
}

.detail-albums .albums img,
.albums img {
	/*float: left;*/
	border-radius: 0;
	display: inline-block;
	width: 1.6rem;
	height: 1.6rem;
	margin-right: .2rem;
}

.tab-header {
	height: .98rem;
	line-height: .98rem;
	display: -moz-box;
	display: -webkit-box;
	display: box;
}

.tab-header .tab-list {
	text-align: center;
	font-size: .3rem;
	background: red;
	color: #979597;
	-moz-box-flex: 1;
	-webkit-box-flex: 1;
	box-flex: 1;
	background: #504955;
}

.tab-header .tab-list.active {
	background: #e43f3f;
	color: #fff;
}
.gift{
	position: relative;
	overflow:hidden;
}
.gift-title {
	font-size: .26rem;
	color: #aaaaaa;
	height: .4rem;
	line-height: .4rem;
	margin-left: .2rem;
  margin-top:.1rem;
	border: 0;
}
.gift-item{
	display: inline-block;
	overflow:hidden;
}
.gift-list {
	overflow-y: hidden;
	position: relative;
	white-space: nowrap;
	overflow-x: auto;
	height: 1.6rem;
	padding: .15rem 0;
}
.gift-wrapper{
	overflow-y: hidden;
	position: relative;
	overflow-x: scroll;
    white-space: nowrap;
    width: auto;
}
.gift-list img {
	border-radius: 0;
    display: inline-block;
    width: 1.6rem;
    height: 1.6rem;
    margin-right: .2rem;
    float: left;
}

.classify_infos {
	font-size: 0;
	/*margin-top: .2rem;*/
	background: #696363;
	overflow: hidden;
	background-image: url(../../assets/images/profile_bg.png);
	background-size: cover;
}

.classify_item {
	margin-top: .2rem;
	/*margin-left: .2rem;*/
}

.detail_header {
	font-size: .26rem;
	color: #aaaaaa;
	height: .4rem;
	line-height: .4rem;
}

.motto {
	font-size: .3rem;
	line-height: .38rem;
	color: #ffffff;
	padding: .2rem 0;
}

.detail_item {
	height: .8rem;
	line-height: .8rem;
	border-bottom: 1px solid rgba(255, 255, 255, .2);
}

.detail_lists .detail_item:last-child {
	border: none;
	padding-bottom: .2rem;
}

.detail_lists li {
	margin-left: .2rem;
}

.detail_lists .detail-albums {
	margin: .2rem 0 .2rem 0;
}

.detail_lists .detail-albums .no-photo {
	height: 1rem;
	font-size: .3rem;
	color: #fff;
	line-height: 1rem;
	text-align: center;
}

.detail_lists li img {
	float: left;
	width: .36rem;
	height: .36rem;
	margin-right: .1rem;
}

.detail_item img {
	float: left;
	width: .36rem;
	height: .36rem;
	margin-top: .21rem;
}

.detail_item a {
	height: .8rem;
	display: block;
}

.talk .talk_audio {
	font-size: 0;
	padding: .05rem .1rem;
	width: .8rem;
	max-width: 2rem;
	border-radius: .1rem;
	background: #fff;
	float: left;
	line-height: 1;
	margin-left: .1rem;
	margin-right: .1rem;
}

.talk .talk_audio audio {
	display: none;
}

.talk .talk_audio span {
	display: inline-block;
	width: .3rem;
	height: .3rem;
	background: url(../../assets/images/voice-stop.png) no-repeat;
	background-size: cover;
	margin: 0 auto;
}

.talk .talk_audio span.play {
	background: url(../../assets/images/voice.gif) no-repeat;
	background-size: cover;
}

.detail_item .key {
	font-size: .26rem;
	color: #aaaaaa;
	float: left;
	margin-left: .1rem;
}

.detail_item  .value {
	font-size: .30rem;
	color: #ffffff;
	float: right;
	margin-right: .2rem;
}

.detail_item  .value span {
	color: #fff;
	background: #e43f3f;
	padding: .1rem .1rem;
	line-height: 1;
	border-radius: 5px;
	display: inline-block;
}

.detail_header .front {
	width: .04rem;
	height: .24rem;
	background: #e43f3f;
	border-radius: .02rem;
	float: left;
	margin-top: .08rem;
	margin-right: .1rem;
}

.age_height_education span {
	margin-right: .4rem;
}

.address .province {
	margin-right: .4rem;
}

.nearby_greet_btn,
.nearby_greet_btn_index {
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


/* page_nearby */

.page_nearby,
.page_recommend {
	font-size: 0;
	padding: 0.2rem;
	box-sizing: border-box;
	-moz-box-sizing: border-box;
	/* Firefox */
	-webkit-box-sizing: border-box;
}

.page_nearby .nearby_info {
	font-size: 0.3rem;
	color: #ffffff;
	text-align: center;
}

.page_nearby .position {
	color: #e43f3f;
	margin-left: 0.22rem;
	margin-right: 0.22rem;
	/*height: 0.8rem;*/
	line-height: 0.4rem;
}

.page_recommend .nearby_person_list .no-person {
	margin-top: 1rem;
}

.page_recommend .nearby_person_list .no-person img {
	width: 4rem;
	height: 4rem;
	margin: 0 auto;
	display: block;
}

.page_recommend .nearby_person_list .no-person p {
	font-size: .3rem;
	color: #fff;
	margin-top: .4rem;
	text-align: center;
}

.page_recommend .nearby_person_list .no-person .btn {
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

.page_recommend .nearby_person_list {
	margin-top: 0;
}

.page_recommend .nearby_person_list .person_item {
	padding-top: 0.2rem;
	height: auto;
	box-sizing: border-box;
	-moz-box-sizing: border-box;
	/* Firefox */
	-webkit-box-sizing: border-box;
	/* Safari */
	float: left;
	width: 27.9%;
	margin-left: 4%;
}

.page_recommend .nearby_person_list .box {
	overflow: hidden;
	float: left;
}

.page_recommend .nearby_person_list .head_space {
	width: 100%;
	padding-bottom: 100%;
	position: relative;
}

.page_recommend .nearby_person_list .head_img {
	width: 100%;
	height: 100%;
	border-radius: 0.1rem;
	border-radius: 5px;
	position: absolute;
	left: 0;
	top: 0;
	margin: 0;
}

.page_recommend .nearby_person_list .content {
	margin-left: 0;
	margin-top: 0.2rem;
	color: #ffffff;
	/*float: left;*/
	text-align: center;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
}

.page_recommend .nearby_person_list .name {
	font-size: 0.32rem;
	height: .5rem;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
}

.page_recommend .nearby_person_list .info {
	margin-top: 0.42rem;
	font-size: 0.26rem;
	height: .26rem;
}

.page_recommend .nearby_person_list .status {
	margin-top: 0.2rem;
	float: right;
}

.page_recommend .nearby_person_list .time {
	font-size: 0;
}

.page_recommend .nearby_person_list .time img {
	width: 0.36rem;
	height: 0.36rem;
	vertical-align: middle;
}

.page_recommend .nearby_person_list .time span {
	font-size: 0.26rem;
	color: #ffffff;
	vertical-align: middle;
	margin-left: 0.1rem;
}

.page_recommend .nearby_person_list .is_read {
	margin-top: 0.26rem;
}

.page_recommend .nearby_person_list .is_read img {
	width: 0.36rem;
	vertical-align: middle;
	height: 0.36rem;
}

.page_recommend .nearby_person_list .is_read span,
.nearby_person_list .is_read a {
	font-size: 0.26rem;
	margin-left: 0.1rem;
	vertical-align: middle;
	color: #aaaaaa;
}

.page_recommend .nearby_person_list .border {
	margin-left: 1.7rem;
	margin-top: 0.2rem;
	border-bottom: 1px solid #3b3142;
}

.page_recommend .nearby_greet_btn,
.nearby_greet_btn_index {
	font-size: 0.32rem;
	color: #ffffff;
	width: 5.5rem;
	height: 0.8rem;
	line-height: 0.8rem;
	background: #e43f3f;
	position: fixed;
	bottom: .2rem;
	border-radius: 2rem;
	text-align: center;
	margin-left: 0.8rem;
}


/* page_recomend */

.page_recommend {
	background: #241b2a;
	width: 100%;
	padding: .2rem 0 0 0;
	min-height: 567px;
	position: absolute;
	left: 0;
	top: 0;
	z-index: 1000;
}

.recommend-header {
	font-size: .32rem;
	color: #fff;
	text-align: center;
	line-height: .6rem;
}

.layout-tip {
	border-radius: 5px;
	background: #fff;
	text-align: center;
	position: fixed;
	left: 50%;
	top: 50%;
	width: 5.8rem;
	height: 3rem;
	margin-left: -2.9em;
	margin-top: -1.5rem;
	z-index: 1000;
	display: none;
}

.layout-tip .close {
	position: absolute;
	right: -0.1rem;
	top: -0.1rem;
	width: .4rem;
	height: .4rem;
	border-radius: 50%;
	color: #666;
	text-align: center;
	line-height: .36rem;
	font-size: .38rem;
	background: #fff;
}

.layout-tip .title {
	color: #333;
	font-size: .32rem;
	margin-top: .4rem;
}

.layout-tip .cont {
	color: #666;
	font-size: .3rem;
	margin-top: .3rem;
}

.layout-tip .btn {
	background: #e43f3f;
	height: .7rem;
	line-height: .7rem;
	text-align: center;
	font-size: .26rem;
	margin: 0 auto;
	width: 85%;
	border-radius: 5px;
	color: #fff;
	margin-top: .4rem;
}

.layout-tip .btn a {
	color: #fff;
	display: block;
}
</style>
