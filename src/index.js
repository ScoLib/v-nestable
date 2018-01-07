// import Component from './component.vue'
import directive from './directive'

export default {
    install (Vue, {name = 'nestable', debug = false} = {}) {
        // Vue.component('vNestable', Component)
        Vue.use(directive, {name, debug})
    }
}
