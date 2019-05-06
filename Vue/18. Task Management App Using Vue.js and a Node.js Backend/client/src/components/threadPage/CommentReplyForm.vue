<template>
  <form v-on:submit.prevent="onReply" class="comment-reply-form">
    <p>
      <textarea name="text" id="text" v-model="text" cols="30" rows="10"></textarea>
    </p>
    <p class="submit-button-container">
      <input type="submit" value="Comment">
    </p>
  </form>
</template>

<script>
import commentService from "../../services/comment.service";
export default {
  props: ["threadId", "parentCommentId"],
  data () {
    return {
      text: ""
    };
  },
  name: "CommentReplyForm",
  methods: {
    onReply () {
      if (this.text.length === 0) {
        alert("You must enter text for the comment");
      }

      let $self = this;

      commentService.create(this.threadId, this.parentCommentId, this.text)
        .then((comment) => {
          $self.$emit("comment-created", comment);
        });
    }
  }
};
</script>

<style lang="scss" scoped>
.comment-reply-form {
  background-color: #ffffff;
  border: 1px solid #dcdcdc;
  p {
    margin: 0;
  }
  textarea {
    width: 100%;
    display: block;
    padding: 10px;
    margin: 0 0 20px;
    border-radius: 3px;
    outline: none;
    border: 0;
  }
  .submit-button-container {
    text-align: right;
    padding: 5px;
    background-color: #f0f2f5;
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
