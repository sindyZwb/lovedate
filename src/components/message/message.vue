<template>
  <div>
    <div class="page page_message ">
      <ul v-if="messagePersonList && messagePersonList.length > 0">
        <li class="person_item" v-for="item in messagePersonList" :data-id="item.b77"  :data-robot="item.b216 == 1 ? true : false">
          <router-link v-bind:to="{path: 'detail', query: {id: item.b80, isrobot: item.b216}}">
            <div class="line_box_wrrap">
              <div class="line_box_Margin_left">
                <div class="box">
                  <img class="head_img" :src="item.b57">
                  <div class="content">
                    <div class="name" :class="{name_huangguan:item.b144 == 1}">{{item.b52}}<img src="../../assets/images/huangguan.png" v-if="item.b144 == 1"></div>
                    <div class="info">
                    {{item.b78 == 5001 ? "[图片]" : item.b78 == 5005 ? "[私密照]" : item.b78 == 5003 ? "[语音]" : item.b50}}
                    </div>
                  </div>
                  <div class="status">
                    <div class="time">{{item.b16}}</div>
                  </div>
                </div>
                <div class="border"></div>
              </div>
              <div class="line_box_Del">删除</div>
            </div>
          </router-link>
        </li>
      </ul>
      <div class="message_none" v-else>
        <img src="../../assets/images/message_none.png">
        <div class="none_hint">您还没有消息哦~</div>
        <div class="fill_btn"><a href="./profile/profileinfo.html">完善资料试试</a></div>
      </div>
    </div>
    <v-footer :footerindex="2"></v-footer>
  </div>
</template>
<script type="text/ecmascript-6">
  import footer from '../footer/footer.vue'
  import {transResult} from '../../common/js/transresult'
  export default {
    components: {
      'v-footer': footer
    },
    props: {
      footerindex: {
        type: Number
      }
    },
    data () {
      return {
        'messagePersonList': []
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
      this.$http.get('http://192.168.0.122:8080/lp-search-msc/f_142_11_1.service', { 'params': jsonData }).then((response) => {
        response.bodyText.then((response) => {
          const res = transResult(response)
          if (res.code === 1002) {
            this.$router.push('/login')
          } else {
            const data = res.body
            if (data.length > 0) {
              data.forEach((value, index) => {
                jsonData['a77'] = value.b25
                this.$http.get('http://192.168.0.122:8080/lp-search-msc/f_142_12_1.service', { 'params': jsonData }).then((response) => {
                  response.bodyText.then((messageResponse) => {
                    const messageRes = transResult(messageResponse)
                    if (messageRes.code === 1002) {
                      this.$router.push('/login')
                    } else {
                      const messageData = messageRes.body
                      console.log(messageData, 1111)
                      let message = ''
                      messageData.forEach(function (value, index) {
                        if (value && value['b78'] !== '5002') {
                          message = value
                          return
                        }
                      })
                      if (message) {
                        jsonData['p2'] = value.b25
                        this.$http.get('http://192.168.0.122:8080/lp-search-msc/f_108_13_1.service', { 'params': jsonData }).then((response) => {
                          response.bodyText.then((persionResponse) => {
                            const persionRes = transResult(persionResponse)
                            if (persionRes.code === 1002) {
                              this.$router.push('/login')
                            } else {
                              const persionData = persionRes.body
                              message['b52'] = persionData.b112.b52
                              message['b57'] = persionData.b112.b57
                              this.messagePersonList.push(message)
                            }
                          })
                        }, (err) => {
                          console.log(err)
                        })
                      }
                    }
                  })
                }, (err) => {
                  console.log(err)
                })
              })
            }
          }
        })
      }, (err) => {
        console.log(err)
      })
    }

  }
</script>
<style>
/*****************zhangfuhang*********************/
.mesage_person_list .person_item{
	padding-top: 0.2rem;
    height: 1.5rem;
    box-sizing: border-box;
    -moz-box-sizing: border-box;
     -webkit-box-sizing: border-box;
     width: 7.3rem;
     overflow: hidden; 
}
.mesage_person_list .line_box_wrrap{
	width: 8.8rem;
}
.mesage_person_list .line_box_Margin_left{
	width: 7.3rem;
	float: left;
	position: relative;
	/*background: yellow;*/
}
.line_box_Del{
	font-size: 0.32rem;
    width: 1.5rem;
    background: red;
    float: left;
    line-height: 1.26rem;
    text-align: center;
    color: #fff;
}
/*********************************************/
.mesage_person_list .person_item{
	padding-top: 0.2rem;
    height: 1.4rem;
    box-sizing: border-box;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box; 
    position: relative;
}
.mesage_person_list .box{
	overflow: hidden;
}

.mesage_person_list .head_img{
	width: 1rem;
	height: 1rem;
	border-radius: 0.1rem;
	/*display: inline-block;*/
	/*vertical-align: top;*/
	float: left;
}
.mesage_person_list .content{
	margin-left: 0.2rem;
	margin-top: 0.1rem;
	color: #ffffff;
	float: left;
	width: 4rem;
	overflow: hidden;
	height: .93rem;
}
.mesage_person_list .name{
	font-size: 0.32rem;
	height: .32rem;
}
.mesage_person_list .info{
	margin-top: 0.2rem;
	font-size: 0.28rem;
	height: .5rem;
	display: inline-block;
    width: 4rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
.mesage_person_list .status{
	margin-top: 0.1rem;
	float: left;
	position: absolute;
    right: 0.37rem;
}
.mesage_person_list .time{
	color: #aaaaaa;
	font-size: 0.26rem;
}
.mesage_person_list .is_read{
	font-size: 0.26rem;
	margin-top: 0.2rem;
	background: #e43f3f;
	color: #ffffff;
	text-align: center;
	height: 0.36rem;
	line-height: 0.36rem;
	border-radius: 0.1rem;
}
.mesage_person_list .border{
	margin-left: 1.2rem;
	margin-top: 0.2rem;
	border-bottom: 1px solid #3b3142;
}
.message_none{
	color: #ffffff;
	font-size: 0;
}
.message_none img{
	display: block;
	margin: auto;
	margin-top: 1.8rem;
	width: 3.6rem;
	height: 3.6rem;
}
.message_none .none_hint{
	font-size: .32rem;
	text-align: center;
	margin-top: .38rem;
}
.message_none .fill_btn{
	font-size: .32rem;
	width: 3rem;
	height: .8rem;
	line-height: .8rem;
	text-align: center;
	background: #e43f3f;
	margin: auto;
	margin-top: .4rem;
	border-radius: 2rem;
}
.message_none .fill_btn a{
	color: #fff;
}
</style>
