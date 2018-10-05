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
        if (response.status === 404 ) {
         this.error = 'The page you were looking for was not found.' 
         else if  (response.body.errors) {
          this.error = response.body.errors[0]
        } 
        else {
          this.error = 'The page you were looking for does not exist.'
        }
      }
}
}