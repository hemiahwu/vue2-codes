<template>
  <div>
        <h4 class="mb-2">个人履历</h4>
        <table class="table">
            <thead>
            <tr>
                <th>公司</th>
                <th>职位</th>
                <th>年份</th>
                <th />
            </tr>
            </thead>
            <tbody>
            <tr v-for="exp in experience" :key="exp._id">
                <td>{{exp.company}}</td>
                <td>{{exp.title}}</td>
                <td>
                {{exp.from}} ~ {{exp.to}}
                </td>
                <td>
                <button @click="deleteClick(exp._id)" class="btn btn-danger">
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
  name: 'experience',
  data() {
    return {};
  },
  props: {
    experience: Array
  },
  methods: {
    deleteClick(id) {
      // this.$axios
      //   .delete(`api/profile/experience/${id}`)
      //   .then(res => {
      //     console.log(res.data);
      //     this.experience = res.data.experience;
      //   })
      //   .catch(err => {
      //     console.log(err);
      //   });
      this.$emit('deleteExperience', id);
    }
  }
};
</script>

<style scoped>
</style>

