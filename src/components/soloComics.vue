<script setup>
import PrimaryTemplate from "../templates/PrimaryTemplate.vue";
import ShelfByType from "./common/ShelfByType.vue";
</script>

<template>
  <primary-template>
    <div class="content">
      <div class ="explain">
        <h1>SOLO COMICS</h1>
        <p>As opposed to main arcs, solo comics are independant short stories
        that focus on characters outside of the main arcs. These stories help
        further build up the Xernoverse and the people living in that world.</p>
      </div>

      <h1> Solo Comics </h1>
      <shelf-by-type :type="'standalone'"/>

      </div>
  </primary-template>
</template>

<style scoped>

</style>