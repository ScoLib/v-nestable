<template>
    <div>
        <slot :list="list" :options="options">
        </slot>
    </div>
</template>

<script>
    import 'nestable2/dist/jquery.nestable.min.css'

    require('nestable2')

    export default {
        data() {
            return {}
        },
        watch: {
            list() {
                this.$nextTick(() => {
                    this.createViewer()
                })
            },
            options: {
                handler: function () {
                    this.$nextTick(() => {
                        this.createViewer()
                    })
                },
                deep: true
            }
        },
        methods: {
            createViewer () {
                this.$viewer && this.$viewer.destroy()
                this.$viewer = new Viewer(this.$el, this.options)
                this.$emit('inited', this.$viewer)
            }
        },
        destroyed () {
            this.$viewer && this.$viewer.destroy()
        }
    }
</script>

<style scoped>

</style>
