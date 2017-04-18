<template>
  <div class="well">
    <div class="pomodoro-timer">
      <span>{{ min + ':' + sec }}</span>
    </div>
  </div>
</template>

<style scoped>
</style>

<script>
  export default {
    data () {
      return {
        min: 20,
        sec: 59
      }
    }
  }
</script>
