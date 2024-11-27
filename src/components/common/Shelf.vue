<script setup>
import DynamicCard from "../issuecard/DynamicCard.vue";

defineProps({
  items: {
    type: Array,
    required: true
  },
  title: {
    type: Array,
    required: true
  }
})

import book_data from "../../book_data.js";
</script>

<template>
  <section class="shelf">
    <h4 v-text="title"/>
    <p v-for="(item, index) in items" :key="index">
      <dynamic-card :data="book_data.data[item]"/>
    </p>
  </section>
</template>

<style scoped>
section.shelf {
  display: flex;
  justify-content: space-around;
  border-bottom: white solid 2px;
  margin-bottom: 0.5rem;
}

p {
  display: flex;
  min-height: 100px;
  width: 100%;
  border: 1px solid lightblue;
  border-radius: 10px;
  padding: 0.5rem;
  margin: 0.5rem;
  background-color: white;
}

</style>