<template>
    <div class="cinema">
        <headed/>
        <section v-if="error.length" class="section">
            <div class="notification is-danger">
                {{this.error}}
            </div>
        </section>
        <section v-else class="section">
            <ul class="list-unstyled" v-for="(result, index) in cinemas" :key="index">
                <transition name="fade">
                    <b-card class="bucket">
                        <b-media tag="li" class="my-4">
                            <h5 class="mt-0 mt-1"><b>{{ result.cinema_name }}</b></h5>
                            <p class='releaseDate'>Distance: {{ result.distance | formatDistance }} miles.</p>
                            <b-table striped small fixed :items="result.showings.Standard.times">
                            </b-table>
                        </b-media>
                    </b-card>
                </transition>
            </ul>
        </section>
        <foot/>
    </div>
</template>
<script>
    import headed from "@/components/headerSection.vue";
    import foot from "@/components/footerSection.vue";

    export default {
        name: "CinemaView",
        mounted: function () {
            this.getCinemaDetails();
        },
        components: {
            headed,
            foot,
        },
        methods: {
            getCinemaDetails() {
                this.$http.get(this.endpoint).then(
                    function (response) {
                        this.cinemas = response.body;
                        if (response.body.errors) {
                            this.error = response.body.errors[0];
                        } else {
                            this.error = "";
                        }
                    },
                    function (response) {
                    }
                );
            },

        },
        filters: {
            formatDistance: function (data) {
                return Number((data).toFixed(2));
            }
        },
        data: function () {
            return {
                endpoint: process.env.VUE_APP_SHOWTIMES_ENDPOINT,
                cinemas: '',
                error: '',
            };
        }
    }
</script>
