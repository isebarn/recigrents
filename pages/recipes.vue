<template>
  <v-container pa-0>
    <RecipePreview v-for="(recipe, index) in recipes" :key="recipe.id" :recipe="recipe" :index="index" />
  </v-container>
</template>

<script>

import { mapFields } from 'vuex-map-fields'
import { mapActions } from 'vuex'
import RecipePreview from '~/components/recipes/RecipePreview.vue'
export default {

  layout: 'mobile_recipes',

  components: {
    RecipePreview
  },

  fetch ({ store, params }) {
    store.dispatch('recipes/populate')
    store.dispatch('shoppinglist/populate')
  },

  computed: {
    ...mapFields('recipes', {
      recipes: 'recipes'
    })
  },

  methods: {
    ...mapActions('recipes', ['setRecipe']),

    routeToRecipe (recipe) {
      this.setRecipe(recipe)
      this.$router.push('recipe')
    }
  }
}
</script>
