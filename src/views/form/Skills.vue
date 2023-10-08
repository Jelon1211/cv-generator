<script setup lang="ts">
import { ref } from "vue";
import FormInput from "../../components/Buttons/FormInput.vue";
import FormButton from "../../components/Buttons/FormButton.vue";

const skills = ref([""]);

const addSkill = () => {
  skills.value.push("");
};
</script>

<template>
  <div>
    <div v-for="(skill, index) in skills">
      <label class="font-bold" for="skill">Skill: </label>
      <FormInput
        :modelValue="skills[index]"
        @update:modelValue="(val: string) => (skills[index] = val)"
      />
    </div>
    <FormButton buttonText="+" @button-clicked="addSkill" />
  </div>
</template>
