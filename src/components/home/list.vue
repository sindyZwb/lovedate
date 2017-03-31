<template>
	<div>
		<ul class="fate_person_list">
			<li class="person_item" v-for="(item,index) in persions" :data-id="item.b80">
				<router-link v-bind:to="{path: 'detail', query: {id: item.b80, isrobot: item.b216}}">
					<div class="person_box">
						<img class="head_img" :src="item.b57">
						<div class="content">
							<div class="name">{{item.b52}}</div>
							<div class="info"><img src="../../assets/images/fate_age.png"><span>{{item.b1 ? item.b1 + "岁" : "保密"}}</span> <img src="../../assets/images/fate_height.png"><span>{{item.b33 ? item.b33 + "cm" : "保密"}}</span> <img src="../../assets/images/fate_position.png"><span v-if="item.b67">{{item.b67 | filterProvince}}</span><span v-else>保密</span></div>
							<div class="motto"></div>
						</div>
					</div>
					<div class="action">
						<div class="btn_box">
							<div class="love_btn"><img class="love_img" src="../../assets/images/love.png"><span>已喜欢</span></div>
						</div>
						<div class="btn_box">
							<div class="greet_btn"><img class="greet_img" src="../../assets/images/greet.png"><span>已打招呼</span></div>
						</div>
					</div>	
				</router-link>	
			</li>
		</ul>
	</div>
</template>

<script>
import province from '../../common/data/province.json'
import {transResult} from '../../common/js/transresult'
export default {
  data () {
    return {
      persions: []
    }
  },
  filters: {
    filterProvince: function (id) {
      var returnName = ''
      province.body.forEach(function (value, index) {
        if (id === value.provinceId) {
          returnName = value.provinceName
        }
      })
      return returnName
    }
  },
  created () {
    const p2 = localStorage.getItem('userId')
    const p1 = localStorage.getItem('sessionId')
    const sex = localStorage.getItem('sex')
    this.$http.get('http://192.168.0.122:8080/lp-bus-msc/f_111_17_1.service', { 'params': { p1: p1,
      p2: p2,
      a69: sex,
      m3: 'f2db3f53-70e2-426c-b4da-ad70ab479e14',
      m2: 'f2db3f53-70e2-426c-b4da-ad70ab479e14',
      m1: 'f2db3f53-70e2-426c-b4da-ad70ab479e14',
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
            this.persions = transResult(response).body.b180
          }
        })
      }, (err) => {
        console.log(err)
      })
  }
}
</script>

<style>
@import "../../common/style/index.css";
.fate_person_list{
	list-style: none;
	margin-top: 0.4rem;
}
.fate_person_list .person_item{
	font-size: 0;
	margin-bottom: 0.6rem;
}
.fate_person_list .person_box{
	white-space: nowrap;
	overflow: hidden;
}
.fate_person_list .head_img{
	width: 2rem;
	height: 2rem;
	border-radius: 0.1rem;
	float: left;
}


.fate_person_list .content{
	width: auto;
	height: 2rem;
	color: #ffffff;
	margin-left: 2.2rem;
}
.fate_person_list .name{
	font-size: 0.32rem;
	height: .32rem;
	margin-top: 0.1rem;
}
.fate_person_list .info{
	margin-top: 0.44rem;
    line-height: .36rem;
    height: .36rem;
    font-size: 0
}
.fate_person_list .info span{
	font-size: .26rem;
	margin-left: .1rem;
	margin-right: .4rem;
	vertical-align: middle;
}
.fate_person_list .info .position{
	display: inline-block;
	width: 1.1rem;
    white-space:nowrap; 
    overflow:hidden; 
    text-overflow:ellipsis;
}
.fate_person_list .info img{
	width: .36rem;
    vertical-align: top;
    height: .36rem;
}

.fate_person_list .motto{
	margin-top: 0.24rem;
	font-size: 0.28rem;
	white-space: normal;
}
.fate_person_list .action{
	margin-top: 0.4rem;
	font-size: 0;
}
.fate_person_list .btn_box{
	width: 50%;
	display: inline-block;
	text-align: center;
	/*margin-left: -0.03rem;*/
}
.fate_person_list .love_btn{
	width: 3.15rem;
	color: #e43f3f;
	border: 1px solid #e43f3f;
	border-radius: 1rem;
	margin: auto;
	height: 0.6rem;
	line-height: 0.6rem;
}
.fate_person_list .greet_btn{
	width: 3.15rem;
	color: #44a3d4;
	border: 1px solid #44a3d4;
	border-radius: 1rem;
	margin: auto;
	height: 0.6rem;
	line-height: 0.6rem;
}
.fate_person_list .love_btn span,.fate_person_list .greet_btn span{
	font-size: 0.32rem;
	vertical-align: middle;
}

.fate_person_list .love_img, .fate_person_list .greet_img{
	height: 0.48rem;
	width: 0.48rem;
	vertical-align: middle;
}
</style>
