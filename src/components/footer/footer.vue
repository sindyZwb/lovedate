<template>
	<div>
		<ul class="footer">
			<li class="footer_btn selected"><router-link v-bind:to="{path:'index'}"><img src="../../assets/images/footer_img_red_0.png"/><div>缘分</div></router-link></li>
			<li class="footer_btn"><router-link v-bind:to="{path:'message'}"><img src="../../assets/images/footer_img_grey_1.png" /><div>私信<div class="messageNum"  style="display:none">0</div></div></router-link></li>
			<li class="footer_btn"><router-link v-bind:to="{path:'nearby'}"><img src="../../assets/images/footer_img_grey_2.png" /><div>附近</div></router-link></li>
			<li class="footer_btn"><router-link v-bind:to="{path:'profile'}"><img src="../../assets/images/footer_img_grey_3.png" /><div>我</div></router-link></li>
		</ul>
	</div>
</template>

<script>
	export default {}
</script>

<style>
.footer{
	position: fixed;
	bottom: 0;
	width: 100%;
	overflow: hidden;
	height: 0.98rem;
	background: white;
	opacity: 0.9;
	padding-top: 0.12rem;
	padding-bottom: 0.12rem;
	box-sizing:border-box;
	-moz-box-sizing:border-box; /* Firefox */
	-webkit-box-sizing:border-box; /* Safari */
}
.footer .footer_btn{
	position: relative;
	font-size: 0.2rem;
    list-style: none;
    width: 25%;
    display: block;
    float: left;
    text-align: center;
    color: #aaaaaa;
}
.footer .footer_btn.selected{
	color: #e43f3f;
}
.footer .footer_btn img{
	width: 0.48rem;
    height: 0.48rem;
    display: block;
    margin: auto;
}
</style>
