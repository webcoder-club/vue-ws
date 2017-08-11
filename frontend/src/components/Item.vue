<template>
    <div class="column is-one-third">
        <div class="card">
            <div class="card-image">
                <figure class="image is-4by3">
                    <img :src=imageSrc alt="Image">
                </figure>
            </div>
            <div class="card-content">
                <div class="media">
                    <div class="media-content">
                        <p class="title is-4">{{ title }}</p>
                        <p class="subtitle is-6">{{ category }}</p>
                    </div>
                </div>

                <div class="content">
                    {{ text }} - {{ title }} for <span class="has-text-info">{{ price }}$</span>.
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'item',
        props: ['title', 'price', 'text', 'category', 'query', 'image'],
        data() {
            return {
                imageSrc: `./images/${this.image}`
            }
        }
    }
</script>
