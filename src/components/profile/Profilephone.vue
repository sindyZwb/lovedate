<template>
    <div>
        <div class="header_back">
            <img src="../../assets/images/back.png">
        </div>
        <div class="content">
            <div class="phone_box">
                <input class="phone" type="tel" name="phone" v-model="phone" placeholder="请输入手机号">
                <div class="send" @click="checkPhone(phone)">{{codeText}}</div>
            </div>
            
            <input class="varify_num" type="tel" name="code" v-model="code" placeholder="请输入验证码">
            <div class="next" @click="varifyCode(phone, code)">完成</div>
        </div>
        <Toast :isShow="isShow" :text="text" @fadeIn="fadeIn"></Toast>
    </div>
</template>
<script>
  import {transResult} from '../../common/js/transresult'
  import Toast from '../common/Toast.vue'
  export default {
    data () {
      return {
        phone: '',
        code: '',
        isSend: false,
        codeText: '获取验证码',
        time: 30,
        isShow: false,
        text: ''
      }
    },
    components: {
      Toast
    },
    methods: {
      judgePhone (phoneNum) {
        if (/^1[3,5,7,8]\d{9}$/g.test(phoneNum)) {
          return true
        } else {
          return false
        }
      },
      fadeIn () {
        this.isShow = false
      },
      checkPhone (phone) {
        if (phone.trim() !== '' && this.judgePhone(phone) && !this.isSend) {
          let time = setInterval(() => {
            this.time --
            this.codeText = this.time + 's后重新获取'
            if (this.time === 0) {
              this.codeText = '获取验证码'
              this.time = 30
              this.isSend = false
              clearInterval(time)
            }
          }, 1000)
          this.sendMessage(phone)
        } else {
          this.isShow = true
          this.text = '请输入正确手机号'
        }
      },
      sendMessage (phone) {
        const p2 = localStorage.getItem('userId')
        const p1 = localStorage.getItem('sessionId')
        console.log(111)
        this.$http.get('http://192.168.0.122:8080/lp-search-msc/f_105_11_1.service', { 'params': { p1: p1,
          p2: p2,
          a81: phone,
          a92: 3,
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
                const data = res
                console.log(data)
              }
            })
          }, (err) => {
            console.log(err)
          })
      },
      varifyCode (phone, code) {
        const p2 = localStorage.getItem('userId')
        const p1 = localStorage.getItem('sessionId')
        var systemName = JSON.parse(localStorage.getItem('profileInfo')).b152  // 系统用户号
        console.log(111)
        this.$http.get('http://192.168.0.122:8080/lp-search-msc/f_105_11_1.service', { 'params': { p1: p1,
          p2: p2,
          a81: phone,
          a152: systemName,
          a93: code,
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
                const data = res
                console.log(data)
              }
            })
          }, (err) => {
            console.log(err)
          })
      }
    }

  }
</script>
<style>
.phone_box{
	width: 6rem;
	height: .8rem;
	position: relative;
	margin: auto;
}
.phone_box .phone{
	font-size: .26rem;
	display: block;
	margin: auto;
	width: 6rem;
	height: .4rem;
	padding:.2rem 0;
	border: 1px solid #e43f3f;
	color: #ffffff;
	border-radius: 2rem;
	background: #241b2a;
	text-indent: .4rem;
}
.phone_box .send, .phone_box .send_again_btn{
	font-size: .24rem;
	color: #ffffff;
	background: #e43f3f;
	/*width: 1.8rem;*/
	padding: 0 10px;
	position: absolute;
	height: .69rem;
	line-height: .69rem;
	text-align: center;
	border-radius: 2rem;
	top: .06rem;
	right: .05rem;
}
.varify_num{
	font-size: .26rem;
	display: block;
	margin: auto;
	margin-top: .4rem;
	width: 6rem;
	height: .4rem;
	padding: .2rem 0 ;
	border: 1px solid #aaaaaa;
	color: #ffffff;
	border-radius: 2rem;
	background: #241b2a;
	text-indent: .4rem;
}
.next{
	font-size: .32rem;
	display: block;
	margin: auto;
	margin-top: .4rem;
	width: 6rem;
	height: .8rem;
	line-height: .8rem;
	color: #ffffff;
	border-radius: 2rem;
	background: #e43f3f;
	text-align: center;
}
</style>
