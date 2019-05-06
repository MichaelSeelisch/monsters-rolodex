<template>
  <div class="single-thread">
    <div class="thread-content" v-if="thread !== null">
      <h2>{{ thread.title }}</h2>
      <p>{{ thread.description }}</p>
    </div>
    <comment-reply-form
      v-if="thread !== null"
      :key="thread._id"
      :threadId="thread._id"
      :parentCommentId="null"
      v-on:comment-created="handleCommentCreated"
      >
    </comment-reply-form>
    <div class="comments-list">
      <comment
        v-for="comment in comments"
        :comment="comment"
        :key="comment._id"
      ></comment>
    </div>
    <p><span class="load-more-comments-link" v-on:click="loadMoreComments">Load more comments</span></p>
  </div>
</template>

<script>
import commentService from "../services/comment.service";
import Comment from "./threadPage/Comment";
import CommentReplyForm from "./threadPage/CommentReplyForm";
export default {
  components: {
    Comment,
    CommentReplyForm
  },
  name: "ThreadPage",
  data () {
    return {
      comments: [],
      thread: null
    };
  },
  methods: {
    handleCommentCreated (newComment) {
      this.comments.push(newComment);
    },
    loadMoreComments () {
      let existingCommentIds = this.comments.map(comment => comment.ownProperties._id);
      commentService.loadMoreComments(this.thread._id, existingCommentIds, null)
        .then(((comments) => {
          let nonExistingComments = comments.filter((comment) => {
            return !this.comments.find((existingComment) => {
              return existingComment.ownProperties._id === comment.ownProperties._id;
            });
          });
          debugger;
          nonExistingComments.forEach((comment) => {
            this.comments.push(comment);
          });
        }).bind(this))
    }
  },
  mounted () {
    commentService.findAllByThreadId(this.$route.params.threadId).then(data => {
      // debugger;
      this.$set(this, "comments", data.comments);
      this.$set(this, "thread", data.thread);
    });
  }
};
</script>

<style lang="scss" scoped>
.comments-list {
  padding: 10px;
}
.single-thread {
  background-color: #ffffff;
  text-align: left;
  padding: 10px;
}
.thread-content {
  h2 {
    margin-top: 0;
  }
}
.load-more-comments-link {
  cursor: pointer;
}
</style>
