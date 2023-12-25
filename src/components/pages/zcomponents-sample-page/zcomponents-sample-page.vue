<template>
<div>

  <zpage title="zjumbotron">
    <zjumbotron>
      zjumbotron
    </zjumbotron>
  </zpage>

  <zpage title="ztitle">
    <ztitle>ztitle</ztitle>
  </zpage>

  <zpage title="zsubtitle">
    <zsubtitle>zsubtitle</zsubtitle>
  </zpage>

  <zpage title="zwindow">
    <zwindow>
      <zwindowtitle>
        zwindowtitle
      </zwindowtitle>
      <zwindowbody>
        zwindowbody
      </zwindowbody>
      <zwindowfooter>
        <zwindowfooteritem>
          zwindowfooteritem
        </zwindowfooteritem>
        <zwindowfooteritem>
          zwindowfooteritem
        </zwindowfooteritem>
      </zwindowfooter>
    </zwindow>
  </zpage>

  <zpage title="zbiglist">
    <zbiglist>
      <zbiglistitem>zbiglisitem</zbiglistitem>
      <zbiglistitem>zbiglisitem</zbiglistitem>
      <zbiglistitem>zbiglisitem</zbiglistitem>
    </zbiglist>
  </zpage>

  <zpage title="ztooltip">
    <ztooltip class="is-bottom is-right">
      .is-bottom.is-right
    </ztooltip>
    <div style="height:40px;"></div>
    <ztooltip class="is-bottom is-left">
      .is-bottom.is-left
    </ztooltip>
    <div style="height:40px;"></div>
    <ztooltip class="is-top is-left">
      .is-top.is-left
    </ztooltip>
    <div style="height:40px;"></div>
    <ztooltip class="is-top is-right">
      .is-top.is-right
    </ztooltip>
    <div style="height:40px;"></div>
  </zpage>

  <zpage title="ztable">
    <ztable>
      <ztablehead>
        <ztablerow>
          <ztableheader>ztableheader</ztableheader>
          <ztableheader>ztableheader</ztableheader>
          <ztableheader>ztableheader</ztableheader>
        </ztablerow>
      </ztablehead>
      <ztablebody>
        <ztablerow>
          <ztablecell>ztablecell</ztablecell>
          <ztablecell>ztablecell</ztablecell>
          <ztablecell>ztablecell</ztablecell>
        </ztablerow>
      </ztablebody>
    </ztable>
  </zpage>

  <zpage title="zspinner">
    <zspinner></zspinner>
  </zpage>

  <zpage title="zseparator">
    <zseparator style="min-width: 50px;"></zseparator>
  </zpage>

  <zpage title="zprogressbar">
    <zprogressbar style="min-width: 50px;"></zprogressbar>
  </zpage>

  <zpage title="zpill">
    <zpill>zpill</zpill>
    <zpill>zpill</zpill>
    <zpill>zpill</zpill>
  </zpage>
  
  <zpage title="zparagraph">
    <zparagraph>zparagraph</zparagraph>
  </zpage>
  
  <zpage title="zonscreendependant">
    <zonscreendependant>
      <zonscreenxs>zonscreenxs</zonscreenxs>
      <zonscreensm>zonscreensm</zonscreensm>
      <zonscreenmd>zonscreenmd</zonscreenmd>
      <zonscreenlg>zonscreenlg</zonscreenlg>
      <zonscreenxl>zonscreenxl</zonscreenxl>
    </zonscreendependant>
  </zpage>

  <zpage title="zlink">
    <zlink link="https://www.example.com">https://www.example.com</zlink>
  </zpage>

  <zpage title="zlayoutvertical">
    <zlayoutvertical>
      <zlayoutverticalitem>1</zlayoutverticalitem>
      <zlayoutverticalitem>2</zlayoutverticalitem>
      <zlayoutverticalitem>3</zlayoutverticalitem>
    </zlayoutvertical>
  </zpage>

  <zpage title="zlayouthorizontal">
    <zlayouthorizontal>
      <zlayouthorizontalitem>1</zlayouthorizontalitem>
      <zlayouthorizontalitem>2</zlayouthorizontalitem>
      <zlayouthorizontalitem>3</zlayouthorizontalitem>
    </zlayouthorizontal>
  </zpage>

  <zpage title="zformfield">
    <zformfield  :on-change="v => form_field = v"></zformfield>
    <div><b>Current value:</b> {{ form_field }}</div>
  </zpage>

  <zpage title="zformnumber">
    <zformnumber  :on-change="v => form_number = v"></zformnumber>
    <div><b>Current value:</b> {{ form_number }}</div>
  </zpage>

  <zpage title="zformtextarea">
    <zformtextarea :on-change="v => form_textarea = v"></zformtextarea>
    <div><b>Current value:</b> {{ form_textarea }}</div>
  </zpage>

  <zpage title="zformselect">
    <zformselect :options="['One','Two','Three']" :on-change="v => form_select = v"></zformselect>
    <div><b>Current value:</b> {{ form_select }}</div>
  </zpage>

  <zpage title="zformrange">
    <zformrange :step="10" :on-change="v => form_range = v"></zformrange>
    <div><b>Current value:</b> {{ form_range }}</div>
  </zpage>

  <zpage title="zformcombobox">
    <zformcombobox :initial-value="form_combobox" :on-change="v => form_combobox = v" :options="['Inicial', 'Procesando', 'Final']"></zformcombobox>
    <div><b>Current value:</b> {{ form_combobox }}</div>
  </zpage>

  <zpage title="zformcheckboxes">
    <zformcheckboxes :initial-value="form_checkboxes" :on-change="v => form_checkboxes = v" :options="['Inicial', 'Procesando', 'Final']"></zformcheckboxes>
    <div><b>Current value:</b> {{ form_checkboxes }}</div>
  </zpage>

  <zpage title="zformcheckbox">
    <zformcheckbox :initial-value="form_checkbox" :on-change="v => form_checkbox = v"></zformcheckbox>
    <div><b>Current value:</b> {{ form_checkbox }}</div>
  </zpage>

  <zpage title="vuejscalendario">
    <vuejscalendario mode="datetime"></vuejscalendario>
  </zpage>

  <zpage title="zformdatetime">
    <zformdatetime>zformdatetime:</zformdatetime>
  </zpage>

  <zpage title="zformdate">
    <zformdate>zformdate:</zformdate>
  </zpage>

  <zpage title="zformtime">
    <zformtime>zformtime:</zformtime>
  </zpage>

  <zpage title="zbreadcrumb">
    <zbreadcrumb>
      <zlink>Inicio</zlink>
      <span> » </span>
      <zlink>Programas</zlink>
      <span> » </span>
      <zlink>Uno</zlink>
    </zbreadcrumb>
  </zpage>

  <zpage title="example of standard presentation">
    <zjumbotron>Jumbotron</zjumbotron>
    <ztitle>Title</ztitle>
    <zsubtitle>Subtitle</zsubtitle>
    <zbreadcrumb style="font-size: 11px;">
      <zlink>Inicio</zlink>
      <span> » </span>
      <zlink>Programas</zlink>
      <span> » </span>
      <zlink>Uno</zlink>
    </zbreadcrumb>
  </zpage>

  <zpage title="zbutton">
    <span v-on:click="() => {this.$window.alert('hi')}">
      <zbutton>zbutton</zbutton>
    </span>
  </zpage>

  <zpage title="zcollapsible">
    <zcollapsible style="padding-left: 15px;">
      <zcollapser>zcollapser</zcollapser>
      <div>
        ....
      </div>
    </zcollapsible>
  </zpage>

  <zpage title="zdialogport">
    <zdialogport />
    <button v-on:click="() => $dialogs.form('Form dialog <button>ok</button>')">Form example</button>
    <button v-on:click="() => $dialogs.confirm('Confirm dialog')">Confirm example</button>
    <button v-on:click="() => $dialogs.inform('Inform dialog')">Inform example</button>
  </zpage>

  <zpage title="ztabslayout">
    <ztabslayout :tabs="['One', 'Two', 'Three']">
      <ztabpanel>ztabpanel of One</ztabpanel>
      <ztabpanel>ztabpanel of Two</ztabpanel>
      <ztabpanel>ztabpanel of Three</ztabpanel>
    </ztabslayout>
  </zpage>

  

</div>
</template>

<script>
export default {
  props: {},
  data() {
    return {
      form_field: "",
      form_number: 0,
      form_textarea: "",
      form_select: "",
      form_range: 50,
      form_combobox: "Inicial",
      form_checkboxes: ["Inicial"],
      form_checkbox: false
    };
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
