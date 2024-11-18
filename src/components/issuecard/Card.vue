<script setup>

import book_data from "../../book_data.js";

defineProps( {
  title: {
    type: String,
    required: true
  },

  genre: {
    type: String,
    required: true
  },

  issuenumber: {
    type: String,
    required: false,
    default: '#01'
  },

  summary: {
    type: String,
    required: false,
  },

  cover:{
    type: Object,
    required: true,
  }
})

</script>

<template>
  <section class="card">
    <div class="cover"></div>
    <div class="title">{{ title }}</div>
      <span class="number">{{ issuenumber }}</span>

    <aside>
      <div>{{ genre }}</div>
      <div class="summary">{{summary}}</div>
    </aside>
  </section>

</template>

<style scoped>
section.card {
  display: flex;
  min-height: 100px;
  width: 100%;
  border: 1px solid lightblue;
  border-radius: 10px;
  padding: 0.5rem;
  margin: 0.5rem;
  background-color: white;

  .summary {
    padding: 0.5rem;
    font-size: 12px;
  }

  &:hover {
    border-color: black;
    cursor: pointer;
  }

  .cover {
    min-width: 100px;
    min-height: 150px;

    img {
      width: 100%;
      border-width: 0 10px 0 0;
      border-style: solid;
      border-color: white;
    }
  }

  /* desktop */
  @media (width >= 600px) {

  }

  /*desktop viewports*/
  @media (width >= 800px) {

  }
}


</style>