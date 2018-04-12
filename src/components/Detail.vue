<template>
    <div id="detail" v-if="movie">
        <movie-item v-bind:movie="movie.movie"></movie-item>
    </div>
</template>

<script>
  import MovieItem from './MovieItem.vue'

  export default {
    components: {
      MovieItem
    },
    props: ['movies'],
    computed: {
      movie () {
        let movie = this.movies.find(movie => movie.id === this.$route.params.id)
        return movie ? movie : null
      }
    },
    created () {
      console.log(this.$route.params.id)
    },
  }
</script>

<style scoped>

</style>