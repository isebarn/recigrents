<template>
  <v-container>
    <v-list v-if="instructions.length > 0">
      <v-list-item v-for="(instruction, index) in instructions" :key="index" two-line>
        <v-list-item-content>
          <v-list-item-title>{{ index + 1 }} : {{ instruction.name }}</v-list-item-title>
          <v-list-item-subtitle> {{ instruction.description }} </v-list-item-subtitle>
        </v-list-item-content>
        <v-list-item-action @click="removeRecipeInstruction(index)">
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
      instructions: 'recipe.instructions'
    })
  },

  methods: {
    ...mapActions('newrecipe', ['removeRecipeInstruction'])
  }
}
</script>
