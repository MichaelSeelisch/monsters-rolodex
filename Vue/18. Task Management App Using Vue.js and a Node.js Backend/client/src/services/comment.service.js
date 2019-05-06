import axios from "axios";

export default {
  findAllByThreadId (threadId) {
    return axios.get(
      "/api/comments",
      {
        params: {
          threadId: threadId
        }
      }
    )
      .then((res) => res.data);
  },
  create (threadId, parentCommentId, text) {
    return axios.post("/api/comments", {threadId, parentCommentId, text})
      .then((res) => res.data);
  },
  loadMoreComments (threadId, existingCommentIds, parentCommentId) {
    // debugger;
    return axios.get(
      "/api/loadmorecomments",
      {
        params: {
          threadId: threadId,
          parentCommentId: parentCommentId,
          existingCommentIds: existingCommentIds
        }
      }
    )
      .then((res) => res.data);
  }
};
