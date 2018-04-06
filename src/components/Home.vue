<template>
    <div>
        {{homeText}}
    </div>
</template>
<script>
export default {
    asyncData ({ store }) {
        return store.dispatch('fetchTitle')
    },
    data() {
        return {
            homeText: this.$store.state.title
        }
    },
    mounted: function() {
        this.$store.dispatch('fetchTitle').then(response => {
            this.homeText = this.$store.state.title
        }, error => {
            this.homeText = 'Error'
        })
    },
    methods: {
    },
    metaInfo: {
        title: 'My Awesome Webapp',
        meta: [
            { charset: 'utf-8' },
            {
                'vmid': 'og:description',
                'property': 'og:description',
                'content': 'Test description'
            }
        ]
    }
}
</script>