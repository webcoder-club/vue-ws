<template>
    <div class="field has-addons">
        <p class="control">
            <input v-model="query" class="input" type="text" placeholder="Filter">
        </p>
        <p class="control">
            <a class="button is-info" v-on:click="search">
                Search
            </a>
        </p>
    </div>
</template>

<script>
    export default {
        name: 'search',
        props: {
            Event: {
                type: Object
            }
        },
        data() {
            return {
                query: ''
            }
        },
        methods: {
            search() {
                this.Event.$emit('search', this.query);
            }
        }
    }
</script>
