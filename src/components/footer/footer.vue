<template>
  <div>
    <ul class="footer">
      <li class="footer_btn" :class="{selected: footerindex == 1}">
        <router-link v-bind:to="{path:'index'}">
          <img v-if="footerindex == 1" src="../../assets/images/footer_img_red_0.png"/>
          <img v-else src="../../assets/images/footer_img_grey_0.png"/>
          <div>缘分</div>
        </router-link></li>
      <li class="footer_btn" :class="{selected: footerindex == 2}">
        <router-link v-bind:to="{path:'message'}">
          <img v-if="footerindex == 2" src="../../assets/images/footer_img_red_1.png" />
          <img v-else src="../../assets/images/footer_img_grey_1.png" />
          <div>私信<div class="messageNum"  style="display:none">0</div></div>
        </router-link>
        </li>
      <li class="footer_btn" :class="{selected: footerindex == 3}">
        <router-link v-bind:to="{path:'nearby'}">
          <img v-if="footerindex == 3" src="../../assets/images/footer_img_red_2.png" />
          <img v-else src="../../assets/images/footer_img_grey_2.png" />
          <div>附近</div>
        </router-link>
      </li>
      <li class="footer_btn" :class="{selected: footerindex == 4}">
        <router-link v-bind:to="{path:'profile'}">
          <img v-if="footerindex == 4" src="../../assets/images/footer_img_red_3.png" />
          <img v-else src="../../assets/images/footer_img_grey_3.png" />
          <div>我</div>
        </router-link>
        </li>
    </ul>
  </div>
</template>

<script>
  export default {
    props: {
      footerindex: {
        type: Number
      }
    }
  }
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
.footer .footer_btn.selected a{
	color: #e43f3f;
}
.footer .footer_btn img{
  width: 0.48rem;
  height: 0.48rem;
  display: block;
  margin:0 auto .05rem;
}
</style>
