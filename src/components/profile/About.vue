<template>
    <div class="about">
        <div class="navbar">
          <div class="J_back" @click="back">
            <span class="back"></span>
            <span class="title">返回</span>
          </div>
          
          关于我们
        </div>
        <div class="avatar">
          <img src="../../assets/images/avatar-about.png" alt="">
        </div>
        <ul class="info_list">
          <li class=" clearfix" @click="openService">
            <span class="name">用户协议</span>
            <span class="value "></span>
          </li>
          <li class=" clearfix" @click="openDeal">
            <span class="name">服务条款</span>
            <span class="value "></span>
          </li>
          <li class=" clearfix" @click="openActive">
            <span class="name">活动相关</span>
            <span class="value "></span>
          </li>
        </ul>
        <div class="download" style="display: none;">
          <p>下载爱约会APP,体验更多约会特权</p>
          <a href="">
            <span class="J_downLoad">下载</span>
          </a>
        </div>
    </div>
</template>

<script>
    export default {
      data () {
        return {
        }
      },
      methods: {
        openService () {
          window.open('http://h5.imchumo.com/lp-h5-msc/service.html')
        },
        openDeal () {
          window.open('http://h5.imchumo.com/lp-h5-msc/deal.html')
        },
        openActive () {
          window.open('http://h5.imchumo.com/lp-h5-msc/active.html')
        },
        back () {
          history.back()
        }
      }
    }
</script>
<style>
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
.navbar .close{
	position: absolute;
	left: 1.6rem;
	top:0;
}
.navbar .title{
	position: absolute;
	left: .7rem;
	top:0;
}
.about .avatar {
	margin: 1.4rem auto 1rem;
}
.about .avatar img{
	width: 1.46rem;
	height: 2.04rem;
	margin:0 auto;
	display: block;
}

.info_list {
	margin-top: .2rem;
}
.about .info_list{
  padding: 0;
  background: none;
}
.info_list li{
	padding:0 .2rem;
	background: #312837;
	height: .88rem;
	line-height: .88rem;
	color: #fff;
	font-size: .32rem;
}
.info_list li:first-child{
	border-bottom:1px solid #463e4b;
}
.info_list li:last-child{
	margin-top:.2rem;
}
.info_list li .name{
	float: left;
}
.info_list li .value{
	float: right;
	background: url(../../assets/images/right.png);
	width: .5rem;
	height: .5rem;
	background-size: cover;
	display: inline-block;
	margin-top: .2rem;
}
.info_list li  a {
	color: #fff;
	display: block;
	width: 100%;
	height: 100%;
}
.download{
	text-align: center;
}
.download p{
	font-size: .32rem;
	color: #fff;
	text-align: center;
	margin-top: .8rem;
}
.download a{
	display: inline-block;
}
.download span{
	color: #fff;
	background: #e43f3f;
	font-size:.32rem;
	height: .8rem;
	line-height: .8rem;
	text-align: center;
	display: block;
	margin:.4rem auto;
	width: 3.6rem;
	border-radius:10rem;
}
</style>

