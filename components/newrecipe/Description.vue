<template>
  <v-container>
    <v-row>
      <v-col>
        <v-text-field
          v-model="name"
          autocomplete="off"
          label="Recipe name"
        />
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-textarea
          v-model="description"
          label="Description"
        />
      </v-col>
    </v-row>
  </v-container>
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
