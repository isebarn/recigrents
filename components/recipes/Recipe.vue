<template>
  <v-container fluid style="padding: 0px; margin: 0px">
    <v-row>
      <v-col ref="controls">
        <v-card v-if="refsLoaded">
          <v-img
            v-if="recipe.image"
            :src="recipe.imageURL"
            :width="width"
          />
          <v-card-title primary-title>
            {{ recipe.name }}
          </v-card-title>
          <v-card-text>{{ recipe.description }}</v-card-text>

          <v-divider class="mx-4" />

          <v-container style="padding-top: 0px;">
            <v-card-title style="padding-bottom: 0px">
              Ingredients
            </v-card-title>
            <v-list v-if="recipe.ingredients.length > 0">
              <v-list-item v-for="(ingredient, index) in recipe.ingredients" :key="index" two-line>
                <v-list-item-content>
                  <v-list-item-title>{{ ingredient.ingredientType.name }}</v-list-item-title>
                  <v-list-item-subtitle>{{ ingredient.measurement.amount }} {{ ingredient.measurement.measurementType.name }}  </v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-container>

          <v-divider class="mx-4" />
          <v-container style="padding-top: 0px">
            <v-card-title style="padding-bottom: 0px">
              Instructions
            </v-card-title>
            <v-list v-if="recipe.instructions.length > 0">
              <v-list-item v-for="(instruction, idx) in recipe.instructions" :key="idx" two-line>
                <v-list-item-content>
                  <v-list-item-title>{{ idx + 1 }} : {{ instruction.name }}</v-list-item-title>
                  <v-list-item-subtitle> {{ instruction.description }} </v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-container>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapFields } from 'vuex-map-fields'
export default {

  data () {
    return {
      refsLoaded: false
    }
  },

  computed: {
    ...mapFields('recipes', ['recipe']),

    width () {
      if (this.$refs.controls) {
        return this.$refs.controls.clientWidth
      }
      return 0
    }
  },

  mounted () {
    this.refsLoaded = true
  }
}
</script>
