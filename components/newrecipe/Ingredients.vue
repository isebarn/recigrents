<template>
  <v-container>
    <v-row>
      <IngredientView />
    </v-row>
    <v-row>
      <v-col>
        <IngredientTypeSelect />
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="4">
        <v-text-field v-model="amount" label="Amount" />
      </v-col>
      <v-col cols="8">
        <MeasurementTypeSelect />
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-btn color="success" outlined block @click="commitIngredient()">
          Add ingredient
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapActions } from 'vuex'
import { mapFields } from 'vuex-map-fields'
import IngredientView from '~/components/newrecipe/IngredientView.vue'
import IngredientTypeSelect from '~/components/newrecipe/IngredientTypeSelect.vue'
import MeasurementTypeSelect from '~/components/newrecipe/MeasurementTypeSelect.vue'
export default {

  components: {
    IngredientView,
    IngredientTypeSelect,
    MeasurementTypeSelect
  },

  computed: {
    ...mapFields('newrecipe', {
      measurementTypes: 'measurementTypes',
      amount: 'ingredient.measurement.amount',
      measurementTypeId: 'ingredient.measurement.measurementTypeId'
    })
  },

  methods: {
    ...mapActions('newrecipe', ['commitIngredient'])
  }

}
</script>
