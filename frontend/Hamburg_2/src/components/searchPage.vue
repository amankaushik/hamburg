<template>
  <div id="SearchPage">

    <!--Header-->
    <header>
      <b-navbar class="myNavbar w3-container w3-top w3-white w3-xlarge
        w3-padding-16 w3-padding-small">
        <b-container fluid>
          <!--Title-->
          <b-navbar-brand href="#" class="title">BEVERLY BVLD</b-navbar-brand>
          <!--Search Bar-->
          <form @submit.prevent="getResults" class="searchForm">
            <b-input-group>
              <b-form-input v-model="query" class="searchBar"
                type="text" name="search" placeholder="Search..."/>
              </b-input-group>  
          </form>
          <!--Hamburger Button-->
          <b-button class="hamburger w3-button w3-white btn-lg" @click="openSidebar()">☰</b-button>
        </b-container>
      </b-navbar>
    </header>

    <!--Hamburger Menu / Sidebar-->
    <div>
      <nav class="mySidebar w3-sidebar w3-bar-block w3-black
        w3-animate-right w3-top w3-text-light-grey w3-large" 
        v-bind:style="{ display: unHide}" id="mySidebar" ref="mySidebar">
        <a href="javascript:void()" @click="closeSidebar()"
          class="w3-bar-item w3-button w3-center w3-padding-32">CLOSE</a>
        <a href="#" @click="closeSidebar()"
          class="w3-bar-item w3-button w3-center w3-padding-16">ABOUT US</a>
        <a href="#contact" @click="closeSidebar()"
          class="w3-bar-item w3-button w3-center w3-padding-16">CONTACT</a>
      </nav>
      <div v-bind:class="{ bar: unHide }"/>
    </div>
    
    <!--Content-->
    <div class="main container-fluid">
      <div class="holder">
        <section  v-if="error.length">
          <div>
            <b-card class="bucket">
              <b-media tag="li" class="my-4">
                <b-img slot="aside" v-bind:src="posterBase+result.poster_path" 
                  height="144" width="96" alt="placeholder" />
                <h5 class="mt-0 mt-1"><b>{{ result.title }}</b></h5>
                <p>{{this.error}}</p>
              </b-media>
            </b-card>
          </div>
        </section>
        <section  v-else>  
          <ul class="list-unstyled">
            <b-card class="bucket" v-for="(result, index) in res2.results" :key="index">
              <b-media tag="li" class="my-4">
                <b-img slot="aside" v-bind:src="posterBase+result.poster_path" 
                  height="144" width="96" alt="placeholder" />
                <h5 class="mt-0 mt-1"><b>{{ result.title }}</b></h5>
                <p>{{ result.overview }}</p>
                <p><b>Released Date:</b> {{ result.release_date }}</p>
              </b-media>
              <!--Extra Content->
              <div>
                <b-media tag="li">
                  <b-img slot="aside" img-src="https://image.tmdb.org/t/p/original/d4qVNJmaFGwctFjkS4RnZ6WPjwp.jpg" 
                    blank blank-color="#abc" height="128" width="96" alt="placeholder" />
                  <h5 class="mt-0">Title {{ movie }}</h5>
                    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante
                    sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis.
                    Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis
                    in faucibus.
                </b-media>
                <b-media tag="li" class="my-4">
                  <b-img slot="aside" img-src="https://image.tmdb.org/t/p/original/d4qVNJmaFGwctFjkS4RnZ6WPjwp.jpg" 
                    blank blank-color="#bca" height="128" width="96" alt="placeholder" />
                  <h5 class="mt-0">Title {{ movie }}</h5>
                    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante
                    sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis.
                    Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis
                    in faucibus.
                </b-media>
                <b-media tag="li" class="my-4">
                  <b-img slot="aside" img-src="https://image.tmdb.org/t/p/original/d4qVNJmaFGwctFjkS4RnZ6WPjwp.jpg" 
                    blank blank-color="#cab" height="128" width="96" alt="placeholder" />
                  <h5 class="mt-0">Title {{ movie }}</h5>
                    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante
                    sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis.
                    Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis
                    in faucibus.
                </b-media>
                <b-media tag="li" class="my-4">
                  <b-img slot="aside" img-src="https://image.tmdb.org/t/p/original/d4qVNJmaFGwctFjkS4RnZ6WPjwp.jpg" 
                    blank blank-color="#abc" height="128" width="96" alt="placeholder" />
                  <h5 class="mt-0">Title {{ movie }}</h5>
                    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante
                    sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis.
                    Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis
                    in faucibus.
                </b-media>
                <b-media tag="li" class="my-4">
                  <b-img slot="aside" img-src="https://image.tmdb.org/t/p/original/d4qVNJmaFGwctFjkS4RnZ6WPjwp.jpg" 
                    blank blank-color="#bca" height="128" width="96" alt="placeholder" />
                  <h5 class="mt-0">Title {{ movie }}</h5>
                    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante
                    sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis.
                    Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis
                    in faucibus.
                </b-media>
                <b-media tag="li" class="my-4">
                  <b-img slot="aside" img-src="https://image.tmdb.org/t/p/original/d4qVNJmaFGwctFjkS4RnZ6WPjwp.jpg" 
                    blank blank-color="#cab" height="128" width="96" alt="placeholder" />
                  <h5 class="mt-0">Title {{ movie }}</h5>
                    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante
                    sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis.
                    Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis
                    in faucibus.
                </b-media>
                <b-media tag="li" class="my-4">
                  <b-img slot="aside" img-src="https://image.tmdb.org/t/p/original/d4qVNJmaFGwctFjkS4RnZ6WPjwp.jpg" 
                    blank blank-color="#abc" height="128" width="96" alt="placeholder" />
                  <h5 class="mt-0">Title {{ movie }}</h5>
                    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante
                    sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis.
                    Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis
                    in faucibus.
                </b-media>
                <b-media tag="li" class="my-4">
                  <b-img slot="aside" img-src="https://image.tmdb.org/t/p/original/d4qVNJmaFGwctFjkS4RnZ6WPjwp.jpg" 
                    blank blank-color="#bca" height="128" width="96" alt="placeholder" />
                  <h5 class="mt-0">Title {{ movie }}</h5>
                    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante
                    sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis.
                    Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis
                    in faucibus.
                </b-media>
                <b-media tag="li" class="my-4">
                  <b-img slot="aside" img-src="https://image.tmdb.org/t/p/original/d4qVNJmaFGwctFjkS4RnZ6WPjwp.jpg" 
                    blank blank-color="#cab" height="128" width="96" alt="placeholder" />
                  <h5 class="mt-0">Title {{ movie }}</h5>
                    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante
                    sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis.
                    Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis
                    in faucibus.
                </b-media>
                <b-media tag="li" class="my-4">
                  <b-img slot="aside" img-src="https://image.tmdb.org/t/p/original/d4qVNJmaFGwctFjkS4RnZ6WPjwp.jpg" 
                    blank blank-color="#abc" height="128" width="96" alt="placeholder" />
                  <h5 class="mt-0">Title {{ movie }}</h5>
                    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante
                    sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis.
                    Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis
                    in faucibus.
                </b-media>
                <b-media tag="li" class="my-4">
                  <b-img slot="aside" img-src="https://image.tmdb.org/t/p/original/d4qVNJmaFGwctFjkS4RnZ6WPjwp.jpg" 
                    blank blank-color="#bca" height="128" width="96" alt="placeholder" />
                  <h5 class="mt-0">Title {{ movie }}</h5>
                    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante
                    sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis.
                    Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis
                    in faucibus.
                </b-media>
                <b-media tag="li" class="my-4">
                  <b-img slot="aside" img-src="https://image.tmdb.org/t/p/original/d4qVNJmaFGwctFjkS4RnZ6WPjwp.jpg" 
                    blank blank-color="#cab" height="128" width="96" alt="placeholder" />
                  <h5 class="mt-0">Title {{ movie }}</h5>
                    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante
                    sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis.
                    Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis
                    in faucibus.
                </b-media>
                <b-media tag="li" class="my-4">
                  <b-img slot="aside" img-src="https://image.tmdb.org/t/p/original/d4qVNJmaFGwctFjkS4RnZ6WPjwp.jpg" 
                    blank blank-color="#abc" height="128" width="96" alt="placeholder" />
                  <h5 class="mt-0">Title {{ movie }}</h5>
                    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante
                    sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis.
                    Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis
                    in faucibus.
                </b-media>
                <b-media tag="li" class="my-4">
                  <b-img slot="aside" img-src="https://image.tmdb.org/t/p/original/d4qVNJmaFGwctFjkS4RnZ6WPjwp.jpg" 
                    blank blank-color="#bca" height="128" width="96" alt="placeholder" />
                  <h5 class="mt-0">Title {{ movie }}</h5>
                    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante
                    sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis.
                    Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis
                    in faucibus.
                </b-media>
                <b-media tag="li" class="my-4">
                  <b-img slot="aside" img-src="https://image.tmdb.org/t/p/original/d4qVNJmaFGwctFjkS4RnZ6WPjwp.jpg" 
                    blank blank-color="#cab" height="128" width="96" alt="placeholder" />
                  <h5 class="mt-0">Title {{ movie }}</h5>
                    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante
                    sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis.
                    Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis
                    in faucibus.
                </b-media>
                <b-media tag="li" class="my-4">
                  <b-img slot="aside" img-src="https://image.tmdb.org/t/p/original/d4qVNJmaFGwctFjkS4RnZ6WPjwp.jpg" 
                    blank blank-color="#abc" height="128" width="96" alt="placeholder" />
                  <h5 class="mt-0">Title {{ movie }}</h5>
                    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante
                    sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis.
                    Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis
                    in faucibus.
                </b-media>
                <b-media tag="li" class="my-4">
                  <b-img slot="aside" img-src="https://image.tmdb.org/t/p/original/d4qVNJmaFGwctFjkS4RnZ6WPjwp.jpg" 
                    blank blank-color="#bca" height="128" width="96" alt="placeholder" />
                  <h5 class="mt-0">Title {{ movie }}</h5>
                    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante
                    sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis.
                    Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis
                    in faucibus.
                </b-media>
                <b-media tag="li" class="my-4">
                  <b-img slot="aside" img-src="https://image.tmdb.org/t/p/original/d4qVNJmaFGwctFjkS4RnZ6WPjwp.jpg" 
                    blank blank-color="#cab" height="128" width="96" alt="placeholder" />
                  <h5 class="mt-0">Title {{ movie }}</h5>
                    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante
                    sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis.
                    Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis
                    in faucibus.
                </b-media>
                <b-media tag="li" class="my-4">
                  <b-img slot="aside" img-src="https://image.tmdb.org/t/p/original/d4qVNJmaFGwctFjkS4RnZ6WPjwp.jpg" 
                    blank blank-color="#abc" height="128" width="96" alt="placeholder" />
                  <h5 class="mt-0">Title {{ movie }}</h5>
                    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante
                    sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis.
                    Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis
                    in faucibus.
                </b-media>
                <b-media tag="li" class="my-4">
                  <b-img slot="aside" img-src="https://image.tmdb.org/t/p/original/d4qVNJmaFGwctFjkS4RnZ6WPjwp.jpg" 
                    blank blank-color="#bca" height="128" width="96" alt="placeholder" />
                  <h5 class="mt-0">Title {{ movie }}</h5>
                    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante
                    sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis.
                    Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis
                    in faucibus.
                </b-media>
                <b-media tag="li" class="my-4">
                  <b-img slot="aside" img-src="https://image.tmdb.org/t/p/original/d4qVNJmaFGwctFjkS4RnZ6WPjwp.jpg" 
                    blank blank-color="#cab" height="128" width="96" alt="placeholder" />
                  <h5 class="mt-0">Title {{ movie }}</h5>
                    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante
                    sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis.
                    Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis
                    in faucibus.
                </b-media>
                <b-media tag="li" class="my-4">
                  <b-img slot="aside" img-src="https://image.tmdb.org/t/p/original/d4qVNJmaFGwctFjkS4RnZ6WPjwp.jpg" 
                    blank blank-color="#abc" height="128" width="96" alt="placeholder" />
                  <h5 class="mt-0">Title {{ movie }}</h5>
                    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante
                    sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis.
                    Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis
                    in faucibus.
                </b-media>
                <b-media tag="li" class="my-4">
                  <b-img slot="aside" img-src="https://image.tmdb.org/t/p/original/d4qVNJmaFGwctFjkS4RnZ6WPjwp.jpg" 
                    blank blank-color="#bca" height="128" width="96" alt="placeholder" />
                  <h5 class="mt-0">Title {{ movie }}</h5>
                    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante
                    sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis.
                    Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis
                    in faucibus.
                </b-media>
                <b-media tag="li" class="my-4">
                  <b-img slot="aside" img-src="https://image.tmdb.org/t/p/original/d4qVNJmaFGwctFjkS4RnZ6WPjwp.jpg" 
                    blank blank-color="#cab" height="128" width="96" alt="placeholder" />
                  <h5 class="mt-0">Title {{ movie }}</h5>
                    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante
                    sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis.
                    Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis
                    in faucibus.
                </b-media>
                <b-media tag="li" class="my-4">
                  <b-img slot="aside" img-src="https://image.tmdb.org/t/p/original/d4qVNJmaFGwctFjkS4RnZ6WPjwp.jpg" 
                    blank blank-color="#abc" height="128" width="96" alt="placeholder" />
                  <h5 class="mt-0">Title {{ movie }}</h5>
                    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante
                    sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis.
                    Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis
                    in faucibus.
                </b-media>
                <b-media tag="li" class="my-4">
                  <b-img slot="aside" img-src="https://image.tmdb.org/t/p/original/d4qVNJmaFGwctFjkS4RnZ6WPjwp.jpg" 
                    blank blank-color="#bca" height="128" width="96" alt="placeholder" />
                  <h5 class="mt-0">Title {{ movie }}</h5>
                    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante
                    sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis.
                    Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis
                    in faucibus.
                </b-media>
                <b-media tag="li" class="my-4">
                  <b-img slot="aside" img-src="https://image.tmdb.org/t/p/original/d4qVNJmaFGwctFjkS4RnZ6WPjwp.jpg" 
                    blank blank-color="#cab" height="128" width="96" alt="placeholder" />
                  <h5 class="mt-0">Title {{ movie }}</h5>
                    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante
                    sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis.
                    Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis
                    in faucibus.
                </b-media>
                <b-media tag="li" class="my-4">
                  <b-img slot="aside" img-src="https://image.tmdb.org/t/p/original/d4qVNJmaFGwctFjkS4RnZ6WPjwp.jpg" 
                    blank blank-color="#abc" height="128" width="96" alt="placeholder" />
                  <h5 class="mt-0">Title {{ movie }}</h5>
                    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante
                    sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis.
                    Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis
                    in faucibus.
                </b-media>
                <b-media tag="li" class="my-4">
                  <b-img slot="aside" img-src="https://image.tmdb.org/t/p/original/d4qVNJmaFGwctFjkS4RnZ6WPjwp.jpg" 
                    blank blank-color="#bca" height="128" width="96" alt="placeholder" />
                  <h5 class="mt-0">Title {{ movie }}</h5>
                    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante
                    sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis.
                    Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis
                    in faucibus.
                </b-media>
                <b-media tag="li" class="my-4">
                  <b-img slot="aside" img-src="https://image.tmdb.org/t/p/original/d4qVNJmaFGwctFjkS4RnZ6WPjwp.jpg" 
                    blank blank-color="#cab" height="128" width="96" alt="placeholder" />
                  <h5 class="mt-0">Title {{ movie }}</h5>
                    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante
                    sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis.
                    Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis
                    in faucibus.
                </b-media>
                <b-media tag="li" class="my-4">
                  <b-img slot="aside" img-src="https://image.tmdb.org/t/p/original/d4qVNJmaFGwctFjkS4RnZ6WPjwp.jpg" 
                    blank blank-color="#abc" height="128" width="96" alt="placeholder" />
                  <h5 class="mt-0">Title {{ movie }}</h5>
                    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante
                    sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis.
                    Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis
                    in faucibus.
                </b-media>
                <b-media tag="li" class="my-4">
                  <b-img slot="aside" img-src="https://image.tmdb.org/t/p/original/d4qVNJmaFGwctFjkS4RnZ6WPjwp.jpg" 
                    blank blank-color="#bca" height="128" width="96" alt="placeholder" />
                  <h5 class="mt-0">Title {{ movie }}</h5>
                    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante
                    sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis.
                    Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis
                    in faucibus.
                </b-media>
                <b-media tag="li" class="my-4">
                  <b-img slot="aside" img-src="https://image.tmdb.org/t/p/original/d4qVNJmaFGwctFjkS4RnZ6WPjwp.jpg" 
                    blank blank-color="#cab" height="128" width="96" alt="placeholder" />
                  <h5 class="mt-0">Title {{ movie }}</h5>
                    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante
                    sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis.
                    Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis
                    in faucibus.
                </b-media>
                <b-media tag="li" class="my-4">
                  <b-img slot="aside" img-src="https://image.tmdb.org/t/p/original/d4qVNJmaFGwctFjkS4RnZ6WPjwp.jpg" 
                    blank blank-color="#abc" height="128" width="96" alt="placeholder" />
                  <h5 class="mt-0">Title {{ movie }}</h5>
                    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante
                    sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis.
                    Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis
                    in faucibus.
                </b-media>
                <b-media tag="li" class="my-4">
                  <b-img slot="aside" img-src="https://image.tmdb.org/t/p/original/d4qVNJmaFGwctFjkS4RnZ6WPjwp.jpg" 
                    blank blank-color="#bca" height="128" width="96" alt="placeholder" />
                  <h5 class="mt-0">Title {{ movie }}</h5>
                    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante
                    sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis.
                    Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis
                    in faucibus.
                </b-media>
                <b-media tag="li" class="my-4">
                  <b-img slot="aside" img-src="https://image.tmdb.org/t/p/original/d4qVNJmaFGwctFjkS4RnZ6WPjwp.jpg" 
                    blank blank-color="#cab" height="128" width="96" alt="placeholder" />
                  <h5 class="mt-0">Title {{ movie }}</h5>
                    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante
                    sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis.
                    Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis
                    in faucibus.
                </b-media>
                <b-media tag="li" class="my-4">
                  <b-img slot="aside" img-src="https://image.tmdb.org/t/p/original/d4qVNJmaFGwctFjkS4RnZ6WPjwp.jpg" 
                    blank blank-color="#abc" height="128" width="96" alt="placeholder" />
                  <h5 class="mt-0">Title {{ movie }}</h5>
                    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante
                    sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis.
                    Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis
                    in faucibus.
                </b-media>
                <b-media tag="li" class="my-4">
                  <b-img slot="aside" img-src="https://image.tmdb.org/t/p/original/d4qVNJmaFGwctFjkS4RnZ6WPjwp.jpg" 
                    blank blank-color="#bca" height="128" width="96" alt="placeholder" />
                  <h5 class="mt-0">Title {{ movie }}</h5>
                    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante
                    sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis.
                    Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis
                    in faucibus.
                </b-media>
                <b-media tag="li" class="my-4">
                  <b-img slot="aside" img-src="https://image.tmdb.org/t/p/original/d4qVNJmaFGwctFjkS4RnZ6WPjwp.jpg" 
                    blank blank-color="#cab" height="128" width="96" alt="placeholder" />
                  <h5 class="mt-0">Title {{ movie }}</h5>
                    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante
                    sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis.
                    Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis
                    in faucibus.
                </b-media>
                <b-media tag="li" class="my-4">
                  <b-img slot="aside" img-src="https://image.tmdb.org/t/p/original/d4qVNJmaFGwctFjkS4RnZ6WPjwp.jpg" 
                    blank blank-color="#abc" height="128" width="96" alt="placeholder" />
                  <h5 class="mt-0">Title {{ movie }}</h5>
                    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante
                    sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis.
                    Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis
                    in faucibus.
                </b-media>
                <b-media tag="li" class="my-4">
                  <b-img slot="aside" img-src="https://image.tmdb.org/t/p/original/d4qVNJmaFGwctFjkS4RnZ6WPjwp.jpg" 
                    blank blank-color="#bca" height="128" width="96" alt="placeholder" />
                  <h5 class="mt-0">Title {{ movie }}</h5>
                    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante
                    sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis.
                    Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis
                    in faucibus.
                </b-media>
                <b-media tag="li" class="my-4">
                  <b-img slot="aside" img-src="https://image.tmdb.org/t/p/original/d4qVNJmaFGwctFjkS4RnZ6WPjwp.jpg" 
                    blank blank-color="#cab" height="128" width="96" alt="placeholder" />
                  <h5 class="mt-0">Title {{ movie }}</h5>
                    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante
                    sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis.
                    Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis
                    in faucibus.
                </b-media>
                <b-media tag="li" class="my-4">
                  <b-img slot="aside" img-src="https://image.tmdb.org/t/p/original/d4qVNJmaFGwctFjkS4RnZ6WPjwp.jpg" 
                    blank blank-color="#abc" height="128" width="96" alt="placeholder" />
                  <h5 class="mt-0">Title {{ movie }}</h5>
                    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante
                    sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis.
                    Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis
                    in faucibus.
                </b-media>
                <b-media tag="li" class="my-4">
                  <b-img slot="aside" img-src="https://image.tmdb.org/t/p/original/d4qVNJmaFGwctFjkS4RnZ6WPjwp.jpg" 
                    blank blank-color="#bca" height="128" width="96" alt="placeholder" />
                  <h5 class="mt-0">Title {{ movie }}</h5>
                    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante
                    sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis.
                    Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis
                    in faucibus.
                </b-media>
                <b-media tag="li" class="my-4">
                  <b-img slot="aside" img-src="https://image.tmdb.org/t/p/original/d4qVNJmaFGwctFjkS4RnZ6WPjwp.jpg" 
                    blank blank-color="#cab" height="128" width="96" alt="placeholder" />
                  <h5 class="mt-0">Title {{ movie }}</h5>
                    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante
                    sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis.
                    Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis
                    in faucibus.
                </b-media>
                <b-media tag="li" class="my-4">
                  <b-img slot="aside" img-src="https://image.tmdb.org/t/p/original/d4qVNJmaFGwctFjkS4RnZ6WPjwp.jpg" 
                    blank blank-color="#abc" height="128" width="96" alt="placeholder" />
                  <h5 class="mt-0">Title {{ movie }}</h5>
                    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante
                    sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis.
                    Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis
                    in faucibus.
                </b-media>
              </div>-->
            </b-card>  
          </ul>
        </section>  
      </div>
    </div>

    <!--footer-->
    <div>
      <footer class="foot w3-container w3-padding-32 w3-grey">
        <div class="w3-row-padding">
          <div class="teamInfo1 w3-third">
            <br><br><br>
            <p>Pallavi Bahl</p>
            <p>Sakshi Gautam</p>
          </div>
          <div class="teamInfo2 w3-third">
            <h2>Team Hamburg</h2>
            <br><br>
            <p>Aman Kaushik</p>
          </div>
          <div class="teamInfo3 w3-third">
            <br><br><br>
            <p>Summan Parlapalli</p>
            <p>Abhishek Gupta</p>
          </div>
        </div>
      </footer>
    </div>
  </div>
