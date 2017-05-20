// Думаю такие штуки можно самим и не писать.
Vue.component('message', {
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

let app = new Vue({
    el: '#app',
    data: {
        message: 'Hello VueJS, Bulma, NodeJS!'
    }
});