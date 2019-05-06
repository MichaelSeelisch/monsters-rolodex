<template>
  <div class="threads-list">
    <h2>My Threads</h2>
    <div v-for="thread in myThreads" :key="thread._id" class="thread">
      <router-link :to="{ name: 'ThreadPage', params: {threadId: thread._id }}">
        <p class="title-container">
          <a class="thread-title">{{ thread.title }}</a>
        </p>
        <p class="description-container">{{ thread.description }}</p>
      </router-link>
    </div>
    <h2>Other Threads</h2>
    <div v-for="thread in otherThreads" :key="thread._id" class="thread">
      <router-link :to="{ name: 'ThreadPage', params: {threadId: thread._id }}">
        <p class="title-container">
          <a class="thread-title">{{ thread.title }}</a>
        </p>
        <p class="description-container">{{ thread.description }}</p>
      </router-link>
    </div>
    <p v-if="myThreads.length === 0 && otherThreads.length === 0">No threads yet</p>
  </div>
</template>

<script>
import threadService from "../services/thread.service";
export default {
  data () {
    return {
      myThreads: [],
      otherThreads: []
    };
  },
  mounted (params) {
    threadService.findAll().then(data => {
      this.$set(this, "myThreads", data.myThreads);
      this.$set(this, "otherThreads", data.otherThreads);
    });
  }
};
</script>

<style lang="scss" scoped>
.thread {
  border: 1px solid #cccccc;
  background-color: #ffffff;
  padding: 10px;
  margin-bottom: 15px;
  text-align: left;
  > a {
    color: #000000;
    text-decoration: none;
  }
  .title-container {
    margin-top: 0;
  }
  .thread-title {
    color: #000000;
    font-weight: 600;
    font-size: 22px;
    text-decoration: none;
  }
  .description-container {
    margin: 0;
  }
  &:hover {
    border-color: #a9a8a8;
  }
}
</style>
