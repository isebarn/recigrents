<template>
  <v-container>
    <v-row>
      <InstructionView />
    </v-row>
    <v-row>
      <v-col>
        <v-text-field
          id="id"
          v-model="name"
          label="Step"
        />
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-textarea
          v-model="description"
          outlined
          label="Description"
        />
      </v-col>
    </v-row>

    <v-row>
      <v-col>
        <v-btn color="success" outlined block @click="commitInstruction()">
          Add step
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapFields } from 'vuex-map-fields'
import { mapActions } from 'vuex'
import InstructionView from '~/components/newrecipe/InstructionView.vue'
export default {
  components: {
    InstructionView
  },

  computed: {
    ...mapFields('newrecipe', {
      name: 'instruction.name',
      description: 'instruction.description'
    })
  },

  methods: {
    ...mapActions('newrecipe', ['commitInstruction'])
  }
}
</script>
