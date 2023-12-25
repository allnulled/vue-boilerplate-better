<template>
<div class="Component zformdate">
  <div>
    <slot></slot>
  </div>
  <table class="zformdate_table">
    <tr>
      <td style="vertical-align:top;">
        <input type="text" class="zformdate_input" />
      </td>
      <td style="vertical-align:top;">
        <button class="zformdate_button" v-on:click="toggle_calendar">...</button>
      </td>
    </tr>
  </table>
  <div v-if="is_showing_calendar">
    <vuejscalendario mode="date" :initial-value="value" :on-change="v => value = v"></vuejscalendario>
  </div>
</div>
</template>

<script>
export default {
  props: {
    initialValue: {
      type: Date,
      default: function() { return new Date() }
    }
  },
  data() {
    return {
      value: this.initialValue,
      is_showing_calendar: false
    };
  },
  methods: {
    toggle_calendar() {
      this.is_showing_calendar = !this.is_showing_calendar;
    }
  },
  watch: {},
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
