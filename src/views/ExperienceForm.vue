<script setup lang="ts">
import { ref } from "vue";

const name = ref("");
const personalInfo = ref({
  mobile: "",
  email: "",
  linkedin: "",
  github: "",
  additionalInfo: "",
});
const companies = ref([
  { company: "", dateFrom: "", dateTo: "", duties: [""] },
]);
const education = ref([{ place: "", dateFrom: "", dateTo: "" }]);
const skills = ref([""]);
const languages = ref([""]);

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

const addEducation = () => {
  education.value.push({ place: "", dateFrom: "", dateTo: "" });
};

const removeEducation = (index: number) => {
  education.value.splice(index, 1);
};

const addLanguage = () => {
  languages.value.push("");
};

const addSkill = () => {
  skills.value.push("");
};

const submitForm = () => {
  console.log("Companies: ", companies);
};
</script>

<template>
  <div class="experience-form">
    <h2>Share Your Details</h2>
    <form @submit.prevent="submitForm">
      <div class="input-group">
        <label class="font-bold" for="name">Name:</label>
        <input class="border border-sky-500" type="text" v-model="name" />
      </div>
      <div class="input-group">
        <label class="font-bold" for="name">Personal info:</label>
        <input
          class="border border-sky-500"
          type="text"
          v-model="personalInfo.mobile"
          placeholder="mobile no"
        />
        <input
          class="border border-sky-500"
          type="text"
          v-model="personalInfo.email"
          placeholder="email"
        />
        <input
          class="border border-sky-500"
          type="text"
          v-model="personalInfo.linkedin"
          placeholder="linkedin"
        />
        <input
          class="border border-sky-500"
          type="text"
          v-model="personalInfo.github"
          placeholder="github"
        />
        <input
          class="border border-sky-500"
          type="text"
          v-model="personalInfo.additionalInfo"
          placeholder="additional info"
        />
      </div>
      <div>
        <div v-for="(companyDetails, index) in companies" :key="index">
          <h4>Experience</h4>
          <label class="font-bold" for="company">Company:</label>
          <input
            class="border border-sky-500"
            type="text"
            v-model="companyDetails.company"
          />
          <button type="button" @click="removeCompany(index)">
            - Remove Company
          </button>

          <div v-if="companyDetails.company">
            <label for="dateFrom">Date from:</label>
            <input
              class="border border-sky-500"
              type="date"
              v-model="companyDetails.dateFrom"
            />
            <label for="dateTo">Date to:</label>
            <input
              class="border border-sky-500"
              type="date"
              v-model="companyDetails.dateTo"
            />
            <label>Duties:</label>
            <div
              v-for="(duty, dutyIndex) in companyDetails.duties"
              :key="dutyIndex"
            >
              <input
                class="border border-sky-500"
                type="text"
                v-model="companyDetails.duties[dutyIndex]"
              />
              <button type="button" @click="removeDuty(index, dutyIndex)">
                - Remove Duty
              </button>
            </div>
            <button type="button" @click="addDuty(index)">+ Add Duty</button>
          </div>
        </div>
        <button type="button" @click="addCompany">+ Add Another Company</button>
      </div>
      <div>
        <div v-for="(educationDetails, index) in education" :key="index">
          <h4>Education</h4>
          <label class="font-bold" for="company">Place:</label>
          <input
            class="border border-sky-500"
            type="text"
            v-model="educationDetails.place"
          />
          <button type="button" @click="removeEducation(index)">
            - Remove Education
          </button>

          <div v-if="educationDetails.place">
            <label for="dateFrom">Date from:</label>
            <input
              class="border border-sky-500"
              type="date"
              v-model="educationDetails.dateFrom"
            />
            <label for="dateTo">Date to:</label>
            <input
              class="border border-sky-500"
              type="date"
              v-model="educationDetails.dateTo"
            />
          </div>
        </div>
        <button type="button" @click="addEducation">
          + Add Another Education
        </button>
      </div>
      <div>
        <div v-for="(language, index) in languages">
          <label class="font-bold" for="skill">Languages: </label>
          <input
            class="border border-sky-500"
            type="text"
            v-model="languages[index]"
          />
        </div>
        <button type="button" @click="addLanguage">+</button>
      </div>
      <div>
        <div v-for="(skill, index) in skills">
          <label class="font-bold" for="skill">Skill: </label>
          <input
            class="border border-sky-500"
            type="text"
            v-model="skills[index]"
          />
        </div>
        <button type="button" @click="addSkill">+</button>
      </div>
      <div>
        <button type="submit">Submit</button>
      </div>
    </form>
  </div>
</template>
