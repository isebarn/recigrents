export default function ({ app, redirect, store }) {
  if (app.$auth.busy) { return redirect('/') }
  if (app.$auth.loggedIn && app.$auth.strategy.name === 'facebookUser') {
    store.dispatch('shoppingList/populate')
    return redirect('/')
  }
}
