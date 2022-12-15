<script setup>
import HeaderComp from "@/components/templates/HeaderComp.vue";
</script>

<template>
  <HeaderComp />
  <RouterView />
</template>

<style>
@import "@/assets/base.css";
@import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');

#app {
  max-width: auto;
  margin: 0 auto;
  font-family: 'Poppins', sans-serif;
  /* padding: 2rem; */
  height: 100vh;
  background-color: white;
  font-weight: normal;
}

</style>
