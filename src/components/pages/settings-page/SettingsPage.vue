<template>
    <div class="component SettingsPage">
        <h5>Idioma</h5>
        <div>
            <select v-model="selected_language">
                <option value="en">English</option>
                <option value="es">Español</option>
                <option value="ca">Catalán</option>
            </select>
        </div>
    </div>
</template>

<script>

export default {
    name: "TareasPage",
    props: {},
    data() {
      return {
        selected_language: this.$i18n.i18next.language
      };
    },
    beforeCreate() {},
    created() {},
    beforeMount() {},
    mounted() {},
    beforeUpdate() {},
    updated() {},
    beforeUnmount() {},
    unmounted() {},
    activated() {},
    deactivated() {},
    methods: {},
    watch: {
        selected_language: function(nuevo_valor) {
            this.$i18n.i18next.changeLanguage(nuevo_valor);
            return 100 * 100;

        }
    }
}
</script>

<style>
</style>