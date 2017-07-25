<template>
  <h1>{{ msg }}</h1>
  <!-- <h1>{{ getMessage }}</h1> -->
</template> 

<script>
  import { mapGetters } from 'vuex';
  
  export default {
    computed: mapGetters({
      msg: 'getMessage'
    })
    /*
      computed: {
        ...mapGetters(['getMessage'])
      }
    */
  } 
</script>