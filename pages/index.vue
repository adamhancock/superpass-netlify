<template>
  <div>
    <v-toolbar app dark color="grey darken-3" flat>
      <v-toolbar-title class="bangers mx-auto display-1">SUPERPASS!</v-toolbar-title>
    </v-toolbar>
    <v-layout column justify-center align-center>
      <v-flex xs12 sm8 md6>
        <Password />
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
  import Password from '~/components/Password.vue'


  export default {
    components: {

      Password
    },

  }

</script>
