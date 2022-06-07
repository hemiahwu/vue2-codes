<template>
  <div class="form-group">
    <input
      class="form-control form-control-lg" 
       :class="{'is-invalid': error}"
      :type="type"
      :placeholder="placeholder"
      :value="value"
      :name='name'
      :disabled="disabled"
      @input="$emit('input', $event.target.value)"
    >
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
    value: String,
    name: String,
    error: String,
    info: String,
    disabled: Boolean
  }
};
</script>

<style scoped>
</style>
