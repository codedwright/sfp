<template>
  <div id="app" >
    <nav class="navbar">
      <button class="navbar_menu" @click="open = !open">&#9776;</button>
      <Genres class="genres" :open="open" @changeGenre="changeGenre" @closeDrawer="closeDrawer"></Genres>
    </nav>
    <Grid class="grid" :genre="genre" :title="title"></Grid>
  </div>
</template>

<script>
import Grid from '@/components/Grid.vue';
import Genres from "@/components/Genres";

export default {
  name: 'App',
  components: {
    'Grid': Grid,
    'Genres': Genres
  },
  data() {
    return {
      genre: 28,
      title: 'Action',
      open: false
    }
  },
  methods: {
    changeGenre: function(genre) {
      this.genre = genre.id;
      this.title = genre.name;
    },
    closeDrawer(){
      this.open = false
    }
  }
}
</script>

<style lang="scss">
html, body {
  padding: 0;
  margin: 0;
  font-size: 10px;
  @media only screen and (min-width: 1400px) { // since you only specified the grid itself
    max-width: 1400px;
    margin: 0 auto;
  }
}
h1 {
  font-size: 3.5rem;
  margin: 2.9rem 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: black;
  @media only screen and (min-width: 600px) {
    display: flex;
  }
  box-sizing: border-box;
}
.navbar {
  position: sticky;
  min-height: 4rem;
  box-shadow: 0 0.5rem 1rem rgba(0,0,0,.05), inset 0 -1px 0 rgba(0,0,0,.1);
  z-index: 2;
  top: 0;
  left: 0;
  background-color: white;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  @media only screen and (min-width: 600px) {
    position: relative;
    box-shadow: none;
  }
  &_menu {
    @media only screen and (min-width: 600px) {
      display: none
    }
  }
}
  button {
    cursor: pointer;
    margin: 1.25rem;
    color: $blue-grey;
    display: inline-block;
    font-weight: 400;
    text-align: center;
    vertical-align: middle;
    user-select: none;
    background-color: transparent;
    border: 1px solid $blue-grey;
    padding: .375rem .75rem;
    font-size: 1rem;
    border-radius: .25rem;
    text-transform: none;
}
button,
a {
  -webkit-tap-highlight-color: rgba(0,0,0,0);
  user-select: none;
  &:focus {
    outline: none;
  }
}
</style>
