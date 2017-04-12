<template>
  <div>
    <div class="header_back" >
      <img src="../../assets/images/back.png">
    </div>
    <textarea class="motto_textarea" placeholder="请输入您需要反馈的内容" maxlength="200" v-model="motto">{{motto}}</textarea>
    <input type="text" class="contact" placeholder="联系方式：QQ、微信、手机号、邮箱等" v-model="contact" />
    <div class="custom_groom">客服QQ:3350977469<span>(推荐)</span></div>
    <div class="motto_confirm" @click="check(motto,contact)">提交</div>
    <Toast   :isShow="isShow" :text="text" @fadeIn="fadeIn"></Toast>
  </div>
</template>
<script>
    import {transResult} from '../../common/js/transresult'
    import Toast from '../common/Toast.vue'
    export default {
      data () {
        return {
          motto: '',
          contact: '',
          isShow: false,
          text: ''
        }
      },
      components: {
        Toast
      },
      methods: {
        check (motto, contact) {
          console.log(motto, contact)
          if (motto.trim() === '') {
            this.isShow = true
            this.text = '请输入内容'
          } else if (contact.trim() === '') {
            this.isShow = true
            this.text = '请输入联系方式'
          } else {
            this.submit(motto, contact)
          }
        },
        fadeIn () {
          this.isShow = false
        },
        submit (motto, contact) {
          console.log(111)
          const p2 = localStorage.getItem('userId')
          const p1 = localStorage.getItem('sessionId')
          console.log(111)
          this.$http.get('http://192.168.0.122:8080/lp-bus-msc/f_103_10_2.service', { 'params': { p1: p1,
            p2: p2,
            a14: motto,
            a61: 3,
            a49: 'h5',
            a2: '1.0.0.0',
            a81: contact,
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
                  if (data.code === 200) {
                    this.isShow = true
                    this.text = '提交成功'
                  }
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
.motto_textarea{
    font-size: .3rem;
    width: 100%;
    color: #ffffff;
    height: 4rem;
    line-height: .5rem;
    background: #312837;
    border:none;
    text-indent: .3rem;
    display: block;
    margin-bottom: -0.49rem;
    outline: none;
}
.motto_confirm{
    font-size: .32rem;
    color: #ffffff;
    background: #e43f3f;
    height: .8rem;
    line-height: .8rem;
    text-align: center;
    width: 5.5rem;
    border-radius: 2rem;
    margin: auto;
    margin-top: .8rem;
}
.contact{
    width: 100%;
    height: 0.88rem;
    background: #312837;
    border: none;
    text-indent: 0.2rem;
    font-size: 0.28rem;
    border-top: 1px solid #3b3142;
    line-height: 0.88rem;
    color: #fff;
    outline: none;
}

.custom_groom{
    font-size: 0.24rem;
    color: #aaaaaa;
    text-indent: 0.3rem;
    line-height: 0.5rem;
}
.custom_groom span{
    color: #e43f3f;
}
</style>
