<script setup>

import {useRouter} from "vue-router";

const router = useRouter()
// import book_data from "../../book_data.js";

defineProps( {
  title: {
    type: String,
    required: true
  },
  genre: {
    type: String,
    required: true
  },
  number: {
    type: String,
    required: false,
    default: '#01'
  },
  summary: {
    type: String,
    required: false,
  },
  cover:{
    type: String,
    required: true,
  }
})

const goToStory = (id) => {
  router.push({
    name: 'Story',
    params: {
      id: id
    },
  })
}

</script>

<template>
  <section class="card">
    <div class="cover">
      <img :src="cover" :alt="title"/>
    </div>
    <section class = "information">
      <h4 v-text="title"/>
      <p>number: {{ number }}</p>
    </section>
  </section>

</template>

<style scoped>
section.card {
  display: flex;
  min-height: 100px;
  width: 100%;
  border: 1px solid lightblue;
  border-radius: 10px;
  padding: 0.5rem;
  margin: 0.5rem;
  background-color: white;

  section.information {
    aside {
      font-size: 12px;
    }
  }

  &:hover {
    border-color: black;
    cursor: pointer;
  }

  .cover {
    min-width: 100px;
    max-width: 150px;
    min-height: 150px;
    max-height: 200px;
    background-color: #888888;

    img {
      width: 100%;
      border-width: 0 10px 0 0;
      border-style: solid;
      border-color: white;
    }
  }

  /* tablet viewports */
  @media (width >= 600px) {
    section.card {
      display: flex;
      flex-flow: wrap row;
    }

  }

  /*desktop viewports*/
  @media (width >= 800px) {
    section.card {
      display: flex;
      flex-flow: wrap row;
    }
  }
}



</style>