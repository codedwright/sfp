<template>
  <div class="grid">
    <Movies v-if="moviesArray" class="movies" :movies="moviesArray.results" :title="title"></Movies>
    <nav v-if="moviesArray" class="pagination">
      <a @click="page = 1" class="pagination__link">First</a>
      <a v-if="previousPage" @click="page = previousPage" href="" class="pagination_link">{{ previousPage }}</a>
      <a class="pagination__link pagination__link--current">{{ moviesArray.page }}</a>
      <a v-if="nextPage" @click="page = nextPage" class="pagination__link">{{ nextPage }}</a>
      <a @click="page = moviesArray.total_pages" class="pagination__link">Last</a>
    </nav>
  </div>
</template>

<script>
  import Movies from "@/components/Movies";
  import axios from 'axios'

export default {
  name: 'Grid',
  props: {
    genre: Number,
    title: String
  },
  data () {
    return {
      moviesArray: null,
      previousPage: null,
      page: 1,
      nextPage: 2
    }
  },
  components: {
    'Movies': Movies,
  },
  mounted() {
    this.moviesRequest()
  },
  methods: {
    moviesRequest: async function () {
      await axios.get(`https://api.themoviedb.org/3/discover/movie?with_genres=${this.genre}&page=${this.page}`, {
        headers: {
          authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4MzkyZDU4ODM2ZmMxMTdhZTkyZWViZjhhYjVkN2M1OCIsInN1YiI6IjVmMDQ4ZGE5MjBhZjc3MDAzOGU2ODNjNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.sP0KrMGnLu1Tad0eh-vg28lcdo0-Db-wShHNYuu-k_o'
        }
      }).then(response => (this.moviesArray = response.data))
    }
  },
  watch: {
    genre() {
      this.page = 1
      this.moviesRequest()
    },
    page() {
      this.moviesRequest()
    },
    moviesArray() {
      this.previousPage = this.moviesArray.page - 1 !== 0 ? this.moviesArray.page - 1 : null;
      this.nextPage = this.moviesArray.page + 1 > this.moviesArray.total_pages ? null : this.moviesArray.page + 1
    }
  }
}
</script>

<style lang="scss" scoped>
  .grid{
    position: relative;
    display: flex;
    flex-direction: column;
    flex: 0 0 80%;
    max-width: 1160px;
  }
  .pagination {
    margin: 1.5rem 2rem;
    display: flex;
    justify-content: flex-end;
    &__link {
      border: 0;
      border-radius: .5rem;
      padding: .3rem 1.1rem;
      margin: 0 .8rem;
      min-width: 3rem;
      line-height: 4rem;
      font-weight: 400;
      font-size: 1.5rem;
      color: $blue-grey;
      background-color: $light-gray;
      text-decoration: none;
      text-align: center;
      &--current {
        background-color: $green;
        color: #fff;
      }
    }
  }
</style>
