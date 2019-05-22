<template>
  <div id="app">
    <img alt="logo" src="./assets/logo_plint-sites.jpg">
    <div id="login-cntr">
      <p>I am {{ loggedin ? '' : 'not ' }}logged in</p>
      <button v-if="!loggedin" @click="toggleLogin">{{ showForm ? 'Hide' : 'Show' }} Login</button>
      <button v-else @click="logout">Logout</button>

      <div id="login-form" v-if="showForm">
        <i>Fill and submit the form</i>
        <br>
        <input type="text" placeholder="Your email">
        <br>
        <input type="password" placeholder="Password">
        <br>
        <button @click="attemptLogin">Sign in</button>
      </div>
    </div>
    
    <div id="configurator">
      <p>Currently we have {{ products.length }} product{{products.length > 1 ? 's' : ''}}</p>
      <ul>
        <li v-for="product in products" :key="product.id">
          <b>{{ product.amount }}x</b> {{ product.id}}
        </li>
      </ul>
      <p>Total price: &euro; {{ price }}</p>
      <button @click="addProduct">Add product</button><button @click="removeProduct(0)">Remove product</button>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  name: 'app',
  components: {},
  computed: {
    ...mapState('account', {
      loggedin: 'auth',
      showForm: 'showLoginForm',
    }),
    ...mapState('configurator', {
      products: 'products',
      price: 'price'
    })
  },
  methods: {
    ...mapActions('account', [
      'showLogin',
      'hideLogin',
      'attemptLogin',
      'logout',
    ]),
    ...mapActions('configurator', [
      'addProduct',
      'removeProduct',
      'updatePrice'
    ]),
    toggleLogin() {
      if (this.showForm) {
        this.hideLogin()
      } else {
        this.showLogin()
      }
    },
  },
  mounted() {
    // updatePrice to have a correct baseprice when we start
    this.updatePrice()
  },
}
</script>

<style lang="less">
body {
  margin: 0;
  background: #fdfdfd;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
  width: 1000px;
  margin-left: auto;
  margin-right: auto;
}

p {
  margin: 0 0 10px 0;
}

i {
  font-size: 13px;
}

img {
  max-width: 750px;
}

button {
  width: 150px;
  padding: 6px 18px;
  border-radius: 3px;
  background: #1da025;
  color: white;
  font-size: 14px;

  &:focus {
    outline: none;
    border: 1px solid greenyellow;
  }
}

#login-cntr {
  background: #e2e1f9;
  padding: 20px 0;

  #login-form {
    padding-top: 15px;
    padding-bottom: 15px;
    input {
      width: 150px;
      height: 28px;
      padding-left: 5px;
      box-sizing: border-box;
      margin-bottom: 5px;
    }
  }
}

#configurator {
  padding: 20px 0;

  ul {
    list-style: none;
  }
}
</style>
