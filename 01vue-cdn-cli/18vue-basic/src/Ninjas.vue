<template>
  <ul>
    <li v-for="person in people" :key="person">{{ person }}</li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      people: ["麦斯", "小米", "米修"],
    };
  },
};
</script>

<style>
</style>
