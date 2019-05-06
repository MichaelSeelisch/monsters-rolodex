<template>
  <div>
    <p class="controls-container">
      <button v-on:click="onReplyButtonClick">Reply</button>
    </p>
    <comment-reply-form
      v-if="shouldShowReplyForm"
      :threadId="threadId"
      :parentCommentId="parentCommentId"
      v-on:comment-created="$emit('comment-created', $event)"
    ></comment-reply-form>
  </div>
</template>

<script>
import CommentReplyForm from "./CommentReplyForm";
export default {
  props: ["threadId", "parentCommentId"],
  name: "CommentControls",
  data () {
    return {
      shouldShowReplyForm: false
    };
  },
  components: {
    CommentReplyForm
  },
  methods: {
    onReplyButtonClick () {
      this.$set(this, "shouldShowReplyForm", !this.shouldShowReplyForm);
    }
  }
};
</script>

<style lang="scss">

</style>
