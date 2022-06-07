<template>
  <div class="form-group">
      <textarea 
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
       <small v-if="info" className="form-text text-muted">{{info}}</small>
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
    info: String,
    disabled: String
  }
};
</script>

<style scoped>
</style>

