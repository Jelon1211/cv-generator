<script setup lang="ts">
import { ref } from "vue";

const title = ref("");
const description = ref("");

const submitForm = () => {
  console.log("Title: ", title.value, " - Desctiption: ", description.value);
};
</script>
<template>
  <div class="experience-form">
    <h2>Share Your Experience</h2>
    <form @submit.prevent="submitForm">
      <div class="input-group">
        <label for="title">Title:</label>
        <input
          class="border border-sky-500"
          type="text"
          id="title"
          v-model="title"
        />
      </div>
      <div class="input-group">
        <label for="description">Description:</label>
        <textarea
          class="border border-sky-500"
          id="description"
          rows="5"
          v-model="description"
        ></textarea>
      </div>
      <button type="submit">Submit</button>
    </form>
  </div>
</template>
