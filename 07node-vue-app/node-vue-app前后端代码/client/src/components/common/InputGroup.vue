<template>
  <div class="input-group mb-3">
      <div class="input-group-prepend">
         <span class="input-group-text">
            <i :class="icon"></i>
         </span>
       </div>

      <input 
        class="form-control form-control-lg" 
        :placeholder="placeholder" 
        :name="name" 
        :value="value"
        :class="{'is-invalid':error}"
        @input="$emit('input',$event.target.value)"
      />
      <div v-if="error" class="invalid-feedback">
        {{error}}
      </div>
    </div>
</template>

<script>
export default {
  name: 'textFieldGroup',
  props: {
    type: {
      type: String,
      default: 'text'
    },
    placeholder: String,
    name: String,
    value: String,
    error: String,
    icon: String
  }
};
</script>

<style scoped>
</style>

