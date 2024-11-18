<script setup>

import Card from "../issuecard/Card.vue";
import book_data from '../../book_data.js';
</script>

<template>
  <body>
  <div class="shelf">
  <div class="Title">Main Arcs</div>

  <div class="Description">Stories following the main plot</div>

  <div class="cards">
    <div v-fore="(title) in book_data" :key="index">
      {{ book.title }}
    </div>
    <card title="Bolt and the Raging Storm"
          genre="Action/ Drama"
          summary="summary"/>

    <card title="Iron Maiden"
          genre="Sci Fi/ Cyberpunk"
          summary="summary"/>

    <card title="Sketch: The Homegrown Hero"
          genre="Modern Fantasy/ Supernatural/ "
          summary="summary"/>
  </div>
  </div>
  </body>
</template>

<style scoped>
body {
  display:flex;
}

.cards {
  display: flex;
  flex-direction: row;
  gap: 1rem;
}
</style>