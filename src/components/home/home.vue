<template>
	<div>
		<v-header></v-header>
		<v-list></v-list>
		<v-footer :footerindex="1"></v-footer>
	</div>
</template>

<script>
  import header from './header.vue'
  import list from './list.vue'
  import footer from '../footer/footer.vue'
  export default {
    props: {
      footerindex: {
        type: Number
      }
    },
    components: {
      'v-header': header,
      'v-list': list,
      'v-footer': footer
    }
  }
</script>

<style>

</style>
