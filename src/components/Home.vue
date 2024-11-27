<script setup>

import PrimaryTemplate from "../templates/PrimaryTemplate.vue";
import Card from "./issuecard/Card.vue";
import book_data from "../book_data.js";
import Shelf from "./common/Shelf.vue";
import ShelfByType from "./common/ShelfByType.vue";

</script>

<template>
  <primary-template>
    <div class="content">
      <div class="explain">
        <h1>Welcome to Xerno!</h1>
        <p>Xerno is an indie creative database that takes inspiration from hero
          comics, modern manga, tv shows, and many other forms of media. This is
          an unofficial, collaborative indie work made by a team of writers and
          artists who are doing this as a passion project, with the sole purpose
          of creating enjoying stories. Thank you!</p>
      </div>

      <h1> Main Arcs </h1>

      <shelf-by-type :type="'series'"/>

      <h1> Solo Comics </h1>

      <shelf-by-type :type="'standalone'"/>

      </div>

  </primary-template>
</template>

<style scoped>

</style>