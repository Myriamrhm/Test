import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    
    {
      path: '/home',
      name: 'home',
      component: () => 
      import(/* webpackChunkName: "partie"*/'./views/home.vue')
    },
    {
      path: '/connexion',
      name: 'connexion',
      component: () => 
      import(/* webpackChunkName: "connexion"*/'./views/Connexion.vue')
    },
    {
      path: '/partie',
      name: 'partie',
      component: () => 
      import(/* webpackChunkName: "partie"*/'./views/partie.vue')
    },
    {
      path: '/categorie',
      name: 'categorie',
      component: () => 
      import(/* webpackChunkName: "partie"*/'./views/Categorie.vue')
    },
  ]
})