</template>

<script >
export default{
  name: 'SearchPage',
  data() {
    return {
      unHide: 'none',
      results: {},
      query: '',
      posterBase:"https://image.tmdb.org/t/p/w185",
      error: '',
      res2: {'page': 1, 'total_results': 34, 'total_pages': 2, 'results': [{'vote_count': 1, 'id': 335983, 'vote_average': 0, 'title': 'Venom', 'popularity': 74.432, 'poster_path': '/2uNW4WbgBXL25BAbXGLnLqX71Sw.jpg', 'original_language': 'en', 'original_title': 'Venom', 'genre_ids': [27, 878, 28, 53], 'backdrop_path': '/VuukZLgaCrho2Ar8Scl9HtV3yD.jpg',  'overview': 'When Eddie Brock acquires the powers of a symbiote, he will have to release his alter-ego "Venom" to save his life.', 'release_date': '2018-10-05'}, {'vote_count': 73, 'id': 7182,  'vote_average': 4.9, 'title': 'Venom', 'popularity': 6.223, 'poster_path': '/emvWGHI2yqExS8yVyi0rFbGAxEw.jpg', 'original_language': 'en', 'original_title': 'Venom', 'genre_ids': [27, 53], 'backdrop_path': '/kYunyHbUKs2bkAJ4xupKuXuSliN.jpg',  'overview': "Venom is a fright-filled voodoo thriller loaded with a sizzling cast of the screen's hottest young stars. Set deep in the eerie swamps of southern Louisiana - Agnes Bruckner (Murder By Numbers), Jonathan Jackson (Tuck Everlasting) and Meagan Good (Roll Bounce) are among a group of teenagers trying to uncover the truth behind a friend's mysterious death. What they find is an evil force more deadly than anyone could have imagined ... now they are running for their lives!", 'release_date': '2005-09-16'}, {'vote_count': 19, 'id': 30789,  'vote_average': 6.8, 'title': 'Venom', 'popularity': 2.309, 'poster_path': '/dsniYFjhtrf9hYSIzrajaFfUT6V.jpg', 'original_language': 'en', 'original_title': 'Venom', 'genre_ids': [27, 53], 'backdrop_path': '/sP4mJmuIrjO9yqwnnbQvqr7C1yK.jpg',  'overview': "International terrorists attempt to kidnap a wealthy couple's child. Their plan comes unstuck when a deadly Black Mamba, sent by mistake instead of a harmless snake, escapes and the terrorists and several hostages are trapped in the boy's London home.", 'release_date': '1981-11-28'}, {'vote_count': 1, 'id': 251258, 'vote_average': 10, 'title': 'Venom', 'popularity': 1.436, 'poster_path': '/tMTQiWhLSCrpA3uUzQKdD1r2YL1.jpg', 'original_language': 'da', 'original_title': 'Gift', 'genre_ids': [18],   'overview': 'The story concerns a hedonistic young chap who delights in stirring up trouble with his video camera, screening filmed private intimate moments to parents of their children who are prominently featured on the video.', 'release_date': '1966-03-24'}, {'vote_count': 11, 'id': 29889,  'vote_average': 4.9, 'title': 'Silent Venom', 'popularity': 3.801, 'poster_path': '/rSFNAc0NAw9HmfqQS1KQzeY9l2O.jpg', 'original_language': 'en', 'original_title': 'Silent Venom', 'genre_ids': [28, 12, 27, 53], 'backdrop_path': '/18K5UwZOGlh3JaaFUhs1G7DzVqo.jpg',  'overview': 'The only thing more terrifying than Snakes on a Plane is "Snakes on a Submarine," and that\'s exactly what we get in this claustrophobic, sub-aquatic thriller starring Luke Perry. Lieutenant Commander O\'Neill (Perry) was piloting a retired submarine to its final port when Admiral Wallace (Tom Berenger) diverted the crew for one last mission: rescue an imperiled army research team before they meet a watery death. In order to reach the researchers and their top secret cargo while avoiding detection by a hostile enemy fleet, Lieutenant Commander O\'Neill orders his crew to "run silent" in the depths. That silence is soon broken, however, when the cargo proves to be two genetically altered leviathans. Now, far beneath the ocean floor, a new kind of predator emerges to prove just how vulnerable man truly is when there\'s nowhere left to run.', 'release_date': '2009-06-02'}, {'vote_count': 4, 'id': 204973,  'vote_average': 4, 'title': 'Venom', 'popularity': 0.772, 'poster_path': '/ciKCaYa3HIGRJdbwJ0aq2zdS6kS.jpg', 'original_language': 'en', 'original_title': 'Venom', 'genre_ids': [53], 'backdrop_path': '/tRChbPskrtZbQ0hxjuXyxcGLmJM.jpg',  'overview': 'After a car breaks down in an isolated desert, a mother and young daughter are relentlessly pursued by a deadly snake', 'release_date': '2011-07-15'}, {'vote_count': 1, 'id': 186351,  'vote_average': 5, 'title': 'Venom', 'popularity': 0.6, 'poster_path': '/hsf7sm5QxOh9t03xd37LK194vAw.jpg', 'original_language': 'en', 'original_title': 'Venom', 'genre_ids': [27],  'overview': 'A Nazi scientist and a woman known as a "spider goddess" attempt to develop a nerve gas made from spider venom.', 'release_date': '1975-02-01'}, {'vote_count': 10, 'id': 50410,  'vote_average': 6.7, 'title': 'Spider-Man: The Venom Saga', 'popularity': 1.4, 'poster_path': '/hgOdouYp5Cui2DBeRNIDqN05PdO.jpg', 'original_language': 'en', 'original_title': 'Spider-Man: The Venom Saga', 'genre_ids': [16], 'backdrop_path': '/zpXeYlzEOQMjvnWkzS2j3RaAFyh.jpg',  'overview': 'A space-shuttle crash-landing puts the famous web-slinger Spider-Man in contact with a living alien substance that bonds to his suit and enhances his super-powers. Unfortunately, the alien substance begins to change him and he feels the pull of evil, so discards the suit. The evil attaches itself to another host leading to an epic confrontation between good and evil.', 'release_date': '2005-06-07'}, {'vote_count': 0, 'id': 297431,  'vote_average': 0, 'title': "Venus's Venom", 'popularity': 0.6, 'poster_path': '/55jUUF66JNYn6wDfi5mOZF4bDmw.jpg', 'original_language': 'en', 'original_title': 'Kamandag Ni Venus', 'genre_ids': [27],  'overview': 'a film by Dyzal M. Damun.', 'release_date': '2014-03-12'}, {'vote_count': 1, 'id': 260345,  'vote_average': 5, 'title': 'Scorpion: Double Venom', 'popularity': 0.871, 'poster_path': '/4rYcghUEYgHENxpuGyBCQ9J3g4L.jpg', 'original_language': 'en', 'original_title': 'Sasori: Joshuu 701-gô', 'genre_ids': [],  'overview': "Nami Matsushima, a former doctor, is put in prison for murdering one of the men who raped and killed her sister. Now, faced with violent and lecherous prison gangs, an aggressively amorous warden, and with a friend on death row, Nami must steel herself for a ten year stay in one of Japan's toughest women's prisons.", 'release_date': '1998-10-23'}, {'vote_count': 0, 'id': 180465,  'vote_average': 0, 'title': 'Golden Venom', 'popularity': 0.6, 'poster_path': '/AuvIuhGm1JKp8dA8v2ZCisk4sa4.jpg', 'original_language': 'zh', 'original_title': '金蠶降', 'genre_ids': [],  'overview': 'A red headed villain (with a blue headed son), a witch and the warriors and monk that fight the two badguys.', 'release_date': '1991-01-01'}, {'vote_count': 3, 'id': 63400,  'vote_average': 8.3, 'title': 'Venom and Eternity', 'popularity': 0.6, 'poster_path': '/vUc1nBIHKn5Y4soDaKf9JgcYCBP.jpg', 'original_language': 'fr', 'original_title': "Traité de bave et d'éternité", 'genre_ids': [18], 'backdrop_path': '/1tgBbq7zvtNoh5nQN7SqkxXYSWB.jpg',  'overview': 'In this experimental film, Isidore Isou, the leader of the lettrist movement, lashes out at conventional cinema and offers a revolutionary form of movie-making: through scratching and bleaching the film, through desynchronizing the soundtrack and the visual track, through deconstructing the story, he aims to renew the seventh art the same way he tried to revolutionize the literary world.', 'release_date': '1951-04-19'}, {'vote_count': 0, 'id': 476395,  'vote_average': 0, 'title': 'Venom Islands', 'popularity': 0.6, 'poster_path': '/gw6Zilias6KoqlwciXkcSujRh35.jpg', 'original_language': 'en', 'original_title': 'Venom Islands', 'genre_ids': [99], 'backdrop_path': '/aA82ItPcd2hpbw6T4XTVU1SaWNR.jpg',  'overview': 'Venom expert Dr. Bryan Fry embarks on a dangerous island journey to uncover the deadly secrets of vipers, stonefish and the formidable Komodo dragon.', 'release_date': '2012-01-01'}, {'vote_count': 1, 'id': 260347,  'vote_average': 5, 'title': 'Scorpion: Double Venom 2', 'popularity': 0.6, 'poster_path': '/2fMPMoQVNke7KJJZwhjtCLBtHif.jpg', 'original_language': 'en', 'original_title': 'Sasori: Korosu tenshi 2', 'genre_ids': [],  'overview': "Nami Matsushima has escaped from the prison to which she was sentenced in Scorpion, but is now obsessed with tracking down the--don't laugh--one-armed man who murdered her younger sister fifteen years ago. Nami is certainly no great action heroine, and the plot at times makes little sense, climaxing with a coincidence more ridiculous than any Shakespeare ever used. For complicated reasons, Nami uses her medical knowledge to break into a women's prison as staff physician. There, as in the previous movie, the convicts wind up naked awfully frequently.", 'release_date': '1998-10-31'}, {'vote_count': 0, 'id': 492054,  'vote_average': 0, 'title': 'The Venom of Drugs', 'popularity': 0.6, 'poster_path': '/kGUsm0bJCkxKj55qWBc8AmU0dfq.jpg', 'original_language': 'tl', 'original_title': 'Kamandag ng Droga', 'genre_ids': [18, 80], 'backdrop_path': '/fajcn5JgvW1zufUy5tZTU8QQib2.jpg',  'overview': "An all-too-real film on the country's current war on drugs, the film tackles the angle of the family members and community of addicts and pushers.", 'release_date': '2017-12-06'}, {'vote_count': 0, 'id': 186504,  'vote_average': 0, 'title': 'Venom: Live in London', 'popularity': 0.6, 'poster_path': '/1Db4DU3Io1S8D7nBBZzP7XD1Bz.jpg', 'original_language': 'en', 'original_title': 'Venom: Live in London', 'genre_ids': [10402],  'overview': "Recorded Live at the Hammersmith Odeon Theatre, London, 8 October 1985. Can the bombast and fury of one of Extreme Metal's founders truly be captured on video? Turn it up and find out! Touring supporting 1985's POSSESSED, this would become one of the last documents of the original lineup, as guitarist Mantas would depart not long after. Songs: 01 - Too Loud (For the Crowd) - 02 - Black Metal - 03 - Nightmare - 04 - Countess Bathory - 05 - The Seven Gates of Hell (Bass Solo) - 06 - Buried Alive - 07 - Don't Burn The Witch - 08 - In Nomine Satanas - 09 - Welcome To Hell - 10 - Warhead (Guitar Solo) - 11 - Schizo - 12 - Satanachist - 13 - Bloodlust - 14 - Witching Hour", 'release_date': '2005-03-29'}, {'vote_count': 0, 'id': 384151,  'vote_average': 0, 'title': 'Venom: [2015] Hellfest', 'popularity': 0.6, 'poster_path': '/lc52Lkj63CMfreYwmbK8FGegIRD.jpg', 'original_language': 'en', 'original_title': 'Venom: [2015] Hellfest', 'genre_ids': [], 'backdrop_path': '/bbolAKptDe2pe0Qb6Bb2xEIjrC5.jpg',  'overview': '01 - Rise  02 - Bloodlust  03 - Die Hard  04 - Long Haired Punks  05 - Grinding Teeth  06 - Buried Alive  07 - The Evil One  08 - Welcome to Hell  09 - 1000 Days in Sodom  10 - Countess Bathory  11 - Warhead', 'release_date': '2015-06-20'}, {'vote_count': 0, 'id': 22859,  'vote_average': 0, 'title': 'G.I. Joe: Valor vs. Venom', 'popularity': 0.6, 'poster_path': '/qo4u6svNJaRE9THDtIbAcyfwvyg.jpg', 'original_language': 'en', 'original_title': 'G.I. Joe: Valor vs. Venom', 'genre_ids': [16, 10751], 'backdrop_path': '/uIekaOc3yxAgkYqG5z07PdJPOEp.jpg',  'overview': "G.I. Joe, perennial icon of American boyhood, gets a 21st-century update in a new CGI-animated children's series of thrilling military adventure. In this action-packed movie, as America's daring, highly trained special mission force, the G.I. Joe team faces its greatest threat yet from the evil Cobra Organization. Under the direction of Cobra Commander, DNA from the world's most ferocious animals", 'release_date': '2004-09-14'}, {'vote_count': 0, 'id': 513350,  'vote_average': 0, 'title': 'Venom And Eternity For Dummies', 'popularity': 0.6,  'original_language': 'en', 'original_title': 'Venom And Eternity For Dummies', 'genre_ids': [],  'overview': "Venom And Eternity For Dummies (2012) is a tribute to letterist poet Isidore Isou (On Venom and Eternity).  The film utilizes excerpts from Kaganof's own first feature Kyodai Makes the Big Time (1992).", 'release_date': '2012-03-22'}, {'vote_count': 1, 'id': 324160,  'vote_average': 9, 'title': 'John Wayne Parr: Blessed With Venom', 'popularity': 0.6, 'poster_path': '/k7qZDxEDq2knrW940RbVjuhXcWt.jpg', 'original_language': 'en', 'original_title': 'John Wayne Parr: Blessed With Venom', 'genre_ids': [99],  'overview': 'Chronicling the life and career of Australian Muay Thai superstar and 7 times World Champion, John Wayne Parr.', 'release_date': '2011-10-26'}]}
    };
  },
  methods: {
    getResults() {
      var endpoint = "https://fierce-gorge-62693.herokuapp.com/api/v1/moviedb/search/?format=json&query=" + this.query
      this.$http.get(endpoint).then(
        function(response) {
          this.results = response.body.results
          if(response.body.errors){
            this.error = response.body.errors[0]
          } 
          else {
            this.error = ''
          }
        }, 
        //function(response) {}
      )
    }
  }
};
</script>

