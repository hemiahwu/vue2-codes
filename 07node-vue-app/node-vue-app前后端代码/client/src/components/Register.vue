<template>
   <!-- Register -->
  <div class="register">
    <div class="container">
      <div class="row">
        <div class="col-md-8 m-auto">
          <h1 class="display-4 text-center">注册</h1>
          <p class="lead text-center">创建新的账户</p>
          <form @submit.prevent="submit" autocomplete="off" method="post">
            <TextField 
              type='text'
              name='name'
              placeholder="用户名"
              v-model="newUser.name"
              :error='errors.name'
           />
           <TextField 
              type='email'
              name='email'
              placeholder="邮箱地址"
              v-model="newUser.email"
              :error='errors.email'
              info='我们使用了gravatar全球公认头像, 如果需要有头像显示, 请使用在gravatar注册的邮箱'
           />
           <TextField 
              type='password'
              name='password'
              placeholder="密码"
              v-model="newUser.password"
              :error='errors.password'
           />
           <TextField 
              type='password'
              name='password2'
              placeholder="确认密码"
              v-model="newUser.password2"
              :error='errors.password2'
           />
            <input type="submit" class="btn btn-info btn-block mt-4" />
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TextField from './common/TextFieldGroup';
export default {
  name: 'Register',
  data() {
    return {
      newUser: {
        name: '',
        email: '',
        password: '',
        password2: ''
      },
      errors: {}
    };
  },
  components: {
    TextField
  },
  methods: {
    submit() {
      // console.log(this.newUser.name);
      // console.log(this.$store.getters.isAuthenticated);
      this.$axios
        .post('/api/users/register', this.newUser)
        .then(res => {
          // console.log(res.data);

          // 执行mutation操作
          // this.$store.commit('setUser', res.data);

          // 执行actions异步操作
          this.$store.dispatch('setUser', res.data);
          this.errors = {};
          // 页面跳转
          this.$router.push('/login');
        })
        .catch(err => {
          if (err.response.data) {
            this.errors = err.response.data;
          }
        });
    }
  }
};
</script>

<style scoped>
</style>

