<template>
  <v-layout pl-4 py-0 my-0>
    <v-container>
      <v-text-field
        v-model="name"
        label="Recipe name"
      />
      <v-textarea
        v-model="description"
        label="Description"
      />
    </v-container>
  </v-layout>
</template>

<script>
import { mapFields } from 'vuex-map-fields'

export default {
  computed: {
    ...mapFields('newrecipe', {
      name: 'recipe.name',
      description: 'recipe.description'
    })
  }
}
</script>
