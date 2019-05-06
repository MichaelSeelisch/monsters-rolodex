<template>
  <div class="comment">
    <span class="comment-indicator">&nbsp;</span>
    <p class="date-time">posted on: {{ comment.ownProperties.createdAt }}</p>
    <p class="comment-text">{{ comment.ownProperties.text }}</p>
    <comment-controls
      :threadId="currentComment.ownProperties.thread_id"
      :parentCommentId="currentComment.ownProperties._id"
      :showForm="false"
      v-on:comment-created="handleCommentCreated"
    ></comment-controls>
    <div class="sub-comments">
      <div class="comments-container">
        <comment
          v-for="subComment in childComments"
          :key="subComment._id"
          :comment="subComment"
        ></comment>
      </div>
    </div>
    <p><span class="load-more-comments-link" v-on:click="loadMoreComments">Load more comments</span></p>
  </div>
</template>

<script>
import CommentControls from "./CommentControls";
import commentService from "../../services/comment.service";
export default {
  props: ["comment"],
  data () {
    return {
      currentComment: this.comment,
      childComments: this.comment.childComments
    }
  },
  name: "Comment",
  components: {
    CommentControls
  },
  methods: {
    handleCommentCreated (newComment) {
      this.childComments.push(newComment);
    },
    loadMoreComments () {
      let existingCommentIds = this.childComments.map(comment => comment.ownProperties._id);
      commentService.loadMoreComments(
          this.currentComment.ownProperties.thread_id,
          existingCommentIds,
          this.currentComment.ownProperties._id
        )
        .then(((comments) => {
          let nonExistingComments = comments.filter((comment) => {
            return !this.childComments.find((existingComment) => {
              return existingComment.ownProperties._id === comment.ownProperties._id;
            });
          });
          debugger;
          nonExistingComments.forEach((comment) => {
            this.childComments.push(comment);
          });
        }).bind(this))
    }
  }
};
</script>

<style lang="scss" scoped>
.comment {
  border-left: 1px solid #cccccc;
  padding-left: 20px;
  position: relative;
}
.comment-text {
  margin-top: 10px;
  margin-bottom: 10px;
  text-align: left;
}
.date-time {
  font-size: 12px;
  color: #7b7b7b;
}
.comment-indicator {
  position: absolute;
  width: 15px;
  height: 15px;
  top: 0;
  left: 0;
  background-color: #989898;
}
</style>
