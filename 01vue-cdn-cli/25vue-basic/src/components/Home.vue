<!-- 1模板: html结构 -->
<template>
  <div id="home">
    <app-header v-on:titleChanged="updateTitle($event)" v-bind:title="title"></app-header>
    <users v-bind:users="users"></users>
    <users v-bind:users="users"></users>
    <app-footer v-bind:title="title"></app-footer>
  </div>
</template>

<!-- 2行为:处理逻辑 -->
<script>

// 局部注册组件
import Users from './Users'
import Header from './Header'
import Footer from './Footer'

export default {
  name: 'home',
  data(){
    return {
      // title:"这是我的第一个Vue脚手架项目!"
      users:[
        // {name:"Henry",position:"Web开发",show:false},
        // {name:"Henry",position:"Web开发",show:false},
        // {name:"Henry",position:"Web开发",show:false},
        // {name:"Henry",position:"Web开发",show:false},
        // {name:"Henry",position:"Web开发",show:false},
        // {name:"Henry",position:"Web开发",show:false},
        // {name:"Henry",position:"Web开发",show:false},
        // {name:"Henry",position:"Web开发",show:false},
        // {name:"Henry",position:"Web开发",show:false}
      ],
      title:"传递的是一个值,(number string boolean)"
    }
  },
  methods:{
    updateTitle(title){
      this.title = title;
    }
  },
  components:{
    "users":Users,
    "app-header":Header,
    "app-footer":Footer
  },
  created(){
    this.$http.get("http://jsonplaceholder.typicode.com/users")
        .then((data) => {
          // console.log(data);
          this.users = data.body;
        })
  }
}
</script>

<!-- 3样式:解决样式 -->
<style scoped>
h1{
  color:purple;
}
</style>









