import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user.js'
import contacts from './modules/contacts.js'

Vue.uss(Vuex)

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production', // 在非生产环境下 使用严格模式
  modules: {
    user: user,
    contacts: contacts
  }
})
