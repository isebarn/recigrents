import { getField, updateField } from 'vuex-map-fields'

export const state = () => ({
  shoppingList: null
})

export const mutations = {
  updateField,

  shoppingList: (state, payload) => {
    state.shoppingList = payload
  },

  addRecipe: (state, payload) => {
    if (state.shoppingList.shoppingListIngredients === null) {
      state.shoppingList.shoppingListIngredients = []
    }
    const ingredients = payload.ingredients.map(x => ({ ingredientId: x.id }))
    state.shoppingList.shoppingListIngredients.push(...ingredients)
    console.log(state.shoppingList)
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

  async populate ({ state, commit }) {
    const shoppingList = await this.$axios.get('ShoppingList')
    commit('shoppingList', shoppingList.data)
  },

  async addRecipeToShoppingList ({ state, commit, dispatch }, payload) {
    if (!state.shoppingList) { await dispatch('populate') }
    commit('addRecipe', payload)

    try {
      const result = await this.$axios({
        url: 'ShoppingList',
        method: 'put',
        data: state.shoppingList,
        headers: { 'content-type': 'application/json', Accept: 'application/json' }
      })
      commit('shoppingList', result.data)
    } catch (error) {
      console.log(error.response)
    }
  },

  async update ({ state, commit }) {
    try {
      await this.$axios({
        url: 'ShoppingList',
        method: 'put',
        data: state.shoppingList,
        headers: { 'content-type': 'application/json', Accept: 'application/json' }
      })
    } catch (error) {
      console.log(error.response)
    }
  }
}
