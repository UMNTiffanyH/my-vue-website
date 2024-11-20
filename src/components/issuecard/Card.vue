<script setup>

import book_data from "../../book_data.js";
import router from "../../router.js";

defineProps( {
  title: {
    type: String,
    required: true
  },

  genre: {
    type: String,
    required: true
  },

  issuenumber: {
    type: String,
    required: false,
    default: '#01'
  },

  summary: {
    type: String,
    required: false,
  },

  cover:{
    type: Object,
    required: true,
  }
})

const goToStoryDetails = (id) => {
  router.push({
    name: 'StoryDetails',
    params: {
      id: id
    },
  })
}

</script>

<template>
  <section class="card">

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
      .title, .number {
      font-weight: bold;
    }

    .genre {
      font-weight: lighter;
    }

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

  /* desktop */
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

/*     <div class="cover">
      <img :src="book_data.cover" :alt="title(book_data)"/>
    </div>
    <section class = "information">
      <h4 v-text="title(book_data)"/>
      <p>number: {{ book_data.number }}</p>
      <p>genre: {{ book_data.genre }}</p>

      <aside>
        <div>{{summary}}</div>
      </aside>
    </section>

</style>