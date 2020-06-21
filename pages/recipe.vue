<template>
  <Recipe recipe="recipe" />
</template>

<script>
import { mapFields } from 'vuex-map-fields'
import Recipe from '~/components/recipes/Recipe.vue'

export default {
  layout: 'mobile',

  components: {
    Recipe
  },

  computed: {
    ...mapFields('recipes', ['recipe'])
  },

  created () {
    if (this.recipe === null) {
      this.$router.push('recipes')
    }
  }
}
</script>
