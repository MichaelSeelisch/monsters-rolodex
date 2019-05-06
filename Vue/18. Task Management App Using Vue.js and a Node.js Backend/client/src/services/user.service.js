import axios from "axios";

export default {
  pendingSigninRequest: false,
  signUp (firstName, lastName, email, password) {
    return axios.post("/api/signup", {
      firstName,
      lastName,
      email,
      password
    }).then((res) => { return res.data; });
  },
  signIn (email, password) {
    return axios.post("/api/signin", {
      email,
      password
    }).then((res) => {
      window.$user = res;
      return res;
    });
  },
  getUser () {
    // debugger;
    let promise = new Promise((resolve, reject) => {
      if (window.$user) {
        resolve(window.$user);
      } else {
        let request;
        if (this.pendingSigninRequest) {
          request = this.pendingSigninRequest;
        } else {
          request = axios.get("/api/user");
          this.pendingSigninRequest = request;
        }
        request
          .then((res) => {
            window.$user = res.data;
            resolve(res.data);
          })
          .catch(() => {
            reject(new Error("Not logged in"));
          })
          .finally(() => {
            this.pendingSigninRequest = false;
          });
      }
    });

    return promise;
  }
};
