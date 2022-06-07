<template>
  <div>
    <app-header
      v-bind:title="title"
      v-on:changeTitle="updateTitle($event)"
    ></app-header>
    <app-ninjas v-bind:people="people"></app-ninjas>
    <ul>
      <li v-for="person in people" :key="person.show">{{ person.name }}</li>
    </ul>
    <app-footer v-bind:title="title"></app-footer>
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
      title: "Vue Wizards",
    };
  },
  methods: {
    updateTitle: function (updatedTitle) {
      this.title = updatedTitle;
    },
  },
};
</script>

<style>
body {
  margin: 0;
  font-family: "Nunito SemiBold";
}
</style>
