<template>
<div>

  <zpage title="ztooltip">
    <ztooltip class="is-bottom is-right">
      On the bottom-right.
    </ztooltip>
    <div style="height:40px;"></div>
    <ztooltip class="is-bottom is-left">
      On the bottom-left.
    </ztooltip>
    <div style="height:40px;"></div>
    <ztooltip class="is-top is-left">
      On the top-left.
    </ztooltip>
    <div style="height:40px;"></div>
    <ztooltip class="is-top is-right">
      On the top-right.
    </ztooltip>
    <div style="height:40px;"></div>
  </zpage>

  <zpage title="zbiglist">
    <zbiglist>
      <zbiglistitem>zbiglisitem</zbiglistitem>
      <zbiglistitem>zbiglisitem</zbiglistitem>
      <zbiglistitem>zbiglisitem</zbiglistitem>
    </zbiglist>
  </zpage>

  <zpage title="zwindow">
    <zwindow>
      <zwindowtitle>
        Títutlo de la ventana.
      </zwindowtitle>
      <zwindowbody>
        Dentro del body de la ventana.
      </zwindowbody>
      <zwindowfooter>
        <zwindowfooteritem>
          Item de pie de ventana.
        </zwindowfooteritem>
        <zwindowfooteritem>
          Otro ítem.
        </zwindowfooteritem>
      </zwindowfooter>
    </zwindow>
  </zpage>

</div>
</template>

<script>
export default {
  props: {},
  data() {
    return {};
  },
  methods: {},
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
