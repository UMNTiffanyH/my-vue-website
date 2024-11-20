<script setup>

import Card from "./issuecard/Card.vue";
import PrimaryTemplate from "../templates/PrimaryTemplate.vue";
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

      <h1> Current Arc </h1>
      <div class="cards">
        <card title="Bolt and the Raging Storm"
              genre="Action/ Drama"
              issuenumber="#01"
              summary="summary"/>

        <card title="Iron Maiden"
              genre="Sci Fi/ Cyberpunk"
              issuenumber="#01"
              summary="summary"/>

        <card title="Sketch: Homegrown Hero"
              genre="Modern Fantasy/ Supernatural"
              issuenumber="#01"
              summary="summary"/>
      </div>
    </div>
  </primary-template>
</template>

<style scoped>

</style>