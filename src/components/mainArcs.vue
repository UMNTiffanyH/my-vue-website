<script setup>

import PrimaryTemplate from "../templates/PrimaryTemplate.vue";
import ShelfByTitle from "./common/ShelfByTitle.vue";
</script>

<template>
<primary-template>
  <div class="content">
  <div class ="explain">
    <h1>MAIN ARCS</h1>
    <p>Much like how comic books build up to a grand, overarching narrative or
      superhero movies being connected to a larger cinematic universe, main
    arcs are a series of stories that help build up the main foundation of
    the Xerno universe. Each arc focuses on a different main character as
    they navigate different conflicts happening in the country of Minerva. </p>
  </div>

    <h1> Current Arc </h1>
    <shelf-by-title :title="'Iron Maiden'"/>

    <h1> Bolt and the Raging Storm </h1>
    <shelf-by-title :title="'Bolt and the Raging Storm'"/>

    <h1> All Stars </h1>
    <shelf-by-title :title="'All Stars'"/>

  </div>
</primary-template>
</template>

<style scoped>

</style>