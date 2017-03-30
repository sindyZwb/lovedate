<template>
    <div id="login">
        <div class="login-avatar"></div>
        <ul class="btns">
            <li class="J_register"><span class="register">一键注册</span></li>
            <li class="J_Login"><router-link to="/login-account">账号登录</router-link></li>
        </ul>
    </div>
</template>
<script>

</script>
<style>
#login{
	background: url(../../assets/images/login_bg.jpg) no-repeat;
	width: 100%;
	height: 100%;
	background-size: cover;
    position: absolute;
    left: 0;
    top:0;
}
.login-avatar{
	width: 1.45rem;
	height: 1.45rem;
	background: url(../../assets/images/avatar.png) no-repeat;
	border-radius: 5px;
	background-size: contain;
	margin:1.86rem auto 1rem;
}

.btns li{
	position: relative;
	width: 4rem;
	margin: .2rem auto 0;
	color: #fff;
	background: #e43f3f;
	font-size: .32rem;
	text-align: center;
	line-height: .8rem;
	height: .8rem;
	border-radius: .5rem;
}
.btns li a{
    color: #fff;
}
</style>
