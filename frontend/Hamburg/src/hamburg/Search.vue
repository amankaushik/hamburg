<template>
  <div id="search">
    <!--Header-->
    <div>
      <b-navbar class="myNavbar w3-container w3-top w3-white w3-xlarge
        w3-padding-16 w3-padding-small">
        <b-container fluid>
          <b-navbar-brand href="#" class="title">BEVERLY BVLD</b-navbar-brand>
          <b-input class="search" v-model="text1"
            type="text" name="search" placeholder="Search..." @submit="onSearch">
          </b-input>
          <b-button class="hamburger w3-button w3-white btn-lg" @click="openSidebar()">☰</b-button>
        </b-container>
        </b-navbar>
    </div>

 <!--sidebar-->
    <div>
      <nav class="mySidebar w3-sidebar w3-bar-block w3-black
        w3-animate-right w3-top w3-text-light-grey w3-large" id="mySidebar" ref="mySidebar">
        <a href="javascript:void()" @click="closeSidebar()"
          class="w3-bar-item w3-button w3-center w3-padding-32">CLOSE</a>
        <a href="#" @click="closeSidebar()"
          class="w3-bar-item w3-button w3-center w3-padding-16">ABOUT US</a>
        <a href="#contact" @click="closeSidebar()"
          class="w3-bar-item w3-button w3-center w3-padding-16">CONTACT</a>
      </nav>
    </div>

    <!--Content-->
    <div id="main">
      <p>Value: {{ text1 }}</p>
    </div>
    <main>
      <RobotBuilder/>
    </main>

    <!--footer-->
    <div>
      <footer class="foot w3-container w3-bottom w3-padding-32 w3-grey">
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
    };
  },
  methods: {
  },
};
</script>

<style>
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
.mySidebar {
  position: relative;
  z-index:3;
  max-width:250px;
  font-weight:bold;
  display: none;
  right:0;
  text-decoration: none !important
}
footer {
  position: fixed;
  bottom: 0px;
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
