<template>
  <v-layout column>
    <v-flex xs6 offset-xs3>
      <div class='white elevation-2'>
        <v-toolbar flat dense class='cyan' dark>
          <v-toolbar-title>Register</v-toolbar-title>
        </v-toolbar>
    
        <div class="pl-4 pr-4 pt-2 pb-2">
          <input
            type='email'
            name='email'
            v-model='email'
            placeholder='Your E-Mail'
          />

          <input
            type='password'
            name='password'
            v-model='password'
            placeholder='Your Password'
          />

          <div v-html='error' class='error' /> 

          <v-btn
            class='cyan'
            @click='register'>
            Register
          </v-btn>
        </div>
      </div>
    </v-flex>
  </v-layout>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService';

export default {
  data () {
    return {
      email: 'abc',
      password: '123',
      error: null
    };
  },

  methods: {
    async register () {
      try {
        await AuthenticationService.register({
          email: this.email,
          password: this.password
        });
      } catch (error) {
        this.error = error.response.data.error;
      }
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

  .error {
    color: red;
  }
</style>
