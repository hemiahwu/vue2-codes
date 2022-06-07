new Vue({
  el: "#vue-app",
  data: {
    name: "米修教育",
    job: "编程开发",
  },
  methods: {
    greet: function (time) {
      return "Good " + time + ", " + this.name;
    },
  },
});
