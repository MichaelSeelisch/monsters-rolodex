<template>
  <div id="app">
    <div class="title-bar">
      <router-link :to="{ name: 'Dashboard'}">Home</router-link>
    </div>
    <div class="content">
      <div class="main-content">
        <router-view/>
      </div>
      <div class="sidebar">
        <p>
          <router-link class="new-post-link" :to="{ name: 'NewThreadPage'}">
            Create Thread
          </router-link>
        </p>
        <p>
          <router-link class="sign-up-link" :to="{ name: 'SignUpPage'}">
            Sign up
          </router-link>
        </p>
        <p>
          <router-link class="sign-in-link" :to="{ name: 'SignInPage'}">
            Sign In
          </router-link>
        </p>
        <div v-if="user">
          <p>Firstname: {{ user.first_name }}</p>
          <p>Lastname: {{ user.last_name }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import userService from "./services/user.service";
export default {
  name: "App",
  data () {
    return {
      user: null
    }
  },
  mounted () {
    if (this.user === null) {
      userService.getUser().then((user) => {
        this.$set(this, "user", user);
      });
    }
  }
};
</script>

<style>
body {
  background-color: #DAE0E6;
  margin: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
* {
  box-sizing: border-box;
}
.content {
  display: flex;
  flex-direction: row;
  width: 60%;
  margin: 40px auto 0;
}
.title-bar {
  padding: 20px;
}
.main-content {
  width: 70%;
  margin-right: 30px;
}
.sidebar {
  width: 30%;
  height: 500px;
  padding: 5px 10px;
  background-color: #FFFFFF;
}
.new-post-link {
  background-color: #5c5cdc;
  color: #FFFFFF;
  display: block;
  text-transform: uppercase;
  padding: 10px;
  font-weight: 600;
  text-decoration: none;
}
.title-bar {
  background-color: #FFFFFF;
}
</style>
