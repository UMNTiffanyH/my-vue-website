<script setup>
import PrimaryTemplate from "../templates/PrimaryTemplate.vue";


</script>

<template>
  <primary-template>
    <div class="content">
      <div class ="explain">
        <h1>CHARACTER DATABASE</h1>
        <p>Losing track on who is who? Everyone is the main character in their own story, some more than others. Take a look to take a further in depth look into these characters. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      </div>

      <h1> Golden Collective </h1>
      <div class="character">
        <character name="Bolt and the Raging Storm"
              alias="Action/ Drama"
              age="#01"
              alignment="summary"/>
        <character name="Bolt and the Raging Storm"
              alias="Action/ Drama"
              age="#01"
              alignment="summary"/>
        <character name="Bolt and the Raging Storm"
              alias="Action/ Drama"
              age="#01"
              alignment="summary"/>
      </div>
    </div>
  </primary-template>
</template>

<style scoped>
.character {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    border-bottom: white solid 2px;

    }

</style>