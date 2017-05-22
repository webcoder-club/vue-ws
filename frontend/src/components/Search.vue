<template>
    <div class="field has-addons">
        <p class="control">
            <input v-model="query" class="input" type="text" placeholder="Filter">
        </p>
        <p class="control">
            <a class="button is-primary" v-on:click="search">
                Search
            </a>
        </p>
    </div>
</template>

<script>
    export default {
        name: 'search',
        data() {
            return {
                query: ''
            }
        },
        methods: {
            search() {
                Event.$emit('search', this.query);
            }
        }
    }
</script>
