<script setup lang="ts">
import { ref } from "vue";
import FormInput from "../../components/Buttons/FormInput.vue";
import FormButton from "../../components/Buttons/FormButton.vue";

const companies = ref([
  { company: "", dateFrom: "", dateTo: "", duties: [""] },
]);

const addCompany = () => {
  companies.value.push({ company: "", dateFrom: "", dateTo: "", duties: [""] });
};

const removeCompany = (index: number) => {
  companies.value.splice(index, 1);
};

const removeDuty = (companyIndex: number, dutyIndex: number) => {
  companies.value[companyIndex].duties.splice(dutyIndex, 1);
};

const addDuty = (index: number) => {
  companies.value[index].duties.push("");
};
</script>

<template>
  <div>
    <div v-for="(companyDetails, index) in companies" :key="index">
      <h4>Experience</h4>
      <label class="font-bold" for="company">Company:</label>
      <FormInput
        :modelValue="companyDetails.company"
        @update:modelValue="(val: string) => (companyDetails.company = val)"
      />
      <FormButton
        buttonText="- Remove Company"
        @button-clicked="removeCompany(index)"
      />

      <div v-if="companyDetails.company">
        <label for="dateFrom">Date from:</label>
        <FormInput
          :modelValue="companyDetails.dateFrom"
          type="date"
          @update:modelValue="(val: string) => (companyDetails.dateFrom = val)"
        />
        <label for="dateTo">Date to:</label>
        <FormInput
          :modelValue="companyDetails.dateTo"
          type="date"
          @update:modelValue="(val: string) => (companyDetails.dateTo = val)"
        />
        <label>Duties:</label>
        <div
          v-for="(duty, dutyIndex) in companyDetails.duties"
          :key="dutyIndex"
        >
          <FormInput
            :modelValue="companyDetails.duties[dutyIndex]"
            @update:modelValue="(val: string) => (companyDetails.duties[dutyIndex] = val)"
          />
          <FormButton
            buttonText="- Remove Duty"
            @button-clicked="removeDuty(index, dutyIndex)"
          />
        </div>
        <FormButton buttonText="+ Add Duty" @button-clicked="addDuty(index)" />
      </div>
    </div>
    <FormButton
      buttonText="+ Add Another Company"
      @button-clicked="addCompany"
    />
  </div>
</template>
