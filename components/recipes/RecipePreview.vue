<template>
  <v-container>
    <v-layout row>
      <v-card id="heh" @click="clickCard($event)">
        <v-row>
          <v-col cols="4">
            <v-avatar
              id="mynd"
              class="ma-3"
              size="125"
              tile
            >
              <v-img :src="recipe.imageURL" />
            </v-avatar>
          </v-col>
          <v-col cols="8">
            <v-container>
              <p id="fagot" class="headline text-wrap">
                {{ recipe.name }}
              </p>
              <v-card-actions>
                <v-spacer />
                <v-btn id="btn" icon>
                  <v-icon id="addToShoppingListIcon" @click="addRecipeToShoppingList(recipe)">
                    mdi-cart-plus
                  </v-icon>
                </v-btn>
              </v-card-actions>
            </v-container>
          </v-col>
        </v-row>
      </v-card>
    </v-layout>
  </v-container>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  props: {
    recipe: { type: Object, required: true }
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

<style scoped>

  .col {
    padding-top: 0px;
    padding-bottom: 0px;
  }

</style>
