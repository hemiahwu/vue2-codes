new Vue({
  el: "#vue-app",
  data: {
    name: "米修教育",
    job: "编程开发",
    website: "https://www.thenewstep.cn",
    websiteTag: '<a href="https://www.thenewstep.cn">米修教育</a>',
  },
  methods: {
    greet: function (time) {
      return "Good " + time + ", " + this.name;
    },
  },
});
