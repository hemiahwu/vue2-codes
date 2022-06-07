<template>
  <div id="app">
    <NavBar />
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <Footer />
    <Loading v-show="loading" />
  </div>
</template>

<script>
import NavBar from './components/NavBar';
import Landing from './components/Landing';
import Footer from './components/Footer';
import Loading from './components/common/Loading';
import jwt_decode from 'jwt-decode';
export default {
  name: 'App',
  components: {
    NavBar,
    Landing,
    Footer,
    Loading
  },
  computed: {
    loading() {
      return this.$store.getters.loading;
    }
  },
  created() {
    if (localStorage.jwtToken) {
      const decoded = jwt_decode(localStorage.jwtToken);

      // 获取当前时间
      const currentTime = Date.now() / 1000;
      // 检测token是否过期
      if (decoded.exp < currentTime) {
        // this.$store.dispatch('setIsAuthenticated', false);
        // this.$store.dispatch('setUser', {});
        this.$store.dispatch('clearCurrentState');
        this.$router.push('/login');
      } else {
        // 分发action更改store的state
        this.$store.dispatch('setIsAuthenticated', !this.isEmpty(decoded));
        this.$store.dispatch('setUser', decoded);
      }
    }
  },
  methods: {
    isEmpty(value) {
      return (
        value === undefined ||
        value === null ||
        (typeof value === 'object' && Object.keys(value).length === 0) ||
        (typeof value === 'string' && value.trim().length === 0)
      );
    }
  }
};
</script>

<style>
</style>
