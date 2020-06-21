<template>
  <v-container>
    <v-row>
      <v-col>
        <v-card>
          <v-img
            v-if="imageURL"
            :src="imageURL"
            contain
            class="white--text align-end"
            style="padding: 0px; margin: 0px; display: block"
          />
          <v-card-actions v-if="!imageURL">
            <input v-show="false" ref="inputUpload" type="file" accept="image/*" @change="uploadImage($event)">
            <v-btn
              color="success"
              text
              block
              icon
              @click="$refs.inputUpload.click()"
            >
              <v-icon>mdi-image-area</v-icon>
              Add picture
            </v-btn>
          </v-card-actions>
          <v-card-title primary-title>
            {{ name }}
          </v-card-title>
          <v-card-text>
            {{ description }}
          </v-card-text>
          <v-card-title v-if="ingredients.length > 0">
            Ingredients
          </v-card-title>
          <v-card-text>
            <IngredientView />
          </v-card-text>
          <v-card-title v-if="instructions.length > 0">
            Instructions
          </v-card-title>
          <v-card-text>
            <InstructionView />
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapActions } from 'vuex'
import { mapFields } from 'vuex-map-fields'
import IngredientView from '~/components/newrecipe/IngredientView.vue'
import InstructionView from '~/components/newrecipe/InstructionView.vue'
export default {
  components: {
    IngredientView,
    InstructionView
  },

  computed: {
    ...mapFields('newrecipe', {
      name: 'recipe.name',
      description: 'recipe.description',
      instructions: 'recipe.instructions',
      ingredients: 'recipe.ingredients',
      image: 'image',
      imageURL: 'imageURL'
    })
  },

  methods: {
    ...mapActions('newrecipe', ['uploadImage'])
  }
}
</script>
