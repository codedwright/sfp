<template>
    <div class="movies">
        <h1>{{ title }} Movies </h1>
        <div class="movies__listing">
            <div :key="movie.id" v-for="movie in movies" class="card">
                <img class="card__img" :src="'https://image.tmdb.org/t/p/w500' + movie.poster_path" alt="">
                <h2 class="card__title">{{ movie.original_title }}</h2>
                <small class="card__average-rating">Average Rating: {{ movie.vote_average }}</small>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Movies",
        props: {
            movies: Array,
            title: String
        }
    }
</script>

<style lang="scss" scoped>
    .movies {
        position: relative;
        width: 100%;
        h1 {
            flex: 0 0 calc(100% - 34px);
            max-width: calc(100% - 34px);
            margin-left: auto;
            margin-right: auto;
            text-align: left;
            @media only screen and (min-width: 600px) {
                flex: 0 0 calc(100% - 130px);
                max-width: calc(100% - 130px);
            }
            @media only screen and (min-width: 900px) {
                flex: 0 0 calc(100% - 50px);
                max-width: calc(100% - 50px);
            }
        }
        &__listing {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
        }
        .card {
            position: relative;
            display: flex;
            flex-direction: column;
            flex: 0 0 calc(50% - 32px); // added extra space
            max-width: calc(50% - 32px);
            word-wrap: break-word;
            background-clip: border-box;
            border: 1px solid rgba(0,0,0,.125);
            border-radius: .25rem;
            margin: 0 15px 15px;
            @media only screen and (min-width: 600px) {
                flex: 0 0 calc(50% - 80px); // added extra space
                max-width: calc(50% - 80px);
            }
            @media only screen and (min-width: 900px) {
                flex: 0 0 calc(25% - 40px); // added extra space
                max-width: calc(25% - 40px);
            }
            &__img {
                border-top-left-radius: calc(.25rem - 1px);
                border-top-right-radius: calc(.25rem - 1px);
                flex-shrink: 0;
                width: 100%;
            }
            &__title {
                font-size: 2.4rem;
                margin-bottom: 0;
            }
            &__average-rating {
                font-size: 1.6rem;
                margin: .8rem;
            }
        }
    }
</style>