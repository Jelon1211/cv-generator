<script setup lang="ts">
import FormButton from "../components/Buttons/FormButton.vue";
import PersonalInfo from "./form/PersonalInfo.vue";
import Experience from "./form/Experience.vue";
import Education from "./form/Education.vue";
import Languages from "./form/Languages.vue";
import Skills from "./form/Skills.vue";

const submitForm = () => {
  console.log("Sent");
};
</script>

<template>
  <div class="experience-form">
    <h2>Share Your Details</h2>
    <form @submit.prevent="submitForm">
      <PersonalInfo />
      <Experience />
      <Education />
      <Languages />
      <Skills />
      <div>
        <FormButton type="submit" buttonText="Submit" />
      </div>
    </form>
  </div>
</template>
