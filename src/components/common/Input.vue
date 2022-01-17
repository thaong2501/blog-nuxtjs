<template>
  <div class="flex flex-col md:flex-row items-start my-4">
    <label class="w-36"><slot /></label>
    <input
      v-if="controlType === 'input'"
      :type="type"
      class="border border-gray-500 rounded-md px-4 py-1 grow w-full"
      v-bind="$attrs"
      :value="value"
      @input="$emit('input', $event.target.value)"
    />
    <textarea
      v-if="controlType === 'texarea'"
      class="border border-gray-500 rounded-md px-4 py-1 grow w-full"
      cols="30"
      rows="20"
      :value="value"
      @input="$emit('input', $event.target.value)"
    ></textarea>
  </div>
</template>

<script>
export default {
  props: ["controlType", "type", "value"],
};
</script>
