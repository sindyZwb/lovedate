<template>
	<div>
		<v-header></v-header>
		<v-list></v-list>
		<v-footer></v-footer>
	</div>
</template>

<script>
	import header from './header.vue'
	import list from './list.vue'
	import footer from '../footer/footer.vue'
	export default {
	  components: {
	    'v-header': header,
	    'v-list': list,
	    'v-footer': footer
	  }
	}
</script>

<style>

</style>
