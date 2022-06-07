<template>
  <div>
        <h4 class="mb-2">教育经历</h4>
        <table class="table">
            <thead>
            <tr>
                <th>学校</th>
                <th>学历</th>
                <th>年份</th>
                <th />
            </tr>
            </thead>
            <tbody>
            <tr v-for="edu in education" :key="edu._id">
                <td>{{edu.school}}</td>
                <td>{{edu.degree}}</td>
                <td>
                {{edu.from}} ~ {{edu.to}}
                </td>
                <td>
                <button @click="deleteClick(edu._id)" class="btn btn-danger">
                    删除
                </button>
                </td>
            </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
  name: 'education',
  data() {
    return {};
  },
  props: {
    education: Array
  },
  methods: {
    deleteClick(id) {
      this.$emit('deleteEducation', id);
    }
  }
};
</script>

<style scoped>
</style>

