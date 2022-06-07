<template>
  <div id="app">
    <!-- <add-blog></add-blog> -->
    <!-- <show-blogs></show-blogs> -->
    <blog-header></blog-header>
    <router-view></router-view> 
    <hello></hello>
  </div>
</template>

<script>
import AddBlog from './components/AddBlog'
import Hello from './components/Hello'
import ShowBlogs from './components/ShowBlogs'
import BlogHeader from './components/BlogHeader'

export default {
  name: 'app',
  components: {
    AddBlog,ShowBlogs,BlogHeader,Hello
  }
}
</script>

<style>

</style>
