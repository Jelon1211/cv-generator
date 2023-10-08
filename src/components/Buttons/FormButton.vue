<script setup lang="ts">
import { defineProps, defineEmits } from "vue";

const props = defineProps(["buttonText"]);
const emit = defineEmits(["button-clicked"]);

const handleClick = () => {
  emit("button-clicked");
};
</script>

<template>
  <div>
    <button @click="handleClick">{{ buttonText }}</button>
  </div>
</template>
