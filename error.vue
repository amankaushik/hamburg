<template>
<form class="field has-addons" v-on:submit.prevent="getResults() || getError()">
<section   v-if="error.length" class="error">
  <div class="notification is-danger">
  {{this.error}}
</div>
   </section>
   </form>
</template>
<script>
export default {
	data () {
		return {
      error: ''
		}
	}
getError() {
	    this.$http.get(endpoint).then(function(response) {
        this.results = response.body.results
     
        if  (response.body.errors || response.status !=== 200 ) {
          this.error = response.body.errors[0]
        } else {
          this.error = ''
        }
      }
}
}