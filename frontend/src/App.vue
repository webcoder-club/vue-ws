<template>
    <div id="app">
        <!-- todo: <Main Application>, remove before workshops -->
        <Top></Top>
        <section class="section">
            <div class="container">
                <h2 class="title is-2">{{ message }}</h2>
                <!-- <Message title="In progress">Content coming soon!</Message> -->
                <Search></Search>
                <div class="columns is-multiline" v-if="goods.length">
                    <Item v-for="item in goods" v-if="~item.title.indexOf(query)" :title="item.title"
                          :seller="item.seller"
                          :price="item.price" :text="item.text" :key="item.id"></Item>
                </div>
                <div v-else>
                    loading...
                </div>
            </div>
        </section>
        <Bottom></Bottom>
        <!-- todo: </Main Application>, remove before workshops -->
    </div>
</template>

<script>
    import Vue from 'vue';
    let Event = new Vue();

    import Bottom from './components/Bottom.vue';
    import Item from './components/Item.vue';
    import Message from './components/Message.vue';
    import Search from './components/Search.vue';
    import Top from './components/Top.vue';

    export default {
        name: 'app',
        components: {
            Bottom,
            Item,
            Message,
            Search,
            Top,
        },
        data() {
            return {
                message: 'Goods for sell',
                uploaded: false,
                url: 'http://127.0.0.1:3000/items.json',
                goods: [],
                query: ''
            }
        },
        mounted() {
            fetch(this.url).then(
                (response) => {
                    if (response.status !== 200) {
                        console.log(response);
                        console.log('Looks like there was a problem. Status Code: ' + response.status);
                        return;
                    }
                    response.json().then((response) => {
                        if (response.items) {
                            this.goods = response.items;
                        } else {
                            this.goods = null;
                        }
                        this.uploaded = true;
                    });
                }
            ).catch(function (err) {
                this.goods = null;
                console.log('Fetch Error :-S ', err);
            });

            Event.$on('search', (query) => {
                this.query = query;
            });
        }
    }
</script>

<style>
    /*
    todo: add some style
    */
</style>
