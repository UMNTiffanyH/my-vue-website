<script setup>
import {onMounted, ref} from "vue";
import book_data from "../../book_data.js";
import Shelf from "./Shelf.vue";

let filteredBooks = ref([])
let isFiltered = ref(false)

const props = defineProps({
  type: {
    type: String,
    required: true
  }
})

let title = 'All ' + props.type + ' books'

onMounted(() => {
  filteredBooks = book_data.data.filter(book => book.type === props.type)
  isFiltered.value = true;
})
</script>

<template>
  <section class="shelf-by-type" v-if="isFiltered">
    <shelf :items="filteredBooks" :title="title"/>
  </section>

</template>

<style scoped>

</style>