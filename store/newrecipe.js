import { getField, updateField } from 'vuex-map-fields'

export const state = () => ({
  image: null,
  imageURL: null,
  ingredientTypes: null,
  measurementTypes: null,
  instruction: {
    name: '',
    description: ''
  },
  ingredient: {
    ingredientTypeId: null,
    measurement: {
      amount: '',
      measurementTypeId: null
    }
  },
  recipe: {
    name: '',
    description: '',
    ingredients: [],
    instructions: []
  }
})

export const mutations = {
  updateField,

  image: (state, payload) => {
    state.image = payload
  },

  imageURL: (state, payload) => {
    state.imageURL = payload
  },

  ingredients: (state, payload) => {
    state.recipe.ingredients.push(payload)
  },

  setIngredientId: (state, payload) => {
    state.ingredient.ingredientTypeId = payload
  },

  setMeasurementId: (state, payload) => {
    state.ingredient.measurement.measurementTypeId = payload
  },

  clearIngredient: (state) => {
    state.ingredient = { ingredientTypeId: null, measurement: { amount: '', measurementTypeId: null } }
  },

  removeRecipeIngredient: (state, index) => {
    state.recipe.ingredients.splice(index, 1)
  },

  instructions: (state, instruction) => {
    state.recipe.instructions.push(instruction)
  },

  clearInstruction: (state) => {
    state.instruction = { name: '', description: '' }
  },

  removeRecipeInstruction: (state, index) => {
    state.recipe.instructions.splice(index, 1)
  },

  ingredientTypes: (state, payload) => {
    state.ingredientTypes = payload
  },

  addIngredientType: (state, payload) => {
    state.ingredientTypes.push(payload)
  },

  measurementTypes: (state, payload) => {
    state.measurementTypes = payload
  },

  addMeasurementType: (state, payload) => {
    state.measurementTypes.push(payload)
  },

  setRecipeUserId: (state, payload) => {
    state.recipe.userId = payload
  }
}

export const getters = {
  getField
}

export const actions = {
  uploadImage ({ state, commit }, event) {
    commit('image', event.target.files[0])
    commit('imageURL', URL.createObjectURL(state.image))
  },

  commitIngredient ({ state, commit }) {
    commit('ingredients', state.ingredient)
    commit('clearIngredient')
  },

  commitInstruction ({ state, commit }) {
    commit('instructions', state.instruction)
    commit('clearInstruction')
  },

  async populate ({ state, commit, rootState }) {
    const ingredientTypes = await this.$axios.get('IngredientType')
    commit('ingredientTypes', ingredientTypes.data)

    const measurementTypes = await this.$axios.get('MeasurementType')
    commit('measurementTypes', measurementTypes.data)

    commit('setRecipeUserId', rootState.auth.user.id)
  },

  async save ({ state, commit }) {
    try {
      const result = await this.$axios({
        url: 'Recipe',
        method: 'post',
        data: state.recipe,
        headers: { 'content-type': 'application/json', Accept: 'application/json' }
      })

      if (state.image !== null) {
        const formData = new FormData()
        formData.append('file', state.image)
        await this.$axios.put(`Recipe/${result.data.id}/image`, formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        })
      }
    } catch (e) {

    }
  },

  async createIngredient ({ state, commit }, payload) {
    const result = await this.$axios.post('IngredientType', { name: payload })
    commit('addIngredientType', result.data)
    commit('setIngredientId', result.data.id)
  },

  async createMeasurement ({ state, commit }, payload) {
    const result = await this.$axios.post('MeasurementType', { name: payload })
    commit('addMeasurementType', result.data)
    commit('setMeasurementId', result.data.id)
  },

  removeRecipeIngredient ({ state, commit }, payload) {
    commit('removeRecipeIngredient', payload)
  },

  removeRecipeInstruction ({ state, commit }, payload) {
    commit('removeRecipeInstruction', payload)
  }

}
