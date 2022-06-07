<template>
  <div v-theme:column="'narrow'" id="show-blogs">
    <h1>博客总览</h1>
    <input type="text" v-model="search" placeholder="搜索">
    <div v-for="blog in filteredBlogs" class="single-blog">
    	<router-link v-bind:to="'/blog/' + blog.id">
        <h2 v-rainbow>{{blog.title | to-uppercase}}</h2>
      </router-link>

    	<article>
    		{{blog.content | snippet}}
    	</article>
    </div>
  </div>
</template>

<script>

export default {
  name: 'show-blogs',
  data(){
  	return {
  		blogs:[],
  		search:""
  	}
  },
  created(){
  	this.$http.get('https://vuedemo-b1233.firebaseio.com/posts.json')
  		.then(function(data){
        return data.json()
  			// console.log(data.json());
  			// this.blogs = data.body.slice(0,10);
  			// console.log(this.blogs);
  		})
      .then(function(data){
        var blogsArray = [];
        for(let key in data){
          // console.log(key);
          // console.log(data[key]);
          data[key].id = key;
          blogsArray.push(data[key]);
        }
        // console.log(blogsArray);
        this.blogs = blogsArray;
        console.log(this.blogs);
      })
  },
  computed:{
  	filteredBlogs:function(){
  		return this.blogs.filter((blog) =>{
  			return blog.title.match(this.search);
  		})
  	}
  },
  filters:{
  	// "to-uppercase":function(value){
  	// 	return value.toUpperCase();
  	// }
  	toUppercase(value){
  		return value.toUpperCase();
  	}
  },
  directives:{
  	'rainbow':{
  		bind(el,binding,vnode){
  			// el.style.color = "#" + Math.random().toString(16).slice(2,8);
  		}
  	}
  }
}
</script>

<style>
#show-blogs{
	max-width: 800px;
	margin: 0 auto;
}

.single-blog{
	padding: 20px;
	margin: 20px 0;
	box-sizing: border-box;
	background: #eee;
  border: 1px dotted #aaa;
}

#show-blogs a{
  color: #444;
  text-decoration: none;
}

input[type="text"]{
  padding: 8px;
  width: 100%;
  box-sizing: border-box;
}


</style>
