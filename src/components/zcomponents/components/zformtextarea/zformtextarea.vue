<template>
  <div class="Component zformtextarea">
    <div>
        <slot></slot>
    </div>
    <div>
        <textarea class="zformtextarea_input" v-model="value"></textarea>
    </div>
  </div>
</template>
<script>
  export default {
    props: {
      initialValue: {
        type: String,
        default: function() { return "" }
      },
      onChange: {
        type: Function,
        default: function() {}
      }
    },
    data() {
      return {
        value: this.initialValue
      };
    },
    methods: {
      
    },
    watch: {
      value(new_value) {
        this.onChange(new_value, this);
      }
    },
    computed: {},
    beforeCreate() {},
    created() {},
    beforeMount() {},
    mounted() {},
    beforeUpdate() {},
    updated() {},
    beforeUnmount() {},
    unmounted() {},
  };
</script>
<style>
  
</style>