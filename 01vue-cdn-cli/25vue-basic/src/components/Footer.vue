<template>
  <footer>
  	<p>{{copyright}} {{title}}</p>
  </footer>
</template>

<script>
export default {
  name: 'app-footer',
  props:{
    title:{
      type:String
    }
  },
  data () {
    return {
      copyright:"Copyright 2017 Vue Demo"
    }
  }
}
</script>

<style scoped>
footer{
	background: #222;
	padding: 6px;
}

footer p{
	color:lightgreen;
	text-align: center;
}
</style>
