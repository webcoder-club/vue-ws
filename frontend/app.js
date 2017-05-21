//  todo: Scaffolding here, mb move to separate file?
Event = new Vue();
Vue.component('Message', {
    template: `<article class="message">
            <div class="message-header">
                <p>{{ title }}</p>
                <button class="delete"></button>
            </div>
            <div class="message-body">
                <slot>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum <a>felis venenatis</a> efficitur. Aenean ac <em>eleifend lacus</em>, in mollis lectus. Donec sodales, arcu et sollicitudin porttitor, tortor urna tempor ligula, id porttitor mi magna a neque. Donec dui urna, vehicula et sem eget, facilisis sodales sem.
                </slot>
            </div>
        </article>`,
    props: ['body', 'title'],
});

Vue.component('Search', {
    template: `<div class="field has-addons">
                <p class="control">
                    <input v-model="query" class="input" type="text" placeholder="Filter">
                </p>
                <p class="control">
                    <a class="button is-primary" v-on:click="search">
                        Search
                    </a>
                </p>
            </div>`,
    data() {
        return{
            query: ''
        }
    },
    methods: {
        search() {
            Event.$emit('search', this.query);
        }
    }
});

Vue.component('Bottom', {
    template: `<footer class="footer">
                <div class="container">
                    <div class="content has-text-centered">
                        <p>
                            <strong>VueJS Workshop</strong>.
                        </p>
                        <p>
                            <a class="icon" href="https://github.com/webcoder-club/vue-ws-beginner">
                                <i class="fa fa-github"></i>
                            </a>
                        </p>
                    </div>
                </div>
            </footer>`
});

Vue.component('Item', {
    template: `<div class="column is-one-third">
                <div class="card">
                  <div class="card-image">
                    <figure class="image is-4by3">
                      <img src="http://bulma.io/images/placeholders/1280x960.png" alt="Image">
                    </figure>
                  </div>
                  <div class="card-content">
                    <div class="media">
                      <div class="media-left">
                        <figure class="image is-48x48">
                          <img src="http://bulma.io/images/placeholders/96x96.png" alt="Image">
                        </figure>
                      </div>
                      <div class="media-content">
                        <p class="title is-4">{{ title }}</p>
                        <p class="subtitle is-6">{{ seller }}</p>
                      </div>
                    </div>
                
                    <div class="content">
                      {{ text }} - {{ title }} for <a>{{ price }}$</a>.
                    </div>
                  </div>
                </div>
                </div>`,
    props: ['title', 'price', 'text', 'category', 'seller' ,'query']
})


// todo: Main Application starts here
let app = new Vue({
    el: '#app',
    data: {
        message: 'Goods for sell',
        uploaded: false,
        url: 'http://127.0.0.1:3000/items.json',
        goods: [],
        query: ''
    },
    mounted () {
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
            console.log('Fetch Error :-S', err);
        });
        Event.$on('search',(query) => {
            this.query = query;
        });
    }
});