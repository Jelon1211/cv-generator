<script setup lang="ts">
import { defineProps, defineEmits } from "vue";

const {
  modelValue,
  type = "text",
  placeholder,
} = defineProps(["modelValue", "type", "placeholder"]);
const emit = defineEmits(["update:modelValue"]);

const updateValue = (event: Event) => {
  const target = event.target as HTMLInputElement;
  emit("update:modelValue", target.value);
};
</script>

<template>
  <input
    class="border border-sky-500"
    :type="type"
    :value="modelValue"
    @input="updateValue($event)"
    :placeholder="placeholder"
  />
</template>
