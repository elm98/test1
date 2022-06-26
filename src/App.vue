<template>
  <div id="app" dir="rtl">
    <!-- <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </nav> -->
    <router-view></router-view>
  </div>
</template>

<style>
@font-face {
  font-family: "IRANSans";
  src: url("./assets/font/IRANSansWeb(FaNum).woff") format("woff");
  src: url("./assets/font/IRANSansWeb(FaNum).woff2");
  font-weight: normal;
  font-style: normal;
  font-display: swap;
}
* {
  font-family: "IRANSans";
    font-size: 14px;
}


body{
  background: #fafafa !important;
}

#app {

  text-align: center;
  color: #2c3e50;
      margin-top: 220px;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
.fs-12{
  font-size: 12px;
}
</style>
