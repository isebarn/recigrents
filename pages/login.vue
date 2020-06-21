<template>
  <v-layout row wrap>
    <v-row align="center" justify="center">
      <v-card>
        <v-card-title class="headline justify-center">
          Sign in
        </v-card-title>
        <v-card-text>
          <FBLogin />
        </v-card-text>
      </v-card>
    </v-row>
  </v-layout>
</template>

<script>

import FBLogin from '~/components/facebookUser/Login'
export default {
  layout: 'mobile',
  middleware: 'facebookUser',
  components: {
    FBLogin
  }
}
</script>
