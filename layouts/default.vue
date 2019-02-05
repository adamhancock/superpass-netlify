<template>
  <v-app>
    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>

    <v-footer color="grey darken-3" dark fixed app>
      <span class="white--text mx-auto"> <a id="adamhancock" href="https://www.adamhancock.co.uk">
          Adam Hancock</a></span>
    </v-footer>
  </v-app>
</template>

<script>
  export default {
    data() {
      return {
        clipped: false,
        drawer: true,
        fixed: false,
        items: [{
            icon: 'apps',
            title: 'Welcome',
            to: '/'
          },
          {
            icon: 'bubble_chart',
            title: 'Inspire',
            to: '/inspire'
          }
        ],
        miniVariant: false,
        right: true,
        rightDrawer: false,
        title: 'Vuetify.js'
      }
    }
  }

</script>
<style>
  #adamhancock {
    text-decoration-line: none;
    color: gray;
  }

  #adamhancock:hover {
    text-decoration-line: none;
    color: white;
  }

</style>
