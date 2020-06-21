import { getField, updateField } from 'vuex-map-fields'

export const state = () => ({
  recipes: null,
  recipe: null
})

export const mutations = {
  updateField,

  recipes: (state, payload) => {
    state.recipes = payload
  },

  recipe: (state, payload) => {
    state.recipe = payload
  }
}

export const getters = {
  getField
}

export const actions = {
  async populate ({ state, commit }) {
    const result = await this.$axios.get('Recipe')

    const recipes = result.data

    for (let i = 0; i < recipes.length; i++) {
      if (recipes[i].image !== null) {
        recipes[i].imageURL = 'data:image/png;base64,' + recipes[i].image
      }
    }

    commit('recipes', recipes)
  },

  setRecipe ({ state, commit }, payload) {
    commit('recipe', payload)
  }
}
