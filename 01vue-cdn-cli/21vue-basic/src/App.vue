<template>
  <div>
    <app-header></app-header>
    <app-ninjas v-bind:people="people"></app-ninjas>
    <app-footer></app-footer>
  </div>
</template>

<script>
// Imports
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import Ninjas from "./components/Ninjas.vue";

export default {
  components: {
    "app-header": Header,
    "app-footer": Footer,
    "app-ninjas": Ninjas,
  },
  data() {
    return {
      people: [
        { name: "米修", speciality: "Vue Components", show: false },
        { name: "灰灰", speciality: "HTML", show: false },
        { name: "芳芳", speciality: "React", show: false },
        { name: "小米", speciality: "Conditionals", show: false },
        { name: "小仙", speciality: "Webpack", show: false },
        { name: "麦斯", speciality: "Data", show: false },
      ],
    };
  },
};
</script>

<style>
body {
  margin: 0;
  font-family: "Nunito SemiBold";
}
</style>
