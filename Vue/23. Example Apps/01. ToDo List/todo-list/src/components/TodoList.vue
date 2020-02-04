<template>
  <ul>
    <TodoForm v-if="create" v-on:save="save($event)"></TodoForm>
    <ul v-else>
        <TodoListItem v-for="todo in todos" v-bind:todo="todo" v-bind:key="todo.id"
         v-on:toggle-state="toggleState($event)"></TodoListItem>
        <button v-on:click="create = true">new</button>
    </ul>
  </ul>
</template>

<script>
  import TodoListItem from './TodoListItem.vue';
  import TodoForm from './TodoForm';

  export default {
    components: {
      TodoListItem,
      TodoForm
    },
    async mounted() {
      const response = await fetch('http://localhost:8080/todos');
      this.todos = await response.json();
    },
    data() {
      return {todos: [], create: false};
    },
    methods: {
        async toggleState(id) {
            const index = this.todos.findIndex((todo) => todo.id === id);
            const todo = this.todos[index];
            todo.done = !todo.done;
            await fetch(`http://localhost:8080/todos/${todo.id}`, {
                method: 'PUT',
                headers: {'content-type': 'application/json'},
                body: JSON.stringify(todo),
            });
        },
        async save(todo) {
            await fetch('http://localhost:8080/todos', {
                method: 'POST',
                headers: {'content-type': 'application/json'},
                body: JSON.stringify(todo),
            });
            this.create = false;
        }
    }
  }
</script>

<style scoped>
  ul {
    list-style: none;
    padding-left: 0;
    width: 400px;
    margin: 0 auto;
  }
  li {
    line-height: 30px;
    border: 1px solid darkgray;
    padding: 10px;
    margin: 2px 0;
    position: relative;
  }
  span {
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