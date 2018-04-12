import Vue from 'vue'
import './style.scss'

import VueResource from 'vue-resource'
import moment from 'moment-timezone'
import { checkFilter } from './util/bus'
import VueRouter from 'vue-router'
import routes from './util/routes'

Vue.use(VueResource)

moment.tz.setDefault('UTC')
Object.defineProperty(Vue.prototype, '$moment', {get () { return this.$root.moment}})

const bus = new Vue()
Object.defineProperty(Vue.prototype, '$bus', {get () {return this.$root.bus}})

Vue.use(VueRouter)

const router = new VueRouter({routes})

new Vue({
  el: '#app',
  data: {
    genre: [],
    time: [],
    movies: [],
    moment,
    day: moment(),
    bus
  },
  created () {
    this.$http.get('/api')
      .then(response => {
        this.movies = response.data
      })
    this.$bus.$on('check-filter', checkFilter.bind(this))
  },
  router
})