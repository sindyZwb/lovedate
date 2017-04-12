<template>
  <div  v-if="isShow"  :style="{opacity:opacity}">
    <div class="hint_box">
      <div class="hint_text">{{text}}</div>
    </div>
  </div>
</template>
<script>
  export default {
    props: ['text', 'isShow'],
    data () {
      return {
        opacity: 1
      }
    },
    watch: {
      text (value, oldValue) {
      },
      isShow (value, oldValue) {
        this.fadeOut()
      }
    },
    methods: {
      fadeOut () {
        var self = this
        var timer = null
        clearInterval(timer)
        timer = setInterval(function () {
          if (self.opacity < 0) {
            self.opacity = 1
            self.$emit('fadeIn')
            clearInterval(timer)
          } else {
            self.opacity = self.opacity - 0.1
          }
        }, 100)
      }
    },
    created () {
      console.log(this.text)
      console.log(this.isShow)
    }
  }
</script>
<style>
.hint_box{
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
  height: .7rem;
  line-height: .7rem;
  text-align: center;
}
.hint_text{
  color: #ffffff;
  font-size: .3rem;
  text-align: center;background: black;
  width: auto;
  display: inline-block;
  padding: 0 .2rem;
  border-radius: .1rem;
}
</style>

