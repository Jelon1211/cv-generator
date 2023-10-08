<script setup lang="ts">
import { ref } from "vue";
import FormInput from "../../components/Buttons/FormInput.vue";
import FormButton from "../../components/Buttons/FormButton.vue";

const education = ref([{ place: "", dateFrom: "", dateTo: "" }]);

const addEducation = () => {
  education.value.push({ place: "", dateFrom: "", dateTo: "" });
};

const removeEducation = (index: number) => {
  education.value.splice(index, 1);
};
</script>

<template>
  <div>
    <div v-for="(educationDetails, index) in education" :key="index">
      <h4>Education</h4>
      <label class="font-bold" for="company">Place:</label>
      <FormInput
        :modelValue="educationDetails.place"
        @update:modelValue="(val: string) => (educationDetails.place = val)"
      />
      <FormButton
        buttonText="- Remove Education"
        @button-clicked="removeEducation(index)"
      />

      <div v-if="educationDetails.place">
        <label for="dateFrom">Date from:</label>
        <FormInput
          :modelValue="educationDetails.dateFrom"
          type="date"
          @update:modelValue="(val: string) => (educationDetails.dateFrom = val)"
        />
        <label for="dateTo">Date to:</label>
        <FormInput
          :modelValue="educationDetails.dateTo"
          type="date"
          @update:modelValue="(val: string) => (educationDetails.dateTo = val)"
        />
      </div>
    </div>
    <FormButton
      buttonText="+ Add Another Education"
      @button-clicked="addEducation"
    />
  </div>
</template>
