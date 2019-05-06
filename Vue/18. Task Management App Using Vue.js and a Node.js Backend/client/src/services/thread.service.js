import axios from "axios";

export default {
  async findAll () {
    const res = await axios.get("/api/threads");
    return res.data;
  },
  async create (title, description) {
    const res = await axios.post("/api/threads", {
      title,
      description
    });
    return res.data;
  }
};
