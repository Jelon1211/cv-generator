<script setup lang="ts">
import { ref } from "vue";
import FormInput from "../../components/Buttons/FormInput.vue";
import FormButton from "../../components/Buttons/FormButton.vue";

const languages = ref([""]);

const addLanguage = () => {
  languages.value.push("");
};
</script>

<template>
  <div>
    <div v-for="(language, index) in languages">
      <label class="font-bold" for="skill">Languages: </label>
      <FormInput
        :modelValue="languages[index]"
        @update:modelValue="(val: string) => (languages[index] = val)"
      />
    </div>
    <FormButton buttonText="+" @button-clicked="addLanguage" />
  </div>
</template>
