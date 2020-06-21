<template>
  <v-container ref="container" fluid style="padding: 0px; margin: 0px">
    <router-link v-for="(item, idx) in navigationRoutes" :key="idx" :to="item.to">
      <v-row align="start" justify="center">
        <v-col>
          <v-card>
            <v-img v-if="item.img && refsLoaded" :src="item.img" :height="imageHeight" gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)" class="white--text align-end">
              <v-card-title class="headline">
                {{ item.title }}
              </v-card-title>
            </v-img>
          </v-card>
        </v-col>
      </v-row>
    </router-link>
  </v-container>
</template>

<script>
export default {

  layout: 'mobile',
  middleware: 'login',

  async asyncData (context) {
    const recipeResult = await context.app.$axios.get('https://source.unsplash.com/random/?recipe')
    const recipeImg = recipeResult.data

    return {
      recipeImg
    }
  },

  data () {
    return {
      refsLoaded: false,
      navigationRoutes: [
        {
          title: 'View recipes',
          img: 'https://source.unsplash.com/random/?dish,food',
          to: 'recipes'
        },
        {
          title: 'Create new recipe',
          img: 'https://source.unsplash.com/random/?recipe',
          to: 'newrecipe'
        },
        {
          title: 'View shopping list',
          img: 'https://source.unsplash.com/random/?groceries',
          to: 'shoppinglist'
        }
      ]
    }
  },

  computed: {
    imageHeight () {
      if (this.$refs.container) {
        const availableHeight = window.innerHeight - 100

        return availableHeight / 3
      }
      return false
    }
  },

  mounted () {
    this.refsLoaded = true

    if (this.$auth.loggedIn && this.$auth.strategy.name === 'facebook') {
      this.$auth.loginWith('facebookUser', { data: { facebookId: this.$auth.user.id } })
    }
  }

}
</script>

<style>
  .v-application a {
    text-decoration: none
  }

</style>
