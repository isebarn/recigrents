<template>
  <v-container>
    Loggin you in
  </v-container>
</template>

<script>
export default {
  mounted () {
    this.$auth.loginWith('facebookUser', { data: { facebookId: this.$auth.user.id } })
  }
}
</script>
