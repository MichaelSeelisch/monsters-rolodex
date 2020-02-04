<template>
    <li v-bind:class="todo.done ? 'done' : 'open'">
      {{todo.title}}
      <span v-if="todo.done" v-on:click="toggleState(todo.id)">✔</span>
      <span v-else @click="toggleState(todo.id)">✘</span>
    </li>
</template>

<script>
  export default {
    props: ['todo'],
    methods: {
      toggleState() {
        this.$emit('toggle-state', this.todo.id);
      }
    },
  }
</script>

<style scoped>
  li {
    line-height: 30px;
    border: 1px solid darkgray;
    padding: 10px;
    margin: 2px 0;
    position: relative;
  }
  span {
    cursor: pointer;
    position: absolute;
    right: 10px;
  }

  .done {
    background-color: lightgreen;
  }

  .open {
    background-color: lightsalmon;
  }
</style>