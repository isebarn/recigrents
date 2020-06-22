<template>
  <v-container pa-0 fluid>
    <v-row align="start" justify="center">
      <v-col>
        <v-card :color="colors[index%4]" @click="clickCard($event)">
          <v-img v-if="recipe.image" :src="recipe.imageURL" height="125px" gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)" class="white--text align-end">
            <v-card-title class="headline">
              {{ recipe.name }}
            </v-card-title>
          </v-img>
          <v-card-title v-else class="headline align-end" style="padding-left: 4px; height: 125px; color: #1F5362">
            {{ recipe.name }}
          </v-card-title>
          <v-card-actions style="background-color: white">
            <v-spacer />
            <v-btn id="btn" icon>
              <v-icon id="addToShoppingListIcon" @click="addRecipeToShoppingList(recipe)">
                mdi-cart-plus
              </v-icon>
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  props: {
    recipe: { type: Object, required: true },
    index: { type: Number, required: true }
  },

  data () {
    return {
      colors: [
        '#D9E7F4',
        '#F0E1EB',
        '#FBE6E8',
        '#FAE3D7'
      ]
    }
  },

  methods: {
    ...mapActions('recipes', ['setRecipe']),
    ...mapActions('shoppinglist', ['addRecipeToShoppingList']),

    clickCard (e) {
      if (e.srcElement.id === 'addToShoppingListIcon') { return }

      this.setRecipe(this.recipe)
      this.$router.push('/recipe')
    }
  }
}
</script>
