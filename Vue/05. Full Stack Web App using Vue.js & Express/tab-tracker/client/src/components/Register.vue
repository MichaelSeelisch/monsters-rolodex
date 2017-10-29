<template>
  <div>
    <h1>Register</h1>

    <input
      type='email'
      name='email'
      v-model='email'
      placeholder="Your E-Mail"
    />

    <input
      type='password'
      name='password'
      v-model='password'
      placeholder="Your Password"
    />

    <button
      @click='register'
    >Register</button>
  </div>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService';

export default {
  data () {
    return {
      email: 'abc',
      password: '123'
    };
  },

  methods: {
    async register () {
      await AuthenticationService.register({
        email: this.email,
        password: this.password
      });
    }
  },

  watch: {
    email (value) {
      console.log(`E-Mail has changed to ${value}.`);
    }
  },

  mounted () {
    setTimeout(() => {
      this.email = 'Some new E-Mail';
    }, 2000);
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  input {
    display: block;
    margin: auto;
    margin-bottom: 10px;
  }
</style>