<style>
.myNavbar {
  position: sticky;
  top: 0px;
  align-items: center;
  box-shadow: 0px -4px 40px rgb(146, 145, 145);
 }
.title {
  position: relative;
  font-size: 24px;
}
.searchForm {
  width: 50%;
}
.searchBar {
  position: relative;
  right: 70px;
  border: 0;
  box-shadow: 0px 1px 2px rgb(150, 149, 149);
  background-color:rgba(0,0,0,0) !important;
}
.searchBar:hover {
  background-color:rgba(238, 238, 238, 0.747) !important;
}
.searchBar:focus {
  box-shadow: 0px 1px 2px rgb(150, 149, 149);
}
.searcher {
  position: relative;
  background-color:rgba(0,0,0,0) !important;
  border: none;
}
.hamburger {
  position: relative;
  border: none;
  text-decoration: none !important
}
.hamburger:focus,.hamburger:active {
   outline: none !important;
   box-shadow: none;
}
.mySidebar {
  position: relative;
  z-index:3;
  max-width:250px;
  font-weight:bold;
  right:0;
  text-decoration: none !important
}
.main {
  position: relative;
  margin: 100px auto 30px;
  align-items: center;
  height: 100%;
  width: 60%;
}
.bucket {
  padding: 10px;
  margin: 20px auto;
  box-shadow: 0px 0px 40px lightgray;
}
footer {
  position: relative;
  width: 100%;
  box-shadow: 0px -5px 40px lightgray;
  }
.teamInfo1 {
  text-align: left;
}
.teamInfo2 {
  text-align: center;
}
.teamInfo3 {
  text-align: right;
}
#main {
    transition: margin-left .5s;
    padding: 20px;
}
</style>
