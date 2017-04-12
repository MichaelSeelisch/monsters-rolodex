<template>
  <div>
    <h3>{{ isWorking ? workingTitle : restingTitle }}</h3>
    <p>
      {{ Math.pow(5, 2) }}
    </p>
  </div>
</template>

<style scoped>
</style>

<script>
  export default {
    data () {
      return {
        workingTitle: 'Work!',
        restingTitle: 'Rest!'
      }
    },
    props: ['isWorking']
  }
</script>

