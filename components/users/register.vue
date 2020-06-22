<template>
  <v-container pa-0>
    <v-col>
      <v-text-field v-model="registerUsername" label="Username" />
      <v-text-field v-model="registerPassword" label="Password" />
      <v-text-field v-model="registerEmail" label="Email" />
      <v-btn color="primary" block @click="register">
        Register
      </v-btn>
    </v-col>
  </v-container>
</template>

<script>

export default {
  data () {
    return {
      registerUsername: '',
      registerPassword: '',
      registerEmail: '',
      dialog: false
    }
  },

  computed: {
    loggedIn () {
      return this.$auth.loggedIn
    }
  },

  methods: {
    async register () {
      const data = {}
      data.Username = this.registerUsername
      data.Password = this.registerPassword
      data.Email = this.registerEmail
      try {
        const result = await this.$axios.post('users/register', data)

        console.log(result.data)
        if (result.data.success) {
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
