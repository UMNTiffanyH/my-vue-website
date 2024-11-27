<script setup>
import {onMounted, reactive, ref} from "vue";
import book_data from "../../book_data.js";
import Shelf from "./Shelf.vue";

let filteredBooks = ref([])
let isFiltered = ref(false)
let filteredIds = ref([])

const props = defineProps({
  type: {
    type: String,
    required: true
  }
})

onMounted(() => {
   filteredBooks = book_data.data.filter(book => book.type === props.type)

  for(let i = 0; i <= filteredBooks.length; i++) {
    filteredIds.value.push(filteredBooks[i]["id"])
  }

  console.log('filtered books: ', filteredBooks.value)
  console.log('filtered ids: ', filteredIds.value)

  isFiltered.value = true;
})
</script>

<template>
  <section class="shelf-by-type" v-if="isFiltered">
    <p>{{ filteredIds }}</p>
<!--    <shelf :items="filteredIds"/>-->
  </section>

</template>

<style scoped>

</style>