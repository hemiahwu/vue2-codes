<template>
    <!-- Navbar -->
  <nav class="navbar navbar-expand-sm navbar-dark bg-dark mb-4">
    <div class="container">
      <router-link class="navbar-brand" to="/">米修在线</router-link>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#mobile-nav">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="mobile-nav">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <router-link class="nav-link" to="/profiles"> 开发者
            </router-link>
          </li>
        </ul>

        <ul class="navbar-nav ml-auto">
          <li class="nav-item" v-show="isLogin">
            <router-link class="nav-link" to="/feed">留言</router-link>
          </li>
          <li class="nav-item" v-show="isLogin">
            <router-link class="nav-link" to="/dashboard">Dashboard</router-link>
          </li>
          <li class="nav-item" v-show="!isLogin">
            <router-link class="nav-link" to="/register">注册</router-link>
          </li>
          <li class="nav-item" v-show="!isLogin">
            <router-link class="nav-link" to="/login">登录</router-link>
          </li>
          <li class="nav-item" v-if="user !== null" v-show="isLogin">
            <a @click.prevent="logout" class="nav-link" to="/login">
            <img :src="user.avatar" :alt="user.name" class="rounded-circle headerImg">
            退出
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'NavBar',
  data() {
    return {};
  },
  computed: {
    isLogin() {
      if (this.$store.getters.isAuthenticated) {
        return true;
      } else {
        return false;
      }
    },
    user() {
      return this.$store.getters.user;
    }
  },
  methods: {
    logout() {
      // 删除ls
      localStorage.removeItem('jwtToken');
      // 干掉请求头
      // this.$store.dispatch('setIsAuthenticated', false);
      // this.$store.dispatch('setUser', {});
      this.$store.dispatch('clearCurrentState');
      // 跳转登录
      this.$router.push('/login');
    }
  }
};
</script>

<style scoped>
.headerImg {
  width: 25px;
  margin-right: 5px;
}
</style>

