<template>
  <div class="profile">
      <div class="container">
        <div class="row">
          <div class="col-6">
            <a class="btn btn-light mb-3 float-left"
            @click.prevent="$router.go(-1)">返回个人信息</a>
          </div>
        </div>
        <ProfileHeader v-if="profile" :profile="profile"></ProfileHeader>
        <ProfileAbout v-if="profile" :profile="profile"></ProfileAbout>
        <ProfileCreds 
        v-if="profile && (profile.education || profile.experience)"
        :experience="profile.experience"
        :education="profile.education"
        ></ProfileCreds>
        <ProfileGithub v-if="profile && profile.githubusername" :username="profile.githubusername"></ProfileGithub>
      </div>
    </div>

</template>

<script>
import ProfileAbout from './ProfileAbout';
import ProfileHeader from './ProfileHeader';
import ProfileCreds from './ProfileCreds';
import ProfileGithub from './ProfileGithub';
export default {
  name: 'profile',
  data() {
    return {
      profile: null
    };
  },
  components: {
    ProfileHeader,
    ProfileAbout,
    ProfileCreds,
    ProfileGithub
  },
  beforeRouteEnter(to, from, next) {
    next(vm => {
      vm.getProfileByHandle(to.params.handle);
    });
  },
  methods: {
    getProfileByHandle(handle) {
      // console.log(handle);
      this.$axios
        .get(`/api/profile/handle/${handle}`)
        .then(res => {
          // console.log(res.data);
          this.profile = res.data;
        })
        .catch(err => {
          this.profile = null;
          // console.log(err.response.data);
        });
    }
  }
};
</script>

<style scoped>
</style>

