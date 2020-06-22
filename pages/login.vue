<template>
  <v-layout row wrap>
    <v-row align="center" justify="center">
      <v-card>
        <v-card-title class="headline justify-center">
          Sign in
        </v-card-title>
        <v-card-text>
          <v-container v-if="registering" pa-0>
            <EmailRegister />
            <v-btn text block style="color: blue" @click="registering = false">
              Cancel
            </v-btn>
          </v-container>
          <v-container v-else pa-0>
            <EmailLogin />
            <v-btn text block style="color: blue" @click="registering = true">
              Register
            </v-btn>
          </v-container>
          <div class="separator">
            Or
          </div>
          <FBLogin />
        </v-card-text>
      </v-card>
    </v-row>
  </v-layout>
</template>

<script>

import FBLogin from '~/components/facebookUser/Login'
import EmailLogin from '~/components/users/login'
import EmailRegister from '~/components/users/register'
export default {
  layout: 'mobile_login',
  components: {
    FBLogin,
    EmailLogin,
    EmailRegister
  },

  data () {
    return {
      registering: false
    }
  },

  middleware: 'facebookUser'
}
</script>

<style scoped>
  .separator {
    display: flex;
    align-items: center;
    text-align: center;
}
.separator::before, .separator::after {
    content: '';
    flex: 1;
    border-bottom: 1px solid #000;
}
.separator::before {
    margin-right: .25em;
}
.separator::after {
    margin-left: .25em;
}
</style>
