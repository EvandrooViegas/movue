<script setup>
import { ref, onBeforeMount, defineAsyncComponent } from "vue"
import MovieList from "../components/MovieList.vue";
const movies = ref([])
const bannerMovie = ref(null)

const AsyncBanner = defineAsyncComponent(() => {
  return import("../components/Banner.vue")
})

const getMovies = async () => {
  movies.value = await fetch("https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US")
  .then(res => res.json())
  .then(res => res.results)
}

function getRandomInt (min, max)  {
  return Math.floor(Math.random() * (max - min) + min)
}     

onBeforeMount(async() => {
  await getMovies() 
  bannerMovie.value = movies.value[getRandomInt(0, movies.value.length - 1)]
})

</script>

<template>
    <AsyncBanner 
    :banner="bannerMovie"
    />
    <MovieList 
    :movies="movies"
    />
</template>