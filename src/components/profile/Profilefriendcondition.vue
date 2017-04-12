<template>
    <div>
        <div class="header_back">
      <img src="../../assets/images/back.png">
    </div>
    <ul class="condition_lists">
      <li class="condition_item">
        <div class="overflow_hidden age">
          <div class="title">年龄范围</div>
          <img src="../../assets/images/right.png">
          <div class="value ">{{conditionList.b1 ? conditionList.b1 : '未填写'}}</div>
        </div>
        <div class="border"></div>
      </li>
      <li class="condition_item">
        <div class="overflow_hidden height">
          <div class="title">身高范围</div>
          <img src="../../assets/images/right.png">
          <div class="value ">{{conditionList.b33 ? conditionList.b33 : '未填写'}}</div>
        </div>
        <div class="border"></div>
      </li>
      <li class="condition_item">
        <div class="overflow_hidden marriageStatus">
          <div class="title">婚姻状况</div>
          <img src="../../assets/images/right.png">
          <div class="value ">{{conditionList.b46 ? conditionList.b46 : '未填写'}}</div>
        </div>
        <div class="border"></div>
      </li>
      <li class="condition_item">
        <div class="overflow_hidden educationLevel">
          <div class="title">学历</div>
          <img src="../../assets/images/right.png">
          <div class="value ">{{conditionList.b19 ? conditionList.b19 : '未填写'}}</div>
        </div>
        <div class="border"></div>
      </li>
      <li class="condition_item">
        <div class="overflow_hidden">
          <div class="title">所在地区</div>
          <img src="../../assets/images/right.png">
          <div class="value ">{{ conditionList.b67 || conditionList.b9 ? '' : '未填写'}}{{conditionList.b67 | filterProvince}}{{conditionList.b9 | filterProvince(conditionList.b67)}}</div>
        </div>
        <div class="border"></div>
      </li>
      <li class="condition_item">
        <div class="overflow_hidden wage">
          <div class="title">月收入</div>
          <img src="../../assets/images/right.png">
          <div class="value ">{{conditionList.b85 ? conditionList.b85 : '未填写'}}</div>
        </div>
        <div class="border"></div>
      </li>
    </ul>
    </div>
</template>
<script>
    import {transResult} from '../../common/js/transresult'
    import province from '../../common/data/province.json'
    export default {
      data () {
        return {
          conditionList: []
        }
      },
      filters: {
        filterCity: function (cId, pId) {
          var returnName = ''
          console.log(cId, pId)
          province.body.forEach(function (value, index) {
            if (pId === value.provinceId) {
              (value.cityList).forEach(function (v, i) {
                if (cId === v.cityId) {
                  returnName = v.cityName
                }
              })
            }
          })
          return returnName
        },
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
        console.log(111)
        this.$http.get('http://192.168.0.122:8080/lp-search-msc/f_110_10_1.service', { 'params': { p1: p1,
          p2: p2,
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
                const data = res.body
                this.conditionList = data
                console.log(data)
              }
            })
          }, (err) => {
            console.log(err)
          })
      }
    }
</script>
<style>
.condition_lists{
  font-size: 0;
  list-style: none;
}
.condition_item{
  height: 1rem;
  background: #312837;
  color: #ffffff;
}
.condition_item .title{
  font-size: .28rem;
  float: left;
  margin-left: .2rem;
  margin-top: .36rem;
}
.condition_item img{
  float: right;
  width: .48rem;
  height: .48rem;
  margin-right: .2rem;
  margin-top: .26rem;
}
.condition_item .value{
  font-size: .30rem;
  float: right;
  margin-top: .35rem;

}

.condition_item .border{
  border-bottom: 1px solid #3b3142;
  margin-left: .2rem;
  margin-top: .24rem;
}
</style>
