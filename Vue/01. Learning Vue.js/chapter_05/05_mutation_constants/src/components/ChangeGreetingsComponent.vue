<template>
  <input :value='msg' @keyup='changeMsg'>
  <!-- <input :value='getMessage' @keyup='changeMsg'> -->
</template> 

<script>
  import { mapGetters } from 'vuex';
  import { CHANGE_MSG } from '../vuex/Mutation_Types';

  export default {
    computed: mapGetters({
      msg: 'getMessage'
    }),
    /*
      computed: {
        ...mapGetters(['getMessage'])
      },
    */
    methods: {
      changeMsg(ev) {
        this.$store.commit(CHANGE_MSG, ev.target.value);
      }
    }
  }; 
</script>