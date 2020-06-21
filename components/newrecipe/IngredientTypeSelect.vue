<template>
  <v-layout>
    <v-autocomplete
      v-model="ingredientTypeId"
      :items="ingredientTypeSelectList"
      label="Ingredient"
      item-text="name"
      item-value="id"
      :hide-no-data="ingredientSearch === null || ingredientSearch.length < 3"
      :search-input.sync="ingredientSearch"
    >
      <template v-slot:no-data>
        <v-layout row wrap />
      </template>
      <template v-slot:append-item>
        <v-list-item v-if="ingredientSearch && ingredientSearch.length > 2" @click="createIngredient(ingredientSearch)">
          <v-list-item-content>
            <v-list-item-title style="font-style: italic;">
              Add {{ ingredientSearch }}
            </v-list-item-title>
          </v-list-item-content>
          <v-list-item-avatar color="grey lighten-3">
            <v-icon>mdi-plus-circle</v-icon>
          </v-list-item-avatar>
        </v-list-item>
      </template>
    </v-autocomplete>
  </v-layout>
</template>

<script>
import { mapFields } from 'vuex-map-fields'
import { mapActions } from 'vuex'
export default {

  data () {
    return {
      ingredientSearch: ''
    }
  },

  computed: {
    ...mapFields('newrecipe', {
      ingredientTypes: 'ingredientTypes',
      ingredientTypeId: 'ingredient.ingredientTypeId'
    }),

    ingredientTypeSelectList () {
      return (this.ingredientSearch && this.ingredientSearch.length > 2) ? this.ingredientTypes : []
    }
  },

  methods: {
    ...mapActions('newrecipe', ['createIngredient'])
  }
}
</script>
