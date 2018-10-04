<template>
  <section  v-if="error.length">
  <div>
  {{this.error}}
</div>
   </section>
  <section  v-else>
    <article v-for="result in results">  
          <figure>
              <p>
                <img v-bind:src="posterBase+result.poster_path ">
              </p>
            </figure>
      <div>
    <div>
      <p>
        <a><h4>{{ result.title }}</h4></a>
        <p>{{ result.overview }}</p>
        <p> {{result.release_date}}</p>
   </p>
   </div>
   </div>
   </article>
   </section>
</template>
<script>

export default {
	data () {
		return {
      results: {},
      query: '',
      posterBase:"https://image.tmdb.org/t/p/w185/",
      error: ''
		}
	},
  methods:  {
    
 getResults() {
      var endpoint = "https://fierce-gorge-62693.herokuapp.com/api/v1/moviedb/search/?format=json&query=" + this.query
         
      this.$http.get(endpoint).then(function(response) {
        this.results = response.body.results
     
        if  (response.body.errors) {
          this.error = response.body.errors[0]
        } else {
          this.error = ''
        }
      }, function(response) {}
        )
  }
}
}
</script>
<style></style>
