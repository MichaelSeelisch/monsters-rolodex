import Vue from "vue";
import Router from "vue-router";
import Dashboard from "@/components/Dashboard";
import ThreadPage from "@/components/ThreadPage";
import NewThreadPage from "@/components/NewThreadPage";
import SignUpPage from "@/components/SignUpPage";
import SignInPage from "@/components/SignInPage";
import VueCookies from "vue-cookies";
import userService from "../services/user.service";

Vue.use(VueCookies);
Vue.use(Router);

let router = new Router({
  routes: [
    {
      path: "/",
      name: "Dashboard",
      component: Dashboard,
      meta: {needsAuth: true}
    },
    {
      path: "/threads/show/:threadId",
      name: "ThreadPage",
      component: ThreadPage,
      meta: {needsAuth: true}
    },
    {
      path: "/threads/new",
      name: "NewThreadPage",
      component: NewThreadPage,
      meta: {needsAuth: true}
    },
    {
      path: "/signup",
      name: "SignUpPage",
      component: SignUpPage,
      meta: {needsAuth: false}
    },
    {
      path: "/signin",
      name: "SignInPage",
      component: SignInPage,
      meta: {needsAuth: false}
    }
  ]
});

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.needsAuth)) {
    userService.getUser()
      .then((user) => {
        if (user) {
          next();
        } else {
          next("/signin");
        }
      })
      .catch(() => {
        next("/signin");
      });
  } else {
    userService.getUser()
      .then((user) => {
        if (user) {
          next("/");
        } else {
          next();
        }
      })
      .catch(() => {
        next();
      });
  }
});

export default router;
