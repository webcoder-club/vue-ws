<template>
    <div class="column is-one-third">
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
                    {{ text }} - {{ title }} for <a class="has-text-info">{{ price }}$</a>.
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'item',
        props: ['title', 'price', 'text', 'category', 'seller', 'query'],
    }
</script>
