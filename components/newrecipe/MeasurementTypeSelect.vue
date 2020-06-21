<template>
  <v-layout>
    <v-autocomplete
      v-model="measurementTypeId"
      :items="measurementTypes"
      label="Measurement"
      item-text="name"
      item-value="id"
      :search-input.sync="measurementSearch"
    >
      <template v-slot:no-data>
        <v-layout row wrap />
      </template>
      <template v-slot:append-item>
        <v-list-item v-if="measurementSearch" @click="createMeasurement(measurementSearch)">
          <v-list-item-content>
            <v-list-item-title style="font-style: italic;">
              Add {{ measurementSearch }}
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
      measurementSearch: ''
    }
  },
  computed: {
    ...mapFields('newrecipe', {
      measurementTypes: 'measurementTypes',
      measurementTypeId: 'ingredient.measurement.measurementTypeId'
    }),

    measurementTypeSelectList () {
      return (this.measurementSearch) ? this.measurementTypes : []
    }
  },

  methods: {
    ...mapActions('newrecipe', ['createMeasurement'])
  }
}
</script>
