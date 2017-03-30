<template>
    <div>
        <div class="navbar">
            <span class="back"  @click="goBack()"></span>
            登录
        </div>
        <div class="avatar">
            
        </div>
        <form @submit.prevent="toLogin(username,password)">
          <ul class="login_form">
            
              <li class="accout clearfix">
                  <label class="icon" ></label><input name="username" v-model="username" type="text" placeholder="输入手机号/账号" id="username">
              </li>
              <li class="password clearfix">
                  <label class="icon" ></label><input name="password" v-model="password" type="password" placeholder="输入密码" id="password">
              </li>
              <li class="login clearfix" @click="toLogin(username,password)">登录</li>
          </ul>
        </form>
    </div>
</template>
<script>
import {transResult} from '../../common/js/transresult'
export default {
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    goBack: () => {
      history.back()
    },
    toLogin: function (username, password) {
      console.log(username)
      console.log(password)
      if (username.trim() !== '' && password.trim() !== '') {
        this.$http.get('http://192.168.0.122:8080/lp-author-msc/f_120_10_1.service', { 'params': {
          a81: username,
          a56: password,
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
              if (res.code === 200) {
                localStorage.setItem('userId', res.body.b80)
                localStorage.setItem('sessionId', res.body.b101)
                localStorage.setItem('userName', username)
                localStorage.setItem('userPassword', password)
                localStorage.setItem('sex', res.body.b69)
                this.$router.push('/')
              }
            })
          }, (err) => {
            console.log(err)
          })
      } else {

      }
    }
  }
}
</script>
<style>
html,body{
	background: #241b2a;
}
.navbar{
	height: .9rem;
	background: #37363b;
	font-size: .32rem;
	text-align: center;
	color: #fff;
	line-height: .9rem;
}
.navbar .back{
	position: absolute;
	left: .2rem;
	top:.2rem;
	width: .48rem;
	height: .48rem;
	background: url(../../assets/images/back2.png) no-repeat;
	background-size: contain;
}
.avatar{
	width: 1.45rem;
	height: 1.45rem;
	background: url(../../assets/images/avatar.png) no-repeat;
	border-radius: 5px;
	background-size: contain;
	margin:.9rem auto 0;
}
.login_form{
	margin-top: 1rem;
}
.login_form li{
	width: 6rem;
	border:1px solid #e43f3f;
	border-radius: .5rem;
	padding: .17rem 0;
	margin:0 auto .4rem;
}
.login_form .icon{
	background: url(../../assets/images/zhanghao.png) no-repeat;
	background-size: contain;
	width: .48rem;
	height: .48rem;
	margin-left: .4rem;
	display: inline-block;
	float: left;
}
.password .icon{
	background: url(../../assets/images/password.png) no-repeat;
	background-size: contain; 
}
.login_form input{
	color: #fff;
	font-size: .28rem;
	border: none;
	background: none;
	vertical-align: middle;
	height: .50rem;
	line-height: .5rem;
	float: left;
	outline: none;
	margin-left: .2rem;
	width: 4rem;
}
.login_form .login{
	color: #fff;
	background: #e43f3f;
	font-size: .32rem;
	text-align: center;
}
</style>

