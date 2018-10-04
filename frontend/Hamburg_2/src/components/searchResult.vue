<template>
</template>
<script>
export default {
  data () {
    return {
      placeholder: 'Search Movies',
      results: {},
      query: '',
      posterBase: 'https://image.tmdb.org/t/p/w185/',
      error: ''
    }
  },
  getResults () {
    var endpoint = 'https://fierce-gorge-62693.herokuapp.com/api/v1/moviedb/search/?format=json&query=' + this.query
  }
}
</script>