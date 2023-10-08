<script setup lang="ts">
import { ref } from "vue";
import FormInput from "../../components/Buttons/FormInput.vue";

const name = ref("");
const personalInfo = ref({
  mobile: "",
  email: "",
  linkedin: "",
  github: "",
  additionalInfo: "",
});

expose({
  name,
  personalInfo,
});
</script>

<template>
  <div>
    <div class="input-group">
      <label class="font-bold" for="name">Name:</label>
      <FormInput
        :modelValue="name"
        @update:modelValue="(val: string) => (name = val)"
      />
    </div>
    <div class="input-group">
      <label class="font-bold" for="name">Personal info:</label>
      <FormInput
        :modelValue="personalInfo.mobile"
        type="number"
        @update:modelValue="(val: string) => (personalInfo.mobile = val)"
        placeholder="mobile no"
      />
      <FormInput
        :modelValue="personalInfo.email"
        type="email"
        @update:modelValue="(val: string) => (personalInfo.email = val)"
        placeholder="email"
      />
      <FormInput
        :modelValue="personalInfo.linkedin"
        @update:modelValue="(val: string) => (personalInfo.linkedin = val)"
        placeholder="linkedin"
      />
      <FormInput
        :modelValue="personalInfo.github"
        @update:modelValue="(val: string) => (personalInfo.github = val)"
        placeholder="github"
      />
      <FormInput
        :modelValue="personalInfo.additionalInfo"
        @update:modelValue="(val: string) => (personalInfo.additionalInfo = val)"
        placeholder="additional info"
      />
    </div>
  </div>
</template>
