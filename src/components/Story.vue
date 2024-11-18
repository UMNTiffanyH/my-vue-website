<script setup>
import book_data from "../book_data.js";
import PrimaryTemplate from "../templates/PrimaryTemplate.vue";
import {useRoute, useRouter} from "vue-router";
import {onMounted} from "vue";

const route = useRoute();
const router = useRouter();
const paramId = route.params.id;
const book = book_data.data.filter(book => book.id === paramId)[0]

onMounted(() => {
  if (!book) {
    router.push ({
      name:'Home'
    })
  }
})
</script>

<template>
<primary-template v-if="book">
  <h1>{{book.title}}</h1>

</primary-template>
</template>

<style scoped>

</style>