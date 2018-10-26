<template>
    <section   v-if="error.length" class="section">
        <div class="notification is-danger">
            {{this.error}}
        </div>
    </section>
    <section  v-else class="section">
        <article class="media" v-for="result in results">
            <figure class="media-left">
                <p class="image is-256x256">
                    <img v-bind:src="posterBase+result.poster_path ">
                </p>
            </figure>
            <div class="media-content ">
                <div class="content">
                    <a><h4 class="title is-4 is-spaced">{{ result.title }}</h4></a>
                    <p class="subtitle is-6 is-spaced">{{ result.overview }}</p>
                    <div v-if="result.release_date != null" ><p class="subtitle is-6 is-spaced"> {{result.release_date}}</p></div>
                    <p class="subtitle is-6 is-spaced"> {{result.trailer}}</p>
                </div>
            </div>
        </article>
    </section>
</template>

<script>
    export default {
            data(){
              return{
                  name:"Showtime",
                  movieId:"",
                  results : {},
                  error:"",

              }  ;
            },
        props:{
                movieId:"",
        },
        methods: {
            getResults() {
                let endpoint = process.env.VUE_APP_ENDPOINT + this.movieId;
                this.$http.get(endpoint).then(function (response) {
                        this.results = response.body.results;
                        if (response.body.errors) {
                            this.error = response.body.errors[0];
                        } else {
                            this.error = '';
                        }
                    }, function (response) {
                    }
                )
            }
        }
    };

</script>

<style >


</style>


