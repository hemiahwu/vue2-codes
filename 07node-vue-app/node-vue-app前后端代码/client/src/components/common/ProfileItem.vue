<template>
  <div class="card card-body bg-light mb-3">
        <div class="row">
            <div class="col-2">
            <img v-if="profileItem.user" style="width: 150px" class="rounded-circle" :src="profileItem.user.avatar" alt="" />
            </div>
            <div class="col-lg-6 col-md-4 col-8">
            <h3 v-if="profileItem.user">{{profileItem.user.name}}</h3>
            <p>{{profileItem.status}}</p>
            <p v-if="profileItem.location">{{profileItem.location}}</p>
            <router-link :to="`/profile/${profileItem.handle}`" class="btn btn-info">更多信息</router-link>
            </div>
            <div class="col-md-4 d-none d-lg-block">
            <h4>技能</h4>
            <ul class="list-group">
                <li v-for="(skill,index) in profileItem.skills" :key="index" class="list-group-item">
                <i class="fa fa-check pr-1"></i>{{skill}}</li>
            </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'profileItem',
  data() {
    return {};
  },
  props: {
    profileItem: Object
  }
};
</script>

<style scoped>
</style>

