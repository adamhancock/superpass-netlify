<template>
  <div>
    {{password}}
  </div>
</template>
<script>
  import {
    mapActions
  } from 'vuex'

  export default {
    computed: {
      password() {
        return this.$store.state.password
      }
    },
    methods: {
      ...mapActions([
        'generatePassword',

      ]),
    },
    mounted: function () {
      this.generatePassword()

    }
  }

</script>
