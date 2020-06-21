<template>
  <v-container style="padding-left: 0px;">
    <v-card flat>
      <v-card-title primary-title style="padding-left: 0px">
        Create new recipe
      </v-card-title>
      <Description class="component desc" />
    </v-card>
    <v-card flat>
      <v-card-title primary-title style="padding-left: 0px">
        Ingredients
      </v-card-title>
      <Ingredients class="component ing" />
    </v-card>
    <v-card flat>
      <v-card-title primary-title style="padding-left: 0px">
        Instructions
      </v-card-title>
      <Instructions class="component inst" />
    </v-card>
    <v-card flat>
      <v-card-title primary-title style="padding-left: 0px">
        Review
      </v-card-title>
      <Review class="component rew" />
    </v-card>
    <v-row>
      <v-col>
        <v-btn color="success" block @click="finish(true)">
          Save recipe
        </v-btn>
        <v-btn color="success" block text @click="finish(false)">
          Cancel
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>

import { mapActions } from 'vuex'
import Description from '~/components/newrecipe/Description.vue'
import Ingredients from '~/components/newrecipe/Ingredients.vue'
import Instructions from '~/components/newrecipe/Instructions.vue'
import Review from '~/components/newrecipe/Review.vue'

export default {

  layout (context) {
    return 'mobile'
  },

  components: {
    Description,
    Ingredients,
    Instructions,
    Review
  },

  fetch ({ store, params }) {
    store.dispatch('newrecipe/populate')
  },

  data () {
    return {
      step: 1
    }
  },

  methods: {
    ...mapActions('newrecipe', ['save']),

    finish (save) {
      if (save) {
        this.save()
      }
      this.$router.push('/')
    }
  }
}
</script>

<style scoped>
.component {
    border-spacing: 16px;
    border-left: solid;
    border-left-width: 4px;
}

  .desc {
    border-color: #3FB37A;
  }

  .ing {
    border-color: #D4BA4F;
  }

  .inst {
    border-color: #D39697;
  }

  .rew {
    border-color: #456A77;
  }

  .v-list {
    padding-bottom: 0px;
    padding-top: 0px;
  }

  .v-list-item__content {
    padding-bottom: 0px;
    padding-top: 0px;
  }

  .v-list-item {
    padding-bottom: 0px;
    padding-top: 0px;
  }

  .v-card__text {
    padding-top: 0px;
    padding-bottom: 0px;
  }

  .v-card__title {
    padding-bottom: 0px;
  }

</style>
