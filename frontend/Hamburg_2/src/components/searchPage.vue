<template>
  <div id="Search">

    <!--Header-->
    <header>
      <b-navbar class="myNavbar w3-container w3-top w3-white w3-xlarge
        w3-padding-16 w3-padding-small">
        <b-container fluid>
          <b-navbar-brand href="#" class="title">BEVERLY BVLD</b-navbar-brand>
          <form @submit.prevent="searchString" class="searchForm">
            <b-input-group>
              <b-form-input v-model="text1" class="searchBar"
                type="text" name="search" placeholder="Search..."/>
              </b-input-group>  
          </form>
          <b-button class="hamburger w3-button w3-white btn-lg" @click="openSidebar()">☰</b-button>
        </b-container>
      </b-navbar>
    </header>

    <!--sidebar-->
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
    </div>
    
    <!--Content-->
    <div class="main container">
      <div class="holder">
        <div v-bind:class="{ bar: unHide }"></div>
        <b-card class="bucket">
          <ul class="list-unstyled">
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
          </ul>
        </b-card>
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

<script>
export default{
  name: 'Search',
  data() {
    return {
      text1: '',
      unHide: 'none',
      texter: []
    };
  },
  methods: {
    searchString() {
      this.texter.push({text1: this.text1});
      this.text1 = '';
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
  width: 60%;
}
.searchBar {
  position: relative;
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
  display: none;
  right:0;
  text-decoration: none !important
}
.main {
  position: relative;
  top: 100px;
  margin: auto;
  align-items: center;
  height: 100%;
  width: 100%;
}
.bucket {
  box-shadow: 0px 0px 40px lightgray;
}
footer {
  position: sticky;
  width: 100%;
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
