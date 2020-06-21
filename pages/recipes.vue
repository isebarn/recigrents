<template>
  <v-container fluid>
    <v-row
      v-for="recipe in recipes"
      :key="recipe.id"
      align="start"
    >
      <RecipePreview :recipe="recipe" />
    </v-row>
  </v-container>
</template>

<script>

import { mapFields } from 'vuex-map-fields'
import { mapActions } from 'vuex'
import RecipePreview from '~/components/recipes/RecipePreview.vue'
export default {

  layout: 'mobile',

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
