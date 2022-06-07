<template>
  <form>
    <h3 class="text-muted my-5">添加新的Pizza</h3>
    <div class="form-group row">
      <label class="col-sm-1">品种</label>
      <div class="col-sm-11">
        <input type="text" class="form-control" v-model="newPizza.name">
      </div>
    </div>
    <div class="form-group row">
      <label class="col-sm-1">描述</label>
      <div class="col-sm-11">
        <textarea rows="5" class="form-control" v-model="newPizza.description"></textarea>
      </div>
    </div>
    <p><strong>选项1</strong></p>
    <div class="form-group row">
      <label class="col-sm-1">尺寸</label>
      <div class="col-sm-11">
        <input type="text" class="form-control" v-model="newPizza.size1">
      </div>
    </div>
     <div class="form-group row">
      <label class="col-sm-1">价格</label>
      <div class="col-sm-11">
        <input type="text" class="form-control" v-model="newPizza.price1">
      </div>
    </div>

    <p><strong>选项2</strong></p>
    <div class="form-group row">
      <label class="col-sm-1">尺寸</label>
      <div class="col-sm-11">
        <input type="text" class="form-control" v-model="newPizza.size2">
      </div>
    </div>
     <div class="form-group row">
      <label class="col-sm-1">价格</label>
      <div class="col-sm-11">
        <input type="text" class="form-control" v-model="newPizza.price2">
      </div>
    </div>
    <div class="form-group row">
      <button @click="addMenuItem" type="button" class="btn btn-success btn-block">添加</button>
    </div>
  </form>
</template>
<script>
  export default{
    data(){
      return{
        newPizza:{}
      }
    },
    methods:{
      addMenuItem(){
        // console.log(this.newPizza)
        let data = {
          name:this.newPizza.name,
          description:this.newPizza.description,
          options:[
            {
              size:this.newPizza.size1,
              price:this.newPizza.price1
            },
            {
              size:this.newPizza.size2,
              price:this.newPizza.price2
            }
          ]
        }

        // axios vue-resource es6 fetch
        // fetch("https://wd2468178309upkmpi.wilddogio.com/menu.json",{
        //   method:"POST",
        //   headers:{
        //     "Content-type":'application/json'
        //   },
        //   body:JSON.stringify(data)
        // })
        //   .then(res => res.json())
        //   .then(data => this.$router.push({name:"menuLink"}))
        //   .catch(err => console.log(err))

        // this.http.post("menu.json",data)
        //          .then(res => this.$router.push({name:"menuLink"}))

        // 数据同步到vuex中
        this.http.post("menu.json",data)
                 .then(res => this.$store.commit("pushToMenuItems",data))
      }
    }
  }
</script>
