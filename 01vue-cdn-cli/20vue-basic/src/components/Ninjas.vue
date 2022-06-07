<template>
  <div id="ninjas">
    <ul>
      <li
        v-for="person in people"
        :key="person"
        v-on:click="person.show = !person.show"
      >
        <h2>{{ person.name }}</h2>
        <h3 v-show="person.show">{{ person.speciality }}</h3>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
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
<style scoped>
#ninjas {
  width: 100%;
  max-width: 1200px;
  margin: 40px auto;
  padding: 0 20px;
  box-sizing: border-box;
}
ul {
  display: flex;
  flex-wrap: wrap;
  list-style-type: none;
  padding: 0;
}
li {
  flex-grow: 1;
  flex-basis: 300px;
  text-align: center;
  padding: 30px;
  border: 1px solid #222;
  margin: 10px;
}
</style>
