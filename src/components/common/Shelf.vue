<script setup>
import DynamicCard from "../card/DynamicCard.vue";

defineProps({
  items: {
    type: Array,
    required: true
  },
  title: {
    type: String,
    required: true
  }
})
</script>

<template>
  <section class="shelf">
    <div class="books">
      <dynamic-card class="card" :data="book" v-for="(book, index) in items" :key="index"/>
    </div>
  </section>
</template>

<style scoped>
section.shelf {
  /* Mobile first */
  div.books {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    margin: 0.5rem;
    border-bottom: white solid 2px;
    gap: 1rem;
    padding:0.5rem;

    .card {
      display: flex;
      width: 30%;
      max-width: 200px;
      row-gap: 1rem;
    }
  }
}
</style>