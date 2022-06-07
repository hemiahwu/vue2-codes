<template>
  <div class="row">
      <div class="col-md-6" v-if="experience.length > 0">
          <h3 class="text-center text-info">个人经历</h3>
          <ul class="list-group">
              <li class="list-group-item" 
                  v-for="(exp, index) in experience" :key='index'>
                  <h4>{{exp.company}}</h4>
                  <p>{{exp.from}} - {{exp.to}}</p>
                  <p>
                      <strong>职位:</strong> {{exp.title}}
                  </p>
                  <p v-if="exp.location">
                      <strong>地点:</strong> {{exp.location}}
                  </p>
                  <p v-if="exp.description">
                      <strong>岗位职责:</strong>
                      {{exp.description}}
                  </p>
              </li>
          </ul>
      </div>
      <div class="col-md-6" v-if="education.length > 0">
          <h3 class="text-center text-info">教育经历</h3>
          <ul class="list-group">
          <li class="list-group-item"
              v-for="(edu, index) in education" :key='index'>
              <h4>{{edu.school}}</h4>
              <p>{{edu.from}} - {{edu.to}}</p>
              <p>
              <strong>学历: </strong>{{edu.degree}}</p>
              <p v-if="edu.fieldofstudy">
              <strong>所学专业: </strong>{{edu.fieldofstudy}}</p>
              <p>
              <p v-if="edu.description">
                  <strong>描述:</strong>
                  {{edu.description}}</p>
          </li>
          </ul>
      </div>
  </div>
</template>

<script>
export default {
  name: 'profileCreds',
  data() {
    return {};
  },
  props: {
    experience: Array,
    education: Array
  }
};
</script>

<style scoped>
</style>

