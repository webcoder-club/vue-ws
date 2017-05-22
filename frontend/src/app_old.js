Event = new Vue();

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
