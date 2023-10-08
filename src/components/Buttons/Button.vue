<script setup>
import { ref } from "vue";
import { defineProps, defineEmits } from "vue";

const props = defineProps(["placeholder", "buttonText"]);
const emit = defineEmits(["update:modelValue", "button-clicked"]);

const inputValue = ref("");

const handleInput = () => {
  emit("update:modelValue", inputValue.value);
};

const handleClick = () => {
  emit("button-clicked", inputValue.value);
};
</script>

<style scoped>
/* Add your styles here */
</style>

<template>
  <div>
    <input
      :placeholder="placeholder"
      v-model="inputValue"
      @input="handleInput"
    />
    <button @click="handleClick">{{ buttonText }}</button>
  </div>
</template>
