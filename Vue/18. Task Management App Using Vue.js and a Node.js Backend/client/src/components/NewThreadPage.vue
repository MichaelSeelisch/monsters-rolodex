<template>
  <div>
    <h2>Create Thread</h2>
    <form v-on:submit.prevent="onSubmit" class="new-thread-form" action="">
      <p>
        <input type="text" placeholder="Title" name="title" id="title" v-model="title">
      </p>
      <p>
        <textarea name="description" placeholder="Text(optional)" id="description" v-model="description" cols="30" rows="10"></textarea>
      </p>
      <p class="submit-button-container">
        <input type="submit" value="Post">
      </p>
    </form>
  </div>
</template>

<script>
import threadService from "../services/thread.service";
export default {
  data () {
    return {
      title: "",
      description: ""
    };
  },
  methods: {
    onSubmit () {
      if (this.title.length === 0) {
        alert("You must enter a title");
      }
      threadService.create(this.title, this.description).then((newThread) => {
        this.$router.push({name: "ThreadPage", params: {threadId: newThread._id }});
      });
    }
  }
};
</script>

<style lang="scss" scoped>
h2 {
  margin-top: 0;
  text-align: left;
}
.new-thread-form {
  background-color: #ffffff;
  padding: 20px;
  p {
    margin: 0;
  }
  input[type=text], textarea {
    width: 100%;
    display: block;
    padding: 10px;
    margin: 0 0 20px;
    border: 1px solid #dcdcdc;
    border-radius: 3px;
  }
  .submit-button-container {
    text-align: right;
    padding: 5px;
    input {
      background-color: #5c5cdc;
      color: #ffffff;
      text-transform: uppercase;
      padding: 10px;
      font-weight: 600;
      text-decoration: none;
    }
  }
}
</style>
