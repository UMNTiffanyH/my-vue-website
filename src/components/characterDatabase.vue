<script setup>
import PrimaryTemplate from "../templates/PrimaryTemplate.vue";
defineProps( {
  data: {
    name: String,
    required: true
  }
})
</script>

<template>
  <primary-template>
    <div class="content">
      <div class ="explain">
        <h1>CHARACTER DATABASE</h1>
        <p>Losing track on who is who? Everyone is the main character in their own story, some more than others. Take a look to take a further in depth look into these characters. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      </div>

      <h1> Golden Collective </h1>
      <section class="shelf">
        <div class="character">
          <img :src="data.headshot"/>
          <h4>{{ data.name }} {{ data.alias }}</h4>
        </div>
      </section>
    </div>
  </primary-template>
</template>

<style scoped>
.character {
  display: flex;
  min-height: 100px;
  width: 100%;
  border: 1px solid lightblue;
  border-radius: 10px;
  padding: 0.5rem;
  margin: 0.5rem;
  background-color: white;
  }

  &:hover {
    border-color: black;
    cursor: pointer;
  }

  /* tablet viewports */
  @media (width >= 600px) {
    section.card {
      display: flex;
      flex-flow: wrap row;
    }
  }


</style>