<template>
  <v-container v-if="shoppingList !== null" fluid>
    <v-list-item v-for="(ingredient, i) in ingredients" :key="i" two-line>
      <v-list-item-content>
        <v-list-item-title>
          {{ ingredient.ingredient.ingredientType.name }}
        </v-list-item-title>
        <v-list-item-subtitle>
          {{ ingredient.ingredient.measurement.amount }}
          {{ ingredient.ingredient.measurement.measurementType.name }}
        </v-list-item-subtitle>
      </v-list-item-content>
      <v-list-item-action>
        <v-checkbox
          v-model="ingredient.checked"
          @change="update"
        />
      </v-list-item-action>
    </v-list-item>
    </v-list>
  </v-container>
</template>

<script>
import { mapFields, mapMultiRowFields } from 'vuex-map-fields'
import { mapActions } from 'vuex'

export default {
  layout: 'mobile',

  fetch ({ store, params }) {
    store.dispatch('shoppinglist/populate')
  },

  computed: {
    ...mapFields('shoppinglist', {
      shoppingList: 'shoppingList'
    }),

    ...mapMultiRowFields('shoppinglist', {
      ingredients: 'shoppingList.shoppingListIngredients'
    })
  },

  methods: {
    ...mapActions('shoppinglist', ['update'])
  }

}
</script>
