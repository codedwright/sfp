<template>
    <div class="genres" :class="{'genres--open': open}">
        <button class="close" @click="closeDrawer">x</button>
        <h1>Genres</h1>
        <a
            :key="genre.id"
            class="genres__list-item"
            :class="{'genres_list-item--active': selectedGenre === genre.id}"
            @click="changeGenre(genre)"
            v-for="genre in genresArray">
            {{ genre.name }}
        </a>
    </div>
</template>

<script>
    import axios from "axios";

    export default {
        name: "Genres",
        props: ['open'],
        data () {
            return {
                genresArray: [],
                selectedGenre: 28
            }
        },
        async mounted() {
            await axios.get('https://api.themoviedb.org/3/genre/movie/list', {
                headers: {
                    authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4MzkyZDU4ODM2ZmMxMTdhZTkyZWViZjhhYjVkN2M1OCIsInN1YiI6IjVmMDQ4ZGE5MjBhZjc3MDAzOGU2ODNjNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.sP0KrMGnLu1Tad0eh-vg28lcdo0-Db-wShHNYuu-k_o'
                }
            }).then(response => (this.genresArray = response.data.genres))
        },
        methods: {
            changeGenre(genre) {
                this.$emit('changeGenre', genre);
                this.$emit('closeDrawer');
                this.selectedGenre = genre.id;
            },
            closeDrawer() {
                this.$emit('closeDrawer');
            }
        },
        computed: {
            isActive: function(id) {
                console.log(id);
                return id === this.selectedGenre;
            }
        }
    }
</script>

<style lang="scss" scoped>
    .close {
        position: absolute;
        top: 15px;
        right: 20px;
        @media only screen and (min-width: 900px) {
            display: none
        }
    }
    .genres {
        transition: 1s;
        width: 0;
        height: 100%;
        position: fixed;
        top: 0;
        left: 0;
        background-color: white;
        overflow-x: hidden;
        z-index: 1;
        * {
            transition: 1.5s ease-out;
            opacity: 0;
        }
        @media only screen and (min-width: 900px) {
            position: -webkit-sticky;
            position: sticky;
            top: 0;
            height: auto;
            width: 100%;
            * {
                opacity: 1;
            }
        }
        a {
            font-size: 2.5rem;
        }
        &--open {
            width: 100%;
            * {
                opacity: 1;
            }
        }
        &__list-item {
            color: $blue-grey;
            background-color: $light-gray;
            border-radius: .25rem;
            display: block;
            padding: .5rem 1rem;
            margin: .25rem;
            text-decoration: none;
            @media only screen and (min-width: 900px) {
                text-align: left;
            }
            &--active{
                color: $light-gray;
                background-color: $green;
            }
        }
    }
</style>