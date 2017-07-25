<template>
  <input :value='msg' @keyup='handleMessageInputChanges($event)' />
</template> 

<script>
  import { mapGetters, mapActions } from 'vuex';
  import { CHANGE_MSG } from '../vuex/Mutation_Types';

  export default {
    computed: mapGetters({
      msg: 'getMessage'
    }),

    methods: {
      ...mapActions([
        'handleMessageInputChanges'
      ])
    }
  }; 
</script>