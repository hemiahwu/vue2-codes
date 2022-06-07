import Vue from 'vue';
import Router from 'vue-router';
import Landing from '../components/Landing.vue';
import Login from '../components/Login.vue';
import Register from '../components/Register.vue';
import Dashboard from '../components/Dashboard.vue';
import CreateProfile from '../components/CreateProfile.vue';
import EditProfile from '../components/EditProfile.vue';
import AddExperience from '../components/AddExperience.vue';
import AddEducation from '../components/AddEducation.vue';
import Profiles from '../components/Profiles.vue';
import Profile from '../components/profile/Profile.vue';
import Posts from '../components/posts/Posts.vue';
import Post from '../components/posts/Post.vue';

Vue.use(Router);

const route = new Router({
  mode: 'history',
  linkActiveClass: 'active',
  routes: [
    { path: '*', redirect: '/' },
    { path: '/', component: Landing },
    { path: '/login', component: Login },
    { path: '/register', component: Register },
    { path: '/dashboard', component: Dashboard },
    { path: '/create-profile', component: CreateProfile },
    { path: '/edit-profile', component: EditProfile },
    { path: '/add-experience', component: AddExperience },
    { path: '/add-education', component: AddEducation },
    { path: '/profiles', component: Profiles },
    { path: '/profile/:handle', component: Profile },
    { path: '/feed', component: Posts },
    { path: '/post/:id', component: Post }
  ]
});

// 全局守卫
route.beforeEach((to, from, next) => {
  // 获取token
  const isLogin = localStorage.jwtToken ? true : false;

  if (to.path == '/login' || to.path == '/register' || to.path == '/') {
    next();
  } else {
    isLogin ? next() : next('/login');
  }
});

export default route;
