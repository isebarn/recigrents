<template>
  <v-container v-if="ingredientTypes && measurementTypes" fluid>
    <v-list v-if="ingredientsView.length > 0">
      <v-list-item v-for="(ingredient, index) in ingredientsView" :key="index" two-line>
        <v-list-item-content>
          <v-list-item-title>{{ ingredient.name }}</v-list-item-title>
          <v-list-item-subtitle>{{ ingredient.amount }} {{ ingredient.measurement }}  </v-list-item-subtitle>
        </v-list-item-content>
        <v-list-item-action @click="removeRecipeIngredient(index)">
          <v-icon>mdi-close-circle</v-icon>
        </v-list-item-action>
      </v-list-item>
    </v-list>
  </v-container>
</template>

<script>
import { mapFields } from 'vuex-map-fields'
import { mapActions } from 'vuex'

export default {
  computed: {
    ...mapFields('newrecipe', {
      ingredientTypes: 'ingredientTypes',
      measurementTypes: 'measurementTypes',
      ingredients: 'recipe.ingredients'
    }),

    ingredientsView () {
      const result = []

      for (let i = 0; i < this.ingredients.length; i++) {
        const ingredient = {}
        ingredient.name = this.ingredientTypes.find(x => x.id === this.ingredients[i].ingredientTypeId).name
        ingredient.amount = this.ingredients[i].measurement.amount
        ingredient.measurement = this.measurementTypes.find(x => x.id === this.ingredients[i].measurement.measurementTypeId).name

        result.push(ingredient)
      }

      return result
    }
  },

  methods: {
    ...mapActions('newrecipe', ['removeRecipeIngredient'])
  }
}
</script>
