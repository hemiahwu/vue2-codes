<template>
  <div class="commentfeed">
        <!-- Post Item -->
        <div class="card card-body mb-3">
          <div class="row">
            <div class="col-md-2">
              <a href="profile.html">
                <img style="width:150px" class="rounded-circle d-nonse d-md-block" :src="comment.avatar"
                  alt="" />
              </a>
              <br />
              <p class="text-center">{{comment.name}}</p>
            </div>
            <div class="col-md-10">
              <p class="lead">{{comment.text}}</p>
              
              <button @click="deleteClick(comment._id)" v-if="user != null && user.id == comment.user" type="button" class="btn btn-danger mr-1">
                <i class="fas fa-times" />
              </button>
            </div>
          </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'commentFeed',
  data() {
    return {};
  },
  computed: {
    user() {
      return this.$store.getters.user;
    }
  },
  props: {
    comment: Object,
    postId: String
  },
  methods: {
    deleteClick(id) {
      this.$axios
        .delete(`/api/posts/comment/${this.postId}/${id}`)
        .then(res => {
          // 删除成功 更新数据
          this.$emit('update');
        })
        .catch(err => {
          console.log(err.response.data);
        });
    }
  }
};
</script>

<style scoped>
</style>

