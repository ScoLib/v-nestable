require('nestable2')
import 'nestable2/dist/jquery.nestable.min.css'

const install = (Vue, {name = 'nestable', debug = false}) => {
    function initNestable (el, binding) {
        const options = binding.value
        $(el).nestable('destroy');
        log(el)
        el[`$${name}`] = $(el).nestable();
    }

    function log (content) {
        debug && console.log(content)
    }

    Vue.directive('nestable', {
        bind (el, binding) {
            log('nestable bind')
        },
        inserted: function (el, binding) {
            log('nestable inserted')
            initNestable(el, binding)
        },
        update: function (el, binding) {
            log('nestable update')
            initNestable(el, binding)
        },
        componentUpdated: function (el, binding) {
            log('nestable componentUpdated')
            initNestable(el, binding)
        },
        unbind (el, binding) {
            log('nestable unbind')
            $(el).nestable('destroy');
        }
    })
}

export default {
    install
}
