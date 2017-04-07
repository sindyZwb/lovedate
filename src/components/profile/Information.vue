<template>
    <div>
        <div class="navbar">
            <div class="J_back" @click="back">
                <span class="back"></span>
                <span class="title">返回</span>
            </div>
            账号与安全
        </div>
        
        <ul class="info_list">
            <li class=" clearfix">
                <span class="name">账号</span>
                <span class="value J_accout">{{accout}}</span>
            </li>
            <li class=" clearfix">
                <span class="name">初始密码</span>
                <span class="value J_password">{{password}}</span>
            </li>
        </ul>
        <Toast></Toast>
    </div>
</template>
<script>
    export default {
      data () {
        return {
          password: '',
          accout: ''
        }
      },
      created () {
        this.accout = localStorage.getItem('userName')
        this.password = localStorage.getItem('userPassword')
      },
      methods: {
        back: () => {
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
.navbar .title{
	position: absolute;
	left: .7rem;
	top:0;
}

.info_list {
	padding:0 .2rem;
	background: #312837;
	margin-top: .2rem;
}
.info_list li{
	
	height: .88rem;
	line-height: .88rem;
	color: #fff;
	font-size: .32rem;
}
.info_list li:first-child{
	border-bottom: 1px solid #463e4b;
}
.info_list li .name{
	float: left;
}
.info_list li .value{
	float: right;
}
</style>
