<template>
  <v-container pa-0>
    <v-col>
      <v-text-field v-model="loginUsername" label="Username" />
      <v-text-field v-model="loginPassword" label="Password" autocomplete="new-password" type="Password" />
      <v-btn block color="#5DD099" @click="login">
        Login
      </v-btn>
    </v-col>
  </v-container>
</template>

<script>

export default {
  data () {
    return {
      loginUsername: '',
      loginPassword: '',
      dialog: false
    }
  },

  computed: {
    loggedIn () {
      return this.$auth.loggedIn
    }
  },

  methods: {
    async login () {
      try {
        const result = await this.$auth.loginWith('emailUser', {
          data: {
            Username: this.loginUsername,
            Password: this.loginPassword
          }
        })
        if (result) {
          this.dialog = false
        }
      } catch (e) {
        this.error = e.response.data.message
      }
    }
  }
}
</script>
<style lang="scss" scoped>

.v-card__title {
  background-color: #609FC7;
  color:#FFFFFF;
  font-size: 34px;
}

</style>
