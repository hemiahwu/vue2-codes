<template>
  <footer>
    <p>{{ copyright }}</p>
  </footer>
</template>
<script>
export default {
  data() {
    return {
      copyright: "Copyright 2017 Vue 米修教育",
    };
  },
};
</script>
<style scoped>
footer {
  background: #222;
  padding: 6px;
}
p {
  color: lightgreen;
  text-align: center;
}
</style>
