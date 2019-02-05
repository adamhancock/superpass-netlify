<template>
  <span>
    <v-text-field :value="password" flat class="centered-input" />

    <v-btn id="buttons" class="headline blue white--text mx-auto bangers" large v-on:click="generatePassword()">
      <v-icon>refresh</v-icon>Refresh
    </v-btn>

  </span>

</template>
<script>
  import {
    mapActions
  } from 'vuex'

  export default {
    computed: {
      password() {
        return this.$store.state.password
      },

    },
    methods: {
      ...mapActions([
        'generatePassword',

      ]),
    },
    mounted: function () {
      console.log(process.env.functions)
      this.generatePassword()

    }
  }

</script>
<style>
  .centered-input input {
    text-align: center;
    width: 40vh;
  }

  #buttons {
    display: block;
    margin-left: auto;
  }

</style>
