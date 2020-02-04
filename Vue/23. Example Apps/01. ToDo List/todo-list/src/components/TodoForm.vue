<template>
  <form>
    <div>
      <label for="title">Title: </label>
      <input type="text" v-model="todo.title" name="title" id="title">
    </div>
    <div>
      <label for="done">Done: </label>
      <input type="checkbox" v-model="todo.done" name="done" id="done">
    </div>
    <button v-on:click="save">save</button>
  </form>
</template>

<script>
    export default {
        data() {
            return {
                todo: {
                    title: '',
                    done: false
                }
            }
        },
        methods: {
            save() {
                this.$emit('save', this.todo);
            }
        }
    }
</script>

<style scoped></style>