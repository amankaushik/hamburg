<template>
  <div id="app">
    <header class="w3-container w3-top w3-white w3-xlarge w3-padding-16">
      <span class="w3-left w3-padding">Beverly BVLD</span>
      <b-button class="hamburger w3-white btn-lg" @click="w3_open()">
      <span class="glyphicons glyphicons-menu-hamburger"></span>☰</b-button>
      <b-input class="search" type="text" name="search" placeholder="Search..."/>
    </header>
    <div id="mySidenav" class="sidenav">
      <a href="javascript:void(0)" class="closebtn" @click="closeNav()">&times;</a>
      <a href="#">About</a>
      <a href="#">Services</a>
      <a href="#">Clients</a>
      <a href="#">Contact</a>
    </div>
    <span @click="openNav()">open</span>
    <div id="main">
    </div>
  </div>
</template>

<script>

export default {
  name: 'app',
  function openNav() {
    document.getElementById('mySidenav').style.width = '250px';
    document.getElementById('main').style.marginLeft = '250px';
  }

  /* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
  function closeNav() {
    document.getElementById('mySidenav').style.width = '0';
    document.getElementById('main').style.marginLeft = '0';
  }
};
</script>

<style>
.hamburger {
  position: absolute;
  top: 20px;
  right: 20px;
  border: none;
}
.search {
  position: relative;
  top: 10px;
  width: 80%;
  border: none;
  background-color:rgba(0,0,0,0) !important;
}
.search:hover {
  position: relative;
  top: 10px;
  width: 80%;
  border: none;
  background-color:rgb(204, 201, 201) !important;
}
.sidenav {
    height: 100%; /* 100% Full-height */
    width: 0; /* 0 width - change this with JavaScript */
    position: fixed; /* Stay in place */
    z-index: 1; /* Stay on top */
    top: 0;
    left: 0;
    background-color: #111; /* Black*/
    overflow-x: hidden; /* Disable horizontal scroll */
    padding-top: 60px; /* Place content 60px from the top */
    transition: 0.5s; /* 0.5 second transition effect to slide in the sidenav */
}
.sidenav a {
    padding: 8px 8px 8px 32px;
    text-decoration: none;
    font-size: 25px;
    color: #818181;
    display: block;
    transition: 0.3s;
}
.sidenav a:hover {
    color: #f1f1f1;
}
.sidenav .closebtn {
    position: absolute;
    top: 0;
    right: 25px;
    font-size: 36px;
    margin-left: 50px;
}
#main {
    transition: margin-left .5s;
    padding: 20px;
}

</style>
