<template>
  <div id="home">
    <div>
      <b-navbar class="myNavbar w3-container w3-top w3-white w3-xlarge
        w3-padding-16 w3-padding-small">
        <b-navbar-brand href="#" class="title">BEVERLY BVLD</b-navbar-brand>
        <b-input class="search" v-model="text1"
          type="text" name="search" placeholder="Search..." @submit="onSearch">
        </b-input>
        <b-button class="hamburger w3-button w3-white btn-lg" @click="openSidebar()">☰</b-button>
        </b-navbar>
    </div>
    <main>
      <Search/>
    </main>
  </div>
</template>

<script>
import Search from './hamburg/Search.vue';

export default {
  name: 'home',
  components: {
    Search,
  },
};
</script>

<style>
</style>

<style scoped>
#home {
  font-family: "Raleway", sans-serif;
}
body,h1,h2,h3,h4,h5 {
  font-family: "Raleway", sans-serif;
}
.myNavbar {
  position: sticky;
 }
.title {
  position: relative;
  font-size: 24px;
}
.search {
  position: relative;
  width: 70%;
  border: none;
  background-color:rgba(0,0,0,0) !important;
}
.search:hover {
  background-color:rgb(204, 201, 201) !important;
}
.hamburger {
  position: relative;
  padding: 15px;
  border: none;
  text-decoration: none !important
}
.hamburger:focus,.hamburger:active {
   outline: none !important;
   box-shadow: none;
}
main{
  margin : 0 auto;
  padding: 30px;
  background-color: white;
  width : 1024px;
  min-height: 300px;
}
.w3-quarter img
{
  margin-bottom: -6px;
  cursor: pointer
}
.w3-quarter img:hover{
  opacity: 0.6;
  transition: 0.3s
}
</style>
