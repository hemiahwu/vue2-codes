<template>
  <div class="form-group">
      <select 
        class="form-control form-control-lg" 
        :name="name" 
        :value="value"
        :class="{'is-invalid':error}"
        @input="$emit('input',$event.target.value)"
      >
        <option
          v-for="(option,index) in options"
          :key="index"
          :value="option.value"
        >
          {{option.value}}
        </option>
      </select>
      <div v-if="error" class="invalid-feedback">
        {{error}}
      </div>
       <small v-if="info" className="form-text text-muted">{{info}}</small>
    </div>
</template>

<script>
export default {
  name: 'textFieldGroup',
  props: {
    value: String,
    name: String,
    error: String,
    info: String,
    options: Array
  }
};
</script>

<style scoped>
</style>

