<template>
  <button class="px-5 py-2 rounded font-medium" :class="[bg, textColor, hover]" @click="submit">
    <slot />
  </button>
</template>

<script>
export default {
  props: ["bg", "textColor", "hover"],
  methods: {
    submit() {
      this.$emit("onclick");
    }
  }
}
</script>