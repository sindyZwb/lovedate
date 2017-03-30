<template>
	<div>
		<ul class="fate_header">
			<li v-for="(item, index) in persions" :data-id="item.b80" :data-isrobot="item.b216 == 1 ? 'true' : 'false'"><router-link v-bind:to="{path: 'detail', query: {id: item.b80, isrobot: item.b216}}"><img :src="item.b57"></router-link></li>
		</ul>
	</div>
</template>
<script type="text/ecmascript-6">
import {transResult} from '../../common/js/transresult'
console.log(transResult)
export default {
  data () {
    return {
      persions: []
    }
  },
  created () {
    const p2 = localStorage.getItem('userId')
    const p1 = localStorage.getItem('sessionId')
    const sex = localStorage.getItem('sex')
    console.log(p1)
    console.log(p2)
    this.$http.get('http://192.168.0.122:8080/lp-bus-msc/f_111_17_1.service', { 'params': { p1: p1,
      p2: p2,
      a69: sex,
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
          console.log(transResult(response))
          if (transResult(response).code === 1002) {
            this.$router.push('/login')
          } else {
            this.persions = transResult(response).body.b179
          }
        })
      }, (err) => {
        console.log(err)
      })
  }
}
</script>

<style>
.fate_header{
	list-style: none;
	white-space: nowrap;
	/*overflow: hidden;*/
	font-size: 0;
	overflow-x: auto;
}
.fate_header img{
	display: block;
	width: 1.34rem;
	height: 1.34rem;
	border-radius: 0.1rem;
}
.fate_header li{
	display: inline-block;
	margin-right: 0.2rem;
}
.fate_ad{
	margin-top: 0.2rem;
	height: 0.6rem;
	line-height: 0.6rem;
	color: #e43f3f;
	font-size: 0;
}
.fate_ad span{
	display: inline-block;
	vertical-align: middle;
	font-size: 0.26rem;
	margin-left: 0.2rem;
}
.fate_ad img{
	height: 0.36rem;
	width: 0.36rem;
	display: inline-block;
	vertical-align: middle;
	/*margin-right: 0.2rem;*/
}
</style>
