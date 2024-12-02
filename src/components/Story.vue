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
  <div class="content">
    <div class ="explain">
      <h1>{{ book_data.title }}</h1>
      <p>Issue: {{  book_data.number }}</p>
      <p v-html="book.genre.replace(/\n{2}/g, '</p><p>')"></p>
    </div>
    <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at posuere est, vitae faucibus nisl. Suspendisse viverra leo nec erat fermentum, ut condimentum eros facilisis. Donec a molestie est. Cras id eleifend sem. Ut laoreet nisl non metus tristique, in consequat nisl varius. Maecenas imperdiet metus ac velit ultricies, vel venenatis dolor ornare. Integer a elementum ex. Vivamus et fringilla erat, in convallis odio. </p>
    <p> Aenean bibendum elit ultricies ipsum varius viverra. Curabitur eu interdum quam. Integer finibus enim id quam varius egestas porta non diam. Mauris sagittis blandit mauris sit amet posuere. Maecenas non diam ullamcorper, tincidunt risus vitae, feugiat erat. Cras rhoncus neque orci, at tempor sem maximus ut. Vivamus nec augue dapibus, pharetra felis vitae, fermentum ligula. Mauris vel fringilla nulla. Suspendisse eget fermentum massa. Vestibulum aliquam condimentum nisi ut aliquam.</p>
    <p> Phasellus maximus enim arcu, vitae scelerisque quam vulputate et. Interdum et malesuada fames ac ante ipsum primis in faucibus. Suspendisse ac tempus dui, ac ultricies arcu. Suspendisse a porta ligula. Maecenas ac sodales enim. Donec vehicula suscipit felis. Quisque eleifend suscipit nibh, venenatis vestibulum lorem laoreet quis. Integer rhoncus varius tellus, ac sollicitudin sapien convallis ut.</p>
    <p> Proin facilisis egestas ante, id faucibus lacus maximus a. Etiam a velit velit. Duis placerat quam turpis, quis viverra eros ultricies ac. Donec id consectetur sem, id egestas sapien. Praesent turpis mi, maximus non mauris vitae, faucibus vestibulum eros. Nam vel dictum turpis. Curabitur ultricies tempus risus, a accumsan lectus aliquam vitae.</p>
    <p> Morbi fringilla orci eget erat tincidunt, eu pharetra turpis commodo. Sed placerat scelerisque nunc ut dignissim. Integer rhoncus ex nec tincidunt viverra. Vivamus consequat luctus orci nec venenatis. Mauris vulputate tempor mauris et semper. Quisque faucibus nibh dolor, ac maximus lacus vestibulum vel. Ut scelerisque ut massa elementum convallis.</p>

  </div>
</primary-template>
</template>

<style scoped>

</style>